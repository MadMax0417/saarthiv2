<script>
	import {
		SITE_NAME,
		DEFAULT_TITLE,
		DEFAULT_DESCRIPTION,
		DEFAULT_OG_IMAGE,
		DEFAULT_LOCALE,
		absoluteUrl,
		imageUrl,
		organizationSchema,
		websiteSchema,
		breadcrumbSchema,
		articleSchema,
		jsonLd
	} from "$lib/seo.js";

	let {
		title = DEFAULT_TITLE,
		description = DEFAULT_DESCRIPTION,
		url = "/",
		image = DEFAULT_OG_IMAGE,
		siteName = SITE_NAME,
		type = "website",
		robots = "index, follow",
		keywords,
		datePublished,
		dateModified,
		section,
		breadcrumbItems = [],
		schema = []
	} = $props();

	const canonicalUrl = $derived(absoluteUrl(url));
	const ogImage = $derived(imageUrl(image));

	const structuredDataHtml = $derived.by(() => {
		const list = [organizationSchema(), websiteSchema()];
		if (type === "article" && datePublished) {
			list.push(
				articleSchema({
					headline: title,
					description,
					url,
					image,
					datePublished,
					dateModified,
					section,
					keywords
				})
			);
		}
		list.push(...(schema ?? []));
		if (breadcrumbItems.length) list.push(breadcrumbSchema(breadcrumbItems));
		return list
			.map(
				(item) =>
					`<script type="application/ld+json">${jsonLd(item)}<\/script>`
			)
			.join("\n");
	});
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="robots" content={robots} />
	<meta name="theme-color" content="#050505" />
	<link rel="canonical" href={canonicalUrl} />
	<meta name="author" content={siteName} />
	<meta name="application-name" content={siteName} />
	{#if keywords}<meta name="keywords" content={keywords} />{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content={DEFAULT_LOCALE} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content={title} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	<!-- Structured data -->
	{@html structuredDataHtml}
</svelte:head>
