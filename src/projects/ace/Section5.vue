<template>
  <div class="section5">
    <img src="./s5/bg.png" :alt="`${info.caseName}_bgimg`" class="bg" v-if="isPC">
    <img src="./mo/w2.png" :alt="`${info.caseName}_bgimg`" class="bg" v-if="isMobile">
    <div class="title">
      四大王牌
    </div>
    <h1 class="subtitle" v-if="isPC">
      國際團隊打造 時尚精品飯店宅
    </h1>
    <h1 class="subtitle" v-if="isMobile">
      國際團隊打造<br />時尚精品飯店宅
    </h1>
    <div class="desc flex-c">
      買名牌包 不如收藏精品宅
    </div>
    <div class="imgs flex-ac flex-jb wrap">
      <img src="./s5/1.jpg" :alt="`${info.caseName}_img1`" @click="showDialog(0)">
      <img src="./s5/2.jpg" :alt="`${info.caseName}_img2`" @click="showDialog(1)">
      <img src="./s5/3.jpg" :alt="`${info.caseName}_img3`" @click="showDialog(2)">
      <img src="./s5/4.jpg" :alt="`${info.caseName}_img4`" @click="showDialog(3)">
    </div>
    <div :class="`dialog ${isDialog ? 'active' : ''}`">
      <img src="./all/close.png" :alt="`${info.caseName}_close`" class="dialog-close" @click="isDialog = false">
      <div class="dialog-title" v-html="dialogData.title"></div>
      <h1 class="dialog-subtitle" v-html="dialogData.subtitle"></h1>
      <div class="dialog-label flex-ac" v-html="dialogData.label"></div>
      <div class="dialog-desc" v-html="dialogData.desc"></div>
      <div class="dialog-work" v-html="dialogData.work"></div>
      <div class="dialog-imgs">
        <img :src="dialogData.imgs[0].img" :alt="`${info.caseName}_img`">
        <img :src="dialogData.imgs[1].img" :alt="`${info.caseName}_img`">
        <div class="dialog-name1" v-html="dialogData.imgs[0].name"></div>
        <div class="dialog-name2" v-html="dialogData.imgs[1].name"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height: size(1080);
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg {
  @include img_r_pc(1655, 0, 132);
}

.title {
  @include img_c_pc(180, 123);
  font-size: size(45);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.36;
  letter-spacing: normal;
  text-align: left;
  color: #285065;
  white-space: nowrap;
}

.subtitle {
  @include img_c_pc(636, 188);
  font-size: size(48);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.22;
  letter-spacing: normal;
  text-align: left;
  color: #685335;
  white-space: nowrap;
}

.desc {
  @include img_c_pc(356, 290);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.08;
  letter-spacing: size(-1.2);
  text-align: left;
  color: #ffffff;
  background-color: #685335;
}

.imgs {
  @include div_c_pc(302 * 4 + 28 * 3, 430, 385);

  img {
    width: size(302);
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: rotateY(-180deg);
    }
  }
}

