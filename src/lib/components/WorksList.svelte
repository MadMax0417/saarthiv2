<script>
  let selectedWork = $state(null);

  const works = [
    {
      id: "01",
      name: "Whimsy Walls",
      category: "Artist's Mobile Portfolio",
      year: "2025",
      href: "https://whimsywalls.vercel.app/",
      description:
        "A stunning mobile-first portfolio for an artist showcasing artwork with smooth animations and interactive elements.",
      // TO-DO : check if it is called motion.dev
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
        "ImageKit",
      ],
      caseStudy: { title: "Case Study", slug: "whimsy-walls" },
    },
    {
      id: "02",
      name: "Mahesh Fishland",
      category: "A local shop's fishland website",
      year: "2025",
      href: "https://maheshfishland.vercel.app/",
      description:
        "A vibrant e-commerce website for a local fishland shop with product listings and online ordering capabilities.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "MongoDB",
        "Vercel",
        "TypeScript",
      ],
      caseStudy: { title: "Case Study", slug: "mahesh-fishland" },
    },
    {
      id: "03",
      name: "Costa Blanca Car Rental",
      category: "International Car Rental Business",
      year: "2026",
      href: "https://costablancarental.vercel.app/",
      description:
        "A full-featured car rental platform serving international customers with real-time booking and multi-language support.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Vercel"],
      caseStudy: { title: "Case Study", slug: "costa-blanca" },
    },
    {
      id: "04",
      name: "Gita Flow",
      category: "Landing Page",
      year: "2026",
      href: "https://gitaflow.saarthistudio.com",
      description:
        "A modern landing page with compelling storytelling and conversion-focused design for a digital product.",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      caseStudy: { title: "Case Study", slug: "gita-flow" },
    },
    {
      id: "05",
      name: "Shri Vishwarukm Ayurvedic Clinic | Amol Bhere",
      category: "Ayurvedic Clinic",
      year: "2026",
      href: "https://www.amolbhereshrivishwarukm.in/",
      description:
        "A modern digital presence for an Ayurvedic clinic focused on educating patients, building credibility, and generating consultation enquiries with a fast, mobile-first experience.",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      caseStudy: { title: "Case Study", slug: "amol-bhere" },
    },
    {
      id: "06",
      name: "Iconic Beauty Salon",
      category: "Beauty Salon",
      year: "2026",
      href: "https://iconicbeautysalon.vercel.app/",
      description:
        "A modern beauty salon website featuring services, pricing, and a WhatsApp-first booking experience designed to attract local customers and build trust online.",
      technologies: ["React", "Vite", "Tailwind CSS", "Vercel"],
      caseStudy: { title: "Case Study", slug: "iconic-beauty-salon" },
    },
  ];

  function closeModal() {
    selectedWork = null;
  }
</script>

<section
  id="work"
  class="w-full bg-[#050505] text-white py-32 border-t border-white/10 min-h-screen"
>
  <div
    class="px-6 md:px-24 mb-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6"
  >
    <h2 class="text-5xl md:text-8xl font-serif tracking-tight">
      <span class="italic text-white md:text-white/40">Works</span>
    </h2>
    <p class="text-white/50 font-sans max-w-sm text-lg leading-relaxed pb-2">
      A curation of highly immersive projects pushing digital boundaries. Hover
      to reveal more.
    </p>
  </div>

  <div class="px-6 md:px-24 max-w-7xl mx-auto flex flex-col">
    <!-- Table Header -->
    <div
      class="flex border-b border-white/20 pb-4 mb-4 text-xs font-mono text-white/40 uppercase tracking-widest px-4"
    >
      <div class="w-16">ID</div>
      <div class="flex-1">Project</div>
      <div class="hidden md:block w-1/3">Role</div>
      <div class="w-16 text-right">Year</div>
    </div>

    <!-- Table Rows -->
    {#each works as work}
      <button
        onclick={() => (selectedWork = work)}
        class="group flex items-center border-b border-white/10 py-8 md:py-12 px-4 hover:bg-white/5 transition-colors duration-500 cursor-pointer relative overflow-hidden w-full text-left bg-transparent"
        style="border: none;"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/0 via-[#3B82F6]/5 to-[#3B82F6]/0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none"
        ></div>

        <div
          class="w-16 text-sm font-mono text-white/30 group-hover:text-white/80 transition-colors z-10"
        >
          {work.id}
        </div>
        <div class="flex-1 z-10">
          <h3
            class="text-4xl md:text-6xl font-serif text-white/70 group-hover:text-white group-hover:translate-x-4 transition-all duration-500 transform-gpu"
          >
            {work.name}
          </h3>
        </div>
        <div
          class="hidden md:block w-1/3 text-lg font-sans font-light text-white/40 group-hover:text-white/80 transition-colors z-10"
        >
          {work.category}
        </div>
        <div
          class="w-16 text-right text-sm font-mono text-white/40 group-hover:text-white/90 transition-colors z-10"
        >
          {work.year}
        </div>
      </button>
    {/each}

    {#if works.length > 5}
      <div class="mt-16 flex justify-center w-full">
        <!-- how to add here this ?  
			if workslist.length is more than 5-6 projects then show this button
			-->

        <button
          class="px-8 py-3 rounded-full border border-white/20 text-white/80 hover:bg-white hover:text-black transition-colors duration-500 font-sans cursor-pointer text-sm font-medium"
        >
          View All Archives
        </button>
      </div>
    {/if}
  </div>

  <!-- Modal -->
  {#if selectedWork}
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        class="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-label="Close modal"
        onclick={closeModal}
      ></button>
      <div
        class="relative z-10 bg-[#0a0a0a] border border-white/10 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        role="dialog"
        tabindex="0"
        aria-modal="true"
      >
        <!-- Header -->
        <div
          class="flex justify-between items-start p-8 border-b border-white/10 mt-10"
        >
          <div>
            <h2 class="text-4xl md:text-5xl font-serif text-white mb-2">
              {selectedWork.name}
            </h2>
            <p class="text-white/60">{selectedWork.category}</p>
          </div>
          <button
            type="button"
            onclick={closeModal}
            class="text-white/50 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="p-8 space-y-6">
          <!-- Description -->
          <div>
            <h3 class="text-sm uppercase tracking-widest text-white/50 mb-2">
              About
            </h3>
            <p class="text-white/80 leading-relaxed">
              {selectedWork.description}
            </p>
          </div>

          <!-- Technologies -->
          <div>
            <h3 class="text-sm uppercase tracking-widest text-white/50 mb-3">
              Technologies
            </h3>
            <div class="flex flex-wrap gap-2">
              {#each selectedWork.technologies as tech}
                <span
                  class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/70"
                >
                  {tech}
                </span>
              {/each}
            </div>
          </div>

          <!-- Live Link -->
          <div class="pt-2">
            <a
              href={selectedWork.href}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors font-medium"
            >
              Visit Live Site
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-4l6-6m0 0L21 3m-6 6v6"
                />
              </svg>
            </a>
          </div>

          <!-- Case Study -->
          {#if selectedWork.caseStudy}
            <div class="pt-4 border-t border-white/10">
              <h3 class="text-sm uppercase tracking-widest text-white/50 mb-4">
                Case Study
              </h3>
              <a
                href={`/case-studies/${selectedWork.caseStudy.slug}`}
                onclick={closeModal}
                class="block px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all text-white/80 hover:text-white"
              >
                <span class="text-sm font-medium"
                  >{selectedWork.caseStudy.title}</span
                >
                <span class="text-white/40 ml-2">→</span>
              </a>
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</section>
