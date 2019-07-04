import info from '../info/index.js'

const fadeOption = (origin, duration, delay, distance) => ({
  origin,
  delay,
  distance: `${distance}px`,
  duration
})

export default {
  install(Vue, options) {
    Vue.prototype.$fadeInUp = (duration = 1000, delay = 0, distance = 30) => (fadeOption('bottom', duration, delay, distance))

    Vue.prototype.$fadeInDown = (duration = 1000, delay = 0, distance = 30) => (fadeOption('top', duration, delay, distance))

    Vue.prototype.$fadeInRight = (duration = 1000, delay = 0, distance = 30) => (fadeOption('left', duration, delay, distance))

    Vue.prototype.$fadeInLeft = (duration = 1000, delay = 0, distance = 30) => (fadeOption('right', duration, delay, distance))

    Vue.prototype.$gtmCode = info.gtmCode

    // Vue.prototype.showFootTab = {
    //   isShow: false,
    //   active: 0
    // }
  }
}
