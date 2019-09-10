<template>
  <div class="section7">
    <div class="bg fullscreen" v-if="!isMobile">
      <div class="content">
        <div class="text-area-bg">
          <div class="text-area-container">
            <div class="text-area-title">
              <h3>“綠的生機”</h3>
              <h3>都市森林</h3>
            </div>
              夠大的土地，才能打造夠大的森林。「幸福大院」種下超過500棵喬木與樹苗，100種以上的植物，基地綠化量高達4500坪，高低錯落的立體森林，不僅是住戶們的自然遮陽傘。
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
              <h3>“綠的生機”</h3>
              <h3>都市森林</h3>
            </div>
              夠大的土地，才能打造夠大的森林。「幸福大院」種下超過500棵喬木與樹苗，100種以上的植物，基地綠化量高達4500坪，高低錯落的立體森林，不僅是住戶們的自然遮陽傘。
            </div>
        </div>
      </div>
    </div>
    <div class="img-2"></div> 
  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/style/variableDefault.scss';

.section7 {
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
}

.img-1 {
  background-image: url('./s7_img_1.jpg');
  background-position: center;
  background-size: cover;
  flex: 2;
}

.img-2 {
  background-image: url('./s7_img_2.png');
  height: 300px;
  position: absolute;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  bottom: 5%;
}

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
    line-height: 1.3;
    font-size: 20px;
  }

  .text-area-title {
    font-size: 48px;
    color: #249486;
    line-height: 1.19;
    text-align: center;
    margin-bottom: 16px;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {

}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {

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
        font-size: 35px;
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
  .img-2 {
    height: 120px;
    bottom: 0px;
    width: 165%;
    right: 0;
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
