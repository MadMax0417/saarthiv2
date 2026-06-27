<script>
	import Hero from "$lib/components/Hero.svelte";
	import Manifesto from "$lib/components/Manifesto.svelte";
	import Brands from "$lib/components/Marquee.svelte";
	import Showcase from "$lib/components/Showcase.svelte";
	import WorksList from "$lib/components/WorksList.svelte";
	import Testimonials from "$lib/components/Testimonials.svelte";
	import Stats from "$lib/components/Stats.svelte";
	import Faq from "$lib/components/Faq.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Seo from "$lib/components/Seo.svelte";
  import Cta from "$lib/components/Cta.svelte";
	import { getAllPosts } from "$lib/content/blog.js";

	const blogPosts = getAllPosts().slice(0, 3);
</script>

<Seo />

<div class="bg-[#050505] text-white">
	<Hero />
	<Manifesto />
	<Brands />
	<Showcase />
	<WorksList />
	<Testimonials />
	<Stats />
	<Faq />
	<section class="px-6 md:px-24 py-24 md:py-32 bg-[#050505]">
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
				<div>
					<p class="text-xs font-mono uppercase tracking-[0.35em] text-white/45 mb-4">
						Studio Journal
					</p>
					<h2 class="text-4xl md:text-5xl font-serif tracking-tight max-w-2xl">
						Fresh notes on branding, copy, and conversion.
					</h2>
				</div>
				<a
					href="/blog"
					class="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm text-white/85 hover:bg-white hover:text-black transition-colors w-fit"
				>
					View all posts
				</a>
			</div>

			<div class="grid md:grid-cols-3 gap-5">
				{#each blogPosts as post}
					<a
						href={`/blog/${post.slug}`}
						class="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
					>
						<div class="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-5">
							<span>{post.category}</span>
							<span>{post.readingTime}</span>
						</div>
						<h3 class="text-2xl font-serif tracking-tight mb-4 group-hover:text-white/90">
							{post.title}
						</h3>
						<p class="text-white/60 leading-relaxed">
							{post.excerpt}
						</p>
					</a>
				{/each}
			</div>
		</div>
	</section>
	<Cta />
	<Footer />
</div>
