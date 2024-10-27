<script>
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
	import { setContext } from 'svelte';
	
	let stateData = {
	  isFullWhiteHeader:false,	
	};

	setContext('stateData', stateData);

	let { children } = $props();
</script>
<Header />
{@render children()}



