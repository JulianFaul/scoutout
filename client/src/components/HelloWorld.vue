<template>
  <div class="mainPage">
    <h1>This is home</h1>
   
    <h3 v-if="!this.$store.state.isUserLoggedIn">Please log in</h3>
    <div v-else>
      <h2>Welcome {{this.$store.state.user.firstName}}</h2>
      <h3 v-if="this.$store.state.user.isAdmin">You are Admin</h3>
      <h3 v-else>You are User</h3>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'mainPage',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
