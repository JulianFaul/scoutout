import Vue from 'vue'
import Router from 'vue-router'

import RegisterPage from '@/components/RegisterPage'
import LoginPage from '@/components/LoginPage'
import AdvertisementPage from '@/components/AdvertisementPage'
import ViewAdvertisement from '@/components/ViewAdvertisement'



import CompanyList from '@/components/company/CompanyList'
import CompanyDetails from '@/components/company/CompanyDetails'


import HomePage from '@/components/HelloWorld'

import UserProfile from '@/components/UserProfile'

import Dashboard from '@/components/admin/Dashboard'
import EditAdvertisement from '@/components/admin/EditAdvertisement'
import NewAdvertisement from '@/components/admin/NewAdvertisement'
import ViewAll from '@/components/admin/ViewAll'
import AllUsers from '@/components/admin/AllUsers'
import ViewProducts from '@/components/admin/ViewProducts'
import AddProduct from '@/components/admin/AddProduct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/companylist',
      name: 'companylist',
      component: CompanyList
    },
    {
      path: '/details/:id',
      name: 'details',
      component: CompanyDetails
    },









    {
      path: '/advertisements',
      name: 'root',
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
          path: 'view',
          name: 'viewAll',
          component: ViewAll
        },
        {
          path: 'edit/:advertisementId',
          name: 'edit',
          component: EditAdvertisement
        },
        {
         path: 'allUsers',
         name: 'allusers',
         component: AllUsers
        },
        {
          path:'products/:advertisementId',
          name: 'viewProducts',
          component: ViewProducts
        },
        {
          path:'newproduct/:advertisementId',
          name: 'newProducts',
          component: AddProduct
        }
        
      ]
    }
  ]
})
