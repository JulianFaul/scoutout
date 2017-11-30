<template>
    <v-ons-col style="width: 350px; float:left;">
            <router-link :to="'/details/'+ company.id" class="company-link">
                <v-ons-card>
                    <img :src="company.imageURL" style="width:100% ;margin: 0 auto;display: block;">
                    <div class="title">
                        <b>{{company.companyName}}</b>
                    </div>
                    <div class="description">
                        {{company.description}}
                    </div>
                    <div class="content">
                      <!-- <template v-for="company in companies">
                        {{company}}
                    </template> -->
                    </div>
                </v-ons-card>
            </router-link>
    </v-ons-col>
</template>

<script>
  export default {
    name: 'company-item',
    props: ['company']
  }
</script>