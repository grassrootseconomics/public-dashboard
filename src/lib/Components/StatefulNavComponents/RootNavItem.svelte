<script>

  // imported props
  //   this menu item
  export let menuItem;
  //   function to call to mark this item active in the navContextTree
  // export let markActiveItem;
  export let autofocus = null;

  let active = false;
  let activePartial = false;
  
  // this function is called by our navUtil in the layout code
  export let setActive = function(trueFalse, urlPathname)
      { active = trueFalse;
      }

  // this function isnt used as of yet.
  export let setActivePartial = function(trueFalse, urlPathname)
      { activePartial = trueFalse;
      }


  // this value is used in our CSS rules to allow the developer to turn the CSS
  //   response to being the active page on and off.
  // you can also look at the dev-tools element browser to see the changes in the DOM in realtime when the page is changed
  //   what is very smooth about svelte is that the pages dont actually reload. this is done very well.
  //   its super efficient.
  export let cssAdded = false;


      // on:click={markActiveItem}
</script>


<svelte:options accessors={true}></svelte:options>
<li class="nav-item">
    <a  
        href="{menuItem.url}"
    
        bootstrap=""
        class="nav-link" 
        {active}
        class:active={activePartial}
        class:cssAdded={cssAdded}
        aria-current={active ? "page":null}

        navTreeContextManagement=""
        data-navmenuid={menuItem.url}
        >
      {menuItem.displayName} cssAdded: {cssAdded}
    </a>
</li>

<style>

a.cssAdded[active="true"]
{ background-color: rgba(0,0,0,0.2);
}

</style>