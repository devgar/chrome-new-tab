<script>
	import Box from './Box.svelte'

  export let value
  let input, focused = false

  function handleKeyUp({keyCode}) {
    if (keyCode == 27) {
      value = ''
      input.blur()
    }
  }

  export function focus() { 
    input.focus()
  }
</script>

<div class="outBox" style="position:relative;">
  <Box transparent={!focused&&!value}>
    <input slot="header"
      class:phantom="{ !focused&&!value }"
      bind:this="{input}" 
      bind:value="{value}"
      on:focusin="{e => focused = true}"
      on:focusout="{e => focused = false}"
      on:keyup="{handleKeyUp}">
  </Box>
  {#if !value}
  <div class="placeholder" class:focused><div>Enter your search</div></div>
  {/if}
</div>

<style>
  input {
    outline: none;
    border: none;
		width: 100%;
    margin: 0;
    font-size: 24px;
  }
  input.phantom {
    background: pink;
    opacity: 0;
  }
  .placeholder {
    position: absolute;
    top: 20px;
    left: 24px;
    right:24px;
    padding-left: 50%;
    color: #666;
    font-size: 24px;
  }
  .placeholder > div {
    display: inline-block;
    margin-left: -50%;
  }

  .placeholder.focused {
    transition: 0.3s;
    padding:0;
  }
  .placeholder.focused > div {
    transition: 0.3s;
    margin: 0;
  }
</style>