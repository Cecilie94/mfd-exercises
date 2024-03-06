<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";

const router = useRouter();
const productId = ref(null);
const products = ref([
  {
    id: 1,
    name: "Nike Dunk Panda",
    description: "Description for Nike Dunk Panda",
  },
  {
    id: 2,
    name: "Nike Jordan 1",
    description: "Description for Nike Jordan 1",
  },
  { id: 3, name: "Sketcher", description: "Description for Sketcher" },
]);

function addToCart() {
  // Funktion til at tilføje et produkt til kurven
  if (product.value) {
    // Kontroller om produktet er defineret
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    // Kontroller om produktet allerede er i kurven
    if (!isProductInCart(product.value.id)) {
      cartItems.push(product.value); // Tilføj produktet til kurven
      localStorage.setItem("cart", JSON.stringify(cartItems)); // Opdater cart i localStorage
    }
  }
}

function removeFromCart() {
  // Funktion til at fjerne et produkt fra kurven
  if (product.value) {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    // Fjerner produktet fra kurven baseret på produktets id
    cartItems = cartItems.filter((item) => item.id !== product.value.id);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    // Nulstil isProductInCart til false, så "Add to Cart" knappen bliver tilgængelig igen
    isProductInCart.value = false;
  }
}

function isProductInCart(productId) {
  // Funktion til at kontrollere om et produkt er i kurven
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  // Kontroller om kurven indeholder produktet baseret på produktets id
  return cartItems.some((item) => item.id === productId);
}

const product = ref(null);

onMounted(() => {
  productId.value = router.currentRoute.value.params.id;
  product.value = products.value.find(
    (item) => item.id === Number(productId.value)
  );
});
</script>

<template>
  <Navbar />
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <h2>hello</h2>
    <button @click="addToCart" :disabled="isProductInCart(product.id)">
      {{ isProductInCart(product.id) ? "Already in Cart" : "Add to Cart" }}
    </button>
    <button @click="removeFromCart" v-if="isProductInCart(product.id)">
      Remove from Cart
    </button>
    <router-link to="/" class="back-button">Go back</router-link>
  </div>
</template>
