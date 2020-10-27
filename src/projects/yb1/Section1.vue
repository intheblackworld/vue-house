<template>
  <div class="section1">
    <div class="bg">
      <!-- <img src="./s1/logo.png" alt="" class="logo absolute"> -->
      <img src="./s1/slogo1.png" alt="" class="slogo1 absolute">
      <img src="./s1/slogo2.png" alt="" class="slogo2 absolute">
      <img src="./s1/t1.png" alt="" class="t1 absolute">
      <img src="./s1/t2.png" alt="" class="t2 absolute" v-if="!isMobile">
      <img src="./s1/t2_m.png" alt="" class="t2 absolute" v-if="isMobile">
      <div class="icon1 absolute" v-if="!isMobile">
      <img src="./s1/icon.png" alt="" class="icon"></div>
      <div class="icon2 absolute"><img src="./s1/icon.png" alt="" class="icon"></div>
      <div class="btn flex-c absolute" v-scroll-to="{ element: `#contact`, offset: -100 }">立即預約</div>
    </div>
    <!-- <div class="bg" v-if="isMobile">
      <div class="vh1">
        <img src="./mo/1/txt.png" alt="有我們在幸福的未來就在現在" class="txt_mo">
      </div>
      <div class="vh2">
        <img src="./mo/1/1.jpg" alt="img1" class="img1_mo">
        <img src="./mo/1/2.jpg" alt="img2" class="img2_mo">
      </div>
    </div> -->
  </div>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
 // width: 100vw;
  background-size: contain;
  position: relative;
  // background-color: #fddb3e;
  // background-image: url('./s1/2020-10-21_163431.png');
  background-position:center center;
  background-repeat: no-repeat;
  overflow: hidden;
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  // pointer-events: none;
}

.t1 {
  width: size(581);
  top: calc(50% - 8.3vw);
  left: 0;
  right: 0;
  margin: 0 auto;
}

.t2 {
  width: size(901);
  top: calc(50% - 1.4vw);
  left: 0;
  right: 0;
  margin: 0 auto;
}

.slogo1 {
  width: size(150);
  bottom: 6%;
  left: size(801);
}

.slogo2 {
  width: size(125);
  bottom: 6%;
  left: size(992);
}

.icon1{
  width:calc(50vw - 74.5vh);
  min-width: size(146);
  max-width: size(286);
  top:58.2%;
  left:0;
  text-align: right;
  .icon{width: size(85);transform: rotate(20deg) scale(0.8);opacity: 0.8;animation: rotate1 1s infinite ease-in-out alternate;}
}
.icon2{
  width:calc(50vw - 72vh);
  min-width: size(173);
  max-width: size(317);
  top:57.3%;
  right:0;
  text-align: left;
  .icon{width: size(85);transform: rotate(-10deg) scale(0.8);opacity: 0.8;animation: rotate1 1s -0.5s infinite ease-in-out alternate;}
}
@keyframes rotate1 {
    50% {
      transform: rotate(10deg) scale(1);opacity:1;
    }
    to {
      transform: rotate(0deg) scale(0.8);opacity: 0.8;
    }
}
@keyframes rotate2 {
    50% {
      transform: rotate(0deg) scale(1);opacity:1;
    }
    to {
      transform: rotate(10deg) scale(0.8);opacity: 0.8;
    }
}

.btn {
  width: size(210);
  height: size(72);
  top: calc(50% + 10vw);
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 35px / 35px;
  font-size: size(33);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: size(3.3);
  text-align: center;
  color: #ff5f00;
  border: solid 3.8px #f80233;
  background: rgba(248, 2, 51, 0);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(248, 2, 51, 1);
    color: #fff;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    position: relative;
    margin: 0;
  height: calc(100vh - 63px);
  min-height: size-m(610);
  max-height: size-m(812);
  }
  .t1 {
    width: size-m(203);
    top: size-m(107);
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .t2 {
    width: size-m(250);
    top: size-m(153);
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .slogo1 {
    width: size-m(68);
    top: size-m(348);
    left: size-m(116);
  }

  .slogo2 {
    width: size-m(57);
    top: size-m(348);
    left: size-m(203);
  }
.icon2{
  width:100%;
  min-width: size-m(0);
  max-width: 100%;
    height:53vh;
    min-height: size-m(320);
    max-height: size-m(500);
  top:92.8vw;
  left:0;
  text-align: center;
  .icon{position: absolute;top:40%;left:41%;
    width: size-m(37);transform: rotate(-10deg) scale(0.8);opacity: 0.8;animation: rotate1 1s infinite ease-in-out alternate;}
}

  .btn {
    display: none;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
// import Parallax from '@/components/Parallax.vue'

export default {
  name: 'section1',

  components: {
    // Parallax,
  },
  data() {
    return {
      isMobile,
    }
  },
  computed: {},

  watch: {},

  methods: {},
  created() {},
}
</script>
