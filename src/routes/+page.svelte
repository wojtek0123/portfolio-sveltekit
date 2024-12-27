<script lang="ts">
	import Header from '$lib/main-page/Header.svelte';
	import AboutMe from '$lib/main-page/AboutMe.svelte';
	import Experience from '$lib/main-page/Experience.svelte';
	import Projects from '$lib/main-page/Projects.svelte';
	import { onMount } from 'svelte';
	import Collaboration from '$lib/main-page/Collaboration.svelte';

	let sectionIds: string[] = [];
	let activeSection: string | null = null;
	let observer: IntersectionObserver;

	function changeActiveSectionIndex(sectionId: string) {
		const section = document.getElementById(`${sectionId}`);

		section?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'start'
		});
	}

	function scrollHandler() {}

	function handleIntersect(entries: IntersectionObserverEntry[]) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				activeSection = entry.target.id;
			}
		});
	}

	onMount(() => {
		observer = new IntersectionObserver(handleIntersect, {
			root: document.querySelector('#scroll-container'),
			threshold: 0.5 // Adjust this value as needed
		});

		const section = document.querySelectorAll('header, section');
		sectionIds = Array.from(section).map((section) => section.id);

		activeSection = sectionIds[0];

		section.forEach((s) => observer.observe(s));
	});
</script>

<div
	class="fixed bottom-4 left-1/2 z-10 flex w-fit -translate-x-1/2 items-center gap-2 xl:left-4 xl:top-1/2 xl:-translate-y-1/2 xl:translate-x-0 xl:flex-col xl:justify-center"
>
	{#each sectionIds as section}
		<button
			aria-label={section}
			on:click={() => changeActiveSectionIndex(section)}
			class="h-3 w-3 cursor-pointer rounded-full bg-white {activeSection === section
				? 'bg-yellow-400'
				: 'bg-white'}"
		></button>
	{/each}
</div>

<div
	id="scroll-container"
	on:wheel={scrollHandler}
	class="xl:scrollbar-none relative h-screen snap-both snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth bg-black text-white selection:bg-white selection:text-black xl:overflow-x-hidden xl:overflow-y-scroll"
>
	<Header />
	<AboutMe />
	<Experience />
	<Collaboration />
	<Projects />
</div>
