<script>
	import Hero from "../../components/pages/blocks/hero.svelte";

	export let data;
	$: page = data.page.item;
</script>

<Hero 
    title={page?.title} 
    description={page?.content}
    image={page?.picture?.lg}
/>

<!-- Presentación -->
<section class="bg-gray-50 py-16">
	<div class="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2 lg:px-8">
		<div>
			<h2 class="mb-4 font-title text-3xl font-extrabold text-gray-900 md:text-4xl">
				Hacemos realidad tus proyectos
			</h2>
			<p class="mb-3 text-gray-700">
				Nacimos como un emprendimiento de automatización de portones y, gracias al compromiso y la
				confianza de nuestros clientes, fuimos creciendo hasta convertirnos en un equipo capaz de
				abarcar proyectos de herrería, techado, construcción y estructuras metálicas.
			</p>
			<p class="mb-3 text-gray-700">
				Nos caracteriza la <strong class="text-slate-600">calidad en los materiales</strong>, la
				<strong class="text-slate-600">responsabilidad en los plazos</strong>
				y el
				<strong class="text-slate-600">acompañamiento personalizado</strong> en cada obra.
			</p>
			<p class="text-gray-700">
				Porque entendemos que tu obra es más que un trabajo: es un <strong class="text-slate-600"
					>sueño</strong
				> que merece hacerse realidad.
			</p>
		</div>
		<img
			src="/images/us.jpg"
			alt="Equipo de trabajo"
			class="h-80 w-full rounded-lg object-cover shadow-md"
		/>
	</div>
</section>

<!-- Valores -->
<section class="bg-dark-blue py-16">
	<div class="container mx-auto px-4 text-center text-white">
		<h2 class="mb-10 font-title text-3xl font-extrabold">Nuestros valores</h2>
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			<div class="rounded-lg bg-dark-blue/70 p-6 shadow transition hover:shadow-lg">
				<!-- Ícono: check en casilla -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mx-auto mb-4 h-10 w-10 text-emerald-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<!-- Cuadro -->
					<rect x="4" y="4" width="16" height="16" rx="2" />
					<!-- Check -->
					<path d="M8 12l3 3 5-6" />
				</svg>
				<h3 class="text-lg font-semibold">Calidad</h3>
				<p class="mt-2 text-sm text-gray-300">Materiales de primera línea y acabados duraderos.</p>
			</div>
			<div class="rounded-lg bg-dark-blue/70 p-6 shadow transition hover:shadow-lg">
				<!-- Ícono: reloj con círculo externo -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mx-auto mb-4 h-10 w-10 text-emerald-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<!-- Círculo externo -->
					<circle cx="12" cy="12" r="9" />
					<!-- Agujas -->
					<path d="M12 7v5l3 2" />
				</svg>

				<h3 class="text-lg font-semibold">Responsabilidad</h3>
				<p class="mt-2 text-sm text-gray-300">Cumplimos tiempos y acuerdos con compromiso real.</p>
			</div>
			<div class="rounded-lg bg-dark-blue/70 p-6 shadow transition hover:shadow-lg">
				<!-- Ícono: escudo con check (confianza) -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mx-auto mb-4 h-10 w-10 text-emerald-400"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<!-- Escudo -->
					<path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />
					<!-- Check -->
					<path d="M9 12l2 2 4-4" />
				</svg>

				<h3 class="text-lg font-semibold">Confianza</h3>
				<p class="mt-2 text-sm text-gray-300">
					Acompañamos cada paso del proyecto con transparencia.
				</p>
			</div>
			<div class="rounded-lg bg-dark-blue/70 p-6 shadow transition hover:shadow-lg">
				<!-- Ícono: cohete (innovación) -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="mx-auto mb-4 h-10 w-10 text-emerald-400"
				>
					<!-- Cuerpo del cohete -->
					<path d="M12 2c3 3 4 7 4 10a4 4 0 01-8 0c0-3 1-7 4-10z" />

					<!-- Ventana -->
					<circle cx="12" cy="9" r="1.5" />

					<!-- Aletas -->
					<path d="M8 14l-2 4 4-2m6-2l2 4-4-2" />

					<!-- Llama -->
					<path d="M12 14v5c0 .5-.5 1-1 1h2c-.5 0-1-.5-1-1v-5z" />
				</svg>

				<h3 class="text-lg font-semibold">Innovación</h3>
				<p class="mt-2 text-sm text-gray-300">Buscamos soluciones modernas y eficientes.</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-gray-50 py-16 text-center text-gray-900">
	<div class="container mx-auto px-4">
		<h2 class="mb-4 font-title text-3xl font-extrabold">¿Listo para empezar tu proyecto?</h2>
		<p class="mb-6 text-gray-600">Contactanos y trabajemos juntos para hacerlo realidad.</p>
		<a
			href="#contacto"
			class="inline-block rounded-full bg-emerald-600 px-8 py-3 font-medium text-white transition hover:bg-emerald-700"
		>
			Comunicate con nosotros
		</a>
	</div>
</section>
