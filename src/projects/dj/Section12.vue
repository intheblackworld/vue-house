<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        v-lazy="require('./s12/bg.jpg')"
        alt=""
        class="bg-img"
      >
      <div
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Human scale
      </div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        - 人性尺度 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="700"
        data-aos-offset="-500"
      >

        空間大一點 用心多一點<br />生活不止好一點點
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="900"
        data-aos-offset="-500"
      >
        豐郡建設回歸人性尺度，拒絕因應市場潮流，限縮生活空間，只為多隔一房，無論兩房、三房均規劃獨立廚房，大展廚藝不必擔心油煙問題；<br /><br />貼心規劃前後陽台，客廳前陽台可作為蒔花弄草的空間，另有獨立工作陽台，洗曬衣物，不必擔心隱私的困擾。
      </div>
    </div>
    <div v-else class="relative">
      <img
        v-lazy="require('./mo/12/bg.jpg')"
        alt=""
        class="bg-img"
      >
      <div
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Human scale
      </div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        - 人性尺度 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="700"
      >

        空間大一點 用心多一點<br />生活不止好一點點
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        豐郡建設回歸人性尺度，拒絕因應市場潮流，限縮生活空間，只為多隔一房，無論兩房、三房均規劃獨立廚房，大展廚藝不必擔心油煙問題；<br /><br />貼心規劃前後陽台，客廳前陽台可作為蒔花弄草的空間，另有獨立工作陽台，洗曬衣物，不必擔心隱私的困擾。
      </div>
    </div>
    <div class="newbox">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 980.73 257.1"
        data-aos="fade-right"
        data-aos-delay="800"
        data-aos-offset="0">
        <defs>
          <linearGradient id="svgtxt" x1="266.15" y1="188.98" x2="980.73" y2="188.98" gradientTransform="matrix(1, 0, 0, -1, 0, 237.58)" gradientUnits="userSpaceOnUse">
            <stop offset="0.07" stop-color="#97c420"/>
            <stop offset="0.2" stop-color="#8ab924"/><stop offset="0.53" stop-color="#6a9f2e"/>
            <stop offset="0.81" stop-color="#579034"/><stop offset="1" stop-color="#508a36"/>
          </linearGradient>
        </defs>
          <g id="圖層_2" data-name="圖層 2">
            <rect class="cls-1" x="266.15" width="714.58" height="97.2"/>
          <g class="cls-2">
          <text class="cls-3" transform="translate(267.62 172.62)">歡迎來當現成房東！</text>
          <text class="cls-3" transform="translate(267.62 220.84)">40/47坪 限量四戶 馬上收租</text>
          </g>
          <rect class="cls-5" y="29.07" width="628.42" height="81"/>
          <g class="cls-2"><text class="cls-6" transform="translate(299.62 85.01)">挑高6米金店面</text></g>
          <text class="cls-9" transform="translate(645.21 79.13)">包租3年</text>
          <line class="cls-10" x1="916.87" y1="65.89" x2="935.76" y2="65.89"/>
          <line class="cls-10" x1="265.93" y1="65.89" x2="284.82" y2="65.89"/>
          </g>
      </svg>
      <img
        v-lazy="require('./s12/img1.png')"
        alt=""
        class="bg-img"
        data-aos="fade-left"
        data-aos-delay="1000"
        data-aos-offset="0"
      >
    </div>
  </div>
</template>
<style lang="scss">
.cls-1{fill:url(#svgtxt);}
          .cls-2,.cls-3,.cls-4,.cls-6,.cls-7,.cls-8,.cls-9{isolation:isolate;}
          .cls-3,.cls-4{font-size:34.63px;fill:#231815;font-family:NotoSansCJKtc-Medium-B5pc-H, Noto Sans CJK TC;}
          .cls-4{letter-spacing:-0.5em;}.cls-5{fill:#262e37;}.cls-6,.cls-7,.cls-8{font-size:44.07px;}
          .cls-6,.cls-7,.cls-8,.cls-9{fill:#fff;font-family:NotoSansCJKtc-Bold-B5pc-H, Noto Sans CJK TC;}.cls-6{letter-spacing:0.04em;}
          .cls-7{letter-spacing:-0.1em;}.cls-8{letter-spacing:0.04em;}.cls-9{font-size:69.13px;letter-spacing:0.04em;}
          .cls-10{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:3.26px;}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
}
.bg-img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}
.newbox{
  background: #DAD923;
  position: relative;
  height: size(357);
  text-align: left;
  svg{height: 100%;width:size(980);}
  img{position: absolute ;right: 0;top: size(10);
  left: auto;
  height:size(325);width: auto;}
}
.title {
  font-family: TrajanPro;
  font-size: size(60);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: -2.37px;
  text-align: left;
  color: #808080;
  top: size(72);
  left: size(248);
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;

  &::before {
    content: '';
    display: block;
    width: size(248);
    left: size(-268);
    position: absolute;
    height: 3px;
    margin-top: -5px;
    background-color: #312219;
  }

  &::after {
    content: '';
    display: block;
    width: 2000px;
    height: 3px;
    margin-left: size(20);
    margin-top: -15px;
    background-color: #312219;
  }
}

.desc {
  font-size: size(44);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: 1.76px;
  text-align: left;
  color: #231815;
  top: size(145);
  left: size(251);
}

.img-title {
  font-size: size(35);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: normal;
  text-align: left;
  color: #231815;
  top: size(278);
  left: size(258);
}

.img-desc {
  font-size: size(20);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: 1.2px;
  text-align:justify;
  color: #231815;
  top: size(417);
  left: size(258);
  width: size(390);
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
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
  .bg-img {
    height: auto;
    object-fit: cover;
  }

  .title {
    font-size: size-m(26);
    top: size-m(36);
    left: size-m(30);
    
    &::before {
      content: '';
      display: block;
      width: size-m(51);
      left: size-m(-65);
      position: absolute;
      margin-top: -2px;
      height: 2px;
      // background-color: #fff;
    }

    &::after {
      content: '';
      display: block;
      width: 2000px;
      height: 2px;
      margin-top: -2px;
      margin-left: size-m(20);
      // background-color: #fff;
    }
  }

.newbox{
  overflow: hidden;
  height: size-m(310);
  svg{height:auto;width:size-m(430);left:size-m(-85);top: size-m(30);
  position: relative;}
  img{top: size-m(150);
  height:auto;width: size-m(360);}
}
  .desc {
    font-size: size-m(17);
    top: size-m(69);
    left: size-m(30);
  }

  .img-title {
    width: size-m(236);
    font-size: size-m(18);
    top: size-m(120);
    left: size-m(30);
  }

  .img-desc {
    width: size-m(300);
    font-size: size-m(13);
    top: size-m(185);
    left: size-m(30);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section10',

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
