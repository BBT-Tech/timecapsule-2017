import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Letter from '@/components/Letter'
import Voice from '@/components/Voice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/letter',
      name: 'letter',
      component: Letter
    },
    {
      path: '/voice',
      name: 'voice',
      component: Voice
    },
    {
      path: '*',
      redirect: '/welcome'
    }
  ]
})
