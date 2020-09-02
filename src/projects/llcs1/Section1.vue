<template>
  <div>
    <div class="section1">
      <!-- <img
        v-if="isPC"
        src="./s1/bg.png"
        alt=""
        class="bg-img"
        data-aos="fade-right"
        data-aos-delay="0"
      > -->


      <img
        src="./s1/logo.png"
        alt=""
        class="logo absolute"
      >
      <img
        src="./s1/t.png"
        alt=""
        class="title absolute"
      >
      <img
        src="./s1/t2.png"
        alt=""
        class="subtitle absolute"
      >

      <img src="./s1/button.png" alt="" class="btn absolute" v-scroll-to="{ element: `#contact` }">

      <img
        src="./s1/butterfly1.gif"
        alt=""
        class="fly1 absolute"
        data-aos="fade-up-left"
        data-aos-delay="1000"
      >
      <img
        src="./s1/butterfly2.gif"
        alt=""
        class="fly2 absolute"
        data-aos="fade-right"
        data-aos-delay="1000"
      >
      <!-- <img src="./s1/butterfly2.png" alt="" class="fly2 absolute">
      <img src="./s1/butterfly3.png" alt="" class="fly3 absolute">
      <img src="./s1/butterfly4.png" alt="" class="fly4 absolute"> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: 1080px;
  background-color: #e95314;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: size(1920);
  height: 100vh;
  min-height: 1080px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.logo {
  width: size(1014);
  top: size(206);
  right: size(443);
}

.title {
  width: size(646);
  top: size(521);
  right: size(627);
}

.subtitle {
  width: size(578);
  top: size(616);
  right: size(661);
}

.fly1 {
  width: size(200);
  top: size(376);
  right: size(372);
}

.fly2 {
  width: size(245);
  top: size(702);
  right: size(1245);
}

.btn {
  width: size(402);
  top: size(712);
  right: size(749);
  cursor: pointer;
}

@media only screen and (max-width: 1440px) {
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
  .section1 {
    width: 100vw;
    min-height: auto;
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-color: #D2C5B8;
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-animate {
    display: none;
  }

  .logo {
    width: sizem(210);
    top: sizem(114);
    left: sizem(83);
  }

  .img-t {
    width: 100vw;
    top: 0;
    left: 0;
  }

  .img-b {
    width: 100vw;
    bottom: 0;
    left: 0;
  }

  .title {
    width: sizem(236);
    top: sizem(226);
    right: sizem(70);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: sizem(3.75);
    text-align: center;
    color: #af8680;
    white-space: nowrap;
  }

  .hr {
    width: sizem(310);
    height: 1px;
    top: sizem(271);
    right: sizem(32);
    background-color: #af8680;
  }
  .desc {
    width: sizem(258);
    top: sizem(282);
    right: sizem(59);
    font-size: sizem(14);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.86;
    letter-spacing: sizem(0.85);
    text-align: center;
    color: #595757;
    white-space: nowrap;
  }

  .btn-group {
    width: sizem(146.5 * 2 + 17);
    top: sizem(486);
    right: sizem(33);

    .btn {
      width: sizem(146.5);
      height: sizem(33.7);
      border: solid 2px #af8680;
      border-radius: 18px / 18px;
      cursor: pointer;
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: sizem(1.65);
      text-align: center;
      color: #af8680;
      transition: all 0.3s;

      &:hover {
        background-color: #af8680;
        border-color: #af8680;
        color: #fff;
      }
    }
  }

  .fly1 {
    display: none;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
