<script lang="ts">
	// import { moods } from '../../lib/datalist';
	import { moods } from '$lib/datalist';
	export let data;
	const { posts } = data;

	// console.log(posts);
	// console.log(moods);
</script>

<main>
	<h1 class="font-bold mt-4">All Posts</h1>

	<div class="mt-4">
		{#each posts as { id, created, content, mood }, i}
			<div class="pb-4">
				<a class="underline text-red-500" href="/post/{id}">Id: {id}</a>
				<p>Created Date: {created}</p>
				<p>Content: {content}</p>
				<p>Mood: {mood}</p>
			</div>
		{/each}
	</div>
</main>
