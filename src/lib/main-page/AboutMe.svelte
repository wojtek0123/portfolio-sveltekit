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
						My name is Wojtek. I got intersted in programming in around july 2021. This wasn't easy
						I have couple of tries before july 2021 and couldn't stay consisted with learning. I
						tried different aspects of IT jobs from game dev to cybersecurity but non of these
						intrested me enough to continue learning.
					</p>
					<p class="xl:text-lg 2xl:text-xl">
						But something different was for front-end. It's satisaing because from one line of code
						i can see the result of my work. The front-end was to gate to IT. From july 2021 I
						constantly learn new things, reading articles and develop my side projects.
					</p>
					<p class="xl:text-lg 2xl:text-xl">I am not afraid of new front-end technologies.</p>
				</div>
			</div>
			<div class="mt-10 hidden sm:flex sm:flex-col sm:px-5 xl:px-0">
				<SocialLinks size="medium" />
				<p class="mt-5 text-2xl tracking-wider">wojtekpietraszuk@gmail.com</p>
			</div>
		</div>
	{/snippet}
</SectionWrapper>
