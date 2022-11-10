<script context="module">

import { onMount }        from 'svelte';
import { afterNavigate }  from '$app/navigation';
import { page }           from '$app/stores';

import RootNavItem from '$lib/Components/StatefulNavComponents/RootNavItem.svelte';


// here we store components registered by URL
//   which are registered here behind a Proxy object when they are placed into the DOM
//   this means that we do not need any kind of external management structure to 
//   maintain the state of the navigation tree, it comes directly from the HTML of the page
let navComponentBucketsByURL_dict = {};
let componentReferenceBindings = new Proxy( navComponentBucketsByURL_dict, 
      { set(target, prop, newValue) 
        { 
          if (navComponentBucketsByURL_dict[prop] === undefined)
          { navComponentBucketsByURL_dict[prop] = {};
          }

          navComponentBucketsByURL_dict[prop].boundComponent = newValue
          
          return true;
          
        },
      }
    );

// make three example menu items, connected to a dynamic root in sveltekit .../page[pageNumber]
let navTree = [];
for (let i=0; i<3; i++)
{ navTree.push({id: i});
}

</script>

<script>

// keep the previously active pathname, so we can use that to deactivate the previous nav menu items
let previouslyActivePathname = null;

// this runs every time the page URL changes
afterNavigate 
    ( () =>
      { 
        // the current pathname from the URL
        let pathname = $page.url.pathname;

        // remove the active status from the previously active page.
        //   we are using a try block because I couldnt get the Proxy stuff to work any other way
        try { navComponentBucketsByURL_dict[previouslyActivePathname].boundComponent.setActive(false, previouslyActivePathname);}
        catch (error) {}
        // record the current page
        previouslyActivePathname = pathname;

        // set the new active status on things
        try { navComponentBucketsByURL_dict[pathname].boundComponent.setActive(true, pathname); }
        catch (error) {}
      }
    );

// embed a developer friendly description of what is going on inside the actual page
    let pageDescription = 
`
### design
* the deepest issue we are trying to solve here is how to link an external logic system into
  the svelte component reactive system
* svelte reactivity is built around simple static analysis of source code files.
  * on that basis there are a couple of tools available to enable the use of totally external
    logic and data stores that interface with arbitrary svelte components
* what we are trying to avoid is the need to build a component that is specifically bound to the logic 
  of some extenal library, and to make it possible to connect totally arbitrary html structure with external logic
* in this example code here we are simplifying the situation by demanding that the URL for each navTree item is unique
  * if one wanted to have a more arbitary tooling, one could use Svelte stores, which provide a runtime mechanism to
    jump out of the source code analysis space

### working on page navigation tooling
* here we have an example of how to use:
  * SvelteKit advanced routing: https://kit.svelte.dev/docs/advanced-routing
  * with the \`load\` tooling to track the current url: https://kit.svelte.dev/docs/load
  * we are also then using the interaction between the svelte concept of bind:this={Component}
    * https://svelte.dev/tutorial/bind-this
    * combined with: https://svelte.dev/docs#template-syntax-svelte-options
  * and javascript Proxy objects
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
  * to create a navigation tree utility which uses
    * the current url from: https://kit.svelte.dev/docs/modules#$app-stores, \`$page.url.pathname\`
    * and the \`afterNavigation\` event, https://kit.svelte.dev/docs/modules#$app-navigation
    * to create totally html agnostic method of building navigation that reacts to the current url.
  * The Svelte Components need to implment an interface of
    * setActive(trueFalse)
      * this is called by the navTreeUtil to set a nav item as active or not active
    * these next two functions can be called internally by a component to mark its parent items as
      being a parent of the current active item (partially active) 
      * setActivePartial(trueFalse) (optional)
      * getParent() (optional)
* If you open dev-tools, you will see the <li> components changing their active state and adding aria-current="page"
  to the currently active link.
* we can add some css to this to show what is meant.
`;

// I didnt find in the short time I spent a server and client side compatible mardown renderer
//   so I just used one from a CDN and run it only when the page is actually mounted in the client
onMount
    ( () =>
      {
        // markdown it
        let MarkdownIt = markdownit({linkify: true});
        pageDescription = MarkdownIt.render(pageDescription);

        // set the reactive cssAdded property to false to render the button
        cssAdded = false;

      }
    );

    // set the reactive cssAdded property to null so the buttons are not rendered until
    //   the whole page is actuall mounted
    $: cssAdded =null;
    // these two functions (obvs they could be one function with a parameter) are used
    //   to allow the developer to watch the effect of setting the cssAdded value to true and false
    //   this value is passed through to the RootNavItem Component, and used to switch on the css response
    //   to the item being the currently active item.
    let addCSS    = () => {cssAdded = true;}
    let removeCSS = () => {cssAdded = false;}

</script>


<div class="d-flex flex-row">
  {#each navTree as numberCounter  }
    {@const anchorURL = "/developerDocumentation/navTree/page"+numberCounter.id }
    <a href="/developerDocumentation/navTree/page{numberCounter.id}" class:cssAdded={cssAdded} >
      <div id="{numberCounter.id}">{numberCounter.id}</div>
    </a>

    // the cssAdded property is the last attribute defined in thie element
    //   it is configured to be a prop in RootNavItem by `export let cssAdded = false;`
    //   by changing it to true, the Component starts to react to CSS rules, check out the source
    //   of the Component to see this.
    <RootNavItem bind:this={componentReferenceBindings[anchorURL]} menuItem={ {url: anchorURL, displayName: numberCounter.id} } {cssAdded}></RootNavItem>

  {/each}
</div>

<pre> {JSON.stringify(navComponentBucketsByURL_dict, null, 2) } </pre>

{#if cssAdded === false}
<button on:click={addCSS}>Add CSS</button>
{:else if cssAdded === true}
<button on:click={removeCSS}>Remove CSS</button>
{/if}

<div>cssAdded: {cssAdded}</div>

<h1>Page Number:</h1>
<slot></slot>

<div>

{@html pageDescription}

</div>




<style>

  a.cssAdded.active 
  { background-color: rgba(0,0,0,0.2);
  }
  
</style>