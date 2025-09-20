export const load = async ({ fetch, params, url }) => {

	const response_page = await fetch(`/api/page/contacto`);
	if (!response_page.ok) {
		throw new Error(`Error al obtener artículos: ${response_page.status}`);
	}
	const page = await response_page.json();

	return {
		page: page
	};
};
