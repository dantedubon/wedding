import Vue from 'vue'
import App from './App.vue'
import LetItSnow from 'vue-let-it-snow';
import 'bootstrap/dist/css/bootstrap.css'
import './style.scss'

Vue.config.productionTip = false
Vue.use(LetItSnow);

new Vue({
  render: h => h(App),
}).$mount('#app')
