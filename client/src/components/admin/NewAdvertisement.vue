<template>
    <div class="content">
        <h3>Create a new Advertisement</h3>
        <v-ons-row>
            <v-ons-col>
                <h4>Enter Details</h4>
                <div class="form-row">
                    <input type="text" v-model="advertisement.imageURL" class="text-input--material width-full" placeholder="imageUrl" value="">
                </div>

                <div class="form-row">
                    <input type="text" v-model="advertisement.companyName" class="text-input--material width-full" placeholder="Company Name" value="">
                </div>

                <div class="form-row">
                    <input type="text" v-model="advertisement.description" class="text-input--material width-full" placeholder="Description" value="">
                </div>

                <div class="form-row">
                    <input type="text" v-model="advertisement.telephoneNumber" class="text-input--material width-full" placeholder="telephoneNumber" value="">
                </div>

                <div class="form-row">
                    <input type="text" v-model="advertisement.cellphoneNumber" class="text-input--material width-full" placeholder="cellphoneNumber" value="">
                </div>

                <div class="form-row">
                    <input type="text" v-model="advertisement.facebookURL" class="text-input--material width-full" placeholder="facebookURL" value="">
                </div>

                <div class="form-row">
                    <input type="text" v-model="advertisement.email" class="text-input--material width-full" placeholder="email" value="">
                </div>

                <div class="form-row">
                    <input type="text" v-model="advertisement.logo" class="text-input--material width-full" placeholder="logo" value="">
                </div>

                <div class="form-row">
                    <input type="text" v-model="advertisement.website" class="text-input--material width-full" placeholder="website" value="">
                </div>

                <div class="form-row">
                    <input type="text" v-model="advertisement.address" class="text-input--material width-full" placeholder="address" value="">
                </div>

                <div class="form-row">
                    <input type="text" v-model="advertisement.category" class="text-input--material width-full" placeholder="category" value="">
                </div>
                <div class="vspc form-row">
                    <ons-button @click="create" modifier="large--cta " class="button button--material">Create Advertisement</ons-button>
                </div>
                <!-- <div v-if="error">
                  <p class="error-message">{{error}}</p>
                </div> -->

                <div class="vspc form-row">
                    <!-- <ons-button @click="register" modifier="large--cta " class="button button--material">Create</ons-button> -->
                </div>
            </v-ons-col>

            <v-ons-col>
                <h4>Advertisement Preview</h4>
               <div style="width: 370px; margin:0 auto;">
                  
                <v-ons-card>
                     <div class="ribbon red"><span>Special</span></div>
                    <img :src="advertisement.imageURL"  style="width:100% ;margin: 0 auto;display: block;">
                    <div class="title">
                       <b>{{advertisement.companyName}}</b>
                    </div>
                    <div class="description">
                       {{advertisement.description}}
                    </div>
                    <div class="content">
                        <span class="favIcon_unlike">
                            <i class="tab-bar__icon tab-bar--material__icon zmdi zmdi-favorite"></i>
                        </span>
                    </div>
                </v-ons-card>
               </div>
            </v-ons-col>
        </v-ons-row>
    </div>
</template>

<script>
import AdvertisementService from '@/services/AdvertisementService'
export default {
    data() {
        return {
            advertisement:{
                companyName    : null,
                telephoneNumber: null,
                cellphoneNumber: null,
                facebookURL    : null,
                description    : null,
                email          : null,
                logo           : null,
                imageURL       : null,
                website        : null,
                address        : null,
                category       : null
            }
            
        }
    },
    methods:{
        async create(){
            try{
                await AdvertisementService.createAdvertisement(this.advertisement)
            }catch(err){
                console.log(err)
            }
            
        }
    }
}
</script>

<style scoped>
.favIcon_unlike i{
    /* color: #99d5cf; */
    color: #ffffff;
    position: absolute;
    top: 25px;
    right: 25px;
    font-size: 30px;
}
.favIcon_unlike i:hover{
    color: #99d5cf;
}
.favIcon_liked i{
    color: #009688;
    position: absolute;
    top: 25px;
    right: 25px;
    font-size: 30px;
}
.ribbon {
   position: absolute;
   right: -5px; top: -5px;
   z-index: 1;
   overflow: hidden;
   width: 75px; height: 75px; 
   text-align: right;
}
.ribbon span {
   font-size: 10px;
   color: #fff; 
   text-transform: uppercase; 
   text-align: center;
   font-weight: bold; line-height: 20px;
   transform: rotate(45deg);
   -webkit-transform: rotate(45deg); /* Needed for Safari */
   width: 100px; display: block;
   background: #79A70A;
   background: linear-gradient(#9BC90D 0%, #79A70A 100%);
   box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
   position: absolute;
   top: 19px; right: -21px;
}
.ribbon span::before {
   content: '';
   position: absolute; 
   left: 0px; top: 100%;
   z-index: -1;
   border-left: 3px solid #79A70A;
   border-right: 3px solid transparent;
   border-bottom: 3px solid transparent;
   border-top: 3px solid #79A70A;
}
.ribbon span::after {
   content: '';
   position: absolute; 
   right: 0%; top: 100%;
   z-index: -1;
   border-right: 3px solid #79A70A;
   border-left: 3px solid transparent;
   border-bottom: 3px solid transparent;
   border-top: 3px solid #79A70A;
}
.red span {background: linear-gradient(#F70505 0%, #8F0808 100%);}
.red span::before {border-left-color: #8F0808; border-top-color: #8F0808;}
.red span::after {border-right-color: #8F0808; border-top-color: #8F0808;}

.blue span {background: linear-gradient(#2989d8 0%, #1e5799 100%);}
.blue span::before {border-left-color: #1e5799; border-top-color: #1e5799;}
.blue span::after {border-right-color: #1e5799; border-top-color: #1e5799;}
ons-card.card {
    position: relative;
}
</style>
