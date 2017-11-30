export const companyGetters = {

    allCompanies: (state, getters) => {
      return state.companies
    },

    companyById: (state, getters) => id => {
      if (getters.allCompanies.length > 0) {
        return getters.allCompanies.filter(c => c.id.toString() === id)[0]  
      } else {
        return state.company
      }
    },
    allProducts: state => {
      return state.products
    }
  }

  export const productGetters = {
    allProducts: state => state.products
  }