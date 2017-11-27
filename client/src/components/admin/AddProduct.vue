<template>
    <div class="content">
        <h3>Create a new Advertisement</h3>
        <v-ons-row>
            <v-ons-col>
                <h4>Enter Details</h4>
                <div class="form-row">
                    <input type="text" v-model="product.productName" class="text-input--material width-full" placeholder="Product Name" value="">
                </div>
                <div class="vspc form-row">
                    <ons-button @click="createProduct()" modifier="large--cta " class="button button--material">Create Advertisement</ons-button>
                </div>
               
            </v-ons-col>

            <!-- <v-ons-col>
                <h4>Advertisement Preview</h4>
               <div style="width: 370px; margin:0 auto;">
                <v-ons-card>
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
            </v-ons-col> -->
        </v-ons-row>
    </div>
</template>

<script>
import ProductService from '@/services/ProductService'
export default {
    data() {
        return {
            product:{
                productName : null,
                advertisement_id:this.$store.state.route.params.advertisementId
            }
            
        }
    },
    methods:{
        async createProduct(){
            try{
           
            await ProductService.createProduct(this.product)
               
            }catch(err){
                console.log(err)
            }
            
        }
    }
}
</script>

<style scoped>

</style>
