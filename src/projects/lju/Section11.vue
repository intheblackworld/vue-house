<template>
  <div class="section11">
    <div class="bg bg-cover relative">
      <img src="./s11_tree_1.png" alt="" class="tree-1 absolute">
      <div class="flex-jb flex-at wrap bottom">
        <div class="slide relative" v-scroll-reveal.reset="!isMobile ? $fadeIn(300) : $fadeInUp()">
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
        </div>
        <div
          class="content wrap flex-jr"
          v-scroll-reveal.reset="!isMobile ? $fadeIn(600) : $fadeInUp()"
        >
        <h3 class="border flex-c" v-if="isMobile">兩房</h3>
          <h3 class="title">面寬三米五，靈活彈性好運用</h3>
          <div class="desc">
            大面窗寬裕舒適的空間，是家人起居生活的好地方
            可自由調整的+1變化，讓家裡安排更有彈性更加溫馨
          </div>
          <h3 class="border flex-c" v-if="!isMobile">兩房</h3>
        </div>
      </div>
      <img src="./s11_tree_2.png" alt="" class="tree-2">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  width: 100vw;
  height: auto;
  background-image: url('./s10_bg.jpg');
  padding-top: 60px;

  .icon-1 {
    margin: 0 30px;
  }

  .tree-1 {
    left: 0;
    bottom: 0;
  }

  .tree-2 {
    // float: right;
    margin-left: 50vw;
    margin-top: 40px;
  }

  .bottom {
    flex-direction: row-reverse;
  }

  .slide {
    width: 60vw;
    height: calc(60vw * (503 / 885));
    margin-top: 40px;

    .slide-img {
      width: 100%;
    }

    .btn-group {
      width: 58vw;
      bottom: calc(60vw * (250 / 885));
    }
  }

  .content {
    color: #231815;
    padding: 30px;
    width: 40vw;
    position: relative;
    z-index: 2;
    .border {
      width: 103px;
      height: 103px;
      border: 1px solid #231815;
      font-size: 42px;
      color: #231815;
    }

    .title {
      font-size: 34px;
      margin-bottom: 20px;
      text-align: right;
    }

    .desc {
      font-size: 17px;
      text-align: right;
      margin-bottom: 30px;
      line-height: 1.5;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    width: 100vw;
    height: calc(100vw * (900 / 1440));
    background-image: url('./s10_bg.jpg');
    padding-top: 30px;
  }

  .tree-2 {
    margin-top: 150px !important;
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .bg {
    width: 100vw;
    height: auto;
    background-image: url('./s10_bg.jpg');
    padding-top: 0px;
  }

  .bg {
    .icon-1 {
      margin: 0;
    }

    .tree-1, .tree-2 {
      display: none;
    }

    .text {
      text-align: center;
      .title {
        font-size: 30px;
        color: #231815;
        margin-bottom: 20px;
      }

      .desc {
        font-size: 15px;
        color: #231815;
      }
    }

    .slide {
      width: 100vw;
      height: calc(100vw * (503 / 885));
      margin-top: 40px;

      .slide-img {
        width: 100%;
      }

      .btn-group {
        width: 100vw;
        bottom: calc(100vw * (200 / 885));
      }
    }

    .content {
      color: #231815;
      padding: 30px;
      width: 40vw;
      position: relative;
      z-index: 2;
      width: 100vw;
      display: flex;
      align-items: center;
      flex-direction: row !important;
      .border {
        width: 63px;
        height: 63px;
        border: 1px solid #231815;
        font-size: 28px;
        color: #231815;
        margin-bottom: 20px;
        display: flex;
        margin-right: 20px;
      }

      .title {
        width: 170px;
        font-size: 24px;
        margin-bottom: 20px;
        text-align: left;
        display: inline-block;
      }

      .desc {
        font-size: 14px;
        text-align: left;
        line-height: 1.4;
      }
    }
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section11',
  mixins: [slider],
  components: {},

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s11_img_1.jpg'),
        },
        {
          src: require('./s11_img_2.jpg'),
        },
      ],
    }
  },

  methods: {},
}
</script>
