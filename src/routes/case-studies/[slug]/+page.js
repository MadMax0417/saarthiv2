import { caseStudies, getCaseStudyBySlug } from '$lib/content/caseStudies';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	return caseStudies.map((study) => ({
		slug: study.slug
	}));
}

export function load({ params }) {
	const caseStudy = getCaseStudyBySlug(params.slug);

	if (!caseStudy) {
		throw error(404, 'Case study not found');
	}

	return {
		caseStudy
	};
}
