import { createRouter, createWebHistory } from 'vue-router';

<<<<<<< HEAD
import Aboutus from '@/views/Aboutus.vue';
import AuthenView from '@/views/AuthenView.vue';
import Contactus from '@/views/Contactus.vue';
import HomeView from '@/views/HomeView.vue';
import ProductViewNAF1 from '@/views/ProductViewNAF1.vue';
import ProductViewNAJ4 from '@/views/ProductViewNAJ4.vue';
import Signinview from '@/views/signinview.vue';
import Signupview from '@/views/signupview.vue';
import CheckoutView from '@/views/CheckoutView.vue';
import PaymentView from '@/views/PaymentView.vue';
import OrderComplete from '@/views/OrderComplete.vue';
=======
import Aboutus from '@/Views/Aboutus.vue';
import AuthenView from '@/Views/AuthenView.vue';
import Contactus from '@/Views/Contactus.vue';
import HomeView from '@/Views/HomeView.vue';
import ProductView from '@/Views/ProductView.vue';
import Signinview from '@/Views/signinview.vue';
import Signupview from '@/Views/signupview.vue';
import CheckoutView from '@/Views/CheckoutView.vue';
import PaymentView from '@/Views/PaymentView.vue';
>>>>>>> 371197c2ff7fdd1c9045e8888191fb4f6bb9a81c

// Import Components
import CardInfo from '@/components/CardInfo.vue';
import CardPin from '@/components/CardPin.vue';
import BankInfo from '@/components/BankInfo.vue';
import TransferInfo from '@/components/TransferInfo.vue';
<<<<<<< HEAD
=======
import Button from '@/components/button.vue';
import { fromJSON } from 'postcss';
import Productdetails from '@/Views/Productdetails.vue';

>>>>>>> 371197c2ff7fdd1c9045e8888191fb4f6bb9a81c

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    children: [
      { path: '', redirect: '/shoes' }, // Default route to /home/shoes
      { path: 'shoes', component: () => import('../views/products/Shoes.vue') },
      { path: 'Accessories', component: () => import('../views/products/Accessories.vue') },
      { path: 'Health', component: () => import('../views/products/Health.vue') },
    ]
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: Aboutus,
  },
  {
    path: '/Signin',
    name: 'SignUp',
    component: AuthenView,
  },
  {
    path: '/contact',
    name: 'contactus',
    component: Contactus,
  },
  {
    path: '/signinview',
    name: 'signinview',
    component: Signinview,
  },
  {
    path: '/signupview',
    name: 'signupview',
    component: Signupview,
  },
  {
<<<<<<< HEAD
    path: '/AirForce1',
    name: 'Air-Force-1',
    component: ProductViewNAF1,
    props: true,
  },
  {
    path: '/AirJordan4',
    name: 'Air-Jordan-4',
    component: ProductViewNAJ4,
=======
    path: '/product/:id',
    name: 'ProductView',
    component: ProductView,
>>>>>>> 371197c2ff7fdd1c9045e8888191fb4f6bb9a81c
    props: true,
  },
  {
    path: '/checkout',
<<<<<<< HEAD
    component: CheckoutView,
=======
    name: 'CheckoutView',
    component: CheckoutView
>>>>>>> 371197c2ff7fdd1c9045e8888191fb4f6bb9a81c
  },
  {
    path: '/checkout/payments',
    component: PaymentView,
    children: [
      {
        path: 'card',
        component: CardInfo,
      },
      {
        path: 'cardPin',
        component: CardPin,
      },
      {
        path: 'bank',
        component: BankInfo,
      },
      {
        path: 'transfer',
        component: TransferInfo,
      },
    ]
  },
<<<<<<< HEAD
  {
    path: '/checkout/payments/complete',
    component: OrderComplete,
  },
=======
>>>>>>> 371197c2ff7fdd1c9045e8888191fb4f6bb9a81c
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;