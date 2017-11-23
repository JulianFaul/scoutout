<template>
    <div>
        <div>
            <img :src="advertisement.imageURL" style="width:100%;"/>
        </div>

    
            <div class="card viewCompanyCard">
                <h2 class="card__title">{{advertisement.companyName}}</h2>
                <div class="card__content">{{advertisement.description}}</div>
                <span v-if="isUserLoggedIn && adlike" class="favIcon_liked">
                    <i @click="unlike" class="tab-bar__icon tab-bar--material__icon zmdi zmdi-favorite"></i>
                </span>
                <span v-if="isUserLoggedIn && !adlike" class="favIcon_unlike">
                    <i  @click="like" class="tab-bar__icon tab-bar--material__icon zmdi zmdi-favorite"></i>
                </span>
            </div>
    
    <div class="companyDetails">
       {{advertisement.cellphoneNumber}}
    </div>
        
    </div>
   
</template>

<script>
import AdvertisementService from '@/services/AdvertisementService'
import AdvertisementLikeService from '@/services/AdvertisementLikeService'
import {mapState} from 'vuex'
export default {
    data() {
        return {
            advertisement: null,
            adlike: null
        }
    },
    computed:{
        ...mapState([
            'isUserLoggedIn',
            'user'
        ])
    },
    methods:{
         async like(){
          try{
             this.adlike = (await AdvertisementLikeService.post({
                    advertisementId: this.advertisement.id,
                    userId: this.user.id
              })).data
       
          }catch(err){
              console.log(err)
          } 
        },
        async unlike(){
            console.log("unlike")
          try{
              await AdvertisementLikeService.delete(this.adlike.id)
              this.adlike = null
          }catch(err){
              console.log(err)
          } 
        }
    },
    watch:{
        async advertisement(){
        if(!this.isUserLoggedIn){
            return
        }
        try{
            const advertisementLikes = (await AdvertisementLikeService.getAllAdvertisementLikes({
            advertisementId: this.$store.state.route.params.advertisementId,
            userId: this.user.id
       
        })).data
        if(advertisementLikes.length){
            this.adlike = advertisementLikes[0]
        }
        }catch(err){
            console.log(err)
        }
        }
    },
    async mounted() {
            const advertisementId = this.$store.state.route.params.advertisementId
        this.advertisement = (await AdvertisementService.show(advertisementId)).data
    }
}
</script>

<style scoped>
.viewCompanyCard {
    border-radius: 0px !important;
    position: relative;
    top: -65px;
    padding-top: 1px;
}

.companyDetails{
    position: relative;
    background-color: white;
    top: -52px;
    padding: 16px;
    margin-left: -15px;
    margin-right: -15px;
}
.favIcon_unlike i{
    color: #99d5cf;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
}
.favIcon_unlike i:hover{
    color: #009688;
}
.favIcon_liked i{
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
