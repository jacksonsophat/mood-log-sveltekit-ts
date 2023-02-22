import type { Actions } from './$types';
import { error, fail, redirect } from '@sveltejs/kit';
import jwt_decode from "jwt-decode";
// import { goto } from '$app/navigation';
import { browser, building, dev, version } from '$app/environment';

export const actions = {


    login: async ({ request, locals }) => {
        const formData = await request.formData();
        const username = formData.get('username');
        const password = formData.get('password');

        if (username?.length < 6) {
            return fail(400, {
                username, length: true
            })
        }

        // const {data, error:err}= await locals.

        // if (!username) {
        //     return fail(404, {
        //         username, missing: true
        //     });
        // }

        // if (!password) {
        //     return fail(404, {
        //         password, missing: true
        //     });
        // }


        const res = await fetch('http://127.0.0.1:8000/moodlog/token/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then((response) =>
                response.json()
            )
            .then((data) => {
                console.log('Data: ', data)
                // let token = data.access;
                // let decoded = jwt_decode(data.access);
                // console.log('decoded: ', decoded)
                // if (browser) {
                //     window.localStorage.setItem('token', token)
                // }
                return data;
            });



        // return {
        //     success: true
        // }
    }





} satisfies Actions;





//400 Bad request




