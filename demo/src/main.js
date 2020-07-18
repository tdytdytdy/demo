// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' //引入js

import 'element-ui/lib/theme-chalk/index.css'//引入css

// import Container from '@/components/Container'
import SvgIcon from 'vue-svgicon'
Vue.use(SvgIcon, {
    tagName: 'svg-icon'
});

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
