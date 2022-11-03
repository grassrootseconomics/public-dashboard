<script context="module">

  import MainSiteNavBar from "$lib/Components/StatefulNavComponents/MainSiteNavBar.svelte";

</script>

<div class="pageWrapper">

  <MainSiteNavBar>


  </MainSiteNavBar>
  
  
  <slot></slot>

</div>

<style>

.pageWrapper {
  height: 100vh;
  width: 100vw;

  max-width: 1080px;

  margin: 0px auto;

  background-color: rgba(255,255,255, 0.5);
  box-shadow: 0px 0px 20px 20px rgba(0,0,0,0.1)
}

</style>