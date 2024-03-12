export const prompt_collaboration_intro =`
In this conversation, I worked with an AI assistant to iteratively improve my coding prompt for an LLM. My goal was to create a clear, well-structured prompt that would effectively elicit high-quality suggestions for the interface of a new section in my web app showcasing prompt engineering skills.

The assistant provided helpful feedback on my initial draft, praising its strengths while suggesting areas for improvement. I incorporated the feedback and further refined the prompt's structure and focus based on our discussion.

The conversation highlights the collaborative process of crafting effective prompts, emphasizing the importance of clear instructions, sufficient context, and well-defined deliverables. By the end, I had a high-quality prompt likely to generate useful interface suggestions for my web app.

`
export const prompt_collaboration_convo = [
    {
      sender: 'user',
      text: `Bonjour! Please evaluate the following coding prompt, highlighting its strengths and suggesting areas for improvement.

  Here's the prompt I'd like you to evaluate:
  
  I'm creating a browser-based web app to showcase my prompt engineering skills. I'm implementing my app using Svelte and SvelteKit, and I write components using HTML, Tailwind CSS, and JavaScript. 
  
  I've already designed and implemented the home page, where I provide some information about my background with prompt engineering. I've also included an early draft of a prompt engineering guide that draws from my training and experience in the field.
  
  I want to create a new section that showcases examples of my prompt engineering skills. The goal is to engage users by dynamically showcasing the prompt engineering process, the LLM's responses, and the outcomes.
  
  I'd like you to please suggest three approaches to implementing this new web app section. For each, please provide the following:
  
  1. A high-level description of the approach
  2. An ASCII diagram depicting its appearance
  3. A caption that walks through the ASCII diagram
  Your role: A knowledgeable and creative User Interface/User Experience who specializes in SvelteKit app development.
  
  **Tone:** Professional, neutral.
  
  **Style:** Matter-of-fact, technical.
  
  **Constraints:** Format your response using Markdown. Use bulleted lists where it enhances readability.`
    },
    {
      sender: 'llm',
      text: `
  Here is my evaluation of the coding prompt, highlighting its strengths and suggesting areas for improvement:
  
  Strengths:
  
  - The prompt provides good context about the overall web app and its purpose of showcasing prompt engineering skills.
  - It mentions the tech stack being used (Svelte, SvelteKit, HTML, Tailwind CSS, JavaScript), which helps frame the implementation options.
  - The prompt is clear about what has already been built (home page, background info, draft prompt engineering guide).
  - It specifies the goal of the new section - to dynamically showcase the prompt engineering process, LLM responses, and outcomes in an engaging way.
  - The deliverables requested for each suggested approach (high-level description, ASCII diagram, diagram walkthrough) are well-defined.
  - Specifying the role, tone, style and response format constraints helps set clear expectations for the response.
  
  Suggestions for improvement:
  
  - Provide more details on the desired user experience and interactions for this new section. Should the showcases be interactive? Read-only? Guided or exploratory?
  - Specify any technical constraints or requirements, e.g. does it need to work on mobile? Any accessibility needs? Backend API integration?
  - Clarify the target audience and their assumed level of familiarity with prompt engineering. This impacts the level of explanation and hand-holding needed.
  - Mention any branding, styling or UI component library constraints the designs should adhere to for consistency with the rest of the app.
  - Note if there are any sensitive content issues to consider, e.g. if showcasing prompts/responses on controversial topics.
  - Provide guidance on the desired length and level of detail for the ASCII diagrams and captions.
  
  In summary, this is a solid prompt that provides good context and clear deliverables. It could be enhanced by providing more details on the desired UX, technical requirements, audience, branding constraints, content considerations, and expected level of detail in the response. But overall it gives the assistant sufficient background and direction to propose relevant approaches for implementing the new web app section showcasing prompt engineering examples.
  `
    },
    {
      sender: 'user',
      text: `
  Great, thanks! Please update my original prompt, addressing the following issues from your improvement suggestions:
  
  - The showcases should be read-only.
  - The showcases should be mobile-friendly.
  - The target audience is prompt engineers, software engineers, and computer scientists.
  - Use Flowbite Svelte components where appropriate. This is encouraged, but not required.
  - No sensitive content.
  - The diagrams and captions should be detailed enough for the average technologist to quickly understand the approach, but aim for succinctness.
  `
    },
    {
      sender: 'llm',
      text: `
  Here's the updated prompt incorporating your specified improvements:
  
  I'm creating a browser-based web app to showcase my prompt engineering skills. I'm implementing my app using Svelte and SvelteKit, and I write components using HTML, Tailwind CSS, and JavaScript.
  
  I've already designed and implemented the home page, where I provide some information about my background with prompt engineering. I've also included an early draft of a prompt engineering guide that draws from my training and experience in the field.
  
  I want to create a new section that showcases examples of my prompt engineering skills. The goal is to engage users by dynamically showcasing the prompt engineering process, the LLM's responses, and the outcomes in a read-only format. The target audience for this section is prompt engineers, software engineers, and computer scientists who are already familiar with the basics of prompt engineering.
  
  The showcases should be mobile-friendly and work well on smaller screens. Feel free to utilize Flowbite Svelte components where they enhance the user experience and visual design, but they are not required if you have an alternative approach.
  
  For content, please avoid showcasing any sensitive or controversial examples. Aim to illustrate the prompt engineering techniques and outcomes in a constructive, informative manner.
  
  I'd like you to please suggest three approaches to implementing this new web app section. For each, please provide the following:
  
  1. A high-level description of the approach
  2. An ASCII diagram depicting its appearance
  3. A caption that walks through the ASCII diagram
  The diagrams and captions should be detailed enough for the average technologist to quickly grasp the key aspects of each approach. Aim for succinctness and clarity.
  
  **Your role:** A knowledgeable and creative User Interface/User Experience who specializes in SvelteKit app development.
  
  **Tone:** Professional, neutral.
  
  **Style:** Matter-of-fact, technical.
  
  **Constraints:** Format your response using Markdown. Use bulleted lists where it enhances readability.
  `
    },
    {
      sender: 'user',
      text: `This is looking great, thanks! One last thing -- can you please break up the prompt into intuitive sections to improve clarity and readability?`
    },
    {
      sender: 'llm',
      text: `
  Sure! Here's the prompt broken up into sections:
  
  ## Background
  I'm creating a browser-based web app to showcase my prompt engineering skills. I'm implementing my app using Svelte and SvelteKit, and I write components using HTML, Tailwind CSS, and JavaScript. 
  
  I've already designed and implemented the home page, where I provide some information about my background with prompt engineering. I've also included an early draft of a prompt engineering guide that draws from my training and experience in the field.
  
  ## New Section Requirements
  I want to create a new section that showcases examples of my prompt engineering skills. The goal is to engage users by dynamically showcasing the prompt engineering process, the LLM's responses, and the outcomes in a read-only format. The target audience for this section is prompt engineers, software engineers, and computer scientists who are already familiar with the basics of prompt engineering.
  
  ### Technical Requirements
  - The showcases should be mobile-friendly and work well on smaller screens. 
  - Feel free to utilize Flowbite Svelte components where they enhance the user experience and visual design, but they are not required if you have an alternative approach.
  
  ### Content Guidelines
  - Please avoid showcasing any sensitive or controversial examples. 
  - Aim to illustrate the prompt engineering techniques and outcomes in a constructive, informative manner.
  
  ## Deliverables
  I'd like you to please suggest three approaches to implementing this new web app section. For each, please provide the following:
  
  1.  A high-level description of the approach
  2.  An ASCII diagram depicting its appearance
  3.  A caption that walks through the ASCII diagram
  
  The diagrams and captions should be detailed enough for the average technologist to quickly grasp the key aspects of each approach. Aim for succinctness and clarity.
  
  ## Assistant Role and Constraints
  **Your role:** A knowledgeable and creative User Interface/User Experience who specializes in SvelteKit app development.
  
  **Tone:** Professional, neutral.
  
  **Style:** Matter-of-fact, technical.
  
  **Constraints:** Format your response using Markdown. Use bulleted lists where it enhances readability.
  `
    },
    {
      sender: 'user',
      text: `
  Thank you! Here's how I changed your response. Is this a high-quality LLM coding prompt?
  
  ## Background
  
  I'm creating a browser-based web app to showcase my prompt engineering skills. I'm implementing my app using Svelte and SvelteKit, and I write components using HTML, Tailwind CSS, and JavaScript. 
  
  I've already designed and implemented the home page, where I provide some information about my background with prompt engineering. I've also included an early draft of a prompt engineering guide that draws from my training and experience in the field.
  
  I want to create a new section that showcases examples of my prompt engineering skills. The goal is to engage users by dynamically showcasing the prompt engineering process, the LLM's responses, and the outcomes in a read-only format. The target audience for this section is prompt engineers, software engineers, and computer scientists who are already familiar with the basics of prompt engineering.
  
  ## Task Description
  
  I'd like you to please suggest three approaches to implementing this new web app section. For each, please provide the following:
  
  1.  A high-level description of the approach
  2.  An ASCII diagram depicting its appearance
  3.  A caption that walks through the ASCII diagram
  
  The diagrams and captions should be detailed enough for the average technologist to quickly grasp the key aspects of each approach. Aim for succinctness and clarity.
  
  **Technical Requirements**
  
  - The showcases should be mobile-friendly and work well on smaller screens. 
  - Feel free to utilize Flowbite Svelte components where they enhance the user experience and visual design, but they are not required if you have an alternative approach.
  
  **Your role:** A knowledgeable and creative User Interface/User Experience who specializes in SvelteKit app development.
  
  **Tone:** Professional, neutral.
  
  **Style:** Matter-of-fact, technical.
  
  **Constraints:** Format your response using Markdown. Use bulleted lists where it enhances readability.`
    },
    {
      sender: 'llm',
      text: `Yes, this is a high-quality LLM coding prompt! The changes you made enhance its clarity and organization. Here's why it works well:
  
  1. Clear background: The "Background" section provides context about the web app, its purpose, and the technologies used. It also mentions what has already been implemented.
  2. Specific task description: The "Task Description" section clearly outlines the deliverables you're requesting (three approaches with descriptions, ASCII diagrams, and captions). It provides guidance on the level of detail and focus for the diagrams and captions.
  3. Technical requirements: You've included a "Technical Requirements" section that specifies the need for mobile-friendliness and the option to use Flowbite Svelte components. This helps frame the technical constraints and design considerations.  
  4. Well-defined assistant role and response format: The prompt clearly specifies the assistant's role as a knowledgeable UI/UX developer specializing in SvelteKit. It also provides guidance on the tone, style, and formatting constraints for the response.
  5. Concise and well-organized: The prompt is broken up into logical sections with descriptive headings, making it easy to read and understand the requirements and context.
  
  The only minor suggestion I would make is to consider adding a brief "Content Guidelines" section to specify the avoidance of sensitive content and the focus on constructive, informative examples. This was mentioned in the previous version and provides helpful guidance for the assistant.
  
  Overall, this prompt provides a clear and well-structured set of instructions that should enable an LLM to generate high-quality, relevant suggestions for implementing the new web app section showcasing prompt engineering examples.`
    },
    {
      sender: 'user',
      text: `I removed the content guidelines because I only want the LLM to suggest the interface approach. I will be adding the content and examples myself, which will not include any sensitive content. Do you think it makes sense to keep the section?`
    },
    {
      sender: 'llm',
      text: `You make a great point. Since you'll be adding the content and examples yourself, and you've already confirmed that you won't include any sensitive content, there's no need to keep the "Content Guidelines" section in the prompt.
  
  The purpose of the prompt is to get the LLM to suggest interface approaches, not to generate the actual content. Therefore, removing the content guidelines helps keep the prompt focused and streamlined.
  
  Your prompt, as it stands now, is well-structured and provides all the necessary information for an LLM to generate high-quality suggestions for the user interface and user experience of your new web app section.
  
  So, to answer your question directly: No, I don't think it makes sense to keep the "Content Guidelines" section in this case. Your prompt is effective and ready to be used as-is.`
    },
    {
      sender: 'user',
      text: `Thanks so much for your help, Claude!`
    },
    {
      sender: 'llm',
      text: `You're very welcome! I'm glad I could assist you in refining and evaluating your coding prompt. It's been a pleasure working through the process with you.
  
  Your final prompt is clear, well-structured, and provides all the necessary information for an LLM to generate useful suggestions for your web app's new section. I'm confident that it will help you get creative and thoughtful ideas for showcasing your prompt engineering skills.
  
  If you have any more questions or need further assistance as you develop your web app, feel free to reach out. I'm here to help!
  
  Best of luck with your project, and happy coding!`
    }
  ];

