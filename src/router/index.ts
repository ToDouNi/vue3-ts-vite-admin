import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// RouteRecordRaw相当于一个insterface接口
const routes: RouteRecordRaw[] = [//路由规则
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),//路由模式
  routes
})
export default router