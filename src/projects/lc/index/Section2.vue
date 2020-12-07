<template>
  <div class="section2">
    <h1 class="title">關於立瑾</h1>
    <h1 class="subtitle">
      堅持<span>「確實、創新、執行」</span>三大使命
    </h1>
    <div class="imgs flex-ac flex-jb">
      <div class="img">
        <img src="./s2/1.jpg" alt="">
        <div class="mask">
          <div class="border flex-c">
            確實
          </div>
        </div>
      </div>
      <div class="img">
        <img src="./s2/2.jpg" alt="">
        <div class="mask">
          <div class="border flex-c">
            創新
          </div>
        </div>
      </div>
      <div class="img">
        <img src="./s2/3.jpg" alt="">
        <div class="mask">
          <div class="border flex-c">
            執行
          </div>
        </div>
      </div>
    </div>
    <div class="btn flex-c" @click="$router.push('/about')">瞭解更多</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: size(792);
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

.title {
  @include div_r_pc(346, 112, 4, 787);
  font-size: size(75.5);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(15.02);
  text-align: center;
  color: #606060;
  white-space: nowrap;
}

.subtitle {
  @include div_r_pc(630, 55, 133, 645);
  font-size: size(34);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: size(-1.85);
  text-align: center;
  color: #5d5d5d;
  white-space: nowrap;

  span {
    font-size: size(37);
    color: #ff8200;
  }
}

.btn {
  @include div_r_pc(182, 48, 689, 869);
  background-color: #565656;
  cursor: pointer;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
  font-size: size(23.8);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.74);
  text-align: center;
  color: #fffcfd;
  transition: all .3s;
  &:hover {
    background-color: #444;
  }
}

.imgs {
  width: size(1386);
  top: size(239);
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  .img {
    width: size(433);
    height: size(376);
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      .mask {
        opacity: 1;
      }
    }
  }
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(255, 130, 0, 0.7);
    padding: size(27);
    opacity: 0;
    transition: all 0.3s;
  }

  .border {
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
    color: #fff;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
    font-size: size(51.9);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(10.32);
    text-align: center;
    color: #ffffff;
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
    min-height: sizem(604);
    max-height: sizem(812);
    height: 100vh;
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

  .bg {
    width: sizem(350);
    top: sizem(60);
    bottom: sizem(63);
    // background-image: url('./s1/bg.png');
    background-attachment: fixed;
  }

  .img0 {
    @include div_l_m(284, 667, 0, 0);
    object-fit: cover;
  }

  .lt {
    @include img_l_m(135, 60, 0);
  }

  .label {
    @include div_r_m(277, 100, 0, 0);
    top: auto;
    bottom: sizem(82);
    background-color: #000000;
    font-size: sizem(27);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: sizem(1.24);
    text-align: left;
    color: #ffffff;
    z-index: 3;
  }

  .title {
    @include div_r_m(329, 52, 104, 0);
    text-shadow: 0 0 12px #000000;
    font-size: sizem(35);
    letter-spacing: sizem(1.3);
  }

  .subtitle {
    @include div_l_m(182, 38, 154, 46);
    text-shadow: 0 0 12px #000000;
    font-size: sizem(26);
  }

  .m-container {
    margin-top: sizem(190);
    .swiper-container {
      height: sizem(660);
    }
  }

  .item-img {
    width: sizem(152);
    transform: translateY(10%);
  }
  .item {
    transform: translateY(8%);
    animation: an 5s linear infinite alternate;
    &:nth-child(odd) {
      animation: an 5s -5s linear infinite alternate;
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
