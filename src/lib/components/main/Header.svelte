<script>
    import { Navbar, NavBrand, NavLi, NavUl,NavHamburger } from 'flowbite-svelte';

    export let current_page;
    
    const changeView = async (id) =>{
        current_page = id
    }
</script>

<div id="header" class="basis-10
                        flex flex-row
                        relative bg-white">         
    <Navbar let:hidden let:toggle class="
                                         m-auto 
                                         py-0 
                                         h-15
                                         fixed
                                         shadow-lg
                                         z-1000 ">
        <NavBrand href="/">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <span on:click={() => changeView("Home")} class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">LeBlanc's Prompts</span>
        </NavBrand>
        <NavHamburger on:click={toggle} />
        <NavUl {hidden}>
            <NavLi class="text-lg font-semibold cursor-pointer" on:click={() => changeView("Home")}>Home</NavLi>
            <NavLi class="text-lg font-semibold cursor-pointer" on:click={() => changeView("Prompting")}>Prompting Guide</NavLi>
            <NavLi class="text-lg font-semibold cursor-pointer" on:click={() => changeView("Examples")}>Examples</NavLi>
            <NavLi class="text-lg font-semibold cursor-pointer" on:click={() => changeView("About")}>About</NavLi>
        </NavUl>
    </Navbar> 
</div>