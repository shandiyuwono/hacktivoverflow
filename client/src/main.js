import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuelidate from 'vuelidate'
import CKEditor from '@ckeditor/ckeditor5-vue'

Vue.use(Vuelidate)
Vue.use(Vuetify, {
  options: {
    customProperties: true
  }
})
Vue.use(CKEditor)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
