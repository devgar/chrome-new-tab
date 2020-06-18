<script>
	import Video from './Video.svelte'
	import Box from './Box.svelte'
	import tabs from './stores/tabs'

	let focused = false
	let main
	let tabId
	chrome.tabs.getCurrent(t => tabId = t.id)
	function goTab(id) {
		chrome.tabs.update(id, {selected: true})
	}
	function closeTab(id) {
		// TODO: Determine and focus prev or next tab or input
		chrome.tabs.remove(id, _ => main.focus())
	}
	function keyDown(e, {id}) {
		if (e.keyCode == 8) { // remove
			closeTab(id)
		}
		else if (e.keyCode == 13 && !(e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			goTab(id)
		}
	}
</script>

<svelte:body 
	on:focusin="{e => focused = true}"
	on:focusout="{e => focused = false}"
	on:keydown="{e => focused || main.focus()}"
/>

<Video />

<main class:focused>
	<Box>
		<h1 slot="header">
			<input bind:this="{main}" on:focus="{e => console.log($tabs)}">
		</h1>
		<ul>
		{#each $tabs as tab}
			{#if tab.id != tabId}
			<li>
				<a
					href="{tab.url}"
					on:keydown="{e => keyDown(e, tab)}"
				>
					<img alt={tab.title} src={tab.favIconUrl}>
					<div>{tab.title}</div>
				</a>
			</li>
			{/if}
		{/each}
		
		</ul>
	</Box>
</main>

{#if !focused}
<span class="overAll" on:click="{ e => focused || main.focus() }"/>
{/if}

<style>
main {
	display: flex;
	flex-direction: column;
	align-content: space-between;
	justify-content: space-around;
	max-width: 600px;
	height: 100vh;
	margin: 0 auto;
	opacity: 0;
}

main:focus-within {
	transition: 0.3s;
	opacity: 1;
}
main h1 {
	margin-top: 0;
}

main ul {
	padding: 0;
}

main ul li a {
	padding: 0 8px 0 0;
	display: flex;
	justify-content: start;
}

main ul li a:focus {
	outline: none;
}

main ul li a img{
	display: block;
	width: 32px;
	height: 32px;
}

main ul li a:focus img{
	display: block;
	width: 48px;
	height: 48px;
	margin-left: -8px;
}

main ul li a div{
	padding: 4px 8px 0;
}

main ul li a:focus div {
	padding: 0 8px;
	font-size: 20px;
}

.overAll {
	position: fixed;
	top:0;
	left:0;
	right:0;
	bottom:0;
}
</style>