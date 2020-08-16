import Vue from 'vue'
import VueRouter from 'vue-router'
// import TabBar from '../components/tabbar/TabBar'
import NewsList from '../views/News/NewsList.vue'
import Newsdetails from '../views/News/Newsdetails.vue'
import categories from '../views/goods/category'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/newslist' },
  { path: '/newslist', component: NewsList },
  { path: '/newsdetails', component: Newsdetails },
  { path: '/category', component: categories }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
