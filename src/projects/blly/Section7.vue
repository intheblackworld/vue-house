<template>
  <div>
    <div class="section7">
      <img src="./s3/bg.jpg" alt="map" class="bg-img" v-if="!isMobile">
      <div class="txt">
      <h3 class="title" data-aos="fade-right" data-aos-delay="400">
        飛躍中的八里
      </h3>
      <h3 class="subtitle" data-aos="fade-right" data-aos-delay="400">
        今日八里已成交通重鎮今非昔比
      </h3>
      <ul class="desc" data-aos="fade-right" data-aos-delay="600">
        <li>視野景觀台灣第一、世界有比</li>
        <li>大台北盆地外空氣清新可以深呼吸的地方</li>
        <li>工作、生活、運動、修身在龍躍可同步完成</li>
        <li>大台北世外桃源、目前觀光人口不輸巴黎、峇里</li>
        <li>全球景區至市區皆有一段距離唯八里龍躍離市區近在咫呎</li>
      </ul>
      </div>
      <div class="img" v-if="isMobile" @click="showDialog">點圖放大<img src="./m/3/bg.jpg" alt="map"></div>
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
.section7 {
  width:100%;
  height: 100vh;
  min-height: size(1080);
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


  .txt{
  position: absolute;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #fff;
  text-align: justify;
  letter-spacing:0.06em;
  line-height: 1.7;
  top: size(50);
  left: size(120);
  width: size(640);
  text-shadow: 0 0 .3em #618cc9,0 0 1em #618cc9;}
.title {
  font-size: size(55.2);
  font-weight: 700;
 // line-height: 1.44;
}

.subtitle {
  font-size: size(30);
  white-space: nowrap;
  margin: 0em 0 0.5em;
}
.desc {
  font-size: size(19);
  list-style: disc;
  margin: 0 0 0 1.2em;
  li{
  list-style: inherit;
  line-height: 1.4;
  margin: 0 0 0.5em;}
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
  .section7{
    width: 100vw;
    min-height: sizem(0);
    max-height: sizem(1000);
    height: auto;
    background: #618cc9;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    position: relative;

  }
  .txt{width:sizem(310);margin:0 auto sizem(40) auto;
  padding: sizem(25) 0 sizem(0) 0;
  position: relative;
  
  top:0;
  left: 0;
  }
  .title {
    font-size: sizem(25);
  }

  .subtitle {
    font-size: sizem(20);
  }
  .desc {
    font-size: sizem(14);
  }



  .img {
    width:100%;
    left: 0;
    margin: 0;
    top: sizem(299);
    text-align: center;
    color: #fff;
    img{width: 100%;}
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
  name: 'section7',

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
