import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/main'],resolve),
      redirect: '/curriculumVitae',
      children: [{
        path: '/index',
        component: resolve => require(['@/components/pages/index'],resolve)
      },{
        path: '/article/:type',
        component: resolve => require(['@/components/pages/article'],resolve)
      },{
        path: '/curriculumVitae',
        component: resolve => require(['@/components/pages/curriculumVitae'],resolve)
      },{
        path: '/template',
        component: resolve => require(['@/components/pages/template'],resolve)
      }]
    }
  ]
})
