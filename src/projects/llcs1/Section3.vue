<template>
  <div class="section3">
    <div class="section3-1">
      <div class="bg-block absolute"></div>
      <h3 class="big-title absolute">朗朗城心 六大價值</h3>
      <img
        src="./s3/hr.png"
        alt=""
        class="hr absolute"
        data-aos="zoom-in-right"
        data-aos-delay="600"
      >
      <img
        src="./s3/bg.png"
        alt=""
        class="img"
      >
      <div 
        class="balls absolute">
        <img src="./s3/i1.png" alt="" >
        <img src="./s3/i2.png" alt="" ><br v-if="isMobile">
        <img src="./s3/i3.png" alt="" ><br v-if="!isMobile">
        <img src="./s3/i4.png" alt="" ><br v-if="isMobile">
        <img src="./s3/i5.png" alt="" >
        <img src="./s3/i6.png" alt="" >
      </div>
     <!--  <img
        src="./s3/資產 214.png"
        alt=""
        class="balls absolute"
      > -->
    </div>
    <div
      class="section3-2"
      v-if="isPC"
    >
      <img
        src="./s3/bg.jpg"
        alt=""
        class="bg-img"
      >
      <img
        src="./s3/資產 814.png"
        alt=""
        class="bg-img"
      >
      <h3
        class="title absolute"
        data-aos="fade-right"
        data-aos-delay="400"
      >交通新軸心</h3>
      <h3
        class="subtitle absolute"
        data-aos="fade-right"
        data-aos-delay="600"
      >3快4高5捷運 引領城市快速前進</h3>
      <img
        src="./s3/hr.png"
        alt=""
        class="hr2 absolute"
        data-aos="zoom-in-right"
        data-aos-delay="600"
      >
      <div
        class="desc absolute"
        data-aos="fade-right"
        data-aos-delay="800"
      >
        用397公頃城市願景，創造超越副都心的城市氣魄，這裡是機場捷運的新北市門面，更是新北都會區中心點，迎接2025開發完成，預約不可限量增值前景。
      </div>
    </div>
    <div
      class="section3-2"
      v-if="isMobile"
    >
      <h3
        class="title absolute"
        data-aos="fade-right"
        data-aos-delay="400"
      >國門新都心 用心造城心</h3>
      <h3
        class="subtitle absolute"
        data-aos="fade-right"
        data-aos-delay="600"
      >3快4高5捷運 引領城市快速前進</h3>
      <img
        src="./s3/hr.png"
        alt=""
        class="hr2 absolute"
        data-aos="zoom-in-right"
        data-aos-delay="600"
      >
      <div
        class="desc absolute"
        data-aos="fade-right"
        data-aos-delay="800"
      >
        用397公頃城市願景，創造超越副都心的城市氣魄，這裡是機場捷運的新北市門面，更是新北都會區中心點，迎接2025開發完成，預約不可限量增值前景。
      </div>
      <Map
        :bgSrc="require('./s3/bg.jpg')"
        :bgText="require('./s3/資產 814.png')"
        :hand="require('./mo/4/小手.png')"
      >
      </Map>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  background-color: #068cce;
}
.section3-2,
.section3-1 {
  width:100%;
  height: 100vh;
  min-height:size(1000);
  max-height:size(1080);
  // overflow: hidden;
  position: relative;
}

.bg-img,
.img {
  width: size(1920);
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.img {
  top: size(-350);
}

.bg-block {
  width: size(1920);
  height: 100%;
  top: 0;
  left: 0;
  background-color: #068cce;
}
.big-title {
  width: size(808);
  top: size(40);
  left: size(548);
  text-shadow: 3px 3px 8px rgba(35, 24, 21, 0.75);
  font-size: size(89.2);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: size(8.92);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}
.hr {
  width: size(887);
  top: size(190);
  left: size(517);
}

.balls {
  height:calc(100% - 16vw);
  top: size(250);
  left:50%;transform: translateX(-50%);
  white-space: nowrap;
  img{height: 50%;
  &:nth-child(3){margin-right:size(350);}
  &:nth-child(4){margin-left:size(350);}
  }
}

.title {
  width: size(536);
  top: size(0);
  left: size(134);
  font-size: size(47.6);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: size(4.76);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  width: size(400);
  top: size(74);
  left: size(127);
  font-size: size(34.6);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: size(3.46);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.hr2 {
  width: size(504);
  top: size(144);
  left: size(140);
}
.desc {
  width: size(564);
  top: size(166);
  left: size(125);
  font-size: size(24.2);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
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
  .section3-1 {
    height: sizem(850);
    min-height:sizem(600);
    max-height:sizem(1000);
  }
  .section3-2 {
    width: 100vw;
    min-height: auto;
    height: sizem(730);
    min-height:sizem(600);
    max-height:sizem(820);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .logo {
    width: sizem(260);
    top: sizem(143);
    left: sizem(58);
  }

  .img {
    width: sizem(160);
    top: sizem(-120);
    left: sizem(16);
  }

  .big-title {
    width: sizem(228);
    top: sizem(35);
    left: sizem(75);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: sizem(2.5);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    z-index: 5;
  }

  .bg-block {
    width: 100vw;
    height: sizem(623);
    min-height: auto;
    top: 0;
    left: 0;
    background-color: #068cce;
  }

  .hr {
    width: sizem(225);
    top: sizem(80);
    left: sizem(75);
  }

  .balls {
    width: sizem(311);height:auto;
    top: sizem(100);
    img{width: 50%;height: auto;position: relative;
  &:nth-child(3),
  &:nth-child(4){margin:0;}
}
img + img{top:size(350);}
}

  .title {
    width: sizem(135);
    top: sizem(-250);
    left: sizem(121);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: sizem(2.5);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
    z-index: 3;
  }

  .subtitle {
    width: sizem(310);
    top: sizem(4 - 250);
    left: sizem(33);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 5.26;
    letter-spacing: sizem(2);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
    z-index: 3;
  }

  .hr2 {
    width: sizem(320);
    top: sizem(84 - 250);
    left: sizem(27);
    z-index: 3;
  }
  .desc {
    width: sizem(310);
    top: sizem(120 - 250);
    left: sizem(33);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.85;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    z-index: 3;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import Map from '@/components/Map.vue'

export default {
  name: 'section3',

  components: {
    Map,
  },

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
