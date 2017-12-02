import Vue from 'vue'
import Router from 'vue-router'

import RegisterPage from '@/components/RegisterPage'
import LoginPage from '@/components/LoginPage'
import AdvertisementPage from '@/components/AdvertisementPage'
import ViewAdvertisement from '@/components/ViewAdvertisement'



import Home from '@/pages/Home'
import Details from '@/pages/Details'
import ProductInfo from '@/pages/ProductInfo'

// Admin
import Index from '@/pages/Admin/Index'
import Companies from '@/pages/Admin/Companies'
import New from '@/pages/Admin/New'
import Edit from '@/pages/Admin/Edit'
import Products from '@/pages/Admin/Products'

import HomePage from '@/components/HelloWorld'

import UserProfile from '@/components/UserProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'root',
      component: Home
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details
    },
    {
      path: '/product/:productId',
      name: 'product',
      component: ProductInfo
    },








    {
      path: '/advertisements',
      name: 'sdsadsad',
      component: AdvertisementPage
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
    },

    {
      path: '/advertisements/:advertisementId',
      name: 'viewadvertisement',
      component: ViewAdvertisement
    },
    {
      path: '/userprofile',
      name: 'userprofile',
      component: UserProfile

    },
    {
      path: '/admin',
      component: Index,
      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Companies',
          component: Companies
        },
        {
          path: '/products/:id',
          name: 'products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    }
  ]
})
