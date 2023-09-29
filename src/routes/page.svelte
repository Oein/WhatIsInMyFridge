<script lang="ts">
	import Card from '@/lib/Card.svelte';
	import storage from '@/lib/storage';
	import { onMount } from 'svelte';
	import Fridge from './fridge.svelte';

	export let storageKey: string;
	export let container: HTMLDivElement;

	let fridgeName = '냉장고';

	onMount(() => {
		storage.initStorage(storageKey);
		fridgeName = storage.getItem(storageKey, 'name') || '냉장고';
	});

	const onChange = (e: Event) => {
		const ve = e.currentTarget;
		if (!ve) return;
		const v = (ve as HTMLInputElement).value;
		if (typeof v == 'undefined') return;
		storage.setItem(storageKey, 'name', v);
	};
</script>

<div class="cont" bind:this={container}>
	<input
		bind:value={fridgeName}
		placeholder="냉장고 이름"
		on:change={onChange}
		on:keydown={onChange}
		on:keypress={onChange}
		on:keydown={onChange}
	/>
	<Card
		style="box-sizing: border-box; flex-grow: 1; overflow: auto; background: #f7f7f7; padding: var(--hgap); display: flex; gap: var(--hgap); flex-direction: column;"
	>
		{#each [1, 2, 3, 4, 5, 6] as idx}
			<Fridge storageKey={storageKey + '_box[' + idx + ']'} />
		{/each}
	</Card>
</div>

<style lang="scss">
	.cont {
		width: 100vw;
		min-width: 100vw;
		height: 100vh;
		height: 100dvh;
		box-sizing: border-box;
		padding: var(--hgap);

		flex-direction: column;
		gap: var(--hgap);

		display: flex;
		scroll-snap-align: center;

		input {
			margin: 0px;
			font-size: 2rem;
			background: none;
			padding: 0px;
			border: none;
			outline: none;
			color: black;
			font-weight: bold;
			line-height: 1;
		}
	}
</style>
