import { error } from "@sveltejs/kit";
import { getPostBySlug, getRelatedPosts } from "$lib/content/blog.js";

export function load({ params }) {
	const post = getPostBySlug(params.slug);

	if (!post) {
		throw error(404, "Post not found");
	}

	return {
		post,
		relatedPosts: getRelatedPosts(post.slug)
	};
}
