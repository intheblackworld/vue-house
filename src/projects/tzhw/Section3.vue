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
      <div class="box">
        <img
        src="./s3/img.png"
        alt="圓山大飯店 故宮 sogo"
        class="img3"
      >
      <!--  <div class="flex img_box">
        <div class="img1">
      <img
        src="./s3/1.jpg"
        alt="圓山大飯店"
      ><br>
      <img
        src="./s3/2.jpg"
        alt="故宮"
      ></div>
      <img
        src="./s3/3.jpg"
        alt="sogo" class="img2"
      ></div> -->
      <div class="content">
        <div class="border flex">
      <img
        src="./s3/float4.png"
        alt=""
        class="flower absolute"
      >
      <img
        src="./s3/float5.png"
        alt=""
        class="flower5 absolute"
      >
      <img
        src="./s3/float6.png"
        alt=""
        class="flower6 absolute"
      >
      <img
        src="./s3/float7.png"
        alt=""
        class="flower7 absolute"
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
      <div class="txt">
      <img
        src="./s3/logo.png"
        alt=""
        class="logo"
      >
      <img
        src="./s3/hr.png"
        alt=""
        class="hr"
        data-aos="grow"
        data-aos-delay="400"
        data-aos-duration="600"
      >

      <h3 class="desc">
        「太子華威」享陽明山、外雙溪與故宮國際地標等人文絕美景致靜謐私密的尊貴環境，相較於信義仁愛等豪宅更顯國際價值優勢。環境天生優越、富貴渾然天成！台北市最與眾不同的富豪特區，投資教父、電子業董事長共同的置產選擇。
      </h3></div>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;overflow: hidden;
  position: relative;
  height: calc(100vh - 50px);
}

.section3 {
  z-index: 4;
}

.bg-img {
  background-attachment: fixed;
}

.bg-img {
  position: absolute;
}
.box{width: calc((100vh - 50px) * 1920 / 1080);
height: 94%;margin: 2% auto 0 auto;
  position: relative;z-index: 6;}

.img3 {
  width: auto;margin: 0 1.5% 0 0;float: left;
  height:100%;
}

.content {width: 32%;display:inline-block;height: 100%;
  padding: size(18);position: relative;
  background-color: #fff;

  .border {
    width: 100%;
    height: 100%;
    border: 1px solid #004ea2;
    justify-content: center;
    align-items: center;
  }
}

.logo {
  width:38vh;
  height:auto;
}

.hr {
  width:44vh;
  height:auto;
  margin: 1.1vh auto;
}

.desc {
  width: 80%;
  margin: auto;
  font-size:calc(12px + 1vh);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.05;
  text-align: justify;
  color: #04040c;
}

@keyframes flower {
  from {
    transform: skewX(5deg);
  }
  to {
    transform: skewX(-5deg);
  }
}
@keyframes flower5 {
  to {
    transform: rotate(0deg);
  }
}

.flower {
  width: 50vh;
  bottom: 0;
  right: -7vh;
  transform-origin: bottom;
  animation: flower 3s ease-in-out 0s infinite alternate;
}

.float1 {
  width: size(57);
  top: size(10);
  right: size(10);
  z-index: 4;
}

.float2 {
  width: size(49);
  top: size(66);
  right: size(0);
  z-index: 4;
}

.float3 {
  width: size(43);
  top: size(97);
  right: size(81);
  z-index: 4;
}
.flower5,
.flower6,
.flower7 {
  width: 50vh;
  bottom: 0;
  right: -7vh;
    transform: rotate(-10deg);
  transform-origin: bottom;
  animation: flower5 3s ease-in-out 0s infinite alternate;
}
.flower6 {transform: rotate(-15deg);animation-delay: .5s;}
.flower7 {transform: rotate(-12deg);animation-delay: 1s;}


/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg{height:auto;}
  .bg-img {
    height: size-m(835);
  }
.box{width: 96%;
height: auto;}
.img3{width: 100%;
  height: auto;
}
.content{
    width: 100%;margin:size-m(10) 0 size-m(10) 0;}
  .flower {
    width: 100vw;
    top: auto;
    right: 0;
    bottom: 0;
    transform-origin: bottom;
    animation: flower 3s ease-in-out 0s infinite alternate;
  }
.desc {
  font-size:calc(12px + 0.3vh);
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
.txt{
  margin:  size-m(30) auto  size-m(150);
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
