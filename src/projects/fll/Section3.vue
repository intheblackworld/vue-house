<template>
  <div class="section3 flex">
    <img src="./s3/style_1.png" :alt="`${info.caseName}_img`" class="style1">
    <img src="./s3/style_2.png" :alt="`${info.caseName}_img`" class="style2">
    <img src="./s3/style_2.png" :alt="`${info.caseName}_img`" class="style3">
    <div class="content">
      <div class="title">
        自住，收租，租客廣，租金強<br />
        <span>買對好房子，富就來了！</span>
      </div>
      <div class="line"></div>
      <div class="desc">
        3分鐘直上湖口交流道、10分鐘五楊高架橋，散步到仁和商圈及便利商店7-11，華興國小、中正國中上學趣，華興公園及中華公園休閒樂活。
        不僅生活機能俱全，位於車程約10分鐘的台元科技園區，基地總面積計約6萬坪，進駐公司約300家、員工數約2萬人，持續帶動就業及居住需求，讓富來樂成為自住、置產的機能首選宅！
      </div>
    </div>
    <img src="./s3/mouse.png" :alt="`${info.caseName}_img`" class="mouse">
    <div class="right flex-jb">
      <div class="img-list">
        <img src="./s3/img1.png" :alt="`${info.caseName}_img`" class="img img1">
        <img src="./s3/img2.png" :alt="`${info.caseName}_img`" class="img img2">
        <img src="./s3/img3.png" :alt="`${info.caseName}_img`" class="img img3">
      </div>
      <div class="list">
        <div class="item" v-for="(item, index) in item_list" :key="item.title + index">
          <div class="item-title" v-html="item.title"></div>
          <div class="item-desc">
            {{item.address1}}
            <img :src="item.icon" :alt="`${info.caseName}_img`" class="item-icon">
            {{item.time1}}
          </div>
          <div class="item-desc">
            {{item.address2}}
            <img :src="item.icon" :alt="`${info.caseName}_img`" class="item-icon">
            {{item.time2}}
          </div>
        </div>
      </div>
      <div class="img-list">
        <img src="./s3/img4.png" :alt="`${info.caseName}_img`" class="img img4">
        <img src="./s3/img5.png" :alt="`${info.caseName}_img`" class="img img5">
        <img src="./s3/img6.png" :alt="`${info.caseName}_img`" class="img img6">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section3 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  // max-height: size(1080);
  //overflow: hidden;
  // position: relative;
  // background-image: url('./s1/01_bg.jpg');
  background-color: #fff;
  background-size: cover;
  background-attachment: fixed;

  // margin: 0 0 size(400) 0;

  // &:before {
  //   content: ' ';
  //   position: fixed;
  //   z-index: -1;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: url('./s1/bg.jpg') center 0 no-repeat;
  //   background-size: cover;
  // }
}

.bg-img {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;
}

.content {
  width: size(621);
  height: 100%;
  min-height: size(1080);
  background: #bccf00;
  padding-top: size(148);
  display: flex;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}

.title {
  font-size: size(37);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.84;
  letter-spacing: size(2.22);
  text-align: left;
  color: #cf0065;
  white-space: nowrap;
  span {
    font-size: size(46);
    letter-spacing: size(2.76);
  }
}

.desc {
  width: size(487);
  font-size: size(22);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.44;
  letter-spacing: size(0.22);
  text-align: left;
  color: #000000;
  white-space: normal;
}

.line {
  width: size(485);
  margin: size(10) 0;
  border-top: 1.5px solid #231815;
}

.right {
  width: size(1920 - 621);
  position: relative;
  z-index: 1;
}

.img-list {
  width: size(483);

  > img {
    width: 100%;
    height: size(361);
    object-fit: cover;
  }
}

.list {
  width: size(333);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding-top: size(138);

  .item {
    width: size(317);
  }

  .item-title {
    width: 100%;
    height: size(50);
    background-image: url('./s3/title_bg.png');
    background-size: cover;
    font-size: size(33);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.7;
    letter-spacing: size(1.98);
    text-align: center;
    color: #cf0065;
  }

  .item-desc {
    font-size: size(23);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: size(-0.64);
    text-align: left;
    color: #000000;
    margin-top: size(10);
    margin-left: size(48);
    display: flex;
    align-items: center;

    img {
      margin: 0 size(15);
    }
  }
}

.mouse {
  @include img_l_pc(245, 0, 308);
  top: auto;
  bottom: 0;
}

.style1 {
  @include img_l_pc(356, 762, -178);
  opacity: 0.3;
  z-index: 1;
  animation: bling 1s 0.3s ease-in-out infinite alternate;
}

.style2 {
  @include img_l_pc(469, 930, 952);
  opacity: 0.3;
  animation: bling 1.2s 0.5s ease-in-out infinite alternate;
}

.style3 {
  @include img_r_pc(469, -25, 275);
  transform: rotate(180deg);
  opacity: 0.3;
  animation: bling 1.5s 0s ease-in-out infinite alternate;
}

@keyframes bling {
  to {
    opacity: 1;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section3 {
    width: 100vw;
    min-height: sizem(666);
    max-height: sizem(750);
    height: sizem(666);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
    // &:before {
    //   background-image: url('./s1/bg_m.jpg');
    // }
  }

  .logo {
    @include img_c_m(184, 126);
  }

  .linear-dark {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
  }

  .partical-bg {
    @include div_l_m(375, 667, -320, 100);
    transform: rotate(-65deg);
    overflow: hidden;

    > div {
      position: absolute;
      width: 100%;
      height: sizem(667);
    }
  }
  .title {
    @include img_c_m(254, 244);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
    font-size: sizem(30);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.88;
    letter-spacing: sizem(1.8);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include img_c_m(302, 312);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
    font-size: sizem(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.4;
    letter-spacing: sizem(1.2);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include div_c_m(303, 35, 372);
    text-shadow: none;
    font-size: sizem(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: sizem(1.2);
    text-align: center;
    color: #253a7e;
    background-color: rgba(255, 255, 255, 0.82);
  }

  .label {
    @include div_c_m(239, 61, 487);
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
    font-size: sizem(16);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.42;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    background-color: #0097e2;
  }

  .btn {
    @include img_c_m(168, 526);
    font-size: sizem(18);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    background-color: #0097e2;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section3',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      // blockIndex: 0,
      item_list: [
        {
          title: '工作',
          address1: '新竹工業園區',
          address2: '台元科技園區',
          time1: '5min',
          time2: '10min',
          icon: require('./s3/car.png'),
        },
        {
          title: '交通',
          address1: '湖口交流道',
          address2: '五楊高架橋',
          time1: '3min',
          time2: '10min',
          icon: require('./s3/car.png'),
        },
        {
          title: '商圈',
          address1: '仁和商圈',
          address2: '便利商店7-11',
          time1: '1min',
          time2: '3min',
          icon: require('./s3/walk.png'),
        },
        {
          title: '校園',
          address1: '華興國小',
          address2: '中正國中',
          time1: '8min',
          time2: '5min',
          icon: require('./s3/walk.png'),
        },
        {
          title: '公園',
          address1: '華興公園',
          address2: '中華公園',
          time1: '3min',
          time2: '6min',
          icon: require('./s3/walk.png'),
        },
      ],
    }
  },

  methods: {},

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {},
}
</script>
