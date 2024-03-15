<script>
    import { Chart } from 'flowbite-svelte';
    import { options } from './options';
</script>

<div id="prompting-areas" class="m-auto relative">

    <h5 id="pa-title" class="text-lg font-bold text-gray-900 m-auto w-full absolute bg-green-300 text-center shadow">Top Prompting Areas</h5>
    <div class="pt-10 text-center">
        <!-- Hover over or long press slices for Prompting Area details. -->
    </div>
    <div id="pa-donut">
        <Chart { options } class="pt-6"/>
    </div>
</div>

