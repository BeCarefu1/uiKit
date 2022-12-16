<template>
  <SidebarVue />
  <Navbar />

  <main id="Documents-page">
    <h1>Документы</h1>
    <p>Здесь вы можете скачать всю необходимую документацию</p>
    <div class="input-group mb-3">
      <input type="file" class="form-control" id="inputGroupFile02" />
      <label class="input-group-text" for="inputGroupFile02">Upload</label>
    </div>
  </main>
</template>

<script>
import SidebarVue from '../../components/layouts/Sidebar.vue';
import Navbar from '../../components/layouts/Navbar.vue';
export default {
  components: {
    SidebarVue,
    Navbar,
  },
};
</script>