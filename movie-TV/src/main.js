import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCarousel from 'vue-carousel'
import VueI18n from 'vue-i18n'
import {ES_AR} from './locale/es-ar'
import {EN_US} from './locale/en-us'

Vue.use(VueI18n);

Vue.use(VueCarousel);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

const messages = {
  "es-ar": {"message" : ES_AR.message},
  "en-us": {"message" : EN_US.message},
}

const i18n = new VueI18n({
  locale: 'es-ar', // set locale
  messages, // set locale messages
});

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString().toLowerCase();
  return value.charAt(0).toUpperCase() + value.slice(1)
});

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
