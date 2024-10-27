
<script>
   import {blogsData} from '$lib/constants/blogsData.js';
</script>




<svelte:head>
	<title>HK | Blogs</title>
	<meta name="description" content="Hikmat khan portfolio" />
</svelte:head>


<div class="w-full  shadow-none page-title">
    <div class="container text-center p-5">
         <h1 class="text-4xl font-bold"> Blogs </h1>   
    </div>
</div>

<div class="mt-5">
    <main class="custom-container  mx-auto">
        <div class="custom-container mx-auto flex flex-col gap-5"> 
          {#each blogsData as blog}
            <div class="w-full h-auto flex gap-5 justify-start items-start shadow-md  rounded-md bg-white">
                <div class="image-box flex-1  max-w-[300px] max-h-[300px]">
                    <img src={blog.cover_image} alt="''" class="object-cover w-full h-full">    
                </div>
                <div class="flex-2 blog-content  flex-col justify-start items-end p-5">
                 <a href="/blogs/{blog.slug}" class="hover:text-indigo-700">
                    <h1 class="text-lg"> {blog.title} </h1>
                </a>

                <p class="mt-2 text-sm">
                    {blog.description}
                </p>
                      
                     
                     <div class="flex flex-wrap gap-2 mt-5">
                     {#each blog.tag_list as tag }
                         <span class="rounded-full bg-slate-200 p-2 text-sm text-black text-center min-w-[80px] w-auto"> {tag} </span>   
                     {/each}
                    </div>
                </div>
            </div>
          {/each}
    </main>
    
</div>

