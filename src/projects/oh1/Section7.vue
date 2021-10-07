<template>
  <div class="section7">
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
          <!--   <img :src="slide.img" :alt="slide-name" v-if="isMobile" class="swipe-bg">  -->
            <img :src="slide.img" :alt="slide-name">
          <div class="slide-name absolute" v-html="slide.name"></div>
    <div class="slide-nametop" v-if="slide.name" >3D示意圖，實際以現場為準，建商擁有修改權利</div>
          </div>
        </transition-group>
      <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div> 
        <div class="swipe-btns absolute flex-ac flex-jb">
          <div class="prev-btn" @click="decIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.28 28.67' preserveAspectRatio='xMidyMid' fill='%23338000'%3E%3Cpolygon points='14.3,28.7 16.3,26.7 3.8,14.2 16.2,1.8 14.3,0 0,14.3'/%3E%3C/svg%3E" alt="">
          </div>
          <div class="next-btn" @click="addIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.28 28.67' preserveAspectRatio='xMidyMid' fill='%23338000'%3E%3Cpolygon points='14.3,28.7 16.3,26.7 3.8,14.2 16.2,1.8 14.3,0 0,14.3'/%3E%3C/svg%3E" alt="">
          </div>
        </div>
      </div>
    <h3 class="title" v-if="isMobile">
        全齡化主題式公設 
      </h3> 
      </div>

    <!-- 
    <div class="txt" data-aos="fade-up" data-aos-delay="0">
      <h3 class="title title1" data-aos="fade-up" data-aos-delay="200">
        公設預留
      </h3>
      <h3 class="title title2" data-aos="fade-up" data-aos-delay="200">
        公設預留公設預留
      </h3>
      <div class="hr" data-aos="zoom-in-right" data-aos-delay="500"></div>
      <div class="desc" data-aos="fade-up" data-aos-delay="200">
        公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設公設
      </div>
    </div>

    -->
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
  // &::after {
  //   content: '';
  //   width: 120%;
  //   height: size(120);
  //   position: absolute;
  //   bottom: size(-90);
  //   left: -10%;
  //   background: url('./all/section_bg.jpg') fixed;
  //   background-size: cover;
  //   border-radius: 100% 100% 0 0;
  //   z-index: 2;
  // }
  // &::after {
  //   border-radius: 0 0 100% 100%;
  //   top: size(-90);
  //   bottom: auto;
  // }
}

.txt {
  @include div_r_pc(594, 467, 308, 198);
  background-image: linear-gradient(
    to bottom,
    rgba(0, 152, 205, 0.8),
    rgba(141, 194, 31, 0.8)
  );
  padding: size(40) size(20);
}/*
.title {
  width: 90%;
  margin: 0 auto;
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #fff000;
  white-space: nowrap;
}
*/

.title {
  @include img_r_pc(860, 308, 100);
  top:calc(50% - 0.8em);
  font-size: size(50);
  padding: 0 0 0 20%;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #009d95;
  white-space: nowrap;
}
.slide-nametop{position: absolute;
    left:0;
    bottom:0;width: 100%;
    color: #fff;
    font-size: size(18);
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.06em;
    padding: 1em 0 1em 2em;
    background: linear-gradient(to right, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 50%);
    text-align: left;}

.title2 {
  text-align: right;
}

.hr {
  width: 100%;
  // height: 35px;
  border-top: size(1) solid #fff;
  margin: size(15) 0;
}

.desc {
  // text-shadow: 0 2px 5px rgba(0, 0, 0, 0.44);
  width: 90%;
  margin: 0 auto;
  font-size: size(23);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.91;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  // white-space: nowrap;
}

/* Swipe */
.swipe {
  width: 100%;
  height: 100%;
  bottom: size(0);
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
  background: #fff;

 /* img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: 20% 50%;
  } */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .slide-name {
    right: 2em;
    bottom: 1em;
    color: #fff;
    font-size: size(18);
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0em .4em #000 ,0 0.2em 1em #000;
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
  bottom: size(15);
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
    width: size(25);
    height: size(25);
    border-radius: size(25);
    // box-shadow: 0 0 0 1px #fff;
    // background: #fff;
    position: relative;
    background-color: #fff;
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
        background: #fff000;
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
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height:100%;
    padding: 0;
    z-index: 3;
    font-size: size(50);

    .prev-btn,
    .next-btn {
      width: 1em;
      height: 1em;
      border-radius: 50%;
      background-color: #fff000;
      cursor: pointer;
    position: relative;
      img {
        width: 0.2em;
    position: absolute;
    top: calc(50% - 0.18em);
    right:24%;
    }
    }

    .prev-btn {
      margin-left: -0.5em;
    }

    .next-btn {
      margin-right: -0.5em;
      transform:scaleX(-1);
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
    height: sizem(377);
  //  height: sizem(604);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
    &::after,
    &::before {
      display: none;
    }
  }

  .txt {
    @include div_r_m(375, 287, 0, 0);
    background-image: linear-gradient(
      to bottom,
      rgba(0, 152, 205, 0.8),
      rgba(141, 194, 31, 0.8)
    );
    padding: sizem(30) sizem(30);
  }
  .title {
    width: sizem(330);
    top:sizem(20);
    padding: 0;
    margin: 0 auto 0;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    //color: #fff000;
    white-space: nowrap;
  }
.slide-nametop{font-size: sizem(12);
    padding: .5em 0 .5em 1em;
    background: linear-gradient(to right, rgba(0,0,0,0.8) 30%,rgba(0,0,0,0) 100%);
    }
  .title2 {
    text-align: left;
    padding-left: sizem(70);
  }

  .hr {
    width: sizem(320);
    // height: 35px;
    border-top: size(1) solid #fff;
    margin: sizem(10) auto;
  }

  .desc {
    // text-shadow: 0 2px 5px rgba(0, 0, 0, 0.44);
    width: sizem(320);
    margin: 0 auto;
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    // white-space: nowrap;
  }

  /* Swipe */
  .swipe {
    width: 100%;
    //height: sizem(317);
    min-height: auto;
    top: auto;
    bottom: 0;
    left: 0;
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
    .swipe-bg{
       width: 100%;filter: blur(3px);
       height: 100%;
    }

    img {
      width: 100%;
      height: sizem(317);
      object-fit: cover;
      position: absolute;
      left: 0;
      bottom: 0;
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
      right: auto;
      top: auto;
      bottom: 3em;
      left: 1em;
      font-size: sizem(12);
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

  .swipe-btns {
    height: sizem(315);
    font-size: sizem(50);
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
          img:isMobile? require('./s7/img1m.jpg'):require('./s7/img1.jpg'),
          name: '',
        },
        {
          img: require('./s7/lounge bar.jpg'),
          name: 'Lounge Bar',
        },
        {
          img: require('./s7/室內溫水游泳池.jpg'),
          name: '室內溫水游泳池',
        },
        {
          img: require('./s7/多功能高爾夫球室.jpg'),
          name: '多功能高爾夫球室',
        },
        {
          img: require('./s7/VIP宴會廳.jpg'),
          name: 'VIP宴會廳',
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
