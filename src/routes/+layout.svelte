<script lang="ts">
	import Header from '../components/header.svelte';
	import Navigation from '../components/navigation.svelte';

	const DEFAULT_TITLE = "Hey! I'm Henrik Schwebcke";
	let title = DEFAULT_TITLE;
	let currentPage: string | undefined;
</script>

<svelte:window on:blur={() => (title = 'Hello?')} on:focus={() => (title = DEFAULT_TITLE)} />
<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content="A software engineer with {new Date().getFullYear() -
			2019}+ years of experience delivering full-stack applications."
	/>
</svelte:head>
<main>
	<Header />
	<slot />
	<Navigation onPageChange={(page) => (currentPage = page)} />
</main>

<style lang="scss">
	main {
		display: flex;
		flex-flow: column;
		background: linear-gradient(135deg, #50bceb, #3bbe7f);
		padding: 1.5rem;
		height: calc(100% - 3rem);
		max-height: 100vh;
		justify-content: space-between;
	}
</style>
