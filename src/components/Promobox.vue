<template>
  <div class="promo-container">
    <!-- Left Section: Promo Cards -->
    <div class="promo-cards">
      <!-- New Arrival Card -->
      <div class="card">
        <h3 class="title">New Arrivals!!!</h3>
        <p>Get up to 10% for newly imported goods!!!</p>
        <button
          class="get-code-button"
          @click="showCode('newArrivalCode')"
          aria-label="Get New Arrival Code"
        >
          Get Code here
        </button>
        <img
          class="icon"
          src="@/assets/images/newarrivalicon.jpg"
          alt="New Arrival Icon"
        />
      </div>

      <!-- Referral Code Card -->
      <div class="card">
        <h3 class="title">Referral Code</h3>
        <p>Refer people and you both get 10% off first purchase!!!</p>
        <button
          class="get-code-button"
          @click="showCode('referralCode')"
          aria-label="Get Referral Code"
        >
          Get Code here
        </button>
        <img
          class="icon"
          src="@/assets/images/referral.png"
          alt="Referral Icon"
        />
      </div>
    </div>

    <!-- Center Section: Sneaker Image -->
    <div class="sneaker-image-wrapper">
      <img
        class="sneaker-image"
        src="@/assets/images/Sneaker.jpg"
        alt="Sneaker"
      />
    </div>

    <!-- Popup -->
    <div v-if="showPopup" class="popup">
      <p>{{ code }}</p>
      <button
        class="close-button"
        @click="hidePopup"
        aria-label="Close Popup"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Promobox",
  data() {
    return {
      showPopup: false,
      code: "",
    };
  },
  methods: {
    showCode(codeType) {
      this.showPopup = true;
      if (codeType === "newArrivalCode") {
        this.code = 'Your code is "ITC2024"';
      } else if (codeType === "referralCode") {
        this.code = 'Your code is "GICB"';
      }
    },
    hidePopup() {
      this.showPopup = false;
    },
  },
};
</script>

<style scoped>
.promo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.promo-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 300px;
}

.card {
  background-color: grey;
  border: 1px solid grey;
  padding: 20px;
  border-radius: 10px;
  color: white;
  position: relative;
  right: 200px;
}

.title {
  font-size: 20px;
  margin-bottom: 10px;
}

.icon {
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
  background-color: white;
}

.get-code-button {
  background-color: white;
  color: grey;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.get-code-button:hover {
  background-color: lightgrey;
  color: black;
}

.sneaker-image-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sneaker-image {
  max-width: 400px;
  height: auto;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: lightgrey;
  padding: 20px;
  border-radius: 10px;
  z-index: 100;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.close-button {
  background-color: grey;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
