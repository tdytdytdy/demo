import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index.vue'
// import a from '@/components/a'
// import b from '@/components/b'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
    // {
    //   path: '/a',
    //   name: 'a',
    //   component: 'a'
    // }
  ]
})
