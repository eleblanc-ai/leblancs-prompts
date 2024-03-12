<script>


    import { marked } from "marked";
    import { design_final } from "./showase-interface-design";


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
    // Combine the heading and code block renderers into a single renderer object
    const renderer = {...listRenderer,...listItemRenderer,...codeRenderer, ...headingRenderer };

    // Apply the custom renderer to marked
    marked.use({ renderer });
</script>
  
  <div class="prompt-comparison flex flex-col md:flex-row gap-8">
    <div class="prompt-container bg-gray-100 p-6 rounded-lg">
      <h2 class="text-xl font-bold mb-4">Final Design Approach</h2>
      <pre class="whitespace-pre-wrap font-mono text-sm">{@html marked(design_final)}</pre>
    </div>
 </div>

 <div class="bg-white p-6 rounded-lg shadow">
    <h2 class="text-2xl font-bold mb-4">Design Process Highlights</h2>
    
    <div class="mb-8">
      <h3 class="text-xl font-bold mb-2">Key Design Decisions:</h3>
      <ul class="list-disc pl-6">
        <li class="mb-2">Chose a tabbed interface approach to organize and present the prompt engineering examples, allowing users to easily navigate between different examples while maintaining a clear view of the selected example's details.</li>
        <li class="mb-2">Decided to display the conversation between the user and the LLM using a messaging app-style interface, with LLM messages on the left and user messages on the right, to provide a familiar and intuitive format for users to follow the dialogue's flow.</li>
        <li class="mb-2">Opted to display the accepted outcome and the enhanced version of the outcome separately to highlight the differences and showcase the final result of the interaction.</li>
        <li class="mb-2">Refined the design to condense "Accepted" and "Enhanced" into a single "Outcome" view and use buttons instead of tabs to navigate between the conversation and outcome views, simplifying the navigation and reducing cognitive load on users.</li>
      </ul>
    </div>
    
    <div>
      <h3 class="text-xl font-bold mb-2">Impact of Design Decisions:</h3>
      <ul class="list-disc pl-6">
        <li class="mb-2">The tabbed interface approach provides a clean and organized way to present multiple prompt engineering examples, allowing users to focus on one example at a time while easily navigating between them.</li>
        <li class="mb-2">Displaying the conversation in a messaging app-style format enhances readability and understanding of the dialogue flow, making it easier for users to follow the interaction between the user and the LLM.</li>
        <li class="mb-2">Separating the accepted outcome and the enhanced version of the outcome emphasizes the value added by the prompt engineer and showcases the final result of the interaction effectively.</li>
        <li class="mb-2">Condensing the "Accepted" and "Enhanced" views into a single "Outcome" view and using buttons for navigation streamlines the user experience, reduces complexity, and prevents overloading the page with too many levels of tabs.</li>
        <li class="mb-2">Aligning the conversation display with the familiar messaging app layout, where user messages appear on the right and LLM responses on the left, creates a more intuitive and engaging user experience.</li>
      </ul>
    </div>
    
    <p class="mt-8">
      The iterative design process, incorporating feedback and refining the interface, has resulted in a clear, intuitive, and visually appealing way to showcase prompt engineering examples. The final design effectively presents the conversation flow, outcomes, and enhancements, enabling users to explore and understand the prompt engineering process and its results.
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