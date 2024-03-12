<script>

    import { marked } from "marked";
    import { gallery } from "./gallery";

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
    // Define a custom code block renderer for Markdown
    const codeRenderer = {
        code(code, infostring, escaped) {          
            // Encode special characters in the code block for security
            code = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            // Wrap the code block in a `<pre>` element with a custom class for styling purposes
            return `<pre class="my-code-block"><code>${code}</code></pre>`;
        }   
    }
   // Define a custom image renderer for Markdown
  const imageRenderer = {
    image(href, title, text) {
      return `
        <figure>
          <img src="${href}" alt="${text}" title="${title}" class="my-image">
          <figcaption><b>Prompt:</b> "${text}""</figcaption>
        </figure>
      `;
    }
  };

    // Combine the heading, code block, and image renderers into a single renderer object
    const renderer = {...listRenderer, ...listItemRenderer, ...codeRenderer, ...headingRenderer, ...imageRenderer};

    // Apply the custom renderer to marked
    marked.use({ renderer });
</script>
  
  <div class="prompt-comparison flex flex-col md:flex-row gap-8">
    <div class="prompt-container bg-gray-100 p-6 rounded-lg">
      <h2 class="text-xl font-bold mb-4">Gallery of Art I've created with DALL-E</h2>
      <pre class="whitespace-pre-wrap font-mono text-sm">{@html marked(gallery)}</pre>
    </div>
 </div>
