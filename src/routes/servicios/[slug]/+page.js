export const load = async ({ fetch, params, url }) => {

    const { slug } = params;

	const res = await fetch(`/api/article/${slug}`);
	if (!res.ok) {
		throw new Error(`Error al obtener artículos: ${res.status}`);
	}
	const data = await res.json();

	return data;
};
