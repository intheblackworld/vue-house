<template>
  <div class="section4">
    <div class="content">
      <h3 class="label">
        健康生活 貫徹始終
      </h3>
      <div class="content-line"></div>
      <h3 class="desc">
        為營造最佳的健康生活情境，從大設施到小細節<br />一一為您設想周全，讓您呼吸的每一口空氣都是健康，<br />飲入的每一滴水都是安心。
      </h3>
      <div class="list">
        <h3 class="desc-line">
          <span>當層排氣</span> 直接排出室內廢氣，避免密閉空間病菌滋生空氣對流最放心
        </h3>
        <h3 class="desc-line">
          <span>HONEYWELL淨水設備</span> 從社區源頭為您把關水質，滴滴安心
        </h3>
        <h3 class="desc-line">
          <span>櫻花牌濾水器</span> 去除餘氯、雜質，為您和家人提供健康之飲用水
        </h3>
      </div>
    </div>
    <img src="./s4/img.jpg" :alt="`${info.caseName}_img`" class="img">
    <img src="./s4/img.png" :alt="`${info.caseName}_img`" class="circle">
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

.circle {
  @include img_l_pc(197, 432, 230);
  animation: circle 5s linear 0s infinite;
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
    height: auto;
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .title {
    @include img_c_m(220, 22);
    font-size: sizem(26);
    letter-spacing: normal;
    z-index: 9;
  }

  .hr {
    @include img_c_m(325, 104);
    z-index: 9;
  }

  .desc {
    @include img_c_m(320, 119);
    font-size: sizem(12);
    line-height: 1.88;
    letter-spacing: normal;
    white-space:normal;
    z-index: 9;
  }

  .more {
    @include img_r_m(179 + 7 + 29, 636, 117);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.04;
    letter-spacing: sizem(2.1);
    text-align: left;
    color: #ffffff;
    cursor: pointer;
    white-space: nowrap;

    img {
      width: sizem(29);
    }
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
