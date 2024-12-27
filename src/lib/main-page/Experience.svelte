<script lang="ts">
	import SectionWrapper from '$lib/shared/SectionWrapper.svelte';
</script>

<SectionWrapper sectionId="experience" title="Experience">
	{#snippet additionalContent()}
		<p>
			Głównie skupiam się na tworzeniu aplikacji webowych w technologii Angular, ale inne
			technologie do tworzenia nowoczesnych stron internetowych nie są mi straszne.
		</p>
	{/snippet}
	{#snippet mainContent()}
		<div class="flex flex-col">
			<div class="flex w-full gap-5">
				<div class="mt-5 flex flex-col items-center gap-4">
					<div class="h-2 w-2 rounded-full bg-white"></div>
					<div class="h-full w-[1px] bg-white"></div>
				</div>
				<div class="flex flex-col">
					<span class="text-3xl font-bold text-yellow-500 2xl:text-5xl">CloudFerro S.A.</span>
					<span class="mb-3 text-sm 2xl:text-xl">03.07.2023 - 01.02.2024</span>
					<span class="mb-5 mt-3 text-xl 2xl:text-2xl">
						Trainee Front-end Developer (Angular)
					</span>
				</div>
			</div>

			<div class="flex w-full gap-5">
				<div class="mt-5 flex flex-col items-center gap-4">
					<div class="h-2 w-2 rounded-full bg-white"></div>
					<div class="h-full w-[1px] bg-white"></div>
				</div>
				<div class="flex flex-col">
					<span class="text-3xl font-bold text-yellow-500 2xl:text-5xl">CloudFerro S.A.</span>
					<span class="mb-3 text-sm 2xl:text-xl">02.02.2024 - present</span>
					<span class="mb-5 mt-3 text-xl 2xl:text-2xl"> Junior Front-end Developer (Angular) </span>
				</div>
			</div>
		</div>
	{/snippet}
</SectionWrapper>
