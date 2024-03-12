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
</script>
  
  <div class="prompt-comparison flex flex-col md:flex-row gap-8">
    <div class="prompt-container bg-gray-100 p-6 rounded-lg">
      <h2 class="text-xl font-bold mb-4">Initial Prompt</h2>
      <pre class="whitespace-pre-wrap font-mono text-sm">{@html marked(initial_prompt)}</pre>
    </div>
    <div class="prompt-container bg-gray-100 p-6 rounded-lg">
      <h2 class="text-xl font-bold mb-4">Final Prompt</h2>
      <pre class="whitespace-pre-wrap font-mono text-sm">{@html marked(final_prompt)}</pre>
    </div>
 </div>

    <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-2xl font-bold mb-4">Prompt Refinement Highlights</h2>
        
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-2">Changes and Improvements:</h3>
          <ul class="list-disc pl-6">
            <li class="mb-2">Broke the prompt into intuitive sections (Background, Task Description), and added a subsection called Technical Requirements to Task Description for better organization and clarity.</li>
            <li class="mb-2">Added target audience information to the "Background" section to provide context upfront.</li>
            <li class="mb-2">Clarified the read-only nature of the showcases in the "Background" section.</li>
            <li class="mb-2">Specified the mobile-friendliness requirement and the option to use Flowbite Svelte components in the "Technical Requirements" section.</li>
          </ul>
        </div>
       
        <div>
          <h3 class="text-xl font-bold mb-2">Impact of Refinements:</h3>
          <ul class="list-disc pl-6">
            <li class="mb-2">The sectioned structure enhances readability and makes it easier for the LLM to understand the context and requirements.</li>
            <li class="mb-2">Providing the target audience information upfront helps the LLM tailor its suggestions to the appropriate technical level.</li>
            <li class="mb-2">Clarifying the read-only nature of the showcases ensures the LLM focuses on presenting the information effectively without interactive elements.</li>
            <li class="mb-2">Specifying the mobile-friendliness requirement and the option to use Flowbite Svelte components guides the LLM in generating responsive and visually appealing UI/UX suggestions.</li>
            <li class="mb-2">Removing the "Content Guidelines" section keeps the prompt focused on the interface design aspect, as the content will be handled separately.</li>
          </ul>
        </div>
       
        <p class="mt-8">
          The refined prompt provides a clearer structure, focused requirements, and removes unnecessary details. These enhancements enable the LLM to generate more relevant and effective UI/UX suggestions for showcasing the prompt engineering examples in the web app.
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