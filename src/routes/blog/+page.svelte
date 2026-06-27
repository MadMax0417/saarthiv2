<script>
	import Footer from "$lib/components/Footer.svelte";
	import Seo from "$lib/components/Seo.svelte";

	let { data } = $props();

	const featuredPost = $derived(data.posts.find((post) => post.featured) ?? data.posts[0]);
	const otherPosts = $derived(
		data.posts.filter((post) => post.slug !== featuredPost.slug)
	);
</script>

<Seo
	title="Blog | Saarthi Studio"
	description="Insights on brand websites, copy, design systems, and conversion-focused digital experiences from Saarthi Studio."
	url="https://www.saarthistudio.com/blog"
	type="website"
/>

<svelte:head>
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="bg-[#050505] text-white relative overflow-hidden">
	<div class="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%)] pointer-events-none"></div>
	<div class="absolute right-[-10%] top-[12rem] h-[22rem] w-[22rem] rounded-full bg-white/5 blur-3xl pointer-events-none"></div>

	<div class="mx-auto max-w-7xl px-6 md:px-24 pt-28 md:pt-36 pb-20 relative z-10">
		<div class="max-w-3xl">
			<p class="text-xs font-mono uppercase tracking-[0.35em] text-white/45 mb-5">
				Studio Journal
			</p>
			<h1 class="text-5xl md:text-7xl font-serif tracking-tight leading-[0.95] mb-6">
				Ideas for websites that look sharp and sell clearly.
			</h1>
			<p class="text-white/65 text-base md:text-lg leading-relaxed max-w-2xl">
				A running set of practical notes on strategy, copy, design, and motion for modern brands.
			</p>
		</div>

		<div class="grid lg:grid-cols-[1.4fr_0.9fr] gap-6 mt-14">
			<a
				href={`/blog/${featuredPost.slug}`}
				class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8 min-h-[28rem] flex flex-col justify-end"
			>
				<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.22),_transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]"></div>
				<div class="absolute inset-x-6 top-6 flex items-center justify-between text-xs font-mono uppercase tracking-[0.3em] text-white/45">
					<span>Featured</span>
					<span>{featuredPost.category}</span>
				</div>
				<div class="relative z-10 max-w-2xl">
					<p class="text-sm text-white/45 mb-4">
						{featuredPost.date}
					</p>
					<h2 class="text-3xl md:text-5xl font-serif tracking-tight mb-4">
						{featuredPost.title}
					</h2>
					<p class="text-white/65 text-base md:text-lg leading-relaxed max-w-xl">
						{featuredPost.excerpt}
					</p>
					<div class="mt-8 inline-flex items-center gap-3 text-sm text-white/90">
						<span class="inline-flex h-10 items-center rounded-full border border-white/15 px-5 bg-white/5">
							Read article
						</span>
						<span class="text-white/45">{featuredPost.readingTime}</span>
					</div>
				</div>
			</a>

			<div class="grid gap-4">
				{#each otherPosts as post}
					<a
						href={`/blog/${post.slug}`}
						class="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 md:p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-white/20"
					>
						<div class="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-4">
							<span>{post.category}</span>
							<span>{post.readingTime}</span>
						</div>
						<h3 class="text-2xl font-serif mb-3 group-hover:text-white/90">
							{post.title}
						</h3>
						<p class="text-white/60 leading-relaxed">
							{post.excerpt}
						</p>
					</a>
				{/each}
			</div>
		</div>
	</div>

	<div class="mx-auto max-w-7xl px-6 md:px-24 pb-28 relative z-10">
		<div class="flex items-end justify-between gap-6 mb-8">
			<div>
				<p class="text-xs font-mono uppercase tracking-[0.3em] text-white/45 mb-3">
					All Posts
				</p>
				<h2 class="text-3xl md:text-4xl font-serif tracking-tight">
					Latest thinking from the studio
				</h2>
			</div>
			<p class="hidden md:block text-white/45 max-w-sm text-sm leading-relaxed">
				Short reads designed for founders and teams who want cleaner websites and sharper positioning.
			</p>
		</div>

		<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
			{#each data.posts as post}
				<a
					href={`/blog/${post.slug}`}
					class="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
				>
					<div class="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-5">
						<span>{post.category}</span>
						<span>{post.date}</span>
					</div>
					<h3 class="text-2xl font-serif tracking-tight mb-4 group-hover:text-white/90">
						{post.title}
					</h3>
					<p class="text-white/60 leading-relaxed mb-6">
						{post.excerpt}
					</p>
					<div class="flex items-center justify-between text-sm text-white/45">
						<span>{post.readingTime}</span>
						<span class="text-white/80 group-hover:text-white transition-colors">Read more</span>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<Footer />
</section>
