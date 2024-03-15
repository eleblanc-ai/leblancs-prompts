<script>
    import { Chart } from 'flowbite-svelte'
    import { options } from './options'
</script>


<div id="use-cases" class="m-auto relative pt-10">

    <h5 id="uc-title" class="text-lg font-bold text-gray-900 m-auto w-full absolute bg-green-300 text-center shadow">Use Cases</h5>
    <div class="pt-10 text-center">
        <!-- Hover over or long press slices for Use Case details. -->
    </div>
    <div id="uc-pie">
        <Chart { options } class="pt-6"/>
    </div>
</div>
