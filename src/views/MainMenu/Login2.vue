<template>
    <main class="login">
      <section
        class="h-100 gradient-form"
        style="background-color: #eee"
        >
        <div class="container py- h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-5">
                      <div class="text-center">
                        <img
                          src="@/assets/images/logo2.png"
                          style="width: 185px"
                          alt="logo"
                        />
                        <h4 class="mt-1 mb-5 pb-1"></h4>
                      </div>
  
                      <form class="login" @submit.prevent="login">
                        <Input
                          type="email"
                          label="Ваш email"
                          name="email"
                          placeholder="Введите электронную почту"
                          v-model:value="v.emailField.$model"
                          :error="v.emailField.$errors"
                        />
                        <Input
                          label="Ваш пароль"
                          name="password"
                          placeholder="Введите ваш Пароль"
                          v-model:value="v.passwordField.$model"
                          :error="v.passwordField.$errors"
                          type="password" 
                        />
  
                        <Button
                          label="Вход в систему"
                          color="primary-grad"
                          type="submit"
                          size="large"
                        />
                      </form>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 d-flex align-items-center gradient-custom-2"
                  >
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4">
                        Мы команда разработчиков компании ООО "КУРС"
                      </h4>
                      <p class="small mb-0">
                        Вашему вниманию представлено лучшее рещение на рынке
                        Энергетики, программа КУРС-ДИСПЕТЧЕР.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <style scoped>
  .gradient-custom-2 {
    /* fallback for old browsers */
    background: #fccb90;
  
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, #ee7724, #1e293b);
  
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, #ee7724, #1e293b);
  }
  
  @media (min-width: 768px) {
    .gradient-form {
      height: 100vh !important;
    }
  }
  @media (min-width: 769px) {
    .gradient-custom-2 {
      border-top-right-radius: 0.3rem;
      border-bottom-right-radius: 0.3rem;
    }
  }
  </style>
  
  <script>
  import Button from "@/components/Button.vue";
  import Input from "@/components/Input.vue";
  import { ref, computed } from "vue";
  import {useStore} from "vuex"
  import useVuelidate from "@vuelidate/core";
  import { helpers, minLength, email } from "@vuelidate/validators";
  
  export default {
   setup(){
  const passwordField = ref("");
  const emailField = ref("");
  const store = useStore();
  
  const login = () => {
              store.dispatch('login', emailField.value);
          }
  
  
  const rules = computed(() => ({
    passwordField: {
      password: helpers.withMessage(
        "Минимальная длина: 6 символов",
        minLength(6)
      ),
    },
    emailField: {
      email: helpers.withMessage("Вы ввели неверный адрес", email),
    },
  }));
  
  const v = useVuelidate(rules, { passwordField, emailField });
  }}
  
  </script>