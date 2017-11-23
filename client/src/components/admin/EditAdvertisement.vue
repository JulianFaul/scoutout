<template>
  <div class="content">
    <h3>Edit Advertisement - {{advertisement.companyName}}</h3>
    <v-ons-row>
      <v-ons-col>
        <h4>Enter Details</h4>
        <div class="form-row">
          <input type="text" v-model="advertisement.imageURL" class="text-input--material width-full" placeholder="imageUrl" value="sssss">
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
          <ons-button @click="save" modifier="large--cta " class="button button--material">Save Advertisement</ons-button>
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
            <img :src="advertisement.imageURL" style="width:100% ;margin: 0 auto;display: block;">
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
      advertisement: {
        companyName: null,
        telephoneNumber: null,
        cellphoneNumber: null,
        facebookURL: null,
        description: null,
        email: null,
        logo: null,
        imageURL: null,
        website: null,
        address: null,
        category: null
      }

    }
  },
  methods: {
    async save() {
      try{
        await AdvertisementService.put(this.advertisement)
        this.$router.push({
              name:"viewAll"
          })
      }catch(err){
        console.log(err)
      }  
    }
  },
    async mounted() {
      try {
        const advertisementId = this.$store.state.route.params.advertisementId
        this.advertisement = (await AdvertisementService.show(advertisementId)).data
      } catch (err) {
        console.log(err)
      }
    }
}
</script>

<style scoped>
.favIcon_unlike i {
  /* color: #99d5cf; */
  color: #ffffff;
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 30px;
}

.favIcon_unlike i:hover {
  color: #99d5cf;
}

.favIcon_liked i {
  color: #009688;
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 30px;
}


ons-card.card {
  position: relative;
}
</style>
