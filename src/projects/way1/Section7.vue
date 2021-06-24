<template>
  <div class="section7">
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div :class="`swipe-btns absolute flex-ac ${isMobile ? 'flex-jb' : ''}`">
          <img src="./all/prev-btn_w.png" v-if="isPC" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn_w.png" v-if="isPC" alt="" class="next-btn" @click="addIndex">
          <img src="./all/prev-btn.png" v-if="isMobile" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" v-if="isMobile" alt="" class="next-btn" @click="addIndex">
          <div class="order-index" v-if="isPC">{{slideIndex + 1}}/{{slideList.length}}</div>
        </div>
      </div>
    </div>
    <div class="name">3D示意</div>
    <div class="title" v-if="isPC" data-aos="fade-up" data-aos-delay="200">
      高機能 新美墅<br />
      世代傳承 限量稀藏 
    </div>
    <div class="title" v-if="isMobile" data-aos="fade-up" data-aos-delay="200">
      高機能 新美墅 世代傳承 限量稀藏 
    </div>
    <div class="hr" data-aos="fade-right" data-aos-delay="200"></div>
    <div class="subtitle" data-aos="fade-up" data-aos-delay="400">
      當代新古典<br />
      價值恆久遠
    </div>
    <div class="desc" data-aos="fade-up" data-aos-delay="600">
      融匯當代新古典建築美學，呈現低調奢華、大器不凡的雋永質感。以沈穩厚實的石材基座，勾勒建築立面優雅身段，彰顯與眾不同的尊貴品味。
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: size(1920);
  height: size(1130);
  max-height: size(1130);
  position: relative;
  background: #545454;
  z-index: 2;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: size(900);
  min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}
.img {
  @include img_l_pc(986, 0, 0);
  height: size(1130);
  object-fit: cover;
}

.name {
  @include img_l_pc(77, 0, 880);
  top: auto;
  bottom: 20px;
  font-size: size(23);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: size(0.94);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.title {
  @include img_r_pc(550, 285, 198);
  font-size: size(53.6);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: size(3.22);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  @include img_r_pc(256, 524, 338);
  font-size: size(40.5);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: size(2.43);
  text-align: center;
  color: #009fb1;
  white-space: nowrap;
}

.desc {
  @include img_r_pc(438, 691, 238);
  font-size: size(22);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: 2.08px;
  text-align: justify;
  color: #ffffff;
}
.hr {
  @include img_r_pc(46, 489, 442);
  border-bottom: solid size(5) #009fb1;
}

/* Swipe */
.swipe {
  @include img_l_pc(986, 0, 0);
  height: size(1130);
  object-fit: cover;
  z-index: 2;
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
  //overflow: hidden;
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
    right: 1.5em;
    bottom: 1em;
    color: #fff;
    font-size: size(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #ffffff;
    text-shadow: 0 0.1em 0.3em #000;
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
    bottom: size(91);
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
    width: 15px;
    height: 15px;
    border-radius: 0px;
    box-shadow: 0 0 0 5px #ccc;
    border-radius: 15px;
    position: relative;
    // background-color: #ccc;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: transparent;
      // border-radius: 20px;
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
        box-shadow: 0 0 0 5px #000;
        border-radius: 15px;
        background-image: #000;
        background-size: 70% 70%;
        background-position: center;
        background-repeat: no-repeat;
        // border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 0%;
        // transform: translateY(-50%);
        left: 0%;
        transform: scale(1.1);
      }
    }
  }
}

.swipe-btns {
  width: 20%;
  height: size(50);
  padding: 0;
  z-index: 3;
  right:-1%;transform: translateX(100%);
  bottom: size(10);
  .prev-btn,
  .next-btn {
    margin-right: 10px;
    width: size(50);
    cursor: pointer;
  }

  .order-index {
    font-size: size(26);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: size(3.67);
    text-align: left;
    color: #ccc;
    margin-right: 10px;
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
  .section7 {
    width: 100%;
    height: sizem(726 + 34);
    min-height: auto;
    max-height: initial;
    background-color: #e9ebec;
  }

  .img {
    @include img_l_m(375, 53, 0);
    height: sizem(430);
    object-fit: cover;
  }

  .name {
    @include img_r_m(30, 455, 20);
    bottom: auto;
    font-size: sizem(12);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: size(0.94);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .title {
    @include img_c_m(360, 7);
    font-size: sizem(20.5);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: sizem(0.93);
    text-align: center;
    color: #302d2c;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(146, 548);
    font-size: sizem(23.2);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: sizem(1.39);
    text-align: center;
    color: #302d2c;
    white-space: nowrap;
  }

  .desc {
    @include img_c_m(310, 644);
    font-size: sizem(13.7);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.61;
    letter-spacing: sizem(0.86);
    text-align: left;
    color: #302d2c;
  }
  .hr {
    @include img_c_m(32, 521);
    border-bottom: solid sizem(3) #009fb1;
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(430);
    min-height: auto;
    top: sizem(53);
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
    .slide-name {
      right: 1em;
      font-size: sizem(13);
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

  .swipe-btns {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    z-index: 3;
    bottom: 0;
    transform: translateX(0);
    right: auto;

    .prev-btn,
    .next-btn {
      width: sizem(30);
      background-color: #fff;
      border-radius: 999px;
      margin-right: 0;
      
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
  name: 'section7',

  mixins: [slider],
  // props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
       slideList: [
         {
           img: require('./s7/07_img1.jpg'),
           name: '3D外觀示意圖',
         },
         {
           img: require('./s7/07_img2.jpg'),
           name: '3D外觀示意圖',
         },
      //   {
      //     img: require('./s7/3.jpg'),
      //     name: '室內裝修參考示意圖',
      //   },
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
