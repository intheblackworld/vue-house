<template>
  <div class="section2 relative">
    <div class="full-bg">
      <div
        class="full-img"
        v-lazy:background-image="require('./s2/bg.jpg')"
      ></div>
      <div
        class="full-img bg-img"
        v-lazy:background-image="require('./s2/bg.png')"
      ></div>
      <div class="river">
        <div v-lazy:background-image="require('./s2/an (1).png')"></div>
        <div v-lazy:background-image="require('./s2/an (2).png')"></div>
        <div v-lazy:background-image="require('./s2/an (3).png')"></div>
        <div v-lazy:background-image="require('./s2/an (4).png')"></div>
        <div v-lazy:background-image="require('./s2/an (5).png')"></div>
        <div v-lazy:background-image="require('./s2/an (6).png')"></div>
        <div v-lazy:background-image="require('./s2/an (7).png')"></div>
        <div v-lazy:background-image="require('./s2/an (8).png')"></div>
      </div>
      <h3 class="title absolute">台北市望族將領發跡地<br />極致風水 無可挑惕</h3>
      <img src="./s2/hr.png" alt="" class="hr absolute">

      <div class="float absolute">
        <img src="./s1/float.png" class="float1">
        <img src="./s1/float2.png" class="float2">
        <img src="./s1/float.png" class="float3">
        <img src="./s1/float2.png" class="float4">
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

.section2 {
  z-index: 4;
}

// .bg-img, .full-img {
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
    height: 49px;
    // margin-left: calc((1920px - 2600px) / 2);
    // position: absolute;
    background-size: cover;
    background-position: 60%;
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
  font-size: size(66);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 6.63px;
  text-align: center;
  color: #ffffff;
  top: size(103);
  right: size(599);
  z-index: 3;
}

.hr {
  width: size(746);
  height: size(30);
  top: size(310);
  left: size(587);
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
