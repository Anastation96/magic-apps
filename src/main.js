import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router: router,
  store: store,
  template: `<App/>`,
  components: { App }
  // render: h => h(App)
}).$mount('#app')

// const v = new Vue({
//     el: "#app",
//     router: router,
//     template: `<App/>`,
//     components: { App, uiComponents }
// });