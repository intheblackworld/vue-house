<template>
  <div class="section9">
    <div class="bg fullscreen" v-if="!isMobile">
      <div class="content">
        <div class="text-area-bg">
          <div class="text-area-container">
            <div class="text-area-title">
              <h3 class="big">“國揚建設”</h3>
              <h3>用心打造幸福家園</h3>
            </div>
              國揚集團是台灣唯一橫跨「建築、百貨、飯店、美食」的企業，國揚建設、漢神百貨、漢來大飯店、漢來美食皆為南台灣品味首選。
              <br><br>
              集團不僅持續創造優質品味生活，更以四大領域優勢與專業合力打造台灣「心建築」。
            </div>
        </div>
        <div class="img-1"></div>
      </div>
    </div>
    <div class="bg fullscreen" v-else>
      <div class="content">
        <div
          class="slide relative"
        >
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''} img-c`"
            :key="`s7-slide-${index}`"
            :src="slide.src"
            alt
          />
          <img class="left-btn" @click="addIndex" src="./left_btn.png" alt="幸福大院的圖片" />
          <img class="right-btn" @click="decIndex" src="./right_btn.png" alt="幸福大院的圖片" />
        </div>
        <div class="text-area-bg">
          <div class="text-area-container">
            <div class="text-area-title">
              <h3>“國揚建設”</h3>
              <h3>用心打造幸福家園</h3>
            </div>
              國揚集團是台灣唯一橫跨「建築、百貨、飯店、美食」的企業，國揚建設、漢神百貨、漢來大飯店、漢來美食皆為南台灣品味首選。
              <br><br>
              集團不僅持續創造優質品味生活，更以四大領域優勢與專業合力打造台灣「心建築」。
            </div>
        </div>
      </div>
    </div>
    <div class="img-2"></div>
    <div class="img-3"></div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/style/variableDefault.scss';

.section9 {
  position: relative;
}

.bg {
  display: flex;
  background-image: url('./s7_bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
}


.content {
  display: flex;
  width: 80%;
  height: 70%;
  z-index: 1;
}

.img-1 {
  background-image: url('./s9_img_1.jpg');
  background-position: center;
  background-size: 100% 100%;
  flex: 2;
}

.img-2 {
  background-image: url('./s9_img_2.png');
  background-position: center;
  background-size: cover;
  position: absolute;
  width: 100%;
  background-repeat: no-repeat;
  height: 100%;
  background-size: 100%;
  top: -6%;
  background-position: top;
}

.img-3 {
  background-image: url('./s9_img_3.png');
  background-position: center;
  background-size: cover;
  position: absolute;
  width: 100%;
  background-repeat: no-repeat;
  height: 100%;
  top: 0%;
  z-index: 1;
}

.text-area-bg {
  background-image: url('./box.png');
  background-size: 100% 100%;
  flex: 1;
  background-repeat: no-repeat;
  margin-right: 6px;

  .text-area-container {
    font-size: 20px;
    text-align: left;
    color: #595757;
    width: 70%;
    height: 80%;
    margin: 0 auto;
    margin-top: 10%;
    line-height: 1.3;
  }

  .text-area-title {
    font-size: 32px;
    color: #249486;
    line-height: 1.19;
    text-align: center;
    margin-bottom: 16px;
    width: 440px;
    position: relative;
    left: calc(50% - 220px);
  }

  h3.big {
    font-size: 49px;
    line-height: 1.2;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {

}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text-area-bg {
      width: 240px;
      .text-area-container {
        padding: 40px 10px 180px;
        line-height: 1.3;
        font-size: 17px;
        padding: 0;
      }

      .text-area-title {
            line-height: 1.5;
        font-size: 25px;
        .big {
          font-size: 32px;
        }
      }
    }
}

@media screen and (max-width: 767px) {
  .bg {
    display: block;
  }
  .fullscreen {
  }
    .content {
    width: 100%;
    display: block;
    .text-area-bg {
      width: 90%;
      top: -50px;
      left: 5%;
      position: relative;

      .text-area-container {
        line-height: 1.2;
        font-size: 17px;
        padding: 20px 0;
        position: relative;
        z-index: 10;
        margin-top: 0;
      }

      .text-area-title {
        font-size: 27px;
      }
    }
  } 
  .slide {
    .right-btn {
      margin-right: 10px;
      width: 40px;
    }

    .left-btn {
      margin-left: 10px;
      width: 40px;
    }
  }

}
</style>

<script>
// @ is an alias to /src
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
export default {
  name: 'section9',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s7_slider_1.jpg'),
        },
        {
          src: require('./s7_slider_2.jpg'),
        },
        {
          src: require('./s7_slider_3.jpg'),
        },
        {
          src: require('./s7_slider_4.jpg'),
        },
      ],
    }
  },

  methods: {},

  created() {},
}
</script>
