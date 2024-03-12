<script>


    import { marked } from "marked";
    import { final_mushroom_guide } from "./mushroom-guide";

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
          <figcaption>${text}</figcaption>
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
      <h2 class="text-xl font-bold mb-4">Final Mushroom Growing Guide</h2>
      <pre class="whitespace-pre-wrap font-mono text-sm">{@html marked(final_mushroom_guide)}</pre>
    </div>
 </div>
 <div class="bg-white p-6 rounded-lg shadow">
  <h2 class="text-2xl font-bold mb-4">Mushroom Growing Guide Creation Highlights</h2>
 
  <div class="mb-8">
    <h3 class="text-xl font-bold mb-2">Key Collaboration Decisions:</h3>
    <ul class="list-disc pl-6">
      <li class="mb-2">Chose to organize the guide into clear sections, including an introduction, materials list, setup instructions, environmental conditions, inoculation and incubation, fruiting and harvesting, troubleshooting, and conclusion, to provide a logical and easy-to-follow structure for beginner growers.</li>
      <li class="mb-2">Decided to use a combination of paragraphs and bullet points to present information, utilizing paragraphs for more descriptive sections and bullet points for lists and step-by-step instructions to enhance readability and clarity.</li>
      <li class="mb-2">Opted to include image prompts for most major section of the guide, showcasing key aspects of the mushroom growing process, and clearly indicating that the image prompts were created by the AI assistant, Claude 3, and the images were generated using DALL-E.</li>
      <li class="mb-2">Refined the guide by adding introductory and concluding paragraphs to the "Setting Up the Martha Tent" section, providing a smooth transition between sections and emphasizing the importance of proper tent setup for successful mushroom cultivation.</li>
    </ul>
  </div>
 
  <div>
    <h3 class="text-xl font-bold mb-2">Impact of Collaboration Decisions:</h3>
    <ul class="list-disc pl-6">
      <li class="mb-2">Organizing the guide into clear sections with a logical flow helps users easily navigate the content and understand the chronological steps involved in growing Chestnut mushrooms, from preparation to harvest.</li>
      <li class="mb-2">Utilizing a mix of paragraphs and bullet points enhances the guide's readability and allows users to quickly grasp key information, such as materials needed and step-by-step instructions, while still providing detailed explanations where necessary.</li>
      <li class="mb-2">Incorporating image prompts and specifying the AI assistant's role in creating them adds visual interest to the guide, helps users better understand the various stages of the mushroom growing process, and transparently acknowledges the use of AI tools in the guide's creation.</li>
      <li class="mb-2">Adding introductory and concluding paragraphs to the "Setting Up the Martha Tent" section improves the overall flow of the guide, highlights the significance of proper tent setup, and ensures a seamless reading experience for users.</li>
    </ul>
  </div>
 
  <p class="mt-8">
    The iterative collaboration process, incorporating my feedback and refining the guide's content and structure, has produced an informative, user-friendly, and visually appealing resource for beginner mushroom growers. The final guide effectively presents the step-by-step process, key considerations, and best practices for growing Chestnut mushrooms, empowering users to embark on their own mushroom cultivation journey with confidence and clarity.
  </p>
 </div>