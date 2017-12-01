<template>
  <v-ons-col style="width: 350px; float:left;">
                <v-ons-card>
                  <h1>{{company.companyName}}</h1>
                  <product-list></product-list>
                </v-ons-card>
    </v-ons-col>
</template>

<script>
    import ProductList from './ProductList'
    export default {
      name:"company-details",
      props: ['company'],
      components:{
        "product-list" : ProductList
      }
    }
</script>