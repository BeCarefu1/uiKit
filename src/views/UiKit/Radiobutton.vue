<script setup>
// Так нужно Импортировать компоненты, которые хотим использовать //

import SidebarVue from "../../components/layouts/Sidebar.vue";
import Navbar from "../../components/layouts/Navbar.vue";

import { ref } from 'vue'
import Radiobutton from '@/components/Radiobutton.vue'

const footballClubs = ref([
  {name: 'ГИП-ЭЛЕКТРО', id: 'f1'},
  {name: 'ГИП-ЭНЕРГО', id: 'f2'},
  {name: 'КУРС', id: 'f3'},
  {name: 'ЦуС', id: 'f4'}
])
const selectedClub = ref('')

const disabledRadio = ref(true)
const disabledRadioChecked = ref(true)
</script>

<template>
  <SidebarVue />
  <Navbar />
  <main id="Radiobutton-page">
  <h1 class="heading-1">Radiobutton</h1>
  <h2 class="heading-2">Basic</h2>
  <div class="line line_block">
    <p>Selecled Club: {{selectedClub}}</p>
    <div
      v-for="club in footballClubs"
      :key="club.id">
      <radiobutton
        :value="club.name"
        :label="club.name"
        :id="club.id"
        name="club"
        v-model:checkedValue="selectedClub"/>
    </div>
  </div>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <radiobutton
      value="Radiobutton Disabled"
      label="Radiobutton Disabled"
      id="RadiobuttonDisabled"
      name="RadiobuttonDisabled"
      :disabled="disabledRadio"
      v-model:checkedValue="disabledRadioChecked"/>
  </div>
  </main>
</template>