export const initial_prompt=`
I'm creating a browser-based web app to showcase my prompt engineering skills. I'm implementing my app using Svelte and SvelteKit, and I write components using HTML, Tailwind CSS, and JavaScript. 

I've already designed and implemented the home page, where I provide some information about my background with prompt engineering. I've also included an early draft of a prompt engineering guide that draws from my training and experience in the field.

I want to create a new section that showcases examples of my prompt engineering skills. The goal is to engage users by dynamically showcasing the prompt engineering process, the LLM's responses, and the outcomes.

I'd like you to please suggest three approaches to implementing this new web app section. For each, please provide the following:

1. A high-level description of the approach
2. An ASCII diagram depicting its appearance
3. A caption that walks through the ASCII diagram

Your role: A knowledgeable and creative User Interface/User Experience who specializes in SvelteKit app development.

**Tone:** Professional, neutral.

**Style:** Matter-of-fact, technical.

**Constraints:** Format your response using Markdown. Use bulleted lists where it enhances readability.
`

export const final_prompt=`
## Background
  
I'm creating a browser-based web app to showcase my prompt engineering skills. I'm implementing my app using Svelte and SvelteKit, and I write components using HTML, Tailwind CSS, and JavaScript. 

I've already designed and implemented the home page, where I provide some information about my background with prompt engineering. I've also included an early draft of a prompt engineering guide that draws from my training and experience in the field.

I want to create a new section that showcases examples of my prompt engineering skills. The goal is to engage users by dynamically showcasing the prompt engineering process, the LLM's responses, and the outcomes in a read-only format. The target audience for this section is prompt engineers, software engineers, and computer scientists who are already familiar with the basics of prompt engineering.

## Task Description

I'd like you to please suggest three approaches to implementing this new web app section. For each, please provide the following:

1.  A high-level description of the approach
2.  An ASCII diagram depicting its appearance
3.  A caption that walks through the ASCII diagram

The diagrams and captions should be detailed enough for the average technologist to quickly grasp the key aspects of each approach. Aim for succinctness and clarity.

**Technical Requirements**

- The showcases should be mobile-friendly and work well on smaller screens. 
- Feel free to utilize Flowbite Svelte components where they enhance the user experience and visual design, but they are not required if you have an alternative approach.

**Your role:** A knowledgeable and creative User Interface/User Experience who specializes in SvelteKit app development.

**Tone:** Professional, neutral.

**Style:** Matter-of-fact, technical.

**Constraints:** Format your response using Markdown. Use bulleted lists where it enhances readability.
`
