import Vue from 'vue'
import App from './App.vue'
import LetItSnow from 'vue-let-it-snow';
import 'bootstrap/dist/css/bootstrap.css'
import './style.scss'
import  VueMeta from 'vue-meta'

Vue.config.productionTip = false
Vue.use(LetItSnow);
Vue.use(VueMeta)

new Vue({
  render: h => h(App),
}).$mount('#app')
