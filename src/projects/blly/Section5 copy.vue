<template>
  <div>
    <div class="section5">
      <img src="./s5/bg.jpg" alt="" class="bg-img" v-if="isPC">
      <img src="./m/5/bg.jpg" alt="" class="bg-img" v-if="isMobile">
      <img src="./s5/cloud2.png" alt="" class="cloud cloud1 absolute">
      <img src="./s5/cloud1.png" alt="" class="cloud cloud2 absolute">
      <img src="./s5/cloud1.png" alt="" class="cloud cloud3 absolute">
      <img src="./s5/img.png" alt="" class="bg-img" v-if="isPC">
      <img src="./m/5/img.png" alt="" class="img absolute" v-if="isMobile">
      <div class="hr absolute" v-if="isMobile" />
      <h3 class="title absolute" data-aos="fade-right" data-aos-delay="400">Natural Baptism</h3>
      <svg  v-if="!isMobile && viewIndex == 5"  xmlns="http://www.w3.org/2000/svg" class="cls-1 absolute" viewBox="-329 -217 2304 1080" preserveAspectRatio="xMidYMid slice"><polyline class="cls-11" points="81.05 499.06 1.5 499.06 1.5 1.5 261.62 1.5"/><polyline class="cls-12" points="610.71 1.5 1649.31 1.5 1649.31 499.06 791.28 499.06"/></svg>
      <h3 class="subtitle absolute" data-aos="fade-right" data-aos-delay="600">山水之中 尋回第二人生</h3>
      <div class="desc absolute" data-aos="fade-right" data-aos-delay="800">前擁海河壯闊，後倚青山翠毓，「八里 龍躍」如同一座獨立的綠色島嶼，在人生最美麗的轉彎，實現對生活的純粹，給您一間無價景觀的書房，給您一間會呼吸的屋子，用心生活、大口呼吸，在這的每一天都是享受。
      </div>
      <div class="desc2 absolute" data-aos="fade-right" data-aos-delay="800">
        現場完工實景
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.cls-1{fill:none;stroke:#FFF;stroke-miterlimit:10;stroke-width:2.01px;
width:100%;
  height:100%;
  left:size(0);
  top:0;
}
.cls-11{
  animation: letterDraw1 .84s linear 1s forwards;
  stroke-dasharray: 840;
  stroke-dashoffset: 840;
}
.cls-12{
  animation: letterDraw1 2.4s linear 1.84s forwards;
  stroke-dasharray: 2400;
  stroke-dashoffset: 2400;
}
@keyframes letterDraw1 {
    to {
        stroke-dashoffset: 0
    }
}
.section5 {
  width:100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}
.title {
  width: auto;
  top:8.5%;
  left:51%;
  font-size: size(67.2);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing:-0.04em;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  font-family: "TrajanPro";
}

.subtitle {
  width: size(598);
  top:calc(36% - 2.5vw);
  left:51%;
  font-size: size(55.1);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: size(3.31);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  width: size(606);
  top:calc(36% + 2.5vw);
  left:51%;
  font-size: size(19.1);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing:0.06em;
  text-align: justify;
  color: #ffffff;
}
.desc2 {
  width:calc(100% - 140vh);
  max-width: 36vw;
  min-width: 21vw;
  top: calc(63% + 2vw);
  right:0%;
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing:0.06em;
  color: #ffffff;
}

.cloud1 {
  width: size(320);
  top: size(600);
  left: size(150);
  animation: scale 20s -10s linear infinite;
    opacity:1;
    transform:translate(0% ,0%) scale(0, 0);
}

.cloud2 {
  width: size(501);
  top: size(734);
  left: size(250);
  animation: scale 50s -25s linear infinite;
    opacity:1;
    transform:translate(0% ,0%) scale(0, 0);
}

.cloud3 {
  width: size(365);
  top: size(692);
  left: size(900);
  animation: scale 40s -30s linear infinite;
    opacity: 1;
    transform:translate(0% ,0%) scale(0, 0);
}


@keyframes scale {
  to {
    transform:translate(-200% ,-300%) scale(3, 5);
    opacity:0;
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
  .section5 {
    width: 100vw;
    min-height:sizem(590);
    max-height:sizem(812);
    height:calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .img {
    width: 100vw;
    height: auto;
    bottom: 0;
    left: 0;
  }

  .title {
    width:auto;
    top: sizem(80 - 55);
    right: auto;
    left: sizem(32.5);
    font-size: sizem(22);
  }
  .subtitle {
    width:auto;
    top: sizem(120 - 55);
    right: auto;
    left: sizem(32.5);
    font-size: sizem(25);
  }


  .desc {
    width: sizem(291);
    top: sizem(130);
    left: sizem(32.5);
    font-size: sizem(15);
  }
.desc2 {
  width:auto;
  max-width:100%;
  min-width:0;
  top:auto;
  left:auto;
  bottom:0.5em;
  right:5%;
  font-size: sizem(12);
  opacity: 0.8;
}


  .hr {
    width: sizem(291);
    height: 1px;
    background-color: #fff;
    top: sizem(115);
    right: auto;
    left: sizem(32.5);
  }

  .cloud1 {
    width: sizem(84);
    top: sizem(294);
    left: 0;
  }

  .cloud2 {
    width: sizem(144);
    top: sizem(410);
    left: sizem(14);
  }

  .cloud3 {
    width: sizem(104);
    top: sizem(397);
    left: sizem(211);
  }

  .cloud {
    animation: none;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section5',
  props: ['viewIndex'],
  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
