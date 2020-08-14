import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入css公共样式
import './assets/css/normalize.css'
// 引入remjs
import 'amfe-flexible'

import Vant from 'vant'
import 'vant/lib/index.css'

import moment from 'moment'

import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'http://api.cms.liulongbin.top'

Vue.use(Vant)

Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.filter('dateFormat', function (value, format) {
  return moment(value).format(format)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
