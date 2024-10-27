<script>
    import { page } from '$app/stores';
   const singleBlogs = $page.data.blogSlug;
</script>

<svelte:head>
	<title>{singleBlogs[0].title}</title>
	<meta name="description" content={singleBlogs[0].title} />
</svelte:head>


<div class="w-full  shadow-none page-title text-center">
    <div class="custom-container mx-auto text-center p-10">
         <h1 class="text-4xl font-bold px-5"> {singleBlogs[0].title} </h1>   
    </div>
</div>

<main class="custom-container  mx-auto">
  <div class="custom-container mx-auto flex flex-col gap-5"> 
    <div class="w-full h-auto flex flex-col gap-5  shadow-md  rounded-md bg-white">
      <div class="image-box w-full">
          <img src={singleBlogs[0].cover_image} alt="''" class="object-cover w-full h-full">    
      </div>
      <div class="blog-content  flex-col justify-start items-end p-5">
          <h1 class="text-lg"> {singleBlogs[0].title} </h1>
         <p class="mt-2 text-sm">
           {singleBlogs[0].description}
         </p>
            
           <div class="flex flex-wrap gap-2 mt-5">
           {#each singleBlogs[0].tag_list as tag }
               <span class="rounded-full bg-slate-200 p-2 text-sm text-black text-center min-w-[80px] w-auto"> {tag} </span>   
           {/each}
          </div>
      </div>
  </div>
    </div>
</main>


<style>

</style>