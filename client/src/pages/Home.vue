<template>
  <div>
    <company-list></company-list>
  </div>
</template>

<script>
  import CompanyList from '../components/company/CompanyList.vue'
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'company-list': CompanyList
    }

  }
</script>