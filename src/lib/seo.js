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

/** Verified Google Business Profile share URL (kept identical across site, llms.txt, GBP). */
export const GBP_URL = "https://share.google/XxGyXuHxcljWmXbIr";

export const SOCIAL_PROFILES = [
	"https://www.instagram.com/studio_saarthi/",
	"https://x.com/saarthi_studio",
	"https://www.linkedin.com/company/saarthistudio/"
];

/** Business facts used for schema + GEO consistency. Must match GBP/LinkedIn/llms.txt. */
export const BUSINESS = {
	yearFounded: "2025",
	/** Opening hours in IST. */
	openingHours: { dayOfWeek: "Monday Tuesday Wednesday Thursday Friday Saturday", opens: "10:00", closes: "18:00" },
	/** Local + national + international remote clients (keyword priority: both local and national). */
	areaServed: ["Kalyan", "Mumbai", "Thane", "India", "Worldwide (remote)"]
};

/** Founders rendered as Person schema (homepage JSON-LD + blog author bylines). */
export const FOUNDERS = [
	{
		id: "kiran-raut",
		name: "Kiran Raut",
		jobTitle: "Founder & Lead Developer",
		bio:
			"Kiran Raut is the Founder & Lead Developer at Saarthi Studio, where he designs and builds fast, modern websites and web apps for businesses."
	},
	{
		id: "sonali-wakchoure",
		name: "Sonali Wakchoure",
		jobTitle: "Co-Founder & Lead Designer",
		bio:
			"An artist at heart, Sonali Wakchoure is the Co-Founder & Lead Designer at Saarthi Studio, where she designs beautiful logos, UI/UX, and websites."
	}
];

/**
 * Real client reviews shared with permission for schema use.
 * Ratings confirmed as 5/5 by the studio.
 */
export const REVIEWS = [
	{
		author: "Sunil Chandore",
		business: "Mahesh Fishland",
		rating: 5,
		text: "Since I got a site built for my shop from Saarthi Studio, I have seen a lot of positive changes in my business and I am very impressed with their site building and work style."
	},
	{
		author: "Sonali",
		business: "Whimsy Walls",
		rating: 5,
		text: "Thanks to Saarthi Studio, my vision now has a strong online presence. The whole experience was smooth and enjoyable!"
	},
	{
		author: "Harfool Gurjar",
		business: "Growify India",
		rating: 5,
		text: "We worked with them for our company's website and the experience was amazing. His team have very good technical knowledge. He not only understood our needs, but also gave excellent suggestions on the user interface (UI). The work was completed within the deadline."
	},
	{
		author: "PJ",
		business: "Costa Blanca Car Rental Company",
		rating: 5,
		text: "Saarthi Studio built our website from scratch and did a great job understanding what we wanted. The design feels clean and premium, the website works smoothly on mobile, and they also optimized the SEO. The revisions were also handled quickly."
	},
	{
		author: "Simran Gupta",
		business: "Iconic professional beauty salon",
		rating: 5,
		text: "A big thank you to the Saarthi Team for designing a beautiful and professional website for my salon. Since launching the website, I’ve seen a noticeable increase in clients, and it has made my business much more organized and easier to manage. I highly recommend Saarthi to anyone looking to grow their business online."
	}
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
		sameAs: [...SOCIAL_PROFILES, GBP_URL],
		foundingDate: BUSINESS.yearFounded,
		founder: FOUNDERS.map((person) => ({ "@id": `${SITE_URL}/#${person.id}` })),
		areaServed: BUSINESS.areaServed,
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: BUSINESS.openingHours.dayOfWeek.split(" "),
				opens: BUSINESS.openingHours.opens,
				closes: BUSINESS.openingHours.closes
			}
		],
		contactPoint: [
			{
				"@type": "ContactPoint",
				contactType: "customer service",
				email: CONTACT.email,
				telephone: CONTACT.phone,
				areaServed: BUSINESS.areaServed,
				availableLanguage: ["en", "hi", "mr"]
			}
		],
		aggregateRating: aggregateRating()
	};
}

/** Real 5-star client reviews (shared with permission). Rendered on the homepage. */
export function reviewsSchema() {
	return REVIEWS.map((review) => ({
		"@context": "https://schema.org",
		"@type": "Review",
		itemReviewed: { "@id": `${SITE_URL}/#organization` },
		author: {
			"@type": "Person",
			name: review.author,
			...(review.business ? { affiliation: { "@type": "Organization", name: review.business } } : {})
		},
		reviewBody: review.text,
		reviewRating: {
			"@type": "Rating",
			ratingValue: review.rating,
			bestRating: 5,
			worstRating: 1
		}
	}));
}

function aggregateRating() {
	return {
		"@type": "AggregateRating",
		ratingValue: 5,
		bestRating: 5,
		worstRating: 1,
		ratingCount: REVIEWS.length,
		reviewCount: REVIEWS.length
	};
}

/** Person nodes for both founders (worksFor → organization @id). */
export function peopleSchema() {
	return FOUNDERS.map((person) => personSchema(person));
}

export function personSchema({ id, name, jobTitle, bio }) {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		"@id": `${SITE_URL}/#${id}`,
		name,
		jobTitle,
		description: bio,
		url: `${SITE_URL}/`,
		worksFor: { "@id": `${SITE_URL}/#organization` }
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

/** Default blog author — Person node matching the founder schema. */
export const BLOG_AUTHOR = {
	"@type": "Person",
	name: FOUNDERS[0].name,
	worksFor: { "@id": `${SITE_URL}/#organization` }
};

export function articleSchema({
	headline,
	description,
	url,
	image = DEFAULT_OG_IMAGE,
	datePublished,
	dateModified = datePublished,
	author = BLOG_AUTHOR,
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
		author,
		publisher: { "@id": `${SITE_URL}/#organization` },
		...(section ? { articleSection: section } : {}),
		...(keywords ? { keywords } : {}),
		inLanguage: "en"
	};
}
