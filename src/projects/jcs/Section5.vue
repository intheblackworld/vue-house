<template>
  <div class="section5">
    <!-- <img src="./s6/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
    <img src="./s6/bg_m.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile" data-aos="fade" data-aos-delay="0"> -->
    <img src="./s5/t.png" :alt="`${info.caseName}_img`" class="grass">

    <div class="content">
      <div class="line" data-aos="zoom-in-down" data-aos-delay="200">

      </div>
      <div class="label" data-aos="fade-left" data-aos-delay="400">
        ｜質感生活｜
      </div>
      <div class="title" v-if="isPC" data-aos="fade-left" data-aos-delay="600">
        豐收生活 把日子過得舒舒服服
      </div>
      <div class="title" v-if="isMobile" data-aos="fade-left" data-aos-delay="600">
        豐收生活<br />把日子過得舒舒服服
      </div>
      <div class="subtitle" data-aos="fade-left" data-aos-delay="800">
        大竹路滿分商圈、書香學校、陂塘步道、林映樹廊…活出舒適小日子
      </div>
      <div class="list-info flex-ac flex-jb" v-if="isPC" data-aos="fade-left" data-aos-delay="800">
        <div v-for="item in list" :key="item.title" class="info">
          <img :src="item.img" alt="">
          <div class="info-title" v-html="item.title"></div>
          <div class="info-desc" v-html="item.desc"></div>
        </div>
      </div>
    </div>
		<swiper :options="swiperOption" ref="mySwiper" data-aos="fade-down" data-aos-delay="800" data-aos-offset="-600" @slideChangeTransitionEnd="slideChanged">
      <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide + index" class="item">
        <img :src="slide.img" :class="`item-img`" />
        <p v-html="slide.p"></p>
      </swiper-slide>

      <div class="swiper-button-prev prev-btn" slot="button-prev">
      </div>
      <div class="swiper-button-next next-btn" slot="button-next">
      </div>
    </swiper>

		<swiper :options="swiperOption" ref="mySwiper" data-aos="fade-down" data-aos-delay="800" data-aos-offset="-600" @slideChangeTransitionEnd="slideChanged" v-show="isMobile && blockIndex === 0">
      <swiper-slide v-for="(slide, index) in slideList[0]" :index="index" :key="slide + index" class="item">
        <img :src="slide.img" :class="`item-img`" />
        <p v-html="slide.p"></p>
      </swiper-slide>

      <div class="swiper-button-prev prev-btn" slot="button-prev">
      </div>
      <div class="swiper-button-next next-btn" slot="button-next">
      </div>
    </swiper>
		<swiper :options="swiperOption" ref="mySwiper" data-aos="fade-down" data-aos-delay="800" data-aos-offset="-600" @slideChangeTransitionEnd="slideChanged" v-show="isMobile && blockIndex === 1">
      <swiper-slide v-for="(slide, index) in slideList[1]" :index="index" :key="slide + index" class="item">
        <img :src="slide.img" :class="`item-img`" />
        <p v-html="slide.p"></p>
      </swiper-slide>

      <div class="swiper-button-prev prev-btn" slot="button-prev">
      </div>
      <div class="swiper-button-next next-btn" slot="button-next">
      </div>
    </swiper>
		<swiper :options="swiperOption" ref="mySwiper" data-aos="fade-down" data-aos-delay="800" data-aos-offset="-600" @slideChangeTransitionEnd="slideChanged" v-show="isMobile && blockIndex === 2">
      <swiper-slide v-for="(slide, index) in slideList[2]" :index="index" :key="slide + index" class="item">
        <img :src="slide.img" :class="`item-img`" />
        <p v-html="slide.p"></p>
      </swiper-slide>

      <div class="swiper-button-prev prev-btn" slot="button-prev">
      </div>
      <div class="swiper-button-next next-btn" slot="button-next">
      </div>
    </swiper>
    <div class="btn" v-if="isMobile">
      <div class="btn_l" @click="blockIndex = prevIndex"><img :src="list[prevIndex].img" alt=""></div>
      <div class="btn_r" @click="blockIndex = nextIndex"><img :src="list[nextIndex].img" alt=""></div>
    </div>
    <div class="list-info flex-ac flex-jb" v-if="isMobile" data-aos="fade-left" data-aos-delay="800" data-aos-offset="-600">
      <transition-group name="swipe-fade" mode="out-in">
        <div v-for="(item, index) in list" :key="item.title" class="info" v-show="blockIndex === index">
          <img :src="item.img" alt="" @click="blockIndex = index">
          <div class="info-title" v-html="item.title"></div>
          <div class="info-desc" v-html="item.desc"></div>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: 100%;
  height: size(1283);
  min-height: size(1283);
  max-height: size(1283);
  position: relative;
  background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.grass {
  @include img_r_pc(385, 54, 55);
  transform-origin: bottom;
  animation: grass 4s ease-in-out alternate infinite;
}

