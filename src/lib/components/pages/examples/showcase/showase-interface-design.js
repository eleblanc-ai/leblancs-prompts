export const showcase_design_intro =`In this conversation, I collaborated with an AI assistant to design the user interface for a new section of my web app showcasing examples of my prompt engineering skills. My goal was to create an engaging, intuitive layout that would allow users to dynamically explore the prompt engineering process, including the dialogs between the user (me) and the LLM, the accepted LLM outputs, and my own enhanced versions of those outputs. 

The assistant provided several helpful layout suggestions, and we iteratively refined the design based on my feedback and preferences. We arrived at a clean, effective design featuring a tabbed interface with "Conversation" and "Outcome" views and clear navigation buttons. 

The conversation highlights the value of iterative design collaboration, rapid feedback cycles, and clear communication of goals and preferences. By the end, I had a polished, user-friendly interface design ready to implement in my web app.`

export const showcase_design_convo = [
  {
    sender: 'user',
    text: `## Background

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
    text: `
Here are three suggested approaches for implementing the new web app section showcasing your prompt engineering skills:

1. Accordion-Style Showcase

Description: Present each example in an accordion-style layout, where users can expand and collapse individual examples to view the prompt, LLM response, and outcome.

\`\`\`
+-------------------------------+
|  Prompt Engineering Examples  |
+-------------------------------+
| +---------------------------+ |
| |       Example 1           | |
| +---------------------------+ |
| |       Example 2           | |
| +---------------------------+ |
| |       Example 3           | |
| +---------------------------+ |
+-------------------------------+
\`\`\`

Caption: 
- The showcase section consists of a container with a header titled "Prompt Engineering Examples".
- Each example is represented by a collapsible accordion item.
- Users can click on an example to expand it, revealing the prompt, LLM response, and outcome.
- The accordion layout allows for a compact presentation of multiple examples while enabling users to focus on one example at a time.

2. Tabbed Interface Showcase

Description: Organize the examples using a tabbed interface, with each tab representing a different example. Users can switch between tabs to view the prompt, LLM response, and outcome for each example.

\`\`\`
+-------------------------------+
|  Prompt Engineering Examples  |
+-------------------------------+
| Example 1 | Example 2 | Example 3 |
+-------------------------------+
|                               |
|     Selected Example Content  |
|                               |
+-------------------------------+
\`\`\`

Caption:
- The showcase section has a header titled "Prompt Engineering Examples".
- Below the header, there is a row of tabs, each representing a different example.
- Users can click on a tab to switch between examples.
- The selected example's content, including the prompt, LLM response, and outcome, is displayed in the main content area below the tabs.
- The tabbed interface allows users to easily navigate between examples while maintaining a clear view of the selected example's details.

3. Card Grid Showcase

Description: Display the examples in a grid layout using cards. Each card provides a brief overview of the example, and users can click on a card to view the full details in a modal or separate page.

\`\`\`
+-------------------------------+
|  Prompt Engineering Examples  |
+-------------------------------+
| +-----+ +-----+ +-----+ +-----+
| |Ex. 1| |Ex. 2| |Ex. 3| |Ex. 4|
| +-----+ +-----+ +-----+ +-----+
| +-----+ +-----+ +-----+ +-----+
| |Ex. 5| |Ex. 6| |Ex. 7| |Ex. 8|
| +-----+ +-----+ +-----+ +-----+
+-------------------------------+
\`\`\`

Caption:
- The showcase section starts with a header titled "Prompt Engineering Examples".
- Examples are presented in a grid layout using cards.
- Each card provides a concise summary or title of the example.
- Users can click on a card to open a modal or navigate to a separate page that displays the full details of the example, including the prompt, LLM response, and outcome.
- The card grid layout offers a visually appealing and responsive way to present multiple examples while allowing users to quickly scan and select the examples they want to explore further.

These three approaches provide different ways to structure and present your prompt engineering examples, each with its own advantages in terms of user experience and information organization.`
  },
  {
    sender: 'user',
    text: `These are all great suggestions, thanks! I'm going to use the tabbed interface approach. Now, let's develop a general approach to visualizing the "Selected Example Content".

Any example will include the following elements:

1. A conversation between the user and the LLM - A conversation consists of one or more prompt-response pairs.
2. Accepted text from the conversation – This will consist of any text created by the LLM that I plan to use outside of the conversation.
3. My enhanced version of the outcome – This will be the final outcome of the interaction. It might be a document, a software object, or something else.

I'd like to display each conversation between the user and the LLM using a messaging app interface. This familiar format will allow users to follow the dialogue's flow easily, as if reading a chat history.

I'd also like to be able to display the accepted outcome and my enhanced version of that outcome and explain the differences between the two. 

Please propose three possible approaches to displaying all of this on a single page. Include ASCII diagrams for each proposal.`
  },
  {
    sender: 'llm',
    text: `Here are three possible approaches to displaying the conversation, accepted outcome, and enhanced outcome on a single page:

1. Vertical Layout with Sidebar

\`\`\`
+----------------------------------+
|  Selected Example Content        |
+----------------------------------+
| Conversation   | Accepted Outcome|
| +-----------+  |                 |
| |User       |  |                 |
| |  Message  |  |                 |
| +-----------+  |                 |
| |LLM        |  |                 |
| |  Response |  |                 |
| +-----------+  |                 |
| |User       |  |                 |
| |  Message  |  |                 |
| +-----------+  |                 |
| |LLM        |  |                 |
| |  Response |  |                 |
| +-----------+  |                 |
|                |                 |
+----------------+-----------------+
|        Enhanced Outcome          |
|                                  |
|                                  |
+----------------------------------+
\`\`\`

- The conversation is displayed on the left side, using a messaging app-style interface.
- The accepted outcome is shown in a sidebar on the right, alongside the conversation.
- Below the conversation and accepted outcome, the enhanced outcome is displayed in a separate section.

2. Horizontal Layout with Collapsible Sections

\`\`\`
+----------------------------------+
|  Selected Example Content        |
+----------------------------------+
|        Conversation              |
| +-----------------------------+  |
| |User       |LLM              |  |
| |  Message  |  Response       |  |
| +-----------------------------+  |
| |User       |LLM              |  |
| |  Message  |  Response       |  |
| +-----------------------------+  |
+----------------------------------+
|        Accepted Outcome          |
| [Toggle]                         |
|                                  |
+----------------------------------+
|        Enhanced Outcome          |
| [Toggle]                         |
|                                  |
+----------------------------------+
\`\`\`

- The conversation is displayed horizontally, with user messages on the left and LLM responses on the right.
- The accepted outcome and enhanced outcome are displayed below the conversation in collapsible sections.
- Users can toggle the visibility of the accepted outcome and enhanced outcome sections using the [Toggle] button.

3. Tabbed Layout

\`\`\`
+----------------------------------+
|  Selected Example Content        |
+----------------------------------+
| Conversation | Accepted | Enhanced|
+----------------------------------+
|        Conversation              |
| +-----------------------------+  |
| |User       |LLM              |  |
| |  Message  |  Response       |  |
| +-----------------------------+  |
| |User       |LLM              |  |
| |  Message  |  Response       |  |
| +-----------------------------+  |
|                                  |
|                                  |
|                                  |
|                                  |
+----------------------------------+
\`\`\`

- The conversation, accepted outcome, and enhanced outcome are organized using tabs.
- The conversation tab is selected by default, displaying the conversation in a messaging app-style interface.
- Users can click on the "Accepted" and "Enhanced" tabs to view the accepted outcome and enhanced outcome, respectively.
- The tabbed layout allows users to focus on one aspect of the example at a time while providing easy navigation between the different elements.

These approaches provide different ways to organize and present the conversation, accepted outcome, and enhanced outcome within a single page. The choice of layout depends on the amount of content, the desired emphasis on each element, and the overall user experience you want to achieve.`
  },
  {
    sender: 'user',
    text: `These are all great, thanks! I'd like to develop the third approach with a few changes:

1. Condense "Accepted" and "Enhanced" into a single tab called "Outcome".
2. Instead of using tabs, let's use buttons to navigate between the two. I will already have tabs to navigate between the examples, and I don't want to overload the page with tabs.

Does this seem reasonable? Please explain why or why not. If it is reasonable, please create a new ASCII diagram that reflects these changes, and explain how the new version of the interface works.`
  },
  {
    sender: 'llm',
    text: `Yes, your proposed changes seem reasonable. Condensing "Accepted" and "Enhanced" into a single "Outcome" tab simplifies the navigation and reduces the cognitive load on users. Replacing tabs with buttons to switch between the conversation and outcome views is a good idea to avoid overloading the page with too many levels of tabs.

Here's the updated ASCII diagram reflecting these changes:

\`\`\`
+----------------------------------+
|  Selected Example Content        |
+----------------------------------+
| [Conversation] [Outcome]         |
+----------------------------------+
|        Conversation              |
| +-----------------------------+  |
| |User       |LLM              |  |
| |  Message  |  Response       |  |
| +-----------------------------+  |
| |User       |LLM              |  |
| |  Message  |  Response       |  |
| +-----------------------------+  |
|                                  |
|                                  |
|                                  |
|                                  |
+----------------------------------+
\`\`\`

Explanation of the updated interface:

1. The "Selected Example Content" section now has two buttons: "Conversation" and "Outcome".
   - The "Conversation" button is selected by default, displaying the conversation view.
   - Users can click on the "Outcome" button to switch to the outcome view.
2. When the "Conversation" button is selected:
   - The conversation between the user and the LLM is displayed in a messaging app-style interface.
   - User messages are shown on the left side, and LLM responses are shown on the right side.
   - The conversation view allows users to easily follow the dialogue flow and understand the context of the example.
3. When the "Outcome" button is selected:
   - The outcome view is displayed, showing the accepted outcome and the enhanced outcome.
   - The accepted outcome is the text created by the LLM that you plan to use outside of the conversation.
   - The enhanced outcome is your improved version of the outcome, which could be a document, software object, or something else.
   - The outcome view allows users to see the results of the conversation and understand how you enhanced the LLM-generated content.
4. Users can toggle between the conversation and outcome views using the respective buttons, allowing them to focus on one aspect of the example at a time.

This updated design maintains a clean and intuitive interface while providing users with the flexibility to navigate between the conversation and outcome views easily. The use of buttons instead of tabs helps to differentiate the navigation within the selected example content from the top-level navigation between examples.`
  },
  {
    sender: 'user',
    text: `Great, thank you! One more quick change -- in the Conversation display, let's have LLM messages on the left and User messages on the right.`
  },
  {
    sender: 'llm',
    text: `Apologies for the confusion. Here's the updated ASCII diagram with the LLM messages on the left and User messages on the right:

\`\`\`
+----------------------------------+
|  Selected Example Content        |
+----------------------------------+
| [Conversation] [Outcome]         |
+----------------------------------+
|        Conversation              |
| +-----------------------------+  |
| |LLM        |User             |  |
| |  Response |  Message        |  |
| +-----------------------------+  |
| |LLM        |User             |  |
| |  Response |  Message        |  |
| +-----------------------------+  |
|                                  |
|                                  |
|                                  |
|                                  |
+----------------------------------+
\`\`\`

Explanation of the updated interface:

1. The "Selected Example Content" section has two buttons: "Conversation" and "Outcome".
   - The "Conversation" button is selected by default, displaying the conversation view.
   - Users can click on the "Outcome" button to switch to the outcome view.
2. When the "Conversation" button is selected:
   - The conversation between the user and the LLM is displayed in a messaging app-style interface.
   - LLM responses are shown on the left side, and User messages are shown on the right side.
   - This layout mimics a typical messaging app, where the user's messages appear on the right and the other party's messages (in this case, the LLM) appear on the left.
   - The conversation view allows users to easily follow the dialogue flow and understand the context of the example.
3. When the "Outcome" button is selected:
   - The outcome view is displayed, showing the accepted outcome and the enhanced outcome.
   - The accepted outcome is the text created by the LLM that you plan to use outside of the conversation.
   - The enhanced outcome is your improved version of the outcome, which could be a document, software object, or something else.
   - The outcome view allows users to see the results of the conversation and understand how you enhanced the LLM-generated content.
4. Users can toggle between the conversation and outcome views using the respective buttons, allowing them to focus on one aspect of the example at a time.

This updated design maintains the clean and intuitive interface while aligning the conversation display with the familiar messaging app layout, where the user's messages appear on the right and the LLM's responses appear on the left.`
  },
  {
    sender: 'user',
    text: `Great, thanks for your help!`
  },
  {
    sender: 'llm',
    text: `You're welcome! I'm glad I could help you refine the design for displaying the conversation and outcome in your prompt engineering showcase web app.

To summarize, the final design includes:

1. A "Selected Example Content" section with two buttons: "Conversation" and "Outcome".
2. The conversation view displays the dialogue between the user and the LLM in a messaging app-style interface, with LLM responses on the left and user messages on the right.
3. The outcome view shows the accepted outcome (LLM-generated text) and the enhanced outcome (your improved version).
4. Users can toggle between the conversation and outcome views using the respective buttons.

This design provides a clear and intuitive way for users to explore your prompt engineering examples, understand the context of the conversations, and see the outcomes and enhancements.

If you have any further questions or need assistance with the implementation, feel free to ask. Good luck with your web app development!`}
]

