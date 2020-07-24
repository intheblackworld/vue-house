<template>
  <div class="section5">
    <div class="full-bg relative">
      <div
        class="full-img"
        v-lazy:background-image="require('./s5/bg.jpg')"
      ></div>
      <div
        class="full-img bg-img"
        v-lazy:background-image="require('./s5/bg.png')"
      ></div>
      <div class="river">
        <div
          v-for="item in riverList"
          :key="item"
          v-lazy:background-image="item"
        ></div>
      </div>
      <div class="mask absolute"></div>
      <h3 class="title absolute">雙溪之美 悉心典藏<br />浪漫RESORT水花園</h3>
      <img
        src="./s2/hr.png"
        alt=""
        class="hr absolute"
        data-aos="grow"
        data-aos-delay="400"
        data-aos-duration="600"
      >
      <h3 class="desc absolute">恰前有雙溪環腰、內有波光瀲灩<br />
        兩棟環景鉅座間以水花園串聯，水幕森林、綠蔭滿懷<br />
        如同置身頂級渡假飯店中步步皆美。</h3>

      <!-- <div class="float absolute">
        <img
          src="./s1/float.png"
          alt=""
          class="float1"
        >
        <img
          src="./s1/float2.png"
          alt=""
          class="float2"
        >
        <img
          src="./s1/float.png"
          alt=""
          class="float3"
        >
        <img
          src="./s1/float2.png"
          alt=""
          class="float4"
        >
      </div> -->
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
    height: 27px;
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
  & div:nth-child(11) {
    animation: water 5s ease-in-out 0s infinite alternate-reverse;
  }
  & div:nth-child(12) {
    animation: water 5s ease-in-out 0s infinite alternate-reverse;
  }
  & div:nth-child(13) {
    animation: water 5s ease-in-out 0s infinite alternate-reverse;
  }
  & div:nth-child(14) {
    animation: water 5s ease-in-out 0s infinite alternate-reverse;
  }

  & div:nth-child(15) {
    animation: water 5s ease-in-out 0s infinite alternate-reverse;
  }
}

.title {
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 5px;
  text-align: center;
  color: #ffffff;
  top: size(162);
  right: size(171);
  z-index: 3;
}

.desc {
  font-size: size(28);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  top: size(380);
  right: size(108);
  z-index: 3;
}

.hr {
  width: size(539);
  height: size(30);
  top: size(326);
  right: size(156);
  z-index: 3;
}

.mask {
  background-color: rgba(0, 0, 0, 0.5);
  width: size(846);
  height: size(453);
  top: size(128);
  right: 0;
  z-index: 2;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .full-bg {
    width: 100vw;
    min-height: auto;
    height: size-m(287 + 317);
    background-color: #fff;
  }
  .full-img {
    width: 100vw;
    min-height: auto;
    height: size-m(317);
  }
  .river {
    position: absolute;
    right: 0;
    bottom: size-m(287);
    width: 100vw;
    z-index: 1;
    div {
      width: 100%;
      height: 13px;
      // margin-left: calc((1920px - 2600px) / 2);
      // position: absolute;
      background-size: cover;
      background-position: 100%;
    }
  }

  .title {
    width: size-m(260);
    font-size: size-m(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.52;
    letter-spacing: 2.5px;
    text-align: center;
    color: #ffffff;
    top: size-m(349);
    right: size-m(60);
    z-index: 3;
  }

  .desc {
    font-size: size-m(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.57;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    top: size-m(472);
    right: size-m(18);
    z-index: 3;
  }

  .hr {
    width: size-m(323);
    height: size-m(13);
    top: size-m(438);
    right: size-m(26);
    z-index: 3;
  }

  .mask {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: size-m(287);
    top: size-m(317);
    right: 0;
    z-index: 2;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section5',

  data() {
    return {
      isMobile,
      riverList: [
        require('./s5/an (1).png'),
        require('./s5/an (2).png'),
        require('./s5/an (3).png'),
        require('./s5/an (4).png'),
        require('./s5/an (5).png'),
        require('./s5/an (6).png'),
        require('./s5/an (7).png'),
        require('./s5/an (8).png'),
        require('./s5/an (9).png'),
        require('./s5/an (10).png'),
        require('./s5/an (11).png'),
        require('./s5/an (12).png'),
        require('./s5/an (13).png'),
        require('./s5/an (14).png'),
        require('./s5/an (15).png'),
      ],
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
