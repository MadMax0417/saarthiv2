<script>
	let phoneNumber = "918638927841"; // Replace with actual WhatsApp number

	const handleWhatsappClick = () => {
		const message = encodeURIComponent('Hello! I would like to know more about your services.');
		window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
	};
</script>

<div class="whatsapp-button">
	<button
		on:click={handleWhatsappClick}
		aria-label="Chat with us on WhatsApp"
		class="floating-btn"
	>
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path
				d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
			/>
		</svg>
		<span>Message</span>
	</button>
</div>

<style>
	.whatsapp-button {
		--whatsapp-green: #25d366;
		--whatsapp-dark: #1fa85b;
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		z-index: 999;
		opacity: 1;
	}

	.floating-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.875rem 1.25rem;
		background-color: var(--whatsapp-green);
		color: white;
		border: none;
		border-radius: 50px;
		cursor: pointer;
		font-weight: 600;
		font-size: 0.95rem;
		box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
		transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
		position: relative;
		overflow: hidden;

		&:hover {
			background-color: var(--whatsapp-dark);
			transform: scale(1.08);
			box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
		}

		&:active {
			transform: scale(0.96);
		}

		svg {
			width: 20px;
			height: 20px;
			stroke: white;
		}

		span {
			display: none;

			@media (min-width: 768px) {
				display: inline;
			}
		}
	}

	/* Mobile responsive adjustments */
	@media (max-width: 640px) {
		.whatsapp-button {
			bottom: 1.5rem;
			right: 1.5rem;
		}

		.floating-btn {
			padding: 0.75rem;
			width: 56px;
			height: 56px;
			justify-content: center;

			svg {
				width: 24px;
				height: 24px;
			}
		}
	}

	/* Pulse animation on hover for extra attention */
	@keyframes pulse {
		0% {
			box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
		}
		50% {
			box-shadow: 0 4px 20px rgba(37, 211, 102, 0.7);
		}
		100% {
			box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
		}
	}

	.floating-btn:hover {
		animation: pulse 1.5s ease-in-out infinite;
	}
</style>
