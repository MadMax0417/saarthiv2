<script>
  import posthog from "posthog-js";
  import {
    TEL_HREF,
    waLink,
    PROJECT_WA_MESSAGE,
    CALL_NUMBER_DISPLAY,
  } from "$lib/content/contact.js";

  const WHATSAPP_HREF = waLink(PROJECT_WA_MESSAGE);
</script>

<section class="w-full bg-[#050505] text-white py-16 md:py-24 relative z-10">
  <div class="px-6 md:px-24 max-w-7xl mx-auto">
    <div
      class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-10 md:px-14 md:py-14"
    >
      <!-- soft glow -->
      <div
        class="absolute -top-24 -right-16 w-80 h-80 bg-[#3B82F6] opacity-[0.07] blur-[120px] rounded-full pointer-events-none"
      ></div>

      <div
        class="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
      >
        <div class="max-w-2xl">
          <span
            class="text-xs font-mono text-white/30 uppercase tracking-[0.3em] block mb-5"
            >Let's build it</span
          >
          <h3 class="text-3xl md:text-5xl font-serif leading-[1.05] tracking-tight">
            Have a project in mind?<br />
            <span class="italic text-white/40">Let's make it real.</span>
          </h3>
          <p class="text-sm md:text-base text-white/50 font-sans mt-5 leading-relaxed">
            Free website audit · Reply within 24 hours · No spam
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 shrink-0">
          <a
            href={TEL_HREF}
            onclick={() => posthog.capture("mid_cta_clicked", { action: "call" })}
            class="px-8 py-4 bg-white text-black rounded-full font-sans font-medium text-center hover:bg-[#3B82F6] hover:text-white transition-all duration-500 cursor-pointer shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            Call Us
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onclick={() =>
              posthog.capture("mid_cta_clicked", { action: "whatsapp" })}
            class="px-8 py-4 bg-transparent text-white border border-white/20 rounded-full font-sans font-medium text-center hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all duration-500 cursor-pointer"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <p class="relative z-10 mt-8 text-xs font-mono text-white/30">
        Prefer email? <a
          href="mailto:hello@saarthistudio.com"
          class="text-white/60 hover:text-white transition-colors"
          >hello@saarthistudio.com</a
        >
        · {CALL_NUMBER_DISPLAY}
      </p>
    </div>
  </div>
</section>
