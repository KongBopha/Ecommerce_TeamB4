import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';
import {initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

import '@fortawesome/fontawesome-free/css/all.css';
import './assets/main.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';


library.add(faMagnifyingGlass);
library.add(faUser);
library.add(faCartShopping);
library.add(faPaperPlane)
library.add(faFacebook);
library.add(faInstagram);
library.add(faTiktok);

const firebaseConfig = {
    apiKey: "AIzaSyDAJQ-btA1wICfloj_juFxv5S_7kan47dU",
    authDomain: "ecommerce-authen.firebaseapp.com",
    projectId: "ecommerce-authen",
    storageBucket: "ecommerce-authen.appspot.com",  
    messagingSenderId: "328586673369",
    appId: "1:328586673369:web:2c0779aa5c40198bb2d2c8"
  };
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);


 
const app = createApp(App);
const pinia = createPinia();
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(pinia);
app.mount('#app');
export { auth };
