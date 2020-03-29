<template>
  <div class="section4">
    <div
      v-if="!isMobile"
      class="container"
    >
      <div class="title-block">
        <img
          v-lazy="require('./s2/logo.png')"
          alt=""
          class="logo"
        >
        <div class="flex-ac flex-jb t-block">
          <div class="left-border"></div>
          <div class="title">新店城市美學新定義</div>
          <div class="right-border"></div>
        </div>
        <!-- <div class="desc">太子建設蓋房子，秉持集團「三好一公道」的企業精神，講求地段好、設計好、施工好、價格公道。</div> -->
        <div class="block">
          <img src="./s4/img.png" alt="" class="img">
          <div class="t-content">
            <div class="t-title">建築大師第一 重塑南區天際線</div>
            <div class="t-subtitle">
              CHL ARCHITECT＆ASSOCIATES
            </div>
            <div class="t-name">
              呂建勳 建築師
            </div>
            <div class="t-desc1">
              「從發現的原點出發，傳遞自然、簡約的精神，保留城市人文最單純的精粹。」
            </div>
            <div class="t-desc2">
              美國哈佛大學Harvard University建築及都市設計碩士、呂建勳建築師事務所首席建築師、淡江大學建築系兼任講師、東海大學建築學士。
            </div>
          </div>
        </div>
        <div class="b-block">
          <img src="./s4/img2.jpg" alt="" class="b-img">
          <div class="b-content">
            <div class="b-title">
              建築美學<br />再創經典
            </div>
            <div class="b-desc">
              建築是細節的層疊與累加，唯有經典的風格才能耐久、耐看。本案從建築設計之初，便期望在核心地段上展現經典風景。移植豪宅細節，以簡練線條構築、以醇厚石材內斂相襯，透過隔柵相映整棟建築物向上崢嶸的小節不拘。這是一座體現美學的現代建築，也是南區天際線上最優雅、永恆的建築身影。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="container"
    >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.container {
  width: 1380px;
  margin: 0 auto;
  position: relative;
}

.title-block {
  margin-top: 230px;
  .logo {
    width: 130px;
    height: auto;
    margin-bottom: 25px;
  }

  .left-border,
  .right-border {
    width: 127px;
    height: 6px;
    background: #d8007c;
    opacity: 0.5;
  }
  .t-block {
    width: 946px;
    margin: 0 auto;
  }
  .title {
    font-size: 38px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: 0.76px;
    text-align: center;
    color: #da007f;
  }

  .desc {
    font-size: 23px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.7;
    letter-spacing: 0.46px;
    text-align: left;
    color: #808080;
    margin-top: 38px;
    margin-bottom: 66px;
    text-align: center;
  }
}


.block {
  width: 100%;
  position: relative;
  margin-top: 30px;
}

.img {
  width: 100%;
  position: relative;
}

.t-content {
  position: absolute;
  width: 794px;
  top: 150px;
  left: 480px;
}

.t-title {
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: 0.64px;
  text-align: left;
  color: #595757;
  margin-bottom: 40px;
}

.t-subtitle {
  font-size: 27px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: 1.35px;
  text-align: left;
  color: #595757;
}

.t-name {
  font-size: 26px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: 1.04px;
  text-align: left;
  color: #595757;
  margin-bottom: 40px;
}

.t-desc1 {
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: 0.4px;
  text-align: left;
  color: #808080;
  margin-bottom: 15px;
}

.t-desc2 {
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.51;
  letter-spacing: 0.63px;
  text-align: left;
  color: #808080;
}


.b-block {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 116px 0 145px 0;
}

.b-img {
  width: 657px;
}

.b-content {
  width: 552px;
}

.b-title {
  font-size: 43px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: 0.86px;
  text-align: center;
  color: #da007f;
}

.b-desc {
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 0.42px;
  text-align: justify;
  color: #808080;
}


@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
  .container {
    width: 1080px;
  }

  .t-content {
    width: 680px;
  }
  .t-desc1 {
    font-size: 18px;
  }

  .t-desc2 {
    font-size: 17px;
  }
  .b-img {
    width: 500px;
  }
  .b-content {
    width: 500px;
  }

  .b-title {
    margin-bottom: 30px;
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
    position: relative;
    overflow: hidden;
  }
  .left {
    width: size-m(330);
    height: auto;
    position: relative;
    top: 0;
    transform: translate(0, 0);
    img {
      height: 100%;
      &.left-img {
        width: size-m(87);
      }
    }
    > div {
      font-size: size-m(12);
    }
  }
  .bottom {
    width: size-m(330);
    margin: size-m(30) auto size-m(90) auto;
    display: flex;
    position: relative;
  }

  .swiper-fullscreen {
    width: auto;
    height: 100vh;
    img {
      width: auto;
      height: 100%;
    }
  }

  .m-img {
    width: 100vw;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
  .m-content {
    width: size-m(145);
  }

  .title {
    font-size: size-m(47);
  }

  .subtitle {
    font-size: size-m(15);
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

  .swiper-pagination {
    // transform: none;
    // width: 100%;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // top: auto;
    bottom: 5%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: size-m(30);
    padding: 0 size-m(5);
    cursor: none;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section4',

  data() {
    return {
      isMobile,
    }
  },

  methods: {
  },

  mounted() {},

  computed: {},
}
</script>
