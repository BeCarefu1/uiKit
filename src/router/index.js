import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/MainMenu/Main.vue'
import Login from '../views/MainMenu/Login.vue'
import { auth } from '../firebase'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		// Основное Меню
		{
			path: '/',
			component: Main,
			meta: {
				requiresAuth: true
			  }
			
		},
		{
			path: '/deals',
			component: () => import('@/views/MainMenu/Deals.vue'),
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/archive',
			component: () => import('@/views/MainMenu/Archive.vue'),
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/users',
			component: () => import('@/views/MainMenu/Users.vue'),
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/documents',
			component: () => import('@/views/MainMenu/Documents.vue'),
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/settings',
			component: () => import('@/views/MainMenu/Settings.vue'),
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/notes',
			component: () => import('@/views/MainMenu/Notes.vue'),
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/login',
			component: () => import('@/views/MainMenu/Login.vue')
		},
		{
			path: '/profile',
			component: () => import('@/views/MainMenu/Profile.vue'),
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/notif',
			component: () => import('@/views/MainMenu/Notif.vue'),
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/uikit',
			component: () => import('@/views/MainMenu/Uikit.vue'),
			meta: {
				requiresAuth: true
			  }
		},

		// UI KIT TOOLS
		{
			path: '/uikit/typography',
			component: () => import('@/views/UiKit/Typography.vue'),
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/uikit/button',
			component: () => import('@/views/UiKit/Button.vue'),
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/uikit/input',
			component: () => import('@/views/UiKit/Input.vue'),
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/uikit/table',
			component: () => import('@/views/UiKit/Table.vue'),
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/uikit/radiobutton',
			component: () => import('@/views/UiKit/Radiobutton.vue'),
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/uikit/tabs',
			component: () => import('@/views/UiKit/Tabs.vue'),
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/uikit/checkbox',
			component: () => import('@/views/UiKit/Checkbox.vue'),
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/uikit/progress',
			component: () => import('@/views/UiKit/Progress.vue'),
			meta: {
				requiresAuth: true
			  }
		},
		],
})

router.beforeEach((to, from, next) => {
	if (to.path === '/login' && auth.currentUser) {
	  next('/')
	  return;
	}
  
	if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
	  next('/login')
	  return;
	}
  
	next();
  })

export default router