<script>
	import "../app.css";
	export let data;
  </script>
  
  <nav class="flex justify-between p-2 bg-pink-300">
	<a href="/">Home</a>
	{#if !data.user}
	  <div>
		<a href="/login" class="mr-4">Login</a>
		<a href="/register">Register</a>
	  </div>
	{:else}
	  <a href="/projects/new">Add Project</a>
	  <div>
		<img src="https://placeimg.com/80/80/people" alt="" />
	  </div>
	{/if}
  </nav>
  
  <slot />
  