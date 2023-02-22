<script lang="ts">
	export let data;
	const { item } = data;
	console.log(item);
</script>

<main>
	<h1 class="font-bold mt-4">Post Slug</h1>

	<div class="mt-4">
		<div class="pb-4">
			<p>Id: {item.id}</p>
			<p>Created Date: {item.created}</p>
			<p>Content: {item.content}</p>
			<p>Mood: {item.mood}</p>
			<p>Status: {item.post_status}</p>
		</div>
	</div>
</main>
