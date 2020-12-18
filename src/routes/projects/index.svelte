<script context="module">
	export function preload() {
		return this.fetch(`projects.json`).then(r => r.json()).then(projects => {
			return { projects };
		});
	}
</script>

<script>
	export let projects;
</script>

<style>
	div {
		margin: 0 0 1em 0;
	}
	img {
		max-height: 200px;
		margin: 0 0 1em 0;
	}
</style>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<h1>Projects</h1>
{#each projects as project}
	<div>
		<a rel="prefetch" href="projects/{project.slug}"><h2>{project.title}</h2></a>
		<img src={project.image} alt="Successkid">
		<p>{project.description}</p>
	</div>
{/each}

