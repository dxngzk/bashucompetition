import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Contest from '@/components/Contest'
import Problem from '@/components/Problem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Contest',
      name: 'Contest',
      component: Contest
    },
    {
      path: '/Problem',
      name: 'Problem',
      component: Problem
    }
  ]
})
