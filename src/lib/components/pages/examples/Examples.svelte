<script>

    
    import { Tabs, TabItem, Badge } from 'flowbite-svelte';
    import { AccordionItem, Accordion } from 'flowbite-svelte';

    import ExampleContent from "./ExampleContent.svelte";
    import { prompt_collaboration_convo, prompt_collaboration_intro } from './showcase/prompt-collaboration'
    import { showcase_design_convo, showcase_design_intro } from './showcase/showase-interface-design';
    import { implement_tab_convo,implement_tab_intro} from './showcase/implement-new-tab';
    import { mushroom_guide_conversation, mushroom_guide_intro } from './showcase/mushroom-guide'
    import Gallery from './showcase/Gallery.svelte'
</script>
<div class="w-[95%] md:w-[85%] xl:max-w-[65%] m-auto pt-16 flex flex-col pb-16">
    <h3 class="text-3xl mt-10 mb-4">Prompting Examples</h3>
    <Badge color="purple" class="text-md">This section's implementation and writeups were created with some assistance from Claude</Badge>
    <p class="mt-4">

       Here, you can explore some examples of conversations that I've had with Claude 3, and the outcomes of those conversations.</p>


       <Accordion class="py-4">
        <AccordionItem>
          <span slot="header">How to use this page</span>
          <p>
            Click one of the tabs below to select an example. To navigate through an example.
          </p>
          <p>
            In any example, clicking the "Chat" button will display the dialogue between the user and the AI language model, presented in a messaging app-style format. This view allows you to follow the flow of the interaction and understand the context of the example.</p>
            
            <p>Clicking the "Result" button will reveal the outcome of the interaction, which may include a completed document, a comparison of before and after versions, or the implementation of a component created by the AI. The outcome presentation will also include highlights of the interaction and an explanation of why the outcome is effective. </p>
               
        
        </AccordionItem>
      </Accordion>

    <Tabs class="pt-2"  style="underline">
        <TabItem open>
            <span class="text-[1rem]" slot="title">Coding Prompt Collab</span>

            <ExampleContent title="Coding Prompt Collaboration with Claude"
                            intro={prompt_collaboration_intro} 
                            conversation={prompt_collaboration_convo} 
                            outcome="promt-collab"/>
        </TabItem>
        <TabItem >
            <span class="text-[1rem]" slot="title">UI Design</span>

            <ExampleContent conversation={showcase_design_convo} 
                            intro={showcase_design_intro} 
                            title="Showcase Interface Design with Claude"
                            outcome="design-highlights"/>
        </TabItem>
        <TabItem >
            <span class="text-[1rem]" slot="title">Svelte Component Implementation</span>

            <ExampleContent conversation={implement_tab_convo}
                            intro={implement_tab_intro}
                            title="Implementing a Svelte Component with Claude"
                            outcome="tab-implementation"/>
        </TabItem>
        <TabItem >
            <span class="text-[1rem]" slot="title">Mushroom Growing Guide</span>

            <ExampleContent conversation={mushroom_guide_conversation}
                            intro={mushroom_guide_intro}
                            title="Writing a Mushroom Growing Guide with Claude"
                            outcome="mushroom-guide"/>
        </TabItem>
        <TabItem >
          <span class="text-[1rem]" slot="title">DALL-E Art Gallery</span>

          <Gallery/>
      </TabItem>
        
    </Tabs>
    
</div>

