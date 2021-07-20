<template>
  <div>
    <div class="section3 flex wrap">
      <div class="content">
        <img src="./s3/style.jpg" :alt="`${info.caseName}_img`" class="img" data-aos="fade" data-aos-delay="0">
        <h1 class="title" data-aos="flip-up" data-aos-delay="200" v-if="isPC">
          台灣科技佈局高雄 串連南北商業脈絡
        </h1>
        <h1 class="title" data-aos="flip-up" data-aos-delay="200" v-if="isMobile">
          台灣科技佈局高雄<br />串連南北商業脈絡
        </h1>
        <div class="subtitle" data-aos="flip-up" data-aos-delay="400">
          5G金流半導體產業新聚落 升級在高雄!
        </div>
        <h1 class="desc" data-aos="fade-up" data-aos-delay="600">
          受惠台積電擴廠與台商回流帶動了一波資金狂潮，而其龐大的企業主南移，<br />
          更帶動頂級商辦自用的需求，而高雄凹子底公園鄰近左營高鐵、楠梓科技產業園區及橋科園區，形成科技、電子與生技產業匯聚之地，吸引許多上市櫃企業主喜愛在此地段置產。<br /><br />
          【京城IFC】規劃高雄少見稀有頂級辦公空間，從外觀、公設與電子硬體，軟體系統全面整合，尤以坪數格局利於企業彈性規劃，發揮最大效能，以決勝速度提升企業競爭力。
        </h1>
      </div>
      <div class="content">
        <img src="./s3/img.jpg" :alt="`${info.caseName}_img`" class="img">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
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
}
.content {
  width: 50%;
  height: 100%;
  position: relative;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  @include img_l_pc(650, 235, 160);
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(650, 308, 160);
  font-family: 'Noto Sans TC';
  font-size: size(25);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #00609c;
}

.desc {
  @include img_l_pc(666, 375, 160);
  font-size: size(20);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
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
  .section3 {
    width: 100%;
    height: sizem(668);
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
    height: sizem(320);
    position: relative;
  }
  .img {
    width: 100%;
    height: sizem(348);
    object-fit: cover;
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
    color: #000000;
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
    color: #00609c;
  }

  .desc {
    @include img_l_m(315, 130, 30);
    font-size: sizem(12);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section3',

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
