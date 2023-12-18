<script setup>

</script>

<template>
  <div class="app">
  <h2>app</h2>
  <router-link to="main">main</router-link>
  <router-link to="login">login</router-link>

  <router-view></router-view>

  </div>
</template>

<style scoped>
  .app {
    background-color: gray;
    width: 100vw;
    height: 100vh;
  }
</style>
