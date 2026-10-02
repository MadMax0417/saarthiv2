<script>
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import { toast } from "svelte-sonner";
  import posthog from "posthog-js";
  import {
    TEL_HREF,
    waLink,
    PROJECT_WA_MESSAGE,
    WHATSAPP_NUMBER,
    CALL_NUMBER_DISPLAY,
    WHATSAPP_NUMBER_DISPLAY,
  } from "$lib/content/contact.js";

  let formEl;
  let submitting = $state(false);
  let started = $state(false);
  let touched = $state({});
  let errors = $state({});

  const whatsappLink = waLink(PROJECT_WA_MESSAGE);

  const TRUST_LINE = "Free website audit · Reply within 24 hours · No spam";

  function validateField(name, value) {
    const v = (value || "").trim();
    switch (name) {
      case "name":
        return v ? "" : "Please tell us your name.";
      case "phone": {
        if (!v) return "Please share a number we can reach you on.";
        const digits = v.replace(/\D/g, "");
        return digits.length >= 10 ? "" : "Enter a valid 10-digit number.";
      }
      case "email": {
        if (!v) return "";
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
          ? ""
          : "Enter a valid email address.";
      }
      case "message":
        return "";
      default:
        return "";
    }
  }

  function handleBlur(e) {
    const field = e.currentTarget;
    touched[field.name] = true;
    const msg = validateField(field.name, field.value);
    if (msg) errors[field.name] = msg;
    else delete errors[field.name];
    posthog.capture("form_field_blur", { field: field.name, has_value: Boolean(field.value) });
  }

  // Native constraint validation blocks the submit; we suppress the browser
  // bubble and show our own inline message instead.
  function handleInvalid(e) {
    e.preventDefault();
    const field = e.currentTarget;
    touched[field.name] = true;
    errors[field.name] = validateField(field.name, field.value) || "This field is required.";
    field.focus();
  }

  function handleFormFocus() {
    if (started) return;
    started = true;
    posthog.capture("form_start");
  }

  const handleSubmit = () => {
    submitting = true;
    return async ({ result }) => {
      submitting = false;
      if (result.type === "success") {
        toast.success(result.data.message);
        posthog.capture("contact_form_submitted", {
          has_phone: Boolean(result.data?.data?.phone),
        });
        formEl.reset();
        touched = {};
        errors = {};
        goto("/thank-you");
      } else {
        toast.error(result.data?.message || "Something went wrong. Please try again.");
        posthog.capture("contact_form_failed", {
          error_message: result.data?.message,
        });
      }
    };
  };

  const contactDetails = {
    number: CALL_NUMBER_DISPLAY,
    whatsappNumber: WHATSAPP_NUMBER_DISPLAY,
    email: "hello@saarthistudio.com",
  };
</script>

