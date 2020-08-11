<template>
  <div>
    <div class="section2">
      <h3
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="200"
      >百年本鄉町仕哲官邸<br />堆疊城南豐厚人文底蘊</h3>
      <h3
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="400"
      >1920年日治政府在台北城南規劃高級住宅區「本鄉町」，作為台北高等學校(師大)和帝國大學(台大)教授文員官舍，範圍在今日師大路、浦城街一帶，環境優質寧靜，吸引當時仕紳富賈、知識份子落籍於此，百年歲月更迭，蘊藏深厚人文足跡。</h3>
      <div
        class="swipe absolute"
        @mouseenter.stop="toggleTimer = false"
        @mouseleave.stop="toggleTimer = true"
      >
        <div class="swipe-wrap relative">
          <img
            v-for="(slide, i) in slideList"
            :src="slide.img"
            :key="slide.img"
            alt="城南豐穰"
            :class="`swipe-item absolute ${slideIndex === i ? 'active' : ''} ${(slideIndex === (i + 1) || slideIndex === (i - slideList.length + 1)) ? 'base' : ''}`"
          >
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
      <div
        class="float-block flex-c absolute"
        data-aos="fade-down"
        data-aos-delay="800"
      >
      <!-- 
      v-rellax="{
      // Rellax Options
      // See: https://github.com/dixonandmoe/rellax#features
    //  speed: -1.5,
    }" -->
        <div>
          <img
            src="./s2/icon.png"
            alt=""
            class="block-icon"
          >
          <h3 class="block-title">城南豐穰</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.Masthead {
  overflow: visible !important;
  z-index: 1 !important;
}
.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 1.04vw;
}

.swipe-item {
  width: 100%;
  height: 100%;
  left: 100%;
  transition: left 1s ease-in-out;
  z-index: 0;

  &.base {
    z-index: 1;
    left: 0;
  }
  &.active {
    z-index: 2;
    left: 0;
  }
}
.pagination {
  width: auto;
  bottom:1em;
  left: 0;
  right: 0;
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 0.25em;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 1em;
    height: 1em;
    border-radius: 1em;
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
      border-radius:50%;
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
        border-radius:50%;
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
  padding: 0 0.75em;
  z-index: 3;

  .prev-btn,
  .next-btn {
    width: 1em;
    cursor: pointer;
  }
}
@media screen and (max-width: 767px) {

.swipe-wrap {
  font-size: 5.3333333333vw
}
  
  .pagination {
    bottom: 0.5em;
  }

  .pagination-dot {

    span {
      width: 0.75em;
      height: 0.75em;
    }
  }
  .swipe-btns {
    padding: 0 0.5em;

    .prev-btn,
    .next-btn {
      width: 0.75em;
    }
  }

}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: 100vw;
  height: size(1080);
  // background-image: url('./s1/bg.jpg');
  // background-size: cover;
  // background-attachment: fixed;
}

.float-block {
  width: size(150);
  height: size(393);
  top: size(-185);
  left: size(289);
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  z-index: 3;
  font-size: size(40);
  color: #c1724b;
  .block-icon {
    width:1em;
    margin-bottom: 0.7em;
  }
  .block-title {
    width:1em;
    line-height: 1.25;
    font-weight: normal;
  }
}

.title {
  top: size(160);
  right: size(323);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #004980;
}

.desc {
  width: size(442);
  top: size(330);
  right: size(182);
  font-size: size(21);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: justify;
  color: #000000;
}

.swipe {
  width: size(1040);
  height: size(720);
  top: 0;
  left: size(183);
  object-fit: cover;
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
  .section2 {
    width: 100vw;
    height: size-m(690);
    // background-image: url('./s1/bg.jpg');
    // background-size: cover;
    // background-attachment: fixed;
  }

  .float-block {
    width: size-m(50);
    height: size-m(131);
    top: size-m(-45);
    left: size-m(42);
      font-size: size-m(14);
    .block-icon {
    }
    .block-title {
    }
  }

  .title {
    top: size-m(364);
    right: auto;
    left: size-m(40);
    font-size: size-m(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: left;
    color: #004980;
  }

  .desc {
    width: size-m(295);
    top: size-m(445);
    right: auto;
    left: size-m(41);
    font-size: size-m(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.14;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }

  .swipe {
    width: 100vw;
    height: size-m(340);
    top: 0;
    left: 0;
    object-fit: cover;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import Parallax from 'vue-parallaxy'
import slider from '@/mixins/slider.js'

export default {
  name: 'section2',

  mixins: [slider],

  components: {
    Parallax,
  },

  data() {
    return {
      isMobile,
      isTablet,
      slideList: isMobile ? [
        {
          img: require('./mo/2/1.jpg'),
        },
        {
          img: require('./mo/2/2.jpg'),
        },
        {
          img: require('./mo/2/3.jpg'),
        },
      ] : [
        {
          img: require('./s2/1.jpg'),
        },
        {
          img: require('./s2/2.jpg'),
        },
        {
          img: require('./s2/3.jpg'),
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
