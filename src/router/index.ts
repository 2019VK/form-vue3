import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Index/Index.vue') 
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register/Register.vue')
  },
  {
    path: '/usercenter',
    name: 'usercenter',
    component: () => import('../views/UserCenter/UserCenter.vue')
  },
  {
    path: '/createform',
    name: 'createform',
    component: () => import('../views/CreateForm/CreateForm.vue')
  },
  {
    path: '/formdetail',
    name: 'formdetail',
    component: () => import('../views/FormDetail/FormDetail.vue'),
    children: [
      {
        path: 'analysis',
        component: () => import('../components/formDetail/analysis.vue'),
      },
      {
        path: 'questions',
        component: () => import('../components/formDetail/question.vue'),
      },
      {
        path: 'share',
        component: () => import('../components/formDetail/share.vue'),
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
