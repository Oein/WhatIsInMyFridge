<script lang="ts">
	export let color: string = '#f43';
	export let name: string = 'undefined';
	export let noIcon: boolean = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="item" style={`--color: ${color};`} on:click>
	{#if !noIcon}
		<div class="circle">
			<span class="xline1" />
			<span class="xline2" />
		</div>
	{/if}
	<div>{name}</div>
</div>

<style lang="scss">
	.item {
		width: fit-content;
		height: fit-content;
		border-radius: 4px;
		border: 1px solid #ccc;
		padding: 0.1em 0.3em;
		box-shadow: var(--shadow);
		display: inline-flex;

		align-items: center;
		gap: 5px;

		user-select: none;

		.circle {
			width: 0.9em;
			height: 0.9em;
			border-radius: 50%;
			background: var(--color);
			position: relative;
			cursor: pointer;

			span {
				position: absolute;
				top: 50%;
				left: 50%;
				width: 0.6em;
				height: 0.1em;
				background: white;
			}

			.xline1 {
				transform: translate(-50%, -50%) rotate(45deg);
			}

			.xline2 {
				transform: translate(-50%, -50%) rotate(-45deg);
			}
		}
	}
</style>
