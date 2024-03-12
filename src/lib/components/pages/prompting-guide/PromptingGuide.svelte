<script>
    import { Alert, Badge } from 'flowbite-svelte';

    import { prompting_guide } from './prompting-guide';
    import { marked } from 'marked';

    // Define a custom heading renderer for Markdown
    // const headingRenderer = {
    //     heading(text, level) {
    //         // Wrap the heading in a `<pre>` element with a custom class for styling purposes
    //         return `<div class="my-h${level}"><h${level}>${text}<h${level}></div>`;
    //     }
    // }

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
    marked.use({ renderer });
</script>

<Alert class="mt-16 mb-12 text-center" color="blue">
<p> <span class="text-md">Info:</span>
    This guide is under development. Check back for updates!
</p>
<Badge class="m-auto mt-4 text-md" color="purple">Presented with some assistance from Claude and ChatGPT.</Badge>

  </Alert>
  <div id="guide-container" class="mt-12 max-w-4xl m-auto overflow-auto max-h-[calc(100vh-6rem)] ">
  

    <div id="guide" class="px-12">
        {@html marked(prompting_guide)}
    </div>

    <div class="pb-12"></div>
</div>
