<template>
  <v-ons-col style="width: 350px; float:left;">

                <v-ons-card>
                    <!-- <img :src="company.imageURL" style="width:100% ;margin: 0 auto;display: block;">
                    <div class="title">
                        <b>{{company.companyName}}</b>
                    </div>
                    <div class="description">
                        {{company.description}}
                    </div>
                    <div class="content">
                    
                    </div> -->
                    <h1>{{company}}</h1>
                </v-ons-card>
    </v-ons-col>
</template>

<script>

  export default {
    props: ['company']
  }
</script>