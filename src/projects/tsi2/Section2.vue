<template>
  <div class="section2">
    <!-- <img src="./s1/bg1.jpg" :alt="`${info.caseName}_cloud`" class="bg-img" v-if="isPC">
    <img src="./s1/bg_m.jpg" :alt="`${info.caseName}_cloud`" class="bg-img" v-if="isMobile">  -->
    <img src="./s2/bg.png" :alt="`${info.caseName}_cloud`" class="wave">
    <img src="./s2/3d.png" :alt="`${info.caseName}_cloud`" class="img3d">
    <div class="title1 title">
      一次買最好
    </div>
    <div class="title2 title">
      住五股
    </div>
    <swiper :options="swiperOption" ref="mySwiper" data-aos="fade" data-aos-delay="200" class="item-list flex-jb flex-as">
      <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" :class="`item ${slideIndex === index ? 'active': ''}`">
        <div class="item-circle flex-c">
          <h3 v-html="slide.title1"></h3>
        </div>
        <div class="item-title" v-if="isPC">
          <h3 v-html="slide.title2"></h3>
        </div>
        <h3 class="item-desc" v-html="slide.desc">
        </h3>
      </swiper-slide>
    </swiper>
    <!-- <div class="item-list flex-jb flex-as">
      <div :class="`item ${isCurrent ? 'active' : ''}`" v-for="item in slideList" :key="item.title1">
        <div class="item-circle flex-c">
          <h3 v-html="item.title1"></h3>
        </div>
        <div class="item-title" v-if="isPC">
          <h3 v-html="item.title2"></h3>
        </div>
        <div class="item-desc">
          <h3 v-html="item.desc"></h3>
        </div>
      </div>
    </div> -->
  </div>
