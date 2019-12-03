<script>
	export let closed = false, transparent = false
</script>

<style>
	.box {
    background: #eee;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
    margin: 0 auto 1em;
		overflow: hidden;
		width: 100%;
	}
	.transparent {
		background: transparent;
		border-color: transparent;
		box-shadow: 0 0 0 transparent;
		text-shadow: 2px 2p 8px rgba(0,0,0,0.1);
	}
</style>

<div class="box" class:closed class:transparent>
	<slot name="header"/>
  <slot>
		<em>No content was provided.</em>
  </slot>
</div>