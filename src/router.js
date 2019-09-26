import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import FormThanks from './pages/FormThanks.vue'
import PhoneThanks from './pages/PhoneThanks.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/formThanks',
      name: 'formThanks',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: FormThanks,
    },
    {
      path: '/phoneThanks',
      name: 'phoneThanks',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PhoneThanks,
    }
  ]
})
