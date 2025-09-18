<script>
	export let data;
	$: items = data.items;
</script>

<!-- Hero -->
<section class="relative bg-dark-blue py-20 text-center text-white">
	<div class="container mx-auto px-4">
		<h1 class="font-title text-4xl font-extrabold md:text-5xl">Nuestros Servicios</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
			Ofrecemos un abanico completo de soluciones en automatización, herrería, construcción y
			estructuras, adaptadas a tus necesidades con calidad y compromiso.
		</p>
	</div>
</section>

<!-- Listado de servicios -->
<section class="bg-gray-50 py-16">
	<div class="container mx-auto space-y-12 px-4">
		{#each items as item}
			<div class="grid items-center gap-6 md:grid-cols-2">
				<img
					src={item?.picture?.lg}
					alt="{item.title}"
					class="h-64 w-full rounded-lg object-cover shadow"
				/>
				<div>
					<h2 class="text-2xl font-bold text-gray-900">{item.title}</h2>
					<p class="mt-3 text-gray-600">{@html item.summary}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- CTA -->
<section class="bg-dark-blue py-16 text-center text-white">
	<div class="container mx-auto px-4">
		<h2 class="mb-4 font-title text-3xl font-extrabold">¿Querés más información?</h2>
		<p class="mb-6 text-gray-200">
			Contactanos para conocer todos los detalles y obtener un presupuesto adaptado a tu proyecto.
		</p>
		<a
			href="#contacto"
			class="inline-block rounded-full bg-emerald-600 px-8 py-3 font-medium text-white transition hover:bg-emerald-700"
		>
			Pedí tu presupuesto
		</a>
	</div>
</section>
