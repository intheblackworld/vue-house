<template>
  <div>
    <div class="section4 flex wrap">
      <div class="content">
        <img src="./s4/style.jpg" :alt="`${info.caseName}_img`" class="img ball" data-aos="fade" data-aos-delay="200">
        <h1 class="title" data-aos="flip-up" data-aos-delay="200">
          每個城市都有一座<br />國際企業總部帝標
        </h1>
        <div class="subtitle" data-aos="flip-up" data-aos-delay="400">
          凹子底公園第一排 擎天地標頂級商辦
        </div>
        <h1 class="desc" data-aos="fade-up" data-aos-delay="600">
          相較台北動輒百萬的房價，凹子底擁有更大上漲空間，海陸空交通條件更具國際發展性，投報率更超強沒得比！<br /><br />
          萬坪公園及豪宅百貨組成頂級聚落，有台灣的華爾街之稱，繁榮程度成為企業門面升級、軟體科技業、回流台商進駐首選地段。
        </h1>
        
      </div>
      <div class="content" v-if="isPC">
        <img src="./s4/img.jpg" :alt="`${info.caseName}_img`" class="img full">
      </div>
      <img src="./s4/img.jpg" :alt="`${info.caseName}_img`" class="img" v-if="isMobile">
      <h1 class="stext">
         3D外觀參考示意圖
        </h1>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: 100%;
  height: size(865);
  min-height: size(865);
  max-height: size(865);
  position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
  flex-direction: row-reverse;
}
.content {
  width: 50%;
  height: 100%;
  position: relative;
  background-color: #808080;
}
.stext{
  @include img_l_pc(666, 820, 760);
  font-size: size(20);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  text-shadow:0px 0px 3px #000;
}
.img {
  width: 100%;
  height: auto;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 0;

  &.full {
    height: 100%;
  }
}

.title {
  @include img_l_pc(650, 123, 123);
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(650, 249, 123);
  font-family: 'Noto Sans TC';
  font-size: size(25);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #33cfff;
}

.desc {
  @include img_l_pc(666, 318, 123);
  font-size: size(20);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
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
  .section4 {
    width: 100%;
    height: sizem(348 * 2);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .content {
    width: 100%;
    height: sizem(348);
    position: relative;
  }
  .img {
    width: 100%;
    height: sizem(348);
    object-fit: cover;

    &.ball {
      height: sizem(108);
      position: absolute;
      bottom: sizem(0);
      left: 0;
    }
  }

  .title {
    @include img_l_m(200, 18, 30);
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(280, 95, 30);
    font-family: 'Noto Sans TC';
    font-size: sizem(16);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: normal;
    text-align: left;
    color: #75e3ff;
  }


  .stext{
   @include img_r_m(315, 670, -180);
    font-family: 'Noto Sans TC';
    font-size: sizem(15);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
  text-shadow:0px 0px 3px #000;
}

  .desc {
    @include img_l_m(315, 130, 30);
    font-family: 'Noto Sans TC';
    font-size: sizem(12);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section4',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
