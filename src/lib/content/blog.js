const siteUrl = "https://www.saarthistudio.com";

const posts = [
	{
		slug: "how-to-plan-a-brand-website-that-converts",
		title: "How to Plan a Brand Website That Converts: A Practical Framework",
		excerpt:
			"A step-by-step, conversion-first guide for premium brands — messaging, proof, and homepage structure that lift enquiries and sales.",
		date: "2026-06-18",
		readingTime: "6 min read",
		category: "Strategy",
		featured: true,
		cover: "From clarity to conversion",
		description:
			"A practical framework to plan a brand website that turns visitors into customers. Covers goal definition, homepage messaging, proof placement, CTA strategy, SEO quick wins, and an FAQ.",
		tags: ["website","conversion","homepage","branding","SEO"],
		keywords: "brand website, website conversion, homepage strategy, CTA optimization, website SEO",
		sections: [
			{
				type: "paragraph",
				text:
					"Beautiful design matters — but a premium brand website must also help visitors decide quickly and confidently. This guide focuses on aligning messaging, proof, and layout so the site consistently drives your primary business goal: enquiries, bookings, or sales."
			},
			{
				type: "heading",
				text: "Why conversion-first design matters"
			},
			{
				type: "paragraph",
				text:
					"Visitors form impressions in seconds. When a homepage communicates a clear outcome, shows credible proof, and points to one next step, conversion rates improve and acquisition costs fall. Use design and copy to reduce friction, not add it."
			},
			{
				type: "heading",
				text: "1. Define one primary conversion goal"
			},
			{
				type: "paragraph",
				text:
					"Be explicit about the single action that creates value for your business: book a call, request a proposal, or buy. Treat everything on the page as a funnel toward that action."
			},
			{
				type: "list",
				items: [
					"Pick one main CTA and label it with the value (e.g. ‘Book a 30‑minute audit’).",
					"Place the CTA in the header and repeat after major proof sections.",
					"Remove competing low‑intent links from hero areas (linking to blog vs contact)."
				]
			},
			{
				type: "heading",
				text: "2. Structure messaging: Problem → Solution → Evidence"
			},
			{
				type: "paragraph",
				text:
					"Lead with the outcome your customers care about. Follow with a concise explanation of how you deliver that outcome, then immediately show proof (case result, testimonial, or metric). This sequencing answers questions before they arise."
			},
			{
				type: "list",
				items: [
					"Use a clear H1 that includes the primary keyword (e.g. ‘Brand websites that convert’).",
					"Support the H1 with a short subhead showing a specific outcome or niche.",
					"Keep hero copy to one or two sentences — link to details further down."
				]
			},
			{
				type: "heading",
				text: "3. Place proof where it matters"
			},
			{
				type: "paragraph",
				text:
					"Social proof should appear early and often: a short testimonial or recognizable client logo near the hero, longer case study links later. Make evidence scannable — one‑line outcome metrics work well."
			},
			{
				type: "heading",
				text: "SEO quick checklist"
			},
			{
				type: "list",
				items: [
					"Use the target keyword in the URL, H1, and meta description.",
					"Write a unique meta description (~120–160 chars) that includes the primary keyword and a CTA.",
					"Add descriptive alt text for hero and case study images.",
					"Include internal links to related posts (e.g. copy and portfolio guides).",
					"Consider structured data for articles and organization for richer search results."
				]
			},
			{
				type: "heading",
				text: "Quick wins to implement this week"
			},
			{
				type: "list",
				items: [
					"Clarify your hero message to a single measurable outcome.",
					"Add one testimonial and one client logo above the fold.",
					"Replace vague CTAs with outcome‑focused labels (e.g. ‘Get my proposal’)."
				]
			},
			{
				type: "heading",
				text: "FAQ"
			},
			{
				type: "paragraph",
				text: "Q: How long until I see better conversions?"
			},
			{
				type: "paragraph",
				text: "A: Small changes like clarifying the hero and improving CTA labels often improve click rates within days; larger trust elements (case studies) take longer but lift qualified leads."
			},
			{
				type: "paragraph",
				text: "Q: What metrics should I watch?"
			},
			{
				type: "paragraph",
				text: "A: Track conversion rate on the primary CTA, time to action, and lead quality (e.g. form completions that match your ideal client)."
			},
			{
				type: "cta",
				text: "Ready to improve your site? If you want help applying these changes,",
				linkText: "book a call",
				href: "https://www.saarthistudio.com/#contact",
				postText: "or request a proposal."
			}
		]
	},
	{
		slug: "saying-more-with-less-copy",
		title: "Saying More With Less Copy",
		excerpt:
			"Shorter copy can be more persuasive when it is organized around clarity, contrast, and rhythm.",
		date: "2026-05-26",
		readingTime: "4 min read",
		category: "Copywriting",
		featured: false,
		cover: "Less noise, more signal",
		description:
			"Why concise copy tends to perform better on premium websites, and how to trim text without losing personality.",
		sections: [
			{
				type: "paragraph",
				text:
					"Most websites do not need more words. They need better sequencing. The right sentence in the right place can do more than a paragraph that arrives too late."
			},
			{
				type: "heading",
				text: "Trim by function"
			},
			{
				type: "paragraph",
				text:
					"Before you cut anything, ask what each line is doing. Is it introducing the brand, answering a doubt, building trust, or pushing toward action? If a sentence does none of those, it is probably noise."
			},
			{
				type: "list",
				items: [
					"Keep one idea per sentence.",
					"Use section headings that can be skimmed alone.",
					"Let design do some of the explanatory work."
				]
			},
			{
				type: "heading",
				text: "Write with contrast"
			},
			{
				type: "paragraph",
				text:
					"A premium page often feels strong because it knows what to emphasize and what to leave implied. Contrast, spacing, and a confident tone make the message feel intentional."
			}
		]
		.concat([
			{ type: "heading", text: "FAQ" },
			{ type: "paragraph", text: "Q: How do I keep personality when cutting copy?" },
			{ type: "paragraph", text: "A: Keep voice in headings and microcopy; use examples and short case lines to show personality without long paragraphs." },
			{ type: "paragraph", text: "Q: Will shorter copy hurt SEO?" },
			{ type: "paragraph", text: "A: Not if you structure content with descriptive headings, use target keywords naturally, and add internal links to longer resources." },
			{ type: "cta", text: "Want help tightening your copy?", linkText: "Get a copy review", href: "https://www.saarthistudio.com/#contact", postText: "or request a proposal." }
		])
	},
	{
		slug: "what-makes-a-modern-agency-portfolio-feel-premium",
		title: "What Makes a Modern Agency Portfolio Feel Premium",
		excerpt:
			"Premium is not about decoration. It is about pacing, restraint, and proof that feels effortless.",
		date: "2026-05-04",
		readingTime: "5 min read",
		category: "Design",
		featured: false,
		cover: "Built with restraint",
		description:
			"Breakdown of the visual and interaction details that make a portfolio feel more refined and trustworthy.",
		sections: [
			{
				type: "paragraph",
				text:
					"Premium design usually does three things well: it creates clarity, it avoids visual clutter, and it uses motion with a clear purpose. You can feel all three before you can name them."
			},
			{
				type: "heading",
				text: "The premium checklist"
			},
			{
				type: "list",
				items: [
					"Strong type hierarchy with generous spacing.",
					"Consistent card styles and border behavior.",
					"One or two accent colors instead of many.",
					"Animated moments that reveal information, not just flair."
				]
			},
			{
				type: "heading",
				text: "Trust is a visual system"
			},
			{
				type: "paragraph",
				text:
					"When a portfolio feels organized, deliberate, and easy to scan, it communicates competence before the first case study is even opened. That is what premium really buys."
			}
		]
		.concat([
			{ type: "heading", text: "FAQ" },
			{ type: "paragraph", text: "Q: How long does a portfolio refresh typically take?" },
			{ type: "paragraph", text: "A: A focused refresh (copy, hero, case highlights) can take 2–4 weeks; a full redesign may take 6–12 weeks depending on scope." },
			{ type: "paragraph", text: "Q: What most improves portfolio conversions?" },
			{ type: "paragraph", text: "A: Clear outcome statements, concise case results, and obvious next steps — combined with selective proof — drive higher enquiry rates." },
			{ type: "cta", text: "Ready to refine your portfolio?", linkText: "Start a project", href: "https://www.saarthistudio.com/#contact", postText: "or request a proposal." }
		])
	}
];

function sortByDateDesc(a, b) {
	return new Date(b.date).getTime() - new Date(a.date).getTime();
}

function getAllPosts() {
	return [...posts].sort(sortByDateDesc).map((post) => ({
		...post,
		url: `${siteUrl}/blog/${post.slug}`
	}));
}

function getPostBySlug(slug) {
	const post = posts.find((entry) => entry.slug === slug);
	return post
		? {
				...post,
				url: `${siteUrl}/blog/${post.slug}`
			}
		: null;
}

function getRelatedPosts(slug, limit = 3) {
	return getAllPosts().filter((post) => post.slug !== slug).slice(0, limit);
}

function formatPostDate(date) {
	return new Intl.DateTimeFormat("en", {
		month: "long",
		day: "numeric",
		year: "numeric"
	}).format(new Date(date));
}

export { getAllPosts, getPostBySlug, getRelatedPosts, formatPostDate };
