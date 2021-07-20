<template>
  <div class="section5 flex wrap">
    <div class="content">
      <img src="./s5/style.jpg" :alt="`${info.caseName}_img`" class="img" data-aos="fade" data-aos-delay="0">
      <h1 class="title" data-aos="flip-up" data-aos-delay="200">
        定錨農十六高雄核心<br />建設商機爭先啟動
      </h1>
      <div class="subtitle" data-aos="flip-up" data-aos-delay="400">
        高質感複合機能 全方位商業活力
      </div>
      <h1 class="desc" data-aos="fade-up" data-aos-delay="600" v-if="isPC">
        整個高雄最具動能的商貿板塊，就在凹子底商業特區！<br />
        不單擁有「北信義、中七期、南農16」的高雄一級豪宅圈共伴，<br />
        讓企業主一手掌握生活與事業；北高雄博愛特區大百貨商圈正要崛起，<br />
        包括將再加入48層富邦人壽百貨影城綜合商業大樓BOT案、義享天地與聯上集團投入約25億元停35複合停車場影城商場BOT案（複製亞灣區台鋁），合計投資規模約800億元，力拱凹子底商業特區未來價值。
      </h1>
      <h1 class="desc" data-aos="fade-up" data-aos-delay="600" v-if="isMobile">
        整個高雄最具動能的商貿板塊，就在凹子底商業特區！
        不單擁有「北信義、中七期、南農16」的高雄一級豪宅圈共伴，讓企業主一手掌握生活與事業；北高雄博愛特區大百貨商圈正要崛起，包括將再加入48層富邦人壽百貨影城綜合商業大樓BOT案、義享天地與聯上集團投入約25億元停35複合停車場影城商場BOT案（複製亞灣區台鋁），合計投資規模約800億元，力拱凹子底商業特區未來價值。
      </h1>

    </div>
    <div class="content">
      <img src="./s5/img.jpg" :alt="`${info.caseName}_img`" class="img">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
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
  @include img_l_pc(650, 370, 160);
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
  @include img_l_pc(666, 443, 160);
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
  .section5 {
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
    color: #000;
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
    font-family: 'Noto Sans TC';
    font-size: sizem(12);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section5',

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
