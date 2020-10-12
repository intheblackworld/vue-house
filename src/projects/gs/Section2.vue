<template>
  <div>
    <div class="section2">
      <img
        src="./s2/1.png"
        alt=""
        class="bg-img"
        data-aos="fade"
        data-aos-delay="0"
        v-if="!isMobile"
      >
      <img
        src="./s2/2.png"
        alt=""
        class="bg-img"
        data-aos="fade"
        data-aos-delay="1000"
        v-if="!isMobile"
      >
      <img
        src="./s2/3.png"
        alt=""
        class="bg-img"
        data-aos="fade"
        data-aos-delay="1200"
        v-if="!isMobile"
      >
      <img
        src="./deck/butterfly.png"
        alt=""
        class="absolute butterfly"
        data-aos="fade"
        data-aos-delay="800"
        v-if="isMobile"
      >
      <img
        src="./deck/leaf.png"
        alt=""
        class="absolute leaf"
        data-aos="fade"
        data-aos-delay="800"
        v-if="isMobile"
      >

      <img
        src="./deck/tree.png"
        alt=""
        class="absolute tree"
        data-aos="fade"
        data-aos-delay="800"
        v-if="isMobile"
      >
      <img
        src="./s2/map.png"
        alt=""
        class="map-img absolute"
        data-aos="zoom-in"
        data-aos-delay="200"
        @click="isDialog = true"
      >
      <div
        class="button absolute"
        v-if="isMobile"
        @click="isDialog = true"
      ></div>
      <div
        class="dialog"
        v-show="isDialog"
      >
        <img
          class="close"
          @click="isDialog = false"
          src="./all/close.png"
          alt="close"
        >
        <img
          src="./s2/map.png"
          alt=""
          class="dialog-map"
        >
      </div>
      <div
        class="border absolute"
        data-aos="zoom-in"
        data-aos-delay="400"
      ></div>
      <div
        class="title absolute"
        data-aos="fade-down"
        data-aos-delay="800"
      >
        宜蘭正核心五結鄉<br />傳藝路首選幸福成家
      </div>
      <div
        class="desc absolute"
        data-aos="fade-down"
        data-aos-delay="900"
      >
        一橋輕取傳統藝術中心<br />人文．風尚．親水匯集小城
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: size(581);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: size(592);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.tree {
}

.leaf {
}

.butterfly {
}

.title {
  writing-mode: vertical-rl;
  text-orientation: upright;
  width: auto;
  right: size(319);
  top: size(65);
  font-size: size(42);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
}

.desc {
  writing-mode: vertical-rl;
  text-orientation: upright;
  width: auto;
  right: size(463);
  top: size(105);
  font-size: size(24);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.76;
  letter-spacing: normal;
  text-align: center;
  color: #8e8a74;
}

.border {
  width: size(438);
  height: size(438);
  top: size(40);
  right: size(300);
  opacity: 0.38;
  border: size(5.3) solid #8e8a74;
}

.txt {
  width: size(243);
  bottom: size(40);
  right: size(594);
}

.map-img {
  width: size(818);
  bottom: size(79);
  left: size(173);
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
  .section2 {
    width: 100vw;
    height: sizem(78 + 476);
    // height: size-m(804);
    // background-image: url('./mo/1/bg.jpg');
    background-size: cover;
    background-attachment: scroll;
  }

  .tree {
    width: sizem(117);
    right: sizem(0);
    top: sizem(190);
    z-index: 2;
  }

  .leaf {
    width: sizem(132);
    right: sizem(0);
    top: sizem(-45);
    z-index: 2;
  }

  .butterfly {
    width: sizem(86);
    left: sizem(5);
    top: sizem(0);
    z-index: 2;
  }

  .title {
    writing-mode: initial;
    text-orientation: initial;
    width: sizem(250);
    right: sizem(80);
    top: sizem(78);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .desc {
    writing-mode: initial;
    text-orientation: initial;
    width: sizem(290);
    right: sizem(37);
    top: sizem(152);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.76;
    letter-spacing: normal;
    text-align: left;
    color: #8e8a74;
  }

  .border {
    width: sizem(340);
    height: sizem(224);
    top: sizem(50);
    right: sizem(17);
    opacity: 0.38;
    border: sizem(5) solid #8e8a74;
  }

  .txt {
    width: sizem(131);
    bottom: sizem(52);
    right: sizem(191);
  }

  .map-img {
    width: sizem(340);
    bottom: sizem(50);
    left: sizem(18);
  }

  .button {
    background-color: #3aa7c299;
    border-radius: 50%;
    position: absolute;
    width: 20vw;
    height: 20vw;
    bottom: calc(50vh - 60vw);
    left: calc(50% - 10vw);
    color: #fff;
    &:before {
      content: '';
      background: currentColor;
      width: 6%;
      height: 60%;
      position: absolute;
      top: 20%;
      left: 47%;
    }
    &:after {
      content: '';
      background: currentColor;
      width: 60%;
      height: 6%;
      position: absolute;
      top: 47%;
      left: 20%;
    }
  }

  .dialog {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: scroll;

    .slide-content {
      left: 0;
    }

    .dialog-map {
      width: auto;
      height: 100vh;
      background-color: #fff;
    }

    .close {
      width: 35px;
      background: rgba(0, 0, 0, 0.7);
      padding: 5px;
      position: fixed;
      right: 10px;
      top: 10px;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
// import Map from '@/components/Map.vue'

export default {
  name: 'section2',

  // components: {
  //   Map,
  // },

  data() {
    return {
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
