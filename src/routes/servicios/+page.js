export const load = async ({ fetch, params, url }) => {

	const res = await fetch(`/api/articles?category_id=50`);
	if (!res.ok) {
		throw new Error(`Error al obtener artículos: ${res.status}`);
	}

	const data = await res.json();

	return data;
};
