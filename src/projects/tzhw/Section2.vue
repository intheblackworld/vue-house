<template>
  <div class="section2 relative">
    <div class="full-bg">
      <div
        v-if="!isMobile"
        class="full-img"
        v-lazy:background-image="require('./s2/bg.jpg')"
      ></div>
      <div
        v-if="!isMobile"
        class="full-img bg-img"
        v-lazy:background-image="require('./s2/bg.png')"
      ></div>
      <div
        v-if="isMobile"
        class="full-img"
        v-lazy:background-image="require('./mo/2/bg.jpg')"
      ></div>
      <div
        v-if="isMobile"
        class="full-img bg-img"
        v-lazy:background-image="require('./mo/2/bg.png')"
      ></div>
      <div
        class="river"
        v-if="!isMobile"
      >
        <div v-lazy:background-image="require('./s2/an (1).png')"></div>
        <div v-lazy:background-image="require('./s2/an (2).png')"></div>
        <div v-lazy:background-image="require('./s2/an (3).png')"></div>
        <div v-lazy:background-image="require('./s2/an (4).png')"></div>
        <div v-lazy:background-image="require('./s2/an (5).png')"></div>
        <div v-lazy:background-image="require('./s2/an (6).png')"></div>
        <div v-lazy:background-image="require('./s2/an (7).png')"></div>
        <div v-lazy:background-image="require('./s2/an (8).png')"></div>
      </div>
      <div
        class="river"
        v-if="isMobile"
      >
        <div v-lazy:background-image="require('./mo/2/an_01.png')"></div>
        <div v-lazy:background-image="require('./mo/2/an_02.png')"></div>
        <div v-lazy:background-image="require('./mo/2/an_03.png')"></div>
        <div v-lazy:background-image="require('./mo/2/an_04.png')"></div>
        <div v-lazy:background-image="require('./mo/2/an_05.png')"></div>
        <div v-lazy:background-image="require('./mo/2/an_06.png')"></div>
        <div v-lazy:background-image="require('./mo/2/an_07.png')"></div>
        <div v-lazy:background-image="require('./mo/2/an_08.png')"></div>
        <div v-lazy:background-image="require('./mo/2/an_09.png')"></div>
        <!-- <div v-lazy:background-image="require('./mo/2/an_10.png')"></div> -->
      </div>
      <h3
        class="title absolute"
        data-aos="fade"
        data-aos-delay="400"
      >台北市望族將領發跡地<br />極致風水 無可挑惕</h3>
      <img
        src="./s2/hr.png"
        alt=""
        class="hr absolute"
        data-aos="grow"
        data-aos-delay="500"
        data-aos-duration="800"
      >

      <img
        src="./s1/float.png"
        alt=""
        data-aos="fade-down-right"
        data-aos-delay="400"
        data-aos-duration="1000"
        class="float1 absolute"
      >
      <img
        src="./s1/float2.png"
        alt=""
        data-aos="float1"
        data-aos-delay="500"
        data-aos-duration="1100"
        class="float2 absolute"
      >
      <img
        src="./s1/float.png"
        alt=""
        data-aos="fade-down-left"
        data-aos-delay="400"
        data-aos-duration="1000"
        class="float3 absolute"
      >
      <img
        src="./s1/float2.png"
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

.float1 {
  width: size(27);
  top: size(315);
  left: size(461);
  z-index: 4;
}

.float2 {
  width: size(111);
  top: size(322);
  left: size(451);
  z-index: 4;
}

.float3 {
  width: size(27);
  top: size(114);
  right: size(490);
  z-index: 4;
}

.float4 {
  width: size(90);
  top: size(70);
  right: size(371);
  z-index: 4;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  @keyframes water {
    from {
      transform: skewX(50deg);
    }
    to {
      transform: skewX(-50deg);
    }
  }

  .river {
    margin-bottom: -20px;
    left: -20%;
    div {
      width: 120%;
      height: size-m(27.5);
      // margin-left: calc((1920px - 2600px) / 2);
      // position: absolute;
      background-size: cover;
      background-position: 20%;
    }
  }
  .title {
    font-size: size-m(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.52;
    letter-spacing: 2.5px;
    text-align: center;
    color: #ffffff;
    top: size-m(107);
    right: size-m(51);
    z-index: 3;
  }

  .hr {
    width: size-m(306);
    height: size-m(13);
    top: size-m(190);
    left: size-m(35);
    z-index: 3;
  }

  .float1 {
    width: size-m(12);
    top: size-m(204);
    left: size-m(17);
    z-index: 4;
  }

  .float2 {
    width: size-m(45);
    top: size-m(207);
    left: size-m(13);
    z-index: 4;
  }

  .float3 {
    width: size-m(19);
    top: size-m(81);
    right: size-m(61);
    z-index: 4;
  }

  .float4 {
    width: size-m(38);
    top: size-m(63);
    right: size-m(13);
    z-index: 4;
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
