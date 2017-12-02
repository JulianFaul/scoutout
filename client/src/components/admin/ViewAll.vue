<template>
    <ul class="list">
        <li  v-for="advertisement in advertisements" :key="advertisement.id" class="list__item">
            <div class="list__item__left">
                <img class="list__item__thumbnail" :src="advertisement.imageURL" alt="">
            </div>

            <div class="list__item__center">
                <div class="list__item__title">{{advertisement.companyName}}</div>
                <div class="list__item__subtitle">{{advertisement.description}}</div>
            </div>
            <div class="list__item__right">
                    <ons-button @click="navigateTo({name:'viewProducts',params:{advertisementId:advertisement.id}})" modifier="small--cta " class="button button--material">View Products</ons-button>
            </div>
            <div class="list__item__right">
                    <ons-button  @click="navigateTo({name:'newProducts',params:{advertisementId:advertisement.id}})" modifier="small--cta " class="button button--material">Add Product</ons-button>
            </div>
            <div class="list__item__right">
                    <ons-button @click="deleteAdvertisement(advertisement.id)" modifier="small--cta " class="button button--material">Delete</ons-button>
            </div>
            <div class="list__item__right">
                    <ons-button @click="navigateTo({name:'edit',params:{advertisementId:advertisement.id}})" modifier="small--cta " class="button button--material">Edit</ons-button>
            </div>
        </li>
    </ul>
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
    async mounted() {
        // Get all adds
        this.advertisements = (await AdvertisementService.getAllAdvertisements()).data
    },
    methods:{
    navigateTo (route) {
            this.$router.push(route)
        },
   async deleteAdvertisement(advertisementid){
         try{
              await AdvertisementService.delete(advertisementid)
              this.$router.push({
              name:"viewAll"
          })
          }catch(err){
              console.log(err)
          }
    }
    }
      
}
</script>

<style scoped>

</style>