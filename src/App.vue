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

// Checking user's authentication state
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
  padding: 20px;
}



footer {
  margin-top: auto;
}
</style>
