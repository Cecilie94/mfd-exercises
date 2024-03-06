<script setup>
import { defineComponent, computed } from "vue";
import { RouterLink } from "vue-router";
import Navbar from "./Navbar.vue";

const cartItems = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];
</script>

<template>
  <Navbar />
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - ${{ item.price }}
      </li>
    </ul>
  </div>
</template>