</template>
<style lang="scss">
@media screen and (min-width: 767px) {
  .item-list {
    .item-circle {
      transition: all 0.3s;
      transform: translateY(-30%);
    }
    .item.swiper-slide-active {
      .item-circle {
        transform: translate(20%, 10%);
      }
      & + .swiper-slide {
        .item-title {
          opacity: 0.1;
        }
        .item-desc {
          opacity: 0.1;
        }
        .item-circle {
          transform: translate(5%, 85%);
        }
        & + .swiper-slide {
          .item-title {
            opacity: 0.3;
          }
          .item-desc {
            opacity: 0.3;
          }
          .item-circle {
            transform: translate(0, 135%);
          }
          & + .swiper-slide {
            .item-circle {
              transform: translate(-5%, 180%);
            }
            .item-title {
              opacity: 0.5;
            }
            .item-desc {
              opacity: 0.5;
            }
            & + .swiper-slide {
              .item-circle {
                font-size: size(34);
                letter-spacing: size(3.43);
                font-weight: 900;
                background-color: #fff;
                box-shadow: none;
                transform: translateY(200%);
              }
              .item-title {
                opacity: 1;
              }
              .item-desc {
                opacity: 1;
              }
              & + .swiper-slide {
                .item-title {
                  opacity: 0.5;
                }
                .item-desc {
                  opacity: 0.5;
                }
                .item-circle {
                  transform: translate(5%, 180%);
                }
                & + .swiper-slide {
                  .item-title {
                    opacity: 0.3;
                  }
                  .item-desc {
                    opacity: 0.3;
                  }
                  .item-circle {
                    transform: translate(0, 135%);
                  }
                  & + .swiper-slide {
                    .item-title {
                      opacity: 0.1;
                    }
                    .item-desc {
                      opacity: 0.1;
                    }
                    .item-circle {
                      transform: translate(-5%, 85%);
                    }
                    & + .swiper-slide {
                      .item-circle {
                        transform: translate(-20%, 10%);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    /* */
  }
}
@media screen and (max-width: 767px) {
  .item-list {
    .item-circle {
      transition: all 0.3s;
      transform: translateY(-30%);
    }
    .item.swiper-slide-active {
      .item-circle {
        transform: translate(0, 20%);
        font-size: sizem(34);
        letter-spacing: 0.1em;
        font-weight: 900;
        background-color: #fff;
        box-shadow: none;
      }
      .item-title {
        opacity: 1;
      }
      .item-desc {
        opacity: 1;
      }
    }
    .swiper-slide-prev,
    .swiper-slide-next {
      .item-circle {
        transform: translate(0, 5%);
      }
    }

    /*.item.swiper-slide-active {
    .item-circle{transform: translate(0,20%);}
    & + .swiper-slide{
    .item-circle{transform: translate(0,30%);}
    & + .swiper-slide{
      .item-circle {
        font-size: size(34);
        letter-spacing: size(3.43);
        font-weight: 900;
        background-color: #fff;
        box-shadow: none;
     transform: translate(0,50%);}
    .item-title { opacity: 1;}
    .item-desc { opacity: 1;}
    & + .swiper-slide{
    .item-title { opacity: 0.5;}
    .item-desc { opacity: 0.5;}
    .item-circle{transform: translate(0,30%);}
    & + .swiper-slide{
    .item-title { opacity: 0.3;}
    .item-desc { opacity: 0.3;}
    .item-circle{transform: translate(0,20%);}
    }
    }
    }
    }
  }*/
    /* */
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: 100%;
  height: size(1080 + 580);
  //overflow: hidden;
  position: relative;
  background-size: cover;
  // margin: 0 0 size(400) 0;
  background: #003176;
  z-index: 2;
}

.img3d {
  @include img_c_pc(1600, 120);
}

.wave {
  @include img_c_pc(1920, 521);
  animation: img 8s 0s ease-in-out infinite alternate;
  transform-origin: 50% 70%;
  transform: scaleY(0.8) translate(0, 0);
}

@keyframes img {
  to {
    transform: scaleX(0.96) translate(0, 5%);
  }
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

  &:nth-child(1) {
    position: relative;
  }
}

.title {
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(4);
  text-align: left;
  padding-top: size(46);
  color: #003177;
  background-color: #ffffff;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.title1 {
  @include div_r_pc(70, 391, 157, 440);
}

.title2 {
  @include div_r_pc(70, 289, 157, 352);
}

.desc {
  @include img_l_pc(476, 96, 353);
  font-size: size(20);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(1.6);
  text-align: left;
  color: #ffffff;
}

.item-list {
  @include img_c_pc(1620, 760);
  padding: 15px;

  .item {
    width: size(133);
    height: size(800);
    position: relative;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      .item-circle {
        font-size: size(34);
        letter-spacing: size(3.43);
        font-weight: 900;
        background-color: #fff;
        box-shadow: none;
      }
    }

    // &:nth-child(1),
    // &:nth-child(10) {
    //   .item-circle {
    //     margin-top: size(-35);
    //   }
    // }

    // &:nth-child(2),
    // &:nth-child(9) {
    //   .item-circle {
    //     margin-top: size(45);
    //   }
    // }

    // &:nth-child(3),
    // &:nth-child(8) {
    //   .item-circle {
    //     margin-top: size(100);
    //   }
    // }

    // &:nth-child(4),
    // &:nth-child(7) {
    //   .item-circle {
    //     margin-top: size(150);
    //   }
    // }

    // &:nth-child(5),
    // &:nth-child(6) {
    //   .item-circle {
    //     margin-top: size(170);
    //   }
    // }
  }

  .item-circle {
    width: size(133);
    height: size(133);
    border-radius: 999px;
    background-color: #003177;
    box-shadow: 0 0 0 1px #d38700;
    font-size: size(25);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: size(2.5);
    text-align: left;
    color: #d38700;
    transition: all 0.3s;
  }

  .item-title {
    @include img_r_pc(36, 420, 40);
    width: size(133);
    height: size(266);
    font-size: size(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: size(2.5);
    text-align: left;
    color: #d38700;
    writing-mode: vertical-rl;
    text-orientation: upright;
    opacity: 0;
    transition: all 0.3s;
    h3::before {
      font-size: 0.7em;
      content: '';
      display: inline-block;
      width: 1em;
      height: 1em;
      margin-bottom: 0.5em;
      border-radius: 50%;
      background: currentColor;
    }
  }

  .item-desc {
    @include img_r_pc(36, 476, 85);
    width: size(133);
    min-height: size(266);
    font-size: size(16);
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: size(2.5);
    text-align: left;
    color: #fff;
    writing-mode: vertical-rl;
    text-orientation: upright;
    opacity: 0;
    transition: all 0.3s;
  }
}

// begin
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // transform: translateY(50px) !important;
  opacity: 0;
}
// end
.slide-fade-enter {
  // margin-top: 0
  // transform: translateY(0px) !important;
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section2 {
    width: 100vw;
    min-height: sizem(770);
    max-height: sizem(770);
    height: sizem(770);
  }

  .img3d {
    @include img_l_m(640, 154, -130);
  }

  .wave {
    @include img_l_m(800, 244, -240);
  }

  .title {
    font-size: sizem(23);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.09;
    letter-spacing: sizem(2.3);
    text-align: right;
    color: #003177;
    background-color: #fff;
    padding-right: sizem(16);
    writing-mode: horizontal-tb;
    text-orientation: mixed;
  }

  .title1 {
    @include div_r_m(181, 41, 107, 36);
  }

  .title2 {
    @include div_r_m(145, 41, 56, 36);
  }

  .desc {
    @include img_l_m(476, 96, 353);
    font-size: size(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: size(1.6);
    text-align: left;
    color: #ffffff;
  }

  .item-list {
    @include img_l_m(375, 450, 0);
    padding: sizem(45) 0 0 0;

    .item {
      width: sizem(95);
      height: sizem(500);
      position: relative;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        .item-circle {
          font-size: sizem(20);
          letter-spacing: size(1.43);
          font-weight: 900;
          background-color: #fff;
          box-shadow: none;
        }
      }

      // &:nth-child(1),
      // &:nth-child(10) {
      //   .item-circle {
      //     margin-top: sizem(-200);
      //   }
      // }

      // &:nth-child(2),
      // &:nth-child(9) {
      //   .item-circle {
      //     margin-top: sizem(-150);
      //   }
      // }

      // &:nth-child(3),
      // &:nth-child(8),
      // &:nth-child(7) {
      //   .item-circle {
      //     margin-top: sizem(-70);
      //   }
      // }

      // &:nth-child(4),
      // &:nth-child(6) {
      //   .item-circle {
      //     margin-top: sizem(-30);
      //   }
      // }

      // &:nth-child(5) {
      //   .item-circle {
      //     margin-top: sizem(0);
      //   }
      // }
    }

    .item-circle {
      width: sizem(85);
      height: sizem(85);
      border-radius: 999px;
      background-color: #003177;
      box-shadow: 0 0 0 3px #d38700;
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.3;
      letter-spacing: sizem(1.5);
      text-align: left;
      color: #d38700;
      transition: all 0.3s;
    }

    .item-title {
      @include img_r_m(36, 133 + 184, 20);
      width: size(133);
      height: size(266);
      font-size: size(25);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.3;
      letter-spacing: size(2.5);
      text-align: left;
      color: #d38700;
      writing-mode: horizontal-tb;
      text-orientation: mixed;
    }

    .item-desc {
      @include img_l_m(310, 130, -110);
      min-height: sizem(70);
      font-size: sizem(15);
      font-weight: 400;
      font-stretch: normal;
      font-style: normal;
      line-height: 2;
      letter-spacing: sizem(0.75);
      text-align: center;
      color: #fff;
      writing-mode: horizontal-tb;
      text-orientation: mixed;
      &::before {
        font-size: 0.7em;
        content: '';
        display: block;
        width: 1em;
        height: 1em;
        position: absolute;
        left: calc(50% - 0.5em);
        top: -1em;
        margin-bottom: 0.5em;
        border-radius: 50%;
        background: #d38700;
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
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section2',

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
        slidesPerView: isMobile ? 4 : 9,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        centeredSlides: isMobile ? true : false,

        slideToClickedSlide: isMobile ? true : false,
        autoplay: {
          delay: 30000,
          disableOnInteraction: false,
        },
        loop: true,
        // effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          title1: '龍首<br />地標',
          title2: '龍首地標',
          desc: '區域稀有24層雙塔新地標',
        },
        {
          title1: '寬廣<br />基地',
          title2: '寬廣基地',
          desc: '區域稀有近兩千坪大尺度寬廣基地',
        },
        {
          title1: '高雅<br />生活',
          title2: '高雅生活',
          desc: '區域僅有日式千坪東京六感御花園',
        },
        {
          title1: '生活<br />機能',
          title2: '生活機能',
          desc: '五股市區、新市鎮、新莊副都心、洲子洋生活機能全包',
        },
        {
          title1: '交通<br />動能',
          title2: '交通動能',
          desc: '雙北各大城暢行無阻，「3高3捷4特快」交通機能全包',
        },
        {
          title1: '增值<br />潛能',
          title2: '增值潛能',
          desc: '稀有雙塔地標、五泰輕軌雙議題，讓您將增值潛能全包',
        },
        {
          title1: '豪宅<br />建材',
          title2: '豪宅建材',
          desc: '嚴選東和鋼鐵、力泰水泥等豪宅級頂級建材',
        },
        {
          title1: '城市<br />新生',
          title2: '城市新生',
          desc: '轉五股樣貌，「五股夏綠地」開發計畫帶來16公頃公園綠景',
        },
        {
          title1: '綠邑<br />生活',
          title2: '綠邑生活',
          desc: '鄰近15萬坪寬闊樹海濃蔭、128萬坪大臺北都會水岸公園',
        },
        {
          title1: '防疫<br />規劃',
          title2: '防疫規劃',
          desc: '當層排氣系統排除室內廢氣，療癒六感庭園舒緩身心',
        },
      ],
    }
  },

  methods: {},

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
