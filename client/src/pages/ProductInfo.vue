<template>
  <div>
    <product-details :product="product" ></product-details>
  </div>
</template>

<script>
  import ProductDetails from '../components/company/ProductDetails'
  export default {
    created () {
    if (!this.product.productName) {
        this.$store.dispatch('productById', this.$route.params['productId'])
      }
      
    },
    computed: {
      product () {
        return this.$store.getters.productById(this.$route.params['productId'])
      }
    },
    components: {
      'product-details': ProductDetails,
    }
    
  }
</script>