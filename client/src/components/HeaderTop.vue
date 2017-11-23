<template>
  <ons-toolbar>
    <div class="center">ScoutOut</div>
    <div class="right">
    </div>
  </ons-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}

</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-toolbar.toolbar {
    background: #009688;
}
</style>
