<template>
  <div class="login-panel">
    <h1 class="title">综合后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="activeName">
      <el-tab-pane name="account">
      <!-- 标签插槽，固定格式 -->
        <template #label>
          <span>
            <el-icon><UserFilled /></el-icon> 帐号登录
          </span> 
        </template>
        <login-accout ref="accountRef" ></login-accout>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><Iphone /></el-icon> 手机登录
          </span>
        </template>
        <!-- <login-phone /> -->
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginBtnClick">立即登录</el-button>
  </div>
</template>

<script setup>
import { ref } from'vue'
import LoginAccout from "./login-account.vue";

const activeName = ref('account')
const accountRef = ref()

function handleLoginBtnClick() {
  if (activeName.value === "account") {
    accountRef.value.loginAction()
  } else {
    console.log('手机登录');
  }
}
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
