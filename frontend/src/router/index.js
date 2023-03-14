import { createRouter, createWebHistory } from 'vue-router'
import { Role } from '../_helpers/role'

// make all paths and names lowercase for consistency
const routes = [
  {
    path: '/',
    name: 'dashboard',
    props: true,
    component: () => import('../components/homePage.vue')
  },
  {
    path: '/',
    props: true,
    component: () => import('../components/homePage.vue')
  },
  {

    path: '/intakeform',
    name: 'intakeform',
    props: true,
    component: () => import('../components/intakeForm.vue')
  },
  {
    path: '/findclient',
    name: 'findclient',
    component: () => import('../components/findClient.vue')
  },
  {
    path: '/updateclient/:id',
    name: 'updateclient',
    props: true,
    component: () => import('../components/updateClient.vue')
  },
  {
    path: '/eventform',
    name: 'eventform',
    component: () => import('../components/eventForm.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue'),
    meta: { guest: true }
  },
  {
    path: '/findevents',
    name: 'findevents',
    component: () => import('../components/findEvents.vue')
  },
  {
    path: '/eventdetails/:id',
    name: 'eventdetails',
    props: true,
    component: () => import('../components/eventDetails.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // ...
  // explicitly return false to cancel the navigation
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('user') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.authorize)) {
    if (JSON.parse(localStorage.getItem('user')).role == Role.Editor) {
      next()
    }
    else {
      next({ name: 'dashboard' })
    }
  }
  else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('user') == null) {
      next()
    }
    else {
      next({ name: 'dashboard' })
    }
  }
  else {
    next()
  }
  return false
})
export default router
