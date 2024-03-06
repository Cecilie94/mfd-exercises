<script>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Cart from "../components/Cart.vue";
</script>

<template>
  <Navbar />
  <div>
    <h1>This is your cart</h1>
  </div>
  <div>
    <Cart />
  </div>
</template>
