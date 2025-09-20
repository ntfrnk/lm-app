<script>
    export let title = '';
    export let description = '';
    export let image = '';
</script>

<section
	class="relative flex h-[300px] items-center justify-center bg-cover bg-center md:h-[400px]"
	style="background-image: url('{image}');"
>
	<div class="absolute inset-0 bg-black/60"></div>

	<div class="relative z-10 px-4 text-center text-white">
		<h1 class="font-title text-3xl font-extrabold md:text-5xl">{title}</h1>
		<p class="mx-auto mt-4 max-w-2xl text-base text-gray-200 md:text-lg">
			{@html description}
		</p>
	</div>
</section>
