<template>
  <div class="section11">
    <div class="bg">
      <div class="container">
        <!-- <h3 class="title flex-c" v-scroll-reveal.reset="!isMobile ? $fadeInUp() : $fadeInUp()">樹海為鄰</h3>
        <h3 class="sub-title" v-scroll-reveal.reset="!isMobile ? $fadeInUp(300) : $fadeInUp()">有氧森活，比健身房更好的養生秘境</h3>
        <div class="small-title" v-scroll-reveal.reset="!isMobile ? $fadeInUp(600) : $fadeInUp()">10公頃樹海造鎮，伴隨呼吸與大自然共舞，走出氧森之道</div>-->
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
          <!-- <div class="slide-content">
            <div class="slide-title">{{slideList[slideIndex].title}}</div>
            <div class="slide-desc" v-html="slideList[slideIndex].desc"></div>
          </div>-->
          <!-- <div class="btn-group flex-jb flex-ac">
            <img @click="addIndex" src="./small_left_btn.png" alt="心天畝的圖片" />
            <img @click="decIndex" src="./small_right_btn.png" alt="心天畝的圖片" />
          </div>-->
        </div>
        <div class="text-area-bg">
          <div class="text-area-container">
            <div class="text-area-title">
              <h3 class="big">“飯店式精緻物業管理”</h3>
              <h3>贏得您的信任與芳心</h3>
            </div>「幸福大院」為首座引用「飯店式精緻物業管理」服務的別墅社區，我們期望住進來就是享受的開始，因此提供高爾夫球車內接送服務，創造峇里島頂級VILLA的生活情境，由專業的管家秘書團隊，為住戶提供貼心的生活服務。加強社區總體營造，社區將不定期舉辦生活分享系列課程，讓鄰里關係更緊密，從軟體服務提升別墅的生活境界，才是頂級生活應有的尊貴，應有的享受。
          </div>
          <div class="prize"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section11 {
  position: relative;
}

.prize {
  background-image: url("./s11_prize.png");
  bottom: 40px;
  margin-left: -100px;
  width: 200px;
  height: 200px;
  background-size: contain;
  position: absolute;
  background-repeat: no-repeat;
  pointer-events: none;
}

.bg {
  background-image: url("./s11_bg.jpg");
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
  height: calc(100vh - 60px);
  position: relative;
  overflow: hidden;
}

.container {
  display: flex;
  display: flex;
  width: 80%;
  max-width: 1250px;
  height: 70%;

  .text-area-bg {
    background-image: url("./s11_textbox.png");
    background-size: 100% 100%;
    flex: 1;
    background-repeat: no-repeat;
    margin-left: 6px;

    .text-area-container {
      text-align: left;
      width: 70%;
      height: 80%;
      margin: 0 auto;
      margin-top: 10%;
      line-height: 1.2;
      font-size: 19px;
      color: #3e3a39;
    }

    .text-area-title {
      width: 440px;
      position: relative;
      left: calc(50% - 220px);
      font-size: 48px;
      color: #249486;
      text-align: center;
      margin-bottom: 16px;
      font-size: 32px;

      .big {
        font-size: 38px;
      }
    }
  }

  .slide {
    flex: 2;
    .left-btn {
      margin-left: 34px;
    }

    .right-btn {
      margin-right: 34px;
    }

    .slide-img {
      // width: 810px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }

  .btn-group {
    display: none;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    
    .text-area-bg {
      width: 240px;
      .text-area-container {
        width: 80%;
        font-size: 15px;
      }

      .text-area-title {
        line-height: 1.5;
        font-size: 20px;
        .big {
          font-size: 20px;
        }
      }
    }

    .slide {
      .slide-img {
        width: 600px;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .bg {
    display: block;
    height: 120vh;
  }

  .container {
    width: 100vw;
    margin: 0 auto;
    text-align: center;
    .text-area-bg {
      width: 90%;
      left: 5%;
      position: absolute;
      top: 200px;
      margin: 0;

      .text-area-container {
        padding: 40px 0 120px 0;
        line-height: 1.2;
        font-size: 17px;
        position: relative;
        z-index: 10;
        margin-top: 0;
      }

      .text-area-title {
        font-size: 35px;
        .big {
          font-size: 28px;
        }
        h3 {
          font-size: 23px;
        }
      }
    }
  }
  .slide {
    width: 100vw;
    height: calc(100vw * (180 / 320) + 40px);
    margin-left: 0px;
    margin-bottom: 100px;
    margin: 0;

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
  }
  .prize {
    margin-left: 0;
    width: 94px;
    height: 134px;
    bottom: -34px;
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
import slider from "@/mixins/slider.js";
import { isMobile } from "@/utils";

export default {
  name: "section11",
  mixins: [slider],
  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require("./s11_img_1.jpg")
        },
        {
          src: require("./s11_img_2.jpg")
        },
        {
          src: require("./s11_img_3.jpg")
        },
        {
          src: require("./s11_img_4.jpg")
        }
      ]
    };
  },

  methods: {},

  created() {}
};
</script>
