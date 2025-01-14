<template>
  <div class="layout">
    <Navbar />
    <main class="content">
      <RouterView />
    </main>
<<<<<<< HEAD
=======
    
>>>>>>> 371197c2ff7fdd1c9045e8888191fb4f6bb9a81c
    <Footer />
  </div>
  <!-- <OrderComplete /> -->
  <!-- <CheckoutView /> -->
</template>

<script setup>
import { RouterView } from "vue-router";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
<<<<<<< HEAD
import OrderComplete from "@/views/OrderComplete.vue";
import CheckoutView from "./views/CheckoutView.vue";
=======
import { useStoreFunction } from "@/stores/useAuthStore";
import { onMounted } from "vue";

const userStore = useStoreFunction();
onMounted(() => {
  userStore.checkAuthState();
});

>>>>>>> 371197c2ff7fdd1c9045e8888191fb4f6bb9a81c
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex: 1;
<<<<<<< HEAD
  padding: 20px;
=======
   
>>>>>>> 371197c2ff7fdd1c9045e8888191fb4f6bb9a81c
}

body {
  background-color: #f9f9f9;
  font-family: "Arial", sans-serif;
}

footer {
  margin-top: auto;
}

</style>
