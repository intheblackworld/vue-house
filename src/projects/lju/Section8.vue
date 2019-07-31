<template>
  <div class="section8 relative">
    <img src="./s8_tree.png" alt class="tree absolute" />
    <h3
      class="title flex-ac"
      v-scroll-reveal.reset="!isMobile ? $fadeInLeft(0) : $fadeInUp()"
    >雋永雅緻，讓回家成為最期望的事</h3>
    <div class="absolute content">
      <div
        class="slide relative"
        v-scroll-reveal.reset="!isMobile ? $fadeInLeft(300) : $fadeInUp()"
      >
        <img
          v-for="(slide, index) in slideList"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s4-slide-${index}`"
          :src="slide.src"
          alt
        />

        <div class="btn-group flex-jb flex-ac">
          <img @click="addIndex" src="./small_left_btn.png" alt />
          <img @click="decIndex" src="./small_right_btn.png" alt />
        </div>
        <div class="slide-content absolute">
          <h3 class="title">{{slideList[slideIndex].title}}</h3>
          <div class="desc">{{slideList[slideIndex].desc}}</div>
          <div
            class="btn flex-c"
            @click="slideIndex = slideList[slideIndex].goToIndex"
          >{{slideList[slideIndex].btn}} ►</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section8 {
  width: 100vw;
  height: calc(100vw * (900 / 1440));
  background-image: url('./s8_bg.jpg');
  padding-top: 77px;
}

.btn-group {
  display: none;
}

.tree {
  left: calc(100vw * (1200 / 1440));
  top: calc(100vw * (900 / 1440) * 15%);
}

.title {
  font-size: 52px;
  color: #000;
  border-left: 59px solid #d43829;
  padding-left: 20px;
  text-align: left;
  height: 83px;
}

.slide {
  width: calc(100vw * (1200 / 1440));
  height: calc(100vw * (1200 / 1440) * (720 / 1200));
  img {
    width: calc(100vw * (1200 / 1440));
  }

  .slide-content {
    background-image: url('./s8_shadow.png');
    width: 490px;
    height: 190px;
    bottom: 150px;
    right: -100px;
    padding: 40px;

    .title {
      font-size: 31px;
      color: #fff;
      height: auto;
      border-left: none;
      text-align: left;
      margin-bottom: 30px;
      padding-left: 0;
    }

    .desc {
      color: #fff;
      font-size: 17.5px;
      line-height: 1.5;
      text-align: left;
    }

    .btn {
      background: #bcb700;
      width: 280px;
      height: 50px;
      color: #fff;
      position: relative;
      right: -200px;
      bottom: -20px;
      cursor: pointer;
    }
  }
}

.content {
  bottom: 0;
  left: 0;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .section8 {
    width: 100vw;
    height: calc(100vw * (900 / 1440));
    background-image: url('./s8_bg.jpg');
    padding-top: 70px;
  }

  .tree {
    left: calc(100vw * (1200 / 1440));
    top: calc(100vw * (900 / 1440) * 15%);
  }

  .title {
    font-size: 40px;
    color: #000;
    border-left: 30px solid #d43829;
    padding-left: 15px;
    text-align: left;
    height: 67px;
  }

  .slide {
    width: calc(100vw * (1200 / 1440));
    height: calc(100vw * (1200 / 1440) * (720 / 1200));
    img {
      width: calc(100vw * (1200 / 1440));
    }

    .slide-content {
      background-image: url('./s8_shadow.png');
      width: 388px;
      height: 151px;
      bottom: 50px;
      right: -100px;
      padding: 30px;

      .title {
        font-size: 24.5px;
        color: #fff;
        height: auto;
        border-left: none;
        text-align: left;
        margin-bottom: 10px;
        padding-left: 0;
      }

      .desc {
        color: #fff;
        font-size: 13.5px;
        line-height: 1.5;
        text-align: left;
      }

      .btn {
        background: #bcb700;
        width: 220px;
        height: 40px;
        color: #fff;
        font-size: 14px;
        position: relative;
        right: -170px;
        bottom: -20px;
        cursor: pointer;
      }
    }
  }

  .content {
    bottom: 0;
    left: 0;
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .section8 {
    width: 100vw;
    height: calc(100vw * (667 / 375));
    background-image: url('./s8_bg.jpg');
    padding-top: 30px;
  }

  .tree {
    width: 100px;
    right: 0;
    bottom: 10px;
  }

  .title {
    font-size: 34px;
    width: 319px;
    color: #000;
    border-left: none;
    padding-left: 20px;
    line-height: 1.5;
    text-align: left;
    height: 79px;
    margin-bottom: 20px;
  }

  .slide {
    width: 100vw;
    height: calc(100vw * (370 / 375) + 60px);
    img {
      width: 100%;
      height: auto;
    }

    .btn-group {
      bottom: auto;
      top: calc(100vw * (240 / 375) / 2);
      display: flex;
    }

    .slide-content {
      background-image: none;
      position: relative;
      width: 100%;
      height: auto;
      bottom: auto;
      right: 0;
      top: calc(100vw * (240 / 375));
      left: 0;
      padding: 30px;

      .title {
        font-size: 26px;
        color: #252525;
        height: auto;
        border-left: none;
        text-align: left;
        margin-bottom: 10px;
        padding-left: 0;
      }

      .desc {
        color: #252525;
        font-size: 16px;
        line-height: 1.5;
        text-align: left;
      }

      .btn {
        display: none;
      }
    }
  }

  .content {
    position: relative;
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section8',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s8_img_1.jpg'),
          title: '麗韻門廳，如同飯店宴會Bar',
          desc: '典雅的灰藍色階，鋪陳出飯店般的情緒，崗石與玻璃材質的完美設計',
          btn: '健身空間，喚醒身體的能量',
          goToIndex: 1,
        },
        {
          src: require('./s8_img_2.jpg'),
          title: '健身空間，喚醒身體的能量',
          desc: '兼具健身房與閱覽空間，陪伴孩子閱讀時也鍛鍊自己的身材與線條',
          btn: '麗韻門廳，如同飯店宴會Bar',
          goToIndex: 0,
        },
      ],
    }
  },

  methods: {},
}
</script>
