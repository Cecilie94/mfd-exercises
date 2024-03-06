<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import SingleProduct from "./SingleProduct.vue";
import Navbar from "../components/Navbar.vue";

const products = ref([
  { id: 1, name: "Nike Dunk Panda", price: 10 },
  { id: 2, name: "Nike Jordan 1", price: 20 },
  { id: 3, name: "Sketcher", price: 30 },
]);
</script>

<!-- ProductList.vue -->
<template>
  <Navbar />
  <div class="product-list">
    <h2>Product List</h2>
    <div v-for="product in products" :key="product.id" class="product">
      <p>{{ product.name }}</p>
      <p>{{ product.price }}</p>
      <!-- Link til det enkelte produkt -->
      <router-link :to="{ name: 'singleproduct', params: { id: product.id } }">
        View Product
      </router-link>
    </div>
  </div>
</template>
