<script lang="ts">
	import SectionWrapper from '$lib/shared/SectionWrapper.svelte';
</script>

<SectionWrapper sectionId="collaboration" title="Współpraca">
	{#snippet additionalContent()}
		<p>
			Wspólnie stworzymy coś wyjątkowego! Wierzę, że najlepsze projekty powstają dzięki bliskiej
			współpracy i otwartej komunikacji. Każdy pomysł traktuję indywidualnie, dostosowując
			rozwiązania do Twoich potrzeb i wizji.
		</p>
	{/snippet}
	{#snippet mainContent()}
		<div class="flex flex-col gap-12">
			<div class="flex flex-col">
				<h3 class="mb-3 text-xl text-yellow-400 xl:text-2xl">Jakie usługi proponuję?</h3>
				<ul class="flex list-inside flex-col gap-2">
					<li class="list-disc">Projekt graficzny strony</li>
					<li class="list-disc">Stworzenie responsywnej strony internetowej od zera</li>
				</ul>
			</div>
			<div class="flex flex-col">
				<h3 class="mb-3 text-xl text-yellow-400 xl:text-2xl">Jak wygląda współpraca?</h3>
				<ol class="flex list-inside flex-col gap-2">
					<li class="list-decimal">Rozmowa i analiza potrzeb</li>
					<li class="list-decimal">Planowanie projektu</li>
					<li class="list-decimal">Tworzenie i konsultacje</li>
					<li class="list-decimal">Finalizacja i wdrożenie</li>
				</ol>
			</div>
		</div>
	{/snippet}
</SectionWrapper>
