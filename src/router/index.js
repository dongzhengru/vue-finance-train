import Vue from 'vue'
import Router from 'vue-router'
import Layout from "../layout/index.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('../components/index/index')
        },{
          path: 'login',
          name: 'login',
          component: () => import('../components/user/login')
        }]
    }
  ]
})
