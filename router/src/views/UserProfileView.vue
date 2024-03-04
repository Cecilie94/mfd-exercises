<script setup>
import { ref } from "vue";

const userId = $route.params.id;
const user = ref(user);

function getUserById(userId) {
  return user.value[userId];
}

// import { useRoute, useRouter } from "vue-router";
// const route = useRoute();
// const router = useRouter();
// console.log(route);
</script>

<template>
  <div>
    <div class="user">
      <h1>User Profile</h1>
      <p>First Name: {{ user.firstname }}</p>
      <p>Last Name: {{ user.lastname }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
