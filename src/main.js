import Vue from 'vue';

// components
import ElementUI from 'element-ui';

// css
import 'element-ui/lib/theme-chalk/index.css';

// vue
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
