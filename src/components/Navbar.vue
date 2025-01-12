<template>
  <header>
    <div class="logo">
      <router-link to="/shoes">SparkFoot
        <img :src="shoes" alt="Logo" class="logo-img" />
      </router-link>
    </div>
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link :to="{ name: 'aboutus' }" class="nav-link">About us</router-link>

      <!-- Categories Menu with Submenu -->
      <div class="menu-item">
        <span class="nav-link">Categories</span>
        <span class="dropdown-arrow" v-if="categoriesHasSubmenu">&#9660;</span>
        <div v-if="categoriesHasSubmenu" class="submenu">
          <div v-for="subItem in categoriesSubmenu" :key="subItem" class="submenu-item">
            {{ subItem }}
          </div>
        </div>
      </div>

      <router-link :to="{ name: 'contactus' }" class="nav-link">Contact us</router-link>

      <!-- Search Form -->
      <div class="form-search">
        <input type="text" v-model="input" placeholder="Search here..." />
        <font-awesome-icon class="icon-white" :icon="['fas', 'magnifying-glass']" />
      </div>

      <!-- Icons Section -->
      <div class="icons">
        <!-- Cart Icon -->
        <div class="icon-wrapper">
          <font-awesome-icon :icon="['fas', 'cart-shopping']" @click="checkAuthWithCart" />
        </div>

        <!-- User Icon with Dropdown Menu -->
        <div class="icon-wrapper">
          <font-awesome-icon :icon="['fas', 'user']" class="user-icon" @click="toggleDropdown" />
          <div v-if="isDropdownOpen" class="sec-center">
            <div class="section-dropdown">
              <p v-if="userStore.isLoggedIn && userStore.user?.displayName">
                Welcome {{ userStore.user.displayName }} to SparkFoot!
              </p>
              <p v-else>
                Welcome to SparkFoot!
              </p>
              <a href="#" @click="profileClicked">Profile <i class="uil uil-user"></i></a>
              <a href="#">History Order <i class="uil uil-cog"></i></a>
              <a href="/shoes" @click="logout" v-if="userStore.isLoggedIn">Log out <i class="uil uil-signout"></i></a>
              <a href="/signinview" v-else>Log in <i class="uil uil-signin"></i></a>
            </div>
            
            <!-- User Information Section -->
            <div v-if="showUserInfo" class="user-info-popup">
              <div class="user-info-content">
                <h3>User Information</h3>
                <ul class="user-details">
                  <li><strong>Name:</strong> {{ name }}</li>
                  <li><strong>Email:</strong> {{ email }}</li>
                  <li><strong>Phone:</strong> {{ phoneNumber }}</li>
                </ul>
                <button @click="showUserInfo = false" class="close-btn">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useStoreFunction } from "@/stores/useAuthStore";
import shoes from "../assets/images/logo.png";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Shoes from "@/Views/products/Shoes.vue";
const userStore = useStoreFunction();
const router = useRouter();
const email = ref("");
const name = ref("");
const phoneNumber = ref("");
const isDropdownOpen = ref(false);
const showUserInfo = ref(false);
const input = ref("");


function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
  userStore.checkAuthState();
}
function checkAuthWithCart() {
  if (!userStore.isLoggedIn) {
    alert("Please log in to add items to your cart.");
    router.push("/signinview");
  } else {
    alert("Item added to your cart.");
  }
}

function profileClicked (){
  showUserInfo.value = !showUserInfo.value;
  userStore.DisplayUserData(name,email,phoneNumber);
}

function logout() {
  userStore.logout();
}

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
  margin-left: 120px;
  margin-top: -35px;
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

.icon-wrapper {
  position: relative;
  display: inline-block;
  margin-left: 20px;
  margin-top: 5px;
}

.user-icon {
  font-size: 20px;
  cursor: pointer;
  color: #ffffff;
  transition: color 0.3s ease;
}

.user-icon:hover {
  color: #aaaaaa;
}
p{
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
}


.sec-center {
  position: absolute;
  top: 45px;
  right: 20;
  width: 230px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  z-index: 999;
}

.section-dropdown a {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.section-dropdown a i {
  margin-left: auto;
}

.section-dropdown a:hover {
  background-color: #acacac;
  color: #fff;
}
.user-info-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.user-info-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

ul.user-details {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}

ul.user-details li {
  font-size: 1rem;
  color: #555;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
}

ul.user-details li strong {
  font-weight: bold;
  color: #000;
}

button.close-btn {
  background-color: #ff4f58;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button.close-btn:hover {
  background-color: #e03e48;
}
</style>
