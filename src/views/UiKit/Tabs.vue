<script setup>
import { ref } from "vue";
import Tabs from "@/components/Tabs.vue";

// Так нужно Импортировать компоненты, которые хотим использовать //

import SidebarVue from "../../components/layouts/Sidebar.vue";
import Navbar from "../../components/layouts/Navbar.vue";

const tabs = [
  { name: "About", label: "О проекте" },
  { name: "Vue", label: "Про ГИП-ЭЛЕКТРО" },
  { name: "React", label: "Про КУРС" },
];
const selectedTab = ref("Vue");

const changeTab = (tabName) => {
  selectedTab.value = tabName;
};
</script>

<template>
  <SidebarVue />
  <Navbar />
  <main id="Tabs-page">
    <h1 class="heading-1">Tabs</h1>
    <Tabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
      <div v-if="selectedTab === 'About'">Lorem ipsum dolor sit amet.</div>
      <div v-if="selectedTab === 'Vue'">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, id.
      </div>
      <div v-if="selectedTab === 'React'">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque.
        Laborum iusto odit minus incidunt.
      </div>
    </Tabs>
  </main>
</template>