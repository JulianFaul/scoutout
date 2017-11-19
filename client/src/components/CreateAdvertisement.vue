<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar flast dense class="cyan" dark>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <v-form>
                        <v-text-field label="Company Name" v-model="advertisement.companyName">
                        </v-text-field>
                        <v-text-field label="Contact Details" v-model="advertisement.contactDetails">
                        </v-text-field>
                        <v-text-field label="Email Address" v-model="advertisement.email">
                        </v-text-field>
                        <v-text-field label="Email Address" v-model="advertisement.email">
                        </v-text-field>
                        <v-text-field label="Image URL" v-model="advertisement.imageURL">
                        </v-text-field>
                        <v-text-field label="Website" v-model="advertisement.website">
                        </v-text-field>
                        <v-text-field label="Address" v-model="advertisement.address">
                        </v-text-field>
                        <v-text-field label="Category" v-model="advertisement.category">
                        </v-text-field>

                        

                        <v-btn class="cyan" @click="create" dark>Create</v-btn>
                    </v-form>
                </div>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
import AdvertisementService from "@/services/AdvertisementService"
export default {
    name: 'create-advertisement',
    data() {
        return {
            advertisement: {
                companyName: "",
                contactDetails: "",
                email: "",
                logo: "",
                imageURL: "",
                website: "",
                address: "",
                category: ""
            }
        }
    },
    methods: {
        async create() {

            try {
                await AdvertisementService.createAdvertisement(this.advertisement)
                console.log("HERE")
                this.$router.push({
                           name:"root"
                      })
                //   const response = await AuthenticationService.login({
                //         email: this.email,
                //         password: this.password
                //     })
                //     this.$store.dispatch('setToken', response.data.token)
                //     this.$store.dispatch('setUser', response.data.user)
                //     this.$router.push({
                //           name:"root"
                //       })
            } catch (error) {
                //   this.error = error.response.data.error
            }
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-message {
    color: red;
}
</style>