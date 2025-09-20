export const load = async ({ fetch, params, url }) => {

	const response_services = await fetch(`/api/articles?category_id=50`);
	if (!response_services.ok) {
		throw new Error(`Error al obtener artículos: ${response_services.status}`);
	}
	const services = await response_services.json();

	const response_page = await fetch(`/api/page/servicios`);
	if (!response_page.ok) {
		throw new Error(`Error al obtener artículos: ${response_page.status}`);
	}
	const page = await response_page.json();

	return {
		page: page.item,
		services: services.items
	};
};
