import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueResource from 'vue-resource'
import $ from 'jquery'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
Vue.use(VueRouter)
Vue.use(VueResource)
console.log($('#app'))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
