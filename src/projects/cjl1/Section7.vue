<template>
  <div>
    <div class="section7 flex-ac">
      <div class="bg">
        <div class="ink-1 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200">
          <img src="./s2/ink1.png" alt="ink"></div>
        <div class="ink-2 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200">
          <img src="./s2/ink2.png" alt="ink"></div>
        <div class="ink-3 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200">
          <img src="./s2/ink1.png" alt="ink"></div>
        <div class="ink-4 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200">
          <img src="./s2/ink2.png" alt="ink"></div>
      </div>
      <div class="bg">
        <div class="leaf-4 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
          <img src="./s7/leaf (4).png" alt="leaf"></div>
        <div class="leaf-5 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
          <img src="./s7/leaf (5).png" alt="leaf"></div>
        <div class="leaf-6 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
          <img src="./s7/leaf (6).png" alt="leaf"></div>
      </div>
      <div class="container relative flex-c wrap">
        <div class="img-item" data-aos="fade-right" data-aos-delay="600" @click="isShowDialog = true">
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
      <div :class="`dialog ${isShowDialog ? 'show' : ''}`">
        <img src="./s7/map放大.png" alt="" class="dialog-content">
        <img src="@/projects/jh/s4/close.png" class="close" alt @click="isShowDialog = false" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}
.container {
  margin: auto;
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
  max-width: 94vh;
  margin-left: size(50);
  cursor: pointer;
  img {
    width: 100%;
  }
}

.ink-1 {
  width: size(767);
  top: calc(50% - 42vw);
  left: size(463);
  img {
    width: 100%;
    transform: scaleX(-1);
    opacity: 0.15;
  }
}

.ink-2 {
  width: size(750);
  top: calc(50% + 10vw);
  right: size(-400);
  img {
    width: 100%;
    transform: rotate(-15deg) scaleX(-1);
    opacity: 0.5;
  }
}
.ink-3 {
  width: size(767);
  top: calc(50% + 10vw);
  left: calc(50% - 20vw);
  img {
    width: 100%;
    transform: rotate(90deg) scaleX(-1);
    opacity: 0.17;
  }
}
.ink-4 {
  width: size(800);
  top: calc(50% + 17vw);
  right: size(-550);
  img {
    width: 100%;
    transform: rotate(90deg) scaleX(-1);
    opacity: 0.7;
  }
}

.leaf-4 {
  width: size(463);
  top: size(-200);
  left: size(0);
  img {
    width: 100%;
    animation: leaf 3s ease-in-out infinite alternate;
    transform: skewY(5deg);
    transform-origin: 0% 50%;
  }
}

.leaf-5 {
  width: size(440);
  top: size(-150);
  right: size(0);
  img {
    width: 100%;
    animation: leaf 3s ease-in-out infinite alternate;
    transform: skewY(5deg);
    transform-origin: 100% 50%;
  }
}

.leaf-6 {
  width: size(165);
  top: size(200);
  right: size(0);
  img {
    width: 100%;
    animation: leaf 4s ease-in-out infinite alternate;
    transform: skewX(-5deg);
    transform-origin: 100% 90%;
  }
}

.opacity-3-bg {
  opacity: 0.3;
}

.opacity-5-bg {
  opacity: 0.5;
}

.dialog {
  display: none;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 120;

  .dialog-content {
    height: 95vh;
    width: auto;
  }

  &.show {
    display: flex;
  }

  .close {
    position: absolute;
    width: 40px;
    right: 20px;
    top: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
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
    height: sizem(384 + 491);
    min-height: sizem(500);
    max-height: sizem(812);
    //background-image: url('./mo/1/00.jpg');
    background-size: cover;
    background-attachment: scroll;
  }

  .text-item {
    width: sizem(310);
    margin-right: auto;
    margin: 30px auto;
    > * {
      width: sizem(310);
    }
    .hr {
      width: sizem(288);
      display: inline-block;
      margin: 15px auto;
    }

    .title {
      font-size: sizem(25);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.44;
      letter-spacing: sizem(3.5);
      text-align: center;
      color: #2e627f;
      white-space: nowrap;
    }

    .desc {
      width: sizem(310);
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.73;
      letter-spacing: sizem(1.2);
      text-align: left;
      color: #2e627f;
    }
  }
  .ink-1 {
    width: sizem(350);
    top: sizem(153);
    bottom: auto;
    left: sizem(-100);
  }
  .ink-2 {
    width: sizem(350);
    right: sizem(-250);
  }
  .ink-3 {
    width: sizem(350);
    top: sizem(153);
    bottom: auto;
    left: sizem(-100);
  }
  .leaf-5 {
    top: sizem(300);
  }
  .leaf-6 {
    width: sizem(61);
    top: sizem(350);
  }
  .img-item {
    width: sizem(375);
    margin-left: 0;
    img {
      width: 100%;
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
      isShowDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
