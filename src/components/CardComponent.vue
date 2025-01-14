<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  discount: Number,
  image: String,
  title: String,
  price: String,
  button: String,
});

const emit = defineEmits(['add-to-cart']);

const addToCart = () => {
  const product = {
    discount: props.discount,
    image: props.image,
    title: props.title,
    price: props.price,
  };
  emit('add-to-cart', product);
};
</script>


<template>
  <section>
    <div
      class="relative flex flex-col items-center border border-black rounded-[10px] w-60 h-[300px] p-[10px]"
    >
      <div
        class="absolute bg-yellow-300 text-sm px-[10px] py-1 rounded-3xl font-medium top-2 right-2"
      >
        {{ discount }}
      </div>
      <img
        :src="image"
        class="min-w-[150px] max-w-[150px] min-h-[150px] max-h-[150px]"
      />
      <p>{{ title }}</p>
      <br />
      <div class="flex flex-row items-center gap-x-14">
        <p class="text-gray-400">{{ price }}</p>
        <button  @click="addToCart"
          class="flex flex-row items-center border-2 border-solid border-black py-1 px-2 rounded"
        >
          <i class="pi pi-shopping-cart"></i>
          <span class="pl-2">{{ button }}</span>
        </button>
      </div>
    </div>
  </section>
</template>