<template>
  <div class="product-details">
    <div class="description">
      <h2><Strong>Product Description</Strong></h2>
      <p>{{ description }}</p>
    </div>
    <div class="size-fit">
      <h3><strong>Size & Fit</Strong></h3>
      <p>{{ sizeFit }}</p>
    </div>
    <div class="review">
      <h2><strong>Review</Strong></h2>
      <blockquote>
        <p>{{ review }}</p>
        <cite>- {{ reviewer }}</cite>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    sizeFit: String,
    review: String,
    reviewer: { 
      type: String,
      default: 'Anonymous' 
    }
  }
};
</script>

<style scoped>
.product-details {
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1024px;
  width: 100%;
}

.description,
.size-fit,
.review {
  margin-top: 10px;
}

h2, h3 {
  margin-top: 10px;
}

.description p,
.size-fit p,
.review blockquote {
  margin-top: 10px;
}

.review {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 5px;
}
</style>
