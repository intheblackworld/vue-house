<template>
  <div class="section2">
    <h1 class="label"  data-aos="fade-up" data-aos-delay="200"><span>城味</span>預見鳳鳴</h1>
    <h1 class="title"  data-aos="fade-up" data-aos-delay="400">Taste Of City Feng Ming</h1>
    <h1 class="subtitle" v-if="isPC"  data-aos="fade-up" data-aos-delay="600">城市大進化 鳳鳴新未來</h1>
    <h1 class="subtitle" v-if="isMobile"  data-aos="fade-up" data-aos-delay="600">城市大進化<br />鳳鳴新未來</h1>
    <div class="hr"  data-aos="fade-right" data-aos-delay="400"></div>
    <img src="./s2/02_bg.jpg" :alt="`${info.caseName}_img`" class="img" v-if="isPC">
    <img src="./m/02/02_bg_m.jpg" :alt="`${info.caseName}_img`" class="img" v-if="isMobile">
    <div class="text-content" data-aos="fade-up" data-aos-delay="800">
      <div class="text-title flex-ac flex-jb">
        <div>INDUSTRY</div>
        <div>LIVE</div>
        <div>SHOPPING</div>
      </div>
      <div class="text-subtitle flex-ac flex-jb">
        <div>龜山園區<br />科技重鎮</div>
        <div>國際城市<br />居住規格</div>
        <div>市心商圈<br />精彩富足</div>
      </div>

      <div class="text-title flex-ac flex-jb">
        <div>TRAFFIC</div>
        <div>PARK</div>
        <div>SCHOOL</div>
      </div>
      <div class="text-subtitle flex-ac flex-jb">
        <div>雙捷雙快<br />城市迅馳</div>
        <div>公園綠地<br />健康樂活</div>
        <div>完整學區<br />人文匯聚</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: 100vw;
  height: size(1129 + 358);
  max-height: size(1129 + 358);
  min-height: size(1129 + 358);
  position: relative;
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: size(1080);
  min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.label {
  @include img_l_pc(400, 0, 104);
  font-size: size(46);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: size(2.76);
  text-align: left;
  color: #5e5d5e;
  white-space: nowrap;
  span {
    font-weight: normal;
  }
}

.title {
  @include img_l_pc(731, 64, 105);
  font-size: size(71.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: size(-5.01);
  text-align: left;
  color: #2f2c2c;
  white-space: nowrap;
}
.subtitle {
  @include img_l_pc(731, 68 + 127, 468);
  font-size: size(75.2);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: size(4.51);
  text-align: left;
  color: #2f2c2c;
  white-space: nowrap;
}

.hr {
  @include img_l_pc(102, 180 + 68, 338);
  border-bottom: solid size(5) #009fb1;
}

.img {
  @include img_l_pc(1920, 0, 0);
  height: size(1129);
  object-fit: cover;
  top: auto;
  bottom: 0;
}

.text-content {
  @include img_c_pc(820, 566);
}

.text-title {
  > div {
    width: size(260);
  }

  font-size: size(51.7);
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(2.12);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.text-subtitle {
  > div {
    width: size(260);
  }
  margin-bottom: size(33);
  font-size: size(40.6);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: size(2.43);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
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
    min-height: auto;
    max-height: initial;
    height: sizem(360 + 236);
  }

  .label {
    @include img_l_m(131, 14, 30);
    font-size: sizem(17.8);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(1.07);
    text-align: left;
    color: #5f5e5e;
    white-space: nowrap;
    span {
      font-weight: normal;
    }
  }

  .title {
    @include img_l_m(283, 37, 30);
    font-size: sizem(27.7);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(-1.94);
    text-align: left;
    color: #302d2c;
    white-space: nowrap;
  }
  .subtitle {
    @include img_l_m(177, 120, 27);
    font-size: sizem(33.7);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: sizem(2.02);
    text-align: left;
    color: #302d2c;
    white-space: nowrap;
  }

  .hr {
    @include img_l_m(40, 100, 33);
    border-bottom: solid sizem(5) #009fb1;
  }

  .img {
    @include img_l_m(375, 236, 0);
    height: sizem(360);
    object-fit: cover;
    // top: auto;
    bottom: auto;
  }

  .text-content {
    @include img_c_m(375 - 88, 294);
  }

  .text-title {
    > div {
      width: sizem(92);
    }

    font-size: sizem(19.5);
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: sizem(0.59);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .text-subtitle {
    > div {
      width: sizem(92);
    }
    margin-bottom: sizem(13);
    font-size: sizem(15.3);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: sizem(0.92);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
// import slider from '@/mixins/slider.js'
import info from '@/info'
export default {
  // mixins: [slider],
  // props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      // slideList: [
      //   {
      //     img: require('./s2/1.jpg'),
      //     // name: 'WE機能圖',
      //   },
      //   {
      //     img: require('./s2/2.jpg'),
      //     // name: 'WE機能圖',
      //   },
      //   {
      //     img: require('./s2/3.jpg'),
      //     // name: 'WE機能圖',
      //   },
      // ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 3) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>