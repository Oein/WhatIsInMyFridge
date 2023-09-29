<script lang="ts">
	export let value: string = '';
	export let placeholder: string = '';
</script>

<div class="row">
	<div class="label">
		{placeholder}
	</div>
	<input bind:value placeholder="" />
</div>

<style lang="scss">
	.row {
		display: flex;
		flex-direction: row;
		width: 100%;
		box-sizing: border-box;
		align-items: center;

		div {
			color: #ccc;
			border-right: 1px solid #aaa;
			padding-right: 7px;
			margin-right: 7px;
		}

		input {
			flex-grow: 1;
			border: none;
			border-bottom: 1px solid #888;
			font-size: 1.1em;
			padding: 0.3em;
			outline: none;
			color: black;
			border-radius: 0px;
			box-sizing: border-box;
		}
	}
</style>
