<template>
  <div class="section3">
    <div class="bg"></div>
    <img src="./s3/1.jpg" alt="" class="img1"  data-aos="fade" data-aos-delay="0">
    <img src="./s3/2.jpg" alt="" class="img2"  data-aos="fade" data-aos-delay="200">
    <img src="./s3/3.jpg" alt="" class="img3"  data-aos="fade" data-aos-delay="400">
    <img src="./s3/4.jpg" alt="" class="img4"  data-aos="fade" data-aos-delay="600">
    <h1 class="title"  data-aos="fade" data-aos-delay="0">聚富核心</h1>
    <h1 class="subtitle"  data-aos="fade" data-aos-delay="200">聰明金頭家 輕鬆入主聚富公園</h1>
    <div class="desc" v-if="isPC"  data-aos="fade" data-aos-delay="400">翻轉低利時代，掌握趨勢就是贏家<br />
      創業出租隨心，預約3%高投報獲利<br /><br />
      東城大境力挺聰明金頭家，新北第一環超值價位，<br />
      汐止繁華市心5000坪樹海造鎮，聚富公園首排金店面；<br />
      創業磁吸商機，包租兼收租，獲利加倍奉還。</div>
    <div class="desc" v-if="isMobile"  data-aos="fade" data-aos-delay="400">
      翻轉低利時代，掌握趨勢就是贏家<br />
      創業出租隨心，預約3%高投報獲利<br /><br />
      東城大境力挺聰明金頭家，<br />
      新北第一環超值價位，<br />
      汐止繁華市心5000坪樹海造鎮，<br />
      聚富公園首排金店面；<br />
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
    min-height: auto;
    max-height: sizem(965);
    height: sizem(965);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg {
    @include div_l_m(375, 965, 0, 0);
    background-image: url('./s1/bg.png');
    background-attachment: fixed;
  }

  .img1 {
    @include img_l_m(332, 81, 22);
  }

  .img2 {
    @include img_l_m(161, 137, 22);
    top: auto;
    bottom: sizem(24);
  }

  .img3 {
    @include img_r_m(162, 137, 21);
    top: auto;
    bottom: sizem(173);
  }

  .img4 {
    @include img_r_m(162, 577, 21);
    top: auto;
    bottom: sizem(24);
  }

  .title {
    @include div_l_m(194, 66, 330, 22);
    font-size: sizem(45);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(4.5);
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .subtitle {
    @include div_l_m(228, 22, 394, 22);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.5);
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .desc {
    @include img_l_m(323, 438, 22);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: sizem(1.2);
    text-align: left;
    color: #000000;
    white-space: nowrap;
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
