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
      </div>
      <!-- <div class="desc">太子建設蓋房子，秉持集團「三好一公道」的企業精神，講求地段好、設計好、施工好、價格公道。</div> -->
      <div class="block">
        <swiper
          :options="swiperOption"
          ref="mySwiper"
          data-aos="fade"
          data-aos-delay="100"
          class=""
          @slideChangeTransitionStart="slideChanged"
        >
          <div
            class="swiper-button-prev"
            slot="button-prev"
          >
          </div>
          <div
            class="swiper-button-next"
            slot="button-next"
          >
          </div>

          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            :class="`item ${slideIndex == 1 ? 'small' : ''}`"
          >
            <img
              :src="slide.img"
              :class="`img1`"
              v-show="slideIndex == index"
            />
            <!-- <div v-html="slide.name"></div> -->
          </swiper-slide>
          <div
            class="swiper-pagination"
            slot="pagination"
          ></div>
        </swiper>
        <div
          class="box1"
          data-aos="fade-right"
          data-aos-delay="400"
        ></div>
        <div
          :class="`box2 aos-init aos-animate ${slideIndex == 1 ? 'small' : ''}`"
          data-aos="fade-left"
          data-aos-delay="700"
        ></div>
        <div class="t-content">
          <div
            class="t-title"
            v-html="slideList[slideIndex].title"
          ></div>
          <div
            class="t-subtitle"
            v-html="slideList[slideIndex].subtitle"
          ></div>
          <div
            class="t-name"
            v-html="slideList[slideIndex].name"
          ></div>
          <div
            class="t-desc1"
            v-html="slideList[slideIndex].desc1"
          ></div>
          <div
            class="t-desc2"
            v-html="slideList[slideIndex].desc2"
          ></div>
        </div>
      </div>
      <div class="b-block">
        <img
          src="./s4/img2-1.jpg"
          alt=""
          class="b-img"
        >
        <div>實際外觀與環境合成輔予修飾</div>
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
    <div
      v-else
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
      </div>
      <div class="block">
        <swiper
          :options="swiperOption"
          ref="mySwiper"
          data-aos="fade"
          data-aos-delay="100"
          class=""
          @slideChangeTransitionStart="slideChanged"
        >
          <div
            class="swiper-button-prev"
            slot="button-prev"
          >
          </div>
          <div
            class="swiper-button-next"
            slot="button-next"
          >
          </div>

          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            :class="`item ${slideIndex == 1 ? 'small' : ''}`"
          >
            <img
              :src="slide.img"
              class="img1"
              v-show="slideIndex == index"
            />
            <!-- <div v-html="slide.name"></div> -->
          </swiper-slide>
          <div
            class="swiper-pagination"
            slot="pagination"
          ></div>
        </swiper>
        <div
          class="box1"
          data-aos="fade-right"
          data-aos-delay="400"
        ></div>
        <div
          :class="`box2 aos-init aos-animate ${slideIndex == 1 ? 'small' : ''}`"
          data-aos="fade-left"
          data-aos-delay="700"
        ></div>
      </div>
      <div class="t-content">
        <div
            class="t-title"
            v-html="slideList[slideIndex].title"
          ></div>
          <div
            class="t-subtitle"
            v-html="slideList[slideIndex].subtitle"
          ></div>
          <div
            class="t-name"
            v-html="slideList[slideIndex].name"
          ></div>
          <div
            class="t-desc1"
            v-html="slideList[slideIndex].desc1"
          ></div>
          <div
            class="t-desc2"
            v-html="slideList[slideIndex].desc2"
          ></div>
      </div>

      <div class="b-block">
        <img
          src="./s4/img2-1.jpg"
          alt="建築外觀"
          class="b-img"
        >
        <div>建築實際外觀與環境合成輔予修飾外觀</div>
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
  text-align: left;
}
.box1 {
  position: absolute;
  background: #da007f66;
  width: 66px;
  height: 66px;
  top: 115px;
  left: 63px;
  z-index: 7;
}
.box2 {
  position: absolute;
  background: #da007f;
  width: 227px;
  height: 53px;
  bottom: 0;
  left: 323px;
  z-index: 7;
  transition: all .5s;

 /* &.small {
    height: 20px;
    width: 150px;
    left: 230px;
    bottom: 200px;
  }*/
}
.img {
  width: 100%;
  position: relative;
}
.img1 {
  width: 24%;
  position: relative;
  margin: 140px 0 30px 7%;z-index: 1;
}
.item{
  display: block;
  &.small{
    &::before,
    &::after{content:"";display:block;position: absolute;width: 24%;margin: 140px 0 30px 7%;height: 100%;z-index: 2;top: 0;left: 0;}
    &::before{background: url("./s4/img_lll.png");}
    &::after{background: url("./s4/img1-21.png") repeat 0 0 ;background-size: 100% auto;}
  }
}

