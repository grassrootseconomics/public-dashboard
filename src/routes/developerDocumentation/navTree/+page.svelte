<script>

import { onMount } from 'svelte';

let pageDescription = 
`
### working on page navigation tooling
* here we have an example of how to use:
  * SvelteKit advanced routing: https://kit.svelte.dev/docs/advanced-routing
  * with the \`load\` tooling to track the current url: https://kit.svelte.dev/docs/load
  * 
`;

onMount
    ( () =>
      {
        let MarkdownIt = markdownit();

        pageDescription = MarkdownIt.render(pageDescription);
      }
    );




</script>

<div>

  {@html pageDescription}

</div>