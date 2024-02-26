import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vehicles',
      name: 'vehicles general',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VehicleView.vue'),
      children: [
        {
          path: '',
          name: 'list vehicles',
          component: () => import('../components/VehicleList.vue')
        },
        {
          path: 'create',
          name: 'create vehicles',
          component: () => import('../components/VehicleForm.vue')
        },
        {
          path: ':id/edit',
          name: 'edit vehicle',
          component: () => import('../components/VehicleForm.vue')
        }
      ]
    },
    {
      path: '/drivers',
      name: 'drivers general',
      component: () => import('../views/DriverView.vue'),
      children: [
        {
          path: '',
          name: 'list drivers',
          component: () => import('../components/DriverList.vue')
        },
        {
          path: 'create',
          name: 'create drivers',
          component: () => import('../components/DriverForm.vue')
        },
        {
          path: ':id/edit',
          name: 'edit driver',
          component: () => import('../components/DriverForm.vue')
        }
      ]
    },
    {
      path: '/trips',
      name: 'trips general',
      component: () => import('../views/TripView.vue'),
      children: [
        {
          path: '',
          name: 'list trips',
          component: () => import('../components/TripList.vue')
        },
        {
          path: 'create',
          name: 'create trips',
          component: () => import('../components/TripForm.vue')
        }
      ]
    }
  ]
})

export default router
