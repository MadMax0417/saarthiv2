<script>
	let {
		title = "Saarthi Studio | Digital Partner for Modern Brands",
		description = "Saarthi Studio is a digital partner for modern brands. We help brands grow through websites, design, and digital presence.",
		url = "https://www.saarthistudio.com/",
		image = "/og-image.png",
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

	<!-- SEO -->
	<meta
		name="keywords"
		content="website development company, web development company, website design company, web design agency, website development services, custom website development, responsive website design, ecommerce website development, landing page development, website redesign, website developer, website designer, web development agency, React development, Next.js development, MERN stack development, SEO-friendly websites, business website development, small business website, portfolio website development, web application development, SaaS development, custom web applications, website development India, web development company India, website design agency India, Saarthi Studio, Sarathi Studio"
	/>

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
