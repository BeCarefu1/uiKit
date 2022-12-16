<template>
  <SidebarVue />
  <Navbar />
  <main id="Uikit-page">
    <h3>Навигационная панель</h3>
    <nav class="navbar">
      <div class="container">
        <router-link to="/uikit/typography" class="button">
          <span class="material-icons">border_color</span>
          <span class="text">Typography</span>
        </router-link>
        <router-link to="/uikit/button" class="button">
          <span class="material-icons">dialpad</span>
          <span class="text">Buttons/icons</span>
        </router-link>
        <router-link to="/uikit/input" class="button">
          <span class="material-icons">keyboard_alt</span>
          <span class="text">Input</span>
        </router-link>
        <router-link to="/uikit/table" class="button">
          <span class="material-icons">table_rows</span>
          <span class="text">Table</span>
        </router-link>
        <router-link to="/uikit/radiobutton" class="button">
          <span class="material-icons">radio_button_checked </span>
          <span class="text">Radiobutton</span>
        </router-link>
        <router-link to="/uikit/tabs" class="button">
          <span class="material-icons">tab</span>
          <span class="text">Tabs </span>
        </router-link>
       <router-link to="/uikit/progress" class="button">
          <span class="material-icons">pending</span>
          <span class="text">Progress</span>
        </router-link>
        <router-link to="/uikit/checkbox" class="button">
          <span class="material-icons">check_box</span>
          <span class="text">Checkbox</span> </router-link>
      </div>
    </nav>
    <!-- Кнопки и иконки -->

    <!-- Input-ы -->

    <!-- Таблицы -->

    <!-- Radio Buttons -->

    <!-- Tabs -->
  </main>
</template>

<script setup>
// Так нужно Импортировать компоненты, которые хотим использовать //

import SidebarVue from "../../components/layouts/Sidebar.vue";
import Navbar from "../../components/layouts/Navbar.vue";

// Импортируем Input (поля, в которые пользователь вносит данные) //

import Input from "@/components/Input.vue";

// Импортируем Кнопки и иконки //

import Button from "@/components/Button.vue";

// Импортируем Таблицы //

import BaseTable from "@/components/Table/BaseTable.vue";
import TableRow from "@/components/Table/TableRow.vue";
import TableColumn from "@/components/Table/TableColumn.vue";

// Импортируем  //

import Radiobutton from "@/components/Radiobutton.vue";

// Tabs  //

import Tabs from "@/components/Tabs.vue";

// Добавляем реактивность Composition Api //

import { ref, computed } from "vue";

// Для Login-a (Добавляем Валидацию) //
import useVuelidate from "@vuelidate/core";
import { helpers, minLength, email, sameAs } from "@vuelidate/validators";

// For Buttons //
const eventForButton = () => {
  alert("You clicked danger button");
};

// For Inputs //
// Валидация / Vuelidate //

const nameField = ref("");
const emailField = ref("");
const passwordField = ref("");
const confirmPassword = ref("");

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(
      "Минимальная длина: 6 символов",
      minLength(6)
    ),
  },
  emailField: {
    email: helpers.withMessage("Вы ввели неверный адрес", email),
  },
  passwordField: {
    password: helpers.withMessage(
      "Минимальная длина: 6 символов",
      minLength(6)
    ),
  },
  confirmPassword: {
    sameAsPassword: helpers.withMessage(
      "Пароли не совпадают",
      sameAs(passwordField.value)
    ),
  },
}));

const v = useVuelidate(rules, {
  nameField,
  emailField,
  passwordField,
  confirmPassword,
});

console.log(v);

// For Tables //

const tableHeads = ["Id", "Author", "Title", "Cover", ""];
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

// For RadioButtons //

const footballClubs = ref([
  { name: "ГИП - Электро", id: "f1" },
  { name: "ГИП - Энерго", id: "f2" },
  { name: "КУРС", id: "f3" },
  { name: "ОП Архангельское", id: "f4" },
]);
const selectedClub = ref("");

const disabledRadio = ref(true);
const disabledRadioChecked = ref(true);

// For Tabs //

const tabs = [
  { name: "About", label: "О проекте" },
  { name: "Vue", label: "Про ГИП-Электро" },
  { name: "React", label: "Про Курс" },
];
const selectedTab = ref("Vue");

const changeTab = (tabName) => {
  selectedTab.value = tabName;
};
</script>

 
  <style lang="scss" scoped>
// <---- Typography ---->

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

// <---- Button ---->

// <---- Input ---->
</style>