<template>
  <div id="app">
    <v-ons-page>
      <router-view/>
       <page-footer-nav></page-footer-nav>
    </v-ons-page>
  </div>
</template>
<script>
import PageFooterNav from "@/components/FooterNav.vue";

export default {
  name: "app",
  components: {
    PageFooterNav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
