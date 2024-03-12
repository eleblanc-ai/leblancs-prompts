<script>
    import Home from "../pages/home/Home.svelte";   
    import PromptingGuide from "../pages/prompting-guide/PromptingGuide.svelte";
    import Examples from "../pages/examples/Examples.svelte";
    import About from "../pages/about/About.svelte";

    export let current_page;

    let views = {"Home":Home,
                 "Prompting":PromptingGuide,
                 "Examples":Examples,
                 "About": About
                 }
</script>
<div id="body" class="w-full m-auto h-full ">
    <svelte:component this={views[current_page]}/>
</div>
