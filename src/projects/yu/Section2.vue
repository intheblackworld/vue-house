<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s2/1.jpg"
        alt=""
        class="img absolute"
      >
      <div class="white-line absolute"></div>
      <div class="line-center absolute"></div>
      <div class="line-right absolute"></div>
      <div class="line-bottom absolute"></div>
      <div class="desc absolute">
        像村上春樹的南青山裏原宿<br />
        慾望城市的曼哈頓SOHO<br />
        安靜地若隱在信義商圈裡<br />
        坐享繁華與生活的雙好<br />
        <br />
        沿著忠孝東路一巷進<br />
        城心最美好的，等您來上座
      </div>
    </div>
    <div
      v-else
      class="relative"
    >
      <img
        src="./s2/1_m.jpg"
        alt=""
        class="img absolute"
      >
      <div class="white-line absolute"></div>
      <div class="line-center absolute"></div>
      <div class="line-left absolute"></div>
      <div class="line-right absolute"></div>
      <div class="line-bottom absolute"></div>
      <div class="desc absolute">
        像村上春樹的南青山裏原宿，慾望城市的曼哈頓SOHO<br />
        安靜地若隱在信義商圈裡，坐享繁華與生活的雙好<br />
        <span>沿著忠孝東路一巷進，城心最美好的，等您來上座</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  height: size(765);
  overflow: hidden;
}

.img {
  top: 0;
  left: size(115);
  width: size(845);
  z-index: 1;
}

.white-line {
  width: 100vw;
  height: size(20);
  background-color: #fff;
  top: size(108);
}

.line-bottom {
  background-color: #bf1b12;
  z-index: 1;
  width: 100vw;
  height: 1px;
  bottom: 0;
}

.line-center {
  background-color: #bf1b12;
  z-index: 1;
  left: 0;
  width: 1px;
  height: size(765);
  right: 0;
  margin: 0 auto;
}

.line-right {
  background-color: #bf1b12;
  z-index: 1;
  right: size(115);
  width: 1px;
  height: size(765);
}

.desc {
  width: size(410);
  top: size(150);
  right: size(334);
  font-size: size(34);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.89;
  letter-spacing: normal;
  text-align: center;
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
    height: size-m(318);
  }
  .img {
    top: 0;
    left: 0;
    width: size-m(352);
    z-index: 1;
  }

  .white-line {
    width: 100vw;
    height: size-m(20);
    background-color: #fff;
    top: auto;
    bottom: size-m(10);
  }

  .line-bottom {
    background-color: #bf1b12;
    z-index: 1;
    width: 100vw;
    height: 1px;
    bottom: 0;
  }

  .line-center {
    background-color: #bf1b12;
    z-index: 1;
    left: 0;
    right: auto;
    top: size-m(183);
    width: size-m(352);
    height: 1px;
  }

  .line-right {
    right: size-m(22);
    width: 1px;
    height: size-m(318);
  }

  .line-left {
    background-color: #bf1b12;
    left: size-m(22);
    width: 1px;
    height: size-m(134);
    top: size-m(183);
    z-index: 1;
  }

  .desc {
    width: size-m(268);
    top: size-m(217);
    right: size-m(60.5);
    font-size: size-m(11.4);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: center;
    color: #1a1311;
    white-space: nowrap;
    span {
      color: #bf1b12;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section2',

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
