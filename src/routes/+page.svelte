<script>
	import Page from './page.svelte';
</script>

<div class="wrapper main">
	<Page storageKey="fridge[1]" />
	<Page storageKey="fridge[2]" />
	<Page storageKey="fridge[3]" />
	<Page storageKey="fridge[4]" />
</div>

<style lang="scss">
	.wrapper {
		height: 100%;
		display: flex;
		/* important */
		overflow-y: hidden;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
	}
</style>
