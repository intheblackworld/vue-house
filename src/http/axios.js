/** axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios'
import router from '@/router'
import store from '@/store'
// import app from '@/main'
// import md5 from 'crypto-js/md5'
// import qs from 'qs'
const devApi = 'http://localhost:9000/api'
const prdApi = 'https://api.shin-hai.com'

const baseURL = process.env.NODE_ENV === 'development' ? devApi : prdApi

axios.defaults.baseURL = baseURL

// 请求超时时间
axios.defaults.timeout = 100000

// post请求头
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
axios.defaults.headers.get['Content-Type'] =
  'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(
  async (config) => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // tslint:disable-next-line: no-unused-expression
    // const token = store.state.layouts.token
    const token = store.state.user.token || ''
    // const ip = store.state.user.ip || '123'
    const ip = '127.0.0.1'
    // secret_word && (config.params.secret_word = store.state.user.secret_word)
    token && (config.headers.token = `${token}`)
    ip && (config.headers['hbr-client-ip'] = `${ip}`)
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是200的情况
  async (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 400:
          window.alert(error.response.data.message)
          break
        case 401:
          // 拿 access_token
          if (error.response.config.url === '/token') {
            // 連 refresh_token 也過期，跳轉登入頁面
            store.commit('user/setInfo', { key: 'token', value: '' })
            // app.$message({
            //   showClose: true,
            //   message: '請登入帳號',
            //   type: 'warning',
            // })
            router.replace({
              path: '/login',
              query: { redirect: router.currentRoute.fullPath },
            })
          } else {
            post('/token', { refresh_token: store.state.user.refresh_token }).then(res => {
              if (res.token) {
                store.commit('user/setInfo', { key: 'token', value: res.token })
                store.dispatch('user/getUserInfo')
                window.location.reload()
              }
            })
          }
          break
        case 404:
          // router.replace({
          //   path: '/404',
          // })
          break
        // 其他错误，直接抛出错误提示
        default:
        //   Toast({
        //     message: error.response.data.message,
        //     duration: 1500,
        //     forbidClick: true,
        //   })
      }
      return Promise.reject(error.response)
    }
  },
)
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  store.commit('setLoading', true)
  // app.$Progress.start()

  return new Promise((resolve, reject) => {
    // console.log(params)
    axios
      .get(url, {
        params,
      })
      .then((res) => {
        store.commit('setLoading', false)
        // app.$Progress.finish()
        resolve(res.data)
      })
      .catch((err) => {
        store.commit('setLoading', false)
        // app.$Progress.fail()
        reject(err.data)
      })
  })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  store.commit('setLoading', true)
  // app.$Progress.start()
  const urlParams = new URLSearchParams()
  Object.keys(params).forEach(key => {
    urlParams.append(key, params[key])
  })
  return new Promise((resolve, reject) => {
    axios
      .post(url, urlParams)
      .then((res) => {
        store.commit('setLoading', false)
        // app.$Progress.finish()
        resolve(res.data)
      })
      .catch((err) => {
        store.commit('setLoading', false)
        // app.$Progress.fail()
        reject(err.data)
      })
  })
}

/**
 * delete方法，对应delete请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function remove(url, params) {
  store.commit('setLoading', true)
  // app.$Progress.start()
  return new Promise((resolve, reject) => {
    axios
      .delete(url, params)
      .then((res) => {
        store.commit('setLoading', false)
        // app.$Progress.finish()
        resolve(res.data)
      })
      .catch((err) => {
        store.commit('setLoading', false)
        // app.$Progress.fail()
        reject(err.data)
      })
  })
}
