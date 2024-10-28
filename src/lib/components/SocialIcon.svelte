<script>
	import Icon from '@iconify/svelte';
	let { icon, link } = $props();
</script>

<a href={link || ''} aria-label="social" class="btn-social">
	<Icon {icon} />
</a>

<style>
</style>
