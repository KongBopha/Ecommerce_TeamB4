<template>
    <div class="user-info">
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        class="input-field"
      />
  
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        class="input-field"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "UserInfo",
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
  