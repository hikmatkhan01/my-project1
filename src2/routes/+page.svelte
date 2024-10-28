<script>
	import Icon from './../../node_modules/@iconify/svelte/dist/Icon.svelte';
	import HomeBox from '$lib/components/HomeBox.svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { socialLinks } from '$lib/constants/index.js';

	let link = '';
</script>

<svelte:head>
	<title>HK | Portfolio</title>
	<meta name="description" content="Hikmat khan portfolio" />
</svelte:head>

<main class="custom-container mx-auto">
	<div class="custom-container mx-auto flex gap-5 max-sm:flex-col">
		<div class="hero-section-img">
			<img src="https://prismatic-vacherin-4f22e8.netlify.app/hk.png" alt="Hikmat Khan" />
		</div>

		<div>
			<div class="hero-content flex flex-col gap-5 p-12">
				<h2 class="text-2xl font-semibold text-gray-400">Hi, I am Hikmat Khan</h2>
				<h1
					class="text-[4rem] font-bold leading-[4.2rem] text-gray-900 max-sm:text-[1rem] md:text-[3rem]"
				>
					Full Stack Mobile Apps & Web Developer
				</h1>
				<p class="text-md leading-relaxed text-gray-700">
					I excel in creating innovative and user-friendly mobile applications. Skilled in C++,
					Java, Dart, Flutter for mobile, as well as web technologies including HTML, CSS,
					Bootstrap, JS, PHP, and Laravel.
				</p>
				<div class="mt-3 flex items-center gap-x-5">
					<button class="btn-custom">Hire</button>
					{#each socialLinks as social, index}
						<SocialIcon icon={social.icon} link={social.link} />
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
			<div class="mt-2 grid grid-cols-3 gap-5">
				<HomeBox title="2+" desc="Years Experience" />
				<HomeBox title="10+" desc="Projects" />
				<HomeBox title="9+" desc="Techs Language" />
			</div>
			<!-- end boxes of exp, projects and skills -->
		</div>
	</div>
</main>
