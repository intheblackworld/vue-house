<template>
  <div class="section4">
    <picture>
      <source srcset="./webp/s4/sty_1.webp" type="image/webp" />
      <source srcset="./pc/s4/sty_1.png" type="image/jpeg" />
      <img src="./pc/s4/sty_1.png" :alt="`${info.caseName}`" class="sty_1">
    </picture>
    <picture>
      <source srcset="./webp/s4/map.webp" type="image/webp" />
      <source srcset="./pc/s4/map.png" type="image/jpeg" />
      <img src="./pc/s4/map.png" :alt="`${info.caseName}`" class="map" v-if="isPC">
    </picture>
    <!-- <picture>
      <source srcset="./webp/s2/sty_2.webp" type="image/webp" />
      <source srcset="./pc/s2/sty_2.jpg" type="image/jpeg" />
      <img src="./pc/s2/sty_2.jpg" :alt="`${info.caseName}`" class="sty_2" data-aos="fade" data-aos-delay="800">
    </picture> -->
    <div class="btn-title flex-c" data-aos="fade" data-aos-delay="200">
      完美生活一次收藏
    </div>

    <div class="border"  data-aos="fade-right" data-aos-delay="400" v-if="isPC"></div>

    <h3 class="desc"  data-aos="fade" data-aos-delay="600">
      雙語名校薇閣高中「明星學區生活圈」，新北投捷運站一下就到，更鄰近聞名世界的綠建築北投圖書館，散步近享磺港溪親水美地溫泉美湯，綠蔭文風隨手可得。
    </h3>
    <Map :bgSrc="bgSrc" :hand="hand" v-if="isMobile">
    </Map>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section4 {
  width: 100%;
  height: size(1080);
  min-height: size(1080);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  background-color: #fff;

  @include md {
    width: 100vw;
    height: sizem(261 + 448);
    min-height: auto;
    max-height: initial;
    overflow: visible;
  }
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
  // opacity: 0.5;
}

.border {
  @include div_l(376, 100, 698, 104, 333, 89, 216, 12);
  border-left: 2px solid #00422d;
  border-bottom: 2px solid #00422d;
}

.desc {
  @include div_r(400, 880, 119, 227, 315, 200, 87, 30);
  font-size: size(30);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.77;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  writing-mode: vertical-rl;
  text-orientation: upright;

  @include md {
    font-size: sizem(14);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.07;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    writing-mode: horizontal-tb;;
    text-orientation: mixed;
  }
}

@keyframes leaf {
  to {
    transform: skew(0) rotate(0deg);
  }
}

.sty_1 {
  @include img_l(250, -150, -100, 139, -20, 0);
  transform: skewY(-3deg);
  transform-origin: 100% 100%;
  animation: leaf 5s ease-in-out alternate infinite;
  @include md {
    display: none;
  }
}

.btn-title {
  @include div_r(83, 552, 119, 104, 276, 41.5, 40, 57.5);
  background-image: url('./pc/s4/title_bg.jpg');
  background-size: 100% 100%;

  font-size: size(60);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.6);
  text-align: left;
  color: #ffd58c;
  white-space: nowrap;
  writing-mode: vertical-rl;
  text-orientation: upright;

  @include md {
    background-image: url('./m/s4/title_bg.jpg');
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.88;
    letter-spacing: sizem(1.5);
    text-align: left;
    color: #ffd58c;
    writing-mode: horizontal-tb;;
    text-orientation: mixed;
  }
}

.map {
  @include img_r_pc(1447, 0, 431);
  @include md {
    @include div_r_m(375, 482, 195, 0);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import Map from '@/components/Map.vue'

export default {
  name: 'section4',

  components: {
    Map,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      bgSrc: require('./pc/s4/map.png'),
      hand: require('./m/s4/hand.png')
    }
  },
  methods: {
  },

  created() {},

  mounted() {},

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
