<template>
  <div class="section4">
    <div class="img1" data-aos="zoom-in-left"><img src="./s1/music1.png" alt="img" /><img src="./s1/f1.png" alt="img" /></div>
    <div class="content">
      <div class="title" data-aos="zoom-in" data-aos-delay="200">
        富域金流，中部科技走廊<br v-if="isMobile" />三大園區一脈共榮
      </div>
      <div class="subtitle" data-aos="zoom-in" data-aos-delay="400">
        台積電欽定奈米廠落定中科園區二期
      </div>
      <ul class="desc">
        <li data-aos="zoom-in" data-aos-delay="600"><span>台中科學園區</span>2021年產值破兆，與竹科並列全台產值破兆科學園區，佈局中科錢景就趁現在！</li>
        <li data-aos="zoom-in" data-aos-delay="800"><span>台中工業區</span>光電、精密電子享譽國際，年產值約3,300億元，提供約4萬個工作機會。</li>
        <li data-aos="zoom-in" data-aos-delay="1000"><span>科技精密園區</span>提供約2萬個工作機會，為全球重要的精密機械產業聚落。</li>
      </ul>
    </div>
    <div class="swiper">
    <swiper :navigation="true" :options="swiperOption" ref="mySwiper" data-aos="fade" data-aos-delay="200" class="item-list flex-jb flex-as">
      <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" :class="`item`">
        <img :src="slide.img" alt>
        <div class="slide-name absolute" v-html="slide.name"></div>
      </swiper-slide>
    </swiper>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <div class="prev-btn" slot="button-prev" v-if="isMobile"></div>
          <div class="next-btn" slot="button-next" v-if="isMobile"></div>
        </div>
        </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
$b_margin:size(50);
.section4 {
  width: 100%;
  height: auto;
  position: relative;
  &::after{
    pointer-events: none;
    content: "";
    display: block;
    position: absolute;
    top:$b_margin;
    left:$b_margin;
    right:$b_margin;
    bottom:$b_margin;
    z-index: 1;

     border: 2px solid transparent;
     border-image: linear-gradient(135deg, #db9d88 0%,#e2bda9 4%,#da927b 15%,#824b40 34%,#da927b 61%,#e2bda9 71%,#da927b 81%,#824b40 100%);
	  border-image-slice: 1;
  }
 // background: url("./s2/pc.png");
}
.img1{width: size(245);position: absolute;right: size(10);top: size(20);
z-index: 2;
img{
  &:first-child{width:136%;
position: absolute;
    top: 36%;
    right: 43%;
}
      &:last-child{width: 100%;transform:scaleX(-1);
position: relative;
    //  animation: an 3s linear alternate infinite
      }
      }
}

.content {
  //@include img_r_pc(622, 0, 0);
  //height: 100%;
  //in-height: size(1080);
 // background: #bccf00;
  padding:3.6em 0 0 0;
  display: block;
  color: #FFF;
  text-align: center;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  font-size: size(38);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing:0.0em;
 // height:20em;
  margin: 0 auto 3em;


}

.title {
  font-weight: bold;
  color: #DDAC98;
  font-size:1.36em;
  margin: 0 auto 0.4em;

}

.subtitle {
  font-size:1.27em;
  font-weight: bold;
  margin: 0 auto 1em;
  background:#DDAC98;
  color: #603772;
  width:18.5em;
  line-height: 1.25;
  border-radius: 1.5em;
  padding: 0 0 0.1em;

}

.desc {display: inline-block;
  font-size:0.9em;
  text-align: justify;
  font-family:  'Noto Sans TC', sans-serif;
  margin:0em auto;
  line-height: 1.5;
  letter-spacing:0.05em;
  overflow: hidden;
  li{list-style:inherit;margin: 0.3em 0 0.3em 1em;position: relative;
  &::before{
    content:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18' fill='%23F5E76D'%3E%3Cpath class='st0' d='M9,7L9,7L9,7L9,7L9,7c-0.4,0-1.5-1.1-2.5-2.7c-1-1.5,0-4,2.5-4l0,0h0c2.6,0,3.6,2.5,2.5,4C10.5,5.9,9.4,6.9,9,7z M4.3,6.5c-1.5-1-4,0-4,2.5c0,2.6,2.5,3.6,4,2.5C5.9,10.5,6.9,9.4,7,9C6.9,8.6,5.9,7.5,4.3,6.5z M6.5,13.7c-1,1.5,0,4,2.5,4l0,0h0c2.6,0,3.6-2.5,2.5-4c-1-1.5-2.1-2.6-2.5-2.7l0,0l0,0l0,0l0,0C8.6,11.1,7.5,12.1,6.5,13.7z M17.7,9c0-2.6-2.5-3.6-4-2.5c-1.5,1-2.6,2.1-2.7,2.5c0,0.4,1.1,1.5,2.7,2.5C15.2,12.6,17.7,11.6,17.7,9z'/%3E%3C/svg%3E");
    width: .6em;display:block;position: absolute;top: 0em;left: -1em;
  }
  span{
 font-weight: 800;display: inline-block;position: relative;margin: 0 0.5em 0 0 ;
  &::after{
    content: "";display: inline-block;margin: 0 0 -.1em  0.5em;
    height: .9em;width: 2px;background: currentColor;}
  }
  }
}

/* Swipe */
.swiper {
  width: 100%;
  height: size(586);
 // z-index: 1;
    position: relative;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.item {
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    width: 100%;
  height: 100%;
      object-fit: cover;
  }

  .slide-name {
    font-family: "Noto Sans TC";
    left: 0;
    width: 100%;
    bottom:0;
    color: #fff;
    font-size: size(16);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: right;
    text-shadow: 0 0.3em 1em #0003 ,0 0 .2em #000;
    padding: 0.7em;
  }
}

.pagination {
  width: auto;
  bottom:-2em;
  right: 0;
  left: 0;
  margin: 0 auto;
  justify-content: center;
  font-size: size(15);
}

.pagination-dot {
  padding:0.4em;
  margin: 0 0.4em;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 0.8em;
    height:0.8em;
    border-radius: 0.8em;
    position: relative;
    background-color: #fff9;
    transition: all 0.5s;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      background: #fff;
      border-radius: 50%;
      opacity: 1;
      position: absolute;
      top: 0;
      // transform: translateY(-50%);
      left: 0;
      transition: all 0.3s;
      transform-origin: 50% 50%;
      transform: scale(0);
    }
    &.active {
      &::before {
        transform: scale(1);
      }
    }
  }
}

