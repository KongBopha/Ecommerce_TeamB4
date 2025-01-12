<template>
  <div class="user-info">
    <label for="email">Email</label>
    <input
      id="email"
      type="email"
      placeholder="Enter your email"
      class="input-field"
      v-model="email"
      required
    />

    <label for="password">Password</label>
    <input
      id="password"
      type="password"
      placeholder="Enter your password"
      class="input-field"
      v-model="password"
      :style="{ borderColor: isError ? 'red' : 'gray' }"
      required
    />

    <span v-if="isError" class="error-message" style="color: red;">Invalid password or email</span>

    <Authen_button @click="loginUser" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStoreFunction } from "@/stores/useAuthStore";
import { useRouter } from "vue-router";
import Authen_button from './Authen_button.vue';

const email = ref("");
const password = ref("");
const isError = ref(false);
const errorMessage = ref("");
const store = useStoreFunction();
const router = useRouter();

const loginUser = async () => {
  const error = await store.loginUser(email.value, password.value);

  if (error) {
    isError.value = true;
    errorMessage.value = error;
  } else {
    isError.value = false;
    errorMessage.value = "";
    router.push("/shoes");  
  }
};
</script>


  <style scoped>
  .user-info {
    display: flex;
    flex-direction: column;
    gap: 20px;  
    max-width: 400px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }
  
  label {
    font-size: 14px;
    font-weight: bold;
    color: black;
    font-family: monospace;
  }
  
  .input-field {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #d1d5db;  
    border-radius: 5px;
    font-size: 14px;
    outline: none;
  }
  
  .input-field:focus {
    border-color: #000000;  
    box-shadow: 0 0 4px rgba(37, 99, 235, 0.5);  
  }
  </style>
  