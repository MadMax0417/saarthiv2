import { fail } from "@sveltejs/kit";
import { connectDB } from '$lib/server/dbConnect.js';
import { Contact } from '$lib/server/contact.js';
import {Email} from "$lib/server/email.js";

export const actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();
		const name = String(formData.get("name") || "").trim();
		const email = String(formData.get("email") || "").trim();
		const phone = String(formData.get("phone") || "").trim();
		const message = String(formData.get("message") || "").trim();

		if (!name || !email || !message) {
			return fail(400, {
				success: false,
				message: "Name, email, and message are required."
			});
		}

		try {
			await connectDB();

			await Contact.create({
				name,
				email,
				phone,
				message
			});

			return {
				success: true,
				message: "Message sent successfully.",
				data: { name, email, phone, message }
			};
		} catch (error) {

			console.error(error);

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
