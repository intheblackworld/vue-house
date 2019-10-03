<template>
  <div class="section5">
    <div class="bg">
      <div class="container">
        <div class="text-area-bg" id="section5">
          <div class="text-area-container">
            <div class="text-area-title">
              <h3>2萬4千坪壯闊基地</h3>
              <h3>無限開闊 樂活莊園</h3>
            </div>規劃採光時，須考慮到太陽行進的面向，因此透過格柵的設計，隔絕較強的刺眼光線，當陽光透過格柵，輕盈地灑在室內各角落，成就美麗的風景。「幸福大院」戶戶規劃大陽台，不僅成為自然採光的設計重點，也是打造建築立面豐富層次的元素，陽台可種植喜愛的花草盆栽，透過妝點綠意，讓每一戶都有不同的巧思與表情。
          </div>
        </div>
        <div class="slide relative">
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''} img-c`"
            :key="`s5-slide-${index}`"
            :src="slide.src"
            alt
          />
          <img class="left-btn" @click="addIndex" src="./left_btn.png" alt="幸福大院的圖片" />
          <img class="right-btn" @click="decIndex" src="./right_btn.png" alt="幸福大院的圖片" />
        </div>
      </div>
    </div>
    <img src="./s5_tree.png" alt class="tree" v-if="!isMobile" />
    <img src="./s5_tree_m.png" alt class="tree" v-if="isMobile" />
  </div>
</template>
<style lang="scss" scoped>
.section5 {
  position: relative;
  height: 100%;
}

.tree {
  position: absolute;
  width: 100vw;
  left: 0;
  top: 12%;
  left: 0;
  z-index: 1;
}

.bg {
  background-image: url('./s4_bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  // position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 100%;
  // height: 100vh;
  // left: 0;
  // top: 0;
  width: 100vw;
  height: calc(100vw * (1227 / 1920));
  position: relative;
  overflow: hidden;
}

.container {
  display: flex;
  display: flex;
  width: 80%;
  max-width: 1250px;
  max-height: 700px;
  height: 70%;
  // width: 980px;
  // margin: 0 auto;
  // text-align: center;

  .text-area-bg {
    background-image: url('./box.png');
    background-size: 100% 100%;
    flex: 1;
    background-repeat: no-repeat;
    margin-right: 6px;

    .text-area-container {
      text-align: left;
      color: #595757;
      width: 70%;
      height: 80%;
      margin: 0 auto;
      margin-top: 10%;
      line-height: 1.6;
      font-size: 20px;
    }

    .text-area-title {
      width: 440px;
      position: relative;
      left: calc(50% - 220px);
      font-size: calc(100vw * 35 / 1680);
      color: #249486;
      text-align: center;
      margin-bottom: 16px;
    }
  }

  .slide {
    flex: 2;
    // width: 955px;
    // height: 458px;
    // margin-left: 50px;
    // margin-bottom: 30px;

    .left-btn {
      margin-left: 34px;
      z-index: 5;
    }

    .right-btn {
      margin-right: 34px;
      z-index: 5;
    }

    .slide-img {
      // width: 810px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    .slide-content {
      position: absolute;
      bottom: 30px;
    }
  }

  .btn-group {
    display: none;
  }
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
  .text-area-bg {
    .text-area-container {
      font-size: 18px;

      .text-area-title {
        font-size: calc(100vw * 45 / 1680);
      }
    }
  }
  .tree {
    top: 5%;
    width: 96%;
  }
}
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .container {
    .text-area-bg {
      .text-area-container {
        font-size: 18px;

        .text-area-title {
          font-size: calc(100vw * 48 / 1680);
        }
      }
    }
  }
  .tree {
    margin-left: 94px;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    .text-area-bg {
      width: 240px;
      .text-area-container {
        padding: 40px 10px 180px;
        line-height: 1.3;
        font-size: 14px;
        padding: 0;
      }

      .text-area-title {
        font-size: 26px;
      }
    }
  }

  .tree {
    top: 0%;
    // height: calc(100vw * (768 / 1024));
  }

  .container {
    height: 440px;
  }

  .bg {
    height: calc(100vw * (576 / 1024));
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .bg {
    display: block;
    min-height: 930px;
    height: 120vh;
    background-attachment: scroll;
  }
  .fullscreen {
    height: auto !important;
  }

  .tree {
    // background-image: url("./s5_tree_m.png");
    bottom: 0%;
    width: 100vw;
    // height: calc(100vw * (500 / 900));
    top: auto;
    right: 0%;
    z-index: 2;
  }
  .container {
    display: block;
    width: 100vw;
    margin: 0 auto;
    text-align: center;

    .text-area-bg {
      position: absolute;
      top: 20%;
      z-index: 2;
      width: 90%;
      left: 5%;

      .text-area-container {
        padding: 20px 10px 180px;
        line-height: 1.6;
        font-size: 17px;
        width: 80%;
      }

      .text-area-title {
        font-size: 35px;
      }
    }

    .slide {
      position: absolute;
      z-index: 1;
      top: 0;
      height: calc(100vw * (180 / 320) + 40px);
      margin-left: 0px;
      margin-bottom: 100px;

      .slide-img {
        width: 100vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }

      .right-btn {
        margin-right: 10px;
        width: 40px;
      }

      .left-btn {
        margin-left: 10px;
        width: 40px;
      }

      .btn-group {
        width: 180px;
        bottom: 0px;
        display: flex;
      }

      .slide-content {
        position: absolute;
        bottom: -100px;
      }
    }
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'

export default {
  name: 'section5',
  mixins: [slider],
  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s5_item0.jpg'),
        },
        {
          src: require('./s5_item1.jpg'),
        },
        {
          src: require('./s5_item2.jpg'),
        },
        {
          src: require('./s5_item3.jpg'),
        },
        {
          src: require('./s5_item4.jpg'),
        },
        {
          src: require('./s5_item5.jpg'),
        },
        {
          src: require('./s5_item6.jpg'),
        },
      ],
    }
  },

  methods: {},

  created() {},
}
</script>
