<script>
  import Plus from "@lucide/svelte/icons/plus";
  import Minus from "@lucide/svelte/icons/minus";
  import { slide } from "svelte/transition";
  import posthog from "posthog-js";

  const faqs = [
  {
    q: "How long does a project usually take?",
    a: "Most websites and branding projects take 2–4 weeks from kickoff to launch. Larger or more complex projects are scoped separately — but we keep the process focused, transparent, and moving.",
  },
  {
    q: "How much does a website or branding project cost?",
    a: "Pricing depends on the scope, features, and complexity of the project. We provide a clear quote before we start, with no hidden charges or surprise costs.",
  },
  {
    q: "What does Saarthi Studio actually do?",
    a: "We help businesses build their digital presence — from websites and web apps to logos, brand identity, graphic design, SEO, and social media. Basically, we turn your ideas into something people can actually see, use, and remember.",
  },
  {
    q: "I don't know exactly what I need. Can you help?",
    a: "Absolutely. You don't need to come to us with a perfect brief. Tell us about your business, your goals, and what you're trying to achieve — we'll help figure out what you actually need.",
  },
  {
    q: "Will my website work well on mobile?",
    a: "Yes. Every website we build is responsive and designed with mobile users in mind. We optimize for different screen sizes, performance, and a smooth experience across devices.",
  },
  {
    q: "Do you provide support after the website goes live?",
    a: "Yes. We can help with maintenance, updates, improvements, SEO, and ongoing digital support after launch. If you want us involved long-term, we also offer ongoing support and growth packages.",
  },
];

  //Faq Schema 
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  let activeIndex = $state(null);

  function toggle(index) {
    if (activeIndex === index) {
      activeIndex = null;
    } else {
      activeIndex = index;
      posthog.capture('faq_item_expanded', { question: faqs[index].q, index });
    }
  }
</script>


<svelte:head>
  <script type="application/ld+json">
    {JSON.stringify(faqSchema)}
  </script>
</svelte:head>

<section
  id="faq"
  class="w-full bg-[#050505] text-white py-32 border-t border-white/10 relative overflow-hidden"
>
  <div
    class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B82F6] opacity-5 blur-[150px] rounded-full pointer-events-none"
  ></div>

  <div
    class="px-6 md:px-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 relative z-10"
  >
    <!-- Left Side: Title -->
    <div class="w-full md:w-1/3">
      <span
        class="text-sm font-mono text-white/50 uppercase tracking-widest mb-6 block"
        >FAQ</span
      >
      <h2 class="text-4xl md:text-5xl font-serif leading-tight">
        Frequently<br />
        <span class="italic text-white/40">Asked</span>
      </h2>
      <p class="text-white/50 mt-6 font-sans font-light">
        Answers to the most common questions regarding our process, technology
        stack, and partnership models.
      </p>

      <a
        href="#contact"
        class="inline-flex items-center gap-2 mt-8 text-sm font-mono text-white/80 uppercase hover:text-white transition-colors group"
      >
        Still have questions?
        <span
          class="w-8 h-[1px] bg-white transform origin-left transition-transform duration-300 group-hover:scale-x-150"
        ></span>
      </a>
    </div>

    <!-- Right Side: Accordion -->
    <div class="w-full md:w-2/3 flex flex-col">
      {#each faqs as item, index (item.q)}
        <button
          class="w-full border-b border-white/10 py-8 text-left flex flex-col cursor-pointer group"
          onclick={() => toggle(index)}
          aria-expanded={activeIndex === index}
        >
          <div class="w-full flex justify-between items-center">
            <h3
              class="text-2xl md:text-3xl font-serif text-white/80 group-hover:text-white transition-colors duration-300"
            >
              {item.q}
          </h3>

            <div
              class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transform transition-transform duration-500 group-hover:bg-white/10"
            >
              {#if activeIndex === index}
                <Minus class="w-5 h-5 text-white" />
              {:else}
                <Plus class="w-5 h-5 text-white" />
              {/if}
            </div>
          </div>

          {#if activeIndex === index}
            <div
              transition:slide={{
                duration: 400,
                easing: (t) => --t * t * t + 1,
              }}
              class="overflow-hidden"
            >
              <p
                class="pt-6 text-lg text-white/50 font-sans font-light leading-relaxed max-w-2xl"
              >
                {item.a}
              </p>
            </div>
          {/if}
          
        </button>
      {/each}
    </div>
  </div>
</section>
