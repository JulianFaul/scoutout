<template>
<div>
    <h1>Hi User this is your Profile</h1>
    <div class="vspc form-row">
          <ons-button @click="logout" modifier="large--cta " class="button button--material">Log Out</ons-button>
    </div>
</div>
</template>

<script>
export default {
    methods:{
        logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name: "root"
            })
        }

    }
}
</script>