.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 0;
  z-index: 3;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
    pointer-events: none;z-index: 3;
  .prev-btn,
  .next-btn {
    pointer-events:painted;
    position: relative;
    height: 100%;
    width: 2em;
    font-size: size(20);
    cursor: pointer;
    &::before {
      content: "";
    //  position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateX(100%);
      background-color: #0004;
      transition: all 0.3s;
    }
    &::after {
      content: "";
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
  }
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
.img1{width: sizem(160);position: absolute;right: sizem(-10);top: sizem(-10);
z-index:4;
}
  .content {
  font-size: sizem(14);
  color: #FFFC;
  }
.title {
  font-size:1.65em;
  line-height: 1.5;
  margin: 2.5em auto 0.7em;

}
.desc {
  margin:0em auto;
  font-size:1em;
  width: sizem(320);
  li{ 
  span{display:flex; color: #FFF;
  align-items: center;
    &::after{height: 1px;width: calc(100% - 8em);flex: 1;margin: 0 0 0 0.5em;}
  }
  }
}


  /* Swipe */
.swiper {
    height: sizem(250);
  }
.item {
    .slide-name {
      font-size: sizem(12);
    padding: 1em 1.3em;
    }
  }


  .swipe-btns {
    .prev-btn,
    .next-btn {
      font-size: sizem(15);
      background-color: rgba(0, 0, 0, 0);
      &::before {display: none;
      }
      &::after {
        border-color: #fff;
        border-width: 0.15em 0.15em 0 0;
        animation: btn 0.5s ease-in-out infinite alternate;
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from "@/utils";
import info from "@/info";
//import slider from "@/mixins/slider.js";
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section4',

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
      isAnimateBg: true,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween: 0,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        loop: isMobile ? true : false,
        autoplay: {
          delay: 5000,
          disableOnInteraction:isMobile ? false : true,
        },
         /*
        slidesPerColumn: isMobile ? 1 : 1,
       centeredSlides: isMobile ? true : false,

        slideToClickedSlide: isMobile ? true : false,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
        effect: 'fade',
        */
        navigation: {
          prevEl: '.prev-btn',
          nextEl: '.next-btn',
        },
      },
      slideList: [
        {
          img: require("./s4/1.jpg"),
          name: "情境示意參考圖",
        },
        {
          img: require("./s4/2.jpg"),
          name: "情境示意參考圖",
        },
        {
          img: require("./s4/3.jpg"),
          name: "情境示意參考圖",
        },
      ],
    }
  },

  methods: {
  },

  mounted() {
    if (this.isMobile) {
      this.toggleTimer = false
    }
  },

  created() {},

  computed: {
    // isCurrent() {
    //   return this.slideIndex
    // },
  },
}
</script>
