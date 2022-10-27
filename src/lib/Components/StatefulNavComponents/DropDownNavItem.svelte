<script>

  // imported props
  //   this menu item
  export let menuItem;
  
  </script>
  
  
  
  <li class="nav-item dropdown">
    <!-- {#key menuItem.mainMenuContentTree.active} -->
      <a  
          href="{menuItem.url}" role="button" data-bs-toggle="dropdown" aria-expanded="false"
      
          bootstrap=""
          class="nav-link dropdown-toggle"
          class:active={menuItem.mainMenuContentTree.partiallyActive === true}

          navTreeContextManagement=""
          data-navmenuid={menuItem.mainMenuContentTree.id}
          
          possiblyFun=""
          bind:this={menuItem.mainMenuContentTree.domElement} 
          >
          {menuItem.displayName}
      </a>
    <!-- {/key} -->
    <ul class="dropdown-menu dropdown-menu-end">
      <slot></slot>
    </ul>
  </li>