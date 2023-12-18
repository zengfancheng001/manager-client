<template>
  <div class="login">
   <login-panel></login-panel>
  </div>
</template>

<script setup>
import { loginPanel } from '../login/cpns/loginPanel'

</script>

<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>