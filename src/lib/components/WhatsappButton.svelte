
<script>
  import { MessageCircle } from "@lucide/svelte";

	let phoneNumber = "918638927841"; // Replace with actual WhatsApp number
	const message = encodeURIComponent('Hello! I would like to talk about a project.');

	const handleWhatsappClick = () => {
		window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
	};
</script>


<!-- <div class="fixed bottom-8 right-8 sm:bottom-6 sm:right-6 z-[999]"> -->
	<a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-10 right-6 md:right-10 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-200 hover:scale-110 z-500 cursor-pointer"
    >
	<!-- whatsapp icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="w-8 h-8"
        viewBox="0 0 24 24"
      >
        <path d="M19.05 4.94A9.93 9.93 0 0 0 12.07 2C6.48 2 2 6.48 2 12.07c0 1.77.46 3.5 1.34 5.03L2 22l5.06-1.32A9.93 9.93 0 0 0 12.07 22c5.59 0 10.07-4.48 10.07-10.07 0-2.69-1.05-5.22-3.09-7A9.9 9.9 0 0 0 19.05 4.94zM12.07 20c-1.6 0-3.16-.42-4.53-1.22l-.33-.19-3 .78.8-2.92-.2-.34A7.93 7.93 0 0 1 4 12.07C4 7.62 7.62 4 12.07 4c2.13 0 4.13.83 5.64 2.34a7.93 7.93 0 0 1 2.36 5.73C20.07 16.52 16.45 20 12.07 20zm4.06-5.52c-.22-.11-1.31-.65-1.51-.72-.2-.07-.35-.11-.5.11-.15.22-.57.72-.7.87-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.08-.66-.59-1.11-1.31-1.24-1.53-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.69-1.64-.18-.44-.37-.38-.5-.39h-.43c-.15 0-.39.06-.6.28-.2.22-.79.77-.79 1.87 0 1.1.81 2.16.93 2.31.11.15 1.58 2.42 3.82 3.4.53.23.94.37 1.26.47.53.17 1.02.15 1.41.09.43-.06 1.31-.54 1.5-1.05.19-.5.19-.94.13-1.05-.06-.11-.2-.17-.43-.28z" />
      </svg>
    </a>
<!-- </div> -->


