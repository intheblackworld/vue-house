<template>
  <div class="section10">
    <div class="fullscreen bg" v-if="!isMobile">
      <div class="container">
        <div class="content-left">
          <div class="left-title">
            <h3>品味‧休閒‧紓壓</h3>
            <h3>一座隱身森林裡的會館</h3>
          </div>
          <div class="btn-group flex-jc flex-ac flex-mobile-jb">
            <div
              :class="`btn-item slide-img ${slideIndex === index ? 'active' : ''}`"
              v-for="(slide, index) in slideList"
              :key="`s8-btn-${index}`"
            >
              <div :class="`sofa ${slideIndex === index ? 'active' : ''}`"></div>
              <span class="btn-item-name" @click="slideIndex = index">{{slideList[index].name}}</span>
            </div>
          </div>
        </div>
        <div class="slide relative">
          <div class="border-behind-image"></div>
          <div class="slide-text-area">
            <div class="title">五感生活 從心啓動</div>
            <div>
              不一樣的食養文化，不一樣的風光水色。
              <br />五感體驗、身體律動，在此享受身心靈的全然滿足。
            </div>
          </div>
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s3-slide-${index}`"
            :src="slide.src"
            alt
          />
          <img class="mask" src="./s12_mask.png" alt />
        </div>
      </div>
    </div>
    <div class="bg fullscreen" v-else>
      <div class="content">
        <div class="left-title">
          <h3>台南美學首席</h3>
          <h3>蘊綠養身寓所</h3>
        </div>
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
              <h3>五感生活 從心啓動</h3>
            </div>不一樣的食養文化，不一樣的風光水色。
            <br />五感體驗、身體律動，在此享受身心靈的全然滿足。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #004488;
  background-position: 100% 0%;
  background-size: cover;
  position: relative;
}

.container {
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-left {
  margin-right: 30px;
}

.arrow-btn {
  display: none;
}

.name {
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: -30px;
  color: #1a1311;
  font-size: 14px;
}

.border-behind-image {
  width: 100%;
  height: 98%;
  position: absolute;
  border: solid 5px #707070;
  left: 30px;
  top: 50px;
}

.slide-text-area {
  width: 360px;
  font-weight: 300;
  line-height: 1.6;
  text-align: left;
  color: #ffffff;
  position: absolute;
  z-index: 2;
  margin: 3% 5%;
  font-size: 18px;

  .title {
    font-size: 32px;
    margin-bottom: 10px;
  }
}

.left-title {
  width: 306px;
  font-weight: bold;
  line-height: 1.19;
  letter-spacing: 4.7px;
  color: #ffffff;
  margin-bottom: 20%;

  & h3:nth-child(1) {
    font-size: 30px;
    margin-bottom: 10px;
  }

  & h3:nth-child(2) {
    font-size: 24px;
  }
}

.sofa {
  background-image: url('./s10_icon_brown.png');
  height: 40px;
  width: 60px;
  background-size: contain;
  position: relative;
  top: calc(50% - 20px);
  &.active {
    background-image: url('./s10_icon_white.png');
  }
}

.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.btn-group {
  flex-direction: column;
}

.btn-item {
  width: 270px;
  height: 80px;
  border-bottom: 1px solid #b38a63;
  color: #ffc20e;
  text-align: center;
  padding: 0 10px;
  display: flex;
  font-size: 27px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: 80px;
  letter-spacing: 1.35px;
  cursor: pointer;

  &.active {
    background-color: #b38a63;
    color: #fff;
  }
}

.btn-item-name {
  margin-left: 10px;
}

.slide {
  z-index: 1;
  display: flex;
  overflow: visible;
  border-image: linear-gradient(
    225deg,
    #a07515,
    #d0ae5f 9%,
    #e5c77f 14%,
    #ffffc7 26%,
    #e5c77f 36%,
    #a07515 49%,
    #d0ae5f 57%,
    #e5c77f 61%,
    #ffffc7 74%,
    #e5c77f 84%,
    #a07515
  );
  border: 2px transparent solid;
  background-clip: padding-box, border-box;

  .slide-img {
    width: 980px;
    height: 660px;
    object-fit: cover;
    z-index: 1;
  }

  .slide-content {
    width: 800px;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
  }
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
  .left-title {
    margin-bottom: 10px;
    width: 260px;

    & h3:nth-child(1) {
      font-size: 26px;
      margin-bottom: 10px;
    }

    & h3:nth-child(2) {
      font-size: 20px;
    }
  }
  .content-left {
    margin-right: 20px;
  }

  .sofa {
    height: 30px;
    width: 45px;
    top: calc(50% - 15px);
  }

  .btn-item {
    font-size: 20px;
    width: 200px;
    height: 60px;
    line-height: 60px;
  }
  .slide {
    .slide-img {
      width: 750px;
      height: 500px;
    }
  }
  .border-behind-image {
    top: 30px;
    left: 20px;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .left-title {
    font-size: 32px;
    margin-bottom: 10px;
    width: 260px;
    & h3:nth-child(1) {
      font-size: 24px;
      margin-bottom: 10px;
    }

    & h3:nth-child(2) {
      font-size: 18px;
    }
  }
  .content-left {
    margin-right: 20px;
  }

  .sofa {
    height: 30px;
    width: 45px;
    top: calc(50% - 15px);
  }

  .btn-item {
    font-size: 20px;
    width: 200px;
    height: 60px;
    line-height: 60px;
  }
  .slide {
    .slide-img {
      width: 750px;
      height: 500px;
    }
  }
  .border-behind-image {
    top: 30px;
    left: 20px;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .left-title {
    margin-bottom: 10px;
    width: 260px;

    & h3:nth-child(1) {
      font-size: 26px;
      margin-bottom: 10px;
    }

    & h3:nth-child(2) {
      font-size: 20px;
    }
  }
  .content-left {
    margin-right: 20px;
  }

  .sofa {
    height: 30px;
    width: 45px;
    top: calc(50% - 15px);
  }

  .btn-item {
    font-size: 20px;
    width: 200px;
    height: 60px;
    line-height: 60px;
  }
  .slide {
    .slide-img {
      width: 600px;
      height: 400px;
    }
  }
  .border-behind-image {
    top: 30px;
    left: 20px;
  }
}

@media screen and (max-width: 767px) {
  .content {
    .left-title {
      margin: 20px auto;
    }
    width: 100%;
    display: block;
    .text-area-bg {
      background-image: url('./box.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      width: 90%;
      top: -10px;
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
        color: #249486;
        margin-bottom: 10px;
        line-height: 1.19;
        font-size: 27px;
      }
    }
  }
  .slide {
    .slide-img {
      width: 100vw;
      height: 250px;
    }
  }
}
</style>

<script>
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
export default {
  name: 'section10',
  mixins: [slider],

  data() {
    return {
      slideList: [
        {
          src: require('./s10_img_1.jpg'),
          name: '五感交誼廳',
        },
        {
          src: require('./s10_img_2.jpg'),
          name: '大觀交誼廳',
        },
        {
          src: require('./s10_img_3.jpg'),
          name: '綠量會館',
        },
        {
          src: require('./s10_img_4.jpg'),
          name: '水樣池畔',
        },
        {
          src: require('./s10_img_5.jpg'),
          name: '尊榮雙門廳',
        },
      ],
      isMobile,
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
