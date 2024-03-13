<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import { useProductStore } from "../stores/products.js";

const router = useRouter();
const store = useProductStore();
const productId = ref(null);
const product = ref(null);

function addToCart() {
  if (product.value) {
    // Add logic for adding product to cart
    // You can call methods from the store to manage the cart
  }
}

function removeFromCart() {
  if (product.value) {
    // Add logic for removing product from cart
    // You can call methods from the store to manage the cart
  }
}

const isProductInCart = ref(false); // You may need to implement this functionality

onMounted(() => {
  productId.value = router.currentRoute.value.params.id;
  product.value = store.getProductById(productId.value);
  // Implement logic to check if product is in cart and update isProductInCart accordingly
});
</script>

<template>
  <Navbar />
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <h2>hello</h2>
    <button @click="addToCart" :disabled="isProductInCart">
      {{ isProductInCart ? "Already in Cart" : "Add to Cart" }}
    </button>
    <button @click="removeFromCart" v-if="isProductInCart">
      Remove from Cart
    </button>
    <router-link to="/" class="back-button">Go back</router-link>
  </div>
</template>
