<template>
  <div>
    <div class="companies">
      <div class="container">
        <template v-for="company in companies" >
          <company :company="company" :key="company.id"></company>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import Company from './Company.vue'
  export default {
    name: 'companies',
    created () {
      if (this.companies.length === 0) {
        this.$store.dispatch('allCompanies')
      }
    },
    computed: {
      companies () {
        return this.$store.getters.allCompanies
      }
    },
    components: {
      'company': Company
    }
  }
</script>