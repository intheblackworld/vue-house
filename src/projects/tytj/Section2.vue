<template>
  <div class="relative">
    <div class="absolute imgs flex-jb flex-ac wrap">
      <div
        class="item"
        data-aos="fade"
        data-aos-delay="600"
      >
        <img
          src="./s2/1.jpg"
          alt=""
          class="img"
        >
        <div class="item-title">泰御花園</div>
      </div>
      <div
        class="item"
        data-aos="fade"
        data-aos-delay="650"
      >
        <img
          src="./s2/2.jpg"
          alt=""
          class="img"
        >
        <div class="item-title">印象太和</div>
      </div>
      <div
        class="item"
        data-aos="fade"
        data-aos-delay="700"
      >
        <img
          src="./s2/3.jpg"
          alt=""
          class="img"
        >
        <div class="item-title">新北南海段</div>
      </div>
      <div
        class="item"
        data-aos="fade"
        data-aos-delay="750"
      >
        <img
          src="./s2/4.jpg"
          alt=""
          class="img"
        >
        <div class="item-title">親家雲硯</div>
      </div>
      <div
        class="item"
        data-aos="fade"
        data-aos-delay="800"
      >
        <img
          src="./s2/5.jpg"
          alt=""
          class="img"
        >
        <div class="item-title">親家T3市政國際中心</div>
      </div>
      <div
        class="item"
        data-aos="fade"
        data-aos-delay="850"
      >
        <img
          src="./s2/6.jpg"
          alt=""
          class="img"
        >
        <div class="item-title">故宮博物院</div>
      </div>
    </div>
    <img
      src="./s1/wlogo.png"
      alt="泰御天鑄"
      class="absolute logo-b"
      data-aos="fade"
      data-aos-delay="400"
    >
    <div class="absolute txt">
      <h3
        class="title"
        data-aos="fade"
        data-aos-delay="400"
      >泰新<br />水電消防工程 精選業績</h3>
      <div
        class="hr"
        data-aos="fade"
        data-aos-delay="500"
      ></div>
      <div
        class="desc"
        data-aos="fade"
        data-aos-delay="600"
      >「泰新系統」長期耕耘專業水電領域，全台北、中、南都有知名代表作，曾打造公共工程、廠辦、商辦、商場、學校、住宅等多元建築作品，歷經多次國際高標考驗，曾與無數業界頂尖設計菁英合作，奠定完整而難得的跨領域水電經驗，更以32年專業作為實踐建築理念的新起點，成立「泰御建設」，多年經驗累積100% 的施工品質，2006年導入國外預製工法，由Victaulic原廠協助成立專業預製廠，開創國內第一家使用預製工法及防震工法之先創，「泰御建設」從開發、規劃、設計、施工，實踐力行精神，一步一腳印，每一細節皆嚴格把關、精準要求，完成智慧建築。</div>
    </div>
    <swiper
      :options="swiperOption2"
      ref="mySwiper2"
      data-aos="fade"
      data-aos-delay="200"
      v-if="isMobile"
    >
      <swiper-slide
        v-for="(slide, index) in slideList"
        :index="index"
        :key="slide.img"
      >
        <img
          :src="slide.img"
          alt=""
          class="item-img"
        >
        <h3 class="absolute item-title">
          {{slide.title}}
          <img
            @click="showDialog(index)"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQMAAABtzGvEAAAABlBMVEVHcExZV1f8sp6qAAAAAXRSTlMAQObYZgAAABpJREFUeAFjwA+YDwwcxf8fCD5gpQbUZXgBAP6+L1l0YJagAAAAAElFTkSuQmCC"
            alt="plus"
            class="plus"
          >
        </h3>
      </swiper-slide>
      <!-- <div
        class="swiper-pagination"
        slot="pagination"
      ></div> -->
    </swiper>
    <div
      class="dialog"
      v-if="isDialog"
    >
      <div>
        <img
          :src="slideList[dialogIndex].img"
          alt="map"
          class="dialog-content"
        >
      </div>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAKlBMVEVHcEz////z8fHz8fH////z8fHz8fHz8fHz8fHz8fHz8fHz8fHx7u708fEdE1r4AAAADnRSTlMAA0S1Bec3v6z4KcoaoNqzfoQAAAF6SURBVHjapZfLksMgDAQZwOLl/P/vboBydPAaXCPdkkq3TWBAuBoqHFmoQdynNIkcH6WVjztDSRI5PpVwOlfzkTxhgE/HGD44Q/ThyIKhknwEHzl+lnzUwPAuquEtn4/soV/Aq4Hge/mshj0fbryDGih+zsWrFQWZ/F08DNjz6QiCB3VpFbv8tHLx96pfw4klf7aSFg+pqRuW/OYlz9R/sHr/1B+wMQgeeGn6gqtRPMwmJOn4V4bwf7rhQ8//u4US7obYednzuj8s8ksYNH/70mQR/N2gfP9IGqA8Y5j5JTZ+P9J9TStx/HUwCVCv/DOGkupY2nBUoadb88/U11CagYdREE1DsP+JsU9jBeovxsRSZBaS8hMbBjoK9jBSBvuGEo1bGpSnNmVn3NbxdLDEdwcLTtvRBsvhuj/e3e54B91gKM+3OPYmC+/aPKdtnrXRtLa6FD8LaqB4zeadJwzcpQnDIN1gv3TZr30EPw3z4mm++pov39brf/0DkT4QydVQXNwAAAAASUVORK5CYII="
        alt=""
        class="close"
        @click="isDialog = false"
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  height: 100vh;
  // overflow: hidden;
  position: relative;
  //height: size(1080);
  background-attachment: fixed;
  background-image: linear-gradient(
    to right,
    #edbd5b,
    #edbc5b 29%,
    #d6a045 66%,
    #bf842e
  );
}

