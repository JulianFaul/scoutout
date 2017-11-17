<template>
  <div class="register">
    <h1>Register Page</h1>
    <div>
   <span>
  <input class="text-input--material" placeholder="Username" type="text" required>
  <br /><br />
  <input class="text-input--material" placeholder="Password" type="password" required>
</span>
</div>
<br>
    <button class="button " @click="register">Register</button>
    
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
