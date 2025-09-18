import { json, error } from '@sveltejs/kit';
import { API_URL, API_TOKEN } from '$env/static/private';

export const GET = async ({ params, url, fetch }) => {


    return json({message: 'NADA'}, 200);


	if (!API_URL || !API_TOKEN) {
		throw error(500, 'Faltan variables de entorno API_URL o API_TOKEN');
	}

	const { categoryId } = params;
	if (!categoryId) {
		throw error(400, 'categoryId requerido');
	}

	// endpoint real de tu API
	const upstream = new URL('/articles', API_URL);

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
			Authorization: `Bearer ${API_TOKEN}`
		}
	});

	let body;
	try {
		body = await res.json();
	} catch {
		body = await res.text();
	}

	if (!res.ok) {
		throw error(res.status, typeof body === 'string' ? body : JSON.stringify(body));
	}

	return json(body, { status: res.status });
};
