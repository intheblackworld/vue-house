<template>
  <div class="section11">
    <div v-if="!isMobile">
      <h3
        class="title absolute"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        集建築與藝術發想 文學派的大師陣容
      </h3>
      <!-- <transition-group
        name="slide-fade"
        mode="out-in"
      >
        <div
          class="slide-content absolute"
          v-show="slideIndex1 === index"
          v-for="(slide, index) in slideList1"
          :key="slide.desc"
        >
          <div
            class="item-title"
            v-html="slide.title"
          ></div>
          <div
            class="item-subtitle"
            v-html="slide.subtitle"
          ></div>
          <div
            class="item-desc"
            v-html="slide.desc"
          ></div>
        </div>
      </transition-group> -->
      <div
        class="border absolute"
        data-aos="fade-right"
        data-aos-delay="600"
      >
        <h3
          class="subtitle"
          v-html="slideList1[slideIndex].subtitle"
        >
        </h3>
        <p
          class="desc"
          v-html="slideList1[slideIndex].desc"
        >
          視家為內心停泊的港灣。以美學到機能再三推敲，細細梳理住宅的高感動<br />
          代表作 台大敦品、東騰千里、麗水自在、東煒泰和
        </p>
      </div>
      <img
        :src="slideList1[slideIndex].img2"
        alt=""
        class="main-img absolute"
        data-aos="fade-right"
        data-aos-delay="400"
      >

      <div class="img-list absolute">
        <div
          class="img-item"
          @click="goTo(index)"
          v-for="(slide, index) in slideList1"
          :key="slide.img"
          data-aos="fade-down"
          :data-aos-delay="800 + (index * 100)"
        >
          <h3
            class="img-title"
            v-html="slide.title"
          ></h3>
          <img
            :src="slide.img"
            alt=""
          >
        </div>
      </div>
    </div>
    <div v-else>
      <h3
        class="title absolute"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        集建築與藝術發想<br />文學派的大師陣容
      </h3>
      <swiper
        :options="swiperOption"
        ref="mySwiper"
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
          v-for="(slide, index) in slideList1"
          :index="index"
          :key="slide.img"
          class="item"
        >
          <img
            :src="slide.img"
            :class="`item-img`"
          />
          <div
            class="img-title"
            v-html="slide.title"
              data-swiper-parallax="-200"
          ></div>
          <div class="border absolute">
            <h3
              class="subtitle"
              data-swiper-parallax="-100"
              v-html="slide.subtitle"
            >
            </h3>
            <p
              class="desc"
              data-swiper-parallax="-300"
              v-html="slide.desc"
            >
            </p>
          </div>
        </swiper-slide>
        <!-- <div
            class="swiper-pagination"
            slot="pagination"
          ></div> -->
      </swiper>
    </div>
  </div>
