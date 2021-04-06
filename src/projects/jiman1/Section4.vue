<template>
  <div class="section4">
    <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
      </div>
        <div class="swipe-btns absolute flex-ac flex-jb">
         <div class="prev-btn" @click="decIndex"></div>
         <div class="next-btn" @click="addIndex"></div>
        </div>
    </div>
    <div class="f5"><img src="./s4/04_flower.png" :alt="`${info.caseName}_f`"></div>
    <img src="./s4/04_title.png" :alt="`${info.caseName}_f`" class="title-img" data-aos="fade-up" data-aos-delay="200">
    <div class="desc" v-if="isPC" data-aos="fade-up" data-aos-delay="400">
      河岸涼風徐徐吹拂，乘著綠園道蔥郁濃蔭，悠哉散步4分鐘即可到達捷運萬隆站，2站即至大坪林站串接中和、板橋、新莊，3站到古亭站銜接中和新蘆線，6站抵達轉運大站台北車站，南來北往快意暢行。出門直接上水源快速道路，快接萬華、中正、新店；1分鐘進40米寬羅斯福路，收納西門、台北車站、中正紀念堂、古亭、公館於掌心，富裕榮華沿線自藏，繁華近了，節奏緩了，心也自然放慢下來。
    </div>
    <div class="desc" v-if="isMobile" data-aos="fade-up" data-aos-delay="400">
      乘著綠園道蔥郁濃蔭，悠哉散步4分鐘即可到達捷運萬隆站，6站抵達轉運大站台北車站，南來北往快意暢行。出門直接上水源快速道路，快接萬華、中正、新店；1分鐘進40米寬羅斯福路，收納西門、台北車站、中正紀念堂、古亭、公館於掌心，富裕榮華沿線自藏。
    </div>
    <div class="content" v-if="isPC" data-aos="fade-up" data-aos-delay="600">
      <div class="content-title">
        捷運萬隆站
      </div>
      <div class="content-desc">
        散步4分鐘
      </div>

      <div class="content-title">
        公館商圈
      </div>
      <div class="content-desc">
        捷運1站
      </div>

      <div class="content-title">
        台北車站
      </div>
      <div class="content-desc">
        捷運12分鐘
      </div>

      <div class="content-title">
        水源快速道路
      </div>
      <div class="content-desc">
        車行1分鐘
      </div>

      <div class="content-title">
        基隆路高架
      </div>
      <div class="content-desc">
        車行3分鐘
      </div>

      <div class="content-title">
        信義計畫區
      </div>
      <div class="content-desc">
        車行8分鐘
      </div>
    </div>
    <div class="content" v-if="isMobile" data-aos="fade-up" data-aos-delay="600">
      <div class="content-item white flex-c wrap">
        <div class="content-title">
          捷運萬隆站
        </div>
        <div class="content-desc">
          散步4分鐘
        </div>
      </div>

      <div class="content-item white flex-c wrap">
        <div class="content-title">
          公館商圈
        </div>
        <div class="content-desc">
          捷運1站
        </div>
      </div>

      <div class="content-item white flex-c wrap">
        <div class="content-title">
          台北車站
        </div>
        <div class="content-desc">
          捷運12分鐘
        </div>
      </div>

      <div class="content-item">
        <div class="content-title">
          水源快速道路
        </div>
        <div class="content-desc">
          車行1分鐘
        </div>
      </div>

      <div class="content-item">
        <div class="content-title">
          基隆路高架
        </div>
        <div class="content-desc">
          車行3分鐘
        </div>
      </div>

      <div class="content-item">
        <div class="content-title">
          信義計畫區
        </div>
        <div class="content-desc">
          車行8分鐘
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: size(1920);
  height: size(1080);
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  background-color: #d67f76;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  min-height: size(1080);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}
.f5 {
  @include img_l_pc(485, 524, -120);
  transform-origin: 0% 90%;
  transform: skewY(2deg);
  animation: flow1 4s 0s ease-in-out infinite alternate;
}
@keyframes flow1 {
  to {
    transform: skewY(0);
  }
}

.title-img {
  @include img_l_pc(129, 123, 222);
  z-index: 6;
}

.desc {
  @include img_l_pc(905, 724, 437);
  font-size: size(23);
  line-height:2;
  letter-spacing: 0.02em;
  text-align: justify;
  font-weight: 400;
  color: #000;
  z-index: 6;
}

.content {
  @include div_r_pc(331, 780, 139, 205);
  border: 1px solid #fff;
  padding: size(50) size(0);
  font-size: size(22);
  line-height: 1.5;
  z-index: 6;
}