@keyframes grass {
  to {
    transform: skewX(3deg);
  }
}

.line {
  @include div_l_pc(14, 176, 168 - 30, 326);
  background-color: #40220f;
}
.label {
  @include img_l_pc(208, 159 - 30, 370);
  font-size: size(30.5);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4.89);
  text-align: left;
  color: #595757;
  white-space: nowrap;
  z-index: 2;
}
.title {
  @include img_l_pc(825, 204 - 30, 370);
  font-size: size(66.1);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #595757;
  white-space: nowrap;
  z-index: 2;
}

.subtitle {
  @include img_l_pc(851, 301 - 30, 370);
  font-size: size(31);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(-1.24);
  text-align: left;
  color: #595757;
  white-space: nowrap;
  z-index: 3;
}

.list-info {
  @include img_c_pc(425 * 2 + 451, 369);
  img {
    width: size(335);
    margin: 0 auto size(77);
  }
  .info {
    width: size(425);
    padding: 0 size(26);
  }

  .info-title {
    width: size(375);
    font-size: size(26);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: size(1.56);
    text-align: left;
    color: #000000;
  }

  .info-desc {
    width: size(375);
    font-size: size(18);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.42;
    letter-spacing: size(1.08);
    text-align: left;
    color: #595757;
  }
}

.swiper-container {
  @include img_c_pc(425 * 2 + 451, 867);
}

.item{
p{position: absolute;
bottom: 0.5em;
right: 2em;
color: #FFF;
text-align: right;
font-size:size(15);
}
}
.item-img {
  width: 90%;
  margin: 0 auto;
}

