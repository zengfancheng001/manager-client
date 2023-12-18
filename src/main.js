import * as ElementPlusIconVue from '@element-plus/icons-vue'
import 'normalize.css'
import './assets/css/index.less'
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
//从@element-plus中导入所有图标，并进行全局注册
for(const [key,component] of Object.entries(ElementPlusIconVue)) {
  app.component(key,component)
}

app.mount('#app')
