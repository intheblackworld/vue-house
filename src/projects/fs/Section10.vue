<template>
  <div class="section10">
    <div class="bg">
      <img v-lazy="require('./s10/bg.png')" alt class="bg-img" v-if="!isMobile" />
      <img v-lazy="require('./mo/10/bg.png')" alt class="bg-img" v-if="isMobile" />
      <div class="swiper-button-prev" slot="button-prev">
        <img src="./all/箭頭2.png" alt />
      </div>
      <div class="swiper-button-next" slot="button-next">
        <img src="./all/箭頭1.png" alt />
      </div>
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="200"
        class="swiper-l"
        @slideChangeTransitionEnd="slideChanged"
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.img"
          class="item"
        >
          <img :src="slide.img" :class="`item-img`" />
          <div class="item-title" v-html="slide.name"></div>
        </swiper-slide>
      </swiper>
      <transition-group name="slide-fade" class="content_all" mode="out-in">
        <div
          class="content"
          v-for="(slide, index) in slideList"
          v-show="index === slideIndex"
          :key="slide.img"
        >
        <img :src="slideList[slideIndex].titleimg" :class="`title-img`" :alt="slideList[slideIndex].title" />
          <div class="subtitle" v-html="slideList[slideIndex].subtitle"></div>
          <div class="desc" v-html="slideList[slideIndex].desc"></div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
  height: size(740);
  z-index: 2;
}
// .swiper-button-prev, .swiper-button-next {
//   top: 63%;
// }
.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;
  z-index: 0;

  &:nth-child(1) {
    // position: relative;
  }
}
.content_all{height: 100%;display:flex;align-items: center;flex:1;//width: size(780);
}
.content {
  width: size(620);
  z-index: 3;
  //top: size(0);
  text-align: left;
  //left: size(1128);
  //position: absolute;
  font-size: size(16);
  line-height: 2.25;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  font-weight: 500;
  color: #ffffff;
}
.title-img{
  width:size(511);  
  margin-bottom:0em;}
.title {
  font-size: 2.5em;
  font-weight: bold;
}

.subtitle {
  font-size: 1.5em;
}

.desc {
  font-size: 1em;
}

.swiper-l {flex:2;float: left;width: size(1100);height: size(667);margin:36px 0 0 0;display:flex;align-items: center;
}
.item{text-align:left;}
.item-img {
  width: auto;
  height: size(667);
}

.item-title {
  font-size: calc(100vw * 16 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: 0.48px;
  text-align: right;
  color: #ffffff;
  position: absolute;
  right: size(160);
  bottom: size(10);
  text-shadow: 0 0 5px#000;
}

.swiper-slide {
  background: url('./s10/swiper_bg.png');
  background-size: cover;
}

// begin
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // margin-top: 50px !important;
  opacity: 0;
}
// end
.slide-fade-enter {
  margin-top: 10px !important;
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
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
  .bg {
    background-size: cover;
    position: relative;
    overflow: hidden;
    position: relative;
    height: size-m(455);
    display: block;
    z-index: 3;

    > img {
      display: block;
    }

    > div {
      display: block;
    }
  }
.title-img{
  width:100%;}

.bg span:last-child .content:last-child  .title-img{margin-left:size-m(-30);}
  .bg-img {
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    display: block;
    object-fit: cover;
    z-index: 0;

    // &:nth-child(1) {
    //   position: relative;
    // }
  }

  .swiper-l {
    width: 100vw;
    height:auto;
    margin: 0;
    float: none;
  }

  .content_all{
     height:size-m(220);
     width: 85vw;margin: auto;

  }
  .content {
    width:100%;
    //top: auto;
    //bottom: size-m(50);
    font-size: size-m(12);
  }

  .title-logo {
    width: 100vw;
    z-index: 10;
  }

  .title {
    width: 100%;
  }

  .desc {
    width: 100%;
  }
  .item-title{
    right:size-m(55);}

  .item-img{width: auto;
  height:calc(100vw * 667 / 1100 );margin: 0 auto 0 0;}
.swiper-slide {
  background: url('./mo/10/swiper_bg.png');
  background-size: cover;
}
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section10',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      isHide: true,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        loop: true,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          img: require('./s10/img1.jpg'),
          name: '情境示意',
          titleimg: require('./s10/title1.png'),
          title: '衛浴面盆',
          subtitle: '德國國寶品牌 歐洲各國、皇室愛用',
          desc:
            '■ 輕盈堅固，以俐落線條來表現時尚優雅之美<br />■ 簡潔設計能完美融入各種風格的浴室設計<br />■ 使用特殊的塗層更耐用持久，打掃清潔更輕鬆',
        },
        {
          img: require('./s10/img2.png'),
          name: '全熱交換器示意圖',
          titleimg: require('./s10/title2.png'),
          title: '阿拉斯加HEPA 全熱交換器',
          subtitle: '供應新鮮氧氣　兼具除蟎殺菌',
          desc:
            '■ 具排氣、進氣功能，不開窗也有自然通風效果<br />■ 配備HEPA過濾網、奈米光觸媒殺菌燈<br />■ 醫療級空氣清淨效果，將過敏原排除屋外',
        },

        {
          img: require('./s10/img3.jpg'),
          name: '隔音地墊示意圖',
          titleimg: require('./s10/title3.png'),
          title: '隔音地墊',
          subtitle: '豪宅建案御用 隔音公法首選',
          desc:
            '■ 最先進技術與製程打造MIT無毒環保隔音墊<br/>■ 不含甲醛，不會逸散對人體有害物質<br/>■ 接縫面積少、施工速度更快，貼合面也更平整',
        },
        {
          img: require('./s10/img4.jpg'),
          name: '全智能馬桶示意圖',
          titleimg: require('./s10/title4.png'),
          title: '全智能馬桶',
          subtitle: '全球衛浴領導 喜來登酒店選用',
          desc:
            '■ 西班牙百年品牌，銷售遍及135國，深受使用者愛戴<br/>■ 全球唯一全瓷化無死角一體成形馬桶，易清潔又時尚<br/>■ 源自歐洲的強勁沖水技術，極少量水即可帶走髒汙',
        },
        {
          img: require('./s10/img6.jpg'),
          name: '情境示意',
          titleimg: require('./s10/title6.png'),
          title: 'INAX',
          subtitle: '',
          desc:
            '■ 起源於日本六大古窯之一從燒製磁磚起家，用心於改良產品創造廁所文化至今<br/>■ 2in1閥芯及便利的置放平台與引流設計<br/>■ 側向手持花灑使小孩與年長者方便使用',
        },
        {
          img: require('./s10/img5.jpg'),
          name: '情境示意',
          titleimg: require('./s10/title5.png'),
          title: '大雅廚具',
          subtitle: '聖瑪格麗特石英石　100%產自義大利',
          desc:
            '■ 吸水率只有0.07%，有極高的抗腐蝕能力<br/>■ 接觸高溫不易形成凹痕和焦斑，最高達莫氏硬度7<br/>■ 檯面無需打磨，日常只需用清水及肥皂沖洗清潔',
        },
      ],
    }
  },

  methods: {
    slideChanged(e) {
      const swiper = this.$refs.mySwiper.swiper
      if (swiper.isEnd) {
        this.slideIndex = 0
      } else if (swiper.isBeginning) {
        this.slideIndex = swiper.slides.length - 3
      } else {
        this.slideIndex = swiper.activeIndex - 1
      }
    },
  },
}
</script>
