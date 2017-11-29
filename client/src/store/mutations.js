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
    ERROR_MSG
  } from './mutation-types'
  
  export const companyMutations = {
    [ALL_COMPANYS] (state) {
      state.showLoader = true
      // this[]
    },
    [ALL_COMPANYS_SUCCESS] (state, payload) {
      state.showLoader = false
      state.companies = payload
    },
    [COMPANY_BY_ID] (state) {
      state.showLoader = true
    },
    [COMPANY_BY_ID_SUCCESS] (state, payload) {
      state.showLoader = false
      state.product = payload
    },
    [ADD_COMPANY]: (state, payload) => {
      state.showLoader = true
    },
    [ADD_COMPANY_SUCCESS]: (state, payload) => {
      state.showLoader = false
      state.products.push(payload)
    },
    [UPDATE_COMPANY]: (state, payload) => {
      state.showLoader = true
    },
    [UPDATE_COMPANY_SUCCESS]: (state, payload) => {
      state.showLoader = false
      state.products = state.products.map(p => {
        if (p._id === payload._id) {
          payload = {...payload, manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer)[0]}
          return payload
        }
        return p
      })
    },
    [REMOVE_COMPANY]: (state, payload) => {
      state.showLoader = true
    },
    [REMOVE_COMPANY_SUCCESS]: (state, payload) => {
      state.showLoader = false
      const index = state.products.findIndex(p => p._id === payload)
      console.debug('index', index)
      state.products.splice(index, 1)
    },
    [ERROR_MSG] (state, payload) {}
  }