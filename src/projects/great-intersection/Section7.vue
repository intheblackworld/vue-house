<template>
  <div class="section7">
    <div class="img1" data-aos="zoom-in-left"><img src="./s1/music1.png" alt="img" />
      <div class="f1">
        <img src="./s1/f11.png" alt="" loading="lazy" />
        <img src="./s1/f12.png" alt="" loading="lazy" />
        <img src="./s1/f13.png" alt="" loading="lazy" />
        <img src="./s1/f14.png" alt="" loading="lazy" />
      </div></div>
    <div class="content">
      <svg class="txt" viewBox="0 0 1480 486" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M731.514 426.888C834.156 426.888 917.364 343.681 917.364 241.038C917.364 138.396 834.156 55.1885 731.514 55.1885C628.872 55.1885 545.664 138.396 545.664 241.038C545.664 343.681 628.872 426.888 731.514 426.888Z" fill="#E3B0B0"/>
<path d="M731.52 463.549C672.09 463.549 616.21 440.409 574.19 398.379C532.16 356.349 509.02 300.479 509.02 241.049C509.02 181.619 532.16 125.739 574.19 83.7193C616.22 41.6893 672.09 18.5493 731.52 18.5493C790.95 18.5493 846.83 41.6893 888.85 83.7193C930.88 125.749 954.02 181.619 954.02 241.049C954.02 300.479 930.88 356.359 888.85 398.379C846.82 440.409 790.95 463.549 731.52 463.549ZM731.52 20.6393C609.99 20.6393 511.11 119.519 511.11 241.049C511.11 362.579 609.99 461.459 731.52 461.459C853.05 461.459 951.93 362.579 951.93 241.049C951.93 119.519 853.05 20.6393 731.52 20.6393V20.6393Z" fill="url(#paint5)"/>
<path d="M881.26 76.8795L879.77 75.3995L912.44 42.4395H1079.76V44.5295H913.32L881.26 76.8795Z" fill="url(#paint5)"/>
<path d="M1079.76 436.149H912.44L879.77 403.189L881.26 401.709L913.32 434.049H1079.76V436.149Z" fill="url(#paint5)"/>
<path d="M1131.87 239.999H955.04V242.089H1131.87V239.999Z" fill="url(#paint5)"/>
<path d="M583.89 76.8795L551.83 44.5295H385.39V42.4395H552.71L585.38 75.3995L583.89 76.8795Z" fill="url(#paint5)"/>
<path d="M552.71 436.149H385.39V434.049H551.83L583.89 401.709L585.38 403.189L552.71 436.149Z" fill="url(#paint5)"/>
<path d="M510.11 239.999H341.27V242.089H510.11V239.999Z" fill="url(#paint5)"/>
<rect width="23.41" height="23.41" transform="translate(868.81 64.4395)" fill="url(#paint7)"/>
<rect width="23.41" height="23.41" transform="translate(572.93 64.4395)" fill="url(#paint7)"/>
<rect width="23.41" height="23.41" transform="translate(498.41 229.339)" fill="url(#paint7)"/>
<rect width="23.41" height="23.41" transform="translate(868.81 390.739)" fill="url(#paint7)"/>
<rect width="23.41" height="23.41" transform="translate(572.93 390.739)" fill="url(#paint7)"/>
<rect width="23.41" height="23.41" transform="translate(943.34 229.339)" fill="url(#paint7)"/>
<defs>
<linearGradient id="paint5" x1="385.39" y1="418.93" x2="954.021" y2="241.051" gradientUnits="userSpaceOnUse">
<stop stop-color="#E0B39E"/>
<stop offset="0.125" stop-color="#D28B75"/>
<stop offset="0.25" stop-color="#895043"/>
<stop offset="0.375" stop-color="#824B40"/>
<stop offset="0.5" stop-color="#BE806C"/>
<stop offset="0.625" stop-color="#DA9C86"/>
<stop offset="0.75" stop-color="#E2BCA9"/>
<stop offset="0.875" stop-color="#DCA18C"/>
<stop offset="1" stop-color="#7E4947"/>
</linearGradient>
<linearGradient id="paint7" x1="4.94748e-07" y1="11.7051" x2="23.41" y2="11.7051" gradientUnits="userSpaceOnUse">
<stop stop-color="#E0B39E"/>
<stop offset="0.125" stop-color="#D28B75"/>
<stop offset="0.25" stop-color="#895043"/>
<stop offset="0.375" stop-color="#824B40"/>
<stop offset="0.5" stop-color="#BE806C"/>
<stop offset="0.625" stop-color="#DA9C86"/>
<stop offset="0.75" stop-color="#E2BCA9"/>
<stop offset="0.875" stop-color="#DCA18C"/>
<stop offset="1" stop-color="#7E4947"/>
</linearGradient>
</defs>
</svg>

      <div class="title" data-aos="zoom-in" data-aos-delay="300">
        置產沙鹿<br />六大優勢<span>Advantage</span>
      </div>
      <ul class="desc desc1">
        <li data-aos="zoom-in" data-aos-delay="400">雙醫療中心</li>
        <li data-aos="zoom-in" data-aos-delay="500">門戶國際城</li>
      </ul>
      <ul class="desc desc2">
        <li data-aos="zoom-in" data-aos-delay="600">三大生活圈</li>
        <li data-aos="zoom-in" data-aos-delay="700">核心雙軸線</li>
      </ul>
      <ul class="desc desc3">
        <li data-aos="zoom-in" data-aos-delay="800">七大就業園區</li>
        <li data-aos="zoom-in" data-aos-delay="900">雙捷交匯線</li>
      </ul>
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
.section7 {
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
.img1{width: size(320);position: absolute;right: size(0);top: size(-70);
z-index: 2;
img{
  &:first-child{width:136%;
position: absolute;
    top: 36%;
    right: 43%;
}
      }
       .f1{width: 100%;transform:scaleX(-1);
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
  padding:3.6em 0 0 0;
  display: block;
  color:#603772;
  text-align: center;
  line-height: 1.3;
  font-size: size(50);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing:0.0em;
  margin: 0 auto 1.5em;
  position: relative;


}
.txt{
  width: size(1478);
 // margin-bottom: size(-370);
}

.title {
  position: absolute;
  top:size(320);
  left:calc(50% - 2.2em);
  font-weight: bold;
  font-size:1.15em;
  span{color: #FFF;display: block;
  font-size:0.65em;
  margin: 0.3em auto 0;
  font-weight: 300;
  font-family:  'Noto Sans TC', sans-serif;
}
}
.desc {
  position: absolute;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  font-size:0.9em;
  text-align: justify;
  font-family:  'Noto Sans TC', sans-serif;
  margin:0em auto;
  line-height: 1.5;
  letter-spacing:0.05em;
  overflow: hidden;
  li{list-style:inherit;margin: 0.3em 0 0.3em 0em;position: relative;
    background: #ECCCCC;
    text-align: center;border-radius: .8em;
    width: size(350);
  }
}
.desc1 {width:size(1200);
  top:size(175);
  left: calc(50% - #{size(1200 * .5)});
}
.desc2 {width:size(1478);
  top:size(370);
  left: calc(50% - #{size(1478 * .5)});
}
.desc3 {width:size(1200);
  top:size(565);
  left: calc(50% - #{size(1200 * .5)});
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
    font-weight: 300;
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
.img1{width: sizem(100);position: absolute;right: sizem(-10);top: sizem(-40);
z-index:4;
}
  .content {
  font-size: sizem(15);
.txt{
  width: sizem(360);
 // margin-bottom: size(-370);
}
  }
.title {
  //font-size:1.65em;
  font-size:1.1em;
  line-height: 1.5;
  top:sizem(82);
  span{
  margin: -0.3em auto 0;
}

}
.desc {
  li{
    width:7.5em;}
}
.desc1 {width:sizem(320);
  top:sizem(50);
  left: calc(50% - #{sizem(320 * .5)});
}
.desc2 {width:sizem(340);
  top:sizem(100);
  left: calc(50% - #{sizem(340 * .5)});
}
.desc3 {width:sizem(320);
  top:sizem(150);
  left: calc(50% - #{sizem(320 * .5)});
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
  name: 'section7',

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
          img: require("./s7/1.jpg"),
          name: "雙醫療中心",
        },
        {
          img: require("./s7/2.jpg"),
          name: "三大生活圈",
        },
        {
          img: require("./s7/3.jpg"),
          name: "五大就業園區",
        },
        {
          img: require("./s7/4.jpg"),
          name: "門戶國際城",
        },
        {
          img: require("./s7/5.jpg"),
          name: "核心雙軸線",
        },
        {
          img: require("./s7/6.jpg"),
          name: "雙捷交匯線",
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
