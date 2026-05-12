<script>
  import Seo from "$lib/components/Seo.svelte";
  import Footer from "$lib/components/Footer.svelte";

  const updatedOn = "May 12, 2026";
</script>

<Seo
  title="Privacy Policy | Saarthi Studio"
  description="Read how Saarthi Studio collects, uses, and protects information shared through our website and services."
  url="https://saarthiv2-six.vercel.app/privacy-policy"
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
        Privacy Policy
      </h1>
      <p class="text-white/65 text-base md:text-lg leading-relaxed">
        This Privacy Policy explains how Saarthi Studio collects, uses, stores,
        and shares information when you visit our website or contact us through
        our forms and channels.
      </p>
      <p class="text-white/45 text-sm mt-6">
        Last updated: {updatedOn}
      </p>
    </div>

    <div class="grid gap-6">
      <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-serif mb-4">Information We Collect</h2>
        <p class="text-white/65 leading-relaxed">
          We may collect information you choose to share with us, such as your
          name, email address, project details, and any message you submit
          through our contact form. We may also collect limited technical data
          like device type, browser information, and page interactions to help
          improve the experience of our site.
        </p>
      </article>

      <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-serif mb-4">How We Use Information</h2>
        <p class="text-white/65 leading-relaxed">
          We use the information we collect to respond to inquiries, deliver
          services, improve the website, communicate with you about your
          project, and maintain the security and performance of our systems.
        </p>
      </article>

      <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-serif mb-4">Sharing Information</h2>
        <p class="text-white/65 leading-relaxed">
          We do not sell your personal information. We may share data with
          trusted service providers who help us operate the site or provide
          services on our behalf, and only when necessary for that purpose or
          when required by law.
        </p>
      </article>

      <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-serif mb-4">Cookies and Analytics</h2>
        <p class="text-white/65 leading-relaxed">
          We may use cookies or similar technologies to understand how visitors
          use the site, remember preferences, and improve performance. You can
          usually control cookies through your browser settings.
        </p>
      </article>

      <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-serif mb-4">Data Retention</h2>
        <p class="text-white/65 leading-relaxed">
          We keep personal information only as long as needed for the purposes
          described in this policy, to comply with legal obligations, resolve
          disputes, and maintain business records.
        </p>
      </article>

      <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-serif mb-4">Your Rights</h2>
        <p class="text-white/65 leading-relaxed">
          Depending on where you live, you may have rights to access, correct,
          delete, or limit the use of your personal information. If you would
          like to make a request, contact us through the website.
        </p>
      </article>

      <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-serif mb-4">Contact</h2>
        <p class="text-white/65 leading-relaxed">
          If you have questions about this Privacy Policy or how we handle
          information, please reach out through the contact form on our website.
        </p>
      </article>
    </div>
  </div>

  <Footer />
</section>
