<wizard-report>

# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Saarthi Studio SvelteKit project.

## Summary of changes

- **`src/hooks.client.js`** (created): PostHog client-side initialization using the SvelteKit `init` hook with reverse-proxy host (`/ingest`), `capture_exceptions: true` for automatic error tracking, and a `handleError` hook to capture client-side exceptions.
- **`src/hooks.server.js`** (created): Server-side reverse proxy routing `/ingest/*` and `/ingest/static/*` → PostHog servers to improve ad-blocker resistance. Also includes a `handleError` hook for server-side error capture.
- **`src/lib/server/posthog.js`** (created): Singleton `posthog-node` client for server-side event tracking, used in form action handlers.
- **`svelte.config.js`** (updated): Added `paths.relative: false` — required for PostHog session replay to work correctly with SSR.
- **`src/routes/+page.server.js`** (updated): Server-side `contact_form_submitted`, `contact_form_failed`, and `email_subscribed` events captured on each relevant form action.
- **`src/lib/components/Cta.svelte`** (updated): `contact_form_submitted` and `contact_form_failed` events on form result; `whatsapp_cta_clicked` on the "Let's Talk" circular button.
- **`src/lib/components/Hero.svelte`** (updated): `hero_cta_clicked` event on both CTA buttons ("View Selected Works", "Our Services") with a `label` property.
- **`src/lib/components/Faq.svelte`** (updated): `faq_item_expanded` event on accordion open with `question` and `index` properties. Also added keyed `{#each}` block per Svelte 5 best practices.
- **`src/lib/components/WhatsappButton.svelte`** (updated): `whatsapp_button_clicked` event on the floating WhatsApp button.
- **`src/lib/components/header.svelte`** (updated): `header_whatsapp_clicked` event on both the desktop nav and mobile menu "Let's Talk" links, with a `location` property.
- **`.env`** (created): `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` environment variables.

## Event tracking table

| Event | Description | File |
|---|---|---|
| `contact_form_submitted` | User successfully submitted the contact/inquiry form | `src/lib/components/Cta.svelte`, `src/routes/+page.server.js` |
| `contact_form_failed` | Contact form submission returned an error | `src/lib/components/Cta.svelte`, `src/routes/+page.server.js` |
| `whatsapp_cta_clicked` | Clicked "Let's Talk" WhatsApp CTA in the contact section | `src/lib/components/Cta.svelte` |
| `hero_cta_clicked` | Clicked a CTA button in the Hero section | `src/lib/components/Hero.svelte` |
| `faq_item_expanded` | Expanded a FAQ accordion item | `src/lib/components/Faq.svelte` |
| `whatsapp_button_clicked` | Clicked the floating WhatsApp button | `src/lib/components/WhatsappButton.svelte` |
| `header_whatsapp_clicked` | Clicked "Let's Talk" in the navigation header | `src/lib/components/header.svelte` |
| `email_subscribed` | User submitted email via the email capture form | `src/routes/+page.server.js` |

## Next steps

We've built a dashboard and insights for you to monitor user behavior:

- [Analytics basics dashboard](/dashboard/1584751)
- [Contact Form Submissions (Last 30 days)](/insights/kwQXY69n)
- [WhatsApp Button Clicks by Location](/insights/yvmSOajG)
- [Contact Inquiry Funnel (Hero CTA → Form Submission)](/insights/xJTWU53D)
- [FAQ Engagement — Most Expanded Questions](/insights/3nts0Brv)
- [Email Subscriptions Over Time](/insights/1GFMjJ9w)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
