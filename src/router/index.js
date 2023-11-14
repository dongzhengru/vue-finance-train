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
        },{
          path: 'center',
          name: 'center',
          component: () => import('../components/user/center')
        }]
    },{
      path: '/course',
      name: 'course',
      component: Layout,
      redirect: '/index',
      children: [
        // {
        //   path: 'index',
        //   name: 'index',
        //   component: () => import('../components/course/index')
        // },
        {
          path: 'play',
          name: 'play',
          component: () => import('../components/course/play')
        }]
    }
  ]
})
