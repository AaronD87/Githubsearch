import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HolaMundo from '@/components/HolaMundo'
import Github from '@/components/Github'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/es',
      name: 'Hola',
      component: HolaMundo
    },
    {
      path: '/github',
      name: 'Github',
      component: Github
    }
  ]
})
