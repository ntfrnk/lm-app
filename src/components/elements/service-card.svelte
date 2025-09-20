<script>
    export let image = '';
    export let title = '';
    export let description = '';
    export let link = '/';
</script>

<article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs">
	<img
		alt=""
		src={image}
		class="h-56 w-full object-cover"
	/>

	<div class="p-4 sm:p-6">
		<a href="/servicios/{link}">
			<h3 class="text-lg font-medium text-gray-900">
				{title}
			</h3>
		</a>

		<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
			{description}
		</p>

		<!-- <a href="/servicios/{link}" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
			Leer más

			<span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
				&rarr;
			</span>
		</a> -->
	</div>
</article>
