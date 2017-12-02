<template>
  <div>

    <h1>{{company.companyName}}</h1>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from './ProductList'
export default {
  name: "company-details",
  props: ['company'],
  components: {
    "product-list": ProductList
  }
}
</script>