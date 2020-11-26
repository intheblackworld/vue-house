<template>
  <div class="section4">
    <img src="./s7/bg.jpg" alt="" class="bg-img" v-if="isPC">
    <img src="./s7/bg_m.jpg" alt="" class="bg-img" v-if="isMobile">
    <img src="./s7/lt.png" alt="" class="lt" data-aos="fade" data-aos-delay="0">
    <img src="./s7/train2.png" alt="" class="train">
    <h1 class="title" data-aos="fade" data-aos-delay="0">漲勢新星</h1>
    <h1 class="subtitle" data-aos="fade" data-aos-delay="200">接軌未來 新東區漲勢動能</h1>
    <div class="desc" data-aos="fade" data-aos-delay="400">
      精準睿智投資，掌握捷運財富，距離汐止東湖線僅350M。<br />
      預約未來漲勢，串聯城際精彩，晉身夢想增值趨勢家！
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height:auto;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
}

.lt {
  @include img_l_pc(302, 95, 0);
}

.train {
  @include img_l_pc(1002, 162, 0);
  transform-origin:95% 58%;
  
    opacity: 1;
    transform:scale(0.3);
animation: an 10s  infinite;}

@keyframes an {
  30% {
    transform:scale(1);
  }
  99% {
    transform:scale(1);
    opacity: 1;
  }
  100% {
    transform:scale(1.5);
    opacity: 0;
  }
}


.title {
  @include div_l_pc(344, 123, 160, 571);
  font-size: size(80);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(8);
  text-align: left;
  color: #fff;
  white-space: nowrap;
}

.subtitle {
  @include div_l_pc(346, 42, 174, 954);
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(2.8);
  text-align: left;
  color: #fff;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(563, 226, 956);
  font-size: size(20);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: size(1.75);
  text-align: left;
  color: #fff;
  white-space: nowrap;
}

.fade {
  opacity: 0;
  transition: opacity 1s;

  &.show {
    opacity: 1;
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
  .section4 {
    width: 100vw;
    min-height: sizem(604);
    max-height: sizem(604);
    height: sizem(604);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: sizem(604);
    min-height: sizem(604);
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

  .lt {
    @include img_l_m(89, 71, 30);
  }

.train {
  @include img_l_m(313, 316, -2);}
  .title {
    @include div_l_m(194, 66, 110, 62);
    font-size: sizem(45);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.62;
    letter-spacing: sizem(4.5);
    text-align: left;
    color: #fff;
    white-space: nowrap;
  }

  .subtitle {
    @include div_l_m(222, 27, 165, 62);
    text-shadow: 0 3px 11px #002565;
    font-size: sizem(18);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.5);
    text-align: left;
    color: #fff;
    white-space: nowrap;
  }

  .desc {
    @include div_l_m(310, 149, 211, 30);
    font-size: sizem(15);
    line-height: 1.6;
    letter-spacing: sizem(1.5);
    text-align: left;
    color: #fff;
    white-space: normal;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section4',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
