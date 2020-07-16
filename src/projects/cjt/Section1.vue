<template>
  <div class="section1">
    <div
      class="bg fullscreen relative"
      v-if="!isMobile"
    >
      <img
        src="./s1/logo.png"
        alt=""
        class="logo absolute"
      >
      <img
        src="./s1/bg.png"
        alt=""
        class="bg-cover absolute"
      >
      <!-- <img src="./s1/logo.png" alt class="bg-img" data-aos="fade" data-aos-delay="400" />
      <img src="./s1/h1.png" alt class="bg-img" data-aos="fade" data-aos-delay="600" />
      <img src="./s1/h2.png" alt class="bg-img" data-aos="fade" data-aos-delay="800" />
      <img src="./s1/img1.png" alt class="windmill wind1" />
      <img src="./s1/img2.png" alt class="windmill wind2" /> -->
      <!-- div :class="`title ${this.isShow ? 'typing' : 'hide'}`">輕取別墅 預約財富</div -->
    </div>
    <div
      class="bg fullscreen relative"
      v-else
    >
      <img
        src="./s1/logo.png"
        alt=""
        class="logo absolute"
      >
      <img
        src="./s1/bg.png"
        alt=""
        class="bg-cover absolute"
      >
      <!-- <img src="./s1/mo/logo.png" alt class="bg-img" data-aos="fade" data-aos-delay="400" />
      <img src="./s1/mo/h1.png" alt class="bg-img" data-aos="fade" data-aos-delay="600" />
      <img src="./s1/mo/h2.png" alt class="bg-img" data-aos="fade" data-aos-delay="800" />
      <img src="./s1/img1.png" alt class="windmill wind1" />
      <img src="./s1/img2.png" alt class="windmill wind2" /> -->
      <!-- div :class="`title ${this.isShow ? 'typing' : 'hide'}`">輕取別墅 預約財富</div -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #fcf8f2;
  // background-image: url('./s1/bg.jpg');
  background-position: top center;
  background-size: cover;
  min-height: calc(100vw * (1080 / 1920));
}

.bg-cover {
  width: calc(100vw * (1160 / 1920));
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.logo {
  width: calc(100vw * (1080 / 1920));
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
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
.windmill {
  width: calc(100vw * (270 / 1920));
  height: auto;
  display: block;
  top: 0;
  position: absolute;
  transform: rotate(0);
  animation: wind 3s 1s infinite linear;
  &.wind1 {
    top: calc(100vw * (100 / 1920));
    left: calc(100vw * (1070 / 1920));
    animation-duration: 2.3s;
  }
  &.wind2 {
    top: calc(100vw * (90 / 1920));
    left: calc(100vw * (1640 / 1920));
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

@keyframes wind {
  to {
    transform: rotate(360deg);
  }
}
@keyframes typing {
  from {
    height: 0;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    height: 100vh;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    // background-image: url('./s1/mo/bg.jpg');
    min-height: auto;
  }

  .bg-cover {
    width: calc(100vw * (340 / 375));
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .logo {
    width: calc(100vw * (340 / 375));
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .title {
    font-size: calc(100vw * (32 / 375));
  }
  .windmill {
    width: calc(100vw * (210 / 750));
    &.wind1 {
      top: calc(100vw * (585 / 750));
      left: calc(100vw * (245 / 750));
      animation-duration: 2.3s;
    }
    &.wind2 {
      top: calc(100vw * (580 / 750));
      left: calc(100vw * (680 / 750));
    }
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
