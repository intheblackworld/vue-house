<template>
  <div>
    <div class="section1">
      <transition-group name="swipe-fade" mode="out-in">
        <img :src="slide" v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide" :class="`bg-img absolute`" />
      </transition-group>
      <img src="./s1/bg2.png" alt="" class="bg-img" data-aos="fade-up" data-aos-delay="200">
      <img src="./s1/logo.png" alt="" class="logo-img absolute" data-aos="fade-down" data-aos-delay="400">
      <img src="./s1/txt.png" alt="" class="title-img absolute" data-aos="fade-down" data-aos-delay="800">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  position: relative;
  z-index: 1;
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

  // &:nth-child(1) {
  //   position: relative;
  // }
}

// begin
.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 3s ease;
}

.swipe-fade-leave-active {
  transition: all 3s cubic-bezier(1, 0.5, 0.8, 1);
}

.logo-img {
  width: size(724);
  top: size(103);
  left: 0;
  right: 0;
  margin: 0 auto;
}

.title-img {
  width: size(725);
  top: size(286);
  left: 0;
  right: 0;
  margin: 0 auto;
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
  .section1 {
    width: 100vw;
    min-height: auto;
    height: sizem(604 + 329);
    //background-image: url('./mo/1/00.jpg');
    background-size: cover;
    background-attachment: scroll;
  }

  .bottom-img {
    width: 100vw;
    height: auto;
    left: 0;
    top: sizem(0);
    //  bottom: sizem(329);
    object-fit: cover;
    z-index: 2;
  }

  .logo {
    width: sizem(280);
    top: sizem(29);
    right: auto;
    left: sizem(18);
    height: auto;
    object-fit: cover;
  }

  .logo2 {
    width: sizem(63);
    top: sizem(101);
    right: sizem(28);
    height: auto;
    object-fit: cover;
    z-index: 2;
  }

  .txt {
    width: sizem(312);
    top: sizem(205);
    right: sizem(0);
    height: auto;
    object-fit: cover;
  }

  .border {
    width: sizem(347);
    height: sizem(276);
    top: sizem(115);
    right: sizem(14);
    border-width: sizem(6);
    font-size: sizem(15);
    padding: 1.1em 0 0 2em;
  }

  .block {
    width: sizem(48);
    height: sizem(215);
    max-height: initial;
    top: sizem(-30);
    right: sizem(-20);
    left: auto;
    bottom: auto;
  }

  .item-list {
    top: sizem(600);
    left: sizem(44);

    .item {
      width: sizem(17);
      margin-right: sizem(35);
      // display: flex;
      // align-items: center;
      // justify-content: center;
      // flex-wrap: wrap;
      .item-hr {
        width: 1.5px;
        height: sizem(67);
        background-color: #8e8a74;
        margin: 0 auto;
        margin-bottom: 15px;
      }
      &:nth-child(1) {
        margin-top: 0;
      }
      &:nth-child(2) {
        margin-top: sizem(13);
        .item-hr {
          height: sizem(111);
        }
      }

      &:nth-child(3) {
        margin-top: sizem(30);
        .item-hr {
          height: sizem(65);
        }
      }
      &:nth-child(4) {
        margin-top: sizem(17);
        .item-hr {
          height: sizem(69);
        }
      }

      &:nth-child(5) {
        margin-top: sizem(20);
        .item-hr {
          height: sizem(58);
        }
      }

      &:nth-child(6) {
        margin-top: sizem(5);
        .item-hr {
          height: sizem(68);
        }
      }
    }
    .item-title,
    .item-desc {
      writing-mode: vertical-lr;
      text-orientation: upright;
      // display: inline-block;
      // margin: auto;
    }

    .item-title {
      font-size: sizem(12);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.08;
      letter-spacing: normal;
      text-align: center;
      color: #8e8a74;
      margin-bottom: sizem(10);
      margin-left: sizem(2.5);
    }

    .item-desc {
      font-size: sizem(17);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.08;
      letter-spacing: normal;
      text-align: center;
      color: #8e8a74;
      margin-bottom: sizem(10);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { icPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      icPC,
      isMobile,
      isTablet,
      slideIndex: 0,
      slideList: [require('./s1/bg.jpg'), require('./s1/bg2.jpg')],
    }
  },

  methods: {},

  created() {
    setInterval(() => {
      if (this.slideIndex === 1) {
        this.slideIndex = 0
      } else {
        this.slideIndex = 1
      }
    }, 3000)
  },

  mounted() {},

  computed: {},
}
</script>
