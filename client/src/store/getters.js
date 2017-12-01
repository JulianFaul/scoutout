export const companyGetters = {

    allCompanies: (state, getters) => {
      console.log("compa " + state.companies.length)
      return state.companies
    },

    companyById: (state, getters) => id => {
      if (getters.allCompanies.length > 0) {
        return getters.allCompanies.filter(c => c.id.toString() === id)[0]  
      } else {
        return state.company
      }
    }
  }

  export const productGetters = {
    allProducts: (state, getters) => {
        return state.products
    },
    productsByCompanyId: (state, getters) => {
      console.log("product " + state.products.length)
        return state.products
    }
  }