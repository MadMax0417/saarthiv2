// Single source of truth for contact links used across the site.
// Call number and WhatsApp number are different lines — keep them distinct.

export const CALL_NUMBER_DISPLAY = "+91 81693 14760";
export const WHATSAPP_NUMBER_DISPLAY = "+91 86389 27841";

export const TEL_HREF = "tel:+918169314760";

export const WHATSAPP_NUMBER = "918638927841";

export const CAL_LINK = "https://cal.com/saarthistudios/get-a-callback";

/** Build a wa.me link with a pre-filled message. */
export function waLink(text) {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const DEFAULT_WA_MESSAGE =
	"Hello! I would like to know more about your services.";

export const PROJECT_WA_MESSAGE =
	"Hey, I want to discuss a project with you.";
