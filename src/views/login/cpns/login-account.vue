<template>
  <div class="login-account">
    <el-form label-width="60px" :model="account" ref="fomRefs">
      <el-form-item label="账号">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
</script>

<style scoped lang="less">

</style>