/* eslint-disable no-useless-escape */
import Vue from 'vue'
import './assets/scss/main.scss'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import App from './App.vue'
import Home from './views/Home.vue'
import Source from './views/Source.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/source', component: Source }
  ]
})

/**
 * Global Custom Directive Imports
 * we should add the global custom directive imports under this comment
 */

/**
 * Project Configurations
 * we should add the project comfigurations under this comment
 */
Vue.config.productionTip = false

/**
 * Using 3rd Part Modules
 * We should add the 3rd part module initializations under the this comment
 */
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Rendering...
window.vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
