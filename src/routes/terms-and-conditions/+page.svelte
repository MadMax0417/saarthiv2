<script>
  import Seo from "$lib/components/Seo.svelte";
  import Footer from "$lib/components/Footer.svelte";

  const updatedOn = "May 14, 2026";
</script>

<Seo
  title="Terms & Conditions | Saarthi Studio"
  description="Review the terms and conditions for using Saarthi Studio's website, content, and services."
  url="https://saarthiv2-six.vercel.app/terms-and-conditions"
  type="article"
/>

<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>

<section class="bg-[#050505] text-white">
  <div class="mx-auto max-w-5xl px-6 md:px-24 py-24 md:py-32">
    <div class="max-w-3xl mb-16">
      <p class="text-xs font-mono uppercase tracking-[0.3em] text-white/45 mb-4">
        Legal
      </p>
      <h1 class="text-4xl md:text-6xl font-serif tracking-tight mb-6">
        Terms &amp; Conditions
      </h1>
      <p class="text-white/65 text-base md:text-lg leading-relaxed">
        These Terms &amp; Conditions govern your access to and use of the Saarthi
        Studio website and any related services we provide.
      </p>
      <p class="text-white/45 text-sm mt-6">
        Last updated: {updatedOn}
      </p>
    </div>

    <div class="grid gap-6">
      <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-serif mb-4">Use of the Website</h2>
        <p class="text-white/65 leading-relaxed">
          You agree to use this website only for lawful purposes and in a way
          that does not infringe the rights of, or restrict the use of, anyone
          else.
        </p>
      </article>

      <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-serif mb-4">Intellectual Property</h2>
        <p class="text-white/65 leading-relaxed">
          Unless otherwise stated, all content on this website, including text,
          visuals, logos, and design elements, is owned by Saarthi Studio or its
          licensors and may not be copied, distributed, or reused without
          permission.
        </p>
      </article>

      <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-serif mb-4">Service Information</h2>
        <p class="text-white/65 leading-relaxed">
          Any project timelines, estimates, or service descriptions shown on the
          site are provided for general information and may change based on the
          scope of work, availability, or client requirements.
        </p>
      </article>

      <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-serif mb-4">Analytics and Tracking</h2>
        <p class="text-white/65 leading-relaxed">
          We use analytics tools, including PostHog, to measure website traffic,
          understand visitor behavior, and improve the site and our services.
          By using the website, you acknowledge that certain usage data may be
          collected for analytics, troubleshooting, and performance reporting.
        </p>
      </article>

      <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-serif mb-4">Third-Party Links</h2>
        <p class="text-white/65 leading-relaxed">
          Our website may contain links to third-party websites. We are not
          responsible for the content, policies, or practices of those external
          sites.
        </p>
      </article>

      <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-serif mb-4">Disclaimer</h2>
        <p class="text-white/65 leading-relaxed">
          The website and its content are provided on an "as is" basis without
          warranties of any kind, whether express or implied. We do not guarantee
          that the site will always be available, uninterrupted, or error-free.
        </p>
      </article>

      <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-serif mb-4">Limitation of Liability</h2>
        <p class="text-white/65 leading-relaxed">
          To the fullest extent permitted by law, Saarthi Studio will not be
          liable for any indirect, incidental, special, or consequential damages
          arising from your use of the website or services.
        </p>
      </article>

      <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-serif mb-4">Changes to These Terms</h2>
        <p class="text-white/65 leading-relaxed">
          We may update these Terms &amp; Conditions from time to time. Continued
          use of the website after changes are posted means you accept the
          updated terms.
        </p>
      </article>

      <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-serif mb-4">Contact</h2>
        <p class="text-white/65 leading-relaxed">
          If you have questions about these Terms &amp; Conditions, please contact
          us through the website's contact form.
        </p>
      </article>
    </div>
  </div>

  <Footer />
</section>
