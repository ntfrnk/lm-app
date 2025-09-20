<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '../components/layout/Header.svelte';
	import Footer from '../components/layout/Footer.svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

{#key $page.data.url}
	<div 
		in:fly={{ x: -50, opacity: 0, duration: 100, delay: 100 }}
		out:fly={{ x: 50, opacity: 0, duration: 100 }}
	>
		{@render children?.()}
	</div>
{/key}

<Footer />
