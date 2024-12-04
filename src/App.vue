<script setup>
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
  </div>
  <HomeView />
</template>

<style scoped>
body {
  background-color: white;
}
</style>
