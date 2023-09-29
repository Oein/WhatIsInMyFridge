<script lang="ts">
	import Card from '@/lib/Card.svelte';
	import storage from '@/lib/storage';
	import { onMount } from 'svelte';
	import Item from './item.svelte';
	import AddItemPage from './addItemPage.svelte';

	export let storageKey: string;

	onMount(() => {
		storage.initStorage(storageKey);
		refresh();
	});

	let inAddingMode = false;

	let items: {
		name: string;
		color: string;
		id: string;
	}[] = [];

	const refresh = () => {
		if (!storage.localStorageSupported()) return;
		items = JSON.parse(storage.getItem(storageKey, 'items') || '[]');
	};
</script>

<Card style="padding: var(--hgap); display: flex; flex-wrap: wrap; position: relative; gap: 5px;">
	{#each items as item}
		<Item
			color={item.color}
			name={item.name}
			on:click={() => {
				if (!confirm('정말로 삭제하시겠습니까?')) return;
				if (!storage.localStorageSupported()) return;
				storage.setItem(storageKey, 'items', JSON.stringify(items.filter((v) => v.id != item.id)));
				refresh();
			}}
		/>
	{/each}
	<Item
		noIcon
		name="추가하기"
		on:click={() => {
			inAddingMode = true;
		}}
	/>
</Card>

{#if inAddingMode}
	<AddItemPage {storageKey} bind:inAddingMode {refresh} />
{/if}
