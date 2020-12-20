<script>
	import { fade } from 'svelte/transition';
</script>

<style>
	img {
		border: solid 0.3rem #EF233C;
		border-style: dashed;
		border-radius: 50%;
		height: 18rem;
		float: right;
	}
</style>

<svelte:head>
	<title>About me</title>
</svelte:head>

<div in:fade>
<h1>About me</h1>
<img alt="Jesse Constante" src="images/profile.jpg">
<p>My name is Jesse Constante, I'm a full-time Technical Specialist at Red Points and a part-time freelance developer. .</p>
</div>