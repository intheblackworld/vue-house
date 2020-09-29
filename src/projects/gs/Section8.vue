<template>
  <div>
    <div class="section7">
      <transition-group name="swipe-fade" mode="out-in">
        <img v-show="slideIndex === i" v-for="(slide, i) in slideList" :key="slide.img" :src="slide.img" class="bg-img blur">
      </transition-group>
      <div class="swipe absolute" data-aos="fade-right" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group
            name="swipe-fade"
            mode="out-in"
          >
            <div
              v-for="(slide, i) in slideList"
              v-show="slideIndex === i"
              :key="slide.img"
              :class="`swipe-item absolute`"
            >
              <img
                :src="slide.img"
                alt=""
              >
              <div
                class="name absolute"
              >室內3D合成示意圖</div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decIndex"></div>
            <div class="next-btn" @click="addIndex"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: size(1920);
  height:calc(100vh - 60px);
  max-height: size(1080);
  min-height: size(800);
  overflow: hidden;background: #0009;}
.bg-img {
  width: 110%;
  height: 110%;
  //min-height: size(900);
  position: absolute;
  display: block;
  top: -5%;
  left:-5%; 
  object-fit: cover;

  &:nth-child(1) {
    top: 0;
    left: auto;
    right: 0;
    height: auto;
  }
}

.blur {
  filter: brightness(50%)blur(0.2vw);
}

.swipe {
  width: size(930);
  height: size(550);
  min-height: size(550);
  top: calc(50% - 14.322vw);
  right: 0;
  left: 0;
  margin: 0 auto;
  object-fit: cover;
  border: 1px solid #fff8;
  box-shadow:0 size(5) size(50) #0009;
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
  }

  .name {
    right: 20px;
    bottom: 20px;
    font-size: size(14.8);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: size(0.89);
    text-align: center;
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

.name {
  background-color: rgba(21, 32, 68, 0.4);
  padding: 10px;
}

.pagination {
  width: auto;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
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
.title {
  text-shadow: 1px 1px 7px rgba(21, 32, 68, 0.8);
  font-size: size(48);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: 2.91px;
  text-align: left;
  color: #ffffff;
}

.subtitle {
  text-shadow: 1px 1px 7px rgba(21, 32, 68, 0.8);
  font-size: size(29);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: 5.85px;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  text-shadow: 1px 1px 7px rgba(21, 32, 68, 0.8);
  font-size: size(16);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.03;
  letter-spacing: 0.96px;
  text-align: left;
  color: #ffffff;
}

.title1,
.title3 {
  top: size(72);
  right: size(290);
}

.subtitle1,
.subtitle3 {
  top: size(216);
  right: size(214);
}

.desc1,
.desc3 {
  top: size(270);
  right: size(200);
}

.title2 {
  top: size(72);
  left: size(209);
}

.subtitle2 {
  top: size(216);
  left: size(209);
}

.desc2 {
  top: size(270);
  left: size(209);
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
    width: 100vw;
    height: sizem(210);
    min-height: auto;
    max-height: initial;
  }
  /*
  width: size(1920);
  height: 100vh;
  max-height: 56vw;
  min-height: size(900);*/
  .img {
    display: none;
  }

  .txt {
    width: 100vw;
    height: auto;
    top: size-m(24);
    left: 0;
    font-size: size-m(15);
    color: #000;
  }
  .title {
    font-size: 1.666em;
    line-height: 1.44;
    color: #a38057;
  }

  .desc {
    width: size-m(310);
    font-weight: normal;
    line-height: 1.73;
    text-align: justify;
  }

  .blur {
    display: none;
  }

  .swipe {
    width: 100vw;
    height: sizem(210);
    // height: calc(100vh - 63px);
    top: sizem(0);
    left: 0;
    object-fit: cover;
  border: 0px solid #0000;
  box-shadow:0 size(0) size(0) #0000;
  }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  // .swipe-item {
  //   width: 100%;
  //   height: 100%;
  //   left: 100%;
  //   transition: left 1s ease-in-out;
  //   z-index: 0;
  //   object-fit: cover;

  //   &.base {
  //     z-index: 1;
  //     left: 0;
  //   }
  //   &.active {
  //     z-index: 2;
  //     left: 0;
  //   }
  // }

  .pagination {
    width: auto;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
    display: none;
  }

  .pagination-dot {
    padding: 5px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 14px;
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
          width: 60%;
          height: 60%;
          display: block;
          background: #fff;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 20%;
          // transform: translateY(-50%);
          left: 23%;
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

    .prev-btn,
    .next-btn {
      font-size: size-m(10);
      cursor: pointer;
      height: 100%;
      width: 3em;
      display: flex;
      align-items: center;
      justify-items: center;
      padding: 0 1em;
    }
    .prev-btn::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 1em 1em 1em 0;
      border-color: transparent #0005 transparent transparent;
    }
    .next-btn::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 1em 0 1em 1em;
      border-color: transparent transparent transparent #0005;
    }
  }

  .name {
    right: 10px !important;
    bottom: 10px !important;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import Parallax from 'vue-parallaxy'
import slider from '@/mixins/slider.js'

export default {
  name: 'section7',

  mixins: [slider],

  components: {
    Parallax,
  },

  data() {
    return {
      isMobile,
      isTablet,
      slideList: [
        {
          img: require('./s8/01.jpg'),
        },
        {
          img: require('./s8/02.jpg'),
        },
        {
          img: require('./s8/03.jpg'),
        },
        {
          img: require('./s8/04.jpg'),
        },
        {
          img: require('./s8/06.jpg'),
        },
        {
          img: require('./s8/08.jpg'),
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
