<script>
  import SidebarModeDesktop from "@/partials/SidebarModeDesktop.svelte";
  import SidebarModeMobile from "@/partials/SidebarModeMobile.svelte";
  import Header from "@/partials/Header.svelte";

  import "@/app.css";

	let isSideMenuOpen = false;
	const toggleSideMenu = () => (isSideMenuOpen = !isSideMenuOpen);
	const closeSideMenu = () => (isSideMenuOpen = false);
</script>

<div
	class="flex h-screen bg-gray-50 dark:bg-gray-900"
	class:overflow-hidden={isSideMenuOpen}
>
	<!-- Desktop sidebar -->
	<SidebarModeDesktop />


	<!-- Mobile sidebar -->
	<!-- Backdrop -->
	{#if isSideMenuOpen}
		<SidebarModeMobile {closeSideMenu} />
	{/if}

	<div class="flex flex-col flex-1">
		<Header {toggleSideMenu} />
		<main class="h-full pb-16 overflow-y-auto">
			<!-- Remove everything INSIDE this div to a really blank page -->
      <slot />
		</main>
	</div>
</div>
