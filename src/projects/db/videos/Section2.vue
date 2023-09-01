<template>
  <div class="section2">
    <div class="tab flex-ac flex-jr">
      <div :class="`tab-item flex-c yellow`" v-show="item_list.filter(i => i.type === 1).length > 0" @click="currentType = 1">
        線上熱銷
      </div>
      <div :class="`tab-item flex-c blue`" v-show="item_list.filter(i => i.type === 2).length > 0" @click="currentType = 2">
        完銷個案
      </div>
      <div :class="`tab-item flex-c black`" v-show="item_list.filter(i => i.type === 3).length > 0" @click="currentType = 3">
        媒體影音
      </div>
    </div>
    <div class="container">
      <div class="item flex-ac wrap" v-for="(item, index) in item_list" :key="item.title + index" v-show="item.type === currentType">
        <iframe :src="item.video" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <div class="content">
          <div class="item-label flex-c yellow" v-if="item.type === 1">線上熱銷</div>
          <div class="item-label flex-c blue" v-if="item.type === 2">完銷個案</div>
          <div class="item-label flex-c black" v-if="item.type === 3">媒體影音</div>
          <div class="item-title flex-ac" v-html="item.title"></div>
          <div class="item-desc flex-ac" v-html="item.desc"></div>
        </div>
        <div class="add"></div>
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
  @include img_l_pc(228 * 3 + 40 * 2, -206, 976);

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
    margin: 0 20px;
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
  width: size(1562);
  margin: size(50) auto size(170);
}

