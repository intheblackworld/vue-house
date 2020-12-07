<template>
  <div class="section6">
    <div v-if="isPC">
      <img src="./s6/bg.jpg" alt="" class="bg-img">
      <img src="./s6/i1.png" alt="" class="bg-img" data-aos="fade-up" data-aos-delay="200" data-aos-offset="-300">
      <img src="./s6/i2.png" alt="" class="bg-img" data-aos="fade-up" data-aos-delay="400" data-aos-offset="-300">
      <img src="./s6/i3.png" alt="" class="bg-img" data-aos="fade-up" data-aos-delay="600" data-aos-offset="-300">
      <div class="i4" data-aos="fade-up" data-aos-delay="800" data-aos-offset="-300">
        <div class="t1"><span>3</span>字頭</div>
        <div class="an">
        <div class="img4">
          <img src="./s6/fire.png" class="fire" alt="火箭"><img src="./s6/4.png"  alt="火箭"><div class="t2">汐止</div>
        </div>
        </div>
      <!--   <img src="./s6/t4.png" class="t4" alt="火箭">  -->
      </div>
      <h1 class="title" data-aos="fade-up" data-aos-delay="0">輕鬆入主 新北致富第一環</h1>
    </div>
    <div v-if="isMobile">
      <img src="./s5/lt.png" alt="" class="lt" data-aos="fade" data-aos-delay="0">
      <img src="./s6/bg_m.jpg" alt="" class="bg-img">
      <img src="./s6/i1_m.png" alt="" class="bg-img" data-aos="fade-up" data-aos-delay="200">
      <img src="./s6/i2_m.png" alt="" class="bg-img" data-aos="fade-up" data-aos-delay="400">
      <img src="./s6/i3_m.png" alt="" class="bg-img" data-aos="fade-up" data-aos-delay="600">
      <div class="i4" data-aos="fade-up" data-aos-delay="800" data-aos-offset="-300">
        <div class="t1"><span>3</span>字頭</div>
        <div class="an">
        <div class="img4">
          <img src="./s6/fire.png" class="fire" alt="火箭"><img src="./s6/4.png"  alt="火箭"><div class="t2">汐止</div>
        </div>
        </div>
      <!--   <img src="./s6/t4.png" class="t4" alt="火箭">  -->
      </div>
      <h1 class="title" data-aos="fade" data-aos-delay="0">輕鬆入主</h1>
      <h1 class="subtitle" data-aos="fade" data-aos-delay="0">新北致富第一環</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
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
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;

}
  .img4{
    animation: img4 .5s linear infinite alternate;width:100%;position: absolute;bottom: 0;left:0;transform:translate(0, size(-10));
  }
  .an{z-index: 3;
    animation: an 5s linear infinite;width:100%;position: absolute;bottom: 0;left:0;transform:translateY(size(500));
  }
.i4{
  @include img_c_p(208, 50%, 100,- 300, 1920);
  height: size(475);
  font-size:size(56);
  font-weight: 900;
  text-align: center;
  letter-spacing:0em;

  img{width:100%;position: absolute;bottom:0;left:0;
    &.t4{position: absolute;top:size(14);left:size(14);width: size(170);}
    &.fire{position: absolute;bottom:size(-20);left:size(79);width: size(48.5);animation: fire .2s  linear infinite alternate;
    transform: skewX(2deg);transform-origin: 50% 0%;}
  }
  .t1{position: absolute;top:0;left:0;z-index: 3;width: 100%;color: #c00;z-index: 1;
  span{font-size: 1.4em;display:inline-block;transform:translate(size(2) , size(5));}}
  .t2{position: absolute;bottom:size(230);left:0;z-index: 3;width: 100%;color: #fff;}
  }
@keyframes an {
  10% {
    transform: translateY(0);
  }
  90% {
    transform: translateY(0);
  }
  to {
    transform: translateY(size(-1080));
  }
}
@keyframes img4 {
  to {
    transform: translateY(0);
  }
}
@keyframes fire {
  to {
    transform: skewX(-2deg);
  }
}
.lt {
  @include img_l_pc(302, 107, 288);
}

.title {
  @include div_l_pc(770, 90, 171, 575);
  text-shadow: 0 3px 11px #002565;
  font-size: size(60.8);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(6.08);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  @include div_l_pc(182, 70, 174, 726);
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
  @include img_l_pc(713, 302, 352);
  font-size: size(21);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.68);
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
  .section6 {
    width: 100vw;
    min-height: sizem(521);
    max-height: sizem(521);
    height: sizem(521);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .lt {
    @include img_l_m(205, 80, 0);
  }
  .img4{
    animation: img4 .5s linear infinite alternate;width:100%;position: absolute;bottom: 0;left:0;transform:translate(0, sizem(-10));
  }
  .an{z-index: 3;
    animation: an 5s linear infinite;width:100%;position: absolute;bottom: 0;left:0;transform:translateY(sizem(500));
  }
.i4{
  @include img_c_p(73, 50%, -20,-80, 375);
  height: sizem(185);
  font-size:sizem(20);
  font-weight: 900;
  text-align: center;
  letter-spacing:0em;

  img{width:100%;position: absolute;bottom:0;left:0;
    &.t4{position: absolute;top:sizem(14);left:sizem(14);width: sizem(170);}
    &.fire{position: absolute;bottom:sizem(-15);left:35%;width: 30%;animation: fire .2s  linear infinite alternate;
    transform: skewX(2deg);transform-origin: 50% 0%;}
  }
  .t1{position: absolute;top:0;left:0;z-index: 3;width: 100%;color: #c00;z-index: 1;
  span{font-size: 1.4em;display:inline-block;transform:translate(sizem(2) , sizem(5));}}
  .t2{position: absolute;bottom:sizem(70);left:0;z-index: 3;width: 100%;color: #fff;}
  }


  .title {
    @include div_l_m(194, 66, 133, 30);
    text-shadow: 0 3px 11px #002565;

    font-size: sizem(45);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(4.5);
    text-align: left;
    color: #fff;
    white-space: nowrap;
  }

  .subtitle {
    @include div_l_m(266, 52, 203, 30);
    text-shadow: 0 3px 11px #002565;
    font-size: sizem(35);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(3.5);
    text-align: left;
    color: #fff;
    white-space: nowrap;
  }

  .bg-img {
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section6',

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
