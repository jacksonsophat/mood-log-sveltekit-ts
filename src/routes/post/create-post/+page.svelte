<script lang="ts">
	import { post_status, moods } from '$lib/datalist';
	import type { PageData, ActionData } from './$types';
	import { enhance } from '$app/forms';
	// import moods from '$lib/datalist';
	// export let data: PageData;
	export let form: ActionData;
	// console.log({ form?.error });

	// export let data;
	// console.log(data);

	// console.log(moods['angry']);
	// console.log(post_status);
	// console.log(moods);
	// console.log(Object.keys(moods));
	// console.log(Object.values(moods));

	// Object.entries() converts an Object into an array of arrays,
	// each sub array first index is the a key and the second index is a value
	// Object.entries({key: value, key:value}) => [[key, value], [key,value]]s

	// Check if text is less than 250
	//Check if the mood is the same as from the list
</script>

<main class="my-4">
	<form method="POST" use:enhance>
		<input class="border" name="content" type="text" placeholder="Enter content" />
		{#if form?.missing}<p class="error">The content field is required</p>{/if}

		<select name="mood">
			{#each Object.entries(moods) as [value, text]}
				<option {value}>{text}</option>
			{/each}
		</select>

		<select name="post_status">
			{#each Object.entries(post_status) as [value, text]}
				<option {value}>{text}</option>
			{/each}
		</select>
		
		<button class="px-4 bg-blue-400">Post</button>
	</form>
</main>
