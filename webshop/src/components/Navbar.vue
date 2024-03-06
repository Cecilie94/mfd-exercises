<script>
import { defineComponent, computed } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  components: {
    RouterLink,
  },
  computed: {
    cartItemCount() {
      // Here you can fetch the count of items in the cart from your state management system
      return 0; // Placeholder, replace with actual count
    },
  },
});
</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Products</router-link></li>
      <li>
        <router-link to="/cart"
          >View Cart ({{ cartItemCount }})
          <font-awesome-icon class="fa-cs" icon="fa-solid fa-cart-shopping"
        /></router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #333;
  padding: 10px 20px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  margin-right: 20px;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
