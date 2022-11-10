<script context="module">

let navTree = [];

for (let i=0; i<3; i++)
{ navTree.push({id: i});
}

</script>



{#each navTree as numberCounter  }

  <a href="/developerDocumentation/navTree/page{numberCounter.id}">
    <div id="{numberCounter.id}">{numberCounter.id}</div>
  </a>

{/each}

<slot></slot>