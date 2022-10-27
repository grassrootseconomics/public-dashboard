<script>

  export let menuItem;
  export let subMenuItem;
  export let markActiveItem;
  
  </script>
  
  <li data-bs-dismiss="offcanvas">
    {#if subMenuItem.divider === true}
      <hr class="dropdown-divider" data-navmenuid={subMenuItem.id}>
    {:else}
      <a  
          href="{menuItem.parentURLFragment+subMenuItem.url}"

          bind:this={subMenuItem.mainMenuContentTree.domElement} 
          class="dropdown-item" 
          
          data-navmenuid={subMenuItem.mainMenuContentTree.id}
          data-navmenuparentid={subMenuItem.mainMenuContentTree.parent_id}
          class:active={subMenuItem.mainMenuContentTree.active === true} 
          on:click={markActiveItem}
          >
        {subMenuItem.displayName}
      </a>
    {/if}
  </li>