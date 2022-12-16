import { createApp } from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFile, faHeart, faHand, faAddressBook, faCreditCard, faLemon, faHourglass  } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add([faFile, faHeart, faHand, faAddressBook, faCreditCard, faLemon, faHourglass])


const app = createApp(App)

app.use(router)
app.mount('#app')
app.use(Vuelidate)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)

