<template>
  <div class="section2">
    <div class="tab flex-ac flex-jr">
      <div :class="`tab-item flex-c yellow`" v-show="item_list.filter(i => i.type === 1).length > 0" @click="currentType = 1">
        最新消息
      </div> 
      <div :class="`tab-item flex-c blue`" v-show="item_list.filter(i => i.type === 2).length > 0" @click="currentType = 2">
        媒體報導
      </div>
    </div>
    <div class="container flex wrap">
      <div class="item" v-for="(item, index) in item_list" :key="item.title + index" @click="$router.push(`/news/${index}?type=${item.type}`)" v-show="item.type === currentType">
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
  }
}

.container {
  width: size(496 * 3 + 72 + 36);
  margin: size(50) auto size(170);
}

.item {
  width: size(496);
  height: size(590);
  background-color: #fff;
  margin: 0 size(18) size(50);
  cursor: pointer;position: relative;
  &::after{content: "";position: absolute; width: 100%;height:100%;top: 0;left: 0;transition: all 0.3s;border: 1px solid #08b0;}
  &:hover:after{ height:100%;border: 1px solid #08b;transform: scale(1.04);}


  img {
    width: 100%;
    height: size(487);
    object-fit: cover;
  }

  .content {
    height: size(115);
    padding: 0 0;
  }

  .item-icon {
    width: size(70);
    height: size(70);
    margin-right: size(15);
  }

  .item-desc {
    width: size(410);
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
      margin-left: 0;
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
    margin: sizem(55) auto sizem(80);
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
      padding: 0;
    }

    .item-icon {
      width: sizem(43);
      height: sizem(43);
      margin-right: sizem(15);
    }

    .item-desc {
      width: sizem(260);
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.4;
      letter-spacing: sizem(0.9);
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
      currentType: 2,
      item_list: [
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '洲子洋重劃區親民價！「快樂王國」輕巧坪數2至3房成置產標的',
          img: require('../newimg/23/1.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '快樂王國2理享城　蘆洲捷運5分鐘　洲子洋唯一萬坪公園造鎮計畫',
          img: require('../newimg/22/1.png'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '高雄台積電2025營運 楠梓高大特區受惠 台積電員工首選',
          img: require('../newimg/21/1.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '有台積電就是狂！高雄新案單月賣破500戶 銷售率37%全國最威',
          img: require('../newimg/20/2.webp'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '台積電引領！打造高雄科技宜居新格局',
          img: require('../newimg/19/1.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '【好房網】中和新成屋攀上8字頭！專家揭不敗原因：高總價也買單',
          img: require('../newimg/18/2.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '【鏡周刊】新北「這區」CP值高！親民房價擄獲大量首購族芳心',
          img: require('../newimg/17/1.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '【住展房屋網】外貌協會，從建案外觀就知道他貴—雙北5大特色建築榜，住過就回不去了',
          img: require('../newimg/14/1.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '【idSHOW】跨界藝術｜與藝術零距離！將藝術融入生活，讓空間形塑獨有的人文氣息',
          img: require('../newimg/13/1.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '【Yahoo房地產】建案開案站穩8字頭',
          img: require('../newimg/12/1.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '【商周】萬隆捷運站新建案《自慢藏》 珍藏人生最美風景',
          img: require('../newimg/9/3e6e77c8-960a-1bf1-ea24-310cedcf7ef3.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '【蘋果新聞網】沅利建設十年磨一劍「自慢藏」台大水岸代表作公開',
          img: require('../newimg/10/3c47049f966d810b27760fa1a50b93fc.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '【中時新聞網】沅利建設攜手日本國土開發營造商 打造水岸宅「自...',
          img: require('../newimg/11/20210330002199.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '【中時新聞網】睽違20年 南勢角迎來首座鋼骨大樓',
          img: require('../newimg/8/中時1.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '【經濟日報】住宅安全受重視 中和地標「太陽帝國」全棟採鋼骨結...',
          img: require('../newimg/7/經濟1.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '【東森新聞】36層全棟鋼骨制震宅 南勢角建案太陽帝國熱銷',
          img: require('../newimg/6/東森.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '【中時新聞網】百萬自備款買新北三房 神采飛洋賣破七成',
          img: require('../newimg/5/中時2.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '【三立新聞】租不如買！「神采飛洋」區域最低價　入住洲子洋蛋...',
          img: require('../newimg/4/三立1.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '【中時新聞網】MUSE Design Awards得獎公布 台灣之光「碧...',
          img: require('../newimg/3/20201103002310.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '【東森新聞】坐擁全齡機能！新店碧波白兩代宅躍升換屋首選',
          img: require('../newimg/2/1.jpg'),
        },
        {
          icon: require('./s1/icon2.png'),
          type: 2,
          desc: '【東森新聞】翻修老屋不如換新房！ 換屋客搶進新店碧波白',
          img: require('../newimg/1/1.jpg'),
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
