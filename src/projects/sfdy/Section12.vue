<template>
  <div class="outer">
    <div class="section12" v-if="!isMobile">
      <div class="slide relative fullscreen">
        <img
          v-for="(slide, index) in slideList"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s12-slide-${index}`"
          :src="slide.src"
          alt
        />
      </div>
      <img class="mask" src="./s12_mask.png" alt />
      <div class="textbox-text-area">
        <div class="textbox-title">
          <h3 class="big">身心安定 洋溢幸福</h3>
          <h3>一戶一樹 一庭一院</h3>
        </div>「幸福大院」在大地上種下夢想，讓家人可以在這沃土豐收！「國揚建設」回歸人性居住哲學，打造新時代幸福別墅空間。一戶一景，哲學之道的景深美學，一眼一境，側院的規劃，增添住戶隱私性！
      </div>
    </div>
    <div class="section12" v-else>
      <div class="slide relative fullscreen">
        <div class="slide relative">
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''} img-c`"
            :key="`s10-slide-${index}`"
            :src="slide.src"
            alt
          />
        </div>
        <div class="text-area-bg">
          <div class="text-area-container">
            <div class="text-area-title">
              <h3 class="big">身心安定 洋溢幸福</h3>
              <h3>一戶一樹 一庭一院</h3>
            </div>「幸福大院」在大地上種下夢想，讓家人可以在這沃土豐收！
            <br />「國揚建設」回歸人性居住哲學，打造新時代幸福別墅空間。
            <br />一戶一景，哲學之道的景深美學，一眼一境，側院的規劃，增添住戶隱私性！
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section12 {
  position: relative;
}

.mask {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
}

.textbox-text-area {
  line-height: 1.6;
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  position: absolute;
  z-index: 1;
  top: 0;
  width: 486px;
  text-align: left;
  margin: 5% 3%;

  .textbox-title {
    color: #ffdf5a;
    line-height: 1.6;
    font-size: 28px;
    margin-bottom: 20px;
  }

  .big {
    font-size: 36px;
  }
}

.slide {
  .name {
    position: absolute;
    right: 6vw;
    font-size: 20px;
    color: #fff;
    z-index: 2;
    top: 20px;
  }
  .slide-img {
    display: block;
  }

  .btn-group {
    position: absolute;
    width: 240px;
    bottom: 0;
    left: auto;
    right: 7vw;
    display: flex;
    margin: 0;
    .button {
      width: 80px;
      height: 80px;
      background: rgba(0, 0, 0, 0.75);
      border: 1px solid #fff;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 23px;

      img {
        width: 20px;
        height: auto;
      }
    }
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .fullscreen {
    height: 800px;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .section12 {
    background-attachment: scroll;
  }
  .slide {
    .slide-img {
      height: calc(100vh - 60px);
    }

    .btn-group {
      .button {
        width: 57px;
        height: 57px;
        font-size: 17px;
        img {
          width: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .outer {
    height: 100%;
  }
  .section12 {
    background-image: url('./s11_bg.jpg');
    background-attachment: scroll;
    background-size: cover;
    background-position: center;
  }
  .fullscreen {
    height: auto !important;
  }

  .slide {
    .name {
      position: relative;
      width: 100vw;
      height: 38px;
      background: #333;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 15px;
      left: 0;
      top: 0;
    }

    .desc {
      position: relative;
    }

    .btn-group {
      width: 100vw;
      left: 0;
      bottom: 40%;
    }
  }

  .text-area-bg {
    background-image: url('./box.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 90%;
    top: -50px;
    margin-top: 40px;
    left: 5%;
    position: relative;
    z-index: 1;

    .text-area-container {
      padding: 20px 20px;
      font-size: 16px;
      text-align: left;
      color: #595757;
      line-height: 1.6;
      font-size: 16px;
      padding: 20px;
      position: relative;
      z-index: 10;
      margin-top: 0;
    }

    .text-area-title {
      text-align: center;
      line-height: 1.5;
      color: #249486;
      margin-bottom: 10px;
      font-size: 19px;
      .big {
        font-size: calc(100vw * 35 / 375);
      }
    }
  }
}
</style>

<script>
// @ is an alias to /src
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
import { setInterval } from 'timers'
export default {
  name: 'section12',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s12_img_1.jpg'),
        },
        {
          src: require('./s12_img_2.jpg'),
        },
        {
          src: require('./s12_img_3.jpg'),
        },
        {
          src: require('./s12_img_4.jpg'),
        },
        {
          src: require('./s12_img_5.jpg'),
        },
        {
          src: require('./s12_img_6.jpg'),
        },
      ],
    }
  },

  methods: {},

  created() {
    setInterval(() => {
      this.addIndex()
    }, 5000)
  },
}
</script>
