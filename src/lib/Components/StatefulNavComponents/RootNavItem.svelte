<script>

  // imported props
  //   this menu item
  export let menuItem;
  //   function to call to mark this item active in the navContextTree
  export let markActiveItem;

</script>



<li class="nav-item" data-bs-dismiss="offcanvas">
    <a  
        href="{menuItem.url}"
    
        bootstrap=""
        class="nav-link" 
        class:active={menuItem.mainMenuContentTree.active === true} 

        navTreeContextManagement=""
        data-navmenuid={menuItem.mainMenuContentTree.id}
        on:click={markActiveItem}

        possiblyFun=""
        bind:this={menuItem.mainMenuContentTree.domElement} 
        >
      {menuItem.displayName}
      
    </a>
</li>