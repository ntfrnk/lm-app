<script>
	import Hero from "../../../components/pages/blocks/hero.svelte";

    export let data;
</script>

<Hero 
    title={data?.item?.title} 
    description={data?.item?.summary}
    image={data?.item?.picture?.lg}
/>