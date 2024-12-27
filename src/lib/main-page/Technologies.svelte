<script lang="ts">
	import SectionWrapper from '$lib/shared/SectionWrapper.svelte';
</script>

<SectionWrapper sectionId="technologies" title="Technologies">
	{#snippet mainContent()}
		<div
			class="scrollbar-rounded-[1rem] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-yellow-500 flex max-h-[65vh] w-full flex-wrap gap-5 overflow-y-auto overflow-x-hidden xl:max-h-[80vh]"
		>
			<img src="icons/angular.svg" alt="angular icon logo" title="Angular" class="h-14 2xl:h-14" />
			<img src="icons/rxjs_logo.svg" alt="graphql icon logo" class="h-14 2xl:h-14" title="RxJS" />
			<img src="icons/react.svg" alt="react icon logo" class="h-14 2xl:h-14" title="React" />
			<img
				src="icons/nextjs-svgrepo-com.svg"
				alt="nextjs icon logo"
				class="h-14 2xl:h-14"
				title="NextJS"
			/>
			<img
				src="icons/typescript-brand.svg"
				alt="typescript icon logo"
				class="h-14 2xl:h-14"
				title="TypeScript"
			/>
			<img
				src="icons/graphql-logo-2.svg"
				alt="graphql icon logo"
				class="h-14 2xl:h-14"
				title="GraphQL"
			/>
			<img
				src="icons/apollo-graphql-1.svg"
				alt="apollo icon logo"
				class="h-14 2xl:h-14"
				title="Apollo"
			/>
			<img src="icons/prisma-2.svg" alt="prisma icon logo" class="h-14 2xl:h-14" title="Prisma" />
			<img
				src="icons/js-brands.svg"
				alt="javascript icon logo"
				class="h-14 2xl:h-14"
				title="JavaScript"
			/>
			<img
				src="icons/tailwindcss-icon.svg"
				alt="tailwindcss icon logo"
				class="h-14 2xl:h-14"
				title="TailwindCSS"
			/>
			<img src="icons/sass-brand.svg" alt="sass icon logo" class="h-14 2xl:h-14" title="SASS" />
			<img src="icons/css3-brands.svg" alt="css3 icon logo" class="h-14 2xl:h-14" title="CSS" />
			<img src="icons/html5-brands.svg" alt="html5 icon logo" class="h-14 2xl:h-14" title="HTML" />
			<img src="icons/jest.svg" alt="jest icon logo" title="Jest" class="h-14 2xl:h-14" />
			<img
				src="icons/react-testing-library.svg"
				alt="react testing library icon logo"
				class="h-14 2xl:h-14"
				title="React testing library"
			/>
		</div>
	{/snippet}
</SectionWrapper>
