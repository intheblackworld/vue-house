<template>
  <div class="relative">
    <div v-if="!isMobile" class="c-content">
     <div class="flex"> <img
        src="./s2/1.jpg"
        alt=""
        class="img" data-aos="fade" data-aos-delay="400"
      >
      <div class="desc flex">
        像村上春樹的南青山裏原宿<br />
        慾望城市的曼哈頓SOHO<br />
        安靜地若隱在信義商圈裡<br />
        坐享繁華與生活的雙好<br />
        <br />
        沿著忠孝東路一巷進<br />
        城心最美好的，等您來上座
      </div>
      </div>
      <div class="line-center absolute"></div>
      <div class="line-right absolute"></div>
      <div class="line-bottom absolute"></div>
    </div>
    <div
      v-else
      class="c-content">
      <img
        src="./s2/1_m.jpg"
        alt=""
        class="img absolute" data-aos="fade" data-aos-delay="1200"
      >
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
  overflow: hidden;
  top: size(115);
  position: relative;
  
}
.c-content {
  //background-color: #fff;
  width: size(1690);
  height:auto;
  margin:0 0 0 size(115);
  position: relative;
}
.flex{width: 100%;}
.img {
  top: 0;
  left: size(115);
  width: size(845);
  z-index: 1;
}

.line-bottom {
  background-color: #bf1b12;
  z-index: 1;
  width: 100vw;
  height: 1px;
  bottom: 0;
  left:calc(50% - 50vw);
  animation: anX 1s 2s reverse both;
}

.line-center {
  background-color: #bf1b12;
  z-index: 1;
  top: 0;
  left:size(845);
  width: 1px;
  height:100%;
  animation: anY 1s 2s reverse both;
}

.line-right {
  background-color: #bf1b12;
  z-index: 1;
  top: 0;
  right: 0;
  width: 1px;
  height:100vh;
  animation: anY 1s 2s reverse both;
}

.desc {flex: 1 1 size(410);
  top: 0;
  right: size(334);
  font-size: size(33);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.89;
  letter-spacing: normal;
  text-align: center;
  color: #1a1311;
  align-items: center;
  justify-content: center;
}
@keyframes anY {
    to {
  height: 0;
    }
}
@keyframes anX  {
    to {
      width: 0;
    }
}
@keyframes anop  {
    to {
      opacity: 0;
    }
}
@keyframes anba  {
    to {
     background-color: #fff0;
    }
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
  top: size-m(22);
  }
  .c-content{height:100%;}
  .img {
    top: 0;
    right:0;
    left: auto;
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
  left:calc(50% - 50vw);
  }

  .line-center {
    background-color: #bf1b12;
    z-index: 1;
    right: 0;
    left: auto;
    top: size-m(183);
    width: size-m(352);
    height: 1px;
  }

  .line-right {
    width: 1px;
    height: size-m(318);
  }

  .line-left {
    background-color: #bf1b12;
    width: 1px;
    height: size-m(134);
    top: size-m(183);
    z-index: 1;
  }

  .desc {
    width: size-m(330);
    top: size-m(217);
    right: 0;
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
