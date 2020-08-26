<template>
  <div class="section2 relative">
    <div class="full-bg">
      <div
        v-if="!isMobile"
        class="full-img"
        v-lazy:background-image="require('./s2/bg.jpg')"
      ></div>
      <!-- 
     <div class="water">
      <div
        class="water-img bg-img"
        v-lazy:background-image="require('./s2/e1.gif')"
      ></div>
      <div
        v-if="!isMobile"
        class="waterpng-img bg-img"
        v-lazy:background-image="require('./s2/bg.png')"
      ></div>
      <div
        v-if="isMobile"
        class="waterpng-img bg-img"
        v-lazy:background-image="require('./mo/1/bg2.png')"
      ></div> 
      </div>
      -->
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
      <!--
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
      </div>
      -->
      <div class="txt absolute"> <h3
        class="title"
        data-aos="fade"
        data-aos-delay="400"
      >台北市望族將領發跡地<br />極致風水 無可挑惕</h3>
      <img
        src="./s2/hr.png"
        alt=""
        class="hr"
        data-aos="grow"
        data-aos-delay="500"
        data-aos-duration="800"
      >

      <img
        v-lazy="require('./s1/float.png')"
        alt=""
        data-aos="fade-down-right"
        data-aos-delay="400"
        data-aos-duration="1000"
        class="float1 absolute"
      >
      <img
        v-lazy="require('./s1/float2.png')"
        alt=""
        data-aos="float1"
        data-aos-delay="500"
        data-aos-duration="1100"
        class="float2 absolute"
      >
      <img
        v-lazy="require('./s1/float.png')"
        alt=""
        data-aos="fade-down-left"
        data-aos-delay="400"
        data-aos-duration="1000"
        class="float3 absolute"
      >
      <img
        v-lazy="require('./s1/float2.png')"
        alt=""
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
.full-bg {
  background-size: cover;
  position: relative;
  height: calc(100vh - 50px);
  max-height: 53.7vw;
}
.full-img {
    background-position: center 50%;
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
&.water-img{opacity: 0.5;
    width: 40%;mix-blend-mode:overlay;
    left: 30%;
    height: 200%;
    background-size:100% 100%;}
&.waterpng-img{
    width:100%;
    height: 100%;
    background-size:cover;}
}
.water{bottom: 0;right: 0;
    width: 100%;
    height:calc(50% - 6.9vw);
    position: absolute;}
/*
@keyframes water {
  from {
    transform:translateX(-1%);
  }
  to {
    transform:translateX(1%);
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
*/
.txt{font-size:calc(12px + 2.1vh);
  top: 21%;
  right:50%;
  transform: translate(50% , -50%);
  z-index: 3;
  font-weight:initial;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #fff;filter: drop-shadow(0 0.1em 0.3em #0466);

.title{font-size:2.1em;
  letter-spacing: 0.11em;
  font-weight: 9800;}
.hr {
    width: 23.82em;
    height: auto;
}

.float1 {
    width: 0.9em;
    top: 6.7em;
    left: -3.8em;
}

.float2 {
    width: 3.6em;
    top: 7.0em;
    left: -4.2em;
}

.float3 {
    width: 0.85em;
    top: 0.35em;
    right: -2.8em;
}

.float4 {
  width: 2.81em;
    top: -1em;
    right: -6.5em;
}

}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
.full-bg {
  height: calc(100vh - 123px);
}
.bg-img {

&.water-img{
    width: 100%;
    height: 45vw;}
}
.txt{
  font-size:size-m(14);
  top: 26%;
  right:50%;
  width:size-m(323);
  transform: translateX(50% , -50%);
.title{font-size:1.9em;margin: 0 0 0.5em;}
.float1 {
    top: 8.5em;
    left: -1em;//transform: rotate(10deg);
}

.float2 {
    top: 9em;
    left: -1em;
}

.float3 {
    top: -1.5em;
    right: 2em;
}

.float4 {
    top: -2em;
    right: -1em;
}
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
  */
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
