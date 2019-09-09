<template>
  <div class="section8">
    <div class="fullscreen bg" v-if="!isMobile">
      <div class="container">
        <div class="container-top">
          <div class="slide relative">
            <img
              v-for="(slide, index) in slideList"
              :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
              :key="`s3-slide-${index}`"
              :src="slide.srcHasTitle"
              alt
            />
          </div>
          <div class="textbox-wrapper">
            <div class="textbox-behind"></div>
            <div class="text-area-bg">
              <div class="text-area-title">
                <h3 class="big">“點亮大台南”</h3>
                <h3>超強卡司創優質生活新指標</h3>
              </div>
              <div class="text-area-subTitle">國揚 ╳ 德國 ╳ 日本 ╳ 新加坡 ╳ 成大祐生團隊</div>跨國聯擘建築奧斯卡，為「幸福大院」打造一座融合綠能、環保、永續的別墅莊園，期望以領先全球的生態觀點為台南挹注永續基因，讓土地看見愛，讓國際看見台南。
            </div>
          </div>
        </div>
        <div class="btn-group flex-jc flex-ac flex-mobile-jb">
          <div class="btn-item" v-for="(slide, index) in slideList" :key="`s8-btn-${index}`">
            <img class="btn-item-img" :src="slideList[index].src" @click="slideIndex = index" />
            <span class="btn-item-name">{{slideList[index].name}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bg fullscreen relative" v-else>
      <div class="container">
        <!-- <div class="container-top"> -->
        <div class="slide relative">
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s3-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="name">{{slideList[slideIndex].name}}</div>
          <img class="left-btn" @click="addIndex" src="./left_btn.png" alt="幸福大院的圖片" />
          <img class="right-btn" @click="decIndex" src="./right_btn.png" alt="幸福大院的圖片" />
        </div>
        <div class="textbox-wrapper">
          <div class="textbox-behind"></div>
          <div class="text-area-bg">
            <div class="text-area-title">
              <h3 class="big">“點亮大台南”</h3>
              <h3>超強卡司創優質生活新指標</h3>
            </div>
            <div class="text-area-subTitle">國揚 ╳ 德國 ╳ 日本 ╳ 新加坡 ╳ 成大祐生團隊</div>跨國聯擘建築奧斯卡，為「幸福大院」打造一座融合綠能、環保、永續的別墅莊園，期望以領先全球的生態觀點為台南挹注永續基因，讓土地看見愛，讓國際看見台南。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url("./s7_bg.jpg");
  background-attachment: fixed;
  background-position: 99% 0%;
  background-size: cover;
  position: relative;
}

.container {
  margin-top: 3%;
}

.container-top {
  margin: 0 auto;
  width: 80%;
  display: flex;
}

.textbox-wrapper {
  position: relative;
  width: 100%;
  left: -70px;
  z-index: 1;
  top: 50px;
}

