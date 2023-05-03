<script lang="ts">
	import { onMount } from "svelte";

    

    // redirect to /about
    onMount(() => {
        window.location.pathname = "/about"
    })
</script>