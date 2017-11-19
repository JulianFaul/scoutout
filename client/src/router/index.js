import Vue from 'vue'
import Router from 'vue-router'

import RegisterPage from '@/components/RegisterPage'
import LoginPage from '@/components/LoginPage'
import AdvertisementPage from '@/components/AdvertisementPage'
import CreateAdvertisement from '@/components/CreateAdvertisement'
import HomePage from '@/components/HelloWorld'


import Dashboard from '@/components/admin/Dashboard'
import EditAdvertisement from '@/components/admin/EditAdvertisement'
import NewAdvertisement from '@/components/admin/NewAdvertisement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HomePage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/advertisements',
      name: 'advertisements',
      component: AdvertisementPage
    }
    ,
    {
      path: '/advertisements/create',
      name: 'create-ad',
      component: CreateAdvertisement
    },
    {
      path: '/admin',
      name: 'admin',

      // Parent routes still has a component
      component: Dashboard,

      // Child routes
      children: [
        {
          path: 'new',
          name: 'new',
          component: NewAdvertisement
        },
        {
          path: 'edit/:id',
          name: 'edit',
          component: EditAdvertisement
        }
      ]
    }
  ]
})
