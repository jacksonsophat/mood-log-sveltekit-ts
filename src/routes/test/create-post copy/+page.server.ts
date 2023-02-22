import type { PageServerLoad, Actions } from './$types';
import { error } from '@sveltejs/kit';
import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';

export const actions = {



  createPost: async ({ request }) => {


    const formData = await request.formData();
    const content = formData.get('content');
    const mood = formData.get('mood');
    const post_status = formData.get('post_status');

    if (!content) {
      throw error(404, {
        message: 'Not found'
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
          return {
            message: 'Not Successful Return'
          }
        }
      })
      // .then((response) => response.json())
      .then((data) => {
        console.log('Data: ', data)
        // goto(redirectLink) //not working
        // redirect(redirectLink) // not working
        let redirectLink: string | null = `/post/${data.id}`

        throw redirect(301, redirectLink); //works
        return data;
      })
      .catch(err => console.log('Error Text'))


    // .then((response) => {
    //   if (response.ok) {
    //     console.log('ok', response.ok) // true
    //     console.log('status', response.status) // status 200
    //     console.log('statusText', response.statusText) // create
    //     // console.log('body', response.body) // useless
    //     // console.log('json', response.json) //not working
    //     // This will return status 201, then I can redirect it to somewhere else 
    //     return response.json();
    //   }
    //   console.log('3')
    //   console.log(response.status) // 400
    //   return Promise.reject(response);
    // })
    // .catch((response) => {
    //   console.log('4')
    //   console.log(response.status, response.statusText); //400 + Bad Request

    //   // 3. get error messages, if any
    //   response.json().then((json: any) => {
    //     console.log('5')
    //     console.log(json); // { 'Bad Request': 'Invalid data...' }
    //   })
    // });

  }




} satisfies Actions;


// export const load = (async () => {
//   const user = 'Testing';
//   return { user };
// }) satisfies PageServerLoad;