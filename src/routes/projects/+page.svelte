
<script>
	import ProjectBox from "$lib/components/ProjectBox.svelte";
    import { projects } from "$lib/constants/index.js";
 </script>
 
 
 <svelte:head>
     <title>Projects</title>
     <meta name="description" content="Hikmat khan portfolio Projects" />
 </svelte:head>
 
 
 <div class="w-full  shadow-none page-title">
     <div class="container text-center p-5">
          <h1 class="text-4xl font-bold"> Projects </h1>   
     </div>
 </div>



 
<div class="mt-5">
    <main class="custom-container  mx-auto">
        <div class="custom-container mx-auto grid grid-cols-4 gap-5"> 
           <div class="2-cols-project">
            {#each projects.leftSideProject as project, index }
            
            <ProjectBox projectInfo={project} />
            {/each}
           </div>
            <div class="main-project col-span-2">
            {#each projects.mainProject as project, index }
              <ProjectBox  projectInfo={project} />
            {/each}
            </div>
            <div class="2-right-side-project">
            {#each projects.rightSideProjects as project, index }
              <ProjectBox  projectInfo={project} />
            {/each}
            </div>
        </div>
        <div class="custom-container mx-auto grid grid-cols-2 gap-5"> 
            {#each projects.otherProjects as project, index }
              <ProjectBox  projectInfo={project} />
            {/each}
        </div>
    </main>
    
</div>