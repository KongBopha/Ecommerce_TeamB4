<script setup>
import { defineProps } from "vue";
import { useStore } from "@/stores/store";

const data = useStore();

const props = defineProps({
  amount: Number,
  image: String,
  name: String,
  price: Number,
  id: Number,
});

// Methods for store actions
const incrementItem = () => {
  data.increment({ id: props.id });
};

const decrementItem = () => {
  data.decrement({ id: props.id });
};

const removeItem = () => {
  data.remove(props.id);
};
</script>

<template>
  <section>
    <hr />
    <div class="w-full flex items-center px-7">
      <!-- Product Image -->
      <img :src="image" width="130" height="130" alt="Product image" />

      <!-- Product Details -->
      <div class="flex justify-between w-full px-5">
        <!-- Product Info -->
        <div class="py-3 pl-5">
          <h3 class="font-semibold text-base mb-2">{{ name }}</h3>
          <span class="text-blue-500 font-extralight text-sm">
            ${{ price.toFixed(2) }}
          </span>
          <div class="flex items-center space-x-1 py-2 mt-2">
            <!-- Quantity Display -->
            <div
              class="flex items-center justify-center border-2 border-black rounded w-6 h-6"
            >
              {{ amount }}
            </div>
            <!-- Increment Button -->
            <button
              @click="incrementItem"
              class="flex items-center justify-center border-2 border-black w-4 h-4"
            >
              +
            </button>
            <!-- Decrement Button -->
            <button
              @click="decrementItem"
              class="flex items-center justify-center border-2 border-black w-4 h-4"
            >
              -
            </button>
          </div>
        </div>

        <!-- Price and Remove Button -->
        <div class="flex items-center justify-center pl-64 space-x-5">
          <span class="font-bold text-lg">
            ${{ (price * amount).toFixed(2) }}
          </span>
          <button @click="removeItem">
            <i class="pi pi-times-circle text-gray-300"></i>
          </button>
        </div>
      </div>
    </div>
    <hr />
  </section>
</template>
