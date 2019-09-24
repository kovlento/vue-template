import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {http} from './api/http'

//定义全局变量
Vue.prototype.$http=http;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
