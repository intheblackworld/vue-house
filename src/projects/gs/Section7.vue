<template>
  <div>
    <div class="section7">
      <div
        class="swipe absolute"
        data-aos="fade-right"
        data-aos-delay="200"
        @mouseenter.stop="toggleTimer = false"
        @mouseleave.stop="toggleTimer = true"
      >
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <div
            v-for="(slide, i) in slideList"
            :key="slide.img"
            :class="`swipe-item absolute ${slideIndex === i ? 'active' : ''} ${(slideIndex === (i + 1) || slideIndex === (i - slideList.length + 1)) ? 'base' : ''}`"
          >
            <img :src="slide.img" alt="">
          </div>
          <div class="pagination absolute flex-ac">
            <div
              :class="`pagination-dot`"
              v-for="(slide, index) in slideList"
              :key="slide.img + '-dot'"
              @click="goTo(index)"
            ><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <img
              src="./all/prev-btn.png"
              alt=""
              class="prev-btn"
              @click="decIndex"
            >
            <img
              src="./all/next-btn.png"
              alt=""
              class="next-btn"
              @click="addIndex"
            >
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
  height: 100vh;
  max-height: 56vw;
  min-height: size(900);
  overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  //min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
  top: 0;
  left: auto;
  right: 0;
  height: auto;
  }
}

.swipe {
  width: 100vw;
  height:100%;
  //min-height: size(900);
  top: 0;
  left: 0;
  object-fit: cover;
}

.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swipe-item {
  width: 100%;
  height: 100%;
  opacity: 0;
  left: 0;
  transition: opacity 1s ease-in-out;
  z-index: 0;

  img {
    width: 100%;
  height: 100%;
  object-fit: cover;
  }

  &:nth-child(1) {
    z-index: 1;
    opacity: 1;
  }

  &.base {
    z-index: 1;
    opacity: 1;
  }
  &.active {
    z-index: 2;
    opacity: 1;
  }
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

.title1, .title3 {
  top: size(72);
  right: size(290);
}

.subtitle1, .subtitle3 {
  top: size(216);
  right: size(214);
}

.desc1, .desc3 {
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
    height: size-m(604);
    min-height: auto;
  max-height: initial;
  }
  /*
  width: size(1920);
  height: 100vh;
  max-height: 56vw;
  min-height: size(900);*/
.img {display: none;
}


.txt {
  width:100vw;
  height:auto;
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

  .swipe {
    width: 100vw;
   // height: calc(100vh - 63px);
    top: sizem(0);
    left: 0;
    object-fit: cover;
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
    padding: 0 10px;
    z-index: 3;

    .prev-btn,
    .next-btn {
      background-color:rgba(0, 0, 0, 0.3);
      padding: 5px;
      width: size-m(15);
      cursor: pointer;
    }
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
          img: isMobile ? require('./mo/7/1.jpg') : require('./s7/1.jpg'),
        },
        {
          img: isMobile ? require('./mo/7/2.jpg') : require('./s7/2.jpg'),
        },
        {
          img: isMobile ? require('./mo/7/3.jpg') : require('./s7/3.jpg'),
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
