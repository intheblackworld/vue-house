<template>
  <div>
    <div class="section8">
      <div class="bg">
        <div class="ink-1 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200">
          <img src="./s2/ink2.png" alt="ink"></div>
          <div class="ink-2 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200">
          <img src="./s2/ink2.png" alt="ink"></div>
        <div class="ink-3 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200">
          <img src="./s2/ink1.png" alt="ink"></div>
          <div class="ink-4 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200">
          <img src="./s2/ink1.png" alt="ink"></div>
      </div>
      <div class="bg">
        <div class="leaf-7 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
        <img src="./s8/leaf (7).png" alt=""></div>
        <div class="leaf-8 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
        <img src="./s8/leaf (8).png" alt=""></div>
        <div class="leaf-9 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
        <img src="./s9/leaf (9).png" alt=""></div>
      </div>
      <div class="block absolute flex-c">
        <ul class="content flex-jb wrap absolute">
          <li>2019/台南-上揚國寶/透天46戶</li>
          <li>2020/高雄-清景麟．白易居/大樓</li>
          <li>2020/台南-清景麟．巴克禮/大樓338戶</li>
          <li>2020/高雄-清景麟．名人坊/透天9戶</li>
          <li>2020/台南-清景麟．公園墅/透天92戶</li>
          <li>2021/台南-東區新都心段案</li>
        </ul>
      </div>
      <img src="./mo/8/bg.png" alt="" class="img" data-aos="fade" data-aos-delay="600" v-if="isMobile">
      <div class="title absolute" data-aos="zoom-in" data-aos-delay="400">
        清景麟提早佈局、放眼未來
      </div>
      <div class="subtitle absolute" data-aos="zoom-in" data-aos-delay="600">
        立足高雄、深耕臺南、進軍臺中
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width:100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
}

.title {
  width: size(1083);
  height: size(129);
  padding-top: size(20);
  top:calc(50% - 15vw);
  right: 0;
  left: 0;
  margin: 0 auto;
  background-image: url('./s8/title.png');
  background-size: cover;
  font-size: size(68.3);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(10.93);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  width: size(842);
  top:calc(50% - 7vw);
  right: size(403);
  font-size: size(53.3);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(7.46);
  text-align: center;
  color: #08607f;
  white-space: nowrap;
}

.img {
  width: 100vw;
  // height: 100vh;
  // min-height: size(900);
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
  }
}

.block {
  width: 100vw;
  height: size(390);
  background: #38a9b3 url("./s8/bg.png") fixed center center ;
  background-size: 100% auto;
  overflow: hidden;
  top:calc(50% - 0vw);
  left: 0;
}

.content {
  width: size(1490);
  left: 0;
  right: 0;
  margin: 0 auto;
  li {
    width: 50%;
    font-size: size(34);
    font-weight:500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: size(4.9);
    text-align: left;
    margin-top: size(30);
    margin-bottom: size(30);
    color: #ffffff;
    white-space: nowrap;
    &::before{content: "";display: inline-block;width: 0.3em;height: 1.2em;background: currentColor;margin: 0 0.5em -.2em 0;}
  }
}

.ink-1 {
  width: size(767);
  top:calc(50% - 20vw);
  left: size(-420);
  img{width: 100%;transform: scaleX(-1); opacity:0.5;}
}

.ink-2 {
  width: size(1000);
  top:calc(50% - 15vw);
  left: size(-420);
  img{width: 100%;transform:rotate(170deg) scaleX(-1); opacity:0.5;}
}
.ink-3 {
  width: size(900);
  top:calc(50% - 13vw);
  right: size(-480);
  img{width: 100%;transform: scaleX(1);opacity: 0.3;}
}
.ink-4 {
  width: size(900);
  top:calc(50% - 17vw);
  right: size(-500);
  img{width: 100%;transform:rotate(90deg)scaleX(1);opacity: 0.5;}
}
.leaf-7 {
  width: size(394);
  top: size(0);
  right: size(0);
  img{width: 100%;
  animation: leaf 3s -1s ease-in-out infinite alternate-reverse;
  transform: skewY(5deg);
  transform-origin:100% 50%;}
}

.leaf-8 {
  width: size(349);
  top: size(0);
  left: size(0);
  img{width: 100%;
  animation: leaf 3s ease-in-out infinite alternate;
  transform: skewY(5deg);
  transform-origin:0% 50%;}
}
.leaf-9 {
  width: 100vw;
  top:calc(50% + 20.2vw);
  left: size(0);
  img{width: 100%;
  animation: leaf 3s ease-in-out infinite alternate;
  transform: skewX(10deg);
  transform-origin:50% 0%;}
}

.opacity-3-bg {
  opacity: 0.3;
}

.opacity-5-bg {
  opacity: 0.5;
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
  .section8 {
    width: 100vw;
    height: sizem(340 + 45 + 84);
  min-height: sizem(500);
  max-height: sizem(812);
    min-height: auto;
  }

  .title {
    width: sizem(340);
    height: sizem(84);
    padding-top: sizem(10);
    top: sizem(0);
    right: 0;
    left: 0;
    margin: 0 auto;
    background-image: url('./s6/title.png');
    background-size: 100% 100%;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }

  .subtitle {
    width: sizem(310);
    height: auto;
    top: sizem(70);
    right: 0;
    left: 0;
    margin: 0 auto;
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.2;
    letter-spacing: sizem(2.8);
    text-align: center;
    color: #000000;
  }

  .img {
    width: 100vw;
    // height: 100vh;
    // min-height: size(900);
    bottom: 0;
    display: block;
    top: auto;
    left: 0;
    object-fit: cover;
    position: absolute;
  }

  .block {
    width: 100vw;
    height: sizem(340);
    background: #38a9b3;
    overflow: hidden;
    top: sizem(130);
    left: 0;
  }

  .content {
    width: sizem(340);
    left: 0;
    right: 0;
    margin: 0 auto;
    margin-top: sizem(-50);
    li {
      width: 100%;
      font-size: 15px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.73;
      letter-spacing: 1.35px;
      text-align: left;
      color: #ffffff;
      margin-top: sizem(8);
      margin-bottom: sizem(8);
      color: #ffffff;
      white-space: nowrap;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section8',

  components: {},

  data() {
    return {
      isMobile,
      isTablet,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  watch: {},

  computed: {},
}
</script>
