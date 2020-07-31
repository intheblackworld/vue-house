<template>
  <div class="section1">
    <div v-if="!isMobile">
     <!-- <svg
        class="absolute move_butter_fly"
        version="1.1"
        id="圖層_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 2600 1080"
        style="enable-background:new 0 0 2600 1080;"
        xml:space="preserve"
      >
        <image
          style="overflow:visible;"
          width="200"
          height="200"
          xlink:href="./s1/butterfly_an.gif"
          transform="matrix(1 0 0 1 1827 448)"
        >
        </image>
        <path
          class="st0"
          d="M2629.5,329.5c-162-73-508-19-703,230c-168.9,215.7-488.6,384.6-776,364c-390-28-287-462-665-418
	c-197.2,23-508-459-403-564"
        />
      </svg>  -->
      <div class="commingsoon absolute flex-ac flex-jb">
        <span>c</span>
        <span>o</span>
        <span>m</span>
        <span>m</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
        <span>s</span>
        <span>o</span>
        <span>o</span>
        <span>n</span>
      </div>
      <div
        class="bg-img absolute"
        v-lazy:background-image="require('./s1/bg.png')"
      ></div>
      <div
        class="full-img swing"
        data-aos="fade"
        data-aos-delay="400"
        v-lazy:background-image="require('./s1/1.png')"
      ></div>
      <div
        class="full-img swing"
        data-aos="fade"
        data-aos-delay="800"
        v-lazy:background-image="require('./s1/3.png')"
      ></div>
      <div
        class="full-img"
        data-aos="fade"
        data-aos-delay="600"
        v-lazy:background-image="require('./s1/2.png')"
      ></div>
      <div
        class="full-img"
        data-aos="fade"
        data-aos-delay="1000"
        v-lazy:background-image="require('./s1/butterfly.gif')"
      ></div>
      <img
        src="./s1/butterfly_an.gif"
        data-aos="fade-up"
        data-aos-delay="400"
        alt="butterfly"
        class="move_butter_fly absolute"
      >
      <img
        src="./s1/用誠心 造城心.png"
        data-aos="fade-up"
        data-aos-delay="400"
        alt="用誠心 造城心"
        class="title1 absolute"
      >
      <img
        src="./s1/國門新都心 5A新生活.png"
        data-aos="fade-up"
        data-aos-delay="600"
        alt="國門新都心 5A新生活"
        class="title2 absolute"
      >
      <img
        src="./s1/早鳥優惠限量25戶建材升級免加價.png"
        data-aos="fade-up"
        data-aos-delay="600"
        alt="早鳥優惠限量25戶建材升級免加價"
        class="title3 absolute"
      >
      <h3 class="txt absolute">萬騰廣告</h3>
    </div>
    <div v-if="isMobile">
      <!-- <div
        class="full-img"
        v-lazy:background-image="require('./s1/mo/')"
      ></div> -->

      <div
        class="full-img img3 swing"
        data-aos="fade"
        data-aos-delay="400"
        v-lazy:background-image="require('./s1/mo/3.png')"
      ></div>
      <div
        class="full-img img1 swing"
        data-aos="fade"
        data-aos-delay="600"
        v-lazy:background-image="require('./s1/mo/1.png')"
      ></div>
      <div
        class="full-img img2"
        data-aos="fade"
        data-aos-delay="800"
        v-lazy:background-image="require('./s1/mo/2.png')"
      ></div>
      <div
        class="full-img butterfly"
        v-lazy:background-image="require('./s1/mo/butterfly.gif')"
      ></div>
      <img
        src="./s1/mo/用誠心 造城心_.png"
        alt="朗朗城心"
        data-aos="fade-up"
        data-aos-delay="400"
        class="title1 absolute"
      >
      <img
        src="./s1/國門新都心 5A新生活.png"
        alt="朗朗城心"
        data-aos="fade-up"
        data-aos-delay="600"
        class="title2 absolute"
      >
      <img
        src="./s1/早鳥優惠限量25戶建材升級免加價.png"
        alt="朗朗城心"
        data-aos="fade-up"
        data-aos-delay="800"
        class="title3 absolute"
      >

      <div class="commingsoon absolute flex-ac flex-jb">
        <span>c</span>
        <span>o</span>
        <span>m</span>
        <span>m</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
        <span>s</span>
        <span>o</span>
        <span>o</span>
        <span>n</span>
      </div>
      <h3 class="txt absolute">萬騰廣告</h3>
    </div>
  </div>
