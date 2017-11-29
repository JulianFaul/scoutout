<template>
  <div>
    <div class="products">
      <div class="container">
        <template v-for="product in products">
                {{product}}
        </template>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'product-list',
    created () {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts')
      }
    },
    computed: {
      products () {
        return this.$store.getters.allProducts
      }
    },
    data () {
      return {
      }
    }
  }
</script>

<style>
  .products {
    background: #F7F8FB;
    padding: 30px 0;
  }
</style>