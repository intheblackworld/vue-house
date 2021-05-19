<template>
  <div class="section6">
    <div class="title">
      因為稀有所以珍貴
    </div>
    <div class="subtitle">
      陽明山保護區限建規範<br />
      住戶更惜售
    </div>
    <div class="desc desc1">
      「富貴山頭」陽明山豪墅交易連年創天價，美景讓許多富豪趨之若鶩<br />
      因受國家森林公園保護區管制，無法改建及擴建<br />
      造成陽明山的土地稀有，住戶都相當惜售<br />
      可開發土地與房屋稀少，造成一宅難求的現象<br />
      陽明山別墅價值因此居高不下
    </div>
    <div class="desc desc2">
      連原本有望開發的<br />
      「陽明山保變住六之六」開發案都充滿變數<br />
      (此案初估每坪上看200萬元)<br />
      讓陽明山因土地與住宅的稀有性更顯珍貴
    </div>
    <img src="./s6/style_1.png" :alt="`${info.caseName}_img`" class="style1">
    <img src="./s6/t_style.png" :alt="`${info.caseName}_img`" class="t_style">
    <img src="./s6/bird.png" :alt="`${info.caseName}_img`" class="bird">
    <img src="./s6/leaf.png" :alt="`${info.caseName}_img`" class="leaf">
    <img src="./s6/img_1.png" :alt="`${info.caseName}_img`" class="img1">
    <img src="./s6/img_2.png" :alt="`${info.caseName}_img`" class="img2">
    <img src="./s6/style_2.png" :alt="`${info.caseName}_img`" class="style2">
    <div class="cloud-bg">
      <img src="./s6/style_3.png" :alt="`${info.caseName}_img`" class="cloud cloud1">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section6 {
  width: 100%;
  height: auto;
  min-height: size(1163 + 205);
  max-height: auto;
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
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;
}

.title {
  @include img_l_pc(356, 236, 165);
  font-size: size(40);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.2);
  text-align: center;
  color: #000000;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(356, 306, 165);
  font-size: size(40);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.2);
  text-align: left;
  color: #cc8b00;
  white-space: nowrap;
}

.desc {
  font-size: size(20);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.65;
  letter-spacing: size(2);
  text-align: left;
  color: #4d4d4d;
  white-space: nowrap;
}

.desc1 {
  @include img_l_pc(658, 453, 174);
}

.desc2 {
  @include img_l_pc(416, 747, 174);
}
.style1 {
  @include img_r_pc(434, 142, 610);
}

.style2 {
  @include img_r_pc(243, 311, 40);
}

.img1 {
  @include img_r_pc(843, 296, 0);
}
.img2 {
  @include img_r_pc(843, 769, 0);
}

.t_style {
  @include img_l_pc(578, 43, 0);
  animation: strech 5s ease-in-out alternate infinite;
}
.bird {
  @include img_r_pc(389, 841, 838);
}
.leaf {
  @include img_l_pc(251, 913, -70);
}

@keyframes strech {
  to {
    transform: skewX(10deg);
  }
}

.cloud-bg {
  .cloud {
    animation: cloud 5s ease-in-out alternate infinite;
  }

  .cloud1 {
    @include img_r_pc(745, 80, -150);
    top: auto;
    bottom: size(30);
    transform: translateX(-10%);
  }
}
@keyframes cloud {
  to {
    transform: translateX(0);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section6 {
    width: 100vw;
    min-height: sizem(604);
    max-height: sizem(750);
    height: calc(100vh - 63px);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
    &:before {
      background-image: url('./s1/bg_m.jpg');
    }
  }

  .grass {
    @include img_r_m(375, 0, -40);
    top: auto;
    bottom: 0;
    transform-origin: bottom;
    animation: grass 4s ease-in-out alternate infinite;
  }

  .logo {
    @include img_l_m(195, 50, 88);
  }
  .logo1 {
    @include img_l_m(195, 50, 88);
  }

  @keyframes grass {
    to {
      transform: skewX(3deg);
    }
  }

  .title {
    @include img_r_m(290, 409, 43);
    font-size: sizem(23);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: sizem(3.68);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(290, 437, 46);
    font-size: sizem(54);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: normal;
    text-align: left;
    color: #231815;
    white-space: nowrap;
    span {
      font-size: sizem(56);
      font-weight: 500;
    }
  }

  .hint {
    @include img_r_m(113, 363, 52);
    font-size: sizem(16);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: sizem(0.32);
    text-align: left;
    color: #00101d;
    span {
      font-weight: 500;
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
