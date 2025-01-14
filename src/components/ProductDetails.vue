<template>
  <div class="product-details">
    <div class="description">
      <h2><strong>Product Description</strong></h2>
      <p>{{ description }}</p>
    </div>
    <div class="size-fit">
      <h3><strong>Size & Fit</strong></h3>
      <p>{{ sizeFit }}</p>
    </div>
    <div class="reviews">
      <h2><strong>Reviews</strong></h2>
      <ul>
        <li v-if="review">
          "{{ review }}" - <em>{{ reviewer }}</em>
        </li>
        <li v-for="(userReview, index) in userReviews" :key="index">
          "{{ userReview.text }}" - <em>{{ userReview.reviewer }}</em>
        </li>
      </ul>
      <div class="add-review">
        <h3>Add Your Review:</h3>
        <div>
          <textarea v-model="newReviewText" placeholder="Write your review..."></textarea>
          <input
            v-model="newReviewer"
            type="text"
            placeholder="Your name"
          />
          <button @click="submitReview">Submit</button>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>
      </div>
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
  },
  data() {
    return {
      newReviewText: '',
      newReviewer: '',
      userReviews: [],
      errorMessage: '',
    };
  },
  methods: {
    submitReview() {
      if (!this.newReviewText || !this.newReviewer) {
        this.errorMessage = 'Please fill out both the review and your name.';
      } else {
        this.userReviews.push({
          text: this.newReviewText,
          reviewer: this.newReviewer,
        });
        this.newReviewText = '';
        this.newReviewer = '';
        this.errorMessage = '';
      }
    },
  },
};
</script>

<style scoped>
.product-details {
  margin: 20px auto;
  max-width: 1024px;
  width: 100%;
}

.reviews {
  margin-top: 20px;
}

.add-review {
  margin-top: 20px;
}

textarea {
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="text"] {
  width: calc(100% - 22px);
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background: #555;
}

.reviews ul {
  list-style: none;
  padding: 0;
}

.reviews li {
  margin: 10px 0;
}

.error-message {
  color: red;
  margin-top: 10px;
  font-size: 14px;
}
</style>
