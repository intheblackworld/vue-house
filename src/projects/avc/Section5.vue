<template>
  <div class="section5">
    <img src="./s1/b.png" alt="" class="b1">
    <img src="./s1/b.png" alt="" class="b2">
    <img src="./s1/b.png" alt="" class="b3">
    <img src="./s2/img.png" alt="" class="img1">
    <img src="./s4/img.png" alt="" class="img2">

    <img src="./s5/map.png" alt class="map" />
    <!-- <img src="./s5/icon.png" alt class="icon" />  -->
    <div v-if="isMobile" @click="isDialog = true" class="logobg1 flex-c" data-aos="fade-up" data-aos-delay="400">
      <h3>點圖放大</h3>
    </div>
    <div class="dialog" v-show="isDialog">
      <div class="dialog-content">
        <img class="close" @click="isDialog = false" src="./all/close.png" alt="close">
        <img src="./s5/map.png" alt class="dialog-map" />
   <!--  <img src="./s5/icon.png" alt class="dialog-icon" /> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.map {
  height: 99%;
  top:0%;
}

.icon {
  position: absolute;
  height:size(119);
  top:46%;
  left: 44%;
  z-index: 2;
}

.icon {
  transform: translateY(-3%);
  animation: heartbeat 0.5s ease-in alternate infinite;
}

.b1 {
  @include img_r_pc(330, 0, -150);
  animation: an 1.5s infinite alternate;
  transform: translateY(-20px);
}

.b2 {
  @include img_l_pc(410, 780, -180);
  animation: an 2.5s infinite alternate;
  transform: translateY(-20px);z-index: 2;
}

.b3 {
  @include img_l_pc(330, -200, -100);
  animation: an 2.5s infinite alternate;
  transform: translateY(20px);
}


.img1 {
  @include img_l_pc(292, 920, -50);
  animation: an 4s infinite alternate;
  transform: translateY(-30px);
}

.img2 {
  @include img_l_pc(357, 0, -130);
  animation: an 3s infinite alternate;
  transform: translateY(30px);
}

@keyframes an {
  to {
    transform: translate(0);
  }
}

@keyframes an2 {
  to {
    transform: translateY(0) rotate(5deg);
  }
}

@keyframes heartbeat {
  to {
    transform: translateY(0);
  }
}
@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section5 {
    width: 100vw;
    height: sizem(453 + 28);
    min-height: sizem(453 + 28);
    .bg {
      width: 100%;
      max-width: 100%;
    }
  }

  .map {
    width: auto;
    height: sizem(453);
    top: 0;
    left: 0;
  }

  .icon {
  //  @include img_l_m(50, 199, 290);
  height:sizem(70);
  left:sizem(300);
  top:sizem(210);
    z-index: 2;
    animation: none;
  }

  .b1 {
    @include img_l_m(55, 250, 110);
    z-index: 5;
  transform: translate(10%,10%);
  }

  .b2 {
    @include img_l_m(100, -150, 100);
    z-index: 5;
  transform: translate(0,20%);
  }

  .b3 {
    display: none;
  }

  .b4 {
    display: none;
  }

  .img1 {
    display: none;
  }

  .img2 {
    display: none;
  }

  .logobg1 {
    // div位置：width: size(656), height: size(708) top: size(113), right: size(182)
    @include div_r_m(144, 156, 149, 119);
    background-image: url('./s1/logobg.png');
    background-size: cover;
    z-index: 1;
    color: #000;
    h3 {
      margin-top: sizem(-20);
      margin-left: sizem(-10);
    }
  }

  .dialog {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: #F3E12B;
    overflow: scroll;
.dialog-content{height: 100%;width:  sizem(1138);position: relative;}
    .dialog-map {
      width:  sizem(1138);
      height: 100%;
      background-color: #F3E12B;
    }
    .dialog-icon {
      width: auto;
      height: sizem(119);
      position: absolute;
  top:46%;
  left: 40%;
  animation: heartbeat 0.5s ease-in alternate infinite;
     // background-color: #fff;
    }

    .close {
      width: 35px;
      background: rgba(0, 0, 0, 0.7);
      padding: 5px;
      position: fixed;
      right: 10px;
      top: 10px;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section5',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
