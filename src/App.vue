<script setup>
import ButtonComponent from "./components/ButtonComponent.vue";
import CardComponent from "./components/CardComponent.vue";
import CategoryComponent from "./components/CategoryComponent.vue";
import CheckoutView from "./Views/CheckoutView.vue";
</script>

<template>
  <!-- <div class="relative flex space-x-[70px]">
    <CategoryComponent />
    <div>
      <div class="grid grid-cols-3 gap-[60px]">
        <CardComponent
          discount="20%"
          image="./src/assets/images/NAF1.png"
          title="Nike Air Force 1"
          price="115$"
          button="Checkout"
        />
        <CardComponent
          discount="15%"
          image="./src/assets/images/NAF2.png"
          title="Nike Air Force 2"
          price="100$"
          button="Card"
        />
        <CardComponent
          discount="30%"
          image="./src/assets/images/NAF3.png"
          title="Nike Air Force 3"
          price="230$"
          button="Card"
        />
        <CardComponent
          discount="15%"
          image="./src/assets/images/NAF4.png"
          title="Nike Air Force 4"
          price="140$"
          button="Card"
        />
        <CardComponent
          discount="10%"
          image="./src/assets/images/Jordan.png"
          title="Jordan"
          price="300$"
          button="Checkout"
        />
        <CardComponent
          discount="30%"
          image="./src/assets/images/NAF5.png"
          title="Nike Air Force 5"
          price="400$"
          button="Checkout"
        />
      </div>
      <div class="absolute mt-[30px] right-[400px]">
        <ButtonComponent />
      </div>
    </div>
  </div> -->
  <CheckoutView />
</template>
