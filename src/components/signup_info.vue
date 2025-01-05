<template>
  <div class="userInfo">
    <form @submit.prevent="register" class="form-container">
      <!-- First Name and Last Name -->
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

      <!-- Gender -->
      <label for="gender">Gender</label>
      <select id="gender" class="input-field" v-model="gender" required>
        <option disabled value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <!-- Contact Number -->
      <label for="contactNumber">Contact Number</label>
      <input
        id="contactNumber"
        type="tel"
        placeholder="Contact Number"
        v-model="contactNumber"
        class="input-field"
        required
      />

      <!-- Date of Birth -->
      <label for="dob">Date of Birth</label>
      <input
        id="dob"
        type="date"
        v-model="dob"
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
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { auth } from '@/main';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const firstName = ref('');
const lastName = ref('');
const gender = ref('');
const contactNumber = ref('');
const dob = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

const register = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log('User Registered:', {
      firstName: firstName.value,
      lastName: lastName.value,
      gender: gender.value,
      contactNumber: contactNumber.value,
      dob: dob.value,
      email: email.value,
    });

    alert('Successfully registered!', userCredential.user);
    router.push('/');
  } catch (error) {
    console.error('Error:', error);
    alert(error.message);
  }
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
  gap: 20px;
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
  background-color: #002a5a;
}
</style>
