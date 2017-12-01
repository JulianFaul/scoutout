<template>
    <v-ons-col>
         
                <v-ons-card>
                    <div class="title">
                        <b>{{product}}</b>
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