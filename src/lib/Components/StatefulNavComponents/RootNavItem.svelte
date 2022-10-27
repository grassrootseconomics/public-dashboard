<script>

export let menuItem;
export let markActiveItem;

</script>



<li class="nav-item" data-bs-dismiss="offcanvas">
    <a  
        href="{menuItem.url}"
    
        possiblyFun=""
        bind:this={menuItem.mainMenuContentTree.domElement} 
        
        bootstrap=""
        class="nav-link" 
        class:active={menuItem.mainMenuContentTree.active === true} 

        menuTreeManagement=""
        data-navmenuid={menuItem.mainMenuContentTree.id}
        on:click={markActiveItem}
        >
      {menuItem.displayName}
      
    </a>
</li>