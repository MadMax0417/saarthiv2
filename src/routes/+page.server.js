import { fail } from "@sveltejs/kit";
import { connectDB } from '$lib/server/dbConnect.js';
import { Contact } from '$lib/server/contact.js';
import {Email} from "$lib/server/email.js";
import { getPostHogClient } from '$lib/server/posthog.js';

const getClientIp = (event) => {
	const forwarded = event.request.headers.get('x-forwarded-for');
	if (forwarded) {
		return String(forwarded).split(',')[0].trim();
	}
	return event.getClientAddress ? event.getClientAddress() : '';
};

export const actions = {
	submit: async ({ request, event }) => {
		const formData = await request.formData();
		const name = String(formData.get("name") || "").trim();
		const email = String(formData.get("email") || "").trim();
		const phone = String(formData.get("phone") || "").trim();
		const message = String(formData.get("message") || "").trim();
		const clientIp = getClientIp(event);

		if (!name || !email || !message) {
			return fail(400, {
				success: false,
				message: "Name, email, and message are required."
			});
		}

		try {
			await connectDB();

			const rateLimitWindowMs = 60 * 1000;
			const rateLimitMax = 3;
			const cutoff = new Date(Date.now() - rateLimitWindowMs);
			const ipConditions = [{ email }];
			if (clientIp) ipConditions.push({ ip: clientIp });

			const recentCount = await Contact.countDocuments({
				$and: [
					{ createdAt: { $gte: cutoff } },
					{ $or: ipConditions }
				]
			});

			if (recentCount >= rateLimitMax) {
				return fail(429, {
					success: false,
					message: "Too many submissions. Please wait a minute and try again."
				});
			}

			await Contact.create({
				name,
				email,
				phone,
				message,
				ip: clientIp
			});

			const posthog = getPostHogClient();
			posthog.capture({
				distinctId: email,
				event: 'contact_form_submitted',
				properties: { name, has_phone: Boolean(phone) }
			});
			await posthog.flush();

			return {
				success: true,
				message: "Message sent successfully.",
				data: { name, email, phone, message }
			};
		} catch (error) {

			console.error(error);

			const posthog = getPostHogClient();
			posthog.capture({
				distinctId: 'server',
				event: 'contact_form_failed',
				properties: { error: error instanceof Error ? error.message : String(error) }
			});
			await posthog.flush();

			return fail(500, {
				success: false,
				message: "Something went wrong. Please try again."
			});

		}


	},

	contact: async ({ request }) => {
		const formData = await request.formData();
		const email = String(formData.get("email") || "").trim();

		console.log(email);

		if (!email) {
			return fail(400, {
				success: false,
				message: "Email is required."
			});
		}
		try {
			await connectDB();

			await Email.create({email});

			const posthog = getPostHogClient();
			posthog.capture({
				distinctId: email,
				event: 'email_subscribed',
				properties: {}
			});
			await posthog.flush();

			return {
				success: true,
				message: "Email sent successfully.",
				data: { email }
			};
		} catch (error) {

			console.error(error);

			return fail(500, {
				success: false,
				message: "Something went wrong. Please try again."
			});

		}
	}
};
