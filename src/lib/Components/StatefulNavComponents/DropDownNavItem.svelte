<script>

  // imported props
  //   this menu item
  export let menuItem;
  
  </script>
  
  
  
  <li class="nav-item dropdown">
    <!-- {#key menuItem.mainMenuContentTree.active} -->
      <a  
          id="mainNavigationDropdown_{menuItem.mainMenuContentTree.uniqueID}"
          
          href="{menuItem.url}"  
      
          bootstrap=""
          class="nav-link dropdown-toggle"
          class:active={menuItem.mainMenuContentTree.partiallyActive === true}
          data-bs-toggle="dropdown"

          aria=""
          role="button"
          aria-haspopup="true" 
          aria-expanded="false"

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