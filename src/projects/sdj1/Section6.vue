<template>
  <div class="section6">
    <div class="bg">
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="400"
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.src"
          class="item"
        >
          <img
            :src="slide.src"
            :class="`item-img`"
            :alt="slide.title"
          />
          <!-- <img
            v-lazy="slide.src"
            :class="`item-img2`"
            :alt="slide.title"
          /> -->
          <div class="slide-title absolute" v-html="slide.title"></div>
          <div class="absolute desc">{{slide.desc}}</div>
        </swiper-slide>
        <div
          class="swiper-button-prev"
          slot="button-prev"
        >
          <img
            src="./all/箭頭2.png"
            class="arrows"
            alt
          />
        </div>
        <div
          class="swiper-button-next"
          slot="button-next"
        >
          <img
            src="./all/箭頭1.png"
            class="arrows"
            alt
          />
        </div>
        <!-- <div v-if="!isMobile"
          class="swiper-pagination"
          slot="pagination"
        ></div> -->
      </swiper>
    </div>
  </div>
</template>
<style lang="scss">
.arrows {
  //background-color: rgba(0, 0, 0, 0.4);
}
</style>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';

.bg {
  position: relative;
  height: size(828);
  overflow: hidden;

  &::v-deep {
    .swiper-pagination {
      width: 100%;
      left: auto;
      bottom: 0px;
      right: 20px;
    }
    .swiper-pagination-bullet {
      width: size(18);
      height: size(18);
      box-shadow: 0 0 0 1px #fff;
      background-color: transparent;
      opacity: 1 !important;
      margin: 0 8px;
      float: right;
      background-color: #9e9e9e;
    }

    .swiper-pagination-bullet-active {
      background-color: #000;
    }
  }
}

