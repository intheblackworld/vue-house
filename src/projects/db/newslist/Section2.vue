<template>
  <div class="section2">
    <div class="tab flex-ac flex-jb">
      <div :class="`tab-item flex-c yellow`">
        最新消息
      </div>
      <div :class="`tab-item flex-c blue`">
        媒體報導
      </div>
    </div>
    <div class="container flex wrap">
      <div class="item" v-for="(item, index) in item_list" :key="item.title + index" @click="$router.push(`/news/${index}`)">
        <img :src="item.img" :alt="`${info.caseName}`">
        <div class="add"></div>
        <div class="content flex flex-ac">
          <img :src="item.icon" alt="" class="item-icon">
          <div class="item-desc flex-ac" v-html="item.desc"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: auto;
  // overflow: hidden;
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

.tab {
  @include img_l_pc(228 * 2 + 40, -206, 1284);

  .tab-item {
    width: size(228);
    height: size(44);
    font-size: size(33);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.81;
    letter-spacing: size(6.6);
    text-align: center;
    transition: all 0.3s;
    cursor: pointer;

    &.blue {
      background-color: #008fbb;
      color: #fff;
    }

    &.yellow {
      background-color: #ffe900;
      color: #000;
    }
  }
}

.container {
  width: size(496 * 3 + 72 + 36);
  margin: size(50) auto size(170);
}

.item {
  width: size(496);
  height: size(618);
  background-color: #f7f8f8;
  margin: 0 size(18) size(50);
  cursor: pointer;

  .add {
  }

  img {
    width: 100%;
    height: size(487);
    object-fit: cover;
  }

  .content {
    height: size(130);
    padding: 0 size(5);
  }

  .item-icon {
    width: size(70);
    height: size(70);
    margin-right: size(15);
  }

  .item-desc {
    width: size(396);
    font-size: size(25);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: size(0.92);
    text-align: left;
    color: #4d4d4d;
  }

  .item-coming {
    font-size: size(36.5);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: size(0.73);
    text-align: center;
    color: #8e8e8e;
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
    min-height: auto;
    max-height: auto;
    height: auto;
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

  .tab {
    @include img_l_m(320, -50, 33);
    justify-content: flex-start;

    .tab-item {
      width: sizem(92);
      height: sizem(32);
      font-size: sizem(15);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.53;
      letter-spacing: sizem(2.85);
      text-align: center;
      color: #000000;
      margin-right: sizem(15);
      transition: all 0.3s;
      cursor: pointer;

      &.blue {
        background-color: #008fbb;
        color: #fff;
      }

      &.yellow {
        background-color: #ffe900;
        color: #000;
      }

      &.black {
        background-color: #333;
        color: #fff;
      }
    }
  }

  .container {
    width: sizem(310);
    margin: sizem(120) auto sizem(80);
  }

  .item {
    width: 100%;
    height: sizem(300);
    margin: 0 sizem(0) sizem(70);
    border-bottom: none;
    cursor: pointer;

    .add {
    }

    img {
      width: sizem(310);
      height: sizem(221);
      object-fit: cover;
    }

    .content {
      // margin-top: sizem(221);
      height: sizem(70);
      padding: 0 sizem(5);
    }

    .item-icon {
      width: sizem(43);
      height: sizem(43);
      margin-right: sizem(15);
    }

    .item-desc {
      width: sizem(238);
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.4;
      letter-spacing: sizem(0.9);
      text-align: left;
      color: #4d4d4d;

      color: #4d4d4d;
    }
    .item-title {
      font-size: sizem(20);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.62;
      letter-spacing: sizem(1.16);
      text-align: left;
      color: #333333;
      // margin-bottom: 15px;
    }

    .item-coming {
      font-size: sizem(24);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.35;
      letter-spacing: size(0.73);
      text-align: center;
      color: #8e8e8e;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section2',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      type: 1, // 1 最新消息, 2 媒體報導
      item_list: [
        {
          icon: require('./s1/icon1.png'),
          type: 1,
          desc: '新聞標題新聞標題新聞標題新聞新聞標題新聞標題新聞標題新聞新聞',
          img: require('../hot/s1/imgbg.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '新聞標題新聞標題新聞標題新聞新聞標題新聞標題新聞標題新聞新聞',
          img: require('../hot/s1/imgbg.jpg'),
        },
        {
          icon: require('./s1/icon1.png'),
          type: 1,
          desc: '新聞標題新聞標題新聞標題新聞新聞標題新聞標題新聞標題新聞新聞',
          img: require('../hot/s1/imgbg.jpg'),
        },
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
