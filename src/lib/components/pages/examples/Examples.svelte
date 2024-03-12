<script>
    
    import { Tabs, TabItem, Badge } from 'flowbite-svelte';

    import ExampleContent from "./ExampleContent.svelte";
    import { prompt_collaboration_convo, prompt_collaboration_intro } from './showcase/prompt-collaboration'
    import { showcase_design_convo, showcase_design_intro } from './showcase/showase-interface-design';
    import { implement_tab_convo,implement_tab_intro} from './showcase/implement-new-tab';
    
</script>
<div class="w-[85%] xl:max-w-[65%] m-auto pt-16 flex flex-col pb-16">
    <h3 class="text-3xl mt-10 mb-4">Prompting Examples</h3>
    <Badge color="purple" class="text-md">Section implementation and writeups created with assistance from Claude</Badge>
    <p class="mt-4">

       Here, you can explore some examples of conversations that I've had with Claude 3, and the outcomes of those conversations. Click one of the tabs below to select an example. To navigate through an example, use the "Conversation" and "Outcome" buttons located at the top of the example container.</p>
    
        <p>
         Clicking the "Conversation" button will display the dialogue between the user and the AI language model, presented in a messaging app-style format. This view allows you to follow the flow of the interaction and understand the context of the example.</p>
         
         <p>Clicking the "Outcome" button will reveal the result of the interaction, which may include a completed document, a comparison of before and after versions, or the implementation of a component created by the AI. The outcome presentation will also include highlights of the interaction and an explanation of why the outcome is effective. </p>
            
      <p>By exploring both the conversation and the outcomes, you can gain insights into the prompt engineering process and see the impact of effective techniques on the quality of the AI-generated results.
      </p>
    <Tabs class="pt-2"  style="underline">
        <TabItem open title="Coding Prompt Collaboration">
            <ExampleContent title="Coding Prompt Collaboration with Claude"
                            intro={prompt_collaboration_intro} 
                            conversation={prompt_collaboration_convo} 
                            outcome="promt-collab"/>
        </TabItem>
        <TabItem  title="Interface Design">
            <ExampleContent conversation={showcase_design_convo} 
                            intro={showcase_design_intro} 
                            title="Showcase Interface Design with Claude"
                            outcome="design-highlights"/>
        </TabItem>
        <TabItem title="Svelte Component Implementation">
            <ExampleContent conversation={implement_tab_convo}
                            intro={implement_tab_intro}
                            title="Implementing a Svelte Component with Claude"
                            outcome="tab-implementation"/>
        </TabItem>
    </Tabs>
    
</div>

