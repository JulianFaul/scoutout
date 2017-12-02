import axios from 'axios'
import {API_BASE} from '../config'

import {
  ADD_COMPANY,
  ADD_COMPANY_SUCCESS,
  COMPANY_BY_ID,
  COMPANY_BY_ID_SUCCESS,
  UPDATE_COMPANY,
  UPDATE_COMPANY_SUCCESS,
  REMOVE_COMPANY,
  REMOVE_COMPANY_SUCCESS,
  ALL_COMPANYS,
  ALL_COMPANYS_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_BY_COMPANY_ID_SUCCESS,
  ALL_PRODUCTS_BY_COMPANY_ID,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS 
} from './mutation-types'


export const companyActions = {
  allCompanies ({commit},) {
    commit(ALL_COMPANYS)
    axios.get(`${API_BASE}/companies`).then(response => {
      commit(ALL_COMPANYS_SUCCESS, response.data)
    })
  },
  companyById ({commit}, payload) {
    commit(COMPANY_BY_ID)
    axios.get(`${API_BASE}/companies/${payload}`).then(response => {
      
      commit(COMPANY_BY_ID_SUCCESS, response.data)
    })
  },
  addProduct ({commit}, payload) {
    commit(ADD_COMPANY)
    axios.post(`${API_BASE}/advertisements`, payload).then(response => {
      commit(ADD_COMPANY_SUCCESS, response.data)
    })
  },
  updateProduct ({commit}, payload) {
    commit(UPDATE_COMPANY)
    axios.put(`${API_BASE}/advertisements/${payload._id}`, payload).then(response => {
      commit(UPDATE_COMPANY_SUCCESS, response.data)
    })
  },
  removeProduct ({commit}, payload) {
    commit(REMOVE_COMPANY)
    axios.delete(`${API_BASE}/advertisements/${payload}`, payload).then(response => {
      console.debug('response', response.data)
      commit(REMOVE_COMPANY_SUCCESS, response.data)
    })
  }
}

export const productActions = {
  // allProducts ({commit}) {
  //   commit(ALL_PRODUCTS)
  //   axios.get(`${API_BASE}/products`).then(response => {
  //     commit(ALL_PRODUCTS_SUCCESS, response.data)
  //   })
  // },
  productsByCompanyId ({commit}, payload) {
    commit(ALL_PRODUCTS_BY_COMPANY_ID)
    axios.get(`${API_BASE}/product/?advertisement_id=${payload}`)
    .then(response => {
      commit(ALL_PRODUCTS_BY_COMPANY_ID_SUCCESS, response.data)
    })
  },
  productById ({commit}, payload) {
    commit(PRODUCT_BY_ID)
    axios.get(`${API_BASE}/product/${payload}`).then(response => {
      console.log("this is the payload " + payload)
      commit(PRODUCT_BY_ID_SUCCESS, response.data)
    })
  },
}