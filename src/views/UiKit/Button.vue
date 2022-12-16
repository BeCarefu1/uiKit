<script setup>
import Button from "@/components/Button.vue";
// Так нужно Импортировать компоненты, которые хотим использовать //

import SidebarVue from "../../components/layouts/Sidebar.vue";
import Navbar from "../../components/layouts/Navbar.vue";

// Добавляем реактивность Composition Api //

import { ref, computed } from "vue";

const eventForButton = () => {
  alert("You clicked danger button");
};
</script>

<template>
   <SidebarVue />
  <Navbar />
  <main id="Button-page">
  <h1 class="heading-1">Buttons</h1>
  <h2 class="heading-2">Colors</h2>
  <div class="line">
    <Button label="Primary" color="primary" />
    <Button label="Primary-grad" color="primary-grad" />
    <Button label="Primary-alt" color="primary-alt" />
    <Button label="Secondary" color="second" />
    <Button label="Success" color="success" />
    <Button label="Info" color="info" />
    <Button label="Warning" color="warning" />
    <Button label="Danger" color="danger" />
    <Button label="Grey" color="grey" />
    <Button label="Dark" color="dark" />
    <Button label="Light" color="light" />
  </div>

  <h2 class="heading-2">Rounded</h2>
  <div class="line">
    <Button label="Primary" color="primary" :rounded="true" />
    <Button label="Primary-grad" color="primary-grad" :rounded="true" />
    <Button label="Primary-alt" color="primary-alt" :rounded="true" />
    <Button label="Secondary" color="second" :rounded="true" />
    <Button label="Success" color="success" :rounded="true" />
    <Button label="Info" color="info" :rounded="true" />
    <Button label="Warning" color="warning" :rounded="true" />
    <Button label="Danger" color="danger" :rounded="true" />
    <Button label="Grey" color="grey" :rounded="true" />
    <Button label="Dark" color="dark" :rounded="true" />
    <Button label="Light" color="light" :rounded="true" />
  </div>

  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <Button label="Primary" color="primary" :rounded="true" :disabled="true" />
    <Button label="Primary-grad" color="primary-grad" :disabled="true" />
  </div>

  <h2 class="heading-2">Outlined</h2>
  <div class="line">
    <Button label="Primary" color="primary" :outlined="true" />
    <Button label="Primary-grad" color="primary-grad" :outlined="true" />
    <Button label="Primary-alt" color="primary-alt" :outlined="true" />
    <Button label="Secondary" color="second" :outlined="true" />
    <Button label="Success" color="success" :outlined="true" />
    <Button label="Info" color="info" :outlined="true" />
    <Button label="Warning" color="warning" :outlined="true" />
    <Button label="Danger" color="danger" :outlined="true" />
    <Button label="Grey" color="grey" :outlined="true" />
    <Button label="Dark" color="dark" :outlined="true" />
    <Button label="Light" color="light" :outlined="true" />
  </div>
  <h2 class="heading-2">Icon</h2>
  <div class="line"></div>
  <Button color="primary" icon="heart" :outlined="true" />
  <Button color="primary-grad" icon="file" />
  <Button color="primary-alt" icon="hand" :outlined="true" />
  <Button color="second" icon="address-book" />
  <Button color="success" icon="credit-card" :outlined="true" />
  <Button color="info" icon="lemon" />
  <Button color="warning" icon="hourglass" :outlined="true" />
  <h2 class="heading-2">Size</h2>
  <div class="line"></div>
  <Button label="Normal" color="primary" />
  <Button label="Large" color="primary-grad" size="large" />
  <Button label="Large" color="primary-alt" size="large" :outlined="true" />
  <h2 class="heading-2">Test</h2>
  <div class="line"></div>
  <Button label="@click" color="danger" @click="eventForButton" />
</main>
</template>