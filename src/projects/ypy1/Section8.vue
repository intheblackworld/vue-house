<template>
  <div class="section8">
    <img src="./s8/t1.png" :alt="`${info.caseName}_img`" class="img t1">
    <img src="./s8/t2.png" :alt="`${info.caseName}_img`" class="img t2">
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
          <div class="prev-btn" @click="decIndex"></div>
          <div class="next-btn" @click="addIndex"></div>
        </div>
      </div>
    </div>
    <div class="hr" data-aos="zoom-in-down" data-aos-delay="0"></div>
    <h3 class="label" data-aos="fade-up" data-aos-delay="0">
      空間一品
    </h3>
    <h3 class="title" data-aos="fade-up" data-aos-delay="100">
      美式品味  雅仕42坪<br />
      玄關化身防疫第一關
    </h3>
    <div class="desc" data-aos="fade-up" data-aos-delay="200">參酌曼哈頓名流風格，以入口玄關做為回家的心境轉場，亦可配合主人需求，擺放殺菌消毒小物，瞬間化身防疫第一關，安心踏進一體成型的客餐廳空間，溫潤的木質元素，搭配白色系傢飾及圓弧造型天花板，勾勒清爽視野。優雅的主臥佈置，搭配活潑的兒童房設計，強化空間表情，運用間接照明方式，柔化空間質感，塑造溫馨又時尚的仕紳品味。
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: 100%;
  height: size(898);
  min-height: size(898);
  max-height: size(898);
  position: relative;
  z-index: 3;
  // min-height: size(900);
  // background-image: url('./s4/bg.jpg');
  background-color: rgba(96, 96, 96, 0.3);
  background-size: cover;
  // background-position: 0 0;
  background-attachment: fixed;
  // overflow: hidden;
}
.t1{ @include img_r_pc(459,0, 0);
top: auto;
bottom: size(-299 * .6);
z-index: 5;
}
.t2{ @include img_l_pc(463,-459 * .5, 0);
z-index: 5;}
.hr {
  @include img_l_pc(4, 118 + 166, 1270 - 12);
  height: size(128);
  background: #000000;
}

.label {
  @include img_l_pc(437, 110 + 166, 1270);
  width: auto;
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #4d4d4d;
}

.title {
  @include img_l_pc(447, 154 + 166, 1270);
  width: auto;
  font-size: size(35);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(550, 311 + 136, 1270);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  // white-space: nowrap;
}

/* Swipe */
.swipe {
  width: size(1242);
  height: size(898);
  top: size(0);
  left: 0;
  object-fit: cover;
  // background:#0344;
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

  .slide-name {
    left: 2em;
    bottom: 1.2em;
    color: #fff;
    font-size: size(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #000;
  }
}

.pagination {
  width: auto;
  bottom: size(44);
  right: 0;
  left: 0;
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: relative;
    background-color: transparent;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #fff;
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
      box-shadow: none;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #fff;
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

.swipe-btns {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    z-index: 3;

    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;

    .prev-btn,
    .next-btn {
      position: absolute;
      height: 100%;
      width: sizem(28);
      top: 0;
    }

    .prev-btn {
      left: 0;
    }
    .next-btn {
      right: 0;
      transform: scaleX(-1);
    }
    .prev-btn::after,
    .next-btn::after {
      content: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 30 80' xml:space='preserve'%3E%3Cpolygon fill='%23FFFFFF' points='15,40 30,0 15,20 0,40 15,60 30,80 '/%3E%3C/svg%3E");
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
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
  .section8 {
    width: 100vw;
    height: sizem(555);
    min-height: auto;
    max-height: initial;
    //  background-image: url('./all/section_bg.jpg');
    // background-attachment: scroll;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    // overflow: hidden;
  }
  .t1{ @include img_r_m(147,0, 0);
top: auto;
bottom: size(-128 * .6);
z-index: 5;
}
.t2{ @include img_l_m(172,-170 * .5, 0);
z-index: 5;}
  .hr {
    @include img_l_m(4, 21, 32);
    height: sizem(104);
    background: #000000;
  }

  .label {
    @include img_l_m(84, 20, 44);
  width: auto;
    font-size: sizem(21);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: left;
    color: #4d4d4d;
    z-index: 6;
  }

  .title {
    @include img_l_m(169, 50, 44);
  width: auto;
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    white-space: nowrap;
    z-index: 6;
  }

  .desc {
    @include img_l_m(310, 144, 32.5);
    font-size: sizem(12);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: justify;
    color: #000000;
    // white-space: nowrap;
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(241);
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
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'section8',

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
      swiperOption: {
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        centeredSlides: false,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          img: require('./s8/01.jpg'),
          name: '樣品屋實景拍攝',
        },
        {
          img: require('./s8/02.jpg'),
          name: '樣品屋實景拍攝',
        },
        {
          img: require('./s8/03.jpg'),
          name: '樣品屋實景拍攝',
        },
        {
          img: require('./s8/04.jpg'),
          name: '樣品屋實景拍攝',
        },
        {
          img: require('./s8/05.jpg'),
          name: '樣品屋實景拍攝',
        },
        {
          img: require('./s8/06.jpg'),
          name: '樣品屋實景拍攝',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

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
