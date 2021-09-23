<template>
  <div class="section3">
    <div class="bg"></div>
    <div class="section"><img src="./all/section.png"></div>
    <div class="swipe absolute" data-aos="fade-up" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex" data-aos="fade" data-aos-delay="1000">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div>
   <div class="txt">
    <div class="number" data-aos="fade-up" data-aos-delay="400">
      01
    </div>
    <h1 class="title" data-aos="fade-up" data-aos-delay="600">
      金融重鎮資產稀缺<br />
      全球舉世皆然
    </h1>
    <h1 class="desc" data-aos="fade-up" data-aos-delay="800">
      紐約曼哈頓頂級寓所動輒千萬美金身價、東京丸之內向來為名門新貴聚集之地、倫敦金融城號稱全世界最多金的一平方英里…金融特區住宅項目向來需求強勁供應稀少，地段精華獨特因此造就頂級價值。
    </h1>
  </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: 100%;
  height: size(1062);
}

.bg {
  @include div_r_pc(1920, 850, 212, 0);
  width: 100%;
  top: auto;
  bottom: 0;
  background-color: #040000;
}
.section{
  @include img_c_pc(530, 80);
  img{width: 100%;}
}

.txt{
  @include div_r_pc(394, 850, 212, 63);
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  align-content:center;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  color: #ffffff;
  line-height: 1.6;
  }

.number {
  font-size: size(118.8);
  font-family: Gadugi;
  margin: -0.3em 0 0 0;
  letter-spacing: normal;
}

.title {
  font-size: size(31.9);
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: 0.054em;
  white-space: nowrap;
  margin: 0.4em 0 1.3em 0;
}

.desc {
  font-size: size(22.7);
  font-weight: 300;
  letter-spacing:0.1em;
}

/* Swipe */
.swipe {
  width: size(1373);
  height: size(850);
  bottom: size(0);
  left: 0;
  object-fit: cover;
  // background: #0344;
  // background-image: url('./s2/bg_noise_bk.gif');
  background-size: cover;
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
  bottom: size(28);
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
    width: size(12.5);
    height: size(12.5);
    border-radius: size(12.5);
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

  .prev-btn,
  .next-btn {
    width: size(20);
    cursor: pointer;
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
  .section3 {
    height: sizem(995 + 56);
    overflow: hidden;
  }

  .bg {
    @include div_r_m(375, 425, 56, 0);
    bottom: auto;
  }
.section{
  @include img_c_m(170, 20);
}
.txt{
    @include div_l_m(250, 425, 56, 62.5);
  }

  .number {
    font-size: sizem(59.4);
  }

  .title {
    font-size: sizem(19.8);
  }

  .desc {
    font-size: sizem(14.2);
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(570);
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
    .slide-name {
      text-shadow: 6px 6px 4px rgba(0, 0, 0, 0.73);
      left: auto;
      bottom: auto;
      bottom: 0.8rem;
      right: 1.2rem;
      font-size: sizem(12);
    }
  }

  .pagination {
    width: auto;
    bottom: sizem(15);
    left: sizem(22);
    right: auto;
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
      width: sizem(12.5);
      height: sizem(12.5);
      border-radius: sizem(12.5);
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #fff;
        border-radius: sizem(12.5);
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
          background: #fff;
          border-radius: sizem(12.5);
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
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'

export default {
  name: 'section3',

  mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: isMobile ? require('./s3/1_m.jpg') : require('./s3/1.jpg'),
          name: '紐約情境示意圖',
        },
        {
           img: isMobile ? require('./s3/2_m.jpg') : require('./s3/2.jpg'),
           name: '東京情境示意圖',
        },
        {
           img: isMobile ? require('./s3/3_m.jpg') : require('./s3/3.jpg'),
           name: '東京丸之內實景攝影',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
