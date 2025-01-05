<template>
  <header>
    <div class="logo">
      SparkFoot
      <img :src="shoes" alt="Logo" class="logo-img" />
    </div>
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link :to="{ name: 'aboutus' }" class="nav-link"
        >About us</router-link
      >

      <!-- Categories Menu with Submenu -->
      <div class="menu-item">
        <span>Categories</span>
        <span class="dropdown-arrow" v-if="categoriesHasSubmenu">&#9660;</span>
        <!-- Submenu for Categories -->
        <div v-if="categoriesHasSubmenu" class="submenu">
          <div
            v-for="subItem in categoriesSubmenu"
            :key="subItem"
            class="submenu-item"
          >
            {{ subItem }}
          </div>
        </div>
      </div>

      <router-link :to="{ name: 'contactus' }" class="nav-link"
        >Contact us</router-link
      >

      <div class="form-search">
        <input type="text" v-model="input" placeholder="Search here..." />
        <font-awesome-icon
          class="icon-white"
          :icon="['fas', 'magnifying-glass']"
        />
      </div>
      <div class="icons">
        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        <font-awesome-icon :icon="['fas', 'user']" @click="userAuthen" />
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useStoreFunction } from "@/stores/useAuthStore";
import shoes from "../assets/images/logo.png";
import { useRouter } from "vue-router";

const userStore = useStoreFunction();
const router = useRouter();

const userAuthen = () => {
  if (userStore.isloggIn) {
    // Redirect to signup page
    router.push("/signupview");
  } else {
    router.push("/signinview");
  }
};

const categoriesHasSubmenu = true;
const categoriesSubmenu = ["Shoes", "Accessories", "Wellness"];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 30px;
  background-color: black;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

body {
  margin-top: 4rem;
  background-color: white;
}

header .logo {
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.logo-img {
  width: 50px;
  height: auto;
  margin-left: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
}

.nav-link {
  position: relative;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background-color: white;
  bottom: 0;
  left: 0;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.menu-item {
  position: relative;
  display: inline-block;
  cursor: pointer;
  top: 10px;
}

.dropdown-arrow {
  margin-left: 5px;
}

.submenu {
  display: none;
  position: absolute;
  background: white;
  color: black;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  top: 100%;
  left: 0;
  z-index: 1;
}

.menu-item:hover .submenu {
  display: block;
}

.submenu-item {
  padding: 8px 10px;
}

.submenu-item:hover {
  background-color: #f1f1f1;
  border-radius: 4px;
}

.icon-white {
  position: absolute;
  color: white;
  margin-left: 300px;
  margin-top: -25px;
}

input {
  position: relative;
  display: block;
  width: 330px;
  padding: 10px;
  background-color: rgb(138, 138, 138);
  font-size: 12px;
  border: none;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

input::placeholder {
  color: white;
  font-style: italic;
  opacity: 0.8;
}

.icons {
  padding-left: 80px;
  color: white;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  font-size: 20px;
  margin-top: 15px;
}
</style>
