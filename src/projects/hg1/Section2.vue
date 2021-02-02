<template>
  <div class="section2">
    <div class="animate-slide" v-if="!isMobile">
      <img src="./s2/漂浮物件_分層/2_class_1.png" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="4">
    </div>
    <!-- <div class="animate-slide" v-if="isMobile">
      <img src="./mo/s2/漂浮物件_分層/m_2_class_1.png" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="4">
    </div> -->
    <img src="./s2/2_bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
    <h1 class="title">
      桃園新都心
    </h1>
    <h1 class="subtitle" v-if="isMobile">
      LOCATION
    </h1>
    <Map :tagList="tagList" :bgSrc="bgSrc" :hand="hand" v-if="isMobile">
      <!-- <div class="text">
        <div class="title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">國際線上 雙北暢遊</div>
        <hr data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" />
        <div
          class="desc"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1500"
        >International Flight</div>
      </div> -->
    </Map>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: 100vh;
  min-height: size(1080);
  max-height: size(1080);
  background: none;
  background-size: auto;
  background-attachment: fixed;
  // overflow: hidden;
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
  margin-top: 0;
  &:nth-child(1) {
    position: relative;
  }
}

.title {
  @include img_r_pc(444, 727, 173);
  text-shadow: 3px 3px 5px rgba(4, 0, 0, 0.75);
  // font-family: DFHeiStd-W3;
  font-size: size(82.1);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(8.45);
  text-align: right;
  color: #ffffff;
  white-space: nowrap;
}

.animate-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  transition: all 0.5s;
  > img {
    @for $i from 1 through 10 {
      $randomNum: random(4) + 3;
      &:nth-child(#{$i}) {
        transform: translateY((random(10) - 50) + px);
        animation: an ($randomNum + s) 3s infinite alternate;
      }
    }
  }

  .pc1 {
    @include img_r_pc(333, 687, -60);
    z-index: 1;
  }
}

@keyframes an {
  to {
    transform: translateY(0);
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
  .section2 {
    width: 100vw;
    min-height: sizem(427);
    max-height: sizem(812);
    height: sizem(427);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .bg-img {
    width: sizem(375);
    height: 100%;
    min-height: sizem(667);
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .title {
    @include img_c_m(296, 340);
    text-shadow: 3px 3px 5px rgba(4, 0, 0, 0.75);
    font-size: sizem(23);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: sizem(2.37);
    text-align: right;
    color: #ffffff;
    z-index: 10;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(296, 360);
    font-size: sizem(54);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: sizem(4.48);
    text-align: center;
    z-index: 10;
    color: #ffffff;
  }

  .animate-slide {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s;
    > img {
      @for $i from 1 through 10 {
        $randomNum: random(4) + 3;
        &:nth-child(#{$i}) {
          transform: translateY((random(10) - 50) + px);
          animation: an ($randomNum + s) 3s infinite alternate;
        }
      }
    }

    .mo1 {
      @include img_c_m(405, 80);
    }

    .mo2 {
      @include img_c_m(375, -20);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import Map from '@/components/Map.vue'
import info from '@/info'

export default {
  name: 'section2',

  components: {
    Map,
  },

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      tagList: [],
      bgSrc: require('./mo/s2/2_bg_m.jpg'),
      hand: require('./mo/s2/m_2_mobile_hand.png'),
    }
  },

  methods: {},

  mounted() {},
  created() {},

  computed: {},
}
</script>
