<template>
  <div>
    <div class="section5">
      <img src="./s5/bg.jpg" alt="" class="bg-img" v-if="isPC">
      <img src="./m/5/bg.jpg" alt="" class="bg-img" v-if="isMobile">
      <img src="./s5/cloud2.png" alt="" class="cloud cloud1 absolute">
      <img src="./s5/cloud1.png" alt="" class="cloud cloud2 absolute">
      <img src="./s5/cloud1.png" alt="" class="cloud cloud3 absolute">
      <img src="./s5/img.png" alt="" class="bg-img" v-if="isPC">
      <img src="./m/5/img.png" alt="" class="img absolute" v-if="isMobile">
      <div class="hr absolute" v-if="isMobile" />
      <h3 class="title absolute" data-aos="fade-right" data-aos-delay="400">Natural Baptism</h3>
      <h3 class="subtitle absolute" data-aos="fade-right" data-aos-delay="600">山水之中 尋回第二人生</h3>
      <div class="desc absolute" data-aos="fade-right" data-aos-delay="800">前擁海河壯闊，後倚青山翠毓，「八里 龍躍」如同一座獨立的綠色島嶼，在人生最美麗的轉彎，實現對生活的純粹，給您一間無價景觀的書房，給您一間會呼吸的屋子，用心生活、大口呼吸，在這的每一天都是享受。
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height: 100vh;
  min-height: size(1080);
  overflow: hidden;
  position: relative;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  min-height: size(1080);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}
.title {
  width: size(590);
  top: size(116);
  right: size(274);
  font-size: size(67.2);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: size(-2.69);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  width: size(598);
  top: size(336);
  right: size(266);
  font-size: size(55.1);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: size(3.31);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  width: size(606);
  top: size(446);
  right: size(254);
  font-size: size(19.1);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: size(1.14);
  text-align: left;
  color: #ffffff;
}

.cloud1 {
  width: size(320);
  top: 0;
  left: 0;
}

.cloud2 {
  width: size(501);
  top: size(534);
  left: size(76);
}

.cloud3 {
  width: size(365);
  top: size(492);
  left: size(766);
}

.cloud {
  animation: scale 50s 0s ease-in-out infinite alternate;
}

@keyframes scale {
  to {
    transform: scale(5, 7);
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
  .section5 {
    width: 100vw;
    min-height: 0;
    max-height: 500vh;
    height: calc(100vh);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .img {
    width: 100vw;
    height: auto;
    bottom: 0;
    left: 0;
  }

  .subtitle {
    width: sizem(128);
    top: sizem(80 - 55);
    right: auto;
    left: sizem(32.5);
    font-size: sizem(22);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: sizem(-0.88);
    text-align: left;
    color: #fff;
    white-space: nowrap;
  }

  .title {
    width: sizem(291);
    top: sizem(120 - 55);
    right: auto;
    left: sizem(32.5);
    font-size: sizem(25);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(1.5);
    text-align: left;
    color: #fff;
    white-space: nowrap;
  }

  .desc {
    width: sizem(291);
    top: sizem(194 - 55);
    right: auto;
    left: sizem(32.5);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(0.9);
    text-align: left;
    color: #fff;
  }

  .hr {
    width: sizem(291);
    height: 1px;
    background-color: #fff;
    top: sizem(164 - 55);
    right: auto;
    left: sizem(32.5);
  }

  .cloud1 {
    width: sizem(84);
    top: sizem(294);
    left: 0;
  }

  .cloud2 {
    width: sizem(144);
    top: sizem(410);
    left: sizem(14);
  }

  .cloud3 {
    width: sizem(104);
    top: sizem(397);
    left: sizem(211);
  }

  .cloud {
    animation: none;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section5',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
