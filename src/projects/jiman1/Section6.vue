<template>
  <div class="section6">
    <img src="./s6/06_img_1.jpg" :alt="`${info.caseName}_img`" class="img1">
    <img src="./s6/06_img_2.jpg" :alt="`${info.caseName}_img`" class="img2">
    <img src="./s6/06_img_3.jpg" :alt="`${info.caseName}_img`" class="img3">
    <img src="./s6/06_img_4.jpg" :alt="`${info.caseName}_img`" class="img4">
    <img src="./s6/06_logo.png" :alt="`${info.caseName}_img`" class="logo">
    <img src="./s6/06_title.png" :alt="`${info.caseName}_img`" class="title-img">
    <img src="./s6/06_signature.png" :alt="`${info.caseName}_img`" class="sign">
    <div class="title">
      沅利建設40年巨作<br />
      深藏不露的建築堅持
    </div>
    <div class="desc" v-if="isPC">
      自民國67年成立至今，「誠懇踏實」的堅定理念，贏取無數口碑，成為沅家集團-沅利建設四十寒暑耕耘的最大資產。「自慢藏，累積沅利建設40年的專業堅持，也是我們最自慢的代表作」沅利建設江文章董事長認真地訴說自慢藏的營造過程及細節，不強調浮誇，不堆砌虛華，安全、穩重為最優先考量，以誠為質，以實為先，讓自慢藏站得更高、走得更遠，並將其價值延續到下一代的和諧生活面貌。<br /><br />
      【經典業績】<br />
      <span>新天地(捷運大坪林站共構案)、天母 上北澤、板橋 海德公園
      </span>
    </div>
    <div class="desc" v-if="isMobile">
      「自慢藏，累積沅家集團-沅利建設40年的專業堅持，也是我們最自慢的代表作」沅家集團-沅利建設江文章董事長認真地訴說自慢藏的營造過程及細節，不強調浮誇，不堆砌虛華，安全、穩重為最優先考量，讓自慢藏站得更高、走得更遠，並將其價值延續到下一代的和諧生活面貌。<br /><br />
      【經典業績】<span>新天地(捷運大坪林站共構案)、天母 上北澤、板橋 海德公園
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: 100%;
  height: size(382 + 907);
  min-height: size(382 + 907);
  max-height: size(382 + 907);
  // overflow: hidden;
  position: relative;
  background-size: auto;
  background-color: #fff;
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
    //  position: relative;
  }
}

.img1 {
  @include img_r_pc(479, 197, 341);
}

.img2 {
  @include img_l_pc(382, 907, 399);
}
.img3 {
  @include img_l_pc(382, 907, 797);
}
.img4 {
  @include img_l_pc(382, 907, 1193);
}

.logo {
  @include img_l_pc(134, 191, 396);
}

.title-img {
  @include img_l_pc(124, 236, 176);
}

.sign {
  @include img_r_pc(118, 471, 201);
}

.title {
  @include img_l_pc(477, 186, 547);
  font-size: size(53);
  line-height: size(66);
  // letter-spacing: size(0.53);
  text-align: left;
  font-weight: 500;
  color: #c07f76;
  // white-space: nowrap;
}

.desc {
  @include img_l_pc(623, 371, 398);
  font-size: size(23);
  line-height: size(48);
  letter-spacing: size(0.83);
  text-align: left;
  font-weight: 400;
  color: #000;
  // white-space: nowrap;
  span {
    font-size: size(21);
    line-height: size(48);
    letter-spacing: size(0.76);
    text-align: left;
    font-weight: 600;
    color: #000;
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
    min-height: sizem(121.8 + 720);
    max-height: sizem(121.8 + 720);
    height: sizem(121.8 + 720);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: 100vw;
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

  .img1 {
    @include img_r_m(230.7, 68.4, 37.3);
  }

  .img2 {
    @include img_l_m(121.8, 0, 126.6);
    top: auto;
    bottom: 0;
  }
  .img3 {
    @include img_l_m(121.8, 0, 0);
    top: auto;
    bottom: 0;
  }
  .img4 {
    @include img_r_m(121.8, 0, 0);
    top: auto;
    bottom: 0;
  }

  .logo {
    @include img_r_m(49.2, 393.5, 220.8);
  }

  .title-img {
    @include img_l_m(44.2, 64.5, 43);
  }

  .sign {
    @include img_l_m(47.2, 229.5, 49);
  }

  .title {
    @include img_r_m(178, 391.2, 36.3);
    font-size: sizem(19.5);
    line-height: sizem(25);
    letter-spacing: sizem(0.29);
    text-align: left;
    font-weight: 500;
    color: #c07f76;
    white-space: nowrap;
  }

  .desc {
    @include img_r_m(226.6, 462.5, 42.3);
    font-size: sizem(12.5);
    line-height: sizem(24);
    letter-spacing: sizem(0);
    text-align: left;
    font-weight: 400;
    color: #000;
    // white-space: nowrap;
    span {
      font-size: sizem(12.5);
      line-height: sizem(24);
      letter-spacing: sizem(0.76);
      text-align: left;
      font-weight: 600;
      color: #000;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section6',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
