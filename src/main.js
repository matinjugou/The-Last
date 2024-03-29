import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store/index'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
