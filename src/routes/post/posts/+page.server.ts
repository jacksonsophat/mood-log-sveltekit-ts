import type { PageServerLoad } from "./$types";

export const load = async ({ fetch }) => {


    const getPosts = async () => {
        const res = await fetch('http://127.0.0.1:8000/moodlog/all-posts');
        const data = await res.json();
        // return data
        if (res.ok) {
            return data
        }

        return {
            status: res.status,
            error: new Error('Could not fetch posts')
        }
    }

    return {
        posts: getPosts()
    }
}