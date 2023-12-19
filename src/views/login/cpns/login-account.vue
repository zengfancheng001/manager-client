<template>
  <div class="login-account">
    <el-form
      ref="userFormRef"
      label-width="60px" 
      :model="account" 
      :rules="rules" 
      status-icon>
      <el-form-item label="帐号" prop="userName">
        <el-input  v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="userPwd">
        <el-input type="password" v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
// 1.定义响应式数据
const account = reactive({
  name: '',
  password: ''
})

let rules = {
  userName: [
    {
      required: true,message:"账号不能为空",trigger: "blur"
    },
    {
      min:6,max:12,message: "请输入6-12位字符",trigger:'blur'
    }
  ],
  userPwd: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
  ],
}

const userFormRef = ref()
</script>

<style scoped lang="less">

</style>