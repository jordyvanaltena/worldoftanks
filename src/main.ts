import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import Vuex from 'vuex'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Vuex)
new Vue({
    store,
    render: (h) => h(App)
}).$mount('#app');
