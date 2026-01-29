import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('@/views/Home.vue')
},
  {
    path: '/work',
    name: 'Work',
    component: () => import('@/views/Work.vue')
//  },
  //{
  //  path: '/:pathMatch(.*)*',
//    name: 'NotFound',
  //  component: () => import('@/pages/NotFound.vue')
  }]

const router = createRouter( {
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router