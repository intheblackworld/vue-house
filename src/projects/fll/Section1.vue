<template>
  <div class="section1">
    <img src="./s1/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isPC" />
    <img src="./mobile/01/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isMobile" />
    <div data-aos="fade" data-aos-delay="800">
      <img src="./s1/style_1.png" :alt="`${info.caseName}_img`" class="style1" />
      <img src="./s1/style_2.png" :alt="`${info.caseName}_img`" class="style2" />
      <img src="./s1/style_1.png" :alt="`${info.caseName}_img`" class="style3" />
    </div>
    <img src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade" data-aos-delay="0" />
    <img src="./s1/logotitle.png" :alt="`${info.caseName}_img`" class="logotitle" data-aos="fade" data-aos-delay="200" />
    <div class="title" data-aos="fade" data-aos-delay="400">商圈一分鐘 區域最稀有 住宅熱銷王</div>
    <img src="./s1/arrow.png" :alt="`${info.caseName}_img`" class="arrow" data-aos="fade-right" data-aos-delay="600" />
    <div class="subtitle" data-aos="fade" data-aos-delay="800">25坪雙套房｜2房26坪 ｜大3房37坪</div>
    <img src="./s1/btn.png" :alt="`${info.caseName}_img`" class="btn" data-aos="fade" data-aos-delay="1000" v-scroll-to="{ element: `#contact` }" />
    <img src="./s1/building.png" :alt="`${info.caseName}_img`" class="building" data-aos="fade-left" data-aos-delay="1000" />
    <img src="./s1/mouse.png" :alt="`${info.caseName}_img`" class="mouse" data-aos="fade-right" data-aos-delay="1000" />
    <img src="./s1/textball.png" :alt="`${info.caseName}_img`" class="textball" data-aos="fade" data-aos-delay="1200" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  // max-height: size(1080);
  //overflow: hidden;
  // position: relative;
  // background-image: url('./s1/01_bg.jpg');
  background-size: cover;
  background-attachment: fixed;

  // margin: 0 0 size(400) 0;

  // &:before {
  //   content: ' ';
  //   position: fixed;
  //   z-index: -1;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: url('./s1/bg.jpg') center 0 no-repeat;
  //   background-size: cover;
  // }
}

.bg-img {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;
}

.logo {
  @include img_l_pc(613, 184, 183);
}

.arrow {
  @include img_l_pc(771, 611, 112);
}
.btn {
  @include img_l_pc(378, 729, 281);
}
.building {
  @include img_r_pc(876, 0, 40);
  top: auto;
  bottom: 0;
}

.logotitle {
  @include img_l_pc(535, 441, 222);
}

.mouse {
  @include img_l_pc(277, 0, -60);
  top: auto;
  bottom: size(-40);
}
.style1 {
  @include img_l_pc(588, 844, -220);
  opacity: 0.3;
  animation: bling 1s 0.3s ease-in-out infinite alternate;
}

.style2 {
  @include img_l_pc(428, 695, 243);
  opacity: 0.3;
  animation: bling 1.2s 0.5s ease-in-out infinite alternate;
}

.style3 {
  @include img_r_pc(588, 25, 481);
  opacity: 0.3;
  animation: bling 1.5s 0s ease-in-out infinite alternate;
}

@keyframes bling {
  to {
    opacity: 1;
  }
}

.textball {
  @include img_r_pc(467, 76, 508);
}

.title {
  @include img_l_pc(713, 535, 141);
  font-size: size(42.4);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.68;
  letter-spacing: size(2.54);
  text-align: center;
  color: #de1373;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(631, 620, 182);
  font-size: size(33.4);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.59;
  letter-spacing: size(1.33);
  text-align: left;
  color: #231815;
  white-space: nowrap;
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100vw;
    min-height: sizem(666);
    max-height: sizem(750);
    height: sizem(666);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
    // &:before {
    //   background-image: url('./s1/bg_m.jpg');
    // }
  }

  .bg-img {
    min-height: sizem(666);
    max-height: sizem(750);
    height: sizem(666);
  }

  .logo {
    @include img_c_m(210, 47);
  }

  .arrow {
    @include img_c_m(352, 199);
  }
  .btn {
    @include img_c_m(185, 248);
  }
  .building {
    @include img_c_m(291, 0);
    top: auto;
    bottom: 0;
  }

  .logotitle {
    @include img_c_m(179, 135);
  }

  .mouse {
    @include img_r_m(89, 355, 0);
  }
  .style1 {
    @include img_r_m(160, 361, 0);
    opacity: 0.3;
    animation: bling 1s 0.3s ease-in-out infinite alternate;
  }

  .style2 {
    @include img_c_m(169, 231);
    opacity: 0.3;
    animation: bling 1.2s 0.5s ease-in-out infinite alternate;
  }

  .style3 {
    @include img_l_m(169, 322, 0);
    opacity: 0.3;
    animation: bling 1.5s 0s ease-in-out infinite alternate;
  }

  .textball {
    @include img_l_m(148, 338, 12);
  }

  .title {
    @include img_c_m(375, 155);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 3;
    letter-spacing: sizem(1.2);
    text-align: center;
    color: #de1373;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(375, 211);
    font-size: sizem(16);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.59;
    letter-spacing: sizem(0.8);
    text-align: center;
    color: #231815;
    white-space: nowrap;

    span {
      font-size: sizem(20);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from "@/utils";
import info from "@/info";

export default {
  name: "section1",

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet
      // blockIndex: 0,
    };
  },

  methods: {},

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {}
};
</script>
