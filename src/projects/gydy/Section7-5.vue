<template>
  <div class="section7">
    <div class="bg relative">
      <!-- <div class="container">
        <div class="label">
          安心建築
          <span>No.1</span>
        </div>
        <div class="title">
          建築3強聯手 各擅勝場精鑄出擊
          <br />誓以安全陣容昇華安心笑容
        </div>
        <div class="subtitle">核心三巨頭_實力天團集氣三倍安心</div>
        <div :class="`desc ${isOpenDesc ? 'active': ''}`">
          <img
            @click="isOpenDesc = !isOpenDesc"
            src="./add-icon.png"
            class="add-icon"
            v-if="isMobile"
            alt
          />
          齊聚建築鐵三角，集結三倍豐厚實力與優質血統悉心擘劃，因「三希堂」聞名的馥域建設＿以留美建築學人之姿，締造高標以待的靈韻；欣聯建設＿為信賴營造職人之首，憑「東園綻」、「幸福捷境」、「欣聯大心」、「欣聯心」…等熱銷個案經典實績，奠定究極精工的基石；首敦建設＿任在地深耕達人，藉北投「鹿鳴館」名宅推手實力，融入居宅工藝，耗費三倍心力攜手累加斐然資歷，為翻轉北投街廓奉獻心力。
        </div>
      </div>-->
      <div class="img-row" v-if="!isMobile">
        <div class="col">
          <img src="./s7-5_img_1.png" alt />
        </div>
        <div class="col">
          <img src="./s7-5_img_1.png" alt />
        </div>
        <div class="col">
          <img src="./s7-5_img_2.jpg" alt />
        </div>
        <div class="col">
          <img src="./s7-5_img_3.jpg" alt />
        </div>
      </div>
      <div class="bottom relative" v-if="!isMobile">
        <div class="title">宅配綠意。如院以償</div>
        <img src="./s7-5_img_b.png" alt class="build absolute" />
      </div>
      <div class="b-footer" v-if="!isMobile"></div>
      <div class="title" v-if="isMobile">宅配綠意。如院以償</div>
      <div class="slide relative" v-if="isMobile">
        <img
          v-for="(slide, index) in slideList"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s7-slide-${index}`"
          :src="slide.src"
          alt
        />
        <div class="btn-group flex-jc flex-ac flex-mobile-jb" v-if="isMobile">
          <img @click="decIndex" src="./arrow-left.png" alt />
          <img @click="addIndex" src="./arrow-right.png" alt />
        </div>
      </div>
      <div class="b-footer" v-if="isMobile"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s6_bg.png');
  position: relative;
}

.img-row {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 20px;
  .col {
    width: 24.3%;
    position: relative;

    .col-title {
      font-size: 20px;
      color: #fff;
      text-align: center;
      position: absolute;
      width: 100%;
      top: 15px;

      &.black {
        color: #000;
      }
    }

    img {
      width: 100%;
    }
  }
}

.bottom {
  background: url('./s7-5_img_1.png');
  width: 100vw;
  margin-top: 20px;
  height: calc(24.3vw * (370 / 350));

  .title {
    width: 100vw;
    height: 170px;
    font-size: 65px;
    font-weight: bold;
    line-height: 0.4;
    text-align: right;
    color: #ffffff;
    background-color: #5fc2c6;
    padding-right: 5%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 0%;
  }
}

.build {
  left: 0;
  bottom: 0;
  width: 100vw;
  z-index: 1;
}

.b-footer {
  width: 100vw;
  height: 54px;
  background: #008f95;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }

  .bottom {
    .title {
      font-size: 55px;
      padding-right: 2%;
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    padding-top: 30px;
  }

  .fullscreen {
    height: auto !important;
  }

  .container {
    width: 100vw;
    margin-bottom: 30px;
    
  }

  .title {
    width: 100vw;
    padding: 30px 0;
    font-size: 39px;
    font-weight: bold;
    line-height: 0.77;
    text-align: center;
    color: #ffffff;
    background-color: #5fc2c6;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .subtitle {
    width: 90vw;
    font-size: 32px;
    margin-bottom: 30px;
    line-height: 1.19;
    text-align: left;
    font-size: 24px;
    line-height: 1.29;
    color: #9e1616;
    margin: 0 auto;
  }

  .desc {
    width: 90vw;
    margin: 0 auto;
    font-size: 18px;
    height: auto;
    text-overflow: clip;
    padding: 15px;
    line-height: 1.5;
    padding-left: 0;
    padding-bottom: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    position: relative;
    text-align: justify;
    .add-icon {
      position: absolute;
      right: 0px;
      top: 0px;
      width: 30px;
      cursor: pointer;
    }

    &.active {
      height: auto;
      display: block;
    }
  }

  .train {
    width: 100vw;
    height: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .slide .btn-group {
    bottom: 45%;
  }

  .slide .slide-title {
    font-size: 20px;
    color: #fff;
    text-align: center;
    position: absolute;
    width: 100%;
    top: 15px;
    z-index: 2;

    &.black {
      color: #000;
    }
  }

  .b-footer {
    height: 29px;
  }
}
</style>

<script>
// @ is an alias to /src
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
export default {
  name: 'section7',
  mixins: [slider],

  data() {
    return {
      isOpenDesc: false,
      isMobile,
      slideList: [
        {
          src: require('./s7-5_img_2.jpg'),
        },
        {
          src: require('./s7-5_img_3.jpg'),
        },
      ],
    }
  },

  methods: {},

  created() {},
}
</script>
