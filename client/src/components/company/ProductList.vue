<template>
  <div>
    <div class="products">
      <div class="container">
        <ul class="list list--inset">
        <template v-for="product in products" >
            <product :product="product" :key="product.id"></product>
        </template>
        </ul>
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
    },
    components: {
      'product': Product
    }
  }
</script>