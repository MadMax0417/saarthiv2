<script>
  import { onMount } from "svelte";
  import Logo from "./logo.svelte";
  import { enhance } from "$app/forms";
  import { toast } from "svelte-sonner";
  
  const year = new Date().getFullYear();

  let formEl;

  const handleEmailSubmit = () => {
    return async ({ result }) => {
      if (result.type === "success") {
        toast.success(result.data.message);
        formEl.reset();
      } else {
      toast.error(result.data.message);
      }
    };
  };
</script>

<footer
  id="footer"
  class="w-full bg-[#050505] text-white pt-32 pb-12 relative overflow-hidden border-t border-white/10 border-b-8 border-b-white/5"
>
  <!-- CTA Section -->

  <!-- Multi-Column Links Section -->
  <div
    class="px-6 md:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 mb-24 z-10 relative"
  >
    <div class="col-span-1 md:col-span-1 flex flex-col gap-6">
      <!-- <div class="opacity-80 ">Saarthi Studio</div> -->
      <div class="italic text-white mr-3 md:mr-6 font-serif text-3xl">
        Saarthi Studio
      </div>
      <p class="text-white/40 font-sans text-sm leading-relaxed max-w-xs">
        Saarthi Studio is a digital partner for modern brands. We help brands
        grow through websites, design, and digital presence.
      </p>
    </div>

    <div class="col-span-1 flex flex-col gap-4">
      <h4
        class="font-mono text-xs uppercase tracking-widest text-[#3B82F6] mb-2"
      >
        Navigation
      </h4>
      <a
        href="/"
        class="text-white/60 hover:text-white font-sans text-sm transition-colors"
        >Home
      </a>
      <a
        href="/blog"
        class="text-white/60 hover:text-white font-sans text-sm transition-colors"
        >Blog</a
      >
      <a
        href="/#services"
        class="text-white/60 hover:text-white font-sans text-sm transition-colors"
        >Services</a
      >
      <a
        href="/#work"
        class="text-white/60 hover:text-white font-sans text-sm transition-colors"
        >Works</a
      >
      <a
        href="/#faq"
        class="text-white/60 hover:text-white font-sans text-sm transition-colors"
        >FAQ</a
      >
    </div>

    <div class="col-span-1 flex flex-col gap-4">
      <h4
        class="font-mono text-xs uppercase tracking-widest text-[#3B82F6] mb-2"
      >
        Socials
      </h4>
      <a
        href="https://www.instagram.com/studio_saarthi/"
        target="_blank"
        rel="no"
        class="text-white/60 hover:text-white font-sans text-sm transition-colors"
        >Instagram</a
      >
      <a
        href="https://x.com/saarthi_studio"
        target="_blank"
        rel="no"
        class="text-white/60 hover:text-white font-sans text-sm transition-colors"
        >Twitter (X)</a
      >
      <!-- <a
				href="https://linkedin.com"
				class="text-white/60 hover:text-white font-sans text-sm transition-colors"
				>LinkedIn</a
			>
			<a
				href="https://github.com/YusufCeng1z"
				target="_blank"
				rel="noopener noreferrer"
				class="text-[#3B82F6] hover:text-white font-sans text-sm transition-colors"
				>GitHub</a
			> -->
    </div>

    <!-- <div class="col-span-1 flex flex-col gap-4">
      <h4
        class="font-mono text-xs uppercase tracking-widest text-[#3B82F6] mb-2"
      >
        Newsletter 
      </h4>
      <p class="text-white/40 font-sans text-sm">
        Join our newsletter for insights on WebGL, Svelte, and design
        engineering.
      </p>
      <div class="mt-2 flex w-full relative">
        <input
          type="email"
          placeholder="Enter your email"
          class="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
        />
        <button
          class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#3B82F6] hover:text-white transition-colors"
        >
          &rarr;
        </button>
      </div>
    </div> -->
    <div class="col-span-1 flex flex-col gap-4">
      <h4
        class="font-mono text-xs uppercase tracking-widest text-[#3B82F6] mb-2"
      >
        Book a free call
      </h4>
      <p class="text-white/40 font-sans text-sm">
        Enter your email address here to book a free call.
      </p>
      <form
        bind:this={formEl}
        method="POST"
        action="?/contact"
        use:enhance={handleEmailSubmit}
        class="mt-2 flex w-full relative"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          class="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
        />
        <button
          type="submit"
          class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#3B82F6] hover:text-white transition-colors"
        >
          &rarr;
        </button>
      </form>
    </div>
  </div>

  <!-- Copyright & Author Bar -->
  <div
    class="px-6 md:px-24 max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-xs font-mono text-base tracking-wider relative z-10"
  >
    <p class="text-white/30">
      &copy; {year}
      <span class="text-[#3B82F6]"> Saarthi Studio.</span>
    </p>

    <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
      <!-- <span class="text-white/50 text-sm font-sans font-light">
				Engineered by <a
					href="https://github.com/YusufCeng1z"
					target="_blank"
					rel="noopener noreferrer"
					class="text-[#3B82F6] font-medium hover:text-white transition-colors duration-500 hover:underline underline-offset-4"
					>YusufCeng1z</a
				>
			</span> -->
      <div class="flex gap-6 text-white/30 hidden md:flex">
        <a href="/privacy-policy" class="hover:text-white/60 transition-colors"
          >Privacy Policy</a
        >
        <a href="/terms-and-conditions" class="hover:text-white/60 transition-colors"
          >Terms &amp; Conditions</a
        >
      </div>
    </div>
  </div>

  <!-- Giant background glow -->
  <div
    class="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[400px] bg-[#3B82F6] opacity-5 blur-[200px] pointer-events-none"
  ></div>
</footer>
