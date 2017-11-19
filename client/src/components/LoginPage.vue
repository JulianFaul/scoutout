<template>

<div class="formarea" >

        <div class="form-row" >
          <input v-model="email" type="text" class="text-input--material width-full" placeholder="Email" value="">
        </div>

        <div class="form-row">
          <input v-model="password" type="password" class="text-input--material width-full" placeholder="Password" value="">
        </div>

        <div v-if="error">
          <p class="error-message">{{error}}</p>
        </div>

        <div class="vspc form-row">
          <ons-button @click="login" modifier="large--cta " class="button button--material">Login</ons-button>
        </div>

      </div>

 
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"

export default {
  name: 'login',
  data () {
    return {
      email:"",
      password:"",
      error: null
    }
  },
  methods:{
    async login(){
    
    try {
      const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
              name:"root"
          })
    } catch (error){
      this.error = error.response.data.error
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-message{
  color:red;
}
</style>