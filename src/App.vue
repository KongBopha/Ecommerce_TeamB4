<script setup>
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="layout">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
body {
  background-color: white;
}
RouterView{
  flex: 1;
}
footer {
  margin-top: auto;
}
</style>
