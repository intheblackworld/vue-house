<template>
  <div class="section2">
    <!-- <div class="title1">
      好的建築，不需用言語訴說
    </div>
    <div class="title2">
      好的生活，讓生命真切感動
    </div> -->
    <div class="container flex wrap">
      <div class="item" v-for="(item, index) in item_list" :key="item.title + index">
        <img :src="item.img" :alt="`${info.caseName}`">
        <div class="add"></div>
        <div class="content flex flex-ac" v-if="!item.isEmpty">
          <div class="item-title flex-c" v-html="item.title"></div>
          <div class="item-desc flex-ac" v-html="item.desc"></div>
        </div>
        <div class="content flex-c" v-if="item.isEmpty">
          <div class="item-coming">Coming soon</div>
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

.title1 {
  @include img_l_pc(596, -206, 1089);
  font-size: size(32);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.74;
  letter-spacing: size(7.36);
  text-align: left;
  color: #333333;
  white-space: nowrap;
  z-index: 3;
}

.title2 {
  @include img_r_pc(496, -156, 234);
  font-size: size(32);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.74;
  letter-spacing: size(7.36);
  text-align: left;
  color: #333333;
  white-space: nowrap;
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

  .add {
  }

  img {
    width: 100%;
    height: size(487);
    object-fit: cover;
  }

  .content {
    height: size(130);
  }

  .item-title {
    width: 30%;
    font-size: size(36);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.05;
    letter-spacing: size(0.72);
    text-align: left;
    color: #000000;
  }

  .item-desc {
    width: 70%;
    font-size: size(20);
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
      item_list: [
        {
          title: '碧波白',
          desc:
            '新北市｜新店區<br />23-49坪‧ 70‧78坪大戶雙併<br />走遍千山萬水 還是碧潭最美',
          img: require('../hot/s1/imgbg.jpg'),
          isEmpty: false,
        },
        {
          title: '陽光<br />PARK',
          desc: '新北市｜新店區<br />27-54坪<br />新店陽光公園特區生態建築',
          img: require('../hot/s1/imgbg.jpg'),
          isEmpty: false,
        },
        {
          title: '神采<br />飛洋',
          desc:
            '新北市｜洲子洋重劃區<br />2房(15、20坪)｜3房(25、33坪)<br />公園 校園 花園 誠徵有園人',
          img: require('../hot/s1/imgbg.jpg'),
          isEmpty: false,
        },
        {
          title: '太陽<br />帝國',
          desc:
            '新北市｜中和區<br />19-39坪 2-3房<br />不是王牌不出手 唯有贏家能出手',
          img: require('../hot/s1/imgbg.jpg'),
          isEmpty: false,
        },
        {
          title: '',
          desc: '',
          img: require('../hot/s1/imgbg.jpg'),
          isEmpty: true,
        },
        {
          title: '',
          desc: '',
          img: require('../hot/s1/imgbg.jpg'),
          isEmpty: true,
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
