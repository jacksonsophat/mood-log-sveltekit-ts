<script lang="ts">
	import { post_status, moods } from '$lib/datalist';
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	// import moods from '$lib/datalist';
	export let form: ActionData;
	console.log(form);
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
	<form method="POST" action="?/createPost" use:enhance>
		<label>
			Content
			<input class="border" name="content" type="text" />
		</label>
		<label>
			Mood
			<select name="mood">
				{#each Object.entries(moods) as [value, text]}
					<option {value}>{text}</option>
				{/each}
			</select>
		</label>

		<label for="post_status">
			Post Status
			<select name="post_status">
				{#each Object.entries(post_status) as [value, text]}
					<option {value}>{text}</option>
				{/each}
			</select>
		</label>
		{#if form?.error}
			<div class="notice error">
				{form.error}
			</div>
		{/if}
		<button>Post</button>
	</form>
</main>
