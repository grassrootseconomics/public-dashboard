<script>
  import {
  afterNavigate,
  beforeNavigate,
  disableScrollHandling,
  goto,
  invalidate,
  invalidateAll,
  prefetch,
  prefetchRoutes
} from '$app/navigation';

import {updateList} from '$lib/treeUtil.js'

  let list = 
      [ { name: "Hello",
          data: [1,2,3],
          children: [4,5,6],
          displayName: "Hello",
        },
        { name: "World",
          data: [10,11,12],
          children: [13,14,15],
          displayName: "World",
        }
      ];

  globalThis.list = list;

  let newName;
  let changeName = 
      function()
      { list[0].displayName = newName;
      }

  let addToList = 
      function()
      { 
        // list[0].children.push(Math.floor(Math.random() * 10));
        // list[0].children = list[0].children;

          let val = updateList(list);

          list[0].children = list[0].children;


        goto("/testReactivity/subTest");
      }

</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each list as listItem (listItem.name)}

  <pre>{JSON.stringify(listItem)}</pre>
  {listItem.displayName}
  <a href="#" class="nav-link" class:active={listItem.displayName === "HELLO"}>HELLO!</a>

{/each}

<input bind:value={newName}>
<button on:click={changeName}>Change Name</button>

<button on:click={addToList}>Add To List</button>
