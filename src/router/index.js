import Vue from 'vue'
import VueRouter from 'vue-router'
import TabBar from '../components/tabbar/TabBar'
import NewsList from '../components/News/NewsList.vue'
import Newsdetails from '../components/News/Newsdetails.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: TabBar },
  { path: '/newslist', component: NewsList },
  { path: '/newsdetails', component: Newsdetails }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
