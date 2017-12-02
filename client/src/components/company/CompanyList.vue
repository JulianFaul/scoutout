<template>
  <div>
    <input type="text" class="search-input search-input--material" style="width:100%;" v-model="search" placeholder="Search title.." />
    <div class="companies">
      <div class="container">
        <template v-for="company in filteredList">
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
  data() {
    return {
      search: ""
    }
  },
  created() {
    if (this.companies.length === 0) {
      this.$store.dispatch('allCompanies')
    }
  },
  computed: {
    companies() {
      return this.$store.getters.allCompanies
    },
    filteredList() {
      return this.$store.getters.allCompanies.filter(company => {
        return company.companyName.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  components: {
    'company': Company
  }
}
</script>