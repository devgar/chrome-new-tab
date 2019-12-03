<script>
export let options = []
export let chosen = options[0] || undefined
let open = false
</script>
<div class="selector" 
		 on:click="{o => open = !open}"
		 on:mouseleave="{e => open = false}">
	<div class="underline"/>
	<div class="label">{chosen}</div>
	<div class="list" class:visible="{open}">
		<div>{chosen}</div>
		{#each options as option, i}
			{#if option != chosen}
				<div on:click="{(e) => chosen = options[i]}">
					{option}
				</div>
			{/if}
		{/each}
	</div>
</div>

<style scoped>
	.selector {
		background: #EEE;
		font-family: monospace;
		position: relative;
		display: inline-block;
	}
	.underline {
		position: absolute;
		background: #000;
		height:1px;
		left:0;
		right:0;
		bottom:0;
	}
	.label {
		color: #999;
		cursor: pointer;
	}
	.list {
		position: absolute;
		background: white;
		top: 0;
		right: -4px;
		display: none;
		box-shadow: 1px 1px 1px black;
	} 
	.list.visible {
		display: block;
	}
	.list > * {
		cursor: pointer;
		color: #555;
		padding: 0 4px 1px
	}
	.list > *:hover {
		color: #000;
	}
	.label:hover {
		color: #555;
	}
</style>