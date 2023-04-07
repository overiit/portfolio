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
		<!-- each 5 times -->
		{#each skills as skill, i}
			<div class="skill" in:scale>
				<!-- image with typescript logo -->
				<img src="{skill.image} " alt={skill.name} title={skill.name} />
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		overflow-y: auto;
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
					border-radius: 0.5rem;
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
