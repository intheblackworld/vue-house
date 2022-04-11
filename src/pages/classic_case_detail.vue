<template>
  <div class="section2">
    <div class="container flex flex-jb flex-ab wrap">
      <div class="left">
        <div class="side-bar">
          <swiper :options="swiperOption" ref="mySwiper" class @slideChangeTransitionEnd="slideChanged">
            <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img + index">
              <img :src="slide.img" :class="`item-img`" />
              <div class="card-content"></div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination" v-if="isPC"></div>
            <div class="swiper-button-prev" slot="button-prev" v-if="isMobile">
            </div>
            <div class="swiper-button-next" slot="button-next" v-if="isMobile">
            </div>
          </swiper>
        </div>
        <div class="content">
          <div class="current-tab">{{type_text}}</div>
          <div class="shin-lan-title-h shin-lan-title-h-m title" data-aos="fade" v-if="isPC">
            經典<span data-aos="flip-right"></span>案例
          </div>
          <div class="case-title" v-html="current_case.title"></div>
          <hr>
          <div class="case-desc" v-html="current_case.desc"></div>
          <div class="back-btn flex-c" @click="$router.go(-1)">回到上一頁</div>
        </div>
      </div>
      <div class="right" v-if="isPC">
        <img :src="slideList[slideIndex].img" alt="" class="main-img">
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.swiper-pagination{
  //宜娟把點選範圍條大版
  .swiper-pagination-bullet{
  width: 2em;
  height: 2em;
  margin: 0 !important;
  opacity: 1;
  position: relative;
  transition:color .3s ;
  color: #333;
  background: none;
  border-radius: 0;
  &::before{
    content: "";
    width: 50%;
    height:50%;
    background: currentColor;
    display: block;position: relative;
    top: 25%;left: 25%;

  }
  &::after{
    content: "";
    width: 50%;
    height:50%;
    background: #b18863;
    display: block;position: absolute;
    top: 25%;left: 25%;
    border-radius: 50%;
    transform:scale(0);
    transition: transform 0.3s,border-radius 0.2s 0.2s;

    }
  &.swiper-pagination-bullet-active {
  &::after{
    border-radius: 0%;
    transform:scale(1);
    }
  }
  &:hover{
  color: #666;}
  }
}

.swiper-button-prev, .swiper-button-next {
  top: 100%;
  height: 25px;
  width:30%;
 // background-color: rgba(0, 0, 0, .5);
  &::before{
    content: "";
    position: relative;
    left: 20%;
    border: 1px solid #666;
    border-width: 0 0 1px 1px;
    width: 50%;display: block;
    height: 40%;
    transform:skewX(-45deg);

  }
}

.swiper-button-prev{
  left: 0
}
.swiper-button-next {
  right: 0;transform: scaleX(-1)
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.swiper-pagination {
  top: auto;
  bottom: .5em;
  font-size: size(15);
  text-align: left;
  left: -.5em;
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
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

.section2 {
  width: 100%;
  // height: size(715);
  position: relative;
  margin: 0;
  // background: url('s1/bg.jpg') center;
  background-size: cover;
  overflow: hidden;
  text-align: center;
  // background-color: rgba(17, 17, 3, 0.11);
  font-size: size(18);
  line-height: 1.67;
  letter-spacing: 0.08em;
  text-align: justify;

  // 手機版
  @include md {
    // height: 100vh;
    // height: size(604);
    // min-height: calc(604 * 100vw / 375);
    // max-height: calc(812 * 100vw / 375);
    font-size: sizem(15);
    line-height: 2;
    letter-spacing: normal;
  }
}
.left{flex: 1;}
.right{position: relative;overflow: hidden;margin: 0 0 0 1em;
  width: size(820);}
.side-bar {
//  @include div_l_pc(736, 447, 150, 0);
  // height: 100%;
  margin:0 0 3em;
  padding: 1em 0 0 0;
  position: relative;
  &::before{
  content: "";
  background-color: rgba(17, 17, 3, 0.11);
  position: absolute;
  top: 0;
  right: 0;
  width: 200%;
  height: 100%;}

  @include md {
    width: 100%;
    height: sizem(385);
    position: relative;
    background-color: transparent;
  margin:2em 0 0em;
  padding: 0;
  &::before{display: none;}

  }
}

.swiper-container {
  margin: 0 auto 0 0;
  width: size(370);
  @include md {
    width: sizem(335);
    margin: 0 sizem(-12.5);
  }
}

.container {
  width: size(1240);
  // max-height: size(1440);
  // overflow: hidden;
  position: relative;
  margin: size(120) auto;
  padding-top: size(30);
    align-items:stretch;

  @include md {
    width: sizem(310);
    margin: 60px auto sizem(30);
  }
}

.content {
 // width: size(370);
 // margin-top: size(570);
 margin-right:size(20);

  @include md {
    width: 100%;
    margin-top: 0;
  }
}

.item-img {
  width: size(370);
  height: size(370);
  object-fit: cover;
  // height: size(333);

  @include md {
    width: sizem(335);
    height: sizem(294);
  }
}

.card-content {
  font-size: size(28);
  height: size(40);
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: size(1.4);
  // border-bottom: solid 1px #4d4d4d;

  @include md {
    height: sizem(30);
    font-size: sizem(23);
    border-bottom: none;
    text-align: center;
  }
}

.main-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  //height: size(1016);
  object-fit: cover;
  height: auto;
}

.case-title {
  font-size: size(28);
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: size(1.4);
  margin-top: size(30);

  @include md {
    font-size: sizem(24);
    line-height: 1.33;
    letter-spacing: normal;
  }
}

.back-btn {
    width: 10.7em;
  height: 2.7em;
  font-size: size(15);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.2em;
  text-align: center;
  color: #000;
  cursor: pointer;
  border: solid 1px #707070;
  transition: all 0.3s;
  position: relative;
  margin: 2.5em auto 0 auto;
  z-index: 3;

  &:hover {
    background-color: #000009;
    color: #fff;
  }

  @include md {
  font-size: sizem(15);
  }
}

.current-tab {
  display: inline-block;
  font-size: size(20);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4);
  text-align: left;
  color: #fff;
  background-color: #000;
  padding: 0.3rem 0.5rem;
  margin-bottom: size(15);

  @include md {
    width: 100%;
    font-size: sizem(20);
    margin-bottom: sizem(30);
  }
}

.pages {
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  text-align: left;
  color: #333;

  @include md {
    display: none;
  }

  .page-btn {
    width: size(40);
    text-align: center;
    border-right: 1px solid #c59c63;
    cursor: pointer;

    &:nth-last-child(1) {
      border-right: none;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import { case_list_1, case_list_2 } from '@/info/shin-lan'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section2',
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
      slideIndex: 0,
      swiperOption: {
        // direction: isMobile ? 'horizontal' : 'vertical',
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isTablet ? 20 : 0,
        slidesPerColumn: isMobile ? 1 : 1,
        // allowSlidePrev: isMobile ? true : true,
        // allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        loop: true,
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
      slideList: [],
      // blockIndex: 0,
      current_case: {},
    }
  },
  computed: {
    type_text() {
      return this.$route.params.type == 2 ? '合聯營造Holan' : '欣聯建設Shin-Lan'
    },
  },

  methods: {
    slideChanged(e) {
      const swiper = this.$refs.mySwiper.swiper
      console.log(swiper.activeIndex, swiper.slides.length, 'eeee')
      if (swiper.isEnd) {
        this.slideIndex = 0
      } else {
        this.slideIndex =
          ((swiper.activeIndex - 1) % this.current_case.imgs.length)
      }
    },
  },

  mounted() {
    if (this.$route.params.id) {
      let id = this.$route.params.id
      let type = this.$route.params.type
      if (type == 1) {
        this.current_case = case_list_1[id - 1]
      } else if (type == 2) {
        this.current_case = case_list_2[id - 1]
      }
      this.slideList = this.current_case.imgs
    }
  },

  watch: {},

  created() {},
}
</script>
