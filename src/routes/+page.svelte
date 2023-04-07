<script lang="ts">
	import { onMount } from "svelte/types/runtime/internal/lifecycle";

    // redirect to /about
    onMount(() => {
        window.location.pathname = "/about"
    })
</script>