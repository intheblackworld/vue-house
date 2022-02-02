import Vue from 'vue'
import Router from 'vue-router'
import Main from './pages/Main.vue'
import FormThanks from './pages/FormThanks.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'home',
          component: () =>
            import(/* webpackChunkName: "abou_ust" */ './pages/Home.vue')
        },
        // 關於我們
        {
          path: 'about_us',
          name: 'about_us',
          component: () =>
            import(/* webpackChunkName: "abou_ust" */ './pages/about_us.vue')
        },
        // 熱銷個案
        {
          path: 'hot_case',
          name: 'hot_case',
          component: () =>
            import(/* webpackChunkName: "hot_case" */ './pages/hot_case.vue')
        },
        {
          path: 'hot_case/:id',
          name: 'hot_case_detail',
          component: () =>
            import(/* webpackChunkName: "hot_case" */ './pages/hot_case_detail.vue')
        },

        // 經典案例
        {
          path: 'classic_case',
          name: 'classic_case',
          component: () =>
            import(/* webpackChunkName: "classic_case" */ './pages/classic_case.vue')
        },
        {
          path: 'classic_case/:type/:id',
          name: 'classic_case_detail',
          component: () =>
            import(/* webpackChunkName: "classic_case" */ './pages/classic_case_detail.vue')
        },

        // 最新消息
        {
          path: 'news',
          name: 'news',
          component: () =>
            import(/* webpackChunkName: "news" */ './pages/news.vue')
        },

        {
          path: 'news/:id',
          name: 'news_detail',
          component: () =>
            import(/* webpackChunkName: "news" */ './pages/news_detail.vue')
        },

        // 影音專區
        {
          path: 'medias',
          name: 'medias',
          component: () =>
            import(/* webpackChunkName: "medias" */ './pages/medias.vue')
        },

        // 企業責任
        {
          path: 'company',
          name: 'company',
          component: () =>
            import(/* webpackChunkName: "company" */ './pages/company.vue')
        },

        // 都更專區
        {
          path: 'renewal',
          name: 'renewal',
          component: () =>
            import(/* webpackChunkName: "renewal" */ './pages/renewal.vue')
        },

        // 會員專區
        {
          path: 'member',
          name: 'member',
          component: () =>
            import(/* webpackChunkName: "member" */ './pages/member.vue')
        },

        // 聯絡我們
        {
          path: 'contacts',
          name: 'contacts',
          component: () =>
            import(/* webpackChunkName: "contacts" */ './pages/contacts.vue')
        },
      ]
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
      component: () =>
        import(/* webpackChunkName: "about" */ './pages/PhoneThanks.vue')
    },
    {
      name: '404',
      path: '/404',
      component: () => import('@/pages/404.vue')
    },
    // {
    //   path: '*', // 此处需特别注意至于最底部
    //   redirect: '/404'
    // },
  ]
})
