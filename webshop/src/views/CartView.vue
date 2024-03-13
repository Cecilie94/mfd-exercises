<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Cart from "../components/Cart.vue";
import { useProductStore } from "../stores/products.js";
</script>

<template>
  <Navbar />
  <div>
    <Cart />
  </div>
</template>
