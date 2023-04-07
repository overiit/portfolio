<script lang="ts">
	import { fly } from 'svelte/transition';
	import Tabs from './tabs.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const PAGES = ['ABOUT', 'WORK', 'SKILLS'];
	let active: string = '';
    export let onPageChange: (page: string) => void;

	onMount(() => {
		const path = window.location.pathname.substring(1);
		if (path) {
			active = path.replace('#', '').toUpperCase();
		} else {
			active = PAGES[0];
		}
        onTabClick(active);
	});

	const onTabClick = (page: string) => {
		active = page;
		goto(`/${page.toLowerCase()}`, {
			replaceState: true
		});
        onPageChange(page);
	};
</script>

<nav class="tabs-container" in:fly={{ y: -25, duration: 300 }}>
	<Tabs tabs={PAGES} {active} {onTabClick} />
</nav>

<style lang="scss">
	nav {
		width: 100%;
		max-width: 900px;
		width: 100%;
		margin: 0 auto;
		flex-shrink: 0;
	}
</style>
