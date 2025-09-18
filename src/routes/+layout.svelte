<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '../components/layout/Header.svelte';
	import Footer from '../components/layout/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

	{@render children?.()}

<Footer />
