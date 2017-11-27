<template>
    <div style="margin-top:20px;">
        <div class="card viewCompanyCard">
            <img :src="advertisement.imageURL" style="width:150px;" />
            <h2 class="card__title">{{advertisement.companyName}}</h2>
            <div class="card__content">{{advertisement.description}}</div>
            <div>
                <a v-bind:href="url" target="_blank">{{advertisement.website}}</a>
            </div>
            <span v-if="isUserLoggedIn && adlike" class="favIcon_liked">
                <i @click="unlike" class="tab-bar__icon tab-bar--material__icon zmdi zmdi-favorite"></i>
            </span>
            <span v-if="isUserLoggedIn && !adlike" class="favIcon_unlike">
                <i @click="like" class="tab-bar__icon tab-bar--material__icon zmdi zmdi-favorite"></i>
            </span>
            <h1>Products Here</h1>
            <div v-for="product in products" :key="product">
                
                {{product.productName}}

            </div>
        </div>

    </div>
</template>

<script>
import AdvertisementService from '@/services/AdvertisementService'
import ProductService from '@/services/ProductService'
import AdvertisementLikeService from '@/services/AdvertisementLikeService'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            advertisement: null,
            url: null,
            adlike: null,
            products: null
        }
    },
    computed: {
        ...mapState([
            'isUserLoggedIn',
            'user'
        ])
    },
    methods: {
        async like() {
            try {
                this.adlike = (await AdvertisementLikeService.post({
                    advertisementId: this.advertisement.id,
                    userId: this.user.id
                })).data

            } catch (err) {
                console.log(err)
            }
        },
        async unlike() {
            console.log("unlike")
            try {
                await AdvertisementLikeService.delete(this.adlike.id)
                this.adlike = null
            } catch (err) {
                console.log(err)
            }
        }
    },
    watch: {
        async advertisement() {
            if (!this.isUserLoggedIn) {
                return
            }
            try {
                const advertisementLikes = (await AdvertisementLikeService.getAllAdvertisementLikes({
                    advertisementId: this.$store.state.route.params.advertisementId,
                    userId: this.user.id

                })).data
                if (advertisementLikes.length) {
                    this.adlike = advertisementLikes[0]
                }
            } catch (err) {
                console.log(err)
            }
        }
    },
    async mounted() {
        const advertisementId = this.$store.state.route.params.advertisementId
        this.advertisement = (await AdvertisementService.show(advertisementId)).data
        this.products = (await ProductService.getAllProducts({
            advertisement_id: advertisementId
        })).data

        this.url = this.advertisement.website
    }
}
</script>

<style scoped>
.viewCompanyCard {

    position: relative;
}


.favIcon_unlike i {
    color: #99d5cf;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
}

.favIcon_unlike i:hover {
    color: #009688;
}

.favIcon_liked i {
    color: #009688;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
}


ons-card.card {
    position: relative;
}
</style>
