<template>
	<SidebarVue />
	<Navbar />
	<main id="Users-page">
		<h1>Пользователи</h1>
		<p>Здесь вы можете увидеть всех пользователей системы</p>
	</main>
</template>

<script>
import SidebarVue from '../../components/layouts/Sidebar.vue';
import Navbar from '../../components/layouts/Navbar.vue';
export default {
	components:{
		SidebarVue,
		Navbar
	}
}
</script>