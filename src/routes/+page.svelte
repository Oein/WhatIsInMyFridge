<script lang="ts">
	import storage from '@/lib/storage';
	import Page from './page.svelte';

	let pages: HTMLDivElement[] = [];
</script>

<div class="wrapper main">
	<Page storageKey="fridge[1]" bind:container={pages[0]} />
	<Page storageKey="fridge[2]" bind:container={pages[1]} />
	<Page storageKey="fridge[3]" bind:container={pages[2]} />
	<Page storageKey="fridge[4]" bind:container={pages[3]} />
</div>

<div class="nav">
	{#each pages as page, idx}
		<button
			on:click={() => {
				page.scrollIntoView({
					behavior: 'smooth'
				});
			}}>{storage.getItem(`fridge[${idx + 1}]`, 'name') || '냉장고'}</button
		>
	{/each}
</div>

<style lang="scss">
	.nav {
		position: fixed;
		z-index: 2;
		bottom: 0px;
		left: 0px;
		right: 0px;
		padding: 0.3rem;

		background: #f9f9f9;
		border-top: 1px solid #ecebec;

		display: flex;
		gap: 7px;

		button {
			flex: 1;
			background-color: none;
			border-radius: 7px;
			outline: none;
			border: none;
			padding: 0.7rem 0px;
			background: none;
			cursor: pointer;
			transition: all 0.2s ease;
			font-size: 1.02rem;
			box-sizing: border-box;
			color: black;
			transition: all 0.2s ease;

			&:active {
				background: #eee;
			}
		}
	}
	.wrapper {
		height: 100%;
		display: flex;
		/* important */
		overflow-y: hidden;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		padding-bottom: calc(2.7rem + var(--hgap));
	}
</style>
