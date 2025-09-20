<script>
	import ServiceCard from "../../components/elements/service-card.svelte";
	import Hero from "../../components/pages/blocks/hero.svelte";

	export let data;
	$: projects = data.projects?.items;
	$: page = data.page.item;
</script>

<Hero 
    title={page?.title} 
    description={page?.content}
    image={page?.picture?.lg}
/>

<!-- Listado de servicios -->
<section class="bg-gray-50 py-16">
	<div class="container mx-auto px-4 grid grid-cols-3 gap-6">
		{#each projects as project}
            <ServiceCard image={project?.picture?.lg} title={project.title} description={project.summary} link={project.slug} />
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
