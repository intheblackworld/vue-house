<template>
  <div class="relative">
    <img
      v-lazy="require('./s4/map.png')"
      alt="map"
      class="map-img absolute"
    >
    <!-- img
      v-lazy="require('./mo/4/img.png')"
      alt="bg"
      class="img absolute"
      v-if="isMobile"
     -->
     <div class="img absolute"></div>
    <img
      src="data:image/png;base64,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"
      alt="scale"
      class="scale absolute"
      v-if="isMobile"
      @click="isDialog = true"
    >
    <div
      class="txt absolute"
      v-if="!isMobile"
    >
    </div>
    <div
      class="dialog"
      v-if="isDialog"
    >
      <div><img
          v-lazy="require('./s4/area4_map.png')"
          alt="map"
          class="dialog-content"
        ></div><img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAKlBMVEVHcEz////z8fHz8fH////z8fHz8fHz8fHz8fHz8fHz8fHz8fHx7u708fEdE1r4AAAADnRSTlMAA0S1Bec3v6z4KcoaoNqzfoQAAAF6SURBVHjapZfLksMgDAQZwOLl/P/vboBydPAaXCPdkkq3TWBAuBoqHFmoQdynNIkcH6WVjztDSRI5PpVwOlfzkTxhgE/HGD44Q/ThyIKhknwEHzl+lnzUwPAuquEtn4/soV/Aq4Hge/mshj0fbryDGih+zsWrFQWZ/F08DNjz6QiCB3VpFbv8tHLx96pfw4klf7aSFg+pqRuW/OYlz9R/sHr/1B+wMQgeeGn6gqtRPMwmJOn4V4bwf7rhQ8//u4US7obYednzuj8s8ksYNH/70mQR/N2gfP9IGqA8Y5j5JTZ+P9J9TStx/HUwCVCv/DOGkupY2nBUoadb88/U11CagYdREE1DsP+JsU9jBeovxsRSZBaS8hMbBjoK9jBSBvuGEo1bGpSnNmVn3NbxdLDEdwcLTtvRBsvhuj/e3e54B91gKM+3OPYmC+/aPKdtnrXRtLa6FD8LaqB4zeadJwzcpQnDIN1gv3TZr30EPw3z4mm++pov39brf/0DkT4QydVQXNwAAAAASUVORK5CYII="
        alt=""
        class="close"
        @click="isDialog = false"
      >
    </div>
    <swiper
      class="absolute"
      :options="swiperOption"
      data-aos="fade"
      data-aos-delay="1000"
      ref="mySwiper"
      swiper-no-swiping
    >
      <swiper-slide
        v-for="(slide, index) in slideList"
        :index="index"
        :key="slide.img"
        class="item"
      >
        <img
          :src="slide.src"
          :class="`item-img`"
          :alt="slide.title"
        />
        <div class="slide-title absolute">{{slide.title}}</div>
      </swiper-slide>
      <div
        class="swiper-button-prev"
        slot="button-prev"
      >
        <img
          src="./s4/area4_preBtn.png"
          alt="preBtn"
        />
      </div>
      <div
        class="swiper-button-next"
        slot="button-next"
      >
        <img
          src="./s4/area4_nextBtn.png"
          alt="nextBtn"
        />
      </div>
    </swiper>
    <div
      class="title absolute"
      data-aos="fade"
      data-aos-delay="400"
    >加碼三強商圈<br />饗樂放大三倍</div>
    <div
      class="hr absolute"
      data-aos="fade"
      data-aos-delay="600"
    ></div>
    <div class="icon"></div>
    <div
      class="desc absolute"
      data-aos="fade"
      data-aos-delay="800"
    >讀秒到全聯，轉角明誠路，走幾步路，爆紅美食就入手。<br />玩不過癮，就近轉往文藻大學城，攻略懷舊系私房美食，<br />大餐之後想甩掉幸福肥，家到河堤綠帶輕鬆散步到。<br />
      同樣房價換屋，三大商圈隨心所欲，唯你獨饗滿足勝三倍<br />
      #明誠 #文藻 #河堤綠帶
    </div>
    <img
      v-lazy="require('./s4/bg.png')"
      data-aos="fade"
      data-aos-delay="1000"
      alt="bg"
      class="img absolute"
      v-if="!isMobile"
    >
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  height: size(1021);
  overflow: hidden;
  background-color: #fff;
}
.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.map-img {
  width: size(922);
  height: size(654);
  top: size(129);
  left: size(182);
  object-fit: cover;
  object-position: center;
}

.txt {
  width: size(638);
  height: size(654);
  background-color: #036ea8;
  top: size(129);
  right: size(178);
}

.img {
  width: size(594);
  right: size(211);
  top: size(505);
}
.title {
  font-size: size(48);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 6px;
  text-align: center;
  color: #fff;
  white-space: nowrap;
  top: size(177);
  right: size(338);
}

.hr {
  width: size(440);
  height: 2px;
  background-color: #fff;
  margin: auto;
  top: size(335);
  right: size(277);
}

.desc {
  width: size(480);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  top: size(358);
  right: size(254);
}

