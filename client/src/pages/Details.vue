<template>
  <div>
    <company-details :company="company" ></company-details>
  </div>

</template>

<script>
  import CompanyDetails from '../components/company/CompanyDetails'
  export default {
    created () {
    if (!this.company.companyName) {
        this.$store.dispatch('companyById', this.$route.params['id'])
      }
      
    },
    computed: {
      company () {
        return this.$store.getters.companyById(this.$route.params['id'])
      }
    },
    components: {
      'company-details': CompanyDetails,
    }
    
  }
</script>