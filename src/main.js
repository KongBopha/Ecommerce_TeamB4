import 'primeicons/primeicons.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { firebaseApp } from './firebase';
import { VueFire, VueFireAuth } from 'vuefire';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/main.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faUser, faCartShopping, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useStoreFunction } from "@/stores/useAuthStore";



library.add(faMagnifyingGlass);
library.add(faUser);
library.add(faCartShopping);
library.add(faPaperPlane)
library.add(faFacebook);
library.add(faInstagram);
library.add(faTiktok);

const app = createApp(App);
const pinia = createPinia();

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});

app.use(router);
app.use(pinia);
app.mount('#app');
