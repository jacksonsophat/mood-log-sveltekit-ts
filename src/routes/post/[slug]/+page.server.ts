import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ fetch, params }) => {

    try {
        const res = await fetch(`http://127.0.0.1:8000/moodlog/post/${params.slug}`);
        const item = await res.json();
        return { item };
    }
    catch {
        throw error(403, 'Something is not right');
    }


}) satisfies PageServerLoad;


