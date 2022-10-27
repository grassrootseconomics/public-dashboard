<script context="module">

// svelteKit module for current URL
import { page }               from '$app/stores';

// library util for building main navigation context from menuSpec_tree
import { addIDValues }        from "$lib/mainNavTreeUtil.js";

// statefull navigation components. They are somewhat bound to the treeUtil, but the specifics of the
//   binding ("mainMenuContentTree") is defined here, not in the treeUtil module.
import RootNavItem            from "$lib/Components/StatefulNavComponents/RootNavItem.svelte";
import DropDownNavItem        from "$lib/Components/StatefulNavComponents/DropDownNavItem.svelte";
import DropDownNavItem_child  from "$lib/Components/StatefulNavComponents/DropDownNavItem_child.svelte";

// svelte component lifecyle function
//   used to ensure that we highlight the correct menu items when a page is loaded directly 
//   by the addressbar / from an external site
import { onMount } from 'svelte';

</script>


<script>

// definition of the main navigation hierarchy. This can take almost any form
let menuSpec_tree = 
      [
        { 
          "url"               : "/",
          "displayName"       : "Home",
          "displayIcon"       : null,
        },
        { "url"               : "#",
          "displayName"       : "Blockchain",
          "displayIcon"       : null,
          
          "type"              : "dropdown",
          "parentURLFragment" : "/blockchain",
          "dropdownContent"   :
          [ 
            { "url"               : "/viewTxns",
              "displayName"       : "View Txns",
              "displayIcon"       : null,
            }
          ]
        },
        { "url"               : "#",
          "displayName"       : "Tokens",
          "displayIcon"       : null,

          "type"              : "dropdown",
          "parentURLFragment" : "/tokens",
          "dropdownContent"   :
          [
            { "url"               : "/viewTokens",
              "displayName"       : "View CIC Tokens",
              "displayIcon"       : null,
            }
          ]
        },
        { 
          "url"               : "/developerDocumentation",
          "displayName"       : "Developer Documentation",
          "displayIcon"       : null,
        },
      ];

  // create a navigation context around the navigation specification
  let mainMenuTreeContext = 
      { uniqueTreeID            : "mainMenuContentTree", 
        recursionFieldName_list : ["dropdownContent"]
      }
  // process the main navigation hierarchy into a navigation context
  addIDValues(menuSpec_tree, mainMenuTreeContext);

  // this function causes the mainMenuTreeContext to update the current state
  //   which is passed through to the StatefulNavComponents by the statement "menuSpec_tree = menuSpec_tree"
  //   Svelte does reactive component update using static analysis, so this line forces update of state.
  let markActiveItem = 
      (event) =>
      { 
        // debugger;
        let activeItemID = event.target.getAttribute("data-navmenuid");
        mainMenuTreeContext.markTreeItemActive(activeItemID);
        
        menuSpec_tree = menuSpec_tree;
      }
  
  // console.log(menuSpec_tree);
  // console.log($page.url)

  // when this component has been rendered for the first time
  //   this is designed to be put into a SvelteKit +layout.svelte file, which means
  //   it will persist until we deliberately remove that layout from page
	onMount
      ( async () => 
        {
          // look for the first link that matches the current URL
          let mainSiteNavBarRootULElement = document.getElementById("mainSiteNavBarRootULElement");
          let currentMenuItem = mainSiteNavBarRootULElement.querySelector(`[href="${$page.url.pathname}"]`);
          // mark that navTreeContext item as active
          mainMenuTreeContext.markTreeItemActive(currentMenuItem.getAttribute("data-navmenuid"));

          // note - this appears to "take some time" in dev mode, when actually running as a built
          //   svelte component it is almost instant
        }
      );

</script>

<!--  The primary design speficiation here is that the looping and logic structure is defined here in this file
        which allows complex logic over any kind of markup, bootstrap or otherwise
      Nesting logic within components binds the components to the logic. The goal of this tooling is to avoid that.
-->
<nav role="navigation" class="navbar navbar-expand-lg bg-light" aria-label="main navigation">
  <div class="container-fluid">
    <a role="banner" class="navbar-brand" href="/" aria-label="Site Logo">
      <img src="/graphics/ge-logo-175x38.png" alt="Grassroots Economics" width="175">
    </a>
    <button 
        class="navbar-toggler" type="button" 
        data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" 
        
        aria-controls="offcanvasNavbar" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Site Navigation</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul id="mainSiteNavBarRootULElement" class="navbar-nav justify-content-end flex-grow-1 pe-3">
          {#each menuSpec_tree as menuItem (menuItem.mainMenuContentTree.id)}
            {#if menuItem.type === undefined}
              <RootNavItem {menuItem} {markActiveItem} />
            {:else if menuItem.type === "dropdown"}
              <DropDownNavItem {menuItem}>
                {#each menuItem.dropdownContent as subMenuItem (subMenuItem.mainMenuContentTree.id) }
                  <DropDownNavItem_child parentMenuItem={menuItem} menuItem={subMenuItem} {markActiveItem}></DropDownNavItem_child>
                {/each}
              </DropDownNavItem>
            {/if}
          {/each}
        </ul>
      </div>
    </div>
  </div>
</nav>

