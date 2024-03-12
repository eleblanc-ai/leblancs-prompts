<script>
    import BioAvatar from './BioAvatar.svelte';
    import BioDescription from './BioDescription.svelte';
    import BioButtonPanel from './BioButtonPanel.svelte';
    import BioTimeline from './BioTimeline.svelte';
</script>

<div id="bio" class="flex flex-col
                     max-w-lg 
                     max-h-[50%]
                     h-5/6
                     w-4/5
                     m-auto
                     float-none
                     md:float-right
                     pr-0
                     md:pr-10
                     z-0
                     ">
    <BioAvatar/>
    <BioDescription/>
    <BioButtonPanel/>
    <BioTimeline/>
</div>