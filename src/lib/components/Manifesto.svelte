<script>
	import { onMount } from "svelte";
	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";

	const paragraph =
		"The internet is crowded. Attention is fleeting. And great brands are never an accident. We design websites, web apps, logos, graphics, and social media with a single obsession — craft. Because when engineering meets artistry, brands don't just show up online. They leave a mark.";
	const words = paragraph.split(" ");
	const markStartIndex = words.findIndex((word) => word === "They");

	let manifestoRef = $state();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const accentSpans = manifestoRef.querySelectorAll(".word-accent");
		const regularSpans = manifestoRef.querySelectorAll(".word-regular");

		// Reveal the regular words one by one as you scroll.
		gsap.to(regularSpans, {
			color: "rgba(255,255,255,1)", // Transitioning to pure white
			stagger: 0.1,
			ease: "none",
			scrollTrigger: {
				trigger: manifestoRef,
				start: "top 80%",
				end: "bottom 50%",
				scrub: 1,
			},
		});

		// Keep the final phrase marked in a distinct color.
		gsap.to(accentSpans, {
			color: "#3B82F6",
			stagger: 0.01,
			ease: "none",
			scrollTrigger: {
				trigger: manifestoRef,
				start: "top 80%",
				end: "bottom 50%",
				scrub: 1,
			},
		});
	});
</script>

<section
	id="manifesto"
	class="w-full bg-[#050505] text-white py-32 md:py-48 px-6 md:px-24 flex flex-col items-center justify-center border-t border-white/5 relative"
>
	<span
		class="text-xs font-mono text-white/30 uppercase tracking-widest mb-16 text-center"
		>Manifesto</span
	>

	<p
		bind:this={manifestoRef}
		class="text-3xl md:text-5xl lg:text-6xl font-serif text-center max-w-5xl w-full flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-y-4"
	>
		{#each words as word, index}
			<!-- The closing sentence keeps a warm accent while the rest fades to white. -->
			 <!-- if you want to keep it white you just need to remove the word-accent class and keep word-regular -->
			<span
				class={`word pointer-events-none transition-colors duration-300 ${
					index >= markStartIndex ? "word-accent text-white/10" : "word-regular text-white/10"
				}`}
				>{word}</span
			>
		{/each}
	</p>
</section>
