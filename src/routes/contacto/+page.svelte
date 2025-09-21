<script>
	import Hero from '../../components/pages/blocks/hero.svelte';

	export let data;
	$: page = data.page.item;
</script>

<Hero title={page?.title} description={page?.content} image={page?.picture?.lg} />

<section class="bg-gray-50 px-8 py-16 md:px-0">
	<div class="container mx-auto max-w-2xl">
		<form action="/api/presupuestos" method="POST" class="space-y-6 rounded-lg">
			<!-- Nombre -->
			<div class="">
				<label for="nombre" class="mb-1 block text-sm font-medium text-gray-700"
					>Nombre completo</label
				>
				<input
					type="text"
					id="nombre"
					name="nombre"
					required
					class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:ring-emerald-600"
				/>
			</div>

			<!-- Correo -->
			<div>
				<label for="email" class="mb-1 block text-sm font-medium text-gray-700"
					>Correo electrónico</label
				>
				<input
					type="email"
					id="email"
					name="email"
					required
					class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:ring-emerald-600"
				/>
			</div>

			<!-- Teléfono -->
			<div>
				<label for="telefono" class="mb-1 block text-sm font-medium text-gray-700">Teléfono</label>
				<input
					type="tel"
					id="telefono"
					name="telefono"
					class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:ring-emerald-600"
				/>
			</div>

			<!-- Detalles -->
			<div>
				<label for="detalles" class="mb-1 block text-sm font-medium text-gray-700"
					>Tu consulta</label
				>
				<textarea
					id="detalles"
					name="detalles"
					rows="5"
					required
					class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:ring-emerald-600"
				></textarea>
			</div>

			<!-- Botón -->
			<div class="pt-4 text-center">
				<button
					type="submit"
					class="rounded-full bg-emerald-600 px-8 py-3 font-medium text-white transition hover:bg-emerald-700"
				>
					Enviar solicitud
				</button>
			</div>
		</form>
	</div>
</section>
