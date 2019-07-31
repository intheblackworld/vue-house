<template>
  <div class="section12">
    <div class="bg relative">
      <div v-scroll-reveal.reset="$fadeIn()" class="absolute icon-1">
        <icon class="icon" :data="svg1" />
      </div>
      <div v-scroll-reveal.reset="$fadeIn(300)" class="absolute desc-1">
        <icon class="icon" :data="svg2" />
      </div>
      <div v-scroll-reveal.reset="$fadeIn(600)" class="center absolute-c">
        <img src="./93.png" alt />
      </div>
      <div v-scroll-reveal.reset="$fadeIn(900)" class="absolute icon-2">
        <icon class="icon" :data="svg3" />
      </div>
      <div v-scroll-reveal.reset="$fadeIn(1200)" class="absolute desc-2">
        <icon class="icon" :data="svg4" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  width: 100vw;
  height: calc(100vw * (900 / 1440));
  background-image: url('./s12_bg.jpg');
  background-color: #fff;
  padding-top: 20px;

  .center {
    width: calc(100vw * (950 / 1440));
    height: auto;
    // top: 10vw;

    img {
      width: 100%;
    }
  }

  .icon-1 {
    left: calc(100vw * (50 / 1440));
    top: calc(100vh * (50 / 900));
    width: calc(100vw * (279 / 1440));
  }

  .desc-1 {
    left: calc(100vw * (50 / 1440));
    top: calc(100vh * (250 / 900));
    width: calc(100vw * (530 / 1440));
  }

  .icon-2 {
    right: calc(100vw * (80 / 1440));
    bottom: calc(100vw * (120 / 900));
    width: calc(100vw * (243 / 1440));
  }

  .desc-2 {
    right: calc(100vw * (50 / 1440));
    bottom: calc(100vw * (50 / 900));
    width: calc(100vw * (318 / 1440));
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  // .bg {
  //   width: 100vw;
  //   height: calc(100vw * (900 / 1440));
  //   background-image: url('./s10_bg.jpg');
  //   padding-top: 30px;
  // }
  .center {
    width: 50vw;
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .bg {
    width: 100vw;
    height: auto;
    background-image: url('./s12_bg.jpg');
    padding-top: 0px;
    .icon-1,
    .icon-2,
    .desc-1,
    .desc-2,
    .center {
      position: relative;
      top: auto;
      left: auto;
      right: auto;
      bottom: auto;
      transform: none;
    }

    .icon-1 {
      width: 40vw;
      padding-top: 30px;
      margin-bottom: 30px;
      margin-left: 5vw;
    }

    .desc-1 {
      width: 90vw;
      margin-left: 5vw;
    }

    .center {
      width: 90vw;
      margin: 30px 0;
    }

    .icon-2 {
      width: 40vw;
      margin-left: 50vw;
      margin-bottom: 20px;
    }

    .desc-2 {
      width: 50vw;
      margin-left: 45vw;
      padding-bottom: 20px;
    }
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import svg1 from '../../assets/svg/9-3.svg'
import svg2 from '../../assets/svg/9-4.svg'
import svg3 from '../../assets/svg/9-5.svg'
import svg4 from '../../assets/svg/9-6.svg'
export default {
  name: 'section12',
  mixins: [slider],
  components: {},

  data() {
    return {
      isMobile,
      svg1,
      svg2,
      svg3,
      svg4,
      slideList: [
        {
          src: require('./s11_img_1.jpg'),
        },
        {
          src: require('./s11_img_2.jpg'),
        },
      ],
    }
  },

  methods: {},
}
</script>
