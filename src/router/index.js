import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Fav from '../views/Fav.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
  {
    path: '/fav',
    name: 'Fav',
    component: Fav
  }]

const router = createRouter( {
  history: createWebHistory(),
  routes
})

export default router