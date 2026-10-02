<script>
  import posthog from "posthog-js";
  import {
    TEL_HREF,
    waLink,
    CAL_LINK,
    PROJECT_WA_MESSAGE,
    CALL_NUMBER_DISPLAY,
  } from "$lib/content/contact.js";

  const whatsappLink = waLink(PROJECT_WA_MESSAGE);

  function track(target) {
    posthog.capture("thankyou_nextstep", { target });
  }
</script>

<svelte:head>
  <title>Thank You | Saarthi Studio</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="min-h-[70vh] bg-[#050505] text-white flex items-center justify-center px-6 py-24">
  <div class="max-w-2xl w-full text-center border border-white/10 rounded-3xl p-8 md:p-12 bg-white/2">
    <p class="text-xs font-mono uppercase tracking-[0.25em] text-white/50 mb-4">
      Message Received
    </p>
    <h1 class="text-4xl md:text-6xl font-serif tracking-tight mb-4">
      Thank you.
    </h1>
    <p class="text-white/65 text-base md:text-lg leading-relaxed mb-2">
      Your inquiry has been sent successfully.
    </p>
    <p class="text-white/50 text-sm md:text-base leading-relaxed mb-8">
      We usually reply within <span class="text-white/80">24 hours</span> — often sooner.
      Need an answer right now?
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
      <a
        href={TEL_HREF}
        onclick={() => track("call")}
        class="px-5 py-3 rounded-full bg-white text-black hover:bg-[#3B82F6] hover:text-white transition-colors text-sm font-medium cursor-pointer"
      >
        Call us
        <span class="block text-[11px] font-normal opacity-70 mt-0.5">{CALL_NUMBER_DISPLAY}</span>
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onclick={() => track("whatsapp")}
        class="px-5 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors text-sm font-medium cursor-pointer"
      >
        WhatsApp us
      </a>
      <a
        href={CAL_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onclick={() => track("calendar")}
        class="px-5 py-3 rounded-full border border-white/20 text-white/90 hover:bg-white hover:text-black transition-colors text-sm font-medium cursor-pointer"
      >
        Book a callback
      </a>
    </div>

    <p class="text-xs text-white/40 mb-6">
      Free website audit · Reply within 24 hours · No spam
    </p>

    <a
      href="/"
      onclick={() => track("home")}
      class="inline-flex px-6 py-3 rounded-full border border-white/20 text-white/90 hover:bg-white hover:text-black transition-colors"
    >
      Back to Home
    </a>
  </div>
</section>