.content-title {
  // letter-spacing: size(2.44);
  text-align: center;
  font-weight: 500;
  color: #fff;
}

.content-desc {
  font-size:1.26em;
  // letter-spacing: size(2.44);
  text-align: center;
  font-weight: 400;
  color: #fff;
  margin-bottom: size(45);
}

/* Swipe */
.swipe {
  width: size(904);
  height: size(553);
  top: size(137);
  left: size(442);
  object-fit: cover;
  z-index: 6;
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

  .slide-name {
    left: 20px;
    bottom: 20px;
    color: #fff;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.11;
    letter-spacing: 0.89px;
    text-align: left;
    color: #ffffff;
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
}

.pagination {
  width: 50%;
  bottom: size(20);
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
    width: size(17);
    height: size(17);
    border-radius: size(17);
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
        width: 110%;
        height: 110%;
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
  padding: 0 0;
  z-index: 3;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
    .prev-btn,
    .next-btn{
      position: relative;
      height: 100%;
      width: 2em;
      font-size:size(20);
      cursor: pointer;
      &::before{
        content: "";
        position: absolute;
        width: 100%;
        height:100%;
        top: 0;
        left: 0;
        transform:translateX(100%);
        background-color: #cc5b4e88;
        transition:all 0.3s;
      }
      &::after{
        content: "";
        width: 1em;
        height: 1em;
        position: absolute;
        top: calc(50% - 0.5em);
        left: calc(50% - 0.75em);
        border: solid #FFF;
        border-width: 0.1em 0.1em 0 0;
        transform: rotate(45deg) translate(-10%,10%);
      }
      &:hover:before{
        transform:translateX(0%);
      }
      &:hover:after{
        animation: btn 0.5s ease-in-out infinite alternate;
      }
    }
    .prev-btn{
      transform:scaleX(-1);
    }
}
@keyframes btn {
  to {
    transform: rotate(45deg) translate(10%,-10%);
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
  .section4 {
    width: 100vw;
    height: sizem(880);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .f5 {
    @include img_r_m(250, 30, -60);
    transform-origin: 100% 80%;
    transform: skewY(2deg);
    animation: flow1 3s 0s ease-in-out infinite alternate;
    img{width: 100%;transform: scaleX(-1);}
  }
  @keyframes flow1 {
    to {
      transform: skewY(0);
    }
  }

  .title-img {
    @include img_l_m(46, 39, 40);
  }

  .desc {
    @include img_r_m(230, 153, 28.55);
    font-size: sizem(12.5);
  }

  .content {
    @include div_r_m(321, 200, 656, 27);
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
      font-size: sizem(12.8);
  line-height: 1.5;
  }

  .content-item {
    width: sizem(100);
    margin-bottom: sizem(10);
    position: relative;
    &.white {
      width: sizem(100);
      height: sizem(100);
      border-radius: 999px;
      background-color: #fff;
      align-content: center;
      .content-title {
        margin-bottom: sizem(10);
      }
      .content-title, .content-desc {
        color: #d37f76;
        line-height: 1;
      }  
    }
    .content-title {
        font-weight: 600;
    }

    .content-desc {
      margin-bottom: sizem(5);
    }
    &:nth-child(4),
    &:nth-child(5){
      &::after{content: "";
      position: absolute;right: -0.6em;top: 0.4em;
       width: 1px;background: #fffc;height: 2.8em;
      }
    }
  }

  /* Swipe */
  .swipe {
    width: sizem(321);
    height: sizem(298);
    min-height: auto;
    top: sizem(343);
    left: sizem(26);
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
  z-index: 4;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      width: 100%;
      height: sizem(300);
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
  }

  .pagination {
    width: auto;
    bottom: sizem(13);
    left: 0;
    right: 0;
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
      width: sizem(8);
      height: sizem(8);
      border-radius: sizem(8);
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
          width: 110%;
          height: 110%;
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
    width: 116%;
    left: -8%;
    .prev-btn,
    .next-btn{
      font-size:sizem(15);
      &::before{
        background-color: #cc5b4e00;
      }
      &::after{
        border-width: 0.15em 0.15em 0 0;
        animation: btn 0.5s ease-in-out infinite alternate;
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

export default {
  name: 'section4',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s4/04_sloder_1.jpg'),
        },
        {
          img: isMobile
            ? require('./mobile/04/04_slider_2_m.jpg')
            : require('./s4/04_sloder_2.jpg'),
        },
        {
          img: require('./s4/04_sloder_3.jpg'),
        },
        {
          img: require('./s4/04_sloder_4.jpg'),
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    viewIndex() {
      if (this.viewIndex === 4) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
