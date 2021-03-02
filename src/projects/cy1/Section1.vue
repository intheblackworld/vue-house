<template>
  <div class="section1">
    <img src="./s1/top_bg.jpg" :alt="`${info.caseName}_bg-img`" class="bg-img" v-if="isPC">
    <Map :bgSrc="require('./s1/top_bg_m.jpg')" :hand="hand" v-if="isMobile"></Map>
    <img src="./s1/top_logo.png" :alt="`${info.caseName}_logo`" class="logo" data-aos="fade-up" data-aos-delay="200">
    <img src="./s1/top_title_1.png" :alt="`${info.caseName}_title_1`" class="title-1" data-aos="fade-up" data-aos-delay="400">
    <img src="./s1/top_title_2.png" :alt="`${info.caseName}_title_2`" class="title-2" data-aos="fade-up" data-aos-delay="600">
    <img src="./s1/top_tree_single.png" :alt="`${info.caseName}_tree1`" class="tree1" data-aos="fade-up" data-aos-delay="800">
    <img src="./s1/top_tree_single.png" :alt="`${info.caseName}_tree2`" class="tree2" data-aos="fade-up" data-aos-delay="900">
    <h1 class="title-3" data-aos="fade-up" data-aos-delay="200">
      九揚盧登堡
    </h1>
    <h1 class="desc" v-if="isPC" data-aos="fade-up" data-aos-delay="400">
      蘆洲首見17-33坪1-3房新藝術城堡宅，<br />
      距離捷運蘆洲站300米、坐落彩虹公園正對面，<br />
      繁華機能與馥郁美好輕鬆收藏入宅，<br />
      除此之外，還提供完美保固與貼心客變服務，在這裡您將遇見最美麗的成家景色。
    </h1>
    <h1 class="desc" v-if="isMobile" data-aos="fade-up" data-aos-delay="400">
      蘆洲首見17-33坪1-3房新藝術城堡宅，<br />
      距離捷運蘆洲站300米、坐落彩虹公園正對面，<br />
      繁華機能與馥郁美好輕鬆收藏入宅，<br />
      除此之外，還提供完美保固與貼心客變服務，<br />
      在這裡您將遇見最美麗的成家景色。
    </h1>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  // height: 100vh;
  // min-height: size(900);
  // max-height: size(1080);
  overflow: hidden;
  position: relative;
  background: #552e70 fixed;
  background-size: auto;
  z-index: 23;
}

.bg-img {
  width: size(1920);
  // height: 100%;
  // min-height: size(900);
  position: absolute;
  top: -1px;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;

  &:nth-child(1) {
    position: relative;
  }
}

.logo {
  @include img_c_pc(553, 196);
  // top: calc(50% - 9vw);
}

.title-1 {
  @include img_c_pc(539, 387);
  // top: calc(50% - 9vw);
}

.title-2 {
  @include img_c_pc(539, 466);
  // top: calc(50% - 9vw);
}

.tree1 {
  @include img_r_pc(439, 754, 787);
  animation: tree 4s ease-out infinite alternate;
  transform: skewX(2deg);
  transform-origin: 50% 100%;
}

.tree2 {
  @include img_r_pc(610, 577, 96);
  animation: tree 4s ease-out infinite alternate;
  transform: skewX(2deg);
  transform-origin: 50% 100%;
}

.title-3 {
  @include img_c_pc(280, 466);
  top: auto;
  bottom: size(844);
  font-size: size(51.8);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.97;
  letter-spacing: size(5.18);
  text-align: center;
  color: #542e71;
  white-space: nowrap;
}

.desc {
  @include img_c_pc(592, 466);
  top: auto;
  bottom: size(680);
  text-shadow: 0 0 4px #061247;
  font-size: size(15);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.2;
  letter-spacing: size(1.5);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

@keyframes tree {
  to {
    transform: skewX(-2deg);
  }
}

.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 0.5s ease;
}

.swipe-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
/*
.t1 {
  width: size(751);
  top: size(483);
  left: size(585);
}

.t2 {
  width: size(751);
  top: size(711);
  left: size(585);
}
*/
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
  .section1 {
    width: 100vw;
    height: sizem(1232);
    min-height: sizem(604);
    // max-height: sizem(750);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    background: transparent;
  }
  .logo {
    @include img_c_m(291, 151);
    // top: calc(50% - 9vw);
  }

  .title-1 {
    @include img_c_m(279, 252);
    // top: calc(50% - 9vw);
  }

  .title-2 {
    @include img_c_m(287, 293);
    // top: calc(50% - 9vw);
  }

  .tree1 {
    @include img_c_m(320, 357);
    // top: auto;
    // bottom: 0;
    animation: tree 4s ease-out infinite alternate;
    transform: skewX(2deg);
    transform-origin: 50% 100%;
  }

  .tree2 {
    display: none;
  }

  .title-3 {
    @include img_c_m(184, 719);
    // top: auto;
    bottom: auto;
    font-size: sizem(34);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.97;
    letter-spacing: sizem(3.4);
    text-align: center;
    color: #542e71;
    white-space: nowrap;
  }

  .desc {
    @include img_c_m(296, 783);
    // top: auto;
    bottom: auto;
    text-shadow: 0 0 4px #061247;
    font-size: sizem(13);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: sizem(1.3);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }
}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import Map from '@/components/Map.vue'
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      hand: require('./s1/m_2_mobile_hand.png'),
    }
  },

  components: {
    Map,
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
