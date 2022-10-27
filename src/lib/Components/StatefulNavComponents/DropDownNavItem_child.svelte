<script>

  // imported props
  //   parent menu item
  export let parentMenuItem;
  //   this menu item
  export let menuItem;
  //   function to call to mark this item active in the navContextTree
  export let markActiveItem;
  
  </script>
  
  <li data-bs-dismiss="offcanvas">
    {#if menuItem.divider === true}
      <hr class="dropdown-divider" data-navmenuid={menuItem.id}>
    {:else}
      <a  
          href="{parentMenuItem.parentURLFragment+menuItem.url}"
          
          bootstrap=""
          class="dropdown-item"
          class:active={menuItem.mainMenuContentTree.active === true}
          
          navTreeContextManagement=""
          data-navmenuid={menuItem.mainMenuContentTree.id}
          data-navmenuparentid={menuItem.mainMenuContentTree.parent_id}
          on:click={markActiveItem}

          possiblyFun=""
          bind:this={menuItem.mainMenuContentTree.domElement} 
          >
        {menuItem.displayName}
      </a>
    {/if}
  </li>