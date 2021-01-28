<template>
  <div class="bg">
    <div>
      <div class="animate-slide" v-if="!isMobile">
       <!--  <img src="./s1/1.png" 
        :alt="`${info.caseName}logo`" class="left1" data-parallax="0">
        <img src="./s1/2.png" alt="" class="left2">
        <img src="./s1/4.png" alt="" class="left3"> -->
        <img src="./s1/pc4.png" 
        :alt="`${info.caseName}_logo`" class="pc4" data-parallax="4">
        <img src="./s1/pc3.png" 
        :alt="`${info.caseName}_ogo`" class="pc3" data-parallax="3">
        <img src="./s1/pc2.png" 
        :alt="`${info.caseName}_logo`" class="pc2" data-parallax="2">
        <img src="./s1/pc1.png" 
        :alt="`${info.caseName}_logo`" class="pc1" data-parallax="1">
      </div>
      <div class="animate-slide" v-if="isMobile">
        <!-- <img src="./s1/2.png" alt="" class="left2">
        <img src="./s1/4.png" alt="" class="left3"> -->
        <img src="./s1/mo3.png" alt="" class="mo3" data-parallax="3">
        <img src="./s1/mo2.png" alt="" class="mo2" data-parallax="2">
        <img src="./s1/mo1.png" alt="" class="mo1" data-parallax="1">
      </div>
      <div class="s1">
        <div class="t1">
        <span>202</span>1桃園最潮的生活浪潮</div>
      <img src="./s1/logo.png" 
        :alt="`${info.caseName}_logo`" class="logo">
      <img src="./s1/t2.png" 
        :alt="`${info.caseName}_logo`" class="t2">
      <img src="./s1/t.png" alt="" class="t">
        <div class="t3">（03）325-7555</div>
      <img src="./s1/t4.png" alt="" class="t4">
      <div class="order-btn flex-c" v-scroll-to="{element: '#contact'}">
          <div>
            <img src="./s1/reservation.png" :alt="`${info.caseName}_reservation`">
            <div>搶先預約</div>
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.71 16.72' fill='%23ffb321'%3E%3Cpolygon class='cls-1' points='10.36 16.72 20.71 0 0 0 10.36 16.72'/%3E%3C/svg%3E"  
        :alt="`${info.caseName}_logo`" class="botton">
          </div>
        </div>
      </div>
       <!-- <parallax breakpoint="(min-width: 68px)" :speed-factor="-0.7" direction="up">
        <div class="order-btn flex-c" v-scroll-to="{element: '#contact'}">
          <div>
            <img src="./s1/reservation.png" :alt="`${info.caseName}_reservation`">
            <div>搶先預約</div>
            <parallax class="botton" breakpoint="(min-width: 68px)" :speed-factor="-0.255" direction="up">
            <img src="./s1/botton.png" 
        :alt="`${info.caseName}_logo`">
        </parallax>
          </div>
        </div>
      </parallax> -->
      <!-- <parallax :class="`animate-slide`" breakpoint="(min-width: 68px)" :speed-factor="0.5" direction="down"> -->
      
      <!-- </parallax> -->
    </div>
  </div>
</template>
<style lang="scss">
.Masthead,
.Masthead__image {
  height: auto;
  min-height: 73.875rem;
  z-index: 3;
}
.Masthead__image > img {
  height: auto;
  min-height: auto;
  object-fit: contain;
}

.Masthead__image.is-parallax > img {
  height: auto;
  min-height: auto;
}
.is-parallax {
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .Masthead,
  .Masthead__image {
    height: auto !important;
    min-height:152vw;
  }
}
</style>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  // z-index: 5;
  height:size(900);
  background: #2d73ab;
 // background-size: cover;

}
.s1 {
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  width: 100%;
  position: absolute;
}

.logo {
  @include img_c_pc(779, 353);
  top:calc(50% - 14.5vw);
}

.t {
  @include img_l_pc(410, 0,668);
  top:calc(50% + 14.8vw);
}

.t1 {
  @include img_c_pc(1920, 50);
  letter-spacing: 0.5em;
  font-weight: 500;
  font-size: size(49);
  text-align: center;
  color: #ffb321;
  margin-left: 0.3em;
span{
  letter-spacing: 0.1em;}
}
.t2{
  @include img_c_pc(567, 0);
  top:calc(50% + 3vw);
}
.t3 {
  @include img_c_pc(659, 50);
  top:calc(50% + 18vw);
  letter-spacing: -0.015em;
  font-weight:700;
  font-size: size(60);
  text-align: left;
  color: #fff;
span{
  letter-spacing: 0.1em;}
}
.t4{
  @include img_r_pc(303, 0,420);
  top:calc(50% - 3.7vw);
    animation: an3 3s infinite alternate;
    transform-origin: 10% 90%
}

.order-btn {
  @include img_r_pc(200, 0,560);
  top:calc(50% + 12.3vw);
  z-index: 10;
  height: size(200);
  background-color: #ff6855;
  border-radius: 999px;
  font-size: size(34);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.1em;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  > div {position: relative;
    width: 100%;top:-0.3em;
  }
  img{
  height:0.485em;}
  &:hover{
    animation: an4 3s infinite;}
}