<section
  id="contact"
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
    <div class="w-full md:w-1/3 flex flex-col items-start md:items-end gap-4 z-10">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onclick={() => posthog.capture('whatsapp_cta_clicked', { location: 'contact_section' })}
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
      <p class="text-xs text-white/40 font-sans font-light text-left md:text-right">
        {TRUST_LINE}
      </p>
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
          Call:
          <a href={TEL_HREF} class="text-white hover:text-[#3B82F6]">
            {contactDetails.number}
          </a>
        </p>
        <p>
          Email:
          <a
            href="mailto:hello@saarthistudio.com"
            class="text-white hover:text-[#3B82F6]"
          >
            {contactDetails.email}
          </a>
        </p>
        <p>
          WhatsApp:
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:text-[#3B82F6]"
          >
            {contactDetails.whatsappNumber}
          </a>
          <span class="text-white/40 text-sm">
            (or <a href="tel:+{WHATSAPP_NUMBER}" class="hover:text-[#3B82F6]">call it</a>)
          </span>
        </p>
      </div>
      <a
        href={TEL_HREF}
        onclick={() => posthog.capture('contact_call_clicked', { location: 'contact_section' })}
        class="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black hover:bg-[#3B82F6] hover:text-white transition-colors text-sm font-medium cursor-pointer"
      >
        Prefer to talk? Call us
      </a>
    </div>

    <form
     
      bind:this={formEl}
      method="POST"
      action="?/submit"
      use:enhance={handleSubmit}
      onfocusin={handleFormFocus}
      class="rounded-3xl border border-white/10 bg-white/2 p-6 md:p-8 space-y-4"
    >
      <input type="hidden" name="_subject" value="New website inquiry" />

      <h3 class="text-2xl md:text-3xl font-serif mb-6">Send a Message</h3>

      <div>
        <label
          for="contact-name"
          class="block font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2"
        >
          Name <span class="text-[#3B82F6]">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="Your name"
          autocomplete="name"
          required
          aria-invalid={touched.name && errors.name ? "true" : undefined}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          onblur={handleBlur}
          oninvalid={handleInvalid}
          class="w-full bg-transparent border rounded-full px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors {touched.name && errors.name ? 'border-red-400/70 focus:border-red-400' : 'border-white/15 focus:border-white/35'}"
        />
        {#if touched.name && errors.name}
          <p id="contact-name-error" class="text-xs text-red-400 mt-1.5">
            {errors.name}
          </p>
        {/if}
      </div>

      <div>
        <label
          for="contact-phone"
          class="block font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2"
        >
          WhatsApp / phone number <span class="text-[#3B82F6]">*</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          inputmode="tel"
          placeholder="e.g. 98765 43210"
          autocomplete="tel"
          required
          pattern={"[0-9+\\-\\s()]{10,}"}
          title="Enter a valid 10-digit number"
          aria-invalid={touched.phone && errors.phone ? "true" : undefined}
          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          onblur={handleBlur}
          oninvalid={handleInvalid}
          class="w-full bg-transparent border rounded-full px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors {touched.phone && errors.phone ? 'border-red-400/70 focus:border-red-400' : 'border-white/15 focus:border-white/35'}"
        />
        {#if touched.phone && errors.phone}
          <p id="contact-phone-error" class="text-xs text-red-400 mt-1.5">
            {errors.phone}
          </p>
        {/if}
      </div>

      <div>
        <label
          for="contact-email"
          class="block font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2"
        >
          Email <span class="text-white/30">(optional)</span>
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          inputmode="email"
          placeholder="you@company.com"
          autocomplete="email"
          aria-invalid={touched.email && errors.email ? "true" : undefined}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          onblur={handleBlur}
          oninvalid={handleInvalid}
          class="w-full bg-transparent border rounded-full px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors {touched.email && errors.email ? 'border-red-400/70 focus:border-red-400' : 'border-white/15 focus:border-white/35'}"
        />
        {#if touched.email && errors.email}
          <p id="contact-email-error" class="text-xs text-red-400 mt-1.5">
            {errors.email}
          </p>
        {/if}
      </div>

      <div>
        <label
          for="contact-message"
          class="block font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2"
        >
          Project details <span class="text-white/30">(optional)</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows="5"
          placeholder="Tell us about your project"
          class="w-full bg-transparent border border-white/15 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/35 transition-colors resize-none"
        ></textarea>
      </div>

      <div class="flex flex-col gap-3 pt-2">
        <button
          type="submit"
          disabled={submitting}
          class="px-7 py-3 rounded-full bg-white text-black hover:bg-[#3B82F6] hover:text-white transition-colors text-sm font-medium cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {#if submitting}
            <span
              class="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"
              aria-hidden="true"
            ></span>
            Sending…
          {:else}
            Send Inquiry
          {/if}
        </button>
        <p class="text-xs text-white/40 font-sans font-light text-center">
          {TRUST_LINE}
        </p>
      </div>
    </form>
  </div>
</section>
