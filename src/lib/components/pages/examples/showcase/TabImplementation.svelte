<script>
    import { initial_prompt } from "./prompt-collaboration";
    import { final_prompt } from "./prompt-collaboration";

    import { marked } from "marked";

    // Define a custom heading renderer for Markdown
    const headingRenderer = {
        heading(text, level) {
            // Wrap the heading in a `<pre>` element with a custom class for styling purposes
            return `<div class="my-h${level}"><h${level}>${text}<h${level}></div>`;
        }
    }

    
    // Custom renderer for lists to handle nesting
    const listRenderer = {
        list(body, ordered, start) {
            const type = ordered ? 'ol' : 'ul';
            const startAttr = (ordered && start !== 1) ? ` start="${start}"` : '';
            return `<${type} class="my-list"${startAttr}>${body}</${type}>`;
        }
    };

    // Custom renderer for list items to handle nested lists
    const listItemRenderer = {
        listitem(text) {
            return `<li class="my-list-item">${text}</li>`;
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
    const renderer = {...listRenderer,...listItemRenderer,...codeRenderer, ...headingRenderer };

    // Apply the custom renderer to marked
    marked.use({ renderer });

    let selectedView = 'conversation';
    
    // Sample conversation data
    const conversation = [
    { sender: 'llm', 
      text: 'Hi there! How can I assist you today?' },
    { sender: 'user', 
      text: 'I need help writing a blog post about Svelte.' },
    { sender: 'llm', 
      text: 'Great! I can definitely help you with that. What specific aspects of Svelte would you like to cover in your blog post?' },
    { sender: 'user', 
      text: 'I want to highlight its simplicity, reactivity, and performance.' },
    // ...more conversation items
    ];

    // Sample outcome data
    const outcome = {
    accepted: 'Svelte is a modern JavaScript framework that simplifies web development with its intuitive syntax, built-in reactivity, and excellent performance. It allows developers to build interactive user interfaces with minimal boilerplate code...',
    enhanced: 'Svelte: Simplifying Web Development\n\nSvelte is a cutting-edge JavaScript framework that revolutionizes the way developers build web applications. With its intuitive syntax and built-in reactivity, Svelte empowers developers to create interactive user interfaces with minimal boilerplate code...'
    };
</script>
  
  <div class="prompt-comparison flex flex-col md:flex-row gap-8">
    <div class="prompt-container bg-gray-100 p-6 rounded-lg">
      <h2 class="text-xl font-bold mb-4">Final Component</h2>
      <div class="border border-gray-300 p-4 pb-8">
        <h2 class="text-xl font-bold mb-4">Selected Example Content</h2>
        <div class="flex justify-center mb-4">
        <button 
            class="mr-4 py-1 px-2 bg-gray-200 rounded"
            class:bg-gray-400={selectedView === 'conversation'}
            on:click={() => selectedView = 'conversation'}
        >
            Conversation
        </button>
        <button 
            class="py-1 px-2 bg-gray-200 rounded"
            class:bg-gray-400={selectedView === 'outcome'}
            on:click={() => selectedView = 'outcome'}
        >
            Outcome
        </button>
        </div>
        
        {#if selectedView === 'conversation'}
        <div class="max-h-80 overflow-y-auto border border-gray-300 border-opacity-50 rounded">
            {#each conversation as message}
            <div 
                class="mb-2 p-2 rounded w-4/5"
                class:bg-gray-100={message.sender === 'llm'}
                class:bg-gray-200={message.sender === 'user'}
                class:text-left={message.sender === 'llm'}
                class:text-right={message.sender === 'user'}
                class:self-start={message.sender === 'llm'}
                class:self-end={message.sender === 'user'}
            >
                <span>{message.text}</span>
            </div>
            {/each}
        </div>
        {:else if selectedView === 'outcome'}
        <div>
            <h3 class="mt-6 text-lg font-bold">Accepted Outcome</h3>
            <p>{outcome.accepted}</p>
            
            <h3 class="mt-6 text-lg font-bold">Enhanced Outcome</h3>
            <p>{outcome.enhanced}</p>
        </div>
        {/if}
    </div>
    </div>
 </div>

<div class="bg-white p-6 rounded-lg shadow">
 <h2 class="text-2xl font-bold mb-4">Component Implementation Highlights</h2>

 <div class="mb-8">
   <h3 class="text-xl font-bold mb-2">Key Aspects:</h3>
   <ul class="list-disc pl-6">
     <li class="mb-2">The component provides a framework for showcasing the outcome of a conversation between a user and an AI assistant in implementing a Svelte component.</li>
     <li class="mb-2">It features a "Selected Example Content" section with "Conversation" and "Outcome" views.</li>
     <li class="mb-2">The conversation view displays chat messages in a messaging app-style interface.</li>
     <li class="mb-2">The outcome view presents the accepted and enhanced outcomes.</li>
     <li class="mb-2"><b>I further collaborated with Claude to build this implementation into the Examples section of this website.</b></li>
   </ul>
 </div>

 <div class="mb-8">
   <h3 class="text-xl font-bold mb-2">Implementation Details:</h3>
   <ul class="list-disc pl-6">
     <li class="mb-2">Implemented using Svelte and Tailwind CSS.</li>
     <li class="mb-2">Conversation and outcome data stored in separate variables.</li>
     <li class="mb-2">Template divided into two sections based on the selected view.</li>
     <li class="mb-2">Conversation messages displayed using different styles based on sender.</li>
   </ul>
 </div>

 <p class="mt-8">
   The component provides an intuitive way to showcase the conversation and outcome of the prompt engineering example. My final enhancements improve readability and aesthetic appeal, allowing users to focus on each aspect individually.
 </p>
</div>

  <style>
    .prompt-comparison {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
  
    .prompt-container {
      flex: 1;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
  
    h2 {
      margin-bottom: 10px;
    }
  
    pre {
      white-space: pre-wrap;
      font-family: monospace;
      font-size: 14px;
    }
  </style>