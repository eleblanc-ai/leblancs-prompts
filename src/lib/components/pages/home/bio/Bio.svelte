<script>
    import BioAvatar from './BioAvatar.svelte';
    import BioDescription from './BioDescription.svelte';
    import BioButtonPanel from './BioButtonPanel.svelte';
    import BioTimeline from './BioTimeline.svelte';
</script>

<div id="bio" class="flex flex-col
                     max-w-lg 
                     max-h-[65%]
                     h-6/7
                     w-5/6
                     m-auto
                     float-none
                     md:float-right
                     pr-0
                     md:pr-10
                     z-0
                     py-5
                     ">
    <BioAvatar/>
    <BioDescription/>
    <BioButtonPanel/>
    <BioTimeline/>
</div>