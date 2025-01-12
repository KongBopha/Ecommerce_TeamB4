<template>
  <div class="layout">
    <Navbar />
    <main class="content">
      <RouterView />
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import { useStoreFunction } from "@/stores/useAuthStore";
import { onMounted } from "vue";

const userStore = useStoreFunction();
onMounted(() => {
  userStore.checkAuthState();
});

</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex: 1;
   
}

body {
  background-color: #f9f9f9;
  font-family: "Arial", sans-serif;
}

footer {
  margin-top: auto;
}

</style>
