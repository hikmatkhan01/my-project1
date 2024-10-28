<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	const isHomePage = derived(page, ($page) => {
		return $page.url.pathname === '/';
	});
	let isOpen = $state(false);
</script>

<header class:is-home-page={$isHomePage}>
	<nav id="menu" class="custom-container mx-auto">
		<div class="custom-container flex items-center justify-between">
			<a href="/" class="flex items-center space-x-2 text-lg font-bold">
				<img
					src="https://prismatic-vacherin-4f22e8.netlify.app/logo.png"
					alt="logo"
					class="h-10 w-10"
				/>
				<span class="text-2xl font-thin uppercase">HK Portfolio</span>
			</a>
			<button class="menu-icon-btn" aria-label="Toggle navigation">
				<Icon icon="hugeicons:menu-04" />
			</button>
			<div>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<span>
							<a
								href="/blogs"
								class="dropdown-toggle"
								onclick={() => {
									isOpen = !isOpen;
								}}
							>
								Blogs
							</a>
							{#if isOpen}
								<ul class="sub-menu">
									<li><a href="/blogs">Blogs</a></li>
									<li><a href="/blogs/first-entry">First Entry</a></li>
									<li><a href="/blogs/second-entry">Second Entry</a></li>
								</ul>
							{/if}
						</span>
					</li>
					<li>
						<a href="/projects">Projects</a>
					</li>
					<li>
						<a href="/contacts" class="btn btn-outline-default">
							Contact Us
							<Icon icon="solar:double-alt-arrow-right-broken" class="text-xl" />
							<!-- <span class="ml-2">&rarr;</span> -->
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>

<style>
	header {
		background-color: white !important;
		min-height: 80px;
		padding-top: 1vh;
	}

	.is-home-page {
		background-color: transparent !important;
	}
</style>
