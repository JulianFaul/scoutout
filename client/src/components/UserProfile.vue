<template>
<div>
    <h1>Hi {{user.firstName}} {{user.lastName}} this is your Profile</h1>

    <div v-if="user.isAdmin" >
        <h1>It looks like you are an Admin</h1>
        <h2>You can add new Advertisement by clicking here</h2>
        <div class="vspc form-row">
          <ons-button @click="navigateTo({name:'viewAll'})" modifier="small--cta " class="button button--material">View All Advertisements</ons-button>
        </div>
    </div>
    <!-- <p>{{user}}</p> -->
    <div class="vspc form-row">
          <ons-button @click="logout" modifier="large--cta " class="button button--material">Log Out</ons-button>
    </div>
</div>
</template>

<script>
export default {
    data () {
    return {
      user: null
    }
  },
    methods:{
        logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name: "root"
            })
        },
        navigateTo (route) {
            this.$router.push(route)
        }
    },
    mounted (){
        this.user = this.$store.state.user
    }
}
</script>