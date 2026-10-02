/**
 * Central SEO / GEO configuration for Saarthi Studio.
 * All URLs emitted into metadata, OG tags, and JSON-LD are resolved against
 * SITE_URL so crawlers and AI systems always see absolute, canonical URLs.
 */

export const SITE_URL = "https://www.saarthistudio.com";
export const SITE_NAME = "Saarthi Studio";
export const SITE_TAGLINE = "Website Design & Development Agency in India";

export const DEFAULT_TITLE = `${SITE_NAME} | ${SITE_TAGLINE}`;
export const DEFAULT_DESCRIPTION =
	"Saarthi Studio builds fast, SEO-friendly websites, web apps, branding, and social media systems for modern businesses in India. Book a free call today.";
export const DEFAULT_OG_IMAGE = "/og-image.png";
export const DEFAULT_LOCALE = "en_US";

export const SOCIAL_PROFILES = [
	"https://www.instagram.com/studio_saarthi/",
	"https://x.com/saarthi_studio"
];

/** Public contact details used for schema (matches the visible contact section). */
export const CONTACT = {
	email: "hello@saarthistudio.com",
	phone: "+918169314760",
	phoneDisplay: "+91 81693 14760",
	whatsapp: "+918638927841",
	whatsappDisplay: "+91 86389 27841"
};

/** Resolve a relative path against the site URL. Absolute URLs pass through. */
export function absoluteUrl(path = "/", base = SITE_URL) {
	try {
		if (!path) return base;
		return new URL(path, base.endsWith("/") ? base : `${base}/`).href;
	} catch {
		return base;
	}
}

/** Build an absolute og:image / twitter:image URL. */
export function imageUrl(path = DEFAULT_OG_IMAGE) {
	return absoluteUrl(path);
}

/**
 * Serialize JSON-LD safely for embedding in a <script> tag.
 * Escapes <, >, and & to prevent HTML parsing issues.
 */
export function jsonLd(data) {
	return JSON.stringify(data)
		.replace(/&/g, "\\u0026")
		.replace(/</g, "\\u003c")
		.replace(/>/g, "\\u003e");
}

export function organizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${SITE_URL}/#organization`,
		name: SITE_NAME,
		url: `${SITE_URL}/`,
		logo: imageUrl("/logo.png"),
		image: imageUrl(DEFAULT_OG_IMAGE),
		description: DEFAULT_DESCRIPTION,
		email: CONTACT.email,
		telephone: CONTACT.phone,
		sameAs: SOCIAL_PROFILES
	};
}

export function websiteSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${SITE_URL}/#website`,
		url: `${SITE_URL}/`,
		name: SITE_NAME,
		publisher: { "@id": `${SITE_URL}/#organization` },
		inLanguage: "en"
	};
}

/** items: [{ name, path }] in breadcrumb order (Home first). */
export function breadcrumbSchema(items = []) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: absoluteUrl(item.path)
		}))
	};
}

export function articleSchema({
	headline,
	description,
	url,
	image = DEFAULT_OG_IMAGE,
	datePublished,
	dateModified = datePublished,
	author = SITE_NAME,
	section,
	keywords
} = {}) {
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		headline,
		description,
		mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(url) },
		image: [imageUrl(image)],
		datePublished,
		...(dateModified ? { dateModified } : {}),
		author: { "@type": "Organization", name: author },
		publisher: { "@id": `${SITE_URL}/#organization` },
		...(section ? { articleSection: section } : {}),
		...(keywords ? { keywords } : {}),
		inLanguage: "en"
	};
}
