import Vue from 'vue'
import App from './App.vue'
import Aboutus from './Aboutus.vue'

Vue.component('app-aboutus', Aboutus);

new Vue({
  render: h => h(App),
}).$mount('#app')
