<template>
  <div class="section2">
    <div class="img">
      <img src="./s2/1.jpg" />
      <div class="border"></div>
    </div>
    <div class="info-block flex-c">
      <div class="content">
        <div class="title">
          立瑾建築機構旗下包含
        </div>
        <div class="desc">
          立瑾建設、立澄建設、立榮建設、鼎禾建設、詠齊建設
        </div>
        <div class="title">
          合作優質營造商
        </div>
        <div class="desc">
          鴻駿營造
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: size(890);
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

.img {
  @include div_l_pc(800, 500, 20, 260);
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }

  .border {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    left: 0;
    right: 0;
    width: calc(100% - 1.1vw);
    height: calc(100% - 1.1vw);
    border: 3px solid #ff8200;
  }
}

.info-block {
  @include div_r_pc(700, 360, 320, 280);
  background-color: #ff8200;
}

.content {
    width: calc(100% - 5vw);
    height: calc(100% - 5vw);
  background-color: #fff;
  padding: size(8) size(30) 0;
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.2em;
  text-align: left;
  color: #606060;
  .title {
    font-size: size(30);
    font-weight: 900;
    letter-spacing:0.05em;
    margin: 0.6em 0 0 0;
  }
  .desc{
    font-size: size(23);
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
  .section2 {
    width: 100vw;
    min-height: sizem(454);
    max-height: sizem(812);
    height: sizem(454);
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

  .img {
    @include div_l_m(344, 223, 0, 0);
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }

    .border {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 95%;
      height: 95%;
      border: 3px solid #ff8200;
    }
  }

  .info-block {
    @include div_r_m(336, 203, 183, 0);
    background-color: #ff8200;
  }

  .content {
    width: calc(100% - 10vw);
    height: calc(100% - 10vw);
    padding: sizem(25) sizem(30);
    font-size: sizem(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    text-align: left;
    color: #606060;
    .title {
      font-size: sizem(15);
      font-weight: 900;
      letter-spacing: sizem(1.49);
    }
  .desc{
      font-size: sizem(13);
  }
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
