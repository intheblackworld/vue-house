<template>
  <div>
    <div class="section7 flex-ac">
      <div class="opacity-3-bg">
        <img src="./s2/ink1.png" alt="" class="ink-1 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200">
        <!-- <img src="./s2/ink1.png" alt="" class="ink-2 absolute" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="1200"> -->
        <img src="./s2/ink2.png" alt="" class="ink-3 absolute" data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="1200">
      </div>
      <div class="opacity-5-bg">
        <img src="./s7/leaf (4).png" alt="" class="leaf-4 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
        <img src="./s7/leaf (5).png" alt="" class="leaf-5 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
        <img src="./s7/leaf (6).png" alt="" class="leaf-6 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
      </div>
      <div class="container relative flex-c">
        <div class="img-item" data-aos="fade-right" data-aos-delay="600">
          <img src="./s7/map.png" alt="">
        </div>
        <div class="text-item flex-ac wrap">
          <div class="title" data-aos="fade-left" data-aos-delay="600">
            南台南心都心<br />黃金生活圈
          </div>
          <div class="hr" data-aos="fade-left" data-aos-delay="700"></div>
          <div class="desc" data-aos="fade-left" data-aos-delay="800">
            「南台南站新都心」地區，因鐵路地下化所增設之南台南車站，巴克禮公園將已擴建5.6公頃；台南重大建設持續推動，東區商圈發展成熟，加上南紡購物中心二期、文化中心、德安百貨、 台南國際機場、長榮桂冠酒店 、崇明中小學區、 仁和國小、國立科學教育體驗未來館、台南市立醫院等利基發展條件及台糖公司亦根留府城並積極推動轉型與升級。在上述主力設施與機構進駐後，加速帶動地區發展，奠定「南台南新都心」穩健成長之基石。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: size(1920);
  min-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}

.bg-img {
  width: size(1920);
  height: 100vh;
  min-height: 900px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.text-item {
  width: size(471);
  margin-left: size(77);
  > * {
    width: size(471);
  }

  .desc {
    width: size(471);
    margin: 0 auto;
  }
  .hr {
    width: size(386);
    display: inline-block;
    margin: 15px auto;
    border: solid 2px #08607f;
  }

  .title {
    font-size: size(59.1);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(8.28);
    text-align: center;
    color: #2e627f;
    white-space: nowrap;
  }

  .desc {
    font-size: size(25);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: size(2);
    text-align: left;
    color: #2e627f;
  }
}

.img-item {
  width: size(1082);
  margin-left: size(50);
  img {
    width: 100%;
  }
}

.ink-1 {
  height: size(1693);
  top: size(-500);
  left: size(-800);
}

.ink-2 {
  height: size(1581);
  top: size(872);
  left: size(-600);
}

.ink-3 {
  height: size(1720);
  top: size(1064);
  left: size(564);
}

.leaf-4 {
  width: size(463);
  top: size(-200);
  left: size(0);
  animation: leaf 3s ease-in-out infinite alternate-reverse;
}

.leaf-5 {
  width: size(440);
  top: size(-150);
  right: size(0);
  animation: leaf 3s ease-in-out infinite alternate-reverse;
}

.leaf-6 {
  width: size(165);
  top: size(200);
  right: size(0);
  animation: leaf 3s ease-in-out infinite alternate-reverse;
}

.opacity-3-bg {
  opacity: 0.3;
}

.opacity-5-bg {
  opacity: 0.5;
}

@keyframes leaf {
  to {
    transform: skewX(2deg) translateX(0px);
  }
}
@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section7 {
    width: 100vw;
    min-height: auto;
    height: sizem(604 + 329);
    //background-image: url('./mo/1/00.jpg');
    background-size: cover;
    background-attachment: scroll;
  }

  .bottom-img {
    width: 100vw;
    height: auto;
    left: 0;
    top: sizem(0);
    //  bottom: sizem(329);
    object-fit: cover;
    z-index: 2;
  }

  .logo {
    width: sizem(280);
    top: sizem(29);
    right: auto;
    left: sizem(18);
    height: auto;
    object-fit: cover;
  }

  .logo2 {
    width: sizem(63);
    top: sizem(101);
    right: sizem(28);
    height: auto;
    object-fit: cover;
    z-index: 2;
  }

  .txt {
    width: sizem(312);
    top: sizem(205);
    right: sizem(0);
    height: auto;
    object-fit: cover;
  }

  .border {
    width: sizem(347);
    height: sizem(276);
    top: sizem(115);
    right: sizem(14);
    border-width: sizem(6);
    font-size: sizem(15);
    padding: 1.1em 0 0 2em;
  }

  .block {
    width: sizem(48);
    height: sizem(215);
    max-height: initial;
    top: sizem(-30);
    right: sizem(-20);
    left: auto;
    bottom: auto;
  }

  .item-list {
    top: sizem(600);
    left: sizem(44);

    .item {
      width: sizem(17);
      margin-right: sizem(35);
      // display: flex;
      // align-items: center;
      // justify-content: center;
      // flex-wrap: wrap;
      .item-hr {
        width: 1.5px;
        height: sizem(67);
        background-color: #8e8a74;
        margin: 0 auto;
        margin-bottom: 15px;
      }
      &:nth-child(1) {
        margin-top: 0;
      }
      &:nth-child(2) {
        margin-top: sizem(13);
        .item-hr {
          height: sizem(111);
        }
      }

      &:nth-child(3) {
        margin-top: sizem(30);
        .item-hr {
          height: sizem(65);
        }
      }
      &:nth-child(4) {
        margin-top: sizem(17);
        .item-hr {
          height: sizem(69);
        }
      }

      &:nth-child(5) {
        margin-top: sizem(20);
        .item-hr {
          height: sizem(58);
        }
      }

      &:nth-child(6) {
        margin-top: sizem(5);
        .item-hr {
          height: sizem(68);
        }
      }
    }
    .item-title,
    .item-desc {
      writing-mode: vertical-lr;
      text-orientation: upright;
      // display: inline-block;
      // margin: auto;
    }

    .item-title {
      font-size: sizem(12);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.08;
      letter-spacing: normal;
      text-align: center;
      color: #8e8a74;
      margin-bottom: sizem(10);
      margin-left: sizem(2.5);
    }

    .item-desc {
      font-size: sizem(17);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.08;
      letter-spacing: normal;
      text-align: center;
      color: #8e8a74;
      margin-bottom: sizem(10);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { icPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section7',

  data() {
    return {
      icPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
