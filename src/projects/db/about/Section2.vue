<template>
  <div class="section2">
    <img src="./s2/t.png" :alt="`${info.caseName}_關於我們 得邦廣告`" class="t" data-aos="fade" data-aos-delay="200">
    <div class="flex-c" v-if="isMobile" data-aos="fade" data-aos-delay="300">
      <img src="./s2/icon1.png" :alt="`${info.caseName}_icon1`" class="icon" data-aos="fade">
      <img src="./s2/icon2.png" :alt="`${info.caseName}_icon2`" class="icon" data-aos="fade">
      <img src="./s2/icon3.png" :alt="`${info.caseName}_icon3`" class="icon" data-aos="fade">
    </div>
    <div v-if="isMobile" data-aos="fade">
      <div class="desc" data-aos="fade">
        對於銷售的偏執，我們絕不妥協<br />
        對於客戶，以真誠款待<br />
        客戶服務，吹毛求疵，讓廣大民眾，都擁有一個完美的家。
      </div>
      <div class="desc" data-aos="fade">
        對於建商，以完銷回饋<br />
        以良善創造建案價值，用創意力、行銷力為信念正向合作。<br />
        成為買賣雙方的橋樑，讓買賣不僅僅是金錢交換，而是一種循環美好的互動。
      </div>
      <div class="desc" data-aos="fade" data-aos-delay="600">
        我們言語不多 但心意很多。<br />
        關於房子的許多事，不需要訴說，只需用心感受
      </div>
      <img src="./s2/i1.jpg" :alt="`${info.caseName}_i1`" class="img" data-aos="fade" data-aos-delay="300">
      <img src="./s2/logo.png" :alt="`${info.caseName}_logo`" class="logo" data-aos="fade" data-aos-delay="400">
      <div class="desc" data-aos="fade" data-aos-delay="500">
        以精緻服務為核心價值，為消費者全盤規劃、推薦最合適的美宅。並對建設公司，提供土地規劃、建築設計、環境規劃、景觀規劃、美學架構等全盤的建議。<br /><br />
        在房地產行銷的領域中，以領先業界的專業服務，建構「人」與「家」最堅固的橋樑。
      </div>
    </div>
    <div class="right" v-if="isPC">
      <div class="item flex-ac flex-jb">
        <img src="./s2/icon1.png" :alt="`${info.caseName}_icon1`" class="icon" data-aos="fade" data-aos-delay="300">
        <div class="desc">
          對於銷售的偏執，我們絕不妥協<br />
          對於客戶，以真誠款待<br />
          客戶服務，吹毛求疵，讓廣大民眾，都擁有一個完美的家。
        </div>
      </div>
      <div class="item flex-ac flex-jb">
        <img src="./s2/icon2.png" :alt="`${info.caseName}_icon2`" class="icon">
        <div class="desc">
          對於建商，以完銷回饋<br />
          以良善創造建案價值，用創意力、行銷力為信念正向合作。<br />
          成為買賣雙方的橋樑，讓買賣不僅僅是金錢交換，而是一種循環美好的互動。
        </div>
      </div>
      <div class="item flex-ac flex-jb">
        <img src="./s2/icon3.png" :alt="`${info.caseName}_icon3`" class="icon">
        <div class="desc">
          我們言語不多 但心意很多。<br />
          關於房子的許多事，不需要訴說，只需用心感受
        </div>
      </div>
      <img src="./s2/i1.jpg" :alt="`${info.caseName}_i1`" class="img">
      <img src="./s2/logo.png" :alt="`${info.caseName}_logo`" class="logo">
      <div class="desc">
        以精緻服務為核心價值，為消費者全盤規劃、推薦最合適的美宅。並對建設公司，提供土地規劃、建築設計、環境規劃、景觀規劃、美學架構等全盤的建議。<br /><br />
        在房地產行銷的領域中，以領先業界的專業服務，建構「人」與「家」最堅固的橋樑。
      </div>
    </div>
    <!--
    <div class="video-item" v-for="(video, index) in video_list" :key="video.title + index">
      <img :src="video.img" :alt="`${info.caseName}_video`" class="v">
      <div class="flex-ac flex-jb wrap">
        <div class="video-title">
          {{video.title}}
        </div>
        <div class="video-desc">
          {{video.desc}}
        </div>
      </div>
    </div>
    -->
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: auto;
  overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  &:nth-child(1) {
    position: relative;
  }
}

.t {
  @include img_l_pc(116, 47, 301);
}

.right {
  padding-left: size(648);
}

.item {
  width: size(1920 - 648);
  margin: size(30) 0 0;
  .icon {
    width: size(209);top:size(-30);position: relative;
  }

  .desc {
    width: size(1063 - 103);
    font-size: size(24);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: size(1.2);
    text-align: left;
    color: #4d4d4d;
    white-space: nowrap;
  }
}

.img {
  float: left;
  width: size(1274);
  margin-top: size(50);
  margin-bottom: size(60);
}

.logo {
  width: size(547);
  margin-bottom: size(40);
}

.desc {
  width: size(1095);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: size(2.4);
  text-align: left;
  color: #4d4d4d;
  margin-bottom: size(60);
}

.video-item {
  width: size(1560);
  margin: 0 auto size(40);

  .v {
    width: 100%;
  }

  .video-title {
    font-size: size(36);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: size(2.16);
    text-align: left;
    color: #008fbb;
  }

  .video-desc {
    font-size: size(24);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.99;
    letter-spacing: size(0.96);
    text-align: left;
    color: #1a1a1a;
  }
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
    min-height: auto;
    max-height: auto;
    height: auto;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  padding:sizem(95) 0 0 0;
  }

  .bg-img {
    width: sizem(375);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .t {
    display: none;
  }

  .right {
    display: none;
  }

  .icon {
    width: sizem(95);
    margin-right: sizem(10);
    margin-bottom: sizem(34);
  }

  .desc {
    width: 80%;
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing:0.05em;
    text-align: justify;
    color: #4d4d4d;
    margin-bottom: sizem(70);
    margin-left: sizem(35);
    &:first-child{
    margin-bottom: sizem(15);}
  }

  .img {
    float: right;
    width: sizem(341);
    margin-top: sizem(50);
    margin-bottom: sizem(50);
  }

  .logo {
    width: sizem(300);
    margin-bottom: size(40);
    margin: 0 auto sizem(40);
  }

  .video-item {
    width: 100vw;
    margin: 0 auto size(40);

    .v {
      width: 100%;
    }

    .video-title {
      width: sizem(296);
      margin: sizem(40) auto 0;
      font-size: sizem(20);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.62;
      letter-spacing: sizem(2.16);
      text-align: left;
      color: #008fbb;
    }

    .video-desc {
      width: sizem(296);
      margin: 0 auto sizem(40);
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.99;
      letter-spacing: sizem(0.96);
      text-align: left;
      color: #1a1a1a;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section2',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      video_list: [
        {
          img: require('./s2/v.jpg'),
          title: '影片標題影片標題影片標題影片標題',
          desc: '小標文字（沒文字隱藏）',
        },
      ],
    }
  },

  methods: {
    // @slideChangeTransitionEnd="slideChanged"
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  mounted() {},

  created() {},

  computed: {},
}
</script>
