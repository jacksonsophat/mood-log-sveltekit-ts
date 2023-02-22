import type { PageServerLoad, Actions } from './$types';
import { error, fail, redirect } from '@sveltejs/kit';
import { goto } from '$app/navigation';


// export const load = (async (event) => {
//   const user = false;
//   if (user) {
//     throw redirect(302, '/');
//   }
// }) satisfies PageServerLoad;


export const actions: Actions = {
  default: async ({ request }) => {

    const formData = await request.formData();
    const content = formData.get('content');
    const mood = formData.get('mood');
    const post_status = formData.get('post_status');


    if (!content) {
      return fail(404, {
        content, missing: true
      });
    }


    const res = await fetch('http://127.0.0.1:8000/moodlog/create-post/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({
        content,
        mood,
        post_status
      })
    })
      .then((response) => {
        if (response.ok) {
          console.log('ok', response.ok) // true
          console.log('status', response.status) // status 200
          console.log('statusText', response.statusText) // create
          return response.json();
        }
        else {
          console.log('Not Successful')
          console.log(response.status) // 400
          return fail(404, {
            error: 'Something is wrong'
          });
        }
      })
      .then((data) => {
        console.log('Data: ', data)
        let redirectLink: string | null = `/post/${data.id}`
        throw redirect(301, redirectLink); //works
        return data;
      })
  }

}

