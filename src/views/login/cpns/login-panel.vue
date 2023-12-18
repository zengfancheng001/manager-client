<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
  <el-tabs type="border-card" stretch>
    <el-tab-pane>
      <template #label>
        <span>
          <el-icon><UserFilled /></el-icon>账号登录
        </span>
      </template>
    </el-tab-pane>
    <!-- <login-account></login-account> -->
    <el-tab-pane>
      <template #label>
        <span>
          <el-icon><Iphone /></el-icon>手机登录
        </span>
      </template>
    </el-tab-pane>
  </el-tabs>

  <div class="account-control">
    <el-checkbox v-model="isKeepPasswrd">记住密码</el-checkbox>
    <el-link type="primary">忘记密码</el-link>
  </div>

  <el-button type="primary" class="login-btn" @click="handleLoginClick">立即登录</el-button>

  </div>
</template>

<script setup>
import LoginAccount from './login-account.vue'
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;
  .title {
    text-align: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>