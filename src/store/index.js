import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import createPersistedState from 'vuex-persistedstate'
import persisState from './plugin/persisState'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 控制導覽列狀態用
    viewIndex: 0,
  },

  plugins: [createPersistedState(persisState)],

  mutations: {

    setLoading(state, val) {
      state.isFetchingData = val
    },
  },
  actions: {
  },
  modules: {
    user,
  },
})
