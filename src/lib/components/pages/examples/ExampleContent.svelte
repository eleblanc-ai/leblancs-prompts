<script>
  import { marked } from 'marked';
  import { GradientButton } from 'flowbite-svelte';
  import { Badge } from 'flowbite-svelte'
    import { Messages } from 'openai/resources/beta/threads/messages/messages.mjs';
  export let intro;
  export let conversation;
  export let outcome;
  export let title;
  
  const imports = {
  a: () => import('./showcase/PromptComparison.svelte'),
      b: () => import('./showcase/DesignHighlights.svelte'),
      c: () => import('./showcase/TabImplementation.svelte'),
      d: () => import('./showcase/MushroomGuide.svelte')

};

  let component = 'z'
  if (outcome==="promt-collab") component='a';
  else if (outcome==="design-highlights") component='b'; 
  else if (outcome==="tab-implementation") component='c';
  else if (outcome==="mushroom-guide") component='d';

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

  const listRenderer = {
    list(body, ordered, start) {
      const type = ordered ? 'ol' : 'ul';
      const startAttr = (ordered && start !== 1) ? ` start="${start}"` : '';
      const listClass = ordered ? 'list-decimal' : 'list-disc';
      return `<${type} class="${listClass} list-inside ml-2"${startAttr}>${body}</${type}>`;
    }
  };

  const listItemRenderer = {
    listitem(text) {
      return `<li>${text}</li>`;
    }
  };

  const linkRenderer = {
    link(href, title, text) {
      return `<a href="${href}" class="my-link">${text}</a>`;
    }
  };

  const codeRenderer = {
    code(code, infostring, escaped) {          
      code = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      return `<pre class="my-code-block"><code>${code}</code></pre>`;
    }   
  }

  const renderer = { ...listRenderer, ...listItemRenderer, ...codeRenderer, ...headingRenderer,...linkRenderer };
  marked.use({ renderer });
</script>

<div class="p-4 mb-20 overflow-auto bg-gray-100 min-h-screen">
  <h3 class="text-2xl mb-4">{title}</h3>
  <div class="mb-6 text-base">
    {@html marked(intro)}
  </div>
  <div class="flex justify-center mb-6">
    <GradientButton 
      color="blue"
      class="mr-2 px-4 py-2 text-base font-semibold"
      shadow="blue"
      ring={selectedView === 'conversation' ? 4 : 0}
      on:click={() => (selectedView = 'conversation')}
    >
      Chat
    </GradientButton>
    <GradientButton 
      color="green" 
      class="px-4 py-2 text-base font-semibold"
      shadow="green"
      ring={selectedView === 'outcome' ? 4 : 0}
      on:click={() => (selectedView = 'outcome')}
    >
      Result
    </GradientButton>
  </div>

  {#if selectedView === 'conversation'}
    <div class="overflow-y-auto space-y-4">
      {#each conversation as message}
        <div 
        class="p-4 rounded-lg transition-shadow duration-300 w-11/12  border-black"
        class:bg-blue-100={message.sender === 'llm'}  
        class:bg-green-100={message.sender === 'user'}
        class:shadow-md={message.sender === 'llm' || message.sender === 'user' }  
        class:hover:shadow-lg={message.sender === 'llm' || message.sender === 'user' }  
        class:border={message.sender === 'llm' || message.sender === 'user' }  
        class:bg-transparent={message.sender === 'note'}
        class:float-left={message.sender === 'llm'}
        class:float-right={message.sender === 'user'}
        class:mx-auto={message.sender === 'note'}
        class:clear-both={message.sender === 'note'}
        class:mt-24={message.sender === 'note'}
      >
          <div class="flex justify-between items-center mb-2">
            <span class="font-semibold text-blue-800 text-lg" class:hidden={message.sender !== 'llm'}>
              Claude
            </span>
            <span class="font-semibold text-green-800 text-lg" class:hidden={message.sender !== 'user'}>
              User  
            </span>
            <span class="font-semibold text-amber-800 text-lg" class:hidden={message.sender !== 'note'}>
              Note
            </span>
          </div>
          <div class="text-gray-800 text-base leading-relaxed">{@html marked(message.text)}</div>
        </div>
      {/each}
    </div>
  {:else if selectedView === 'outcome'}
    {#await imports[component]() then module}
      <svelte:component this={module.default}/>
    {/await} 
  {/if}
</div>