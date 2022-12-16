<template>
	<SidebarVue />
	<Navbar />

	<main id="Deals-page">
	<h1 class="heading-1">Заявки</h1>
   
	<Button 
  label="Создать заявку"
  color="primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal" />
  

  <!-- Создание -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Создание заявки</h1>

                    
        </div>
        <div class="modal-body">
          <form>
            <Input
      label="Your name"
      name="name"
      placeholder="Input your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"/>
      <Input
      label="Your name"
      name="name"
      placeholder="Input your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"/>
      <Input
      label="Your name"
      name="name"
      placeholder="Input your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"/>
      <Input
      label="Your name"
      name="name"
      placeholder="Input your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"/>
      <Input
      label="Your name"
      name="name"
      placeholder="Input your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"/>
            
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Message:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <Button
          type="button"
           label="Закрыть"
           color="danger"
           data-bs-dismiss="modal"
           aria-label="Close"
           />
          
           <Button
          type="button"
           label="Создать заявку"
           color="success"
           
           />
        </div>
      </div>
    </div>
  </div>
  <!-- Таблица -->
    <base-table
      :head="tableHeads"
      :columnTemplates="tableSizeColumns"
      @sorting="setSort"
    >
      <table-row
        v-for="book in booksSorting"
        :key="book.id"
        :columnTemplates="tableSizeColumns"
        
      >
        <table-column :columnTitle="tableHeads[0]">
          {{ book.id }}
        </table-column>
        <table-column :columnTitle="tableHeads[1]">
          {{ book.author }}
        </table-column>
        <table-column :columnTitle="tableHeads[2]">
          {{ book.title }}
        </table-column>
        <table-column :image="true" :srcImage="book.image" />
        <table-column>
			<Button color="info" icon="heart" />
			<Button color="warning" icon="address-book" />
        </table-column>
      </table-row>
    </base-table>
	
	</main>
</template>

<script setup>
import SidebarVue from '../../components/layouts/Sidebar.vue';
import Navbar from '../../components/layouts/Navbar.vue';

// Добавляем реактивность Composition Api //

import { ref, computed } from "vue";

import useVuelidate from '@vuelidate/core'
import {helpers, minLength, maxLength, numeric, email, sameAs} from '@vuelidate/validators'
import Input from '@/components/Input.vue'

// Импортируем Таблицы //

import BaseTable from "@/components/Table/BaseTable.vue";
import TableRow from "@/components/Table/TableRow.vue";
import TableColumn from "@/components/Table/TableColumn.vue";

// Импортируем Кнопки и иконки //

import Button from "@/components/Button.vue";
// For Buttons //
const eventForButton = () => {
  alert("You clicked danger button");
};

const tableHeads = ["id", "ОП", "Объект", "Просимое время", "ФИО Мастера", "Статус", ""];
const tableSizeColumns = "50px 1fr 2fr 150px 140px";

const sortField = ref("id");
const typeSort = ref("asc");
const books = ref([
  {
    id: 1,
    author: "Dmitry Glukhovsky",
    title: "Metro 2033",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81pNKLAG-cL._AC_UY436_FMwebp_QL65_.jpg",
    bg: "#FFA26B",
  },
  {
    id: 12,
    author: "James Clear",
    title: "Atomic Habits: An Easy",
    image:
      "https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg",
    bg: "#00C48C",
  },
  {
    id: 2,
    author: "J. K. Rowling",
    title: "Harry Potter and the Order of the Phoenix",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    bg: "#00C48C",
  },
  {
    id: 3,
    author: "J. K. Rowling",
    title: "Harry Potter and the Order of the Phoenix",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    bg: "#00C48C",
  },
  {
    id: 4,
    author: "J. K. Rowling",
    title: "Harry Potter and the Order of the Phoenix",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    bg: "#00C48C",
  },
  {
    id: 5,
    author: "J. K. Rowling",
    title: "Harry Potter and the Order of the Phoenix",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    bg: "#00C48C",
  },
  {
    id: 6,
    author: "J. K. Rowling",
    title: "Harry Potter and the Order of the Phoenix",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    bg: "#00C48C",
  },
]);

const booksSorting = computed(() => {
  return books.value.sort((a, b) => {
    let modifier = 1;
    if (typeSort.value === "desc") modifier = -1;
    if (a[sortField.value] < b[sortField.value]) return -1 * modifier;
    if (a[sortField.value] > b[sortField.value]) return 1 * modifier;
    return 0;
  });
});

const setSort = (name) => {
  if (sortField.value === name) {
    if (typeSort.value === "asc") {
      typeSort.value = "desc";
    } else {
      typeSort.value = "asc";
    }
  } else {
    sortField.value = name;
  }
};

// Для Input //

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

<style scoped>
.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 1400px;
    color: var(--bs-modal-color);
    pointer-events: auto;
    background-color: var(--bs-modal-bg);
    background-clip: padding-box;
    border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
    border-radius: var(--bs-modal-border-radius);
    outline: 0;
    right:450px;
}
</style>