export const design_final =`
\`\`\`
+----------------------------------+
|  Selected Example Content        |
+----------------------------------+
| [Conversation] [Outcome]         |
+----------------------------------+
|        Conversation              |
| +-----------------------------+  |
| |LLM        |User             |  |
| |  Response |  Message        |  |
| +-----------------------------+  |
| |LLM        |User             |  |
| |  Response |  Message        |  |
| +-----------------------------+  |
|                                  |
|                                  |
|                                  |
|                                  |
+----------------------------------+
\`\`\`

1. The "Selected Example Content" section has two buttons: "Conversation" and "Outcome".
   - The "Conversation" button is selected by default, displaying the conversation view.
   - Users can click on the "Outcome" button to switch to the outcome view.
2. When the "Conversation" button is selected:
   - The conversation between the user and the LLM is displayed in a messaging app-style interface.
   - LLM responses are shown on the left side, and User messages are shown on the right side.
   - This layout mimics a typical messaging app, where the user's messages appear on the right and the other party's messages (in this case, the LLM) appear on the left.
   - The conversation view allows users to easily follow the dialogue flow and understand the context of the example.
3. When the "Outcome" button is selected:
   - The outcome view is displayed, showing the accepted outcome and the enhanced outcome.
   - The accepted outcome is the text created by the LLM that you plan to use outside of the conversation.
   - The enhanced outcome is your improved version of the outcome, which could be a document, software object, or something else.
   - The outcome view allows users to see the results of the conversation and understand how you enhanced the LLM-generated content.
4. Users can toggle between the conversation and outcome views using the respective buttons, allowing them to focus on one aspect of the example at a time.

This updated design maintains the clean and intuitive interface while aligning the conversation display with the familiar messaging app layout, where the user's messages appear on the right and the LLM's responses appear on the left.
`