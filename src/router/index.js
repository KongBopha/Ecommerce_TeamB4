import { createRouter, createWebHistory } from 'vue-router';

import CheckoutView from '@/views/CheckoutView.vue';
import PaymentView from '@/views/PaymentView.vue';

import CardInfo from '@/components/CardInfo.vue';
import CardPin from '@/components/CardPin.vue';
import BankInfo from '@/components/BankInfo.vue';
import TransferInfo from '@/components/TransferInfo.vue';
import Button from '@/components/button.vue';

const routes = [
  // Button component is just for testing purposes. You can remove and connect it to the right route.
  {
    path: '/',
    component: Button,
  },
  {
    path: '/checkout',
    component: CheckoutView,
    
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
      { path: 'transfer', 
        component: TransferInfo,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
