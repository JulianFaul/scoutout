<template>
 <div class="formarea">
        <div class="form-row">
          <input v-model="firstName" type="text" class="text-input--material width-half" placeholder="First" value="">
          <input v-model="lastName" type="text" class="text-input--material width-half" placeholder="Last" value="" style="border-width-left: 1px">
        </div>

        <div class="form-row">
          <input v-model="email" type="text" class="text-input--material width-full" placeholder="Email" value="">
        </div>

        <div class="form-row">
          <input v-model="password" type="password" class="text-input--material width-full" placeholder="Password" value="">
        </div>

        <div class="lucent">
          <p class="note">Password - 6 characters or more</p>
        </div>
        <div v-if="error">
          <p class="error-message">{{error}}</p>
        </div>

        <div class="vspc form-row">
          <ons-button @click="register" modifier="large--cta " class="button button--material">Sign up</ons-button>
        </div>

        <div class="vspc form-row">
          <ons-button @click="navigateTo({name:'login'})" modifier="large--cta " class="button button--material">Login</ons-button>
        </div>

      </div>

</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"

export default {
  name: 'Register',
  data () {
    return {
      email:"",
      password:"",
      firstName:"",
      lastName:"",
      error: null
    }
  },
  methods:{

    async register(){
     
    try {
     const response = await AuthenticationService.register({
            email: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName

        })
         this.$store.dispatch('setToken', response.data.token)
         this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
              name:"root"
          })
     

    } catch (error){
      this.error = error.response.data.error
      }
    },
    navigateTo (route) {
            this.$router.push(route)
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-message{
  color:red;
}
.formarea{
  width: 100%;
}
</style>
