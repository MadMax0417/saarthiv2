import { getCaseStudyBySlug } from '$lib/content/caseStudies';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const caseStudy = getCaseStudyBySlug(params.slug);

	if (!caseStudy) {
		throw error(404, 'Case study not found');
	}

	return {
		caseStudy
	};
}
