<script>
    import { GradientButton } from 'flowbite-svelte';
</script>

<div id="bio-button-panel" class="flex flex-row xs:flex-col
                                  m-auto 
                                  text-center
                                  pb-4">

    <!-- <div class="basis-1/3 p-1">
        <a href="LeBlanc_resume_2023.pdf">
            <GradientButton class="shadow" color="pinkToOrange">Summary</GradientButton>
        </a>
    </div> -->

    <div class="basis-1/3 p-1">
        <a href="LeBlanc_CV_2024.pdf">
            <GradientButton class="shadow" color="pinkToOrange">CV</GradientButton>        
        </a>
    </div>
    
    <div class="basis-1/3 p-1">
        <a href="https://www.linkedin.com/in/eleblanc-ai/">
            <GradientButton class="shadow" color="pinkToOrange">LinkedIn</GradientButton>
        </a>
    </div>
    <div class="basis-1/3 p-1">
        <a href="https://github.com/eleblanc-ai">
            <GradientButton class="shadow" color="pinkToOrange">GitHub</GradientButton>
        </a>
    </div>
</div>