.dialog {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-image: url('./menu/bg.jpg');
  background-size: cover;
  left: 100%;
  top: 0;
  transition: left 1s;
  z-index: 1000;

  &.active {
    left: 0;
  }

  .dialog-title {
    @include img_l_pc(145, 200, 325);
    font-size: size(37);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 5.56;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .dialog-subtitle {
    @include img_l_pc(288, 334, 325);
    font-size: size(48);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: normal;
    text-align: left;
    color: #c4a06d;
    white-space: nowrap;

    span {
      color: #fff;
    }
  }

  .dialog-label {
    @include div_l_pc(615, 47, 473, 325);
    font-size: size(30);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.15;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    background-color: #c7a26e;
    white-space: nowrap;
  }

  .dialog-desc {
    @include img_l_pc(584, 544, 325);
    font-size: size(24);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.02;
    letter-spacing: size(-0.48);
    text-align: left;
    color: #ffffff;
    // white-space: nowrap;
  }

  .dialog-work {
    @include img_l_pc(580, 787, 325);
    font-size: size(27.1);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: size(0.54);
    text-align: left;
    color: #c7a26e;
    // white-space: nowrap;
  }

  .dialog-imgs {
    @include img_l_pc(600, 115, 985);
    img {
      width: 100%;
      margin-bottom: size(20);
      border-radius: size(45);
    }

    .dialog-name1 {
      @include img_r_pc(132, 370, 64);
      font-size: size(22);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.35;
      letter-spacing: normal;
      text-align: right;
      color: #ffffff;
      white-space: nowrap;
    }
    .dialog-name2 {
      @include img_r_pc(132, 805, 64);
      font-size: size(22);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.35;
      letter-spacing: normal;
      text-align: right;
      color: #ffffff;
      white-space: nowrap;
    }
  }

  .dialog-close {
    width: size(61);
    top: size(40);
    right: size(49);
    position: absolute;
    cursor: pointer;
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
    height: sizem(667);
    min-height: sizem(667);
  }

  .bg {
    @include img_r_m(375, 0, 0);
  }

  .title {
    @include img_l_m(96, 32, 141);
    font-size: sizem(24);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.33;
    letter-spacing: normal;
    text-align: left;
    color: #285065;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(210, 77, 82);
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: center;
    color: #685335;
    white-space: nowrap;
  }

  .desc {
    @include div_l_m(310, 27, 160, 31);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.07;
    letter-spacing: sizem(0.3);
    text-align: center;
    color: #ffffff;
    background-color: #685335;
  }

  .imgs {
    @include div_c_m(149 * 2 + 12, 440, 200);

    img {
      width: sizem(150);
      cursor: pointer;
      transition: transform 0.3s;
      &:hover {
        transform: rotateY(-180deg);
      }
    }
  }

  .dialog {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-image: url('./menu/bg.jpg');
    background-size: cover;
    left: 100%;
    top: 0;
    transition: left 1s;
    z-index: 1000;

    &.active {
      left: 0;
    }

    .dialog-title {
      @include img_l_pc(145, 200, 325);
      font-size: size(37);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 5.56;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
      white-space: nowrap;
    }

    .dialog-subtitle {
      @include img_l_pc(288, 334, 325);
      font-size: size(48);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.18;
      letter-spacing: normal;
      text-align: left;
      color: #c4a06d;
      white-space: nowrap;

      span {
        color: #fff;
      }
    }

    .dialog-label {
      @include div_l_pc(615, 47, 473, 325);
      font-size: size(30);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.15;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
      background-color: #c7a26e;
      white-space: nowrap;
    }

    .dialog-desc {
      @include img_l_pc(584, 544, 325);
      font-size: size(24);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.02;
      letter-spacing: size(-0.48);
      text-align: left;
      color: #ffffff;
      // white-space: nowrap;
    }

    .dialog-work {
      @include img_l_pc(580, 787, 325);
      font-size: size(27.1);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.48;
      letter-spacing: size(0.54);
      text-align: left;
      color: #c7a26e;
      // white-space: nowrap;
    }

    .dialog-imgs {
      @include img_l_pc(600, 115, 985);
      img {
        width: 100%;
        margin-bottom: size(20);
        border-radius: size(45);
      }

      .dialog-name1 {
        @include img_r_pc(132, 370, 64);
        font-size: size(22);
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.35;
        letter-spacing: normal;
        text-align: right;
        color: #ffffff;
        white-space: nowrap;
      }
      .dialog-name2 {
        @include img_r_pc(132, 805, 64);
        font-size: size(22);
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.35;
        letter-spacing: normal;
        text-align: right;
        color: #ffffff;
        white-space: nowrap;
      }
    }

    .dialog-close {
      width: size(61);
      top: size(40);
      right: size(49);
      position: absolute;
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section5',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      dialogData: {},
      item_list: [
        {
          title: '建築王牌',
          subtitle: '國際級建築贏家<br /><span>PTW</span>王牌登場',
          label: '131年澳洲建築設計先驅‧不是王牌不出手',
          desc:
            '超越一世紀建築經驗，PTW僅精挑地王打造國際級地標建築，以高度美學語彙雋永鑄刻，每一出手必締造令人驚豔的傳世經典。「太陽帝國」王牌造型積層堆疊出碩大宏偉外觀，以36層雲端高度擎起建築美學新標竿，是大台北的第一次，更是台灣建築史上嶄新的一次。',
          work:
            '代表作品：One Central Park、雪梨Lumiere北京 水立方、杜拜 Paim Jebel',
          imgs: [
            {
              img: require('./s5/1-1.jpg'),
              name: '北京 水立方',
            },
            {
              img: require('./s5/1-2.jpg'),
              name: '碧波白',
            },
          ],
        },
        {
          title: '燈光王牌',
          subtitle: '<span>燈光巨擘</span>蘭克斯<br />王牌天廈全城聚焦',
          label: '36層鋼骨地標耀眼世界‧不容忽視的豔羨目光',
          desc:
            '從台北101到仁愛帝寶，蘭克斯以半世紀燈光專業，點亮無數國際級建築地標。隨時段靈動調整的光線層次角度，映照出建築最美的光影，創造的不只是雋永美學價值，更凝聚出全城仰望的城市地景，為旅人指引回家的方向。',
          work: '代表作品：台北101、仁愛帝寶、W Hotel<br />澳門威尼斯人酒店',
          imgs: [
            {
              img: require('./s5/2-1.jpg'),
              name: '仁愛帝寶',
            },
            {
              img: require('./s5/2-2.jpg'),
              name: '台北101',
            },
          ],
        },
        {
          title: '空間王牌',
          subtitle: '史上最華麗展演<br />盛情款待<span>王與后</span>',
          label: '美國Muse大獎．百年一遇精品訂製空間',
          desc:
            '德國iF DESIGN、German Design Award、義大利A’Design大獎設計名師袁世賢，以生活的立體感知為基底，透過光影轉換借景入境，讓太陽帝國休閒會所不僅是頂級社交休閒場域，更成為家的空間延展，散發無限美學張力。',
          work: '代表作品：台北美麗信花園酒店、台南煙波大飯店、桂田磐古、璽園',
          imgs: [
            {
              img: require('./s5/3-1.jpg'),
              name: '山水裊裊',
            },
            {
              img: require('./s5/3-2.jpg'),
              name: '台南煙波酒店',
            },
          ],
        },
        {
          title: '景觀王牌',
          subtitle: '信義豪宅御用<br /><span>景觀生態</span>之王',
          label: '國際建築視野‧城市花園綠藝新觀',
          desc:
            '北市億元豪宅「信義豪宅御用」空中花園競圖第一名，專為頂級建築打造會呼吸的城市綠帶，完美融合建築物與環境界線，使空間與土地產生最自然連結。戶外庭園不只是家向世界延伸的舞台，更是城市中具永續生態視野的最美地景。',
          work: '代表作品：維多利亞酒店、碧波白',
          imgs: [
            {
              img: require('./s5/3-1.jpg'),
              name: '維多利亞酒店',
            },
            {
              img: require('./s5/3-2.jpg'),
              name: '碧波白',
            },
          ],
        },
      ],
    }
  },

  methods: {
    showDialog(index) {
      this.dialogData = this.item_list[index]
      this.slideList = this.item_list[index].imgs
      this.isDialog = true
    },
  },

  created() {},

  mounted() {
    this.dialogData = this.item_list[0]
  },

  computed: {},
}
</script>
