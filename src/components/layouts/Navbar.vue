<template>
  <div class="flex-container">
    <span class="black-text">{{ date }}</span>
    <button
      class="btn btn-primary-light btn-sm dropdown-toggle " 
      type="button"
      data-mdb-toggle="dropdown"
      aria-expanded="false"
    >
      Иванов Иван
    </button>
    <img
      id="imageUser"
      src="@/assets/images/7.jpg"
      alt="UserAvatar"
      class="rounded-circle border border-warning"
      style="width: 50px; height: 50px"
    />
    <ul class="dropdown-menu">
      <li>
        <router-link class="dropdown-item" to="/profile"
          ><span class="material-icons">person</span> Профиль</router-link
        >
      </li>
      <li>
        <router-link class="dropdown-item" to="/notif">
        <span class="material-icons">notifications</span>
          Уведомления</router-link
        >
      </li>

      <li><hr class="dropdown-divider" /></li>
      <li>
        <router-link class="dropdown-item" to="/login">
        <span class="material-icons">logout</span>
          <span class="text" @click="$store.dispatch('logout')"> Сдать смену</span></router-link>
      </li>

    
    </ul>
    
  </div>

</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  data: () => ({
    date: new Date(),
    interval: null,
  }),

  mounted() {
    this.interval = setInterval(() => {
      this.date =
        new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString();
    }, );
  },


  beforeDestroy() {
    clearInterval(this.interval);
  },
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}

</script>

<style lang="scss" scoped>
.flex-container {
  width: 200px;
  position: absolute;
  right: 30px;
  top: 10px;
}
.allert {
  position: absolute;
  right: 225px;
  top: 30px;
}

.dropdown-menu {
  width: 200px;
}

.black-text {
  width: 220px;
  position: absolute;
  right: 170px;
  top: 9px;
  font-size: 22px;
  color:1e293b;
}

@media screen and (max-width: 520px) {
  .black-text{
    display: none;
  }
}

</style>