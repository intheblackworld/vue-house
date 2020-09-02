<template>
  <div>
    <div
      class="section3-1"
      v-if="isPC"
    >
      <div class="bg-block absolute"></div>
      <h3 class="big-title absolute">朗朗城心 六大價值</h3>
      <img src="./s3/hr.png" alt="" class="hr absolute" data-aos="zoom-in-right"
        data-aos-delay="600">
      <img
        src="./s3/bg.png"
        alt=""
        class="img"
      >
      <img
        src="./s3/資產 214.png"
        alt=""
        class="balls absolute"
      >
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
      <img src="./s3/hr.png" alt="" class="hr2 absolute" data-aos="zoom-in-right"
        data-aos-delay="600">
      <div
        class="desc absolute"
        data-aos="fade-right"
        data-aos-delay="800"
      >
        用397公頃城市願景，創造超越副都心的城市氣魄，這裡是機場捷運的新北市門面，更是新北都會區中心點，迎接2025開發完成，預約不可限量增值前景。
      </div>
    </div>
    <div
      class="section3"
      v-if="isMobile"
    >
      <h3 class="title absolute">遇見台南曼哈頓奇緣</h3>
      <h3 class="subtitle absolute">21,000坪都市綠肺特區</h3>
      <div class="desc absolute">
        有「南台灣信義計畫區」之稱的平實特區計畫，位於東區與永康區交界處，總面積約42.4公頃，串聯國賓影城、南紡購物中心與成大商圈等繁華生活圈，並提供商業辦公大樓、企業總部、商務中心、展覽中心等用地。未來發展與嶄新城市地貌，成就著名紐約「曼哈頓」城區般的現代天際風格與生活型態，精彩可期！
      </div>
      <Map
        :bgSrc="require('./s2/bg.jpg')"
        :bgText="require('./s2/t.png')"
        :hand="require('./mo/2/小手.png')"
      >
      </Map>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3-2,
.section3-1 {
  width: size(1920);
  height: 100vh;
  min-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  // overflow: hidden;
  position: relative;
}

.bg-img,
.img {
  width: size(1920);
  height: 100vh;
  min-height: size(1080);
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
  height: 100vh;
  min-height: 900px;
  top: 0;
  left: 0;
  background-color: #068cce;
}
.big-title {
  width: size(808);
  top: size(30);
  left: size(548);
  text-shadow: 3px 3px 8px rgba(35, 24, 21, 0.75);
  font-size: size(89.2);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: size(8.92);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}
.hr {
  width: size(887);
  top: size(160);
  left: size(517);
}

.balls {
  width: size(363 + 747 + 420);
  top: size(240);
  left: size(191);
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
  .section3-1,
  .section3-2 {
    width: 100vw;
    min-height: auto;
    height: sizem(799);
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

  .title {
    width: sizem(257);
    top: sizem(28);
    left: sizem(34);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.48;
    letter-spacing: sizem(4);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    z-index: 5;
  }

  .subtitle {
    width: sizem(241);
    top: sizem(64);
    left: sizem(33);
    font-size: sizem(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.35;
    letter-spacing: sizem(3.24);
    text-align: left;
    color: #333333;
    white-space: nowrap;
    z-index: 5;
  }
  .desc {
    width: sizem(310);
    top: sizem(108);
    right: sizem(33);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(0.75);
    text-align: left;
    color: #333333;
    z-index: 5;
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
