import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import vueCity from 'vue-city-select'
vue.use(vueCity);
new Vue({
  el: '#app',
  render: h => h(App)
})
