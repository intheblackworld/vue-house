<template>
  <div class="section3 relative">
    <div class="bg">
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
      <img
        src="./s3/logo.png"
        alt=""
        class="logo absolute"
      >
      <img
        src="./s3/hr.png"
        alt=""
        class="hr absolute"
        data-aos="grow"
        data-aos-delay="400"
        data-aos-duration="600"
      >

      <h3 class="desc absolute">
        「太子華威」享陽明山、外雙溪與故宮國際地標等人文絕美景致靜謐私密的尊貴環境，相較於信義仁愛等豪宅更顯國際價值優勢。環境天生優越、富貴渾然天成！台北市最與眾不同的富豪特區，投資教父、電子業董事長共同的置產選擇。
      </h3>

      <img
        src="./s3/float4.png"
        alt=""
        class="flower absolute"
      >

      <img
        src="./s1/float.png"
        alt=""
        data-aos="fade-down-left"
        data-aos-delay="400"
        data-aos-duration="1000"
        class="float1 absolute"
      >
      <img
        src="./s1/float.png"
        alt=""
        data-aos="fade-down-left"
        data-aos-delay="400"
        data-aos-duration="1000"
        class="float2 absolute"
      >
      <img
        src="./s1/float2.png"
        alt=""
        data-aos="float3"
        data-aos-delay="500"
        data-aos-duration="1100"
        class="float3 absolute"
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
  animation: flower 3s ease-in-out 0s infinite alternate;
}

.float1 {
  width: size(57);
  top: size(30);
  right: size(110);
  z-index: 4;
}

.float2 {
  width: size(49);
  top: size(86);
  right: size(100);
  z-index: 4;
}

.float3 {
  width: size(43);
  top: size(117);
  right: size(181);
  z-index: 4;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg,
  .bg-img {
    height: size-m(835);
  }
  .bg-img {
    background: #fff !important;
  }
  .img1 {
    width: size-m(169);
    top: size-m(71);
    left: size-m(13);
  }

  .img2 {
    width: size-m(171);
    top: size-m(216);
    left: size-m(13);
  }

  .img3 {
    width: size-m(171);
    top: size-m(71);
    left: size-m(192);
  }

  .content {
    width: size-m(535);
    height: size-m(974);
    top: size-m(54);
    right: size-m(89);
    padding: size-m(18);
    background-color: #fff;
    display: none;

    .border {
      width: 100%;
      height: 100%;
      border: 1px solid #004ea2;
      display: none;
    }
  }

  .logo {
    width: size-m(257);
    height: size-m(81);
    top: size-m(391);
    right: size-m(59);
  }

  .hr {
    width: size-m(305);
    height: size-m(11);
    top: size-m(482);
    right: size-m(32);
  }

  .desc {
    width: size-m(312);
    font-size: size-m(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.57;
    letter-spacing: normal;
    text-align: left;
    color: #04040c;
    top: size-m(509);
    right: size-m(32);
  }

  .flower {
    width: 100vw;
    top: auto;
    right: 0;
    bottom: 0;
    transform-origin: bottom;
    animation: flower 3s ease-in-out 0s infinite alternate;
  }

  .float1 {
    width: size-m(43);
    top: size-m(0);
    right: size-m(19);
    z-index: 4;
  }

  .float2 {
    width: size-m(37);
    top: size-m(42);
    right: size-m(11);
    z-index: 4;
  }

  .float3 {
    width: size-m(32);
    top: size-m(65);
    right: size-m(71);
    z-index: 4;
  }
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
