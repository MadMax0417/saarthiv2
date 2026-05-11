<script>
  import {enhance} from "$app/forms";
  import {toast} from 'svelte-sonner';

  let formEl;

  const handleSubmit = () => {
    return async ({ result }) => {
      if(result.type === 'success') {
        toast.success(result.data.message)
        formEl.reset()
      } else {
        toast.error(result.data.message)
      }
    } 
  }

  const contactDetails = {
      number : "+91 81693 14760",
      whatsappNumber : "+91 86389 27841",
      email:"saarthistudios@gmail.com"
  }
  
</script>

<section  
    id="cta"
  class="w-full bg-[#050505] text-white pt-32 pb-12 relative overflow-hidden border-t border-white/10 border-b-8 border-b-white/5"
>
    <div
    class="px-6 md:px-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-32 gap-12"
  >
    <h2
      class="text-[12vw] md:text-[7vw] font-serif leading-[0.85] tracking-tighter mix-blend-difference z-10 w-full md:w-2/3"
    >
      Have a project<br />
      <span class="italic text-white/40">in mind?</span>
    </h2>
    <div class="w-full md:w-1/3 flex md:justify-end z-10">
      <a
      // TO-DO:  add whatsapp link here ----------------------------
        href="https://wa.me/918638927841?text=Hey%2C%20I%20want%20to%20discuss%20a%20project%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        class="group relative flex items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full bg-white text-black hover:scale-105 transition-transform duration-500 cursor-pointer"
      >
        <span
          class="absolute inset-0 bg-[#3B82F6] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-0"
        ></span>
        <span
          class="font-sans font-medium text-lg relative z-10 group-hover:text-white transition-colors duration-500"
          >Let's Talk</span
        >
      </a>
    </div>
  </div>

  <div
    class="px-6 md:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
  >
    <div class="rounded-3xl border border-white/10 bg-white/2 p-6 md:p-8">
      <h3 class="text-2xl md:text-3xl font-serif mb-6">Contact Information</h3>
      <div class="space-y-4 text-white/75">
        <!-- <p>Address: Your Office Address, City, Country</p> -->
        <p>
          Phone:
          <a href="tel:+918169314760" class="text-white hover:text-[#3B82F6]">
            {contactDetails.number}
            </a
            >
          </p>
          <p>
            Phone:
            <a href="tel:+918638927841" class="text-white hover:text-[#3B82F6]">
              {contactDetails.whatsappNumber}
          </a>
        </p>
        <p>
          Email:
          <a
            href="mailto:saarthistudios@gmail.com"
            class="text-white hover:text-[#3B82F6]"
            >
            {contactDetails.email}
            </a
          >
        </p>
        <p>
          WhatsApp:
          <a
            href="https://wa.me/918638927841?text=Hey%2C%20I%20want%20to%20discuss%20a%20project%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:text-[#3B82F6]">
            {contactDetails.whatsappNumber}
            </a>
        </p>
      </div>
    </div>

    <form
      bind:this={formEl}
      method="POST"
      action="?/submit"
      use:enhance={handleSubmit}
      class="rounded-3xl border border-white/10 bg-white/2 p-6 md:p-8 space-y-4"
    >
      <input type="hidden" name="_subject" value="New website inquiry" />

      <h3 class="text-2xl md:text-3xl font-serif mb-6">Send a Message</h3>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        class="w-full bg-transparent border border-white/15 rounded-full px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/35 transition-colors"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        class="w-full bg-transparent border border-white/15 rounded-full px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/35 transition-colors"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Mobile number (optional)"
        class="w-full bg-transparent border border-white/15 rounded-full px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/35 transition-colors"
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Tell us about your project"
        required
        class="w-full bg-transparent border border-white/15 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/35 transition-colors resize-none"
      ></textarea>
      
      <button
        type="submit"
        class="px-7 py-3 rounded-full bg-white text-black hover:bg-[#3B82F6] hover:text-white transition-colors text-sm font-medium cursor-pointer"
      >
        Send Inquiry
      </button>
    </form>
  </div>
</section>