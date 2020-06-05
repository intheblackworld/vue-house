<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s3/1.jpg"
        alt=""
        class="img absolute"
      >
      <div class="white-line absolute"></div>
      <div class="line-top absolute"></div>
      <div class="line-left absolute"></div>
      <div class="line-center absolute"></div>
      <div class="line-bottom absolute"></div>
      <div class="title absolute">
        板南線永春站5mins<br />輕擁台北5大精華商圈
      </div>
      <div class="desc absolute">
        本案近距板南線永春站450米<br />
        沿線貫穿台北市中心核心地段<br />
        台北車站商圈、忠孝復興SOGO商圈<br />
        忠孝敦化東區商圈、市政府信義101商圈<br />
        國⽗父紀念館大巨蛋松菸商圈<br />
        永春站位於規劃環狀線東環段Y37站<br />
        未來雙軸動能交會，雙捷樞紐置產增值
      </div>
    </div>
    <div
      v-else
      class="relative"
    >
      <img
        src="./s3/1_m.jpg"
        alt=""
        class="img absolute"
      >
      <img
        src="./s3/2_m.jpg"
        alt=""
        class="img2 absolute"
      >
      <div class="white-line absolute"></div>
      <div class="line-top absolute"></div>
      <div class="line-left absolute"></div>
      <div class="line-center absolute"></div>
      <div class="line-top2 absolute"></div>
      <div class="line-bottom absolute"></div>
      <div class="title absolute">
        板南線永春站5mins<br />輕擁台北5大精華商圈
      </div>
      <div class="desc absolute">
        本案近距板南線永春站450米<br />
        沿線貫穿台北市中心核心地段<br />
        台北車站商圈、忠孝復興SOGO商圈<br />
        忠孝敦化東區商圈、市政府信義101商圈<br />
        國⽗父紀念館大巨蛋松菸商圈<br />
        永春站位於規劃環狀線東環段Y37站<br />
        未來雙軸動能交會，雙捷樞紐置產增值
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
  right: size(115);
  width: size(845);
  z-index: 1;
}

.title {
  width: size(400);
  font-size: size(41);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: normal;
  text-align: left;
  color: #bb1a12;
  left: size(216);
  top: size(43);
}

.white-line {
  width: 100vw;
  height: size(20);
  background-color: #fff;
  top: size(445);
}

.line-top {
  background-color: #bf1b12;
  z-index: 1;
  width: size(960);
  height: 1px;
  top: size(223);
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

.line-left {
  background-color: #bf1b12;
  z-index: 1;
  left: size(115);
  top: size(223);
  width: 1px;
  height: size(765 - 223);
}

.desc {
  width: size(530);
  top: size(280);
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
    height: size-m(489);
  }

  .title {
    width: size-m(140);
    font-size: size-m(14);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: normal;
    text-align: left;
    color: #bb1a12;
    top: size-m(244);
    right: size-m(64);
    left: auto;
  }
  .img {
    top: 0;
    right: 0;
    width: size-m(352);
    z-index: 1;
  }

  .img2 {
    top: size-m(300);
    left: 0;
    width: size-m(158);
    z-index: 1;
  }

  .white-line {
    width: 100vw;
    height: size(20);
    background-color: #fff;
    top: size(108);
  }

  .line-top {
    background-color: #bf1b12;
    z-index: 1;
    width: 100vw;
    height: 1px;
    top: size-m(232);
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
    left: size-m(158);
    right: auto;
    top: size-m(232);
    width: 1px;
    height: size-m(257);
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
    height: size-m(232);
    top: 0;
    z-index: 1;
  }

  .line-top2 {
    background-color: #bf1b12;
    z-index: 1;
    left: 0;
    top: size-m(299);
    width: 100vw;
    height: 1px;
  }

  .desc {
    width: size-m(190);
    top: size-m(314);
    left: auto;
    right: size-m(10);
    font-size: size-m(11.4);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: #1a1311;
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
  name: 'section3',

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
