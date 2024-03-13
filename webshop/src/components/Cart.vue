<script setup>
import { ref } from "vue";
import Navbar from "./Navbar.vue";
import { useProductStore } from "../stores/products.js";

const cartItems = ref(JSON.parse(localStorage.getItem("cart")) || []);

function removeItem(id) {
  cartItems.value = cartItems.value.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cartItems.value));
}
</script>

<template>
  <Navbar />
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - ${{ item.price }}
        <button @click="removeItem(item.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>
