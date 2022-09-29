<template>
  <div class="section5">
    <div class="img1" data-aos="zoom-in-right"><img src="./s1/music2.png" alt="img" />
      <div class="f1">
        <img src="./s1/f11.png" alt="" loading="lazy" />
        <img src="./s1/f12.png" alt="" loading="lazy" />
        <img src="./s1/f13.png" alt="" loading="lazy" />
        <img src="./s1/f14.png" alt="" loading="lazy" />
      </div></div>
    <div class="content">
      <div class="title" data-aos="zoom-in" data-aos-delay="200">
        站前之心<br v-if="isMobile" /> 沙鹿完美加值
      </div>
      <div class="desc" data-aos="zoom-in" data-aos-delay="400">
        生活機能超成熟，居住便利很完美。沙鹿國中小雙學區，文教素質領先。<br />
市集連鎖、麥當勞、星巴克，銀行、區公所、光田醫院面面俱到。<br />
近距三井OUTLET 遊憩購物天堂，一擁海線最豐富的生活饗宴。<br /><br />

三大商圈動能 生活滿意加分 <br />
站前複合式商圈｜政府機關 金融中心 大型連鎖<br />
家樂福光華商圈｜五大銀行 美食連鎖 量販購物<br />
北勢頭生活商圈｜小吃美食 校園商圈 美食健身
</div>
    </div>
    <div class="swiper">
    <swiper :navigation="true" :options="swiperOption" ref="mySwiper" data-aos="flip-up" data-aos-delay="200" class="item-list flex-jb flex-as">
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
.section5 {
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
.img1{width: size(245);position: absolute;left: size(25);top: size(30);
z-index: 2;
img{
  &:first-child{width:136%;
position: absolute;
    top: 42%;
    left: 50%;
}
}
 .f1{width: 100%;
position: relative;
  img{
position: absolute;
    &:first-child{position: relative;width: 100%;
  animation: an2 4s ease-in-out infinite alternate;top: 0;left: 0;
  transform-origin: 0 50%;}
    &:nth-child(2){width: 27%;
    top: 46%;
  animation: an3 4s ease-in-out infinite alternate;
    left: 56%;}
    &:nth-child(3){width: 54.2%;top: 31%; left: 0%;
  animation: an3 4s ease-in-out infinite alternate;}
    &:nth-child(4){width: 46.5%;
    top: 7%;
  animation: an3 4s ease-in-out infinite alternate;
    left: 55%;}
  }
  }
@keyframes an2{
  to {transform:skewY(-3deg);}
}
@keyframes an3{
  to {transform:translateY(-10%);}
}
}

.content {
  //@include img_r_pc(622, 0, 0);
  //height: 100%;
  //in-height: size(1080);
 // background: #bccf00;
  padding: 4.8em 0 0 0;
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
  margin: 0 auto 1.15em;

}

.subtitle {
  font-size:1.5em;
  font-weight: bold;
  margin: 0 auto .3em;
}

.desc {
  font-family:  'Noto Sans TC', sans-serif;

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
.img1{width: sizem(130);position: absolute;left: sizem(-40);top: sizem(-10);
z-index:4;
img{
  &:first-child{
    top: 37%;transform: rotate(-3deg);
}}
}
  .content {
  font-size: sizem(14);
  }
.title {
  font-size:1.65em;
  line-height: 1.5;
  margin: 1.5em auto 0.7em;

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
  name: 'section5',

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
        slidesPerView: isMobile ? 1 : 2,
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
          img: require("./s3/1.jpg"),
          name: "情境示意參考圖",
        },
        {
          img: require("./s3/2.jpg"),
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
