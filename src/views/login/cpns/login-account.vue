<template>
  <div class="login-account">
    <el-form
      ref="userFormRef"
      label-width="60px" 
      :model="account" 
      :rules="rules" 
      status-icon
      >
      <el-form-item label="帐号" prop="name">
        <el-input  v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus';
import { loginRequest } from '../../../service/login/login';

// 1.定义响应式数据
const account = reactive({
  name: '',
  password: ''
})
const userFormRef = ref()

let rules = {
  name: [
    {
      required: true,message:'账号不能为空',trigger: 'blur'
    },
    {
      min:6,max:12,message: '请输入6-12位字符',trigger:'change'
    }
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "change",
    },
  ],
}

function loginAction() {
  userFormRef.value?.validate((valid) => {
    if (valid) {
      // 获取用户名和密码
      const name = account.name
      const password = account.password
      // 向服务器发送网络请求（携带用户名和密码）
      loginRequest({name,password}).then((res) => {
        console.log("服务器返回",res);
      })
      account
    } else {
      ElMessage.error('Oops,验证失败，请输入正确的格式后再试')
    }
  })
}

defineExpose({
  loginAction
})

</script>

<style scoped lang="less">

</style>