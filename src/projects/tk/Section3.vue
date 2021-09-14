<template>
  <div class="section3">
    <div class="img-content" v-if="isPC">
      <div class="img1">
        <img src="./s3/1.jpg" alt="">
        <h3 class="img-name">
            美麗島捷運站空拍圖
        </h3>
      </div>
      <div class="img2">
        <img src="./s3/2.jpg" alt="">
        <h3 class="img-name">
            捷運市議會站
        </h3>
      </div>
      <div class="img3">
        <img src="./s3/3.jpg" alt="">
        <h3 class="img-name">
            中央公園
        </h3>
      </div>
    </div>
    <div class="border">
      <h3 class="title">
        步行美麗島 / 市議會站<br />
        捷奏生活無往不利
      </h3>
      <div class="line"></div>
      <div class="subtitle" v-if="isPC">
        【達麗東京】步行近距離雙線捷運生活圈！<br />
        未來輕軌綠線、捷運黃線，串聯城市全錄網！<br />
        即刻把握軌道經濟學，投資、起漲攻守兼備！
      </div>
      <div class="subtitle" v-if="isMobile">
        【達麗東京】步行近距離雙線捷運生活圈！
        未來輕軌綠線、捷運黃線，串聯城市全錄網！
        即刻把握軌道經濟學，投資、起漲攻守兼備！
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: 100%;
  height: size(1135);
  position: relative;
  background-image: url('./s3/bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  // background-size: cover;
  // background-position: 100%;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
}

.img-content {
  @include img_l_pc(1215, 54, 0);
  height: size(417 + 515 + 10);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.img1 {
  width: 100%;
  margin-bottom: 15px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.img2 {
  width: 60%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.img3 {
  width: 38%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.img-name {
  position: absolute;
  right: size(18);
  bottom: size(16);
  text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.75);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(8);
  text-align: left;
  color: #fff;
}

.border {
  @include div_r_pc(484, 650, 154, 160);
  border: 2px solid #c9a063;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: size(34) size(34) 0 0;
    border-color: #c9a063 transparent transparent transparent;
  }

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 size(34) size(34);
    border-color:  transparent transparent #c9a063 transparent;
  }
}

.line {
  @include img_l_pc(427, 320, 19);
}

.title {
  @include img_r_pc(430, 162, 15);
  font-size: size(40);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: size(3);
  text-align: center;
  color: #c8a064;
  white-space: nowrap;
}

.subtitle {
  @include img_r_pc(484, 342, 0);
  font-size: size(20);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.4;
  letter-spacing: size(1);
  text-align: center;
  color: #fff;
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
    height: sizem(578 + 250);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .img {
    @include img_l_m(375, 0, 0);
    height: sizem(250);
    object-fit: cover;
  }

  .content {
    @include div_l_m(346, 250, 240, 12);
    background-color: #100b09;

    .t_bg {
      @include img_r_m(220, 0, 0);
      top: auto;
      bottom: 0;
    }
  }

  .border {
    @include div_l_m(346, 250, 245, 17.8);
    border: 2px solid #866231;
  }

  .title {
    @include img_l_m(231, 265, 33);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(0.75);
    text-align: left;
    color: #c3985b;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(310, 340, 33);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.2;
    letter-spacing: sizem(2.4);
    text-align: left;
    color: #ffffff;
    white-space: normal;
  }

  .desc {
    @include img_c_m(310, 250 + 265);
    font-size: sizem(15);
    line-height: 1.98;
    letter-spacing: 0.18em;
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
      isPC,
      isMobile,
      isTablet,
      info,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {},
}
</script>
