<script>
  import { onMount, onDestroy } from "svelte";
  import gsap from "gsap";

  const feedbacks = [
    {
      name: "Sunil Chandore",
      role: "Mahesh Fishland",
      text: "Since I got a site built for my shop from Saarthi Studio, I have seen a lot of positive changes in my business and I am very impressed with their site building and work style.",
    },
    {
      name: "Sanika",
      role: "",
      text: "Working with Saarthi Studio has been seamless. Their expertise and dedication turned our ideas into impactful results. Truly professional, creative, and results-driven!",
    },
    {
      name: "Sonali Wakchoure",
      role: "Whimsy Walls",
      text: "Thanks to Saarthi Studio, my vision now has a strong online presence. The whole experience was smooth and enjoyable!",
    },
    {
      name: "Harfool Gurjar",
      role: "Growify India",
      text: "We worked with them for our company's website and the experience was amazing. His team have very good technical knowledge. He not only understood our needs, but also gave excellent suggestions on the user interface (UI). The work was completed within the deadline.",
    },
    {
      name: "PJ",
      role: "Costa Blanca Car Rental Company",
      text: "Saarthi Studio built our website from scratch and did a great job understanding what we wanted. The design feels clean and premium, the website works smoothly on mobile, and they also optimized the SEO. The revisions were also handled quickly.",
    },
    {
      name: "Simran Gupta",
      role: "Iconic professional beauty salon",
      text: "A big thank you to the Saarthi Team for designing a beautiful and professional website for my salon. Since launching the website, I’ve seen a noticeable increase in clients, and it has made my business much more organized and easier to manage. I highly recommend Saarthi to anyone looking to grow their business online.",
    },


  ];

  let currentIndex = $state(0);
  let quoteRef = $state();
  let nameRef = $state();
  let isAnimating = false;
  let timer;

  function nextQuote() {
    if (isAnimating) return;
    goToQuote((currentIndex + 1) % feedbacks.length);
  }

  function goToQuote(index) {
    if (index === currentIndex || isAnimating) return;

    isAnimating = true;
    if (timer) clearInterval(timer);

    gsap.to([quoteRef, nameRef], {
      autoAlpha: 0,
      y: 10,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        currentIndex = index;
        gsap.fromTo(
          [quoteRef, nameRef],
          { autoAlpha: 0, y: -10 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.2,
            stagger: 0.15,
            ease: "power2.out",
            onComplete: () => {
              isAnimating = false;
              timer = setInterval(nextQuote, 6000);
            },
          },
        );
      },
    });
  }

  onMount(() => {
    timer = setInterval(nextQuote, 6000);
    return () => {
      if (timer) clearInterval(timer);
    };
  });
</script>

<section
  id="testimonials"
  class="w-full bg-[#050505] text-white py-32 md:py-48 flex items-center justify-center relative overflow-hidden border-t border-white/5"
>
  <!-- Extremely soft background glow -->
  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-[#3B82F6]/5 blur-[200px] rounded-full pointer-events-none"
  ></div>

  <div
    class="max-w-5xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center"
  >
    <span
      class="text-xs font-mono text-white/30 uppercase tracking-widest mb-16"
      >Client Voices</span
    >

    <h3
      bind:this={quoteRef}
      class="text-3xl md:text-5xl xl:text-6xl font-serif text-white/90 leading-[1.3] md:leading-[1.2] tracking-tight mb-16 flex items-center justify-center will-change-transform h-[200px] md:h-auto"
    >
      "{feedbacks[currentIndex].text}"
    </h3>

    <div
      bind:this={nameRef}
      class="flex flex-col items-center gap-3 will-change-transform"
    >
      <h4
        class="text-white font-medium text-sm md:text-base uppercase tracking-widest"
      >
        {feedbacks[currentIndex].name}
      </h4>
      <span class="text-sm font-sans text-white/40"
        >{feedbacks[currentIndex].role}</span
      >
    </div>

    <!-- Pagination Dots -->
    <div class="flex gap-4 mt-16">
      {#each feedbacks as _, i}
        <button
          class="w-2 h-2 rounded-full transition-all duration-500 cursor-pointer {currentIndex ===
          i
            ? 'bg-white scale-125'
            : 'bg-white/20 hover:bg-white/50'}"
          aria-label="Go to slide {i + 1}"
          onclick={() => goToQuote(i)}
        ></button>
      {/each}
    </div>
  </div>
</section>
