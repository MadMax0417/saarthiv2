<script>
	import Footer from "$lib/components/Footer.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import { formatPostDate } from "$lib/content/blog.js";

	let { data } = $props();
	const post = $derived(data.post);
	const relatedPosts = $derived(data.relatedPosts);
</script>

<Seo
	title={`${post.title} | Saarthi Studio`}
	description={post.description}
	url={post.url}
	type="article"
/>

<svelte:head>
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="bg-[#050505] text-white relative overflow-hidden">
	<div class="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_58%)] pointer-events-none"></div>

	<div class="mx-auto max-w-4xl px-6 md:px-24 pt-28 md:pt-36 pb-20 relative z-10">
		<a href="/blog" class="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors mb-10">
			<span aria-hidden="true">←</span>
			Back to blog
		</a>

		<div class="border border-white/10 bg-white/[0.03] rounded-[2rem] p-6 md:p-10">
			<div class="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-white/40 mb-6">
				<span>{post.category}</span>
				<span>{formatPostDate(post.date)}</span>
				<span>{post.readingTime}</span>
			</div>

			<h1 class="text-4xl md:text-6xl font-serif tracking-tight leading-[0.95] max-w-3xl">
				{post.title}
			</h1>
			<p class="mt-6 text-white/65 text-base md:text-lg leading-relaxed max-w-2xl">
				{post.description}
			</p>
		</div>

		<article class="prose prose-invert prose-lg max-w-none mt-10 prose-headings:font-serif prose-headings:tracking-tight prose-headings:text-white prose-p:text-white/70 prose-p:leading-relaxed prose-li:text-white/70 prose-strong:text-white prose-a:text-[#60a5fa] prose-blockquote:border-white/15 prose-blockquote:text-white/80">
			{#each post.sections as section}
				{#if section.type === "paragraph"}
					<p>{section.text}</p>
				{:else if section.type === "heading"}
					<h2>{section.text}</h2>
				{:else if section.type === "list"}
					<ul>
						{#each section.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				{:else if section.type === "quote"}
					<blockquote>

						<p>{section.text}</p>
					</blockquote>
				{:else if section.type === "cta"}
					<p>
						{section.text}
						<a href={section.href} class="text-[#60a5fa] hover:underline">{section.linkText}</a>
						{section.postText ? ` ${section.postText}` : ''}
					</p>
				{/if}
			{/each}
		</article>
	</div>

	{#if relatedPosts.length}
		<div class="mx-auto max-w-7xl px-6 md:px-24 pb-24 relative z-10">
			<div class="flex items-end justify-between gap-6 mb-8">
				<div>
					<p class="text-xs font-mono uppercase tracking-[0.3em] text-white/45 mb-3">
						Related
					</p>
					<h2 class="text-3xl md:text-4xl font-serif tracking-tight">
						More from the journal
					</h2>
				</div>
			</div>

			<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
				{#each relatedPosts as related}
					<a
						href={`/blog/${related.slug}`}
						class="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
					>
						<div class="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-5">
							<span>{related.category}</span>
							<span>{related.readingTime}</span>
						</div>
						<h3 class="text-2xl font-serif tracking-tight mb-4 group-hover:text-white/90">
							{related.title}
						</h3>
						<p class="text-white/60 leading-relaxed">
							{related.excerpt}
						</p>
					</a>
				{/each}
			</div>
		</div>
	{/if}

	<Footer />
</section>
