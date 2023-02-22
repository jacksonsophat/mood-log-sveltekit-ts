import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
    if (locals.user) {
        return {
            user: locals.user
        }
    }

    return {
        user: undefined
    }
}