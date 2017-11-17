<template>
 <div class="formarea">
        <div class="form-row">
          <input type="text" class="text-input--material width-half" placeholder="First" value="">
          <input type="text" class="text-input--material width-half" placeholder="Last" value="" style="border-width-left: 1px">
        </div>

        <div class="form-row">
          <input type="text" class="text-input--material width-full" placeholder="Email" value="">
        </div>

        <div class="form-row">
          <input type="password" class="text-input--material width-full" placeholder="Password" value="">
        </div>

        <div class="lucent">
          <p class="note">Password - 6 characters or more</p>
        </div>

        <div class="vspc form-row">
          <ons-button modifier="large--cta " class="button button--material">Sign up</ons-button>
        </div>
      </div>

</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
        email: '',
        password: ''
    }
  },
  methods:{
    register(){
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
