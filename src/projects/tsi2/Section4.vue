<template>
  <div class="section4">
    <div class="content">
      <h3 class="label"  data-aos="fade" data-aos-delay="0">
        健康生活 貫徹始終
      </h3>
      <div class="content-line"  data-aos="zoom-in-right" data-aos-delay="100"></div>
      <h3 class="desc"  data-aos="fade" data-aos-delay="200">
        為營造最佳的健康生活情境，從大設施到小細節<br />一一為您設想周全，讓您呼吸的每一口空氣<br v-if="isMobile" />都是健康，<br v-if="isPC" />飲入的每一滴水都是安心。
      </h3>
      <div class="list">
        <h3 class="desc-line"  data-aos="fade" data-aos-delay="300">
          <span>當層排氣</span> <br v-if="isMobile" />直接排出室內廢氣，避免密閉空間病菌滋生空氣對流最放心
        </h3>
        <h3 class="desc-line"  data-aos="fade" data-aos-delay="400">
          <span>HONEYWELL淨水設備</span> <br v-if="isMobile" />從社區源頭為您把關水質，滴滴安心
        </h3>
        <h3 class="desc-line"  data-aos="fade" data-aos-delay="500">
          <span>櫻花牌濾水器</span> <br v-if="isMobile" />去除餘氯、雜質，為您和家人提供健康之飲用水
        </h3>
      </div>
    </div>
    <img loading="lazy" src="./s4/img.jpg" :alt="`${info.caseName}_img`" class="img"  data-aos="fade" data-aos-delay="200">
    <h3 class="img-name">情境示意圖</h3>
    <img loading="lazy" src="./s4/img.png" :alt="`${info.caseName}_img`" class="circle"  data-aos="fade" data-aos-delay="600">
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: 100%;
  height: size(605);
  position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  //  overflow: hidden;
    z-index: 3;
    background: #fff;
}

.content {
  @include img_r_pc(762, 202, 170);
}

.content-line {
  border-top: 1px solid #d38700;
  @include img_r_pc(396, 40, 0);
}

.label {
  @include img_l_pc(316, 0, 0);
  font-size: size(35);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.5);
  text-align: center;
  color: #d38700;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(762, 78, 0);
  font-size: size(20);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(1.25);
  text-align: left;
  color: #636363;
}

.list {
  @include img_l_pc(762, 213, 0);
}

.desc-line {
  font-size: size(20);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(1.25);
  text-align: left;
  color: #636363;
  margin-bottom: size(5);
  span {
    display: inline-block;
    padding: 0 size(10);
    background-color: #d38700;
    color: #fff;
  }
}

.img {
  @include img_l_pc(533, 102, 394);
}
  .img-name{
  @include img_l_pc(533, 575, 610);
    font-size: size(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: 0.06em;
    color: #fff;
    text-shadow:0 0 0.8em #000;
  }
.circle {
  @include img_l_pc(197, 432, 230);
  animation: circle 30s linear 0s infinite;
}

@keyframes circle {
  to {
    transform: rotate(360deg);
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
  .section4 {
    width: 100%;
    height: sizem(711);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .content {
    @include img_c_m(310, 0);
  }

  .content-line {
    border-top: 1px solid #d38700;
    @include img_r_m(127, 75, 0);
  }

  .label {
    @include img_l_m(171, 57, 0);
    font-size: sizem(19);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.9);
    text-align: center;
    color: #d38700;
    white-space: nowrap;
  }

  .desc {
    @include img_l_m(310, 96, 0);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(0.3);
    text-align: left;
    color: #636363;
    white-space: nowrap;
  }

  .list {
    @include img_l_m(310, 200, 0);
  }

  .desc-line {
    font-size: sizem(13);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: sizem(1.3);
    text-align: left;
    color: #636363;
    margin-bottom: sizem(5);
    span {
      font-size: sizem(15);
      display: inline-block;
      padding: 0 sizem(10);
      background-color: #d38700;
      color: #fff;
    }
  }

  .img {
    @include img_r_m(276, 390, 0);
  }
  .img-name{
  @include img_r_m(276, 630, 0);
  width: auto;
    font-size: sizem(12);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: 0.06em;
    color: #fff;
    text-shadow:0 0 0.8em #000;
  }

  .circle {
    @include img_l_m(103, 420, 43);
  }

}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section4',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
