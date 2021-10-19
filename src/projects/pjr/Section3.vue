<template>
  <div class="section3">
    <picture>
      <source media="(min-width: 767px)" srcset="./s3/1.jpg" type="image/jpeg" />
      <source media="(max-width: 767px)" srcset="./s3/1m.jpg" type="image/jpeg" />
      <source media="(min-width: 767px)" srcset="./webp/s3/1.webp" type="image/webp" />
      <source media="(max-width: 767px)" srcset="./webp/s3/1m.webp" type="image/webp" />
      <img src="./s1/bg.jpg" :alt="info.caseName" class="img">
    </picture>

    <picture>
      <source srcset="./webp/s3/logo.webp" type="image/webp" />
      <source srcset="./s3/logo.png" type="image/jpeg" />
      <img src="./s3/logo.png" alt="1" class="logo">
    </picture>
    <div class="label">
      璞真建設 建築摯美生活初衷
    </div>
    <div class="title">
      讓建築好好地長 就像那些很紮實的大樹
    </div>

    <h3 class="desc">
      「璞真建設」母公司為大中華區最大民營鑄造集團「勤美集團」（股票代號TW1532），2002年成立，以「像棵大樹」為精神指引，致力發揮土地最高價值。以人為本心，秉持自然生態與居住環境和諧共生，融入四季、晴雨、日夜、生態考量，涵養豐厚人文美學，為台灣創造感動人心的名邸，滿足居者返璞歸真的渴望。
    </h3>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section3 {
  width: 100%;
  height: size(900);
  min-height: size(900);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  background-color: #fff;

  @include md {
    width: 100vw;
    height: sizem(782);
    min-height: auto;
    max-height: initial;
    overflow: visible;
  }
}

.bg-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.logo {
  @include img_l_pc(202, 228, 185);

  @include md {
    @include img_c_m(154, 604);
  }
}
.label {
  @include img_l_pc(373, 373, 185);
  font-size: size(29);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.45);
  text-align: left;
  color: #c9a063;
  white-space: nowrap;
  @include md {

  }
}
.title {
  @include img_l_pc(604, 425, 185);
  font-size: size(35);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #3e3a39;
  white-space: nowrap;

  @include md {
    @include img_c_m(154, 604);
  }
}

.desc {
  @include img_l_pc(660, 495, 185);
  font-size: size(21);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.76;
  letter-spacing: normal;
  text-align: left;
  color: #3e3a39;

  @include md {
    @include img_c_m(154, 604);
  }
}

.img {
  @include img_r_pc(660, 119, 186);
  
  @include md {
    @include img_c_m(154, 604);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section3',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      // blockIndex: 0,
    }
  },

  methods: {},

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {},
}
</script>
