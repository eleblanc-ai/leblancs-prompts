<script>
    import Bio from './bio/Bio.svelte'
    import Stats from './stats/Stats.svelte'
    export let hide_stats;
    console.log("Home;" + hide_stats)
</script>

<div id="guide-container" class="mt-4 md:mt-6  m-auto h-full flex flex-col md:flex-row overflow-auto max-h-[calc(100vh-6rem)] ">
  
    <div id="body-bio" class="basis-1/2">
        <Bio/>
        
    </div>
    <div id="body-stats" class="basis-1/2 -z-50">
        <Stats/>
    </div> 
    
</div>

