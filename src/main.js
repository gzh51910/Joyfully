import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import base from './assets/css/base.css'
//使用Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@vant/touch-emulator';
import 'vant/lib/index.css';
//使用axios
import axios from 'axios';
import {
  Icon,
  Tabbar,
  TabbarItem,
<<<<<<< HEAD
  Search
} from 'vant';

Vue.use(base).use(Icon).use(Tabbar).use(TabbarItem).use(Search);
=======
  SubmitBar,
  Checkbox,
  CheckboxGroup,Field
} from 'vant';

Vue.use(base).use(Icon).use(Tabbar).use(TabbarItem).use(SubmitBar).use(Checkbox).use(CheckboxGroup).use(Field);
>>>>>>> b8b342a9d338c6cdf5e7f92ca3bd10485e7b7484
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')