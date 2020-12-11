<template>
  <div class="section2">
    <img src="./s1/01.jpg" alt="" class="img">
    <div class="border-container relative">
      <div class="title">
        用<span>真心</span>打造住宅，用<span>真情</span>構築城市
      </div>
      <div class="s-title">
        現正熱銷
      </div>
      <div class="content-title">
        鶯歌鳳鳴 立瑾Way
      </div>
      <div class="content-desc">
        2020年11月<br />
        延續著住戶的期盼，<br />
        今年11月19日於鶯歌鳳鳴重劃區，<br />
        辦理開工動土祈福典禮，<br />
        將接續公開新案「立瑾way」，<br />
        只為給您最好的居家。<br />
        <span>基地地址：鶯歌鳳鳴段</span>
      </div>
      <div class="btn flex-c">
        官網預約
      </div>
      <img src="./s1/youtube.jpg" alt="" class="video">
      <img src="./s1/rb.png" alt="" class="rb">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: size(2360);
  overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  &:nth-child(1) {
    position: relative;
  }
}

.border-container {
  width: size(1637);
  height: size(2160);
  margin: size(50) auto size(75);
  border: 3px solid #ff8200;
}

.title {
  width: size(700);
  margin: 0 auto;
  margin-top: size(-30);
  font-size: 34px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 3.4px;
  text-align: center;
  color: #606060;
  background-color: #fff;
  white-space: nowrap;

  span {
    color: #ff8200;
  }
}

.img {
  @include img_l_pc(1252, 117, 0);
  z-index: 2;
}

.s-title {
  @include div_r_pc(147, 47, 227, 222);
  font-size: size(32);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(6.37);
  text-align: left;
  color: #ff8200;
  white-space: nowrap;
}

.content-title {
  @include div_r_pc(391, 63, 470, 76);
  font-size: size(42.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4.25);
  text-align: left;
  color: #606060;
  white-space: nowrap;
}

.content-desc {
  @include div_r_pc(463, 100, 550, 0);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: size(1);
  text-align: left;
  color: #606060;

  span {
    font-size: size(23);
    font-weight: bold;
    letter-spacing: size(1.15);
  }
}

.btn {
  @include div_r_pc(200, 40, 850, 260);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: size(1);
  text-align: left;
  background-color: #ff8200;
  color: #fff;
}

.video {
  cursor: pointer;
  @include div_r_pc(1343, 762, 1292, 150);
}

.rb {
  position: absolute;
  background-color: #fff;
  width: size(308);
  height: size(167);
  right: size(-100);
  bottom: size(-80);
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
    min-height: sizem(1134);
    max-height: sizem(812);
    height: sizem(1134);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .border-container {
    width: sizem(355);
    height: sizem(1027);
    margin: sizem(40) auto sizem(30);
    border: 3px solid #ff8200;
  }

  .title {
    width: sizem(314);
    margin: 0 auto;
    margin-top: sizem(-30);
    font-size: sizem(20);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 1px;
    text-align: center;
    color: #606060;
    background-color: #fff;
    white-space: nowrap;

    span {
      color: #ff8200;
    }
  }

  .img {
    @include img_l_m(340, 60, 0);
    z-index: 2;
  }

  .s-title {
    @include div_r_m(130, 41, 341, 123);
    font-size: sizem(28);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(5.37);
    text-align: left;
    color: #ff8200;
    white-space: nowrap;
  }

  .content-title {
    @include div_l_m(258, 41, 407, 23);
    font-size: sizem(28);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.8);
    text-align: left;
    color: #606060;
    white-space: nowrap;
  }

  .content-desc {
    @include div_r_m(310, 260, 476, 23);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.65;
    letter-spacing: sizem(0.75);
    text-align: left;
    color: #606060;

    span {
      font-size: sizem(15);
      font-weight: bold;
      letter-spacing: sizem(0.75);
    }
  }

  .btn {
    @include div_r_m(150, 40, 700, 113);
    font-size: sizem(23);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.65;
    letter-spacing: sizem(1);
    text-align: left;
    background-color: #ff8200;
    color: #fff;
  }

  .video {
    cursor: pointer;
    @include div_r_m(320, 181, 782, 17);
  }

  .rb {
    position: absolute;
    background-color: #fff;
    width: sizem(132);
    height: sizem(72);
    right: sizem(-10);
    bottom: sizem(-40);
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
      tabIndex: 0,
      slideList: [
      ],
    }
  },

  methods: {
    // @slideChangeTransitionEnd="slideChanged"
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  mounted() {},

  created() {},

  computed: {},
}
</script>
