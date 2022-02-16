<template>
  <div>
    <div class="section3">
      <img src="./s3/bg.jpg" alt="map" class="bg-img" v-if="!isMobile">
      <div class="txt">
      <h3 class="title" data-aos="fade-right" data-aos-delay="400">
        城市與河岸最舒適的距離
      </h3>
      <div class="desc" data-aos="fade-right" data-aos-delay="600">
        八里，擁有宜居環境，左右更續接了雙北生活圈，交通便利，透過快速道路、關渡大橋淡江大橋連接了新市鎮生活圈64號道路連接一高、二高、濱海公路至桃園國際機場。在這有著深度的文化蘊藏，十三行博物館、左岸公園、左岸劇場，相佐水岸綠道，如此舒心閑適的居所，就只有「八里 龍躍」
      </div>
      <div class="img" v-if="isMobile" @click="showDialog"><img src="./m/3/bg.jpg" alt="map">點圖放大</div>
      </div>
      <div :class="`dialog ${isDialog ? 'show' : ''}`">
        <img :src="isMobile ? require('./m/3/bg.jpg') : require('./s3/bg.jpg')" alt="bg" class="dialog-img" />
        <img src="~@/assets/img/close.png" alt="close" class="close" @click="closeDialog" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.cls-1 {
  fill: none;
  stroke: #666;
  stroke-miterlimit: 10;
  stroke-width: 2.01px;
  width: size(827);
  height: size(157);
  left: size(0);
  top: calc(50% + 14vw);
  animation: letterDraw1 0.5s linear 1s forwards;
  stroke-dasharray: 1536;
  stroke-dashoffset: 1536;
}
@keyframes letterDraw1 {
  to {
    stroke-dashoffset: 0;
  }
}
.section3 {
  width:100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
  cursor: pointer;

  &:nth-child(1) {
    position: relative;
  }
}

.subtitle {
  top: size(93);
  right: auto;
  left: size(138);
  font-size: size(67.2);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: -0.04em;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  font-family: 'TrajanPro';
  position: absolute;
}

.title {
  width: size(640);
  top: calc(50% + 9vw);
  left: size(150);
  font-size: size(55.2);
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: size(3.3);
  text-align: left;
  color: #231815;
  white-space: nowrap;
  position: absolute;
}

.desc {
  width: size(640);
  top: calc(50% + 15vw);
  left: size(153);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: 0.06em;
  text-align: justify;
  color: #595757;
  position: absolute;
}

.dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s;
  display: none;
  overflow: scroll;

  &.show {
    display: block;
    z-index: 210;
    opacity: 1;
  }

  .dialog-img {
    width: 2304px;
    height: auto;
  }

  .close {
    position: fixed;
    cursor: pointer;
    right: 35px;
    top: 25px;
    width: 40px;
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
  .section3{
    width: 100vw;
    min-height: sizem(0);
    max-height: sizem(1000);
    height: auto;
    background: #fff;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    position: relative;
  }
  .txt{width:sizem(310);margin:sizem(25) auto sizem(40) auto;}

  .subtitle {
    width: 100%;
    top:0;
    left:0;
    font-size: sizem(22);
    color: #808080;
    position: relative;
  }

  .title {
    width: 100%;
    top:0;
    left:0;
    font-size: sizem(25);
  color: #c20000;
    position: relative;
  }

  .img {
    width: sizem(340);
    left: 0;
    margin: sizem(35) sizem(-15) 0;
    top: sizem(299);
    text-align: center;
    img{width: 100%;}
  }

  .desc {
    width: 100%;
    top:0;
    left:0;
    font-size: sizem(15);
    color: #595757;
    position: relative;
    margin: 0.5em 0 0 0;
  }

  .hr {
    width: 100%;
    top:0;
    left:0;
    height: 1px;
    margin: sizem(13) auto ;
    background-color: #595757;
  }

  .dialog {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s;
    display: none;
    overflow: scroll;

    &.show {
      display: block;
      z-index: 210;
      opacity: 1;
    }

    .dialog-img {
      width: 1500px;
      height: auto;
    }

    .close {
      position: fixed;
      cursor: pointer;
      right: 35px;
      top: 25px;
      width: 40px;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
// import Map from '@/components/Map.vue'

export default {
  name: 'section3',

  // components: {
  //   Map,
  // },
  props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {
    showDialog() {
      this.isDialog = true
    },
    closeDialog() {
      this.isDialog = false
    },
  },

  created() {},

  mounted() {},

  computed: {},
}
</script>
