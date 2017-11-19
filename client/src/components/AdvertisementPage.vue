<template>


<div>
    <h1>Advertisements</h1>
    <ul v-for="advertisement in advertisements" :key="advertisement.id">
       <li>{{advertisement.email}}</li>
        <li><img :src="advertisement.imageURL" style="width:150px;"></li>
        <li><a :href="advertisement.website" target="_blank">{{advertisement.website}}</a></li>
        <li>{{advertisement.address}}</li>
        <li>{{advertisement.category}}</li>
    </ul>

</div>

    <!-- <v-container grid-list-md text-xs-center fluid>
        <v-btn class="cyan"  @click="navigateTo({name:'create-ad'})" dark>Add new Advertisement</v-btn>
        <v-layout row wrap>

            <v-flex xs6 md4 v-for="advertisement in advertisements" :key="advertisement.id">
                <v-card color="white">
                    <v-toolbar flast dense class="grey" dark>
                        <v-toolbar-title>{{advertisement.companyName}}</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text class="px-0">
                         {{advertisement.contactDetails}}
                        <br> {{advertisement.email}}
                        <br> {{advertisement.logo}}
                        <br> {{advertisement.imageURL}}
                        <br> {{advertisement.website}}
                        <br> {{advertisement.address}}
                        <br> {{advertisement.category}}
                        <br>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container> -->

    <!-- <v-flex>
                <div class="white elevation-2">
                    <v-toolbar flast dense class="cyan" dark>
                        <v-toolbar-title>Adds</v-toolbar-title>
                    </v-toolbar>
                    <div class="pl-4 pr-4 pt-2 pb-2">
                        <div v-for="advertisement in advertisements" :key="advertisement.id">
                            {{advertisement.companyName}}
                        </div>
                    </div>
                </div>
            </v-flex> -->
</template>

<script>
import AdvertisementService from '@/services/AdvertisementService'
export default {
    name: 'advertisements',
    data() {
        return {
            advertisements: null
        }
    },
     methods:{
      navigateTo (route){
          this.$router.push(route)
      }
     },
    async mounted() {
        // Get all adds
        this.advertisements = (await AdvertisementService.getAllAdvertisements()).data
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
