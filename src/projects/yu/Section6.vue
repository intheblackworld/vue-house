<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s6/1.jpg"
        alt=""
        class="img absolute"
      >
      <div class="white-line absolute"></div>
      <div class="line-top absolute"></div>
      <div class="line-left absolute"></div>
      <div class="line-center absolute"></div>
      <div class="line-right absolute"></div>
      <div class="line-bottom absolute"></div>
      <div class="title absolute">
        德國RedDotAward金獎團隊<br />
        高質感+高坪效 國際住宅風景
      </div>
      <div class="desc absolute">
        展宜建築醇釀十五年，誠意手工精品〔詠喆〕<br />
        以Young & Urban時尚建築概念構思<br />
        創造的不只是一個居住容器<br />
        而是一種細緻的都會生活美學<br />
        在市中心好好、靜靜地享受生活的愉悅與感動<br /><br />
        忠孝東路一巷進 若隱於繁華城心<br />
        散步遊走信義計劃生活圈之間<br />
        永春站轉身 走入展宜用心蓋的小洋樓<br />
        三米六挑高都會空間，七層25戶單純住宅<br />
        動如脫兔擁繁華，靜若處子守靜寂<br />
        低調隱身在繁華裡的靜謐時尚
      </div>
    </div>
    <div
      v-else
      class="relative"
    >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  height: size(1165);
  overflow: hidden;
}

.img {
  top: 0;
  left: size(115);
  width: size(845);
  z-index: 1;
}

.title {
  width: size(529);
  font-size: size(41);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: normal;
  text-align: left;
  color: #bb1a12;
  right: size(340);
  top: size(72);
}

.white-line {
  width: 100vw;
  height: size(20);
  background-color: #fff;
  top: size(62);
}

.line-top {
  background-color: #bf1b12;
  z-index: 1;
  width: size(960);
  height: 1px;
  top: size(223);
  right: 0;
}

.line-bottom {
  background-color: #bf1b12;
  z-index: 1;
  width: size(1805);
  left: 0;
  height: 1px;
  bottom: 0;
}

.line-center {
  background-color: #bf1b12;
  z-index: 1;
  left: 0;
  width: 1px;
  height: size(1165);
  right: 0;
  margin: 0 auto;
}

.line-left {
  background-color: #bf1b12;
  z-index: 1;
  left: size(115);
  top: 0;
  width: 1px;
  height: size(1165);
}

.line-right {
  background-color: #bf1b12;
  z-index: 1;
  right: size(115);
  top: size(223);
  width: 1px;
  height: size(941);
}

.desc {
  width: size(602);
  top: size(363);
  right: size(281);
  font-size: size(30);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
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
    height: calc(100vh - 123px);
  }
  .bg-img {
    height: auto;
    object-fit: cover;
  }

  .title {
    font-size: size-m(50);
    top: size-m(119);
    left: size-m(31);
  }

  .desc {
    font-size: size-m(21);
    top: size-m(200);
    left: size-m(31);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section6',

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
