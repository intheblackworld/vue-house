<template>
  <div class="section2">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s2/bg.jpg" alt class="img" />
        <img src="./s2/bg2.png" alt class="img" />
        <img src="./s2/bg3.png" alt class="img" />
        <img src="./s2/bg4.png" alt class="img" />
        <img src="./s2/bg5.png" alt class="img" />
        <img src="./s2/stitlea.png" alt class="img" />
        <img src="./s2/texta.png" alt class="img" />
        <img src="./s2/titlea.png" alt class="img" />
        <div class="text">
          回歸建築初衷，家的本我需求
          <br />慎選每塊土地，細膩規劃每處空間，嚴格要求工程細節
          <br />只為珍惜每位住戶對於【頤昌】品牌的信任價值。
        </div>
      </div>
      <div v-if="isMobile"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
}

.img {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  &.fix {
    position: fixed;
  }
  &:nth-child(1) {
    position: relative;
  }
}

.text {
  width: calc(100vw * 515 / 1920);
  height: calc(100vw * 120 / 1920);
  font-size: calc(100vw * 20 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.2px;
  text-align: left;
  color: #707070;
  position: absolute;
  right: calc(100vw * 272 / 1920);
  top: calc(100vw * 367 / 1920);
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    background-image: url('./s1/bg1.jpg');
  }

  .text {
    width: calc(100vw * (262 / 375));
    height: calc(100vw * (80 / 375));
    font-size: calc(100vw * (14 / 375));
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: normal;
    text-align: justify;
    color: #000000;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section2',

  data() {
    return {
      isMobile,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
