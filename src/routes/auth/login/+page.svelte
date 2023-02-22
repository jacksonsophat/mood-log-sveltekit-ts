<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { enhance } from '$app/forms';
	export let data;
	export let form: ActionData;
	console.log(form);
</script>

<main class="mt-4">
	<h1 class="mb-4 font-bold">Log in page</h1>

	<form method="POST" action="?/login" use:enhance>
		<input name="username" type="text" class="border" placeholder="Enter username" required />
		{#if form?.length}<p class="error">Must be fore than 6 characters</p>{/if}

		<input name="password" type="password" class="border" placeholder="Enter password" required />
		<!-- {#if form?.missing}<p class="error">The content field is required</p>{/if} -->

		<button class="bg-blue-200" type="submit">Login</button>
	</form>
</main>
