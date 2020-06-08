<template>
  <div class="relative">
    <div v-if="!isMobile" class="c-content">
      <img
        src="./s4/1.jpg"
        alt=""
        class="img1 absolute"
      >
      <img
        src="./s4/2.jpg"
        alt=""
        class="img2 absolute"
      >
      <div class="line-top1 absolute"></div>
      <div class="line-top2 absolute"></div>
      <div class="line-top3 absolute"></div>
      <div class="line-left absolute"></div>
      <div class="line-center absolute"></div>
      <div class="line-right absolute"></div>
      <div class="line-bottom absolute"></div>
      <div class="title1 absolute">
        微風、三越、ATT、BELLAVITA<br />
        14間百貨頂尖美味時尚匯演
      </div>
      <div class="desc1 absolute">
        信義計畫區內高端豪宅、企業總部、五星酒店<br />
        還有逛不完的14家精品百貨與商場<br />
        讓你輕鬆享受全球頂尖時尚品味<br />
        和姊妹淘到A13 Lady M午茶歡聚<br />
        到微風南山46樓米其林The Ukai慶祝周年<br />
        100多家異國餐廳美食應有盡有<br /><br />
        全台首家APPLE旗艦體驗全方位服務<br />
        去華納威秀看場午夜場做Ending<br />
        信義誠品於5/29起成為24小時書店<br />
        逛完街就去沈浸在書香世界充實心靈
      </div>
      <div class="title2 absolute">
        忠孝東路五段一路錢進<br />東區門戶計畫點石成金
      </div>
      <div class="desc2 absolute">
        〔詠喆〕座落忠孝東路五段，市中心商圈中心點<br />
        交通大動脈-忠孝東路貫穿台北市主要商圈<br />
        東區商圈、敦南商圈、信義計畫區CBD發展成熟<br />
        忠孝東路板南線向東直達東區門戶南港站<br />
        南港車站CityLink、南港世界明珠、潤泰南港之心<br />
        北部流行音樂中心等大型開發建設匯聚<br />
        開啟東區新門戶大願景，未來翻轉錢景無限
      </div>
    </div>
    <div
      v-else
      class="c-content">
      <img
        src="./s4/1_m.jpg"
        alt=""
        class="img1 absolute"
      >
      <img
        src="./s4/2_m.jpg"
        alt=""
        class="img2 absolute"
      >
      <div class="line-top1 absolute"></div>
      <div class="line-top2 absolute"></div>
      <div class="line-top3 absolute"></div>
      <div class="line-center absolute"></div>
      <div class="line-center2 absolute"></div>
      <div class="line-bottom absolute"></div>
      <div class="title1 absolute">
        微風、三越、ATT、BELLAVITA<br />
        14間百貨頂尖美味時尚匯演
      </div>
      <div class="desc1 absolute">
        信義計畫區內高端豪宅、企業總部、五星酒店，還有逛不完的14家精品百貨與商場，讓你輕鬆享受全球頂尖時尚品味，和姊妹淘到A13 Lady M午茶歡聚、到微風南山46樓米其林The Ukai慶祝周年，100多家異國餐廳美食應有盡有。全台首家APPLE旗艦體驗全方位服務、去華納威秀看場午夜場做Ending，信義誠品於5/29起成為24小時書店，逛完街就去沈浸在書香世界充實心靈。
      </div>
      <div class="title2 absolute">
        忠孝東路五段一路錢進<br />東區門戶計畫點石成金
      </div>
      <div class="desc2 absolute">
        〔詠喆〕座落忠孝東路五段，市中心商圈中心點，交通大動脈-忠孝東路貫穿台北市主要商圈，東區商圈、敦南商圈、信義計畫區CBD發展成熟，忠孝東路板南線向東直達東區門戶南港站，南港車站CityLink、南港世界明珠、潤泰南港之心、北部流行音樂中心等大型開發建設匯聚，開啟東區新門戶大願景，未來翻轉錢景無限。
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  height: size(1600);
  overflow: hidden;
  top: size(115);
  position: relative;
}
.c-content {
  width: size(1690);
  height: size(1600);
  margin:0 0 0 size(115);
  position: relative;
}

.img1 {
  top: 0;
  left: 0;
  width: size(845);
  z-index: 1;
}

.img2 {
  bottom: 0;
  right:0;
  width: size(845);
  z-index: 1;
}

