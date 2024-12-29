<template>
  <div class="product-image">
    <img :src="mainImage" alt="Nike Air Force 1" class="main-image" />
    <div class="thumbnail-images">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :alt="`Thumbnail ${index + 1}`"
        class="thumbnail"
        @click="changeImage(image)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
      validator(value) {
        return value.length > 0;
      }
    },
    mainImage: {
      type: String,
      required: true
    }
  },
  methods: {
    changeImage(image) {
      if (image !== this.mainImage) {
        this.$emit('updateMainImage', image);
      }
    }
  }
};
</script>

<style scoped>
.product-image {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: 20px; 
}

.thumbnail-images {
  display: flex;
  gap: 10px; 
  justify-content: center; 
}

.thumbnail {
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.thumbnail:hover {
  border-color: #000;
}

.main-image {
  width: 300px;
  height: auto;
}
</style>
