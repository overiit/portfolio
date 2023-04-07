<script lang="ts">
	import { onMount } from 'svelte';
	import { getSkills, type Skill } from '../helpers/api';
	import { scale } from 'svelte/transition';

	let skills: Skill[] = [];

	onMount(async () => {
		skills = await getSkills();
	});
</script>

<section>
	<div class="skills">
		{#each skills as skill, i}
		<a href="{skill.url}" target="_blank" class="skill" in:scale={{ delay: 75 * i }}>
			<img src="{skill.image} " alt={skill.name} title={skill.name} />
		</a>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		overflow-y: auto;

        width: 1200px;
        max-width: 100%;
		margin: 0 auto;
		.skills {
			width: calc(700px + 7rem);
			max-width: 100%;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			.skill {
				// center the image
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100px;
				width: 100px;
				margin: 1rem;
				img {
					max-width: 80%;
					max-height: 80%;
					border-radius: 5px;
					transition: max-height 0.1s ease-in-out, max-width 0.1s ease-in-out;
					&:hover {
						max-height: 90%;
						max-width: 90%;
					}
				}
			}
		}
	}
</style>