.swiper-container {
  width: size(1570);
  height: size(740);
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  margin: 0 auto;
    font-size: size(16);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    line-height: 1.81;
    text-align: left;
    color: #000;
    background:#fff;
    &::before{
      content: "";
      background: linear-gradient(to right,  #906926 0%,#d8ad61 25%,#8a6832 50%,#d8ad61 75%,#906926 99%);
      position: absolute;top:0;left:0;
  width:100%;
  height:100%;
    }
    &::after{
      content: "";
      background: #FFF;position: absolute;top:size(5);left:size(5);
  width: size(1560);
  height: size(730);
    }
  img {
    display: block;
  }
}
.swiper-button-prev, .swiper-button-next{top:25%;}
  .txt {
    font-size: size(12);
    top: calc(50% + 30vw);
  }
  .slide-title {
    font-weight:900;
    font-size: 2.187em;
    left:1em;background: #FFF;
    bottom: 0.45em;letter-spacing:0.24em;
    display: inline-block;
    &::after{content: "";position: absolute;top: 0;left: 0;width: 100%;height: 100%;
background: linear-gradient(to right,  #906926 0%,#d8ad61 25%,#8a6832 50%,#d8ad61 75%,#906926 99%);
mix-blend-mode:screen;}
  }
  .desc{background: #FFF;
    font-size: 1em;
    bottom: 2.1em;right: 2em;letter-spacing:0.05em;}
.item-img {
  width: size(1500);
  height: size(620);
  object-fit: cover;
  object-position: center;margin:size(35) 0 0 size(35);
  background-color: #fff;
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
    height: size-m(650);
    background-color: #fff;
    padding-top: size-m(50);

    &::v-deep {
      .swiper-pagination {
        width: 100%;
        left: auto;
        bottom: 0;
        right: 0px;
        left: 0;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
      }
      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        box-shadow: 0 0 0 1px #fff;
        margin: 0 5px;
        background-color: #666666;
        opacity: 1 !important;
      }

      .swiper-pagination-bullet-active {
        background-color: #b70049;
      }
    }
  }

  .swiper-container {
    width: size-m(375);
    height: size-m(680);
    overflow: visible;
    position: absolute;
    left: 0;
    top: 0;
    font-size: size-m(15);
    &::before{
    width: size-m(335);
    height: size-m(635);top: size-m(0);left:size-m(20);
    }
    &::after{
    width: size-m(325);
    height: size-m(590);top: size-m(5);left:size-m(25);
    }

    img {
      display: block;
    }
  }
  .slide-title{line-height:1.5;top:13em;bottom:auto;width:size-m(275);
  padding: 0 0 0.7em 0;
  font-size: 1.854em;left:size-m(50);text-align: center;
  &::before{
    content: "";width: 100%;height:size-m(2);position: absolute;bottom:0;left: 0;background: #000;
  }}
  .desc{top:size-m(490);bottom:auto;left:size-m(50);right:size-m(50);}

  .item-img {
    top: 0;
    left: 0;
    width: size-m(375);
    height: size-m(340);
    object-fit: cover;
    object-position: center;margin:0 0;
  }
  .item-img2 {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    position: absolute;
    width: 100vw;
    height: auto;
    object-fit: contain;
    object-position: center;
    z-index: 2;
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
  name: 'section6',
  // mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerColumn: 1,
        // allowSlidePrev: isMobile ? true : false,
        // allowSlideNext: isMobile ? true : false,
        centeredSlides: true,
        lazy: true,
        // preloadImages: true,
        // cssMode: false,
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
        effect: 'fade',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
      },
      slideList: isMobile
        ? [
            {
              src: require('./mo/6/1.jpg'),
              title:"大廳<br>沉醉奢華",
              desc:"三五好友圍坐暢談，沉醉奢華美學氛圍，為你在生活裡留一處愜意新天地。",
            },
            {
              src: require('./mo/6/2.jpg'),
              title:"大廳<br>引景自然",
              desc:"在都市繁華中引入清新，大片長窗引入綠意伴你入坐，愛上家該有的輕鬆自然。",
            },
            {
              src: require('./mo/6/3.jpg'),
              title:"媽媽教室<br>味蕾饗宴",
              desc:"姊妹淘相約料理教室，品一道道人生美饌，閒暇時光都變成精采的快樂收藏。",
            },
            {
              src: require('./mo/6/4.jpg'),
              title:"交誼廳<br>得意盡歡",
              desc:"把下班時光，留給最值得的人，用一壺茶換一段舒心，用一本書換一場知識沙龍。",
            },
            {
              src: require('./mo/6/5.jpg'),
              title:"水景步道<br>水光舞影",
              desc:"水景與綠樹共舞，隨著晨昏變化景色，在日常必經的步道裡，展演四季詩意與大自然韻律。",
            },
            {
              src: require('./mo/6/6.jpg'),
              title:"中庭<br>四季流轉",
              desc:"浪漫夜燈亮起來，花樹添了繽紛，想起巴黎的浪漫，憶起巴里島度假的奢華時光。",
            },
            {
              src: require('./mo/6/7.jpg'),
              title:"童趣<br>繽紛樂園",
              desc:"孩子們從此愛上回家探險，用空間召喚五顏六色，加入孩子們的童年裡，一起遊戲、天天開心。",
            },
            {
              src: require('./mo/6/8.jpg'),
              title:"運動休閒<br>美式風格",
              desc:"陪孩子投籃運動，一起揮汗健康，撞球桌、電子飛鏢機，邀兄弟們享受運動酒吧的輕鬆氛圍。",
            },
            {
              src: require('./mo/6/9.jpg'),
              title:"麗景健身房<br>揮汗暢快",
              desc:"大片落地窗引入舒心綠意，邊揮汗邊欣賞水面上粼粼波光，鍛鍊肌力成為一種享受。",
            },
            {
              src: require('./mo/6/10.jpg'),
              title:"花園泳池<br>宅渡假時代",
              desc:"在泳池教會孩子游泳，是最美的親子時光，媲美渡假村級的享受，不用出國也能在家玩瘋樂!",
            },
            {
              src: require('./mo/6/11.jpg'),
              title:"頂樓觀景<br>夢幻聚場",
              desc:"傲人俯視遼闊高雄城心，來場姊妹淘貴婦午茶，或者在周末享受一個微醺之夜。",
            },
          ]
        : [
            {
              src: require('./s6/1.jpg'),
              title:"大廳˙沉醉奢華",
              desc:"三五好友圍坐暢談，沉醉奢華美學氛圍，為你在生活裡留一處愜意新天地。",
            },
            {
              src: require('./s6/2.jpg'),
              title:"大廳˙引景自然",
              desc:"在都市繁華中引入清新，大片長窗引入綠意伴你入坐，愛上家該有的輕鬆自然。",
            },
            {
              src: require('./s6/3.jpg'),
              title:"媽媽教室˙味蕾饗宴",
              desc:"姊妹淘相約料理教室，品一道道人生美饌，閒暇時光都變成精采的快樂收藏。",
            },
            {
              src: require('./s6/4.jpg'),
              title:"交誼廳˙得意盡歡",
              desc:"把下班時光，留給最值得的人，用一壺茶換一段舒心，用一本書換一場知識沙龍。",
            },
            {
              src: require('./s6/5.jpg'),
              title:"水景步道˙水光舞影",
              desc:"水景與綠樹共舞，隨著晨昏變化景色，在日常必經的步道裡，展演四季詩意與大自然韻律。",
            },
            {
              src: require('./s6/6.jpg'),
              title:"中庭˙四季流轉",
              desc:"浪漫夜燈亮起來，花樹添了繽紛，想起巴黎的浪漫，憶起巴里島度假的奢華時光。",
            },
            {
              src: require('./s6/7.jpg'),
              title:"童趣˙繽紛樂園",
              desc:"孩子們從此愛上回家探險，用空間召喚五顏六色，加入孩子們的童年裡，一起遊戲、天天開心。",
            },
            {
              src: require('./s6/8.jpg'),
              title:"運動休閒˙美式風格",
              desc:"陪孩子投籃運動，一起揮汗健康，撞球桌、電子飛鏢機，邀兄弟們享受運動酒吧的輕鬆氛圍。",
            },
            {
              src: require('./s6/9.jpg'),
              title:"麗景健身房˙揮汗暢快",
              desc:"大片落地窗引入舒心綠意，邊揮汗邊欣賞水面上粼粼波光，鍛鍊肌力成為一種享受。",
            },
            {
              src: require('./s6/10.jpg'),
              title:"花園泳池˙宅渡假時代",
              desc:"在泳池教會孩子游泳，是最美的親子時光，媲美渡假村級的享受，不用出國也能在家玩瘋樂!",
            },
            {
              src: require('./s6/11.jpg'),
              title:"頂樓觀景˙夢幻聚場",
              desc:"傲人俯視遼闊高雄城心，來場姊妹淘貴婦午茶，或者在周末享受一個微醺之夜。",
            },
          ],
    }
  },
  methods: {},

  created() {
    // @click="showIframeDialog(slide.link)"
  },
}
</script>