</template>
<style lang="scss">
.cls-1 {
  opacity: 0.6;
}

.cls-2 {
  fill: #fff;
}

.st0 {
  fill: none;
  stroke: #ea5414;
  stroke-miterlimit: 10;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section1 {
  position: relative;
  height:100vh;
  background-color: #ea5414;
  z-index: 2;
}

.swing {
  width:100%;
  height: 200vh;
  margin-top:0;
  margin-left:auto;
  object-fit: cover;
  background-size: cover;
  animation: swing 5s 0s ease-in infinite;
}

.commingsoon {
  width: size(850 * 2);
  top:5vh;
  left: 0;
  right: 0;opacity: 0.6;
  margin: 0 auto;
  color: #eee;
  > span {
    font-size: 5vh;
    font-family: TrajanPro;
    display: block;
    opacity: 0;

    @for $i from 1 through 20 {
      &:nth-child(#{$i}) {
        animation: jump 1s #{2 + $i * 0.1}s ease-in forwards;
      }
    }
  }
}

@keyframes jump {
  0% {
    transform: translateY(0);
    opacity: 0;
  }

  50% {
    transform: translateY(-30px);
    opacity: 1;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes butter_fly {
  0% {
    transform: translate(0);
  }
  10% {
    transform: translate(0);
  }
  50% {
    transform: translate(60% , -60%);
  }
  to {
    transform: translate(120% , 0%);
  }

}
.move_butter_fly{
 height: 15vh;right:calc(50% - 56vh);
  animation: butter_fly 5s infinite alternate;
  top: 38vh;}
.bg-img{
  left: 0;top: 100vh;
  width: 100%;height: calc(100vh * 102 / 1080);
  background-size: cover;object-fit: cover;}
.title1 {
 // width: size(1222);
 height: 13vh;
  top: 15vh;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.title2 {
 height: 5.8vh;
  top: 33vh;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.title3 {
 height:26vh;
  top: 40vh;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.txt {
  bottom: size(50);
  right: size(33);
  font-size: size(23);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.93;
  letter-spacing: 2.3px;
  text-align: center;
  color: #080002;
}

@keyframes swing {
  0% {
    transform: skew(0);
  }

  50% {
    transform: skew(-3deg);
  }

  100% {
    transform: skew(0);
  }
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    position: relative;
   height:108vh;
    background-color: #ea5414;
    z-index: 2;
  }

  .commingsoon {
    width: size-m(300);
    top: size-m(30);
    left: 0;
    right: 0;
    margin: 0 auto;

    > span {
      font-size: size(70);
      font-family: TrajanPro;
      display: block;
      opacity: 0;

      @for $i from 1 through 20 {
        &:nth-child(#{$i}) {
          animation: jump 1s #{2 + $i * 0.1}s ease-in forwards;
        }
      }
    }
  }

  .swing {
    width: auto;
    height: auto;
    margin-top: auto;
    margin-left: auto;
    animation: swing 5s 0s ease-in infinite;
    transform-origin: bottom;
  }

  .title1 {
 height:auto;
 width: 70%;
  top: calc(35vh - 41vw);
  }

  .title2 {
 height:auto;
 width: 80%;
  top: calc(35vh + 15vw);
  }

  .title3 {
 height:auto;
 width: 80%;
  top: calc(35vh + 22vw);
  }

  .img1 {
    width: 108vw;
    margin-left: -4vw;
    height: calc(100vh - 63px);
  }

  .img2 {
    width: 100vw;
    height: calc(124vh - 63px);
  }

  .img3 {
    width: 100vw;
    height: calc(100vh - 63px);
  }
  .butterfly {
    width: 100vw;
    height: calc(100vh - 63px);
  }

  .txt {
    top: auto;
    bottom: 0;
    right: size-m(8);
    font-size: size-m(12);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.69;
    letter-spacing: 1.2px;
    text-align: center;
    color: #080002;
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

  methods: {},
  created() {},

  mounted() {},

  computed: {},
}
</script>