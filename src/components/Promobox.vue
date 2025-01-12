<template>
  <div class="promo-container">
    <!-- Sliding Promo Cards Section -->
    <div class="promo-cards-wrapper">
      <div class="promo-cards-slider-wrapper">
        <div class="promo-cards-slider" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <!-- Referral Code Card -->
          <div class="promo-card referral-card">
            <p class="promo-card-title">REFERRAL CODE</p>
            <p class="promo-card-text">
              Refer people and you both get 10% off your first purchase!!! &nbsp; <span class="promo-code">CODE: GICB</span>
            </p>
          </div>

          <!-- New Arrival Card -->
          <div class="promo-card new-arrival-card">
            <p class="promo-card-title">NEW ARRIVALS!!!</p>
            <p class="promo-card-text">Get up to 10% for newly imported goods!!! &nbsp; <span class="promo-code">CODE: ITC2024</span></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="headline">
          Welcome to SparkFoot<br />
          <span class="highlight">Shoes Collection</span>
        </h1>
        <p class="subtext">
          —where every step sparks something extraordinary. Discover a world of
          footwear designed to elevate your style, ignite your confidence, and
          keep you moving with energy.
        </p>
        <button class="shop-now-button" aria-label="Shop Now">
          Shop Now →
        </button>
      </div>
      <div class="hero-image-wrapper">
        <img
          class="sneaker-image"
          src="@/assets/images/landingshoes.png"
          alt="Sneaker"
        />
        <div class="circle-base"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromoBanner",
  data() {
    return {
      currentSlide: 0,
      totalSlides: 2, // Number of slides (cards)
      slideInterval: null,  
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
  methods: {
    startAutoSlide() {
      this.slideInterval = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides; // Loop slides
      }, 3000); // Change every 3 seconds
    },
    stopAutoSlide() {
      clearInterval(this.slideInterval);
    },
  },
};
</script>

<style scoped>
.promo-banner {
  background-color: #007f7f;
  padding: 15px 20px;
  text-align: center;
  color: white;
  font-family: Arial, sans-serif;
}

.promo-text {
  font-size: 1.2rem;
  line-height: 1;
}

.discount {
  font-size: 1.5rem;
  font-weight: bold;
}

.promo-code {
  font-weight: bold;
  text-decoration: underline;
}

.note {
  font-size: 0.9rem;
}

.promo-detail {
  font-size: 1rem;
  display: block;
}
.promo-cards-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #c7c7c7;
  color: white;
  position: relative;
  margin-top: 10px;
}

.promo-cards-slider-wrapper {
  overflow: hidden;
  flex: 1;
  display: flex;
}

.promo-cards-slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 200%;
}

.promo-card {
  flex: 0 0 100%;
  text-align: center;
  padding: 20px;
  background-color: #2780f5;
  border-radius: 5px;
}

.promo-card-title {
  font-size: 1.1rem;
  font-weight: bold;
}

.promo-card-text {
  font-size: 1rem;
  margin: 10px 0;
}

.promo-code {
  font-size: 1rem;
  font-weight: bold;
  color: #000000;
  background-color: #ffffff;
  padding: 5px 10px;
  border-radius: 5px;
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #ffffff 50%, #b8b8b8 50%);
  height: 80vh;
  width: 100%;
}

.hero-content {
  flex: 1;
  max-width: 50%;
  padding: 0 10%;
}

.headline {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  color: #000;
}

.highlight {
  color: #2754d1;
}

.subtext {
  font-size: 1.2rem;
  color: #555;
  margin: 20px 0;
  max-width: 450px;
}

.shop-now-button {
  background-color: #004cd8;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.shop-now-button:hover {
  background-color: #15a3db;
}

.hero-image-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.sneaker-image {
  width: 80%;
  max-width: 600px;
  height: auto;
  z-index: 2;
  position: absolute;
}

.circle-base {
  position: absolute;
  top: 190px;
  width: 70%;
  max-width: 500px;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 50%;
  z-index: 1;
}
</style>
