import Aboutus from '@/Views/Aboutus.vue';
import Contactus from '@/Views/Contactus.vue';
import HomeView from '@/Views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'HomeView',  
    component: HomeView,
  },
  {
    path:'/aboutus',
    name:'aboutus',
    component:Aboutus
  },
  // {
  //   path: '/SignUp',
  //   name:'SignUp',
  //   component:sing
  // },
  {
    path:'/contact',
    name:'contactus',
    component: Contactus
  },
  // {
  //   path:'/Signin',
  //   name:'signin',
  //   component:Signin
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
