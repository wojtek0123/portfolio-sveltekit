<script lang="ts">
	import SectionWrapper from '$lib/shared/SectionWrapper.svelte';
	import SocialLinks from '$lib/shared/SocialLinks.svelte';
</script>

<SectionWrapper sectionId="about-me" title="O mnie">
	{#snippet mainContent()}
		<img
			src="icons/undraw_hello.svg"
			alt="The boy sit on the chair and waving. There is a desk with personal computer and many books to read"
			class="mt-10"
		/>
	{/snippet}
	{#snippet additionalContent()}
		<div class="flex flex-col">
			<div class="px-5 xl:px-0">
				<h3 class="mb-3 text-2xl xl:text-4xl">Cześć!</h3>
				<p class="xl:text-lg">
					Jestem programistą i skupiam się na tworzeniu aplikacji oraz stron internetowych. W
					zawodzie pracuję od lipca 2023 roku.
				</p>
			</div>
			<div class="mt-10 hidden sm:flex sm:flex-col sm:px-5 xl:px-0">
				<SocialLinks size="medium" />
				<p class="mt-5 text-2xl tracking-wider">wojtekpietraszuk@gmail.com</p>
			</div>
		</div>
	{/snippet}
</SectionWrapper>
