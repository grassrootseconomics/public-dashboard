<script context="module">

// svelteKit module for current URL
import { page }               from '$app/stores';

// library util for building main navigation context from menuSpec_tree
import { addIDValues }        from "$lib/treeUtil.js";

// statefull navigation components. They are somewhat bound to the treeUtil, but the specifics of the
//   binding ("mainMenuContentTree") is defined here, not in the treeUtil module.
import RootNavItem            from "$lib/Components/StatefulNavComponents/RootNavItem.svelte";
import DropDownNavItem        from "$lib/Components/StatefulNavComponents/DropDownNavItem.svelte";
import DropDownNavItem_child  from "$lib/Components/StatefulNavComponents/DropDownNavItem_child.svelte";

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
          "url"               : "/testReactivity",
          "displayName"       : "Test Reactivity",
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
  
  // this needs to be changed to be reactive to URL which is loaded when the layout is first active
  // mainMenuTreeContext.markTreeItemActive(0);

  console.log(menuSpec_tree);
  console.log(mainMenuTreeContext);
  console.log($page.url)

</script>

<!--  The primary design speficiation here is that the looping and logic structure is defined here in this file
        which allows complex logic over any kind of markup, bootstrap or otherwise
      Nesting logic within components binds the components to the logic. The goal of this tooling is to avoid that.
-->
<!-- <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="/graphics/ge-logo-175x38.png" alt="Grassroots Economics" width="175">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          {#each menuSpec_tree as menuItem (menuItem.mainMenuContentTree.id)}
            {#if menuItem.type === undefined}
              <RootNavItem {menuItem} {markActiveItem} />
            {:else if menuItem.type === "dropdown"}
              <DropDownNavItem {menuItem}>
                {#each menuItem.dropdownContent as subMenuItem (subMenuItem.mainMenuContentTree.id) }
                  <DropDownNavItem_child {menuItem} {subMenuItem} {markActiveItem}></DropDownNavItem_child>
                {/each}
              </DropDownNavItem>
            {/if}
          {/each}
        </ul>
      </div>
    </div>
  </div>
</nav> -->

