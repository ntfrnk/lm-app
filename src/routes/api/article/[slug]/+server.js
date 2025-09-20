import { json, error } from '@sveltejs/kit';
import { API_URL, API_TOKEN } from '$env/static/private';

export const GET = async ({ url, fetch, params }) => {

    const { slug } = params;
    
    if (!API_URL || !API_TOKEN) {
        throw error(500, 'Faltan variables de entorno API_URL o API_TOKEN');
	}

	const upstream = new URL(`${API_URL}/article/${slug}`);
    
	const load = url.searchParams.get('load');
	const exclude = url.searchParams.get('exclude');

    
	if (load) upstream.searchParams.set('load', load);
	if (exclude) upstream.searchParams.set('exclude', exclude);

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
