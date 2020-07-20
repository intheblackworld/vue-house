<template>
  <div class="section3 relative">
    <div class="full-bg">
      <!-- <div
        class="full-img"
        v-lazy:background-image="require('./s3/bg.jpg')"
      ></div> -->
      <div
        class="full-img bg-img"
        v-lazy:background-image="require('./s3/bg.jpg')"
      ></div>
      <img
        src="./s3/1.jpg"
        alt=""
        class="img1 absolute"
      >
      <img
        src="./s3/2.jpg"
        alt=""
        class="img2 absolute"
      >
      <img
        src="./s3/3.jpg"
        alt=""
        class="img3 absolute"
      >
      <div class="content absolute">
        <div class="border"></div>
      </div>
      <img src="./s3/logo.png" alt="" class="logo absolute">
      <img
        src="./s3/hr.png"
        alt=""
        class="hr absolute"
      >

      <h3 class="desc absolute">
        「太子華威」享陽明山、外雙溪與故宮國際地標等人文絕美景致靜謐私密的尊貴環境，相較於信義仁愛等豪宅更顯國際價值優勢。環境天生優越、富貴渾然天成！台北市最與眾不同的富豪特區，投資教父、電子業董事長共同的置產選擇。
      </h3>
      
      <img src="./s3/float4.png" alt="" class="flower absolute">

      <div class="float absolute">
        <img
          src="./s1/float.png"
          class="float1"
        >
        <img
          src="./s1/float2.png"
          class="float2"
        >
        <img
          src="./s1/float.png"
          class="float3"
        >
        <img
          src="./s1/float2.png"
          class="float4"
        >
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

.section3 {
  z-index: 4;
}

.bg-img {
  background-attachment: fixed;
}

.bg-img {
  position: absolute;
  // &:first-child {
  //   position: relative;
  // }
}

.img1 {
  width: size(575);
  top: size(54);
  left: size(89);
}

.img2 {
  width: size(575);
  top: size(540);
  left: size(89);
}

.img3 {
  width: size(575);
  top: size(54);
  left: size(693);
}

.content {
  width: size(535);
  height: size(974);
  top: size(54);
  right: size(89);
  padding: size(18);
  background-color: #fff;

  .border {
    width: 100%;
    height: 100%;
    border: 1px solid #004ea2;
  }
}

.logo {
  width: size(409);
  height: size(152);
  top: size(217);
  right: size(152);
}

.hr {
  width: size(475);
  height: size(16);
  top: size(392);
  right: size(118);
}

.desc {
  width: size(373);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.05;
  letter-spacing: -0.49px;
  text-align: left;
  color: #04040c;
  top: size(434);
  right: size(170);
}

@keyframes flower {
  from {
    transform: skewX(5deg);
  }
  to {
    transform: skewX(-5deg);
  }
}

.flower {
  width: size(495);
  top: size(715);
  right: size(12);
  transform-origin: bottom;
  animation: flower 5s linear 0s infinite alternate;
}

@keyframes float1 {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(size(938), size(253));
  }
}

@keyframes float2 {
  from {
    transform: translate(100vw, 0);
  }
  to {
    transform: translate(size(918), size(293)) rotate(30deg);
  }
}

@keyframes float3 {
  from {
    transform: translate(100vw, 100vw);
  }
  to {
    transform: translate(size(1683), size(155));
  }
}

@keyframes float4 {
  from {
    transform: translate(100vw, 100vw);
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
  name: 'section3',

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