.swiper-container {
  width: size(370);
  height: size(200);
  overflow: visible;
  top: size(540);
  right: size(265);

  .item-img {
    width: size(370);
    height: size(200);
    object-fit: cover;
    display: block;
  }

  .slide-title {
    width: size(370);
    font-size: size(13);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.1em;
    text-align: right;
    color: #fff;
    bottom: size(-20);
    left: 0;
    right: 0;
    background-color: #036ea8;
  }
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
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
  .relative {
    height: size-m(713);
    overflow: hidden;
    background-color: #fff;
  }
  .map-img {
    width: size-m(316);
    height: size-m(274);
    top: size-m(27);
    left: size-m(30);
  }

  .txt {
    width: size-m(316);
    height: size-m(412);
    top: size-m(301);
    left: size-m(30);
    margin: 0;
  }
  .title {
    font-size: size-m(21);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 6px;
    text-align: center;
    color: #fff;
    white-space: nowrap;
    width: 100%;
    top: size-m(322);
    left: size-m(109);
    right: auto;
    width: size-m(136);
    // top: size-m((50 + 617) / 2);
    //right: size-m(50);
    // width: size-m(522 / 2);
  }

  .hr {
    width: size-m(261);
    top: size-m(396);
    left: size-m(57);
    // display: none;
  }

  .img {
    width: size-m(317);height:size-m(396);
      background-color: #036ea8;
    left:size-m((375 - 317) * 0.5 );
    top: size-m(301);
  }
.icon{background: #fff6;border-radius: 50%;position:absolute;
    width: size-m(30);
    height: size-m(30);
    top: size-m(412);
    left:calc(50% - 4vw);
    &::after{content: "";background: #fff;width: 80%;height: 6%;position:absolute;top:47%;left: 10%;}
    &::before{content: "";background: #fff;width: 6%;height: 80%;position:absolute;top:10%;left: 47%;}
    }
  .desc {
  display: none;
    font-size: size-m(12);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.74;
    letter-spacing: normal;
    letter-spacing: 0;
    text-align: justify;
    color: #fff;
    //white-space: nowrap;
    transform: scaleX(0.9);
    width: size-m(300);
    top: size-m(412);
    left: size-m(40);
    //  top: size-m((263 + 617) / 2);
    // right: size-m(138 / 2);
    // width: size-m(440 / 2);
  }

  .swiper-container {
    width: size-m(300);
    height: size-m(200);
    transform: scale(1.2);
    top: size-m(470);
    right: size-m((375 - 300) / 2 );
    overflow: visible;

    .item-img {
      width:100%;
      height: size-m(200);
      object-fit: cover;
      display: block;
    }

    .slide-title {
      width: 100%;
      font-size: size-m(12);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: 3.07px;
      text-align: center;
      color: #fff;
      bottom: size-m(0);
      right: 0;
      background-color: #036ea8;
    }
  }

  .scale {
    width: size-m(50);
    top: size-m(617 / 2 - 58);
    right: size-m(33);
    cursor: pointer;
  }

  .dialog {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 120;
    > div {
      width: 95vw;
      height: calc(100vh - 20px);
      background: rgba(0, 0, 0, 0.5);
      overflow: auto;
      position: absolute;
      margin: 10px 0 0 10px;
    }

    .dialog-content {
      width: 100%;
      height: auto;
      min-width: 1313px;
      min-height: 1082px;
      margin: 0;
    }

    .close {
      position: fixed;
      background: rgba(0, 0, 0, 0.5);
      padding: 10px;
      width: 50px;
      right: 30px;
      top: 20px;
      cursor: pointer;
      z-index: 5;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
// import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section4',
  // mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween: isMobile ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 2,
        // allowSlidePrev: isMobile ? true : false,
        // allowSlideNext: isMobile ? true : false,
        // centeredSlides: true,
        lazy: true,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
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

      isDialog: false,

      slideList: [
        // {
        //   src: require('./s4/MLD台鋁生活商場.jpg'),
        //   title: 'MLD台鋁生活商場',
        // },
        {
          src: require('./s4/漢神巨蛋.jpg'),
          title: '漢神巨蛋',
        },
        {
          src: require('./s4/義享天地.jpg'),
          title: '義享天地',
        },
        {
          src: require('./s4/好市多.jpg'),
          title: '好市多',
        },
        {
          src: require('./s4/悦誠廣場.jpg'),
          title: '悅誠廣場',
        },
        {
          src: require('./s4/大樂購物中心.jpg'),
          title: '大樂購物中心',
        },
        {
          src: require('./s4/家樂福.jpg'),
          title: '家樂福',
        },
        {
          src: require('./s4/天天新黃昏市場.jpg'),
          title: '天天新黃昏市場',
        },
        {
          src: require('./s4/本和里滯洪池公園.jpg'),
          title: '本和里滯洪池公園',
        },
        {
          src: require('./s4/文藻大學外語最高學府.jpg'),
          title: '文藻大學外語最高學府',
        },
        // {
        //   src: require('./s4/三民高中.jpg'),
        //   title: '三民高中',
        // },

        // {
        //   src: require('./s4/高雄榮民總醫院.jpg'),
        //   title: '高雄榮民總醫院',
        // },
        // {
        //   src: require('./s4/鼎金國中.jpg'),
        //   title: '鼎金國中',
        // },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
