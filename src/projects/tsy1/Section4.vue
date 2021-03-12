<template>
  <div class="section4">
    <img src="./s4/04_child.png" :alt="`${info.caseName}_bg`" class="child1" data-aos="fade-up" data-aos-delay="800">
    <img src="./s4/04_tree_1.png" :alt="`${info.caseName}_bg`" class="tree1" v-if="isPC">
    <img src="./s4/04_tree_2.png" :alt="`${info.caseName}_bg`" class="tree2" v-if="isPC">
    <img src="./s4/04_bg.jpg" :alt="`${info.caseName}_bg`" class="img" v-if="isPC">
    <img src="./s4/04_bg.jpg" :alt="`${info.caseName}_bg`" class="img_bg" v-if="isMobile">
    <img src="./mobile/s4/04_m_style.png" :alt="`${info.caseName}_bg`" class="img" v-if="isMobile">
    <img src="./s4/04_img_1.jpg" :alt="`${info.caseName}_bg`" class="img1" v-if="isPC">
    <img src="./s4/04_img_2.jpg" :alt="`${info.caseName}_bg`" class="img2" v-if="isPC">
    <img src="./s4/04_img_3.jpg" :alt="`${info.caseName}_bg`" class="img3" v-if="isPC">
    <img src="./s4/04_img_4.jpg" :alt="`${info.caseName}_bg`" class="img4" v-if="isPC">
    <div class="name name1" v-if="isPC">
      碧潭橋
    </div>
    <div class="name name2" v-if="isPC">
      青潭河濱公園
    </div>
    <div class="name name3" v-if="isPC">
      青潭溪
    </div>
    <div class="name name4" v-if="isPC">
      青潭橋自行車步道
    </div>
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="isMobile">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <!-- <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div> -->
      </div>
    </div>
    <div class="title" data-aos="fade-up" data-aos-delay="200">
      風景勝境<br />
      <span>回家輕旅行 遊山又玩水</span>
    </div>
    <div class="desc" data-aos="fade-up" data-aos-delay="400">
      濛濛湖、梅花湖、燕子湖、碧潭、青潭、直潭、灣潭、塗潭等三湖五潭；和美山、獅仔頭山、屈尺、伸丈、銀河洞…寺廟走春、湖濱秘境、登山步道森呼吸、烏來泡湯賞櫻花，人間山水神仙生活。
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section4 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  // background-image: url('./s2_bg.jpg');
}

.img {
  @include img_l_pc(525, 45, 83);
  top: 3%;
  height: 94%;
}

.img1 {
  @include img_r_pc(842, 14, 435);
  top: 3%;
  height: calc(47% - 0.5vw);
  object-fit: cover;
}

.img2 {
  @include img_r_pc(332, 48, 82);
  top: 3%;
  height: calc(47% - 0.5vw);
  object-fit: cover;
}

.img3 {
  @include img_r_pc(332, 53, 945);
  top: auto;
  bottom: 3%;
  height: calc(47% - 0.5vw);
  object-fit: cover;
}

.img4 {
  @include img_r_pc(842, 45, 83);
  top: auto;
  bottom: 3%;
  height: calc(47% - 0.5vw);
  object-fit: cover;
}

.name {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
  font-size: size(22);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.33;
  letter-spacing: size(1.32);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.name1 {
  @include img_r_pc(70, 465, 454);
}

.name2 {
  @include img_r_pc(140, 465, 100);
}

.name3 {
  @include img_r_pc(70, 970, 960);
}

.name4 {
  @include img_r_pc(185, 970, 100);
}

.child1 {
  @include img_l_pc(356, -255, 252);
}

.title {
  @include img_l_pc(450, 268, 125);
   top: calc(60% + 100vw * (268 - 1080 * .6) / 1920);
  font-size: size(55);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.34;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  span {
    font-size: size(44);
  }
}

.desc {
  @include img_l_pc(450, 436, 125);
   top: calc(60% + 100vw * (436 - 1080 * .6) / 1920);
  font-size: size(28);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.83;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;
}

.tree1 {
  @include img_r_pc(240, -10, 16);
  transform-origin: left;
  animation: tree 2s ease-in-out 0s infinite alternate-reverse;
}

.tree2 {
  @include img_r_pc(423, -80, 763);
  transform-origin: bottom;
  animation: tree 2s ease-in-out 0.5s infinite alternate-reverse;
}

@keyframes tree {
  to {
    transform: skew(5deg);
  }
}

.bg-img {
  width: 100vw;
  height: 100vh;
  min-height: size(1080);
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;
  margin-top: 0;
  &:nth-child(1) {
    position: relative;
  }
}
@media only screen and (max-width: 1440px) and (min-width: 1025px) {


}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {


}

@media screen and (max-width: 767px) {
  .section4 {
    width: 100vw;
    height: sizem(611);
    min-height: auto;
    max-height: initial;
    background-image: url('./bg_m.png');
    background-size: 100% 100%;
    background-attachment: fixed;
  //  overflow: hidden;
  }

  .img {
    @include img_c_m(380, -24);
    height: auto;
  }

  .img_bg {
    display: none;
  }

  // .img1 {
  //   @include img_r_m(842, 48, 435);
  // }

  // .img2 {
  //   @include img_r_m(332, 48, 82);
  // }

  // .img3 {
  //   @include img_r_m(332, 53, 945);
  //   top: auto;
  //   bottom: size(30);
  // }

  // .img4 {
  //   @include img_r_pc(842, 45, 83);
  //   top: auto;
  //   bottom: size(30);
  // }

  .child1 {
    display: none;
  }

  .title {
    @include img_c_m(256, 340);
    font-size: sizem(30);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.24;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
    span {
      font-size: sizem(25);
    }
  }

  .desc {
    @include img_c_m(335, 430);
    font-size: sizem(16);
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: sizem(-0.32);
    color: #ffffff;
  }

  .tree1 {
    display: none;
  }

  .tree2 {
    display: none;
  }

  /* Swipe */
  .swipe {
    width: sizem(335);
    height: sizem(219);
    min-height: auto;
    top: sizem(103);
    left: sizem(20);
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

  .slide-name {
    right: 16px;
    bottom: 7px;
    color: #fff;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.83;
    letter-spacing: size(1.68);
    text-align: left;
    color: #ffffff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
  }

  .pagination {
    width: auto;
    bottom: sizem(11);
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
      width: 10px;
      height: 10px;
      border-radius: 10px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #fff100;
        border-radius: 10px;
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
          background: #fff100;
          border-radius: 10px;
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

    .prev-btn,
    .next-btn {
      width: sizem(15);
      cursor: pointer;
    }
  }
}
</style>

<script>
import { isPC, isMobile } from '@/utils'
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
      slideList: [
        {
          img: require('./s4/04_img_1.jpg'),
          name: '碧潭橋',
        },
        {
          img: require('./s4/04_img_2.jpg'),
          name: '青潭河濱公園',
        },
        {
          img: require('./s4/04_img_3.jpg'),
          name: '青潭溪',
        },
        {
          img: require('./s4/04_img_4.jpg'),
          name: '青潭橋自行車步道',
        },
      ],
      // tagList: [require('./s3_title.png')],
    }
  },

  mounted() {},
  watch: {
    viewIndex() {
      if (this.viewIndex === 4) {
        this.slideIndex = 0
      }
    },
  },
}
</script>
