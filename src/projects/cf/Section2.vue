<template>
  <div>
    <div
      class="section2"
      v-if="isPC"
    >
      <img
        src="./s2/bg.jpg"
        alt=""
        class="bg-img"
        data-aos="fade"
        data-aos-delay="0"
      >
      <img
        src="./s2/t.png"
        alt=""
        class="bg-img"
        data-aos="fade-down"
        data-aos-delay="200"
      >
      <h3 class="title absolute" data-aos="fade-right"
        data-aos-delay="400">遇見台南曼哈頓奇緣</h3>
      <h3 class="subtitle absolute" data-aos="fade-right"
        data-aos-delay="600">21,000坪都市綠肺特區</h3>
      <div class="desc absolute" data-aos="fade-right"
        data-aos-delay="800">
        有「南台灣信義計畫區」之稱的平實特區計畫，位於東區與永康區交界處，總面積約42.4公頃，串聯國賓影城、南紡購物中心與成大商圈等繁華生活圈，並提供商業辦公大樓、企業總部、商務中心、展覽中心等用地。未來發展與嶄新城市地貌，成就著名紐約「曼哈頓」城區般的現代天際風格與生活型態，精彩可期！
      </div>
    </div>
    <div
      class="section2"
      v-if="isMobile"
    >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: 100vh;
  min-height: 900px;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: size(1920);
  height: 100vh;
  min-height: 900px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.logo {
  width: size(360);
  top: size(241);
  right: size(405);
}

.title {
  width: size(510);
  top: size(61);
  left: size(194);
  font-size: size(52);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(8.2);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  width: size(400);
  top: size(122);
  left: size(197);
  font-size: size(30.3);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: size(5.46);
  text-align: left;
  color: #333333;
  white-space: nowrap;
}
.desc {
  width: size(795);
  top: size(72);
  right: size(161);
  font-size: size(16);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: size(0.8);
  text-align: left;
  color: #333333;
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
  .section2 {
    width: 100vw;
    min-height: auto;
    height: calc(100vh - 63px);
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
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section2',

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
