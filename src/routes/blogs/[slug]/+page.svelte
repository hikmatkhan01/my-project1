<script>
	import { page } from '$app/stores';
	const singleBlogs = $page.data.blogSlug;
</script>

<svelte:head>
	<title>{singleBlogs[0].title}</title>
	<meta name="description" content={singleBlogs[0].title} />
</svelte:head>

<div class="page-title w-full text-center shadow-none">
	<div class="custom-container mx-auto p-10 text-center">
		<h1 class="px-5 text-4xl font-bold">{singleBlogs[0].title}</h1>
	</div>
</div>

<main class="custom-container mx-auto">
	<div class="custom-container mx-auto flex flex-col gap-5">
		<div class="flex h-auto w-full flex-col gap-5 rounded-md bg-white shadow-md">
			<div class="image-box w-full">
				<img src={singleBlogs[0].cover_image} alt="''" class="h-full w-full object-cover" />
			</div>
			<div class="blog-content flex-col items-end justify-start p-5">
				<h1 class="text-lg">{singleBlogs[0].title}</h1>
				<p class="mt-2 text-sm">
					{singleBlogs[0].description}
				</p>

				<div class="mt-5 flex flex-wrap gap-2">
					{#each singleBlogs[0].tag_list as tag}
						<span
							class="w-auto min-w-[80px] rounded-full bg-slate-200 p-2 text-center text-sm text-black"
						>
							{tag}
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</main>

<style>
</style>
