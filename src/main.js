// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import rate from 'vue-rate'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'babel-polyfill'
import lazyloadImg from '@/assets/lazyload.png'
import 'swiper/dist/css/swiper.css'
import '@/assets/styles/border.css'
import '@/assets/styles/reset.css'
import '@/assets/styles/iconfont.css'

Vue.use(rate)
Vue.use(VueLazyload, {
  error: lazyloadImg,
  loading: lazyloadImg,
  attempt: 1
})
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.bus = new Vue()
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
