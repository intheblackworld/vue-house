<template>
  <div class="relative">
    <div v-if="!isMobile">
      <div class="title absolute">
        <span>市中心的建築哲人</span> 展宜建築 X創研空間
      </div>
      <img
        src="./s5/1.jpg"
        alt=""
        class="img absolute"
      >
      <div class="white-line absolute"></div>
      <div class="line-top1 absolute"></div>
      <div class="line-top2 absolute"></div>
      <div class="line-left absolute"></div>
      <div class="line-center absolute"></div>
      <div class="line-right absolute"></div>
      <div class="line-bottom absolute"></div>
      <div class="desc absolute">
        2005年來，展宜建築攜手創研空間<br />
        堅持建築不在複製，而在創作<br />
        把蓋房子，當成是一種藝術創作<br />
        拒絕規格化和複製品，不做產品，只做作品<br />
        繼展宜建築〔拿雲〕、〔摘月〕人文美學系列<br />
        精選忠孝東路、信義商圈雙王者地段<br />
        在2020吟詠都會輕盈的建築新篇章
      </div>
      <div class="years absolute">
        2007<br />
        2008<br />
        2009<br />
        2010<br />
        2011<br />
        2012<br />
        2013<br />
        2014<br />
        2015<br />
        2018<br />
        2019
      </div>
      <div class="list absolute">
        展宜麗水 /大安區麗水街<br />
        展宜浦城 /大安區浦城街<br />
        展宜臨沂 /中正區臨沂街<br />
        展宜仁愛 /中正區仁愛路<br />
        展宜仁沂蜂巢的家 /中正區仁愛路<br />
        展宜有一個圓 /中正區同安街<br />
        展宜時間之外 /內湖區內湖路<br />
        展宜拿雲/中正區新生南路<br />
        阿都蘭A’tolan house /台東<br />
        展宜摘月 /中正區臨沂街<br />
        元氣御守 /中正區福州街
      </div>
    </div>
    <div
      v-else
      class="relative"
    >
      <div class="title absolute">
        <span>市中心的建築哲人</span> 展宜建築 X創研空間
      </div>
      <img
        src="./s5/1_m.jpg"
        alt=""
        class="img absolute"
      >
      <img
        src="./s5/2_m.jpg"
        alt=""
        class="img img2 absolute"
      >
      <div class="desc absolute">
        2005年來，展宜建築攜手創研空間<br />
        堅持建築不在複製，而在創作<br />
        把蓋房子，當成是一種藝術創作<br />
        拒絕規格化和複製品，不做產品，只做作品<br />
        繼展宜建築〔拿雲〕、〔摘月〕人文美學系列<br />
        精選忠孝東路、信義商圈雙王者地段<br />
        在2020吟詠都會輕盈的建築新篇章
      </div>
      <div class="m-list1 absolute">
        <span>2007</span>展宜麗水 /<b>大安區麗水街</b><br />
        <span>2008</span>展宜浦城 /<b>大安區浦城街</b><br />
        <span>2009</span>展宜臨沂 /<b>中正區臨沂街</b><br />
        <span>2010</span>展宜仁愛 /<b>中正區仁愛路</b><br />
        <span>2011</span>展宜仁沂蜂巢的房子 /<b>中正區仁愛路</b><br />
        <span>2012</span>展宜有一個圓 /<b>中正區同安街</b>
      </div>
      <div class="m-list2 absolute">
        <span>2013</span>展宜時間之外 /<b>內湖區內湖路</b><br />
        <span>2014</span>展宜拿雲 /<b>中正區新生南路</b><br />
        <span>2015</span>阿都蘭A’tolan house /<b>台東</b><br />
        <span>2018</span>展宜摘月 /<b>中正區臨沂街</b><br />
        <span>2019</span>元氣御守 /<b>中正區福州街</b>
      </div>
      <div class="line-bottom absolute"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  height: size(1320);
  overflow: hidden;
}

.img {
  top: size(197);
  left: size(115);
  width: size(1690);
  z-index: 1;
}

.white-line {
  width: 100vw;
  height: size(20);
  background-color: #fff;
  top: size(285);
}

.line-top1 {
  background-color: #bf1b12;
  z-index: 1;
  width: 100vw;
  height: 1px;
  top: size(195);
}

.line-top2 {
  background-color: #bf1b12;
  z-index: 1;
  width: 100vw;
  height: 1px;
  top: size(595);
}

.line-bottom {
  background-color: #bf1b12;
  z-index: 1;
  width: size(1804);
  height: 1px;
  right: 0;
  bottom: 0;
}

.line-center {
  background-color: #bf1b12;
  z-index: 1;
  left: 0;
  top: size(596);
  width: 1px;
  height: size(764);
  right: 0;
  margin: 0 auto;
}

.line-right {
  background-color: #bf1b12;
  z-index: 1;
  top: 0;
  right: size(115);
  width: 1px;
  height: size(1320);
}

.line-left {
  background-color: #bf1b12;
  z-index: 1;
  left: size(115);
  top: size(195);
  width: 1px;
  height: size(1164);
}

.title {
  width: size(706);
  top: size(66);
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: size(41);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: normal;
  text-align: center;
  color: #bb1a12;
  span {
    font-weight: 300;
    color: #1a1311;
  }
}

.desc {
  width: size(602);
  top: size(743);
  left: size(216);
  font-size: size(30);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #1a1311;
}

.years {
  width: size(71);
  right: size(812);
  top: size(662);
  font-size: size(26);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: left;
  color: #dc3f1f;
}

.list {
  width: size(456);
  font-size: size(26);
  right: size(338);
  top: size(659);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: left;
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
    height: size-m(682);
  }
  .img {
    top: size-m(11.7);
    left: 0;
    width: 100vw;
    z-index: 1;

    &.img2 {
      width: 100vw;
      top: size-m(345);
      left: 0;
    }
  }
  .white-line {
    width: 100vw;
    height: size-m(20);
    background-color: #fff;
    top: size-m(800);
  }
  .title {
    width: size-m(240);
    top: size-m(173);
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: size-m(14);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: normal;
    text-align: center;
    color: #bb1a12;
    span {
      font-weight: 300;
      color: #1a1311;
    }
  }

  .desc {
    width: size-m(240);
    top: size-m(200);
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: size-m(11.4);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: center;
    color: #1a1311;
  }

  .m-list1 {
    top: size-m(480);
    left: size-m(15);
    width: size-m(165);
    font-size: size-m(9);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    text-align: left;
    color: #1a1311;
    b {
      font-size: size-m(5.7);
    }
    span {
      font-size: size-m(12.8);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.36;
      letter-spacing: normal;
      text-align: left;
      color: #dc3f1f;
      display: inline-block;
      margin-right: 5px;
    }
  }

  .m-list2 {
    top: size-m(480);
    left: size-m(190);
    width: size-m(175);
    font-size: size-m(9);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    text-align: left;
    color: #1a1311;
    b {
      font-size: size-m(5.7);
    }
    span {
      font-size: size-m(12.8);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.36;
      letter-spacing: normal;
      text-align: left;
      color: #dc3f1f;
      display: inline-block;
      margin-right: 5px;
    }
  }

  .line-bottom {
    background-color: #bf1b12;
    z-index: 1;
    width: 100vw;
    height: 1px;
    left: 0;
    bottom: 0;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section5',

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