.text-area-bg {
  background-image: url("./box.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 665.1px;
  height: 407.2px;
  position: absolute;
  font-size: 25px;
  line-height: 1.32;
  padding: 30px 60px;
  text-align: left;
  font-weight: 300;

  .text-area-title {
    position: relative;
    width: 540px;
    left: calc(50% - 270px);
    font-size: 48px;
    color: #249486;
    text-align: center;
    margin-bottom: 16px;

    h3 {
      font-size: 44px;
    }
    h3.big {
      font-size: 56px;
    }
  }

  .text-area-subTitle {
    font-weight: 600;
  }
}

.textbox-behind {
  width: 665.1px;
  height: 407.2px;
  background-image: linear-gradient(
    135deg,
    #877d24,
    #d3bf80 38%,
    #d3bf80 56%,
    #b3a45a 69%,
    #9b8e3c 81%,
    #8c812a 92%,
    #877d24
  );
  position: absolute;
  left: 20px;
  top: 20px;
}

.btn-group {
  position: relative;
  width: 60%;
  margin: 40px auto;
  justify-content: space-evenly;
  display: flex;
}

.btn-item {
  display: flex;
  flex-direction: column-reverse;
  cursor: pointer;
}

.btn-item-img {
  width: 170px;
  margin-top: 20px;
}

.btn-item-name {
  color: #727171;
  font-size: 22px;
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
.white {
  width: 800px;
  height: 435px;
  background: #fff;
  position: absolute;
  left: 0;
  top: 140px;
  margin-left: 140px;
}

.text {
  width: 398.5px;
  height: 434px;
  background-color: #c08d4e;
  position: absolute;
  right: 0;
  right: -329px;
  top: -75px;
  padding-left: 130px;
  padding-top: 110px;

  .title {
    width: 211px;
    height: auto;
    font-size: 26px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    margin-left: 0;
    margin-bottom: 0;
  }

  .desc {
    width: 211px;
    height: 128px;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    text-align: justify;
    color: #ffffff;
    margin-left: 0;
    margin-bottom: 0;
  }
}

.slide {
  z-index: 1;
  display: flex;
  border-image-slice: 10;
  // border-image:  linear-gradient(225deg, #a07515, #d0ae5f 9%, #e5c77f 14%, #ffffc7 26%, #e5c77f 36%, #a07515 49%, #d0ae5f 57%, #e5c77f 61%, #ffffc7 74%, #e5c77f 84%, #a07515);
  border-image: linear-gradient(to top, #f80, #2ed);
  border: 20px transparent solid;
  // background-clip:padding-box,border-box;

  .slide-img {
    width: 800px;
    height: 450px;
    object-fit: cover;
    z-index: 1;
    object-fit: cover;
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
  .container-top {
    width: 90%;
  }
  .slide {
    border: none;
    .slide-img {
      width: 800px;
      height: 400px;
    }
  }
  .btn-group {
    width: 70%;
    .btn-item-name {
      font-size: 18px;
    }
    .btn-item-img {
      width: 140px;
    }
  }
  .textbox-wrapper {
    top: 40px;
  }
  .textbox-behind {
    height: 340px;
    width: 450px;
    top: 30px;
    left: 30px;
  }

  .text-area-bg {
    top: 12px;
    height: 340px;
    font-size: 18px;
    width: 460px;
    padding: 20px 30px;
    .text-area-title {
      h3 {
        font-size: 24px;
      }
      h3.big {
        font-size: 32px;
      }
    }
  }

  .text-area-subTitle {
    // margin-bottom: 10px;
    font-size: 19px;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
   .container-top {
    width: 90%;
  }
  .slide {
    border: none;
    .slide-img {
      width: 600px;
      height: 310px;
    }
  }
  .btn-group {
    width: 90%;
    .btn-item-name {
      font-size: 18px;
    }
    .btn-item-img {
      width: 140px;
    }
  }
  .textbox-wrapper {
    top: 40px;
  }
  .textbox-behind {
    width: 450px;
    height: 220px;
  }

  .text-area-bg {
    font-size: 15px;
    width: 460px;
    height: 230px;
    top: 0px;
    padding: 20px 30px;
    .text-area-title {
      h3 {
        font-size: 24px;
      }
      h3.big {
        font-size: 32px;
      }
    }
  }

  .text-area-subTitle {
    margin-bottom: 10px;
    font-size: 19px;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container-top {
    width: 90%;
  }
  .slide {
    border: none;
    .slide-img {
      width: 500px;
      height: 260px;
    }
  }
  .btn-group {
    width: 90%;
    .btn-item-name {
      font-size: 18px;
    }
    .btn-item-img {
      width: 140px;
    }
  }
  .textbox-wrapper {
    top: 40px;
  }
  .textbox-behind {
    width: 450px;
    height: 190px;
  }

  .text-area-bg {
    font-size: 15px;
    width: 460px;
    height: 230px;
    top: -30px;
    padding: 20px 30px;
    .text-area-title {
      h3 {
        font-size: 24px;
      }
      h3.big {
        font-size: 32px;
      }
    }
  }

  .text-area-subTitle {
    margin-bottom: 10px;
    font-size: 19px;
  }
}

@media screen and (max-width: 767px) {
  // .section8 {
  //   margin-top: -1px;
  // }
  // .container-top {
  //   width: 100vw;
  //   padding-bottom: 20px;
  // }

  // .fullscreen {
  //   height: auto !important;
  // }

  .slide {
    border: none;
    .slide-img {
      width: 100vw;
      height: 100%;
    }
    .btn-group {
    }

    .name {
      z-index: 1;
      color: #fff;
      font-size: 22px;
      bottom: 50px;
      margin: 0 auto;
      left: 0;
    }

    .right-btn {
      z-index: 1;
      margin-right: 10px;
      width: 40px;
    }

    .left-btn {
      z-index: 1;
      margin-left: 10px;
      width: 40px;
    }
  }
  .textbox-wrapper {
    left: 0;
    top: 0;
  }
  .textbox-behind {
    width: 84%;
    height: 200px;
    top: -26px;
    left: 50px;
    position: absolute;
  }

  .text-area-bg {
    width: 90%;
    font-size: 14px;
    padding: 20px;
    left: 5%;
    height: 200px;
    top: -36px;
    font-size: 14px;
    .text-area-title {
      h3 {
        font-size: 21px;
      }
      h3.big {
        font-size: 27px;
      }
    }
  }

  .text-area-subTitle {
    font-size: 14px;
  }

  // .slide-content-m {
  //   position: relative;
  //   z-index: 4;
  //   margin-top: -40px;

  //   .name {
  //     color: #fff;
  //     margin-bottom: 10px;
  //     text-shadow: 0 0 2px #333;
  //   }

  //   .content {
  //     background-color: #c8a063;
  //     color: #fff;
  //     width: 90vw;
  //     margin: 0 auto;
  //     padding-top: 20px;
  //   }

  //   .title {
  //     width: 210px;
  //     height: auto;
  //     font-size: 26px;
  //     color: #fff;
  //     margin-bottom: 5px;
  //   }

  //   .desc {
  //     width: 210px;
  //     height: auto;
  //     font-size: 14px;
  //     color: #fff;
  //     text-align: justify;
  //     padding-bottom: 15px;
  //   }
  // }
}
</style>

<script>
import slider from "@/mixins/slider.js";
import { isMobile } from "@/utils";
export default {
  name: "section8",
  mixins: [slider],

  data() {
    return {
      slideList: [
        {
          src: require("./s8_img_1.jpg"),
          srcHasTitle: require("./s8_img_1_hasTitle.png"),
          name: "生態規劃顧問"
        },
        {
          src: require("./s8_img_2.jpg"),
          srcHasTitle: require("./s8_img_2_hasTitle.png"),
          name: "建築整合設計"
        },
        {
          src: require("./s8_img_3.jpg"),
          srcHasTitle: require("./s8_img_3_hasTitle.png"),
          name: "社區燈光設計"
        },
        {
          src: require("./s8_img_4.jpg"),
          srcHasTitle: require("./s8_img_4_hasTitle.png"),
          name: "水景觀設計"
        },
        {
          src: require("./s8_img_5.jpg"),
          srcHasTitle: require("./s8_img_5_hasTitle.png"),
          name: "會館建築與室內設計"
        }
      ],
      isMobile
    };
  },

  methods: {}
};
</script>
