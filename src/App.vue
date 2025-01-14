<template>
  <div class="layout">
    <Navbar />
    <main class="content">
      <RouterView />
    </main>
    <Footer />
  </div>
  <!-- <OrderComplete /> -->
  <!-- <CheckoutView /> -->
</template>

<script setup>
import { RouterView } from "vue-router";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import OrderComplete from "@/views/OrderComplete.vue";
import CheckoutView from "./views/CheckoutView.vue";
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
}

body {
  background-color: #f9f9f9;
  font-family: "Arial", sans-serif;
}

footer {
  margin-top: auto;
}
</style>
