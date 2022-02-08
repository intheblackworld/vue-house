// import { post } from '@/http/axios'
import { get_user_info } from '@/http/api'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    token: '',
    ip: '',
    info: {

    },
  },
  getters: {
    // userRole: (state, getters, { user }) => user.role || {},
    isLogin: (state) => !!state.token,
  },
  actions: {
    async get_user_info(context, { ...props }) {
      return new Promise((resolve, reject) => {
        get_user_info({ ...props }).then((res) => {
          context.commit('setUser', res.data)
          resolve(res.data)
        }, error => {
          reject(error)
        })
      })
    },
    logout(context, isLogout = true, params) {
      // 清空資料狀態
      // const { user } = store.state
      context.commit('setInfo', { key: 'token', value: '' })
      // context.commit('clearInfo', ['refresh_token', 'token', 'name', 'email'])
      router.replace({ name: 'home', params })
    }
  },
  mutations: {
    // regist(state, list) {
    //   state.register = list
    // },
    setInfo(state, { key, value }) {
      state[key] = value
    },
    setUser(state, { name, email, id, bank, draw_status = false, interests = [] }) {
      state.name = name
      state.email = email
      state.id = id
      state.draw_status = draw_status
      state.interests = interests
      if (bank) {
        state.bank_code = bank.bank_code
        state.bank_account = bank.bank_account
      }
    },

    clearInfo(state, list) {
      list.forEach(key => (state[key] = ''))
    },
  }
}
