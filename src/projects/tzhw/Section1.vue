<template>
  <div class="section1">
    <div class="full-bg relative">
      <div
        class="full-img"
        v-lazy:background-image="require('./s1/bg.jpg')"
      ></div>
      <div
        class="full-img bg-img"
        v-lazy:background-image="require('./s1/bg.png')"
      ></div>
      <div class="river">
        <div v-lazy:background-image="require('./s1/an_01.png')"></div>
        <div v-lazy:background-image="require('./s1/an_02.png')"></div>
        <div v-lazy:background-image="require('./s1/an_03.png')"></div>
        <div v-lazy:background-image="require('./s1/an_04.png')"></div>
        <div v-lazy:background-image="require('./s1/an_05.png')"></div>
        <div v-lazy:background-image="require('./s1/an_06.png')"></div>
        <div v-lazy:background-image="require('./s1/an_07.png')"></div>
      </div>
      <h3 class="title absolute">百年一遇  太子華威</h3>
      <div class="subtitle absolute">雙溪第一景｜龍脈靜謐居</div>
      <h3 class="desc absolute">83-115坪&nbsp;&nbsp;&nbsp;&nbsp;02-2838-2188</h3>

      <div class="float absolute">
        <img src="./s1/float.png" alt="" class="float1">
        <img src="./s1/float2.png" alt="" class="float2">
        <img src="./s1/float.png" alt="" class="float3">
        <img src="./s1/float2.png" alt="" class="float4">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  height: size(1080);
}

// .bg-img {
//   background-attachment: fixed;
// }

.bg-img {
  position: absolute;
  z-index: 2;
  // &:first-child {
  //   position: relative;
  // }
}

@keyframes water {
  from {
    transform: skewX(50deg);
  }
  to {
    transform: skewX(-50deg);
  }
}

.river {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100vw;
  z-index: 1;
  div {
    width: 100%;
    height: 29px;
    // margin-left: calc((1920px - 2600px) / 2);
    // position: absolute;
    background-size: cover;
    background-position: 100%;
  }

  & div:nth-child(1) {
    animation: water 5s linear 0s infinite alternate;
  }

  & div:nth-child(2) {
    animation: water 5s linear 0s infinite alternate-reverse;
  }

  & div:nth-child(3) {
    animation: water 5s linear 0s infinite alternate;
  }

  & div:nth-child(4) {
    animation: water 5s linear 0s infinite alternate-reverse;
  }

  & div:nth-child(5) {
    animation: water 5s linear 0s infinite alternate;
  }

  & div:nth-child(6) {
    animation: water 5s linear 0s infinite alternate-reverse;
  }
  & div:nth-child(7) {
    animation: water 5s linear 0s infinite alternate;
  }
  & div:nth-child(8) {
    animation: water 5s linear 0s infinite alternate-reverse;
  }
  & div:nth-child(9) {
    animation: water 5s linear 0s infinite alternate;
  }
  & div:nth-child(10) {
    animation: water 5s linear 0s infinite alternate-reverse;
  }
}

.title {
  font-size: size(90);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.77;
  letter-spacing: normal;
  text-align: left;
  color: #004ea2;
  top: size(165);
  right: size(186);
  z-index: 3;
}

.subtitle {
  font-size: size(45);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 6.3px;
  text-align: left;
  color: #004ea2;
  top: size(330);
  right: size(280);
  z-index: 3;
}

.desc {
  font-size: size(36);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #004ea2;
  top: size(410);
  right: size(357);
  border-top: 1px solid #004ea2;
  border-bottom: 1px solid #004ea2;
  z-index: 3;
}

@keyframes float1 {
  from {
    transform: translate(0 , 0);
  }
  to {
    transform: translate(size(938), size(253));
  }
}

@keyframes float2 {
  from {
    transform: translate(100vw , 0);
  }
  to {
    transform: translate(size(918), size(293)) rotate(30deg);
  }
}

@keyframes float3 {
  from {
    transform: translate(100vw , 100vw);
  }
  to {
    transform: translate(size(1683), size(155));
  }
}

@keyframes float4 {
  from {
    transform: translate(100vw , 100vw);
  }
  to {
    transform: translate(size(1700), size(124)) rotate(30deg);
  }
}

.float {
  top: 0;
  left: 0;
  z-index: 4;
  .float1 {
    width: size(23);
    animation: float1 2s ease-in-out 1s forwards;
  }

  .float2 {
    width: size(78);
    animation: float2 2s ease-in-out 1s forwards;
  }

  .float3 {
    width: size(23);
    animation: float3 2s ease-in-out 1s forwards;
  }

  .float4 {
    width: size(78);
    animation: float4 2s ease-in-out 1s forwards;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',

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
