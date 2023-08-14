<script>
    import { fly } from "svelte/transition";

	import SidebarModeDesktop from "@/partials/SidebarModeDesktop.svelte";
	import SidebarModeMobile from "@/partials/SidebarModeMobile.svelte";
	import Header from "@/partials/Header.svelte";

	import "@/app.css";

	export let data

	let isSideMenuOpen = false;
	const toggleSideMenu = () => (isSideMenuOpen = !isSideMenuOpen);
	const closeSideMenu = () => (isSideMenuOpen = false);
</script>

<div
	class="flex h-screen bg-gray-50 dark:bg-gray-900"
	class:overflow-hidden={isSideMenuOpen}
>
	<SidebarModeDesktop />

	{#if isSideMenuOpen}
		<SidebarModeMobile {closeSideMenu} />
	{/if}

	<div class="flex flex-col flex-1">
		<Header {toggleSideMenu} />
		<main class="h-full pb-16 overflow-y-auto">
			{#key data.pathname}
				<div
					in:fly={{ y: 25, duration: 200, delay: 250 }}
					out:fly={{ y: 25, duration: 200 }}
					class="container px-6 mx-auto"
				>
					<slot />
				</div>
			{/key}
		</main>
	</div>
</div>
