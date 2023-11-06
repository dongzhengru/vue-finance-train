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
      children: [{
        path: 'index',
        name: 'index',
        component: () => import('../components/index/index'),
        meta: { title: '主页', icon: 'el-icon-s-home' }
      }]
    }
  ]
})
