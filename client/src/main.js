// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import App from './App'
import router from './router'


// JS import
import Vue from 'vue'
import VueOnsen from 'vue-onsenui'// This already imports 'onsenui'

Vue.use(VueOnsen);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
