<script>
	let { data } = $props();
	const { caseStudy } = data;
</script>

<svelte:head>
	<title>{caseStudy.title} - Case Study</title>
	<meta name="description" content="Case study: {caseStudy.title} for {caseStudy.projectName}" />
</svelte:head>

<section class="w-full bg-[#050505] text-white min-h-screen py-20">
	<div class="max-w-4xl mx-auto px-6 md:px-12">
		<!-- Header -->
		<div class="mb-12">
			<a href="/" class="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				Back to home
			</a>

			<div class="space-y-4 mb-8">
				<div class="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/60">
					{caseStudy.projectName}
				</div>
				<h1 class="text-5xl md:text-7xl font-serif tracking-tight">
					{caseStudy.title}
				</h1>
				<p class="text-white/60 text-lg">{caseStudy.date}</p>
			</div>
		</div>

		<!-- Divider -->
		<div class="border-t border-white/10 mb-12"></div>

		<!-- Content -->
		<article class="mb-16">
			<div class="space-y-6 text-white/80 leading-relaxed">
				{@html caseStudy.content
					.split('\n')
					.map(line => {
						if (line.startsWith('## ')) {
							return `<h2 style="font-size: 1.875rem; font-family: serif; color: white; margin-top: 2rem; margin-bottom: 1rem;">${line.replace('## ', '')}</h2>`;
						} else if (line.startsWith('### ')) {
							return `<h3 style="font-size: 1.25rem; font-family: serif; color: rgb(229 231 235 / 0.9); margin-top: 1.5rem; margin-bottom: 0.75rem;">${line.replace('### ', '')}</h3>`;
						} else if (line.startsWith('- ')) {
							return `<li style="margin-left: 1rem; margin-bottom: 0.5rem;">${line.replace('- ', '')}</li>`;
						} else if (line.trim() === '') {
							return '<div style="height: 0.5rem;"></div>';
						}
						return `<p>${line}</p>`;
					})
					.join('\n')}
			</div>
		</article>

		<!-- Footer -->
		<div class="border-t border-white/10 pt-8">
			<div class="flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
				<a href="/" class="text-white/60 hover:text-white transition-colors">
					← Back to projects
				</a>
				<a
					href="/"
					class="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors font-medium"
				>
					View All Projects
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>