.imgs {
  width: size(326 * 3 + 13 * 6);
  left: size(810);
  top: 50%;
  transform: translateY(-46%);
  .item {
    width: size(326);
    margin: 0 size(13) size(45);
  }

  .img {
    width: 100%;
  }

  .item-title {
    font-size: size(28);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 4.2px;
    text-align: center;
    color: #68361a;
    margin-top: 4px;
    white-space: nowrap;
    font-family: 'Noto Serif TC', serif;
  }
}

.logo-b {
  width: size(472);
  left: size(275 - 472);
  top: size(846);
}
.txt {
  width: size(650);
  font-size: size(18);
  left: size(117);
  top: 50%;
  transform: translateY(-50%);
}
.title {
  top: size(250);
  left: size(117);
  font-size: size(55);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 3.3px;
  transform: scaleX(0.95);
  text-align: center;
  color: #ffffff;
  filter: drop-shadow(0 size(5) size(5) #78531d99);
}

.hr {
  width: size(597);
  height: 1px;
  background-color: #fff;
  margin: 1em auto;
  filter: drop-shadow(0 size(5) size(5) #78531d99);
}

.desc {
  width: size(597);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.8px;
  text-align: justify;
  margin: auto;
  color: #ffffff;
  filter: drop-shadow(0 size(5) size(5) #78531d99);
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    height: size-m(75 + 634 + 140);
  }
  .logo-b {
    display: none;
  }
  .txt {
    width: 100vw;
    left: 0;
    top: 0;
    font-size: size-m(18);
    transform: translateY(0);
  }

  .title {
    top: size-m(0);
    left: 0;
    right: 0;
    margin: 1em auto;
    font-size: size-m(27);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 1.62px;
    text-align: center;
    color: #ffffff;
  }

  .hr {
    width: size-m(315);
  }

  .desc {
    width: size-m(316);
    font-size: size-m(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 1.5px;
    text-align: left;
    color: #ffffff;
    top: size-m(104);
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .imgs {
    display: none;
  }

  .swiper-container {
    // width: size-m(251);
    height: size-m(281);
    top: size-m(323 + 180);
    // left: 0;
  }
  .item-img {
    width: size-m(251);
    height: size-m(251);
    object-fit: cover;
  }

  .item-title {
    width: 100%;
    text-align: center;
    color: #68361a;
    margin-top: 5px;
  }

  .plus {
    display: inline-block;
    width: size-m(20);
    transform: translateY(3px);
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
      width: 100%;
      height: auto;
      background: rgba(0, 0, 0, 0.5);
      overflow: auto;
      position: absolute;
      margin: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    .dialog-content {
      width: 100%;
      height: auto;
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
import { isMobile, isTablet } from '@/utils'
// import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section2',
  // mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      isMobile,
      dialogIndex: 0,
      isDialog: false,
      swiperOption2: {
        slidesPerView: isMobile ? 1.4 : 1,
        centeredSlides: true,
        spaceBetween: isMobile ? 10 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        effect: isMobile ? '' : 'fade',

        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        loop: true,
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
          img: require('./s2/1.jpg'),
          title: '泰御花園',
        },
        {
          img: require('./s2/2.jpg'),
          title: '印象太和',
        },
        {
          img: require('./s2/3.jpg'),
          title: '新北南海段',
        },
        {
          img: require('./s2/4.jpg'),
          title: '親家雲硯',
        },
      ],
    }
  },

  methods: {
    showDialog(index) {
      this.dialogIndex = index
      this.isDialog = true
    },
  },

  created() {},

  mounted() {},

  computed: {},
}
</script>
