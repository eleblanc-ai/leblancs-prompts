<script>
    import PromptingAreas from './prompting-areas/PromptingAreas.svelte'
    import UseCases from './usecases/UseCases.svelte';
</script>
<div id="stats" class="flex flex-col max-w-lg h-4/5 pl-0 md:pl-10 w-4/5 m-auto md:m-0 pt-16 md:pt-0 ">
    <div id="prompt-areas" class="basis-1/2 h-full w-full pt-3 -z-50">
        <PromptingAreas/>
    </div>
    <div id="use-cases" class="basis-1/2 h-full w-full pt-7 -z-50">
        <UseCases/>
    </div>
    <p class="pt-10 pb-16 italic text-sm text-center">Estimated across contracted and independent projects. 
</div>