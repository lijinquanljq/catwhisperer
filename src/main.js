import Vue from 'vue'
// 引入vue文件
import App from './App.vue'
import vueRouter from 'vue-router'
// 引入路由
import router from './assets/js/router.js'
//引入配置好的路由
import axios from 'axios'
import './assets/css/cssreset.css'
import './assets/css/animate.css'

Vue.use(vueRouter)
// 把路由挂载到实例上
Vue.prototype.$http=axios;

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

new Vue({
  el: '#app',

  render: h => h(App),
  // 把组件绑定到元素上

	router:router
})
