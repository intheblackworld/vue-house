<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        v-lazy="require('./s2/bg.jpg')"
        alt="聯上海棠"
        class="bg-img"
      >
      <h3 class="subtitle absolute" data-aos="fade" data-aos-delay="400">
        【傲然‧天生麗質】
      </h3>
      <h3 class="title absolute" data-aos="fade" data-aos-delay="600">
        傲視市政新灣區 開啟臺南生活新傳奇
      </h3>
      <h3 class="desc absolute" data-aos="fade" data-aos-delay="800">
        臺南的市政新灣區<br />
        不僅重大建設齊聚、知名建商更接連在此擁地、打造經典名宅<br />
        高樓層可遠眺綠海景觀，市政新灣區到底有多夯？
      </h3>
      <div class="flex animate-row">
        <img
          v-lazy="require('./s2/wave.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s2/wave.png')"
          alt="聯上海棠"
          class="wave"
        >
      </div>
      <div class="flex animate-row animate-row2">
        <img
          v-lazy="require('./s2/wave_l.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s2/wave_l.png')"
          alt="聯上海棠"
          class="wave"
        >
      </div>
    </div>
    <div v-if="isMobile">
      <Map
        :bgSrc="bgSrc"
        :hand="hand"
      ></Map>
      <h3 class="subtitle absolute" data-aos="fade" data-aos-delay="200">
        【傲然‧天生麗質】
      </h3>
      <h3 class="title absolute" data-aos="fade" data-aos-delay="400">
        傲視市政新灣區<br />開啟臺南生活新傳奇
      </h3>
      <h3 class="desc absolute" data-aos="fade" data-aos-delay="600">
        臺南的市政新灣區<br />
        不僅重大建設齊聚、知名建商更接連在此擁地、打造經典名宅<br />
        高樓層可遠眺綠海景觀，市政新灣區到底有多夯？
      </h3>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  position: relative;
  height: size(1014);
  margin: 0 0 0vw;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

 &:nth-child(1) {
  height: size(1080);
 }
}

.subtitle {
  font-size: size(21);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  transform: scaleX(0.93);
  top: size(69);
  left: 0;
  right: 0;
  margin: 0 auto;
}

.title {
  font-size: size(31);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: 1.49px;
  text-align: center;
  color: #ffffff;
  transform: scaleX(0.93);
  top: size(108);
  left: 0;
  right: 0;
  margin: 0 auto;
}

.desc {
  font-size: size(15);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  transform: scaleX(0.93);
  top: size(620);
  left: 0;
  right: 0;
  margin: 0 auto;
}
.animate-row {
  width: 200vw;
  animation: moving 30s linear infinite;
  position: absolute;
  bottom: size(-200);

  img {
    width: 100%;
    height: size(413);

    &:nth-child(2) {
      margin-left: -0.1%;
    }
  }

  &.animate-row2 {
    bottom: size(100);
    animation: moving 20s linear infinite;

    img {
      height: size(79);
    }
    // animation-delay: 5s;
  }
}

@keyframes moving {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0) scaleY(1);
  }
  50% {
    -webkit-transform: translateX(0);
    transform: translateX(-25%) scaleY(0.5);
  }

  to {
    -webkit-transform: translateX(-100vw);
    transform: translateX(-50%) scaleY(1);
  }
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    height: size-m(609);
    margin:14.4vw 0 0 0;
  }
.map{margin:14.4vw 0 0 0;}
  .subtitle {
    font-size: size-m(13);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    transform: scaleX(0.93);
    top: size-m(0);
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 10;
  }

  .title {
    font-size: size-m(24);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.79;
    letter-spacing: 1.15px;
    text-align: center;
    color: #ffffff;
    transform: scaleX(0.93);
    top: size-m(20);
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 10;
  }

  .desc {
    font-size: size-m(12);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    transform: scaleX(0.93);
    top: size-m(387);
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 10;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import Map from '@/components/Map.vue'
export default {
  name: 'section2',

  components: {
    Map,
  },
  data() {
    return {
      isMobile,
      bgSrc: require('./s2/bg.jpg'),
      hand: require('./mo/2/箭頭.png'),
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
