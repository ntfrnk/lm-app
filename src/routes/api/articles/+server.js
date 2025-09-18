import { json, error } from '@sveltejs/kit';
import { API_URL, API_TOKEN } from '$env/static/private';

export const GET = async ({ url, fetch }) => {
    
    if (!API_URL || !API_TOKEN) {
        throw error(500, 'Faltan variables de entorno API_URL o API_TOKEN');
	}
    
	const categoryId = url.searchParams.get('category_id') ?? 0;
	if (!categoryId) {
        throw error(400, 'categoryId requerido');
	}

	// endpoint real de tu API
	const upstream = new URL(`${API_URL}/articles`);

	// filtro obligatorio
	upstream.searchParams.set('category_id', categoryId);
	upstream.searchParams.set('status', 'on'); // opcional

	// query params adicionales (page, take, ordering)
	const page = url.searchParams.get('page');
	const take = url.searchParams.get('take');
	const ordering = url.searchParams.get('ordering');

    
	if (page) upstream.searchParams.set('page', page);
	if (take) upstream.searchParams.set('take', take);
	if (ordering) upstream.searchParams.set('ordering', ordering);

	// consulta al backend
	const res = await fetch(upstream, {
		headers: {
			Accept: 'application/json',
			Authorization: `${API_TOKEN}`
		}
	});

	let body = await res.json();

	if (body.code !== 200) {
		throw error(res.status, typeof body === 'string' ? body : JSON.stringify(body));
	}

	return json(body, { status: 200 });
};
