<template>
  <div class="section10">
    <div class="bg relative">
      <div class="flex-ac ball1" v-scroll-reveal.reset="!isMobile ? $fadeIn() : $fadeInUp()">
        <img src="./s10_icon_1.png" alt class="icon-1" />
        <div class="text">
          <h3 class="title">放大幸福 加倍感動 大一點好室會發生!</h3>
          <div class="desc">空間大一點，驚喜多一點，想不到的細節都藏在這裡</div>
        </div>
      </div>
      <div class="flex-jb flex-ab wrap">
        <div
          class="slide relative"
          v-scroll-reveal.reset="!isMobile ? $fadeIn(300) : $fadeInUp()"
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
        </div>
        <img src="./s10_icon_2.png" alt class="tree absolute-ac" />
        <div class="content wrap" v-scroll-reveal.reset="!isMobile ? $fadeIn(600) : $fadeInUp()">
          <h3 class="border flex-c">三房</h3>
          <h3 class="title">寬裕客餐廳，主臥加碼更衣室</h3>
          <div class="desc">
            大尺碼客餐廳，是親朋來訪好友相聚小酌的完美場域
            主臥室升級更衣室雙排儲櫃，老婆閨密講悄悄話的完美空間
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  width: 100vw;
  height: auto;
  background-image: url('./s10_bg.jpg');
  padding-top: 30px;

  .icon-1 {
    margin: 0 30px;
  }

  .tree {
    right: 0;
  }

  .text {
    text-align: left;
    position: relative;
    z-index: 2;
    .title {
      font-size: 63px;
      color: #231815;
      margin-bottom: 20px;
    }

    .desc {
      font-size: 32.5px;
      color: #231815;
    }
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
      margin-bottom: 30px;
    }

    .title {
      font-size: 36px;
      margin-bottom: 20px;
      text-align: left;
    }

    .desc {
      font-size: 17px;
      text-align: left;
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
    padding-top: 70px;
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .bg {
    width: 100vw;
    height: auto;
    background-image: url('./s10_bg.jpg');
    padding-top: 30px;
  }

  .bg {
    .icon-1 {
      margin: 0;
    }

    .tree {
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
  name: 'section10',
  mixins: [slider],
  components: {},

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s10_img_1.jpg'),
        },
        {
          src: require('./s10_img_2.jpg'),
        },
        {
          src: require('./s10_img_3.jpg'),
        },
      ],
    }
  },

  methods: {},
}
</script>
