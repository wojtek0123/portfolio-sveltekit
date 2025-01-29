<script lang="ts">
	import SectionWrapper from '$lib/shared/SectionWrapper.svelte';
</script>

<SectionWrapper sectionId="contact" title="Contact">
	{#snippet additionalContent()}
		<form
			action="https://formsubmit.co/c94e1eed968e8af34282467c031a69b1"
			method="POST"
			class="mb-10 flex w-full flex-col gap-5 text-black selection:bg-black selection:text-white min-[2300px]:w-1/2"
		>
			<input
				class="w-full rounded p-2 text-xl xl:max-w-2xl"
				type="email"
				placeholder="your email"
				pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{4}$"
				name="email"
				id="email"
				required
			/>
			<input
				class="w-full rounded p-2 text-xl xl:max-w-2xl"
				type="text"
				name="subject"
				placeholder="subject"
				required
			/>
			<textarea
				class="h-40 max-h-80 w-full rounded p-2 text-xl xl:h-80 xl:max-w-2xl"
				placeholder="message"
				name="message"
				id="message"
				required
			></textarea>
			<button
				class="w-full rounded bg-white py-3 text-xl text-black transition-colors hover:bg-slate-300 xl:max-w-xs"
				type="submit"
			>
				Submit
			</button>
			<!-- <SocialLinks smallSize={false} /> -->
		</form>
	{/snippet}
	{#snippet mainContent()}
		<img
			src="images/undraw_envelope.svg"
			alt="The boy next to huge white envelope"
			class="hidden xl:block"
		/>
		<footer class="flex xl:hidden">
			<div class="absolute bottom-3 left-0 right-0 flex flex-col text-center tracking-wider">
				<div class="mb-3 h-[0.05rem] w-full bg-white"></div>
				<p>webpage created by Wojciech Pietraszuk</p>
				<span>{new Date().getFullYear()}</span>
			</div>
		</footer>
	{/snippet}
</SectionWrapper>
