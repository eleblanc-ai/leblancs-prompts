<script>
    import { marked } from 'marked';
    import { GradientButton } from 'flowbite-svelte';
    import { Badge } from 'flowbite-svelte'
    export let intro;
    export let conversation;
    export let outcome;
    export let title;
    
  
    const imports = {
		a: () => import('./showcase/PromptComparison.svelte'),
        b: () => import('./showcase/DesignHighlights.svelte'),
        c: () => import('./showcase/TabImplementation.svelte')

	};

    console.log(outcome)
    let component = 'z'
    if (outcome==="promt-collab"){
        component='a'
    } else if (outcome==="design-highlights"){
        component='b'
    } else if (outcome==="tab-implementation"){
        component='c'
    }
	
    let selectedView = 'conversation';

    const headingRenderer = {
    heading(text, level) {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return `
        <div class="my-h${level}">
          <h${level} id="${escapedText}">
            <a href="#${escapedText}" class="anchor-link">${text}</a>
          </h${level}>
        </div>
      `;
    }
  };

     // Custom renderer for lists to handle nesting
     const listRenderer = {
        list(body, ordered, start) {
            const type = ordered ? 'ol' : 'ul';
            const startAttr = (ordered && start !== 1) ? ` start="${start}"` : '';
            const listClass = ordered ? 'list-decimal' : 'list-disc';
            return `<${type} class="${listClass} list-inside ml-4"${startAttr}>${body}</${type}>`;
        }
     };

    // Custom renderer for list items to handle nested lists
    const listItemRenderer = {
        listitem(text) {
        return `<li>${text}</li>`;
        }
    };

    // Custom link renderer for Markdown
    const linkRenderer = {
        link(href, title, text) {
        return `<a href="${href}" class="my-link">${text}</a>`;
        }
    };

    // Define a custom code block renderer for Markdown
    const codeRenderer = {
        code(code, infostring, escaped) {          
            // Encode special characters in the code block for security
            code = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            // Wrap the code block in a `<pre>` element with a custom class for styling purposes
            return `<pre class="my-code-block"><code>${code}</code></pre>`;
        }   
    }
    // Combine the heading and code block renderers into a single renderer object
    const renderer = { ...listRenderer, ...listItemRenderer, ...codeRenderer, ...headingRenderer,...linkRenderer };

    // Apply the custom renderer to marked
    marked.use({ renderer }
    );
  </script>
  
  <div class="p-8 mb-36 overflow-auto bg-gray-100 min-h-screen">
    <h3 class="text-3xl mb-8">{title}</h3>
    <div class="mb-6">
        {@html marked(intro)}
    </div>
    <div class="flex justify-center mb-10">
      <GradientButton 
        color="blue"
        class="mr-4 px-6 py-3 text-lg font-semibold"
        shadow="blue"
        ring={selectedView === 'conversation' ? 4 : 0}
        on:click={() => (selectedView = 'conversation')}
      >
        Conversation
      </GradientButton>
      <GradientButton 
        color="green"
        class="px-6 py-3 text-lg font-semibold"
        shadow="green"
        ring={selectedView === 'outcome' ? 4 : 0}
        on:click={() => (selectedView = 'outcome')}
      >
        Outcome
      </GradientButton>
    </div>
  
    {#if selectedView === 'conversation'}
      <div class="overflow-y-auto space-y-6">
        {#each conversation as message}
          <div 
            class="p-6 rounded-xl shadow-lg w-4/5 transition-all duration-300 ease-in-out hover:shadow-2xl border-2 border-black"
            class:bg-blue-100={message.sender === 'llm'}
            class:bg-green-100={message.sender === 'user'}
            class:float-left={message.sender === 'llm'}
            class:float-right={message.sender === 'user'}
          >
            <div class="flex justify-between items-center mb-4">
              <span class="font-bold text-blue-800 text-xl" class:hidden={message.sender === 'user'}>
                Claude
              </span>
              <span class="font-bold text-green-800 text-xl" class:hidden={message.sender === 'llm'}>
                User
              </span>
            </div>
            <div class="text-gray-800 text-lg leading-relaxed">{@html marked(message.text)}</div>
          </div>
        {/each}
      </div>
    {:else if selectedView === 'outcome'}
    {#await imports[component]() then module}
        <svelte:component this={module.default}/>
    {/await}
    {/if}
  </div> 