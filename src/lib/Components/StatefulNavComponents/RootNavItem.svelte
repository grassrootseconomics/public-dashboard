<script>

  // imported props
  //   this menu item
  export let menuItem;
  //   function to call to mark this item active in the navContextTree
  // export let markActiveItem;
  export let autofocus = null;

  let active = false;
  let activePartial = false;
  export let setActive = function(trueFalse, urlPathname)
      { active = trueFalse;
      }

  export let setActivePartial = function(trueFalse, urlPathname)
      { activePartial = trueFalse;
      }


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