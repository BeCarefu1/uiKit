<template>
  
  <SidebarVue />
  <Navbar />

   <main id="Main-page">
    <h1>Главная</h1>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button label="Primary" color="primary" />
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button label="Primary" color="primary" />
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button label="Primary" color="primary" />
      </div>
    </div>
  </main>
</template>

<script>
import SidebarVue from '../../components/layouts/Sidebar.vue';
import Navbar from '../../components/layouts/Navbar.vue';
import Button from '@/components/Button.vue'
export default {
	components:{
		SidebarVue,
		Navbar,
    Button
	}
}
</script>

<style>
.card {
  display: flex;
  flex-direction: row-reverse;
}
</style>