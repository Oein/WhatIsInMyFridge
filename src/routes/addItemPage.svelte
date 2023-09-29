<script lang="ts">
	import storage from '@/lib/storage';
	import { onMount } from 'svelte';
	import Input from './input.svelte';
	import ColorPicker from './colorPicker.svelte';

	export let storageKey: string;
	export let inAddingMode = true;
	export let refresh: () => void;
	let name = '';
	let color = '#DAAFE9';

	onMount(() => {
		storage.initStorage(storageKey);
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="bg"
	on:click={() => {
		inAddingMode = false;
	}}
/>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="mainWrapper" on:click={(e) => e.stopPropagation()}>
	<h1>추가하기</h1>
	<Input placeholder="이름" bind:value={name} />
	<ColorPicker bind:value={color} />

	<button
		class="bot"
		on:click={() => {
			storage.setItem(
				storageKey,
				'items',
				JSON.stringify([
					...JSON.parse(storage.getItem(storageKey, 'items') || '[]'),
					{
						name,
						color,
						id: Math.random().toString(36).substr(2, 9)
					}
				])
			);
			inAddingMode = false;
			refresh();
		}}>추가</button
	>
</div>

<style lang="scss">
	.bg {
		background: rgba($color: #000000, $alpha: 0.1);
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		z-index: 4;
		animation: bgfadein 0.3s ease-in-out;
	}

	@keyframes bgfadein {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.mainWrapper {
		position: fixed;
		top: 20%;
		left: 0px;
		right: 0px;
		bottom: 0px;
		z-index: 5;
		background: white;
		overflow: auto;
		padding: var(--gap);

		border-radius: var(--gap) var(--gap) 0px 0px;
		animation: mainfadein 0.3s ease-in-out;

		h1 {
			margin: 0px;
			margin-bottom: var(--gap);
		}
	}

	@keyframes mainfadein {
		0% {
			opacity: 0;
			transform: translateY(2rem);
		}
		100% {
			opacity: 1;
			transform: translateY(0px);
		}
	}

	.bot {
		position: absolute;
		bottom: 0px;
		left: 0px;
		right: 0px;
		border-radius: var(--hgap);
		background: #0e87ff;
		margin: var(--hgap);
		padding: calc(var(--hgap) / 1.5) var(--hgap);
		text-align: center;
		color: #fff;
		border: none;
		outline: none;
		box-sizing: border-box;
		font-size: 1.2rem;
		cursor: pointer;

		width: calc(100% - var(--hgap) * 2);
	}
</style>
