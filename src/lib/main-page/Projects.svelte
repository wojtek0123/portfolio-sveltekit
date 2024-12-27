<script lang="ts">
	import SectionWrapper from '$lib/shared/SectionWrapper.svelte';
	import projects from '../data/projects.json';
</script>

<SectionWrapper sectionId="projects" title="Projects">
	{#snippet mainContent()}
		{#each projects as { name, description, technologies, github_url, live_url, image }}
			<div class="w-full bg-black text-white">
				<h2 class="mb-5 text-center text-2xl">{name}</h2>
				<div class="grid xl:gap-5 2xl:grid-cols-2">
					<a href={live_url} rel="noopener noreferrer" target="_blank">
						<img src={image.url} alt={image.alt} />
					</a>
					<div class="mt-5 xl:mt-0">
						<div class="text-lg">
							<p>{description}</p>
						</div>

						<h4 class="mt-3 text-lg">Built with:</h4>
						<div class="flex flex-wrap gap-1">
							{#each technologies as technology}
								<span class="rounded bg-white px-2 py-1 text-black">{technology}</span>
							{/each}
						</div>
						<div class="mt-5 flex items-center justify-evenly text-white">
							<a
								href={github_url}
								rel="noopener noreferrer"
								target="_blank"
								class="rounded bg-yellow-500 px-5 py-2 text-black transition-colors hover:bg-yellow-600"
							>
								Github
							</a>
							{#if live_url}
								<a
									href={live_url}
									rel="noopener noreferrer"
									target="_blank"
									class="rounded bg-yellow-500 px-5 py-2 text-black transition-colors hover:bg-yellow-600"
								>
									Live
								</a>
							{/if}
						</div>
					</div>
				</div>
				<div class="my-10 h-[0.1rem] w-full bg-white"></div>
			</div>
		{/each}
	{/snippet}
</SectionWrapper>
