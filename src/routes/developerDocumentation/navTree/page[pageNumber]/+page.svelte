<script>

  export let data;

  $: pageNumber = data.params.pageNumber;

  console.log(`page[pagenumber=${JSON.stringify(data)}]`);

</script>

<h1>{pageNumber}</h1>
