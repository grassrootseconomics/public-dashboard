<script>

  export let menuItem;
  // export let markActiveItem;
  
  </script>
  
  
  
  <li class="nav-item dropdown">
    <!-- {#key menuItem.mainMenuContentTree.active} -->
      <a  
          href="{menuItem.url}" role="button" data-bs-toggle="dropdown" aria-expanded="false"
      
          class="nav-link dropdown-toggle"

          data-navmenuid={menuItem.mainMenuContentTree.id}
          class:active={menuItem.mainMenuContentTree.partiallyActive === true}
          
          bind:this={menuItem.mainMenuContentTree.domElement}
          >
          {menuItem.displayName}
      </a>
    <!-- {/key} -->
    <ul class="dropdown-menu dropdown-menu-end">
      <slot></slot>
    </ul>
  </li>