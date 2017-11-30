<template>
  <v-ons-col style="width: 350px; float:left;">
                <v-ons-card>
                  <h1>{{company.companyName}}</h1>
                    <div v-for="companyProduct in company.Products" :key="company.id">
                      {{companyProduct.productName}}
                    </div>
                </v-ons-card>
    </v-ons-col>
</template>

<script>

  export default {
    name:"company-details",
    props: ['company']
  }
</script>