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
      // this generates a separate chunk (thanks.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: FormThanks,
    },
    {
      path: '/phoneThanks',
      name: 'phoneThanks',
      // route level code-splitting
      // this generates a separate chunk (thanks.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "thanks" */ './pages/PhoneThanks.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './pages/About.vue')
    },
    {
      path: '/products',
      name: 'products',
      // route level code-splitting
      // this generates a separate chunk (products.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "products" */ './pages/Products.vue')
    },

    {
      path: '/hot',
      name: 'hot',
      // route level code-splitting
      // this generates a separate chunk (hot.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "hot" */ './pages/Hot.vue')
    },

    {
      path: '/past',
      name: 'past',
      // route level code-splitting
      // this generates a separate chunk (past.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "past" */ './pages/Past.vue')
    },

    {
      path: '/news',
      name: 'news',
      // route level code-splitting
      // this generates a separate chunk (news.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "news" */ './pages/News.vue')
    },

    {
      path: '/contacts',
      name: 'contacts',
      // route level code-splitting
      // this generates a separate chunk (contacts.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "contacts" */ './pages/Contacts.vue')
    },

    {
      name: '404',
      path: '/404',
      component: () => import('@/pages/404.vue')
    },
    {
      path: '*', // 此处需特别注意至于最底部
      redirect: '/404'
    }
  ]
})
