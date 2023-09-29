<script lang="ts">
	const colorSet = [
		['#DAAFE9', '#C7DBF5', '#AAD5FB', '#ADE5DA', '#B0EDC3', '#FDF0A4', '#F8D6A2'],
		['#C47ADA', '#90BAEE', '#75BAFA', '#72D5BF', '#73DE8C', '#FBE66E', '#F5B969'],
		['#AE44B7', '#5E7ABC', '#5E7ABC', '#4DACA9', '#63B75A', '#EDBD4A', '#EC9740'],
		['#501B87', '#021B6B', '#0C2794', '#337277', '#2F6A52', '#AE802F', '#AD6127']
	];
	export let value = colorSet[Math.floor(Math.random() * colorSet.length)][0];

	let opened = false;
</script>

<div class="row">
	<div class="label">색상</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="rowx" on:click={() => (opened = true)}>
		<div class="wrapper">
			<div class="color" style:background={value} />
		</div>
		<div>
			{value}
		</div>

		{#if opened}
			<div class="overlay">
				{#each colorSet as val, index}
					<div class="rowx">
						{#each val as innerValue, innerIndex}
							<button
								style:background={innerValue}
								class="sel"
								on:click={(e) => {
									e.preventDefault();
									e.stopImmediatePropagation();
									e.stopPropagation();
									opened = false;
									value = innerValue;
								}}
							/>
						{/each}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.row,
	.rowx {
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		align-items: center;
	}
	.rowx {
		gap: 4px;

		border: 1px solid #ccc;
		padding: 4px;
		border-radius: 0.2rem;
		cursor: pointer;
		position: relative;
	}
	.row {
		width: 100%;
		margin-top: var(--hgap);

		div.label {
			color: #ccc;
			border-right: 1px solid #aaa;
			padding-right: 7px;
			margin-right: 7px;
		}
	}

	.wrapper {
		background: #fff;
		height: 35px;
		position: relative;
		width: fit-content;

		.color {
			aspect-ratio: 1/ 1;
			height: 100%;
			box-sizing: border-box;
			border-radius: 5px;
			box-sizing: border-box;
		}
	}

	.overlay {
		position: absolute;
		top: calc(100% + 0.3rem);
		left: 0px;
		padding: calc(var(--hgap) / 2);
		border-radius: 7px;
		box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.18);
		.rowx {
			border: none;
		}
	}

	.sel {
		padding: none;
		border: none;
		border-radius: 6px;
		aspect-ratio: 1/ 1;
		height: 2rem;
	}
</style>
