<template>
  <div class="section2">
    <img src="../projects/shin-lan/shin-lan/news/topbg2.jpg" alt="" class="bg-img" v-if="isPC">
    <img src="../projects/shin-lan/shin-lan/mo/news/topbg2.jpg" alt="" class="bg-img" v-else>
    <div class="shin-lan-title-v shin-lan-title-v-m title" data-aos="fade">
      最新<span data-aos="flip-right"></span>消息
    </div>
    <div class="container flex flex-jb flex-ab wrap">
      <div class="news-title" v-html="current_news.title"></div>
      <div class="news-subtitle" v-if="current_news.subtitle" v-html="current_news.subtitle"></div>
      <div class="news-date" v-html="`日期： ${current_news.date} 作者：${current_news.author}`"></div>
      <swiper :options="swiperOption" ref="mySwiper" class @slideChangeTransitionEnd="slideChanged" v-if="slideList.length > 0">
        <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide + index">
          <img :src="slide" :class="`item-img`" />
          <div class="card-content"></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination" v-if="isPC"></div>
        <div class="swiper-button-prev" slot="button-prev" v-if="isMobile"></div>
        <div class="swiper-button-next" slot="button-next" v-if="isMobile"></div>
      </swiper>
      <div class="news-desc" v-html="current_news.desc"></div>
      <div class="back-btn flex-c" @click="$router.push('/news')">回到最新消息</div>
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
  position: relative;
  margin: 0;
  background-size: cover;
  overflow: hidden;
  text-align: center;
  font-size: size(18);
  line-height: 1.67;
  letter-spacing: 0.08em;
  text-align: justify;

  // 手機版
  @include md {
    font-size: sizem(15);
    line-height: 2;
    letter-spacing: normal;
  }
}

.title {
  @include img_l_pc(60, 142, 341);
  color: #fff;

  @include md {
    @include img_l_m(40, 107, 56);
    font-size: sizem(28);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: sizem(1.68);
    text-align: left;
    color: #fff;
  }
}

.swiper-container {
  width: size(1240);
  @include md {
    width: sizem(335);
    margin: 0 auto;
  }
}

.container {
  width: size(1240);
  // max-height: size(1440);
  overflow: hidden;
  position: relative;
  margin: size(60) auto;
  padding-top: 0;

  @include md {
    width: sizem(310);
    margin: sizem(30) auto;
  }
}

// .content {
//   width: size(370);
//   margin-top: size(570);
//   text-align: left;

//   @include md {
//     width: 100%;
//     margin-top: 0;
//   }
// }

.item-img {
  width: size(1240);
  height: size(710);
  object-fit: cover;
  // height: size(333);

  @include md {
    width: sizem(335);
    height: sizem(200);
  }
}

.card-content {
  font-size: size(28);
  height: size(50);
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: size(1.4);

  @include md {
    height: sizem(30);
    font-size: sizem(23);
    border-bottom: none;
    text-align: center;
  }
}

.main-img {
  width: size(820);
  height: size(1016);
  object-fit: cover;
}

.news-title {
  font-family: 'Noto Serif TC', serif;
  font-size: size(47);
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: size(2.82);
  margin-top: size(30);

  @include md {
    font-size: sizem(24);
    line-height: 1.33;
    letter-spacing: normal;
  }
}

.news-subtitle {
  width: 100%;
  font-size: size(28);
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: size(1.4);
  margin-top:0.7em;

  @include md {
    font-size: sizem(17);
    letter-spacing: normal;
    // border-bottom: 1px solid #000;
  }
}

.news-desc {
  width: 100%;
  margin-top: size(20);
  margin-bottom: size(40);

  @include md {
  }
}

.news-date {
  color: #999;
  margin-top: size(10);
  margin-bottom: size(25);

  @include md {
  font-size: size-m(14);  
  }
 
}

.back-btn {
  clear: both;
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
  margin: 1.3em auto;
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
import { news } from '@/info/shin-lan'
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
      current_news: {},
    }
  },
  computed: {},

  methods: {
    slideChanged(e) {
      const swiper = this.$refs.mySwiper.swiper
      console.log(swiper.activeIndex, swiper.slides.length, 'eeee')
      if (swiper.isEnd) {
        this.slideIndex = 0
      } else {
        this.slideIndex =
          (swiper.activeIndex - 1) % this.current_news.imgs.length
      }
    },
  },

  mounted() {
    if (this.$route.params.id) {
      let id = this.$route.params.id
      this.current_news = news[id - 1]
      this.slideList = this.current_news.imgs
    }
  },

  watch: {},

  created() {},
}
</script>
