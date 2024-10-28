<script>
	import { blogsData } from '$lib/constants/blogsData.js';
</script>

<svelte:head>
	<title>HK | Blogs</title>
	<meta name="description" content="Hikmat khan portfolio" />
</svelte:head>

<div class="page-title w-full shadow-none">
	<div class="container p-5 text-center">
		<h1 class="text-4xl font-bold">Blogs</h1>
	</div>
</div>

<div class="mt-5">
	<main class="custom-container mx-auto">
		<div class="custom-container mx-auto flex flex-col gap-5">
			{#each blogsData as blog}
				<div
					class="flex h-auto w-full items-start justify-start gap-5 rounded-md bg-white shadow-md"
				>
					<div class="image-box max-h-[300px] max-w-[300px] flex-1">
						<img src={blog.cover_image} alt="''" class="h-full w-full object-cover" />
					</div>
					<div class="flex-2 blog-content flex-col items-end justify-start p-5">
						<a href="/blogs/{blog.slug}" class="hover:text-indigo-700">
							<h1 class="text-lg">{blog.title}</h1>
						</a>

						<p class="mt-2 text-sm">
							{blog.description}
						</p>

						<div class="mt-5 flex flex-wrap gap-2">
							{#each blog.tag_list as tag}
								<span
									class="w-auto min-w-[80px] rounded-full bg-slate-200 p-2 text-center text-sm text-black"
								>
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</main>
</div>
