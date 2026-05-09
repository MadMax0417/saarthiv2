<script>
	let {
		title = "Saarthi Studio | Creative Web Design & Digital Branding",
		description = "Saarthi Studio builds high-performance websites, memorable brand identities, and conversion-focused digital experiences for modern businesses.",
		url = "https://saarthiv2-six.vercel.app/",
		image = "/logo.png",
		siteName = "Saarthi Studio",
		type = "website"
	} = $props();
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow" />
	<meta name="theme-color" content="#050505" />
	<link rel="canonical" href={url} />
	<meta name="author" content={siteName} />
	<meta name="application-name" content={siteName} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:image" content={image} />
	<meta property="og:image:alt" content={title} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />

	<script
		type="application/ld+json"
		data-sveltekit-reload
	>
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: siteName,
			url,
			logo: `${url}/logo.png`,
			image: `${url}${image}`,
			description
		})}
	</script>
</svelte:head>
