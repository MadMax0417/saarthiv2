import { SITE_URL } from "../seo.js";
import { CALL_NUMBER_DISPLAY, CAL_LINK, TEL_HREF, waLink } from "./contact.js";

const siteUrl = SITE_URL;

const posts = [
	{
		slug: "dentist-website-mistakes",
		title: "Dentist Website Mistakes I Keep Seeing",
		excerpt:
			"A pass through dentist websites: old builds, no HTTPS, invisible to AI search, and no way for a patient to book from a phone.",
		date: "2026-10-26",
		readingTime: "8 min read",
		category: "Strategy",
		featured: true,
		cover: "The patient is already on the phone",
		author: "Kiran Raut",
		description:
			"A pass through dentist websites: old builds, no HTTPS, invisible to AI search, and no way for a patient to book from a phone.",
		metaDescription:
			"I audited dentist websites and kept seeing the same failures: old builds, no HTTPS, pages AI can't read, and no way to book from a phone.",
		tags: ["dentist website", "dental clinic website", "website audit", "local SEO", "WhatsApp booking"],
		keywords:
			"dentist website, dental clinic website, dentist website mistakes, WhatsApp booking, clinic website",
		sections: [
			{
				type: "paragraph",
				text:
					"A patient with a toothache does not read your About page. They open the dental clinic website on a phone, often at night, and decide in a few seconds whether to message you or the next name on the list."
			},
			{
				type: "paragraph",
				text:
					"I audited dentist websites recently. I am not a dentist — I looked at the websites, not the dentistry. Not a survey, and not a percentage I am going to invent. A pass through live sites — the kind a patient in Mumbai, Thane, or Kalyan actually opens. Three failures showed up often enough to write down. Three more are what still lose the patient after those are fixed."
			},
			{
				type: "paragraph",
				text:
					"If you run a clinic, check yours against this list before you spend another rupee sending people to it. Ads deliver the visit. The page is what loses it."
			},
			{
				type: "heading",
				text: "The tech is old. The patient can tell."
			},
			{
				type: "paragraph",
				text:
					"You do not need to know what a framework is. Open your own site on the phone you use for WhatsApp."
			},
			{
				type: "paragraph",
				text:
					"If the text is tiny, a slider stutters, or the first thing on screen is a stock smile and a tooth icon, the technology is outdated. That is the whole test. Patients do not grade your stack. They grade whether the page felt current in the three seconds they gave it."
			},
			{
				type: "paragraph",
				text:
					"Underneath, it is usually the same shape. A theme bought years ago. A page builder carrying more plugins than pages. A homepage made of images, with the words baked into the picture so nobody — patient, Google, or receptionist — can select them. Navy header, teal buttons, a tooth in the corner. It looks like the clinic two lanes away, because it is the same template."
			},
			{
				type: "paragraph",
				text:
					"The cost is not “old technology” as a technical complaint. The cost is a page that takes too long on a normal phone connection, and a page the front desk cannot edit. So last year's hours are still up. Diwali timings from a festival that already ended are still up. The patient notices. Then they leave."
			},
			{
				type: "heading",
				text: "ChatGPT cannot recommend a page it cannot read"
			},
			{
				type: "paragraph",
				text:
					"Some patients no longer start on Google. They ask ChatGPT, Gemini, or Perplexity a plain question: dentist in Andheri, root canal, open on Sunday. Those systems lean on clinics whose facts they can read and cite."
			},
			{
				type: "paragraph",
				text:
					"If your site is a slideshow, a PDF price list, or a picture of your services, there is nothing to quote. A model needs sentences. The clinic's name. The area. The doctor's name. What you treat. How to book today. If those facts live inside an image, most crawlers and AI search pipelines cannot quote them, and the patient is left pinching to zoom."
			},
			{
				type: "paragraph",
				text:
					"Two small things help a machine, after the sentences exist. Structured data — a Dentist or LocalBusiness block, plus an FAQ — gives it a clean copy of the same facts. A file called llms.txt can point it at the pages worth reading. That file is an emerging convention, not an official standard, and it does nothing if the pages themselves are pictures."
			},
			{
				type: "paragraph",
				text:
					"This will not put your clinic in ChatGPT next week. No one honest can promise that. It is only the minimum before a mention is possible. If a machine cannot read the page, it cannot recommend the clinic. The patient who asked the question never hears your name."
			},
			{
				type: "heading",
				text: "A dentist website without HTTPS is not a proper website"
			},
			{
				type: "paragraph",
				text:
					"Some of the sites were not on HTTPS. The address bar says “Not secure.”"
			},
			{
				type: "paragraph",
				text:
					"Chrome has labelled plain HTTP pages that way for years. A patient who was about to send their phone number sees the warning and stops. They are right to stop. You would stop too."
			},
			{
				type: "paragraph",
				text:
					"Google has used HTTPS as a light ranking signal since 2014. Do not rebuild your hopes on it. The warning in the browser is not small. A clinic site that asks for a name and a number, on a page the browser has already flagged, is asking the patient to ignore their own phone."
			},
			{
				type: "paragraph",
				text:
					"The certificate itself is free. Most hosts can switch the lock on, and nobody did. HTTPS is not a feature you add when the site “goes premium.” It is the lock on the door. A proper website has it. A site without it is a brochure the browser does not trust."
			},
			{
				type: "heading",
				text: "There is no way to book"
			},
			{
				type: "paragraph",
				text: "This one was not in the first pass of notes. It should have been."
			},
			{
				type: "paragraph",
				text:
					"The button says “Book Appointment.” It opens a form that emails an inbox someone checks on Monday. Or the phone number is a picture, so it cannot be tapped. Or there is a landline, and no WhatsApp, and the landline rings in a room that is empty after eight."
			},
			{
				type: "paragraph",
				text:
					"The message patients actually send is short. Tooth pain. Can I come today. Around here, that message is WhatsApp. If it takes more than one tap, they send it to the next clinic. They do not file a complaint about your contact form. They just do not become a patient."
			},
			{
				type: "paragraph",
				text: "On a phone, above the fold, three things:"
			},
			{
				type: "list",
				items: [
					"Tap to call, on a number that is text, not an image.",
					"WhatsApp, with the message already written.",
					"Hours that match Google, including Sunday if you are open."
				]
			},
			{
				type: "paragraph",
				text: "A contact form is not a booking system. It is a suggestion box."
			},
			{
				type: "heading",
				text: "The map and the website tell different stories"
			},
			{
				type: "paragraph",
				text:
					"Patients do not start on your homepage. They search “dentist near me.” They get the map. They open your site to confirm you are real."
			},
			{
				type: "paragraph",
				text:
					"Then the stories split. Google Maps says 10 to 8. The site says 9 to 6. The address is missing the floor. The phone on the site is not the phone on the listing. They do not sit there and reconcile it. They call the clinic whose listing and website agree with each other."
			},
			{
				type: "paragraph",
				text:
					"Put the name, the address, the phone, and the hours in real text, identical to the Google Business Profile. That is also how a search engine, and an AI system, connects the website to the clinic on the map."
			},
			{
				type: "paragraph",
				text:
					"This will not, by itself, put you first in the map results. It stops you losing the patient who already found you. That patient was the easy one. You already paid for them, in rent and reviews. The website should not be where they drop."
			},
			{
				type: "heading",
				text: "The page does not answer the question"
			},
			{
				type: "paragraph",
				text: "“We provide world-class dental care with state-of-the-art equipment.”"
			},
			{
				type: "paragraph",
				text:
					"That sentence has never filled a chair. Every clinic within two kilometres can paste it, and most of the outdated ones already have."
			},
			{
				type: "paragraph",
				text: "The questions are ordinary, and they are specific:"
			},
			{
				type: "list",
				items: [
					"Does a root canal hurt?",
					"How much is a cleaning?",
					"Do you see children on Sunday?",
					"Is there parking?",
					"Can I come today?"
				]
			},
			{
				type: "paragraph",
				text:
					"Answer them in plain lines. Who treats the patient — a name, and the real degree, BDS or MDS, not “our expert team.” What you do. A starting price, if you are willing to publish one. You do not have to publish one. You do have to say what the first visit is. And how to reach you today."
			},
			{
				type: "paragraph",
				text:
					"A stock photo of a stranger touching her cheek is not a doctor. Patients can tell. So can anyone else who has seen the same photo on another clinic's homepage."
			},
			{
				type: "paragraph",
				text:
					"Those plain answers are also what an AI system can quote. Same writing. Two places a new patient might find you. Skip the answers, and both places skip you."
			},
			{
				type: "heading",
				text: "Fix this order"
			},
			{
				type: "paragraph",
				text:
					"Not a redesign. A redesign that skips this list is a new brochure with a better font."
			},
			{
				type: "list",
				ordered: true,
				items: [
					"HTTPS. Today. It is free.",
					"One number for calls, as text, the same number as Google. It has to ring. If WhatsApp is a separate line, say so and answer it.",
					"WhatsApp, one tap, message already written. Sticky on the phone.",
					"Hours, address, and the doctor's name in text, matching the listing.",
					"Five answers: pain, cost, same-day, children, how to book.",
					"Only then a rebuild — and only if the current site cannot be fast on a phone, or cannot be edited when the hours change."
				]
			},
			{
				type: "paragraph",
				text:
					"If the theme cannot do 2 through 5, then the theme is the problem, and “outdated tech” finally means something practical. Until then, the tech is not the first bill to pay."
			},
			{
				type: "heading",
				text: "Ten minutes, on your phone"
			},
			{
				type: "paragraph",
				text: "Do this tonight. Not as a project. As a check."
			},
			{
				type: "list",
				items: [
					"The address bar shows a lock.",
					"You can select and copy the doctor's name. If you cannot, a machine cannot either.",
					"The phone number is text, and someone picks up.",
					"WhatsApp opens in one tap.",
					"The hours match Google, including Sunday.",
					"The first screen says who you are, where you are, and how to book. Not a slogan.",
					"You can read it without pinching.",
					"You would send your own family to this page."
				]
			},
			{
				type: "paragraph",
				text:
					"If three of those fail, the site is not bringing you patients. It is where patients go to leave."
			},
			{
				type: "heading",
				text: "If you want a second pair of eyes"
			},
			{
				type: "paragraph",
				text:
					"Send the link. I will tell you which of these is costing you bookings, in plain language, before anyone talks about a rebuild."
			},
			{
				type: "paragraph",
				text: "Free website audit. Reply within one working day. No spam."
			},
			{
				type: "links",
				items: [
					{
						text: "WhatsApp the link",
						href: waLink("I read the dentist website note. Here's my site: "),
						external: true
					},
					{ text: "Book a call", href: CAL_LINK, external: true },
					{ text: `or call ${CALL_NUMBER_DISPLAY}`, href: TEL_HREF, nowrap: true }
				]
			},
			{
				type: "paragraph",
				text:
					"If you do decide to rebuild, plan the page around one action — a booking — not around a slideshow."
			},
			{
				type: "cta",
				text: "The longer note on that is",
				linkText: "how to plan a website that converts",
				href: `${siteUrl}/blog/how-to-plan-a-brand-website-that-converts`,
				postText: "— different job. Do the checklist above first."
			}
		],
		faqs: [
			{
				q: "Does a dental clinic website need HTTPS?",
				a: "Yes. Without it, the browser labels the page “Not secure.” Patients will not send a phone number to a page their phone just warned them about. The certificate itself is free. Turn it on before you spend money on anything else."
			},
			{
				q: "Why doesn't ChatGPT recommend my dental clinic?",
				a: "Usually because the site has nothing plain to quote — the services are images, a slider, or a PDF. A model needs the clinic name, the area, the doctor's name, and a direct answer, in text. Fixing that does not guarantee a mention. It is only the minimum before a mention is possible."
			},
			{
				q: "Do patients book a dentist on WhatsApp?",
				a: "Around Mumbai, Thane, and Kalyan, the real message is short: tooth pain, can I come today. That message is WhatsApp. If your site makes them fill a form instead, many of them message the next clinic and never tell you."
			},
			{
				q: "Should I rebuild my dentist website or fix the one I have?",
				a: "Fix the lock, the phone number, WhatsApp, and the hours first. Those are hours of work, not a project. Rebuild only if the current site cannot be read on a phone, or cannot be edited when your hours change."
			},
			{
				q: "What should a dentist website say on the first screen?",
				a: "Who you are, where you are, and how to reach you today. A name, an area, a tappable number. Not a slogan about world-class care. The slogan is what every other clinic already says."
			}
		]
	},
	{
		slug: "how-to-plan-a-brand-website-that-converts",
		title: "How to Plan a Brand Website That Converts: A Practical Framework",
		excerpt:
			"A step-by-step, conversion-first guide for premium brands — messaging, proof, and homepage structure that lift enquiries and sales.",
		date: "2026-06-18",
		readingTime: "6 min read",
		category: "Strategy",
		featured: false,
		cover: "From clarity to conversion",
		author: "Kiran Raut",
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
		author: "Kiran Raut",
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
		author: "Kiran Raut",
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
		year: "numeric",
		timeZone: "UTC"
	}).format(new Date(date));
}

export { getAllPosts, getPostBySlug, getRelatedPosts, formatPostDate };
