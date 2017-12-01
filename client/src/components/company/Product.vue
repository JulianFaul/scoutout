<template>
    <v-ons-col>
         
                <v-ons-card>
                    <div class="title">
                         <router-link :to="'/details/'+ product.id" class="company-link">
                        <b>{{product}}</b>
                         </router-link>
                    </div>
                </v-ons-card>
         
    </v-ons-col>
</template>

<script>
  export default {
    name: 'product-item',
    // the prop comes from productList
    props: ['product']
  }
</script>