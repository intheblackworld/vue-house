<template>
  <div class="section1">
    <div class="full-bg relative">
      <div
        v-if="!isMobile"
        class="full-img"
        v-lazy:background-image="require('./s1/bg.jpg')"
      ></div>
      <div
        v-if="!isMobile"
        class="full-img bg-img"
        v-lazy:background-image="require('./s1/bg.png')"
      ></div>
      <div
        v-if="isMobile"
        class="full-img"
        v-lazy:background-image="require('./mo/1/bg.jpg')"
      ></div>
      <div
        v-if="isMobile"
        class="full-img bg-img"
        v-lazy:background-image="require('./mo/1/bg.png')"
      ></div>
      <div
        class="river"
        v-if="!isMobile"
      >
        <div v-lazy:background-image="require('./s1/an_01.png')"></div>
        <div v-lazy:background-image="require('./s1/an_02.png')"></div>
        <div v-lazy:background-image="require('./s1/an_03.png')"></div>
        <div v-lazy:background-image="require('./s1/an_04.png')"></div>
        <div v-lazy:background-image="require('./s1/an_05.png')"></div>
        <div v-lazy:background-image="require('./s1/an_06.png')"></div>
        <div v-lazy:background-image="require('./s1/an_07.png')"></div>
      </div>
      <div
        class="river"
        v-if="isMobile"
      >
        <div v-lazy:background-image="require('./mo/1/an_01.png')"></div>
        <div v-lazy:background-image="require('./mo/1/an_02.png')"></div>
        <div v-lazy:background-image="require('./mo/1/an_03.png')"></div>
        <div v-lazy:background-image="require('./mo/1/an_04.png')"></div>
        <div v-lazy:background-image="require('./mo/1/an_05.png')"></div>
        <div v-lazy:background-image="require('./mo/1/an_06.png')"></div>
        <div v-lazy:background-image="require('./mo/1/an_07.png')"></div>
      </div>
      <h3
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="400"
      >百年一遇 太子華威</h3>
      <h3
        class="subtitle absolute"
        data-aos="fade-up"
        data-aos-delay="600"
      >雙溪第一景｜龍脈靜謐居</h3>
      <h3
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="800"
      >83-115坪&nbsp;&nbsp;&nbsp;&nbsp;02-2838-2188</h3>

      <img
        src="./s1/float.png"
        v-if="!isMobile"
        alt=""
        data-aos="fade-down-right"
        data-aos-delay="400"
        data-aos-duration="1000"
        class="float1 absolute"
      >
      <img
        src="./s1/float2.png"
        v-if="!isMobile"
        alt=""
        data-aos="float1"
        data-aos-delay="500"
        data-aos-duration="1100"
        class="float2 absolute"
      >
      <img
        src="./s1/float.png"
        v-if="!isMobile"
        alt=""
        data-aos="fade-down-left"
        data-aos-delay="400"
        data-aos-duration="1000"
        class="float3 absolute"
      >
      <img
        src="./s1/float2.png"
        v-if="!isMobile"
        alt=""
        data-aos="float3"
        data-aos-delay="500"
        data-aos-duration="1100"
        class="float4 absolute"
      >
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
    animation: water 5s ease-in-out 0s infinite alternate;
  }

  & div:nth-child(2) {
    animation: water 5s ease-in-out 0s infinite alternate-reverse;
  }

  & div:nth-child(3) {
    animation: water 5s ease-in-out 0s infinite alternate;
  }

  & div:nth-child(4) {
    animation: water 5s ease-in-out 0s infinite alternate-reverse;
  }

  & div:nth-child(5) {
    animation: water 5s ease-in-out 0s infinite alternate;
  }

  & div:nth-child(6) {
    animation: water 5s ease-in-out 0s infinite alternate-reverse;
  }
  & div:nth-child(7) {
    animation: water 5s ease-in-out 0s infinite alternate;
  }
  & div:nth-child(8) {
    animation: water 5s ease-in-out 0s infinite alternate-reverse;
  }
  & div:nth-child(9) {
    animation: water 5s ease-in-out 0s infinite alternate;
  }
  & div:nth-child(10) {
    animation: water 5s ease-in-out 0s infinite alternate-reverse;
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

.float1 {
  width: size(23);
  top: size(278);
  left: size(936);
  z-index: 4;
}

.float2 {
  width: size(78);
  top: size(283);
  left: size(924);
  z-index: 4;
}

.float3 {
  width: size(23);
  top: size(155);
  right: size(157);
  z-index: 4;
}

.float4 {
  width: size(78);
  top: size(124);
  right: size(71);
  z-index: 4;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  @keyframes water {
    from {
      transform: skewX(20deg);
    }
    to {
      transform: skewX(-20deg);
    }
  }

  .river {
    div {
      width: 100%;
      height: 19.5px;
      // margin-left: calc((1920px - 2600px) / 2);
      // position: absolute;
      background-size: cover;
      background-position: 80%;
    }
  }
  .title {
    font-size: size-m(38);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.77;
    letter-spacing: normal;
    text-align: left;
    color: #004ea2;
    top: size-m(111);
    right: size-m(26);
    z-index: 3;
  }

  .subtitle {
    font-size: size-m(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 4px;
    text-align: left;
    color: #004ea2;
    top: size-m(181);
    right: size-m(19);
    z-index: 3;
  }

  .desc {
    width: size-m(323);
    font-size: size-m(21);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #004ea2;
    top: size-m(227);
    right: size-m(25);
    border-top: 1px solid #004ea2;
    border-bottom: 1px solid #004ea2;
    z-index: 3;
  }
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
