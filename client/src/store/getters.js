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
    }
  }

  export const productGetters = {
    allProducts: (state, getters) => {
        return state.products
    },
    productsByCompanyId: (state, getters) => {
        return state.products
    },
    
    productById: (state, getters) => productId => {
      console.log("The product id is = " + productId)
      if (getters.allProducts.length > 0) {
        return getters.allProducts.filter(product => product.id.toString() === productId)[0]  
      } else {
        return state.product
      }
    }
  }
