<script>
	import Icon from './../../node_modules/@iconify/svelte/dist/Icon.svelte';
	import HomeBox from '$lib/components/HomeBox.svelte';
    import SocialIcon from '$lib/components/SocialIcon.svelte';
    import { socialLinks } from '$lib/constants/index.js';
  
    
   let link='';
</script>
 
<svelte:head>
	<title>HK | Portfolio</title>
	<meta name="description" content="Hikmat khan portfolio" />
</svelte:head>

<main class="custom-container mx-auto">



<div class="flex max-sm:flex-col custom-container mx-auto gap-5">

    <div class="hero-section-img">
        <img src="https://prismatic-vacherin-4f22e8.netlify.app/hk.png" alt="Hikmat Khan">
    </div>

  <div>
    <div class="hero-content p-12 flex flex-col gap-5">
        <h2 class="text-2xl font-semibold text-gray-400">Hi, I am Hikmat Khan</h2>
        <h1 class="text-[4rem] max-sm:text-[1rem] md:text-[3rem]  font-bold text-gray-900 leading-[4.2rem] ">Full Stack Mobile Apps & Web Developer</h1>
        <p class="text-gray-700 text-md leading-relaxed">
          I excel in creating innovative and user-friendly mobile applications. Skilled in C++, Java, Dart, Flutter for mobile, as well as web technologies including HTML, CSS, Bootstrap, JS, PHP, and Laravel.
        </p>
        <div class="flex items-center gap-x-5 mt-3">
          <button class="btn-custom">Hire</button>
          {#each socialLinks as social, index }
            <SocialIcon icon={social.icon} link={social.link}  />
          {/each}
          
          <!-- <a href="/" aria-label="social" class="btn-social">
            <Icon icon="logos:facebook" />
          </a>
          <a href="/" aria-label="social" class="btn-social">
            <Icon icon="logos:twitter" />
          </a>
          <a href="/" aria-label="social" class="btn-social">
            <Icon icon="skill-icons:instagram" />
          </a>
          <a href="/" aria-label="social" class="btn-social">
            <Icon icon="logos:skype" />
          </a> -->
        </div>
     </div> 

        <!-- start boxes of exp, projects and skills -->
        <div class="grid grid-cols-3 gap-5 mt-2">
            <HomeBox title="2+" desc="Years Experience" />
            <HomeBox title="10+" desc="Projects" />
            <HomeBox title="9+" desc="Techs Language" />
        </div>
        <!-- end boxes of exp, projects and skills -->
    </div>
</div>

</main>

