// Shared motion-preference helper.
// Users who set "prefers-reduced-motion" get an instant, non-animated UI:
// animations are progressive enhancement only and never gate content
// visibility or access to CTAs.
export function prefersReducedMotion() {
	if (
		typeof window === "undefined" ||
		typeof window.matchMedia !== "function"
	) {
		return false;
	}
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
