<script lang="ts">
	import SectionWrapper from '$lib/shared/SectionWrapper.svelte';
	import SocialLinks from '$lib/shared/SocialLinks.svelte';
</script>

<SectionWrapper sectionId="about-me" title="About me">
	{#snippet mainContent()}
		<img
			src="images/about-me.jpg"
			alt="The boy sit on the chair and waving. There is a desk with personal computer and many books to read"
			class="mt-10"
		/>
	{/snippet}
	{#snippet additionalContent()}
		<div class="flex flex-col">
			<div class="px-5 xl:px-0">
				<h3 class="mb-3 text-2xl xl:text-4xl">Hello!</h3>
				<div class="flex flex-col gap-4">
					<p class="xl:text-lg 2xl:text-xl">
						My name is Wojtek. I became interested in programming around July 2021. It wasn’t easy.
						I had tried learning a few times before July 2021, but I couldn’t stay consistent. I
						explored different areas of IT, from game development to cybersecurity, but none of them
						interested me enough to keep going.
					</p>
					<p class="xl:text-lg 2xl:text-xl">
						However, front-end development was different. It’s satisfying because I can see the
						results of my work from just a single line of code. Front-end development became my
						gateway into the world of IT. Since July 2021, I’ve been consistently learning new
						things, reading articles, and working on side projects.
					</p>
					<p class="xl:text-lg 2xl:text-xl">I’m not afraid of new front-end technologies.</p>
				</div>
			</div>
			<div class="mt-10 hidden sm:flex sm:flex-col sm:px-5 xl:px-0">
				<SocialLinks size="medium" />
				<p class="mt-5 text-2xl tracking-wider">wojtekpietraszuk@gmail.com</p>
			</div>
		</div>
	{/snippet}
</SectionWrapper>
