<template>
  <SidebarVue />
  <Navbar />
  <main id="Typography-page">
    <h1 class="heading-1">Typography</h1>
    <h2 class="heading-1">Heading 1</h2>
    <h2 class="heading-2">Heading 2</h2>
    <h2 class="heading-3">Heading 3</h2>3
    </main>
</template>

<script setup>

// Так нужно Импортировать компоненты, которые хотим использовать //

import SidebarVue from "../../components/layouts/Sidebar.vue";
import Navbar from "../../components/layouts/Navbar.vue";
</script>

<style lang="scss">
.heading {
  &-1 {
    font-size: 34px;
    margin: 20px 0px;
    font-weight: 300;
  }
  &-2 {
    font-size: 22px;
    margin: 20px 0px;
    font-weight: 300;
  }
  &-3 {
    font-size: 17px;
    margin: 20px 0px;
    font-weight: 300;
  }
}
</style>