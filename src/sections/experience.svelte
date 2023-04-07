<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { getExperience, type Experience } from '../helpers/api';

	let experiences: (Experience & { odd?: boolean })[] = [];
	onMount(async () => {
		experiences = await getExperience();
		let lastOdd = true;
		for (let i = 0; i < experiences.length; i++) {
			const prevExp = experiences[i - 1];
			const currExp = experiences[i];

			if (!prevExp) {
				currExp.odd = lastOdd;
			} else {
				if (prevExp.company_slug !== currExp.company_slug) {
					lastOdd = !lastOdd;
				}
				currExp.odd = lastOdd;
			}
		}
	});

	function formatDate(date: Date) {
		return `${date.toLocaleString('en-us', { month: 'short' })} ${date.getFullYear()}`;
	}
</script>

<section>
	<div class="timeline">
		<div class="timeline-date" in:fly={{ y: -100, duration: 150 }}>
			{experiences[0]?.endTime.getFullYear()}
		</div>
		<div class="timeline-rows">
			{#each experiences as experience, i}
				<div class="timeline-entry {experience.odd ? 'odd' : ''}" in:fade>
					<h3>{experience.position}</h3>
					<a href={experience.company_url} target="_blank" class="timeline-logo">
						<img src="/companies/{experience.company_slug}.png" alt={experience.company} />
					</a>
					<div class="date-range">
						{formatDate(experience.startTime)} - {formatDate(experience.endTime)}
					</div>
					<ul class="details">
						{#each experience.description as desc}
							<li>{desc}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<div class="timeline-date" in:fly={{ y: 100, duration: 150 }}>
			{experiences[experiences.length - 1]?.endTime.getFullYear()}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		overflow-y: auto;

		.timeline {
			flex: 1;
			height: 100%;
			display: flex;
			flex-flow: column;
			justify-content: center;
			color: white;
			height: 100%;
			overflow: hidden;
			.timeline-date {
				width: calc(100% - 14px);
				text-align: center;
				font-weight: 700;
			}
			.timeline-rows {
				max-height: calc(100% - 4rem);
				overflow-y: scroll;
				overflow-x: hidden;
				width: 100%;
			}
			.timeline-entry {
				position: relative;
				margin-left: calc(50% - 1px);
				padding: 25px;
				color: white;

				.timeline-logo {
					position: absolute;
					top: calc(26px + 1.2rem);
					height: 30px;
					width: 30px;
					img {
						height: 100%;
						width: 100%;
						object-fit: contain;
					}
					.name {
						display: none;
						word-break: keep-all;
						position: absolute;
						width: auto;
						font-size: 0.7rem;
						font-weight: 700;
						background-color: white;
						color: #333333;
						padding: 0.5rem;
					}
					&:hover {
						.name {
							display: inherit;
						}
					}
				}

				&::before {
					content: '';
					position: absolute;
					top: calc(25px + 1.2rem);
					width: 15px;
					height: 2px;
					background-color: white;
				}
				&.odd {
					margin-left: 0;
					margin-right: calc(50% - 1px);
					border-right: 2px solid white;
					.timeline-logo {
						right: 0;
						transform: translateX(50%) translateY(-50%);
						&:hover {
							.name {
								left: 100%;
							}
						}
					}
					&::before {
						right: 0;
					}
				}
				&:not(.odd) {
					&::before {
						left: 0;
					}
					border-left: 2px solid white;
					.timeline-logo {
						left: 0;
						transform: translateX(-50%) translateY(-50%);
						&:hover {
							.name {
								right: 100%;
							}
						}
					}
				}
				h3 {
					font-weight: 700;
					font-size: 1.2rem;
					line-height: 1.2rem;
				}
				.date-range {
					color: rgba(255, 255, 255, 0.65);
					font-size: 0.7rem;
				}
				.details {
					font-size: 0.85rem;
					margin-left: 15px;
				}
			}
		}
	}

	@media only screen and (max-width: 600px) {
		section {
			margin-right: -1.5rem;
			.timeline {
				.timeline-date {
					text-align: left;
				}
				.timeline-entry {
					&,
					&.odd {
						margin: 0;
						&::before {
							left: 0;
						}
						margin-left: 1rem;
						border-right: none;
						border-left: 2px solid white;
						.timeline-logo {
							left: 0;
							transform: translateX(-50%) translateY(-50%);
						}
					}
					h3 {
						font-size: 1rem;
						line-height: 1rem;
					}
					.date-range {
						font-size: 0.6rem;
					}
					.details {
						font-size: 0.7rem;
						margin-left: 15px;
					}
				}
			}
		}
	}
</style>