.white-line {
  width: 100vw;
  height: size(20);
  background-color: #fff;
  top: size(781);
}

.line-bottom {
  background-color: #bf1b12;
  z-index: 1;
  width: 100vw;
  height: 1px;
  bottom: 0;
  left:calc(50% - 50vw);
}

.line-top1 {
  background-color: #bf1b12;
  z-index: 1;
  width: size(960);
  height: 1px;
 right: 50%;
  top: size(723);
}

.line-top2 {
  background-color: #bf1b12;
  z-index: 1;
  width: size(960);
  height: 1px;
  left:50%;
  top: size(285);
}

.line-top3 {
  background-color: #bf1b12;
  z-index: 1;
  width: size(960);
  height: 1px;
  right:50%;
  top: size(1001);
}

.line-left {
  background-color: #bf1b12;
  z-index: 1;
  left:0;
  width: 1px;
  height: size(723);
}

.line-center {
  background-color: #bf1b12;
  z-index: 1;
  left: 0;
  width: 1px;
  height: size(1600);
  right: 0;
  margin: 0 auto;
}

.line-right {
  background-color: #bf1b12;
  z-index: 1;
  right: 0;
  top: size(285);
  width: 1px;
  height: size(1600 - 285);
}

.title1 {
  font-size: size(41);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: normal;
  text-align: left;
  color: #bb1a12;
  left: 50%;
  padding: 0 0 0 size(61);
  top:0;
  align-items: center;
  height: size(285);
  display: flex;
}

.desc1 {
  //width: size(602);
  top: size(285);
  font-size: size(30);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #1a1311;
  left: 50%;
  padding: 0 0 0 size(61);
  align-items: center;
  height: size(850);
  display: flex;
}

.title2 {
  //width: size(414);
  font-size: size(41);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: normal;
  text-align: left;
  color: #bb1a12;
  left:0;
  padding: 0 0 0 size(61);
  top: size(793);
}

.desc2 {
  //width: size(650);
  top: size(363 + 723);
  left:0;
  padding: 0 0 0 size(61);
  font-size: size(30);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align:justify;
  color: #1a1311;
}
@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    height: size-m(589);
  }
  .c-content{height:100%;}
  .img1 {
    top: 0;
    right:size-m(-22);
    left: auto;
    width: size-m(137);
    z-index: 1;
  }

  .img2 {
    bottom: 0;
    left:size-m(-22);
    right: auto;
    width: size-m(158);
    z-index: 1;
  }

  .line-top1 {
    background-color: #bf1b12;
    z-index: 1;
    width: size-m(237);
    height: 1px;
    left:size-m(-22);
    top: size-m(69);
  }

  .line-top2 {
    background-color: #bf1b12;
    z-index: 1;
    width: 100vw;
    height: 1px;
    right: 0;
    left:size-m(-22);
    top: size-m(310);
  }

  .line-top3 {
    background-color: #bf1b12;
    z-index: 1;
    width: 100vw;
    height: 1px;
    left:size-m(-22);
    top: size-m(382);
  }

  .line-center {
    background-color: #bf1b12;
    z-index: 1;
    left: size-m(215);
    width: 1px;
    height: size-m(311);
    right: auto;
    top: 0;
  }

  .line-center2 {
    background-color: #bf1b12;
    z-index: 1;
    left: size-m(136);
    width: 1px;
    height: size-m(278);
    right: auto;
    top: size-m(310);
  }

  .white-line {
    top: size-m(301);
    height: size-m(20);
  }

  .title1 {
    width: size-m(250);
    font-size: size-m(14);
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: normal;
    text-align: left;
    color: #bb1a12;
    left:0;
    right: auto;
    padding: 0;
    top: size-m(0);
    height: size-m(70);
  }

  .desc1 {
    width: size-m(200);
    top: size-m(85);
    left: 0;
    right: auto;
    font-size: size-m(11.4);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: left;
    color: #1a1311;
    height: size-m(210);
    padding: 0;
  }

  .title2 {
    width: size-m(200);
    font-size: size-m(14);
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: normal;
    text-align: left;
    color: #bb1a12;
    left: size-m(151);
    right: auto;
    top: size-m(323);
    padding: 0;
  }

  .desc2 {
    width: size-m(175);
    top: size-m(400);
    left: size-m(151);
    font-size: size-m(11.4);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align:justify;
    color: #1a1311;
    padding: 0;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section4',

  components: {},
  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
