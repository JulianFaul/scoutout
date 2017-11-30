<template>
  <v-ons-col style="width: 350px; float:left;">

                <v-ons-card>
                    <h1>{{company}}</h1>
                </v-ons-card>
    </v-ons-col>
</template>

<script>

  export default {
    name:"company-details",
    props: ['company']
  }
</script>