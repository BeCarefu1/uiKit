<script setup>
// Так нужно Импортировать компоненты, которые хотим использовать //

import SidebarVue from "../../components/layouts/Sidebar.vue";
import Navbar from "../../components/layouts/Navbar.vue";

import {ref, computed} from 'vue'
import useVuelidate from '@vuelidate/core'
import {helpers, minLength, maxLength, numeric, email, sameAs} from '@vuelidate/validators'

import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

const nameField = ref('')
const emailField = ref('')
const luckyField = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')
const frontendField = ref('')

const mustBeFrontend = (value) => value.includes('Я люблю КУРС')

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3))
  },
  emailField: {
    email: helpers.withMessage('Вы ввели неверный email', email)
  },
  luckyField: {
    maxLength: helpers.withMessage(`Максимальная длина: 3 символа`, maxLength(3)),
    numeric: helpers.withMessage('Вы можете ввести только цифры', numeric)
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value))
  },
  frontendField: {
    frontendField: helpers.withMessage('Строка должна содержать фразу Я люблю КУРС', mustBeFrontend)
  }
}))

const v = useVuelidate(rules, {nameField, emailField, luckyField, confirmPasswordField, frontendField})

const submitForm = () => {
  v.value.$touch()
  if (v.value.$error) return
  alert('Form submitted')
}
</script>

<template>
  <SidebarVue />
  <Navbar />
  <main id="Input-page">
  <h1 class="heading-1">Inputs</h1>

  <form @submit.prevent="submitForm">
    <Input
      label="Your name"
      name="name"
      placeholder="Input your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"/>
      
    <Input
      label="Your email"
      name="email"
      placeholder="Input your email"
      v-model:value="v.emailField.$model"
      :error="v.emailField.$errors"/>
      
    <Input
      label="Your lucky number"
      name="lucky"
      placeholder="Input your lucky number"
      v-model:value="v.luckyField.$model"
      :error="v.luckyField.$errors"/>
      
    <Input
      label="Your password"
      name="password"
      placeholder="Please input password"
      v-model:value="passwordField"
      type="password"/>
      
    <Input
      label="Confirm password"
      name="confirm"
      placeholder="Please confirm password"
      v-model:value="v.confirmPasswordField.$model"
      :error="v.confirmPasswordField.$errors"
      type="password"/>

    <Input
      label="Frontend string"
      name="frontend"
      placeholder="Строка должна содержать Я люблю КУРС"
      v-model:value="v.frontendField.$model"
      :error="v.frontendField.$errors"/>

    <Button label="Submit" color="primary"></Button>
  </form>
</main>
</template>