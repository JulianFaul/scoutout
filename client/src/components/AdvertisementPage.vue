<template>
    <div>
        <input type="search" value="" placeholder="Search" class="search-input" v-model="search">
        <div style="margin-top:40px;">
        <h1>Your Likes</h1>
        <v-ons-row>
            <div @click="navigateTo({name:'viewadvertisement',params:{advertisementId:likedAdvertisement.AdvertisementId}})" style="width: 335px;" v-for="likedAdvertisement in likedAdvertisements" :key="likedAdvertisement.id">
                <v-ons-card class="ad" style="height:300px;">
                    <img :src="likedAdvertisement.imageURL" style="width:100% ;margin: 0 auto;display: block;">
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
            <div @click="navigateTo({name:'viewadvertisement',params:{advertisementId:advertisement.id}})" style="width: 335px;float:left;" v-for="advertisement in advertisements" :key="advertisement.id">
                <v-ons-card class="ad" style="height:300px;">
                    <img :src="advertisement.imageURL" style="width:100% ;margin: 0 auto;display: block;">
                    <div class="title">
                        <b>{{advertisement.companyName}}</b>
                    </div>
                    <div class="description">
                        {{advertisement.description}}
                    </div>
                    <div class="content">
                      <template v-for="company in companies">
                        {{company}}
                    </template>
                    </div>
                </v-ons-card>
            </div>
        </v-ons-col>
        </div>
    </div>
</template>

<script>
import AdvertisementService from '@/services/AdvertisementService'
import AdvertisementLikeService from '@/services/AdvertisementLikeService'
import _ from 'lodash'
import { mapState } from 'vuex'

export default {
    name: 'advertisements',
    created () {
      if (this.companies.length === 0) {
        this.$store.dispatch('allCompanies')
      }
    },
    data() {
        return {
            advertisements: null,
            isLiked: false,
            likedAdvertisements: null,
            search:""
        }
    },
    computed: {
        ...mapState([
            'isUserLoggedIn',
            'user'
        ]),
         companies () {
        return this.$store.getters.allCompanies
      }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }

    },
    watch:{
        search: _.debounce(async function(value){
            const route = {
                name: 'root'
            }
            if(this.search !== ''){
                route.query ={
                    search: this.search
                }
            }
            this.$router.push(route)
        },700),
        '$route.query.search': {
            immediate:true,
            async handler(value){
                this.search = value,
                this.advertisements = (await AdvertisementService.getAllAdvertisements(value)).data
            }
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
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-card.card {
    position: relative;
}
.ad:hover{
    cursor: pointer;
}

input[type="search"].search-input::-webkit-search-cancel-button {
  -webkit-appearance: none;
  display: none;
}
.search-input {
    position: fixed;
    z-index: 10;
    /* left: 0; */
    width: 100% !important;
    right: 0;
    left: 0;
    display: block;
       top: 44px;
    /* margin: 5% auto; */
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  background: transparent;
  border: none;
  line-height: normal;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  vertical-align: top;
  outline: none;
  line-height: 1;
  font-family: -apple-system, 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 17px;
  -webkit-appearance: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 31px;
  font-size: 15px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #1f1f21;
  padding: 4px 0 0 28px;
  /* -webkit-border-radius: 4px;
  border-radius: 4px; */
  border-radius: 0px !important;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDFweCcgaGVpZ2h0PSc0MHB4JyB2aWV3Qm94PScwIDAgNDEgNDAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPjx0aXRsZT5TbGljZSAxPC90aXRsZT48ZGVzY3JpcHRpb24+Q3JlYXRlZCB3aXRoIFNrZXRjaCAoaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoKTwvZGVzY3JpcHRpb24+PGRlZnM+PC9kZWZzPjxnIGlkPSdQYWdlIDEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPjxnIGlkPSdzZWFyY2gnIGZpbGw9JyNDNkM4QzgnPjxwYXRoIGQ9J00wLjUwNCwxNi4zMzggQzAuNTA0LDI1LjA4NSA3LjYzNSwzMi4xNjUgMTYuNDQ0LDMyLjE2NSBDMjUuMjQsMzIuMTY1IDMyLjM4MiwyNS4wODUgMzIuMzgyLDE2LjMzOCBDMzIuMzgyLDcuNTkxIDI1LjI0LDAuNSAxNi40NDQsMC41IEM3LjYzNSwwLjUgMC41MDQsNy41OTEgMC41MDQsMTYuMzM4IEwwLjUwNCwxNi4zMzggWiBNNS41NTUsMTYuMzM4IEM1LjU1NSwxMC4zNTkgMTAuNDIzLDUuNTIxIDE2LjQ0NSw1LjUyMSBDMjIuNDU1LDUuNTIxIDI3LjMzMywxMC4zNiAyNy4zMzMsMTYuMzM4IEMyNy4zMzMsMjIuMzE3IDIyLjQ1NSwyNy4xNTYgMTYuNDQ1LDI3LjE1NiBDMTAuNDIzLDI3LjE1NiA1LjU1NSwyMi4zMTYgNS41NTUsMTYuMzM4IEw1LjU1NSwxNi4zMzggWiBNMjcuNjY2LDMwLjg2MSBMMzQuNTIxLDM4LjY3IEMzNS42MjUsMzkuNzcyIDM2LjMzOCwzOS43ODEgMzcuNDYsMzguNjcgTDM5LjY2MSwzNi40ODkgQzQwLjc0MywzNS40MDggNDAuODExLDM0LjcxMSAzOS42NjEsMzMuNTY4IEwzMS43NjUsMjYuNzkzIEwyNy42NjYsMzAuODYxIEwyNy42NjYsMzAuODYxIFogTTI3LjY2NiwzMC44NjEnIGlkPSdTaGFwZSc+PC9wYXRoPjwvZz48L2c+PC9zdmc+");
  background-position: 8px center;
  background-repeat: no-repeat;
  -webkit-background-size: 17px;
  background-size: 17px;
  font-weight: 400;
  display: block;
  width: 100%;
}
.search-input:focus {
  background-color: #f9f9f9;
  color: #1f1f21;
  border: 1px solid #ccc;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.search-input::-webkit-search-cancel-button,
.search-input::-webkit-search-decoration {
  margin-right: 0px;
}
.search-input::-webkit-input-placeholder {
  color: #999;
}
.search-input::-moz-placeholder {
  color: #999;
}
.search-input::-ms-input-placeholder {
  color: #999;
}
.search-input:-ms-input-placeholder {
  color: #999;
}
.search-input:disabled {
  opacity: 0.3;
  cursor: default;
  pointer-events: none;
}
</style>