.t-content {
  position: absolute;
  width: 750px;
  top: 150px;
  left: 580px;
  text-align: justify;
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
  text-indent: -.5em;
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
  + div {
    align-self: flex-end;
    margin: 0 -100px 10px -400px;
    color: #fff;
  }
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
  color: #595757;
  margin: 0 0 60px 0;
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

.swiper-container {
  position: static;
}

.swiper-pagination {
  transform: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: auto;
  bottom: -20px;
}

.swiper-button-prev,
.swiper-button-next {
  border: 0px none #0000 !important;
  width: 2em;
  font-size: size(25);
  height: 100%;
  top:2em;
  padding: 0 size(10);
  display: flex;
  margin: 0;align-items: center;
  z-index: 3;
  &::before{
    width: 1em;
    height: 1em;
    display: block;
    content:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.28 28.67' fill='%230006'%3E%3Cpolygon points='14.33 28.67 16.28 26.72 3.79 14.23 16.18 1.84 14.33 0 0 14.33 14.33 28.67'/%3E%3C/svg%3E");}

}

.swiper-button-prev {
  left: 0;
}
.swiper-button-next {
  transform: rotate(180deg);
  right: 0;
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
  /*
.img1 {
  &.small {
  margin: 165px 0 30px 6%;
  width: 33%;
  }
}*/

  .box1 {
    width: 51px;
    height: 51px;
    top: 90px;
    left: 49px;
  }
  .box2 {
    width: 179px;
    height: 42px;
    left: 252px;
 /* &.small {
    bottom: 100px;
  }*/
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .container {
    width: 100vw;
  }
  .title-block {
    margin-top: size-m(100);
    .logo {
      width: 72px;
      height: auto;
      margin-bottom: 15px;
    }

    .left-border,
    .right-border {
      width: 14px;
      height: 6px;
      background: #d8007c;
      opacity: 0.5;
    }
    .t-block {
      width: 100vw;
      margin: 0 auto;
    }
    .title {
      font-size: size-m(21);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.21;
      letter-spacing: 0.76px;
      text-align: center;
      color: #da007f;
    }

    .desc {
      font-size: size-m(13);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.7;
      letter-spacing: 0.46px;
      text-align: left;
      color: #808080;
      margin-top: 20px;
      margin-bottom: 30px;
      text-align: center;
    }
  }

  .img1 {
    width: 45%;
    position: relative;
    margin: 9% 0 5% 14%;
  }
.item.small{
    &::before,
    &::after{width: 45%;margin: 9% 0 5% 14%;}
}

  .t-content {
    position: relative;
    width: size-m(313);
    top: auto;
    left: auto;
    margin: 0 auto;
    margin-top: 30px;
  }

  .t-title {
    font-size: size-m(19);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 0.64px;
    text-align: left;
    color: #595757;
    margin-bottom: 20px;
  }

  .t-subtitle {
    font-size: size-m(16);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 1.35px;
    text-align: left;
    color: #595757;
  }

  .t-name {
    font-size: size-m(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: 1.04px;
    text-align: left;
    color: #595757;
    margin-bottom: 20px;
  }

  .t-desc1 {
    font-size: size-m(12);
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
    font-size: size-m(12);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.51;
    letter-spacing: 0.63px;
    text-align: left;
    color: #808080;
    margin-bottom: 45px;
  }

  .b-block {
    position: relative;
    display: block;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .b-img {
    width: 100vw;
    + div {
      margin: -1.5em 0.5em 2.5em 0;
      text-align: right;
    }
  }

  .b-content {
    width: size-m(298);
    margin: 30px auto;
  }

  .b-title {
    font-size: size-m(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.42;
    letter-spacing: 0.86px;
    text-align: center;
    margin-bottom: 20px;
  }

  .b-desc {
    font-size: size-m(12);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: 0.42px;
    text-align: justify;
    color: #808080;
  }
  

.swiper-button-prev,
.swiper-button-next {
  top:0;
}

  .box1 {
    width: size-m(35);
    height: size-m(35);
    top: size-m(20);
    left: size-m(29);
  }
  .box2 {
    width: size-m(120);
    height: size-m(30);
    bottom: size-m(40);
    left: size-m(206);

   /* &.small {
      width: size-m(100);
      height: size-m(20);
      left: size-m(206);
      bottom: size-m(40);
    }*/
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
  name: 'section4',
  mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        autoplay: {
          delay: 6000,
          // disableOnInteraction: true,
        },
        loop: true,
        // direction: 'vertical',
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      slideList: [
        {
          img: require('./s4/img1.jpg'),
          title: '建築大師第一 重塑南區天際線',
          subtitle: 'CHL ARCHITECT＆ASSOCIATES',
          name: '呂建勳 建築師',
          desc1:
            '「從發現的原點出發，傳遞自然、簡約的精神，保留城市人文最單純的精粹。」',
          desc2:
            '美國哈佛大學Harvard University建築及都市設計碩士、呂建勳建築師事務所首席建築師、淡江大學建築系兼任講師、東海大學建築學士。',
        },
        {
          img: require('./s4/img1-2.jpg'),
          title: '燈光計劃第一 新店建築新地標',
          subtitle: 'LIGHTING DESIGN & CONSTRUCTION',
          name: '蘭克斯照明',
          desc1: '&nbsp;&nbsp;成立於1975年，先後設計規劃無數海內外照明工程，如：台北101大樓建築燈光及室內公共區域燈光設計及施工、控制；與日本伊東豊雄建築設計事務所共同參與備有45,000座位的高雄世運主場館燈光設計及承攬照明工程完成；以及無數位於台灣的五星級旅館之燈光設計及照明工程承攬。',
          desc2:
            'About獲獎紀錄<br />1998 榮獲台北市建築夜間照明金質獎－新光三越信義店(A11)<br />1999 榮獲高雄市建築夜間照明最優獎－高雄85國際廣場大樓(T&C Tower)<br />2003 榮獲台北101金融大樓最優秀專業指定協力廠商<br />2009 榮獲高雄市運主場館優良燈光設計獎',
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

  mounted() {},

  computed: {},
}
</script>
