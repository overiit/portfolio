<script lang="ts">
	import Header from "../components/header.svelte";
	import Navigation from "../components/navigation.svelte";
	import About from "../components/sections/about.svelte";
	import Experience from "../components/sections/experience.svelte";
	import Skills from "../components/sections/skills.svelte";
    
    const DEFAULT_TITLE = "Hey! I'm Henrik Schwebcke";
    let title = DEFAULT_TITLE;
    let currentPage: string | undefined;

</script>
<svelte:window on:blur={() => title = "Hello?"} on:focus={() => title = DEFAULT_TITLE} />
<svelte:head>
    <title>{title}</title>
    <meta name="description" content="A software engineer with 4+ years of experience delivering full-stack applications." />
</svelte:head>
<main>
    <Header />
    {#if currentPage === "ABOUT"}
    <About />
    {:else if currentPage === "WORK"}
    <Experience />
    {:else if currentPage === "SKILLS"}
    <Skills />
    {:else if currentPage === "PROJECTS"}
        <!-- <Projects /> -->
        <center style="color: white;">coming soon</center>
    {/if}
    <Navigation onPageChange={page => currentPage = page} />
</main>

<style lang="scss">
    main {
        display: flex;
        flex-flow: column;
        background: linear-gradient(135deg, #50BCEB, #3BBE7F);
        padding: 1.5rem;
        height: calc(100% - 3rem);
        max-height: 100vh;
        justify-content: space-between;
    }
</style>