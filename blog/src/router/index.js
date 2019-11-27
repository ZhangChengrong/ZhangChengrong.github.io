import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/main'
import Index from '@/components/pages/index'
import Article from '@/components/pages/article'
import CurriculumVitae from '@/components/pages/curriculumVitae'
import Template from '@/components/pages/template'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [{
        path: '/index',
        component: Index
      },{
        path: '/article/:type',
        component: Article
      },{
        path: '/curriculumVitae',
        component: CurriculumVitae
      },{
        path: '/template',
        component: Template
      }]
    }
  ]
})
