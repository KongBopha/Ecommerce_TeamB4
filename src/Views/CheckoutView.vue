<script setup>
import CheckoutComponent from "@/components/CheckoutComponent.vue";
import { RouterLink } from "vue-router";
import { computed } from "vue";
import { useStore } from "@/stores/store";

const data = useStore();

const totalPrice = computed(() => {
  return data.cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity * (1 - item.discount / 100),
    0
  );
});

const totalQuantity = computed(() => {
  return data.cartItems.reduce((total, item) => total + item.quantity, 0);
});
</script>

<template>
  <section>
    <div class="flex justify-center items-center mt-10">
      <div class="w-full h-screen">
        <div class="flex justify-between items-center px-10">
          <img src="@/assets/images/Brand.png" width="200" height="80" />
          <div class="flex items-center justify-center">
            <i class="pi pi-question-circle text-black"></i>
            <span class="pl-1 font-semibold text-base">Need Help</span>
          </div>
        </div>
        <div class="bg-gray-50 w-full h-screen pt-3 pb-5">
          <RouterLink to="/" class="flex items-center pl-3">
            <i class="pi pi-angle-left"></i>
            <span class="pl-[1px] py-3 text-base">Back</span>
          </RouterLink>
          <div class="flex items-center justify-center">
            <div class="border-2 border-black w-9/12">
              <h1
                class="text-blue-500 flex items-center justify-center py-3 text-2xl font-extrabold"
              >
                Checkout
              </h1>
              <div class="flex pl-10">
                <i class="pi pi-shopping-bag text-blue-500"></i>
                <span class="text-blue-500 text-sm font-extralight pl-[5px]"
                  >{{ totalQuantity }} items</span
                >
              </div>
              <div class="h-auto pb-7 pt-4">
                <!-- CheckoutComponent -->
                <CheckoutComponent
                  v-for="item in data.cartItems"
                  :key="item.id"
                  :image="item.image"
                  :name="item.title"
                  :price="item.price"
                  :amount="item.quantity"
                />
              </div>
              <RouterLink
                to="/checkout/payments"
                class="flex justify-center mb-6 cursor-pointer"
              >
                <div
                  class="flex items-center justify-between bg-blue-500 border-2 border-black w-[360px] h-[50px] px-5"
                >
                  <span class="text-white font-semibold text-xl">Checkout</span>
                  <div
                    class="flex items-center justify-center bg-white h-[40px] px-10 rounded font-bold text-lg"
                  >
                    ${{ totalPrice }}
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
