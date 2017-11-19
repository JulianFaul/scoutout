<template>
    <div>
        <h3>Create a new Advertisement</h3>
        <v-ons-row>
            <v-ons-col>
                <h4>Enter Details</h4>
               
                
                <div class="form-row">
                    <input type="text" v-model="imageURL" class="text-input--material width-full" placeholder="imageUrl" value="">
                </div>

                <div class="form-row">
                    <input type="text" v-model="companyName" class="text-input--material width-full" placeholder="Company Name" value="">
                </div>

                <div class="form-row">
                    <input type="text" v-model="companyDescription" class="text-input--material width-full" placeholder="Description" value="">
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
                    <img :src="imageURL"  style="width:150px;margin: 0 auto;display: block;">
                    <div class="title">
                       <b><p>{{companyName}}</p></b>
                       <small>{{companyDescription}}</small>
                    </div>
                    <!-- <div class="content">
                        <div>
                            <v-ons-button>
                                <v-ons-icon icon="ion-thumbsup"></v-ons-icon>
                            </v-ons-button>
                            <v-ons-button>
                                <v-ons-icon icon="ion-share"></v-ons-icon>
                            </v-ons-button>
                        </div>
                        <v-ons-list>
                            <v-ons-list-header>Bindings</v-ons-list-header>
                            <v-ons-list-item>Vue</v-ons-list-item>
                            <v-ons-list-item>Angular</v-ons-list-item>
                            <v-ons-list-item>React</v-ons-list-item>
                        </v-ons-list>
                    </div> -->
                </v-ons-card>
               </div>
            </v-ons-col>
        </v-ons-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
           imageURL:"",
           companyName:"",
           companyDescription:""
        }
    }
}
</script>