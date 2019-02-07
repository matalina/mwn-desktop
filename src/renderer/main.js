import Vue from 'vue'
import VueBootstrap from 'bootstrap-vue'

import App from './App'
import router from './router'
import store from './store'

require('@fortawesome/fontawesome-pro/js/all')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

Vue.use(VueBootstrap)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
