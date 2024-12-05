<script setup>
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
    <Footer />
  </div>
  <HomeView />
</template>

<style scoped>
body {
  background-color: white;
}
footer {
  margin-top: auto;
}
</style>
