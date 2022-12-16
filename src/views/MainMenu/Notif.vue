<template>
	<SidebarVue />
    <Navbar />
	<main id="Notif-page">
		<h1>Уведомления</h1>
		<p>Здесь мы будем видеть уведомленияь</p>
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