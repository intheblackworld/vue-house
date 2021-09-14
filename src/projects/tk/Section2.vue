<template>
  <div class="section2">
    <img src="./s2/map.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
    <img src="./s2/logo.png" :alt="`${info.caseName}_bg`" class="logo" data-aos="fade-down" data-aos-delay="200" v-if="isPC">
    <h1 class="title" data-aos="fade-down" data-aos-delay="400">
      前呼亞洲新灣區<br />後擁新高雄車站
    </h1>
    <h3 class="subtitle" data-aos="fade-down" data-aos-delay="600" v-if="isPC">
      【達麗東京】正處高雄兩大重要建設核心位置！<br />
      「亞洲新灣區×新高雄車站」如火如荼開展城市新貌！<br />
      港務、交通、商業、文創、景觀，助您發展、機能到位！
    </h3>
    <h3 class="subtitle" data-aos="fade-down" data-aos-delay="600" v-if="isMobile">
      【達麗東京】正處高雄兩大重要建設核心位置！「亞洲新灣區×新高雄車站」如火如荼開展城市新貌！港務、交通、商業、文創、景觀，助您發展、機能到位！
    </h3>
    <Map :tagList="tagList" :bgSrc="bgSrc" :hand="hand" v-if="isMobile"></Map>
    <div class="mask" @click="showMask = false" v-show="showMask"></div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background: none;
  background-size: auto;
  background-attachment: fixed;
  // overflow: hidden;
  background-color: #fff;
  position: relative;
}

.bg-img {
  width: size(1920);
  height: size(1080);
  // border-top: 1px solid red;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  // object-fit: cover;
  // margin-top: 0;
}

.title {
  @include img_r_pc(298, 141, 312);
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.7);
  font-size: size(40);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: size(3);
  text-align: center;
  color: #c8a064;
  white-space: nowrap;
}

.subtitle {
  @include img_r_pc(543, 323, 66);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: size(1);
  text-align: left;
  color: #3e2855;
  white-space: nowrap;
}

.logo {
  @include img_r_pc(77, 47, 758);
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
    min-height: sizem(812);
    max-height: sizem(812);
    height: sizem(812);
    background-color: #002d87;
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

  .map {
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .title {
    @include img_l_m(186, 30, 33);
    text-shadow: 3px 3px 5px rgba(4, 0, 0, 0.75);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(1.88);
    text-align: center;
    color: #c8a064;
    z-index: 10;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(310, 125);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(0.75);
    text-align: left;
    color: #fff;
    white-space: normal;
    z-index: 2;
  }

  .mask {
    width: 100vw;
    height: 100%;
    position: absolute;
    top: size-m(0);
    left: 0;
    z-index: 1;
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

  .title-img {
    @include img_c_m(324, 33);
    z-index: 10;
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
      bgSrc: require('./s2/map.jpg'),
      hand: require('./s2/h.png'),
    }
  },

  methods: {},

  mounted() {},
  created() {},

  computed: {},
}
</script>
