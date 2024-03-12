<script>
    import Bio from './bio/Bio.svelte'
    import Stats from './stats/Stats.svelte'
</script>

<div id="body" class="h-full pt-16 
                      flex flex-col md:flex-row">
    <div id="body-bio" class="basis-1/2">
        <Bio/>
        
    </div>

    <div id="body-stats" class="basis-1/2">
        <Stats/>
    </div> 
</div>