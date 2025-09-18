<script>
	import { menu } from "../../config/menu";
	import Link from "../elements/Link.svelte";

	let isOpen = false;
</script>

<header class="bg-dark-blue py-6 md:py-4 sticky top-0 left-0 z-50">
	<div class="container mx-auto flex items-center justify-between px-4 md:px-0">
		<!-- Logo -->
		<div>
			<img src="./images/logo.svg" class="h-8 md:h-14 w-auto" alt="Logo" />
		</div>

		<!-- Botón menú (solo en móvil) -->
		<button
			class="md:hidden text-white focus:outline-none"
			on:click={() => (isOpen = !isOpen)}
			aria-label="Abrir menú"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
				viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>

		<!-- Menú en desktop -->
		<nav class="hidden md:flex space-x-6 text-white font-medium">
			{#each menu as link}
				<Link label={link.label} link={link.link} />
			{/each}
		</nav>
	</div>

	<!-- Overlay menú en móvil -->
	<div
		class="fixed inset-0 bg-dark-blue text-white flex flex-col items-center justify-center space-y-6 text-xl font-medium transform transition-all duration-300 ease-in-out"
		class:translate-x-0={isOpen}
		class:translate-x-full={!isOpen}
		class:opacity-100={isOpen}
		class:opacity-0={!isOpen}
	>
		<!-- Botón cerrar (arriba a la derecha) -->
		<button
			class="absolute top-6 right-6 text-white focus:outline-none"
			on:click={() => (isOpen = false)}
			aria-label="Cerrar menú"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
				viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<!-- Links -->
		{#each menu as link}
			<!-- Cierra el menú al hacer click -->
			<div on:click={() => (isOpen = false)}>
				<Link label={link.label} link={link.link} />
			</div>
		{/each}
	</div>
</header>
