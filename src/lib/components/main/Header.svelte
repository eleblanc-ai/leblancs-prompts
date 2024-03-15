<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

    export let current_page;
    export let hide_stats;

    const changeView = async (id, toggle) => {
        current_page = id;
        if (window.innerWidth <= 768) {
            toggle(); // Hide the menu after selecting a menu item only on mobile devices
            hide_stats = false; // Reset hide_stats when a menu item is selected on mobile
        }
    }

    const toggleNavbar = (isOpen) => {
        if (window.innerWidth <= 768) {
            hide_stats = isOpen; // Set hide_stats based on the navbar open state on mobile
        }
    }
</script>

<style>
    @media (max-width: 768px) {
        .hidden-mobile {
            display: none;
        }
    }
    :global(.navbar-collapse) {
        z-index: 9999;
    }
</style>

<div id="header" class="basis-10 flex flex-row relative bg-white z-7000">         
    <Navbar let:hidden let:toggle class="m-auto py-0 h-15 fixed shadow-lg">
        <NavBrand href="/">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <span on:click={() => changeView("Home", toggle)} class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">LeBlanc's Prompts</span>
        </NavBrand>
        <NavHamburger on:click={() => {
            toggle();
            toggleNavbar(!hidden);
        }} class="lg:hidden z-10000" />
        <NavUl class="hidden-mobile lg:flex z-1000 navbar-collapse">
            <NavLi class="text-lg font-semibold cursor-pointer" on:click={() => changeView("Home", toggle)}>Home</NavLi>
            <NavLi class="text-lg font-semibold cursor-pointer" on:click={() => changeView("Prompting", toggle)}>Prompting Guide</NavLi>
            <NavLi class="text-lg font-semibold cursor-pointer" on:click={() => changeView("Examples", toggle)}>Examples</NavLi>
            <NavLi class="text-lg font-semibold cursor-pointer" on:click={() => changeView("About", toggle)}>About</NavLi>
        </NavUl>
    </Navbar> 
</div>