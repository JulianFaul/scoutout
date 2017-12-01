<template>
  <div>
    <div class="products">
      <div class="container">
          hi
          {{products}}
        <!-- <template v-for="product in products" >
            Hi
        </template> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Product from './Product.vue'
  export default {
    name: 'Product',
    created () {
      if (this.products.length === 0) {
          this.$store.dispatch('productsByCompanyId',this.$route.params['id'])
      }
    
    },
    computed: {
      products () {
          return this.$store.getters.productsByCompanyId
      }
      
    }
  }
</script>