<script>
	import Selector from './Selector.svelte'
	
	let curr = "EUR", coin = "BTC";

	const currencies = ['EUR', 'USD']
	const coins = ['BTC', 'LTC', 'ETH']
	
	async function getData(coin, curr){
		const url = `https://api.coinbase.com/v2/prices/${coin}-${curr}/buy`
		const data = await (await fetch(url)).json()
		return data.data
	}
</script>

<h1>Coin Price Checker</h1>
<div class="url"><!--
	-->https://api.coinbase.com/v2/prices/<!--
	--><Selector options={coins} bind:chosen={coin} />-<!--
	--><Selector options={currencies} bind:chosen={curr} />/buy
</div>
{#await getData(coin, curr)}
	<p>...waiting</p>
	<small>By <a target="_BLANK" href="https://github.com/devgar">devgar</a></small>
{:then data}
	<p>Current {data.base} price is {data.amount}({data.currency})</p>
	<small>Powered by <a href="https://www.coindesk.com/price/bitcoin">coinbase.com</a></small>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<style>
	.url {
		font-family: monospace;
	}
</style>