import Aboutus from '@/Views/Aboutus.vue';
import AuthenView from '@/Views/AuthenView.vue';
import Contactus from '@/Views/Contactus.vue';
import HomeView from '@/Views/HomeView.vue';
import ProductViewNAF1 from '@/Views/ProductViewNAF1.vue';
import ProductViewNAJ4 from '@/Views/ProductViewNAJ4.vue';
import Signinview from '@/Views/signinview.vue';
import Signupview from '@/Views/signupview.vue';

import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'HomeView',  
    component: HomeView,
    children: [
      { path: '', redirect: '/shoes' }, // Default route to /home/shoes
      { path: 'shoes', component: () => import('../Views/products/Shoes.vue') },
      { path: 'Accessories', component: () => import('../Views/products/Accessories.vue') },
      { path: 'Health', component: () => import('../Views/products/Health.vue') },
    ]
  },
  {
    path:'/aboutus',
    name:'aboutus',
    component:Aboutus
  },
  {
    path: '/Signin',  
    name:'SignUp',
    component:AuthenView
  },
  {
    path:'/contact',
    name:'contactus',
    component: Contactus
  },
  {
    path: '/signinview',
    name:'signinview',
    component:Signinview
  },
  {
    path: '/signupview',
    name:'signupview',
    component:Signupview
  },
  {
    path: '/AirForce1',
    name: 'Air-Force-1',
    component: ProductViewNAF1,
    props: true,
  },
  {
    path: '/AirJordan4',
    name: 'Air-Jordan-4',
    component: ProductViewNAJ4 ,
    prop: true,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