.botton {
  position: absolute;
  top:calc(50% + 1.5em);
  left:0;
  width: 100%;
  height:size(18);
}

.animate-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s;
  > img {
    @for $i from 1 through 10 {
      $randomNum: random(4) + 3;
      &:nth-child(#{$i}) {
        transform: translateY((random(10) - 50) + px);
        animation: an ($randomNum + s) 3s infinite alternate;
      }
    }
  }

  .left1 {
    @include img_l_pc(314, 417, 0);
  }

  .left2 {
    @include img_l_pc(240, -150, 220);
    transform: rotate(30deg) !important;
    animation: none !important;
  }

  .left3 {
    @include img_l_pc(18, 654, 235);
  }

  .pc1 {
    @include img_r_pc(1706, 0, 114);
  }

  .pc2 {
    @include img_r_pc(1962, 52, -44);
  }

  .pc3 {
    @include img_r_pc(1994, 400, -44);
  }

  .pc4 {
    @include img_r_pc(1700, 630,200);
  }
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}
@keyframes an3 {
  to {
    transform: rotate(5deg);
  }
}
@keyframes an4 {
  80% {
    transform: scale(1.2)rotate(5deg);
  }
  85% {
    transform: scale(1) ;
  }
  90% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    width: 100vw;
    background-size: cover;
    margin: 0;
    height: sizem(172 + 376);
    position: relative;
    z-index: 2;
   // overflow: hidden;

  }
.s1 {
  height:  sizem(172 + 176);
  min-height: sizem(172 + 176);
  max-height:  sizem(172 + 176);
}
  .logo {
    @include img_c_m(300, 190);
  }

  .t {
    @include img_c_m(232, 450);
  }
.t1 {
  @include img_c_m(375, 135);
  font-size: sizem(21);
  letter-spacing: 0.2em;
  margin-left: 0.1em;}

.t2{
  @include img_c_m(280, 320);
}
.t3 {
  @include img_c_m(375, 482);
  font-size: sizem(34);
  text-align: center;margin-right: 0.3em}
.t4{
  @include img_r_m(70, 310,0);
    animation: an3 3s infinite alternate;
    transform-origin: 10% 90%
}

  .order-btn {
    @include img_c_m(172, 610);
    z-index: 10;
    height: sizem(172);
    font-size: sizem(30.3);
    > div {
      width: 100%;
      cursor: pointer;
    }
  &:hover{
    animation:none;}
  }


  .animate-slide {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s;
    > img {
      @for $i from 1 through 10 {
        $randomNum: random(4) + 3;
        &:nth-child(#{$i}) {
          transform: translateY((random(10) - 50) + px);
          animation: an ($randomNum + s) 3s infinite alternate;
        }
      }
    }

    .left1 {
      // @include img_l_pc(314, 417, 0);
      display: none;
    }

    .left2 {
      // @include img_l_pc(240, -150, 220);
      // transform: rotate(30deg) !important;
      // animation: none !important;
      display: none;
    }

    .left3 {
      // @include img_l_pc(18, 654, 235);
      display: none;
    }

    .mo1 {
      @include img_r_m(375, 50, 0);
    }

    .mo2 {
      @include img_l_m(375, 0, -24);
    }

    .mo3 {
      @include img_r_m(200, 44, -24);
    }
  }
}
</style>

<script>
// @ is an alias to /src
import info from '@/info'
import { isMobile, isTablet } from '@/utils'
// import slider from '@/mixins/slider.js'
// import Parallax from '@/components/Parallax.vue'
// import 'swiper/dist/css/swiper.css'
import Parallax from '@/components/Parallax.vue'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section7',

  // mixins: [slider],
  components: {
    // swiper,
    // swiperSlide,
    Parallax,
  },

  data() {
    return {
      info,
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1.4 : 1,
        centeredSlides: true,
        spaceBetween: isMobile ? -10 : 30,
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

      // slideList: [
      //   {
      //     src: require('./s6/1.png'),
      //     title: 'INTERIOR SPACE',
      //     subtitle: '國際一線美學，名門傲氣優雅',
      //     desc: '代表作品∣頤海大院．台中帝寶．開璽吾界． SKY1',
      //   },
      //   {
      //     src: require('./s6/2.png'),
      //     title: 'ARCHITECTURE',
      //     subtitle: '動感琴鍵協奏，定義奢華高度',
      //     desc: '代表作品∣波爾多．江翠ONE．金城舞2',
      //   },
      //   {
      //     src: require('./s6/3.png'),
      //     title: 'LANDSCAPE',
      //     subtitle: '環境人文思考，都會繁花盛放',
      //     desc: '代表作品∣維多利亞酒店．碧波白',
      //   },
      // ],

      imgIndex: 0,
      isShowDialog: false,
    }
  },

  computed: {},

  methods: {
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  created() {},
  mounted() {},
}
</script>
