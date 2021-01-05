<template>
  <div class="section2">
    <div class="tab flex-ac flex-jb">
      <div :class="`tab-item flex-c ${type === 1 ? 'active' : ''}`">
        最新消息
      </div>
      <div :class="`tab-item flex-c ${type === 2 ? 'active' : ''}`">
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
    background-color: #008fbb;
    color: #fff;
    font-size: size(33);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.81;
    letter-spacing: size(6.6);
    text-align: center;
    transition: all 0.3s;
    cursor: pointer;

    &.active {
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