</template>
<style lang="scss">
.swiper-pagination-bullet {
  background-color: #fff;
  box-shadow: inset 0 0 0 1px #c0c1c1;
  width: 15px;
  height: 15px;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background-color: #c0c1c1;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
// // begin
// .slide-fade-leave-to
// /* .slide-fade-leave-active for below version 2.1.8 */ {
//   // margin-top: 50px !important;
//   opacity: 0;
// }
// // end
// .slide-fade-enter {
//   margin-top: 10px !important;
//   opacity: 0;
// }

// .slide-fade-enter-active {
//   transition: all 0.5s ease;
// }

// .slide-fade-leave-active {
//   transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
// }
.section11 {
  width: 100%;
  height: 100vh;
  min-height: size(800);
  overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
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

.title {
  width: size(1390);
  top: size(40);
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: size(60);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.34;
  letter-spacing: 6.34px;
  text-align: center;
  color: #a38057;
  white-space: nowrap;
}

.main-img {
  width: size(430);
  top: calc(40% - 10vw);
  right: calc(60% - 1px);
}

.border {
  width: 64vw;
  height: size(340);
  top: calc(40% - 9.5vw);
  left: 18%;
  border: 1px solid #000;
  padding: 0 2em 0 20em;
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #000; //z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: size(20);
}

.subtitle {
  font-size: 1.8em;
  font-weight: bold;
  line-height: 1.34;
  letter-spacing: 0.08em;
  text-align: center;
  white-space: nowrap;
  position: relative;
  z-index: 2;
  margin: 0 0 0.5em 0;
}

.desc {
  line-height: 2.05;
  letter-spacing: 0.0em;
  text-align: justify;
}

.img-list {
  width: 100%;
  bottom: size(0);
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-item {
  width: size(200);
  margin: 0 1vw;
  img {
    width: 100%;
  }
  cursor: pointer;
}

.img-title {
  font-size: size(28);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.06;
  letter-spacing: 2.24px;
  text-align: center;
  color: #000000;
  margin-bottom: size(15);
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .section11 {
    height: size-m(800);
    min-height: auto;
  }

  .title {
    width:100%;
    top: sizem(85);
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 2px;
    text-align: center;
    color: #a38057;
    white-space: nowrap;
  }

  .main-img {
    width: size(536);
    top: size(180);
    left: size(311);
    display: none;
  }

  .border {
    width: sizem(290);
    height: auto;
    top: sizem(340);
    right: 0;
    left: sizem(-20);
    margin: 0 auto;
    border: none;
    padding: 0;
    font-size: sizem(16);
  }

  .subtitle {
    color: #000;
    font-size: 1.25em;
    line-height: 1.44;
    text-align: center;
    width: sizem(375);
  }

  .desc {
    font-weight: normal;
    line-height: 1.73;
    text-align: justify;
  }
  .swiper-container {
    top: sizem(230);
    overflow: visible;
  }
  .item-img {
    width: sizem(250);
  }

  .img-item {
    width: size(220);
  }

  .img-title {
    font-size: size-m(31);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.06;
    letter-spacing: 2.24px;
    text-align: center;
    color: #000000;
    margin-bottom: size(15);
    position: absolute;
    top: sizem(-61);
    left:size-m(-62.5);
    right: 0;
    margin: 0 auto;
    width:size-m(375);
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
  name: 'section11',
  mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1.5 : 1,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        centeredSlides: true,
        parallax: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        loop: true,
        // direction: 'vertical',
        // effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      slideList1: [
        {
          img: require('./s11/1.jpg'),
          img2: require('./s11/1l.jpg'),
          title: '【建築設計】',
          subtitle: ' 國家金質獎 常勝軍/邱垂睿',
          desc:
            '視「家」為内心停泊的港灣。以美學到機能再三推敲,細細梳理住宅的高感動<br>代表作｜台大敦品、東騰千里、麗水自在、東煒泰和',
        },
        {
          img: require('./s11/2.jpg'),
          img2: require('./s11/2l.jpg'),
          title: '【藝術創作】',
          subtitle: '英國皇家雕刻家協會會員/<br>貝馬丁Martyn Barratt',
          desc:
            '木雕石雕、燒窯玻璃創作家。以大自然為靈感,探討生生不息涵義<br>作品獲「英國西敏寺皇宮館藏」<br>代表作｜英國山谷驕傲雕刻公園、種子系列、又見春天、回憶藍色的山丘系列',
        },
        {
          img: require('./s11/3.jpg'),
          img2: require('./s11/3l.jpg'),
          title: '【公設美學】',
          subtitle: '君子尺度 恢宏高手/楊豪琳',
          desc:
            '20年資歷締造空間創意大膽、施工細準。行雲流水的驚嘆,贏得私人名邸推景<br>代表作｜亞昕天地昕、敦南苑、麗實W1、美麗殿',
        },
        {
          img: require('./s11/4.jpg'),
          img2: require('./s11/4l.jpg'),
          title: '【空間藝術】',
          subtitle: '借景創意 抒情寫手/楊慧姿',
          desc:
            '擅長以燈光交織空間情境,為居家營造出宛如HOME GALLERY的自在寫意<br>代表作｜中悅帝寶、非非想、麗水自在、明水體',
        },
        {
          img: require('./s11/5.jpg'),
          img2: require('./s11/5l.jpg'),
          title: '【結構工程】',
          subtitle: '深謀遠慮 安全職人/林文宗',
          desc:
            '以抗壓耐震、防火精益求精,打造建築是世代傳頌、安養富貴身心的堅實堡壘<br>代表作｜明日博、東西匯、東騰越、大可山石',
        },
        {
          img: require('./s11/6.jpg'),
          img2: require('./s11/6l.jpg'),
          title: '【景觀園藝】',
          subtitle: '花茂造景 禮敬生態/胡憲民',
          desc:
            '視每一片葉、為居家品味的對話源頭、代代養心的靜思語。開創庭園生機之美<br>代表作｜麗水自在、東騰齊石、明湖居、東騰千里',
        },
        // {
        //   img: require('./s5/img2-1.jpg'),
        //   title: '公設規劃<br />專業物管 盡享飯店體驗',
        // },
        // {
        //   img: require('./s5/img2-2.jpg'),
        //   title: '公設規劃<br />花園健身 百萬美景盡收眼底',
        // },
        // {
        //   img: require('./s5/img2-3.jpg'),
        //   title: '公設規劃<br />華美空間 也是專屬私人招待所',
        // },
      ],
      slideList2: [
        // {
        //   img: require('./s5/img2-1.jpg'),
        //   title: '公設規劃<br />專業物管 盡享飯店體驗',
        // },
        // {
        //   img: require('./s5/img2-2.jpg'),
        //   title: '公設規劃<br />花園健身 百萬美景盡收眼底',
        // },
        // {
        //   img: require('./s5/img2-3.jpg'),
        //   title: '公設規劃<br />華美空間 也是專屬私人招待所',
        // },
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

    showDialog(index) {
      this.isShowDialog = true
      this.dialogImg = this.dialogImgList[index]
    },
  },

  mounted() {},

  computed: {},
}
</script>
