<script>
    import Header from './main/Header.svelte';
    import Body from './main/Body.svelte';
    import Footer from './main/Footer.svelte';
   
    let current_page = "Home";
    //select-none
   
    $: hideScrollbar = ['Home', 'Prompting', 'About'].includes(current_page);
   </script>
   
   <div id="app" class="h-screen w-screen flex flex-col overflow-scroll" class:hide-scrollbar={hideScrollbar}>
    <Header bind:current_page/>
    <Body bind:current_page/>
    <Footer/>
   </div>