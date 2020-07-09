<template>
  <div class="relative">
    <div>
      <img
        src="./s5/bg.jpg"
        alt=""
        class="bg-img"
        v-if="!isMobile"
      >
      <img
        src="./mo/5/bg.jpg"
        alt=""
        class="bg-img"
        v-if="isMobile"
      >
      <h3
        class="title absolute"
        id="section5"
        data-aos="fade" data-aos-delay="400"
      >全陽深耕40載</h3>
      <h3 class="subtitle absolute" data-aos="fade" data-aos-delay="400">打造更值得您引以為傲的士林</h3>
      <hr class="divide absolute" data-aos="fade" data-aos-delay="400">
      <div
        class="desc absolute"
        v-if="!isMobile"
        data-aos="fade" data-aos-delay="600"
      >全陽建設榮耀故土鄉里，重磅回歸士林天母，沿著中山北路樹海，<br />
        側身越過綠廊穿堂、雙溪堤岸一彎靚水，在芝山岩前夜夜點亮萬家燈火，<br />
        將最高質感品味注入士林的無限未來，打造更值得您引以為傲的士林！
      </div>

      <div
        class="desc absolute"
        v-if="isMobile"
        data-aos="fade" data-aos-delay="600"
      >全陽建設榮耀故土鄉里，重磅回歸士林天母，沿著中山北路樹海，側身越過綠廊穿堂、雙溪堤岸一彎靚水，在芝山岩前夜夜點亮萬家燈火，將最高質感品味注入士林的無限未來，打造更值得您引以為傲的士林！
      </div>
      <div
        class="section6"
        v-if="isMobile"
      >
        <img
          src="./mo/6/bg.jpg"
          alt=""
          class="bg-img"
        >
        <div class="animate-row flex absolute" data-aos="fade" data-aos-delay="400">
          <img
            src="./s6/img.png"
            alt=""
            class="img"
          >
          <img
            src="./s6/img.png"
            alt=""
            class="img"
          >
        </div>
      </div>
      <img
        v-if="!isMobile"
        src="./s6/img.png"
        alt=""
        class="img absolute"
        data-aos="fade" data-aos-delay="600"
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  // overflow: hidden;
  position: relative;
  //height: 100vh;
}

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
  &:first-child {
    position: relative;
    margin-top: size(-400);
    mix-blend-mode: darken;
  }
}

.title {
  font-size: size(49);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #ffffff;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  text-align: center;
  top: size(700 + 400);
}

.subtitle {
  font-size: size(30);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: 21.87px;
  text-align: center;
  color: #ffffff;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  text-align: center;
  top: size(770 + 400);
}

.divide {
  width: size(895);
  height: 2px solid;
  background-color: #fff;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  top: size(840 + 400);
}

.desc {
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: 2.39px;
  text-align: center;
  color: #ffffff;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  text-align: center;
  top: size(880 + 400);
}

.img {
  width: size(963);
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  top: size(1100 + 400);
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    margin: 0 0 0 0;
  }

  .bg-img {
    width: 100vw;
    height: auto;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    object-fit: cover;
    &:first-child {
      position: relative;
      margin-top: size-m(-250);
      mix-blend-mode: darken;
    }
  }

  .title {
    font-size: size-m(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 10px;
    text-align: left;
    color: #ffffff;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    text-align: center;
    top: size-m(350 + 250);
  }

  .subtitle {
    font-size: size-m(21);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: 1.89px;
    text-align: center;
    color: #ffffff;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    text-align: center;
    top: size-m(390 + 250);
  }

  .divide {
    width: size-m(300);
    height: 2px solid;
    background-color: #fff;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    top: size-m(440 + 250);
  }

  .desc {
    font-size: size-m(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 1.5px;
    text-align: center;
    color: #ffffff;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    text-align: center;
    width: size-m(300);
    top: size-m(450 + 250);
  }

  .img {
    width: auto;
    height: size-m(296);
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    top: size-m(1100 + 400);
  }

  .section6 {
    position: relative;
    .bg-img {
      width: 100vw;
      height: auto;
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      object-fit: cover;
      &:first-child {
        position: relative;
        margin-top: size-m(0);
        mix-blend-mode: darken;
      }
    }
  }

  .animate-row {
    top: 0;
    left: 0;
    animation: moveImg 20s linear infinite;
    img {
      margin-right: 20px;
    }
  }

  @keyframes moveImg {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-25%);
    }

    to {
      transform: translateX(-50%);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',
  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
