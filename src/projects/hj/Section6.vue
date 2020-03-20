<template>
  <div class="section6">
    <div
      v-if="!isMobile"
      class="full-bg"
    >
      <img
        v-lazy="require('./s6/img.jpg')"
        alt=""
        class="left"
      >
      <div
        data-aos="fade"
        data-aos-delay="300"
      >
        <img
          v-lazy="require('./s6/timg.png')"
          alt=""
          class="right-img"
        >
      </div>
      <div class="content">
        <div class="title">
          BEST<br />VACATION
        </div>
        <div class="subtitle">
          把各種美好串連在一起
        </div>
        <div class="desc">
          搭捷運去旅行，把各種美好串連在一起。下班後到兩廳院陶冶身心、周末漫步大安森林公園休憩、環狀線直達新板特區接軌時尚，走在休閒娛樂享受最前線，你想得到的，都有。
        </div>
      </div>
      <img
        v-lazy="require('./s6/logo.png')"
        alt=""
        class="logo"
      >
    </div>
    <div
      v-else
      class="m-bg"
    >
      <img
        v-lazy="require('./s6/mo/img.jpg')"
        alt=""
        class="top"
      >
      <div class="bottom">
        <div class="m-content">
          <div class="title">
            BEST<br />VACATION
          </div>
          <div class="subtitle">
            把各種美好串連在一起
          </div>
          <div class="desc">
            搭捷運去旅行，從兩廳院到大安森林公園、新板特區到台師大校園。
            你想得到的休閒娛樂享受，都有。

          </div>
        </div>
      </div>
      <img
        v-lazy="require('./s6/mo/timg.png')"
        alt=""
        class="m-img"
        data-aos="fade-right"
        data-aos-delay="300"
      >
      <img
        v-lazy="require('./s6/mo/bglogo.png')"
        alt=""
        class="logo"
        data-aos="fade"
        data-aos-delay="400"
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.full-bg {
  background-color: #112d81;
}

.left {
  width: auto;
  height: size(889);
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.right-img {
  width: auto;
  height: 100vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
  transform: translateX(50%);
}

.swiper-fullscreen {
  width: auto;
  height: 100vh;
  img {
    width: auto;
    height: 100%;
  }
}

.content {
  position: absolute;
  width: size(520);
  height: 100vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateX(65%);
  top: 25%;
  > div {
    width: 100%;
  }
}

.title {
  opacity: 0.8;
  font-family: Impact;
  font-size: size(111);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.99;
  letter-spacing: 6.67px;
  text-align: left;
  color: #db364a;
  margin-bottom: size(30);
}

.subtitle {
  font-size: size(35);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.04;
  letter-spacing: 5.67px;
  text-align: left;
  color: #db364a;
  white-space: nowrap;
  margin-bottom: size(30);
}

.desc {
  font-size: size(15);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 1.19px;
  text-align: left;
  color: #ffffff;
}

.logo {
  position: absolute;
  width: auto;
  height: 100vh;
  right: 5%;
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .m-bg {
    background-color: #112d81;
    height: size-m(667);
    position: relative;
  }
  .logo {
    width: size-m(185);
    top: size-m(240);
    left: 0;
    right: 0;
    margin: 0 auto;
    position: absolute;
    z-index: 1;
  }
  .top {
    width: size-m(330);
    margin: 0 auto;
  }
  .bottom {
    width: size-m(330);
    margin: size-m(40) auto;
    display: flex;
    position: relative;
    bottom: 20px;
  }

  .m-img {
    width: 100vw;
    position: absolute;
    right: 0;
    bottom: 0px;
  }
  .m-content {
    width: size-m(200);
  }

  .title {
    font-size: size-m(47);
    letter-spacing: 2.23px;
  }

  .subtitle {
    font-size: size-m(15);
    margin-bottom: size-m(20);
  }

  .desc {
    font-size: size-m(12);
  }

  .logo {
    width: 100vw;
    height: auto;
    position: absolute;
    top: auto;
    bottom: 0;
    right: auto;
    left: 0;
    transform: none;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section6',
  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  mounted() {},

  computed: {},
}
</script>
