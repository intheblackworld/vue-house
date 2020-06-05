<template>
  <div class="relative">
    <div v-if="!isMobile">
      <div class="c-content"></div>
      <img
        src="./s1/logo.png"
        alt=""
        class="img"
      >
      <img
        src="./s1/tl.png"
        alt=""
        class="logo"
      >
      <img
        src="./s1/tl2.png"
        alt=""
        class="desc"
      >

      <div
        class="btn absolute flex-c"
        v-scroll-to="{ element: `#contact` }"
      >預約最錢線</div>
      <div class="line-in"></div>
      <div class="line-top"></div>
      <div class="line-bottom"></div>
      <div class="line-left"></div>
      <div class="line-right"></div>
    </div>
    <div v-else>
      <img
        src="./s1/logo_m.png"
        alt=""
        class="img"
      >
      <img
        src="./s1/tl.png"
        alt=""
        class="logo"
      >
      <img
        src="./s1/tl2_m.png"
        alt=""
        class="desc"
      >
      <div
        class="btn absolute flex-c"
        v-scroll-to="{ element: `#contact` }"
      >預約最錢線</div>
      <div class="line-top"></div>
      <div class="line-top line-top2"></div>
      <div class="line-left"></div>
      <div class="line-right"></div>
      <div class="line-bottom"></div>
    </div>
    <!--
      <img src="./s1/視野大寬闊.png" alt="" class="absolute left4" data-aos="zoom-in-up" data-aos-delay="1000">
      <img src="./s1/交通大方便.png" alt="" class="absolute left5" data-aos="zoom-in-up" data-aos-delay="1100">
      -->
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  height: size(965);
  overflow: hidden;
}
.img {
  width: size(1690);
  position: absolute;
  display: block;
  top: size(115);
  left: size(115);
  object-fit: cover;
  background-color: #fff;
}

.logo {
  width: size(130);
  left: size(115);
  top: size(115);
  position: absolute;
}

.desc {
  width: size(400);
  left: size(245);
  top: size(115);
  position: absolute;
}

.c-content {
  background-color: #fff;
  width: size(1690);
  height: size(852);
  left: size(115);
  top: size(115);
  position: absolute;
}

.line-in {
  position: absolute;
  background-color: #bf1b12;
  left: size(245);
  width: 1px;
  height: size(851);
  top: size(115);
}

.line-top {
  position: absolute;
  background-color: #bf1b12;
  width: 100vw;
  height: 1px;
  top: size(115);
}

.line-bottom {
  position: absolute;
  background-color: #bf1b12;
  width: 100vw;
  height: 1px;
  bottom: 0;
}

.line-left {
  position: absolute;
  background-color: #bf1b12;
  left: size(115);
  width: 1px;
  height: size(965);
}

.line-right {
  position: absolute;
  background-color: #bf1b12;
  right: size(115);
  width: 1px;
  height: size(965);
}

.logo {
  width: size(130);
  top: size(115);
  left: size(115);
}

.desc {
  width: size(400);
  left: size(245);
  top: size(115);
}

.btn {
  width: size(337);
  height: size(78);
  cursor: pointer;
  top: size(705);
  left: size(631);
  background-image: url('./button.png');
  background-size: contain;

  font-size: size(25);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: 20px;
  padding-left: 20px;
  text-align: center;
  color: #ffffff;
}
@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    height: size-m(512);
  }

  .img {
    width: size-m(332);
    height: auto;
    top: size-m(24);
    left: size-m(22);
    bottom: auto;
  }

  .line-left {
    top: 0;
    height: size-m(512);
    left: size-m(22);
  }

  .line-right {
    top: 0;
    height: size-m(512);
    right: size-m(21);
  }

  .line-top {
    width: size-m(375 - 22);
    left: size-m(22);
  }

  .line-top2 {
    width: size-m(75);
    left: 0;
    top: size-m(76);
  }

  .line-bottom {
    width: 100vw;
    bottom: 0;
  }

  .logo {
    width: size-m(53);
    top: size-m(23);
    left: size-m(22);
  }

  .desc {
    width: size-m(98);
    left: size-m(89);
    top: size-m(23);
  }

  .btn {
    width: size-m(146);
    height: size-m(33);
    cursor: pointer;
    top: size-m(452);
    left: size-m(49);
    background-image: url('./button.png');
    background-size: contain;

    font-size: size-m(10.8);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 8.64px;
    padding-left: 8.64px;
    text-align: center;
    color: #ffffff;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',

  components: {},
  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