.item {
  width: 100%;
  height: size(780);
  margin: 0 size(18);
  border-bottom: 2px solid #008fbb;
  transition: all 0.3s;
  cursor: pointer;

 /* &:hover {
    background: #00000003;
  }*/
  .add {
  }

  iframe {
    width: size(966);
    height: size(629);
    // object-fit: cover;
  }

  .content {
    height: size(130);
    width: 36%;
    padding: 0 0 0 size(75);
  }

  .item-label {
    width: size(228);
    height: size(44);
    font-size: size(33);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.81;
    letter-spacing: size(6.27);
    text-align: center;
    margin-bottom: 15px;
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
    // margin-right: size(15);
  }

  .item-title {
    font-size: size(36);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: size(2.16);
    text-align: justify;
    color: #333333;
    // margin-bottom: 15px;
  }

  .item-desc {
    width: size(396);
    font-size: size(24);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.99;
    letter-spacing: size(0.96);
    text-align: justify;
    color: #808080;
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
    @include img_l_m(320, -70, 33);

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
      margin-right: 0;
      margin-left: sizem(15);
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
    width: sizem(375);
    margin: sizem(70) auto sizem(120);
  }

  .item {
    width: 100vw;
    height: sizem(380);
    margin: 0 0 sizem(70);
    // justify-content: center;
    border-bottom: none;
    cursor: pointer;
    display: block;

    iframe {
      width: 100vw;
      min-height: sizem(190);
      margin: 0 auto;
      left: 0;
      right: 0;
      background-color: #000;
      transition: all 1s;
      // object-fit: cover;
    }

    .content {
      width: 100vw;
      // margin-top: sizem(221);
      height: auto;
      padding: 0 sizem(35);
    }

    .item-label {
      width: sizem(132);
      height: sizem(25);
      font-size: sizem(18);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.81;
      letter-spacing: sizem(3.42);
      text-align: center;
      margin-top: sizem(29);
      margin-bottom: 15px;
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
      // margin-right: size(15);
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

    .item-desc {
      width: sizem(202);
      font-size: sizem(16);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.99;
      letter-spacing: sizem(0.96);
      text-align: left;
      color: #808080;
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
      type: 1, // 1 線上熱銷, 2 完銷個案, 3 媒體影音
      currentType: 1,
      item_list: [
        {
          // icon: require('./s1/icon1.png'),
          type:3,
          title: '【雙橡園】產官攜手新十大建設｜雙橡園贏接副都心起漲盛世',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/XWyWt5-qC_Y',
        },
        {
          // icon: require('./s1/icon1.png'),
          type:3,
          title: '【太陽帝國】PTW亞洲之最 國際鋼骨地標再創區域高價',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/miz0lWMi83o',
        },
        {
          // icon: require('./s1/icon1.png'),
          type:1,
          title: '【理享城】快樂王國2理享城｜蘆洲下一站 萬坪公園城',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/h081wRDMbYM',
        },
        {
          // icon: require('./s1/icon1.png'),
          type:3,
          title: '【快樂王國】洲子洋新蘆特區 快樂王國夢享城 @EBC地產王',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/a2xCLQD7ecU',
        },
        {
          // icon: require('./s1/icon1.png'),
          type:3,
          title: '【快樂王國】與蘆洲站僅一橋之隔 「快樂王國」CP值高吸首購族',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/bLVDNXiN9Gg',
        },
        {
          // icon: require('./s1/icon1.png'),
          type:3,
          title: '【太陽帝國】中和建案實登創天價 專家：鋼骨捷運是房價保證',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/2NllXiMjN88',
        },
        {
          // icon: require('./s1/icon1.png'),
          type:3,
          title: '【太陽帝國】雙和「華爾街天際線」現蹤！「太陽帝國」登區域最高價！ @這!不是新聞',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/0ogndmE3_GI',
        },
        {
          // icon: require('./s1/icon1.png'),
          type:1,
          title: '【太陽帝國】PTW亞洲之最 美國建築設計雙料金獎肯定',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/hYJzFmd2mEg',
        },
        {
          // icon: require('./s1/icon1.png'),
          type:1,
          title: '【快樂王國】新蘆特區寓言 全家人的樂園',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/5dZlrQ6Rk0Q',
        },
        {
          // icon: require('./s1/icon1.png'),
          type:1,
          title: '【太陽帝國】 『PTW亞洲之最 美國建築設計雙料金獎肯定』',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/DmuwVtk30Sg',
        },
        {
          // icon: require('./s1/icon1.png'),
          type:1,
          title: '【伴月灣】 『公園水岸雙首排 最強水岸休憩宅』',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/YqpsA2Sa2vE',
        },
        {
          // icon: require('./s1/icon1.png'),
          type:1,
          title: '【太陽帝國】 『仰望雙和的新高度』',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/irs0m1qWkl8',
        },
        {
          // icon: require('./s1/icon1.png'),
          type:1,
          title: '【神采飛洋】 HOUSE OF HAPPINESS｜設計師篇',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/qa-XGxKFT-4',
        },
        {
          type: 1,
          title: '【碧波白】五大建築獎',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/Shj6X2xxyoQ'
        },
        {
          // icon: require('./s1/icon1.png'),
          type:1,
          title: '【太陽帝國】不是王牌出手 雙和第一峰',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/vBy5ZjC4Q9U',
        },
        {
          // icon: require('./s1/icon2.png'),
          type: 1,
          title: '【碧波白】碧波白 金獎篇',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/F9Y7UvuctSE',
        },
        {
          // icon: require('./s1/icon1.png'),
          type: 1,
          title: '【神采飛洋】首購族買房神曲唱起來!台北車站10分鐘，有薪就有家',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/Z_hsfRlA4dg',
        },
        {
          // icon: require('./s1/icon1.png'),
          type: 1,
          title: '【碧波白】碧波白 肺腑之言',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/0BPv41BCVmk',
        },
        {
          // icon: require('./s1/icon1.png'),
          type: 3,
          title: '【東森新聞】坐擁全齡機能! 新店碧波白兩代宅躍升換屋首選',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/nkg8R28fa5U',
        },
        {
          // icon: require('./s1/icon1.png'),
          type: 3,
          title: '【東森新聞】36層全棟鋼骨制震宅 南勢角建案太陽帝國熱銷',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/UcxPCDzs_yw',
        },
        {
          // icon: require('./s1/icon1.png'),
          type: 3,
          title: '【三立新聞】租不如買！「神采飛洋」區域最低價　入住洲子洋蛋黃區',
          desc: '',
          // img: require('../hot/s1/imgbg.jpg'),
          video: 'https://www.youtube.com/embed/rXN9VphSzaw',
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
