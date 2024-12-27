<script lang="ts">
	import type { Snippet } from 'svelte';

	interface SectionWrapperProps {
		sectionId: string;
		title: string;
		mainContent: Snippet;
		additionalContent?: Snippet;
	}

	const { sectionId, title, mainContent, additionalContent }: SectionWrapperProps = $props();
</script>

<section
	id="@{sectionId}"
	class="relative flex min-h-[100svh] w-screen snap-start flex-col items-center justify-center bg-black"
>
	<div
		class="xl:grid-rows-[10rem, 1fr] grid w-full max-w-[80vw] place-items-center gap-5 xl:grid-cols-2 xl:gap-10"
	>
		<div class="flex w-full flex-col items-center justify-center xl:col-span-3 xl:items-center">
			<h2 class="text-center text-4xl capitalize sm:text-5xl xl:text-7xl">{title}</h2>
		</div>

		{#if additionalContent}
			<div
				class="flex max-h-[65svh] w-full items-start overflow-x-hidden overflow-y-hidden xl:col-start-1 xl:row-start-2 xl:max-h-[80svh]"
			>
				{@render additionalContent?.()}
			</div>
		{/if}
		<div
			class=" {additionalContent
				? 'xl:col-start-2'
				: 'xl:col-span-3'} scrollbar-rounded-[1rem] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-yellow-500 flex max-h-[65svh] w-full flex-col overflow-y-auto overflow-x-hidden xl:row-start-2 xl:max-h-[80vh] xl:items-center"
		>
			{@render mainContent()}
		</div>
	</div>
</section>
