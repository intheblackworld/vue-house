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
