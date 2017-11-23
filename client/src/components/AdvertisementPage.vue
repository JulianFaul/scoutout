<template>
    <div>
        <h1>Your Likes</h1>
        <v-ons-row>
            <div style="width: 360px;" v-for="likedAdvertisement in likedAdvertisements" :key="likedAdvertisement.id">
                <v-ons-card style="height:300px;">
                    <img @click="navigateTo({name:'viewadvertisement',params:{advertisementId:likedAdvertisement.AdvertisementId}})" :src="likedAdvertisement.imageURL" style="width:100% ;margin: 0 auto;display: block;">
                    <div class="title">
                        <b>{{likedAdvertisement.companyName}}</b>
                    </div>
                    <div class="description">
                        {{likedAdvertisement.description}}
                    </div>
                    <div class="content">

                    </div>
                </v-ons-card>
            </div>
        </v-ons-row>
        <h1>More Ads</h1>
        <v-ons-col>
            <div style="width: 360px;float:left;" v-for="advertisement in advertisements" :key="advertisement.id">
                <v-ons-card style="height:300px;">
                    <img @click="navigateTo({name:'viewadvertisement',params:{advertisementId:advertisement.id}})" :src="advertisement.imageURL" style="width:100% ;margin: 0 auto;display: block;">
                    <div class="title">
                        <b>{{advertisement.companyName}}</b>
                    </div>
                    <div class="description">
                        {{advertisement.description}}
                    </div>
                    <div class="content">

                    </div>
                </v-ons-card>
            </div>
        </v-ons-col>
    </div>
</template>

<script>
import AdvertisementService from '@/services/AdvertisementService'
import AdvertisementLikeService from '@/services/AdvertisementLikeService'
import { mapState } from 'vuex'

export default {
    name: 'advertisements',
    data() {
        return {
            advertisements: null,
            isLiked: false,
            likedAdvertisements: null
        }
    },
    computed: {
        ...mapState([
            'isUserLoggedIn',
            'user'
        ])
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }

    },
    async mounted() {
        if (this.isUserLoggedIn) {
            try {
                this.likedAdvertisements = (await AdvertisementLikeService.getAllAdvertisementLikes({
                    userId: this.user.id
                })).data
            } catch (err) {
                console.log(err)
            }
        }
        try {
            this.advertisements = (await AdvertisementService.getAllAdvertisements()).data
        } catch (err) {
            console.log(err)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-card.card {
    position: relative;
}
</style>
