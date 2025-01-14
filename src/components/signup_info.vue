<template>
  <div class="userInfo">
    <form @submit.prevent="register" class="form-container">
      <div class="name-group">
        <div>
          <label for="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
            v-model="firstName"
            class="input-field"
            required
          />
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Last Name" 
            v-model="lastName"
            class="input-field"
            required
          />
        </div>
      </div>
      <!-- Contact Number -->
      <label for="phoneNumber">Contact Number</label>
      <input
        id="contactNumber"
        type="tel"
        placeholder="Contact Number"
        v-model="contactNumber"
        class="input-field"
        required
      />
      <!-- Gmail -->
      <label for="email">Gmail</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your Gmail"
        v-model="email"
        class="input-field"
        required
      />

      <!-- Password -->
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        v-model="password"
        class="input-field"
        required
      />

      <!-- Sign Up Button -->
      <button type="submit" class="signup-button">Sign Up</button>

      <!-- Google Sign-In Button -->
      <button v-if="!store.isLoggedIn" @click="signInWithGoogle" class="btn-google">
        <img src="@/assets/images/google.png" class="img-logo" />
        Sign in with Google
      </button>

      <!-- Log In Button -->
      <button v-if="!store.isLoggedIn" @click="loginUser">
        <p>Already have an account? <span>Log in here</span></p>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStoreFunction } from "@/stores/useAuthStore";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const firstName= ref("");
const lastName = ref("");
const contactNumber = ref("");
const router = useRouter();

// Access Pinia store
const store = useStoreFunction();

const register = () => {
  const fullName = firstName.value + " " + lastName.value;
  store.createUser(email.value, password.value, fullName,contactNumber.value, router);
  console.log("Full Name:", fullName);
  router.push("/shoes");
};

const signInWithGoogle = () => {
  store.signInGoogle();
};

const loginUser = () => {
  router.push("/signinview");
};
</script>

<style scoped>
.userInfo {
  width: 100%;
  display: flex;
  justify-content: center;
}

.form-container {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.name-group {
  display: flex;
  gap: 10px;
}

.name-group > div {
  flex: 1;
}

label {
  font-size: 14px;
  font-weight: bold;
  color: #333;
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
  border-color: #4f46e5;
  box-shadow: 0 0 4px rgba(79, 70, 229, 0.5);
}

.signup-button {
  width: 100%;
  padding: 10px;
  background-color: #0056c7;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.signup-button:hover {
  background-color: #1c5ba3;
}
span{
  cursor: pointer;
  color: blue;
  font-weight: 500;
  text-decoration: underline;
}
.btn-google {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
}

.img-logo {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}


</style>
