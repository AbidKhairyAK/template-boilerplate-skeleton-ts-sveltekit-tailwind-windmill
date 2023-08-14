<script>
	import PageTitle from "$components/ui/PageTitle.svelte";

	export let data
</script>

<PageTitle>
	Nested Page
</PageTitle>

<p>this is {data.slug}</p>