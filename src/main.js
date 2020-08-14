import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入css公共样式
import './assets/css/normalize.css'
// 引入remjs
import 'amfe-flexible'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
