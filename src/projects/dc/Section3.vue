<template>
  <div class="section3">
    <div class="bg"></div>
    <img src="./s3/1.jpg" alt="" class="img1">
    <img src="./s3/2.jpg" alt="" class="img2">
    <img src="./s3/3.jpg" alt="" class="img3">
    <img src="./s3/4.jpg" alt="" class="img4">
    <h1 class="title">聚富核心</h1>
    <h1 class="subtitle">聰明金頭家 輕鬆入主聚富公園</h1>
    <div class="desc">翻轉低利時代，掌握趨勢就是贏家<br />
      創業出租隨心，預約3%高投報獲利<br /><br />
      東城大境力挺聰明金頭家，新北第一環超值價位，<br />
      汐止繁華市心5000坪樹海造鎮，聚富公園首排金店面；<br />
      創業磁吸商機，包租兼收租，獲利加倍奉還。</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
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
  min-height: size(900);
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

.bg {
  @include div_l_pc(1920, 1080, 0, 0);
  background-image: url('./s1/bg.png');
  background-attachment: fixed;
}

.img1 {
  @include img_l_pc(586, 577, 165);
}

.img2 {
  @include img_l_pc(476, 137, 776);
}

.img3 {
  @include img_r_pc(480, 137, 163);
}

.img4 {
  @include img_r_pc(480, 577, 163);
}

.title {
  @include div_l_pc(344, 119, 144, 171);
  font-size: size(80);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(8);
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.subtitle {
  @include div_l_pc(379, 37, 254, 173);
  font-size: size(25);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(2.5);
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(552, 337, 175);
  font-size: size(21);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: size(1.68);
  text-align: left;
  color: #000000;
  white-space: nowrap;
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
  .section3 {
    width: 100vw;
    min-height: sizem(470);
    max-height: sizem(812);
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: calc(100vh - 63px);
    min-height: calc(100vh - 63px);
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

  .img {
    @include img_l_m(201, 0, 0);
  }

  .logo {
    @include img_r_m(95, 47, 73);
  }

  .logo2 {
    @include img_l_m(65, 515, 69);
  }

  .title1 {
    @include img_r_m(239, 348, 72);
    font-size: sizem(32);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(3.2);
    text-align: left;
    color: #248184;
    white-space: nowrap;
  }

  .title2 {
    @include img_r_m(239, 391, 71);
    font-size: sizem(27);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2);
    text-align: left;
    color: #000;
    white-space: nowrap;
  }

  .phone {
    @include img_r_m(239, 428, 71);
    font-size: sizem(54);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: sizem(-2.11);
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .btn {
    @include div_r_m(114, 31, 513, 78);
    border: 1px solid #248184;
    font-size: sizem(16);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: sizem(1.44);
    text-align: left;
    color: #248184;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #248184;
      color: #fff;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section3',

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
