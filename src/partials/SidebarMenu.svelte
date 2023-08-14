<script>
	import { slide } from "svelte/transition";
	import { ChevronDown } from "lucide-svelte";

	import { page } from "$app/stores";

	import sidebarMenuList from "./sidebar-menu-list.js";

	let openMenus = [];

	function toggleMenu(menu) {
		const isOpened = openMenus.includes(menu.title);
		if (isOpened) {
			openMenus = openMenus.filter((open) => open !== menu.title);
		} else {
			openMenus = [...openMenus, menu.title];
		}
	}
</script>

<ul class="mt-6">
	{#each sidebarMenuList as menu (menu.title)}
		<li class="relative px-6 py-3">
			{#if menu.hasOwnProperty("childrens")}
				<button
					on:click={() => toggleMenu(menu)}
					aria-haspopup="true"
					class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
				>
					<span class="inline-flex items-center">
						<svelte:component
							this={menu.icon}
							size={18}
							strokeWidth={2.5}
						/>
						<span class="ml-4">
							{menu.title}
						</span>
					</span>
					<ChevronDown size={18} strokeWidth={2.5} />
				</button>

				{#if openMenus.includes(menu.title)}
					<ul
						transition:slide={{ duration: 200 }}
						aria-label="submenu"
						class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
					>
						{#each menu.childrens as submenu (submenu.title)}
							<li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
								<a
									class="w-full inline-flex items-center"
									href={submenu.path}
								>
									<svelte:component
										this={submenu.icon}
										size={18}
										strokeWidth={2.5}
									/>
									<span class="ml-4">{submenu.title}</span>
								</a>
							</li>
						{/each}
					</ul>
				{/if}

			{:else}
				{#if menu.path === $page.url.pathname}
					<span
						class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
						aria-hidden="true"
					></span>
				{/if}
				<a
					class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
					href={menu.path}
				>
					<svelte:component
						this={menu.icon}
						size={18}
						strokeWidth={2.5}
					/>
					<span class="ml-4">{menu.title}</span>
				</a>
			{/if}
		</li>
	{/each}
</ul>

<!-- Active items have the snippet below -->
<!-- <span
class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
aria-hidden="true"
></span> -->

<!-- Add this classes to an active anchor (a tag) -->
<!-- text-gray-800 dark:text-gray-100 -->
