import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Barrage from './components/barrage'
import VueLazyload from 'vue-lazyload'
import store from './store'

Vue.use(Barrage)
Vue.use(VueLazyload,{
  preLoad:1.3
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
