<template>
  <div class="section1">
    <div class="full-bg relative">
      <div
        v-if="!isMobile"
        class="full-img"
        v-lazy:background-image="require('./s1/bg.jpg')"
      ></div>
      <div
        v-if="isMobile"
        class="full-img"
        v-lazy:background-image="require('./mo/1/bg.jpg')"
      ></div>
      <div
        class="water-img bg-img"
        v-lazy:background-image="require('./s1/e1.gif')"
      ></div>
      <div
        v-if="!isMobile"
        class="full-img bg-img"
        v-lazy:background-image="require('./s1/bg.png')"
      ></div>
      <div
        v-if="isMobile"
        class="full-img bg-img"
        v-lazy:background-image="require('./mo/1/bg.png')"
      ></div>
     <!-- <div
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
      </div> -->
      <div class="txt absolute">
        <h3
          class="title"
          data-aos="fade-up"
          data-aos-delay="400"
        >百年一遇 太子華威</h3>
        <h3
          class="subtitle"
          data-aos="fade-up"
          data-aos-delay="600"
        >雙溪第一景｜龍脈靜謐居</h3>
        <h3
          class="desc"
          data-aos="fade-up"
          data-aos-delay="800"
        >83-115坪&nbsp;&nbsp;&nbsp;&nbsp;02-2838-2188</h3>

        <img
          v-lazy="require('./s1/float.png')"
          v-if="!isMobile"
          alt="float"
          data-aos="fade-down-right"
          data-aos-delay="400"
          data-aos-duration="1000"
          class="float1 absolute"
        >
        <img
          v-lazy="require('./s1/float2.png')"
          alt="float"
          data-aos="float1"
          data-aos-delay="500"
          data-aos-duration="1100"
          class="float2 absolute"
        >
        <img
          v-lazy="require('./s1/float.png')"
          alt="float"
          data-aos="fade-down-left"
          data-aos-delay="400"
          data-aos-duration="1000"
          class="float3 absolute"
        >
        <img
          v-lazy="require('./s1/float2.png')"
          v-if="!isMobile"
          alt="float"
          data-aos="float3"
          data-aos-delay="500"
          data-aos-duration="1100"
          class="float4 absolute"
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
  height: calc(100vh);
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

&.water-img{bottom: 0;right: 0;opacity: 0.5;
    width: 80%;
    height: 10vw;
    position: absolute;
    background-size:100% 100%;
    background-position: center;}
}
/*
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
*/
.txt{font-size:calc(12px + 2.1vh);

  top: 14%;
  right: size(600);
  transform: translateX(50%);
  z-index: 3;
  font-weight:initial;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.66;
  letter-spacing: normal;
  text-align: center;
  color: #004ea2;

.title{font-size:2.44em;
  font-weight: 900;}
.subtitle {font-size:1.23em; font-weight: 900;letter-spacing: 0.13em;}
.desc {font-size:1em;font-weight: bold;
  border-top: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
  margin: 0.44em auto;
  width: 12.5em;
  line-height: 1.48;
}

.float1 {
width: 0.64em;
    top:2.9em;
    left: -1em;
}

.float2 {
  width: 2.1em;
    top:3.05em;
    left: -1.4em;
}

.float3 {
width: 0.64em;
    top: -0.5em;
    right: -0.8em;
}

.float4 {
    width: 2.1em;
    top: -1em;
    right: -3em;
}

}


/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
.bg-img {

&.water-img{
    width: 100%;
    height: 45vw;}
}
.txt{
  font-size:size-m(19);
  top: 18%;
  right:50%;
  width:size-m(323);
  transform: translateX(50%);
.title{font-size:2em;}
.subtitle {font-size:1.32em;margin: 0 0 0 0.2em;}
.desc {font-size:1.2em;
  border-top: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
  margin: 0.44em auto;
  width:size-m(323);
  line-height: 1.7;
}
.float2 {
    top:9em;
    left: 0.5em;
}

.float3 {
    top: 0em;
    right:1em;
}
  }
  

/*  @keyframes water {
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
  }*/
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
