<script>
	const { projectInfo } = $props();
</script>

<div
	class="group relative mt-2 h-auto w-full rounded-md bg-white shadow-sm transition-all duration-700 ease-in-out"
>
	<img
		src={projectInfo.image}
		alt={projectInfo.name}
		class="h-full w-full rounded-md object-cover shadow-sm"
	/>
	<div
		class="details group absolute bottom-0 h-0 w-full rounded-md bg-white transition-all duration-700 ease-in-out group-hover:h-[120px] group-hover:p-5"
	>
		<h1 class="hidden transition duration-1000 ease-linear group-hover:block">
			{projectInfo.name}
		</h1>
		<a
			href="/"
			class="hidden text-sm text-indigo-950 transition duration-1000 ease-linear group-hover:block"
		>
			Explore
		</a>
	</div>
</div>

<style>
</style>
