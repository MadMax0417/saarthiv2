import { fail } from "@sveltejs/kit";
import { connectDB } from '$lib/server/dbConnect.js';
import { Contact } from '$lib/server/contact.js';
import {Email} from "$lib/server/email.js";
import { getPostHogClient } from '$lib/server/posthog.js';

export const actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();
		const name = String(formData.get("name") || "").trim();
		const email = String(formData.get("email") || "").trim();
		const phone = String(formData.get("phone") || "").trim();
		const message = String(formData.get("message") || "").trim();

		//we will add a honeypot here 
		//TO-DO: add a honeypot 

		// Friction reduction: name + phone are required (how leads actually
		// arrive); email and message are optional.
		if (!name || !phone) {
			return fail(400, {
				success: false,
				message: "Name and phone number are required."
			});
		}

		const phoneDigits = phone.replace(/\D/g, "");
		if (phoneDigits.length < 10) {
			return fail(400, {
				success: false,
				message: "Please enter a valid phone number."
			});
		}

		if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return fail(400, {
				success: false,
				message: "Please enter a valid email address."
			});
		}

		// PostHog needs a stable distinct id; email is optional now.
		const distinctId = email || phone || name;

		try {
			await connectDB();

			await Contact.create({
				name,
				email,
				phone,
				message
			});

			const posthog = getPostHogClient();
			posthog.capture({
				distinctId,
				event: 'contact_form_submitted',
				properties: { name, has_phone: Boolean(phone), has_email: Boolean(email) }
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
				distinctId,
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
