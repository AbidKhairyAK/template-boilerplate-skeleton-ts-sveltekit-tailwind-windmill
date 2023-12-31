import { Home, Anchor, Apple, Grape, Banana, BookOpen } from 'lucide-svelte'

const sidebarMenuList = [
	{ title: 'Dashboard', icon: Home, path: '/' },
	{ title: 'Another Page', icon: BookOpen, path: '/another-page' },
	{ title: 'Test Nested', icon: Anchor, childrens: [
		{ title: 'Item 1', icon: Apple, path: '/nested/apple' },
		{ title: 'Item 2', icon: Grape, path: '/nested/grape' },
		{ title: 'Item 3', icon: Banana, path: '/nested/banana' },
	]}
]

export default sidebarMenuList