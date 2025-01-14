<template>
  <div class="product-info">
    <h1 class="product-title">{{ title }}</h1>
    <p class="product-price">{{ price }}</p>
    <div class="product-color">
      <p>COLOUR</p>
      <div class="color-options">
        <div
          v-for="color in colors"
          :key="color"
          class="color"
          :class="{ selected: selectedColor === color }"
          :style="{ background: color }"
          @click="selectColor(color)"
          :aria-label="`Select color ${color}`"
        ></div>
      </div>
    </div>
    <div class="product-size">
      <p>SIZE</p>
      <div class="size-options">
        <button
          v-for="size in sizes"
          :key="size"
          class="size"
          :aria-label="`Select size ${size}`"
          :class="{ selected: selectedSize === size }"
          @click="selectSize(size)"
        >
          {{ size }}
        </button>
      </div>
    </div>
    <router-link to="/checkout"><button class="add-to-cart">Add to Cart</button></router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    price: String,
    color: String,
    description: String,
    sizeFit: String,
    review: String,
    colors: Array,
    sizes: Array,
  },
  data() {
    return {
      selectedColor: this.color,
      selectedSize: null,
    };
  },
  methods: {
    selectColor(color) {
      this.selectedColor = color;
      this.$emit('colorSelected', color);
    },
    selectSize(size) {
      this.selectedSize = size;
    }
  }
};
</script>

<style scoped>
.product-info {
  margin-left: 23px;
}

.product-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-price {
  font-size: 20px;
  color: #555;
  margin-bottom: 20px;
}

.color-options {
  display: flex;
  gap: 10px;
}

.color {
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.color.selected {
  border: 2px solid #000;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.size-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 300px;
}

.size {
  width: 50px;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
}

.size:hover {
  border-color: #000;
}

.size.selected {
  border: 2px solid #000;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.add-to-cart {
  padding: 10px 20px;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 30px;
}

.add-to-cart:hover {
  background: #555;
}
</style>