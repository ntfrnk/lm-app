export const load = async ({ fetch, params, url }) => {

	const response_projects = await fetch(`/api/articles?category_id=51`);
	if (!response_projects.ok) {
		throw new Error(`Error al obtener artículos: ${response_projects.status}`);
	}
	const projects = await response_projects.json();

	const response_page = await fetch(`/api/page/proyectos`);
	if (!response_page.ok) {
		throw new Error(`Error al obtener artículos: ${response_page.status}`);
	}
	const page = await response_page.json();

	return {
		projects: projects,
		page: page,
	};
};