.prev-btn,
.next-btn {
  height: 100%;
  width: 2em;
  font-size: size(20);
  right: 1em;
  top: 0;
  margin: 0;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateX(200%);
    background-color: #df6c0088;
    transition: all 0.3s;
  }
  &::after {
    content: '';
    width: 1em;
    height: 1em;
    position: absolute;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.75em);
    border: solid #fff;
    border-width: 0.1em 0.1em 0 0;
    transform: rotate(45deg) translate(-10%, 10%);
  }
  &:hover:before {
    transform: translateX(0%);
  }
  &:hover:after {
    animation: btn 0.5s ease-in-out infinite alternate;
  }
}
.prev-btn {
  transform: scaleX(-1);
  right: auto;
  left: 1em;
}
@keyframes btn {
  to {
    transform: rotate(45deg) translate(10%, -10%);
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
  .section5 {
    width: 100vw;
    height: sizem(898);
    min-height: auto;
    max-height: initial;
    // background-image: url('./all/section_bg.jpg');
    // background-attachment: scroll;
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }
  .grass {
    @include img_r_m(173, -100, 0);
    // top: auto;
    // bottom: sizem(-80);
    transform-origin: bottom;
    animation: grass 4s ease-in-out alternate infinite;
  }

  @keyframes grass {
    to {
      transform: skewX(3deg);
    }
  }

  // begin
  .trans-leave-to {
    opacity: 0;
    z-index: 0;
  }
  // end
  .trans-enter {
    opacity: 0;
    z-index: 1;
  }

  .trans-enter-active {
    transition: all 1.8s ease;
  }

  .trans-leave-active {
    transition: all 1.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .line {
    @include div_l_m(7, 177, 39, 33);
    background-color: #00808e;
  }
  .label {
    @include img_l_m(116, 39, 55);
    font-size: sizem(17);
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: sizem(2.72);
    text-align: left;
    color: #595757;
    white-space: nowrap;
    z-index: 2;
  }
  .title {
    @include img_l_m(250, 72, 55);
    font-size: sizem(25);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: #595757;
    white-space: nowrap;
    z-index: 2;
  }

  .subtitle {
    @include img_l_m(300, 156, 55);
    font-size: sizem(16);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: sizem(0.96);
    text-align: left;
    color: #595757;
    white-space: normal;
    z-index: 3;
  }

  .list-info {
    @include img_c_m(310, 233);
    img {
      width: sizem(245);
      margin: 0 auto sizem(17);
    }
    .info {
      position: absolute;
      top: 0;
      left: 0;
      width: sizem(310);
      padding: 0;
    }

    .info-title {
      width: sizem(310);
      font-size: sizem(22);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.18;
      letter-spacing: normal;
      text-align: left;
      color: #000000;
      margin-bottom: sizem(15);
    }

    .info-desc {
      width: sizem(310);
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.53;
      letter-spacing: sizem(0.6);
      text-align: left;
      color: #595757;
    }
  }

  .swiper-container {
    @include img_c_m(375, 577);
  }

.item{
p{
font-size:sizem(12);
}
}
  .item-img {
    width: 90%;
    margin: 0 auto;
  }

  .btn {
    position: absolute;
    top: sizem(250);
    width: 100%;
    left: 0;
    .btn_l,
    .btn_r {
      position: absolute;
      top: sizem(0);
      border-radius: sizem(50);
      background: #0001;
      transition: all 0.3s;
      padding: 3vw;
    transform:translateX(3%);
      &:hover {
        background: #0003;
      }
    }
    .btn_l {
      right: sizem(327);
  animation: btn 0.6s ease-in-out infinite alternate-reverse;
    }
    .btn_r {
      left: sizem(327);
  animation: btn 0.6s ease-in-out infinite alternate;
    }
    img {
      height: sizem(80);
    }
  }
@keyframes btn {
  to {
    transform:translateX(-3%);
  }
}
  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(259);
    min-height: auto;
    top: auto;
    bottom: 0;
    left: sizem(0);
    object-fit: cover;
  }

  // begin
  .swipe-fade-leave-to {
    opacity: 0;
    z-index: 0;
  }
  // end
  .swipe-fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .swipe-fade-enter-active {
    transition: all 0.5s ease;
  }

  .swipe-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  // begin
  // .swipe-left-leave-to {
  //   margin-left: -100vw;
  //   z-index: 0;
  // }
  // // end
  // .swipe-left-enter {
  //   opacity: 0.5;
  //   margin-left: 0;
  //   z-index: 1;
  // }

  // .swipe-left-enter-active {
  //   transition: all 0.5s ease;
  // }

  // .swipe-left-leave-active {
  //   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  // }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    // &:nth-child(1) {
    //   z-index: 1;
    //   // opacity: 1;
    // }

    // &.base {
    //   z-index: 1;
    //   opacity: 1;
    // }
    // &.active {
    //   z-index: 2;
    //   // opacity: 1;
    // }
    .slide-name {
      right: auto;
      top: auto;
      bottom: 1.2rem;
      right: 1.2rem;
      font-size: sizem(15);
    }
  }

  .pagination {
    width: auto;
    bottom: size(91);
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #004ea2;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transition: all 0.3s;
        transform-origin: center;
        transform: scale(0);
      }
      &.active {
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          display: block;
          background: #004ea2;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 0%;
          // transform: translateY(-50%);
          left: 0%;
          transform: scale(1);
        }
      }
    }
  }

  .prev-btn,
  .next-btn {
    font-size: sizem(15);
    &::before {
      background-color: #cc5b4e00;
    }
    &::after {
      border-color: #fff;
      border-width: 0.15em 0.15em 0 0;
      animation: btn 0.5s ease-in-out infinite alternate;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import info from '@/info'

export default {
  name: 'section5',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      blockIndex: 0,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 3,
        slidesPerGroup: isMobile ? 1 : 3,
        spaceBetween: isTablet ? 20 : 0,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        // effect : 'fade',
        /*   fadeEffect: {
    crossFade: true,
  },*/
        // centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: isMobile
        ? [
            [
            {
              img:require('./s5/1-1.jpg'),
              p:"華泰名品城"
            },
            {
              img:require('./s5/1-4.jpg'),
              p:"桃園機場捷運A18站"
            },
            ],
            [
            {
              img:require('./s5/2-1.jpg'),
              p:"大竹路商圈"
            },
            {
              img:require('./s5/2-2.jpg'),
              p:"大竹路商圈"
            },
            ],
            [
            {
              img:require('./s5/3-1.jpg'),
              p:"埤塘公園"
            },
            {
              img:require('./s5/3-2.jpg'),
              p:"二二八公園"
            },
            ],
          ]
        : [
            {
              img:require('./s5/1-1.jpg'),
              p:"華泰名品城"
            },
            {
              img:require('./s5/2-1.jpg'),
              p:"大竹路商圈"
            },
            {
              img:require('./s5/3-1.jpg'),
              p:"埤塘公園"
            },
            {
              img:require('./s5/1-2.jpg'),
              p:"大江購物中心"
            },
            {
              img:require('./s5/2-2.jpg'),
              p:"大竹路商圈"
            },
            {
              img:require('./s5/3-2.jpg'),
              p:"二二八公園"
            },
            {
              img:require('./s5/1-3.jpg'),
              p:"台茂購物中心"
            },
            {
              img:require('./s5/2-1.jpg'),
              p:"大竹路商圈"
            },
            {
              img:require('./s5/3-3.jpg'),
              p:"小公園"
            },
            {
              img:require('./s5/1-4.jpg'),
              p:"桃園機場捷運A18站"
            },
            {
              img:require('./s5/2-2.jpg'),
              p:"大竹路商圈"
            },
            {
              img:require('./s5/3-1.jpg'),
              p:"埤塘公園"
            },
            {
              img:require('./s5/1-5.jpg'),
              p:"宜家家居"
            },
            {
              img:require('./s5/2-1.jpg'),
              p:"大竹路商圈"
            },
            {
              img:require('./s5/3-2.jpg'),
              p:"二二八公園"
            },
            {
              img:require('./s5/1-6.jpg'),
              p:"興仁市民活動中心"
            },
            {
              img:require('./s5/2-2.jpg'),
              p:"大竹路商圈"
            },
            {
              img:require('./s5/3-3.jpg'),
              p:"小公園"
            },
            /*
            require('./s5/1-1.jpg'),
            require('./s5/2-1.jpg'),
            require('./s5/3-1.jpg'),
            require('./s5/1-2.jpg'),
            require('./s5/2-2.jpg'),
            require('./s5/3-2.jpg'),
            require('./s5/1-3.jpg'),
            require('./s5/2-1.jpg'),
            require('./s5/3-3.jpg'),
            require('./s5/1-4.jpg'),
            require('./s5/2-2.jpg'),
            require('./s5/3-1.jpg'),
            require('./s5/1-5.jpg'),
            require('./s5/2-1.jpg'),
            require('./s5/3-2.jpg'),
            require('./s5/1-6.jpg'),
            require('./s5/2-2.jpg'),
            require('./s5/3-3.jpg'),*/
          ],
      list: [
        {
          img: require('./s5/icon1.png'),
          title: '青埔國際視野、藝文書香都心，大竹迎接蛻變新未來',
          desc:
            '大竹位居桃園地理軸心，十分鐘銜接青埔版圖、藝文核心，兩種節奏與身段，自遊選擇生活頻率，華泰名品城、台茂、大江、Xpark、IKEA、棒球場、市立圖書館、展演中心，各種場景全方位輕鬆切換',
        },
        {
          img: require('./s5/icon2.png'),
          title: '麥當勞、星巴克、全聯…幸福滋味的滿分商圈',
          desc:
            '散步到大竹路商圈，日常生活所需齊備，假日悠閒的風味餐廳，全聯就是自己的大冰箱，美味時光輕鬆上桌。偶爾逛逛夜市，烤香腸、起司馬鈴薯、鹹酥雞…愜意自在的滋味，由你自己選擇',
        },
        {
          img: require('./s5/icon3.png'),
          title: '埔心溪河廊、大竹觀光休閒公園，四季漫步',
          desc:
            '私房散步路線，埔心溪白鷺鷥飛翔、大竹休閒公園粼粼波光、陂塘公園、上竹公園滿滿的大樹綠意；去年底全新開幕市立圖書館大竹分館，藝文書香讓親子相處的時光充滿歡笑幸福',
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

  created() {},

  mounted() {},

  computed: {

		prevIndex() {
			if (this.blockIndex === 0) {
				return 2
			} else {
				return this.blockIndex - 1
			}
		},
		nextIndex() {
			if (this.blockIndex === 2) {
				return 0
			} else {
				return this.blockIndex + 1
			}
		}
	},

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
