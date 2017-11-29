export const companyGetters = {

    allCompanies: (state, getters) => {
      return state.companies
    },

    productById: (state, getters) => id => {
      if (getters.allProducts.length > 0) {
        return getters.allProducts.filter(p => p._id === id)[0]
      } else {
        return state.product
      }
    },
    allManufacturers: state => {
      return state.manufacturers
    }
  }