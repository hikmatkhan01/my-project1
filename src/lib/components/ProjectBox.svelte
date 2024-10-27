<script>
  const {projectInfo} = $props();
</script>
<div class="w-full h-auto mt-2 bg-white shadow-sm rounded-md relative group transition-all ease-in-out duration-700">
    <img src={projectInfo.image} alt={projectInfo.name} class="w-full h-full object-cover rounded-md shadow-sm">
    <div class="group details absolute bottom-0 bg-white rounded-md w-full h-0   transition-all ease-in-out duration-700   group-hover:h-[120px] group-hover:p-5">
        <h1 class="hidden  transition ease-linear duration-1000 group-hover:block "> {projectInfo.name} </h1>
        <a href="/" class="text-indigo-950 text-sm hidden group-hover:block transition ease-linear duration-1000"> Explore </a>
    </div>
</div>

<style>

</style>