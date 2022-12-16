<template>
	<SidebarVue />
	<Navbar />

	<main id="Settings-page">
		<h1>Настройки</h1>
		<p>Здесь вы можете увидеть настройки системы</p>
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