<template>
  <div class="section1">
    <div class="bg fullscreen relative" v-if="!isMobile">
      <img src="./s1/h1.png" alt class="bg-img" data-aos="fade-right" data-aos-delay="400" />
      <img src="./s1/h2.png" alt class="bg-img" data-aos="fade-left" data-aos-delay="600" />
      <img src="./s1/logo.png" alt class="bg-img" data-aos="fade" data-aos-delay="800" />
      <div :class="`title ${this.isShow ? 'typing' : 'hide'}`">輕取別墅 預約財富</div>
    </div>
    <div class="bg fullscreen relative" v-else>
      <img src="./s1/mo/h1.png" alt class="bg-img" data-aos="fade-right" data-aos-delay="400" />
      <img src="./s1/mo/h2.png" alt class="bg-img" data-aos="fade-left" data-aos-delay="600" />
      <img src="./s1/mo/logo.png" alt class="bg-img" data-aos="fade" data-aos-delay="800" />
      <div :class="`title ${this.isShow ? 'typing' : 'hide'}`">輕取別墅 預約財富</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s1/bg.jpg');
  background-position: center;
  background-size: auto;
}

.bg-img {
  width: 100vw;
  height: auto;
  display: block;
  top: 0;
  position: absolute;
  &:nth-child(1) {
    position: relative;
  }
}

.title {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 10%;
  font-size: calc(100vw * (64 / 1920));
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 2.56px;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  writing-mode: vertical-lr;
  transition: all 0.5s;

  &.hide {
    opacity: 0;
  }
}

.typing {
  width: calc(100vw * (64 / 1920));
  height: calc(100vw * (570 / 1920));
  white-space: nowrap;
  overflow: hidden;
  border-bottom: 0.04em solid;
  animation: typing 2s steps(9) forwards, caret 1s steps(1) infinite;
}

@keyframes typing {
  from {
    height: 0;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s1/mo/bg.jpg');
  }

  .title {
    font-size: calc(100vw * (32 / 375));
  }

  .typing {
    width: calc(100vw * (64 / 375));
    height: calc(100vw * (300 / 375));
  }
}
</style>

<script>
// @ is an alias to /src
import { setTimeout, setInterval } from 'timers'
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',
  components: {},

  data() {
    return {
      isMobile,
      isTablet,
      imgIndex: 0,
      isShow: false,
    }
  },

  methods: {},

  mounted() {
    setTimeout(() => {
      this.isShow = true
      setInterval(() => {
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
        }, 1000)
      }, 10000)
    }, 2000)
  },

  created() {
    // this.$Lazyload.$on('loaded', ({ el, src }) => {
    //   setTimeout(() => {
    //     if (this.loading) {
    //       this.loading = false
    //     }
    //   }, 500)
    // })
    // setInterval(() => {
    //   if (this.imgIndex === 0) {
    //     this.imgIndex = 1
    //   } else {
    //     this.imgIndex = 0
    //   }
    // }, 5000)
  },
}
</script>
