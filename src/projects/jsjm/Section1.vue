<template>
  <div class="section1">
    <canvas id="c"></canvas>
    <canvas id="bg"></canvas>
    <div v-if="!isMobile">
      <img src="./s1/bgs2.png" alt="" class="bg-img">
      <img src="./s1/bg4s.png" alimg="" class="bg-img">
      <img src="./s1/logo.png" alt="" class="logo absolute">
      <img src="./s1/t.png" alt="" class="t absolute">
    </div>
    <div v-else>
      <div class="fade-in">
        <div class="bg1 absolute"></div>
        <div class="bg2 absolute"></div>
        <div class="bg3 absolute"></div>
      </div>
    <img src="./s1/bgs2_m.png" alt="" class="bg-img">
      <img src="./s1/bg4s_m.png" alimg="" class="bg-img fade-out">
      <div class="fade-in">
        <img src="./s1/logo_m.png" alt="" class="logo absolute">
        <img src="./s1/t.png" alt="" class="t absolute">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  background:none;
  background-size: auto;
  background-attachment: fixed;
  overflow: hidden;
  position: relative;
}

#c {
  opacity: 0.8;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: multiply;
}

.bg-img {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;

  &:nth-child(1) {
    position: relative;
  }
}

.logo {
  width: size(404);
  top: size(416);
  right: size(442);
}

.t {
  width: size(404);
  top: size(646);
  right: size(442);
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
  .section1 {
    width: 100vw;
    min-height: 0;
    max-height: 500vh;
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
.bg1,
.bg2,
.bg3{top:0;height: 100%;
  background:  url('./s1/bg.png') fixed;
  background-size: auto;
  background-position: 0 0%;
  background-repeat: repeat;}
.bg1{left: 10%;width: 5%;}
.bg2{left: 18%;width: 60%;}
.bg3{left: 82%;width: 9%;}

  .img-left {
    width: sizem(261);
    top: sizem(-15);
    left: sizem(123);
    transform: rotate(90deg);
  }

  .fade-out {
    animation: fadeout 3s 3s ease-in-out forwards;
  }

  .fade-in {
    margin-top: -30%;
    opacity: 0;
    animation: fadein 3s 4s ease-in-out forwards;
  }

  @keyframes fadeout {
    to {
      transform: translateY(10%);
      opacity: 0;
    }
  }

  @keyframes fadein {
    to {
      margin-top: 0%;
      opacity: 1;
    }
  }

  .logo {
    width: sizem(172);
    top: sizem(160);
    right: sizem(101);
  }

  .t {
    width: sizem(300);
    top: sizem(455);
    right: sizem(37);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  mounted() {
    //initial
    let c = document.getElementById('c')
    let w = (c.width = window.innerWidth)
    let h = (c.height = window.innerHeight) * 1.5
    let ctx = c.getContext('2d')
    //parameters
    let total = w / 2
    let accelleration = 0.01
    //afterinitial calculations
    let size = (w / total) * 8
    let occupation = w / total
    let repaintColor = 'rgba(255, 255, 255, .07)'
    let colors = []
    let dots = []
    let dotsVel = []
    //setting the colors' hue
    //and y level for all dots
    let portion = 360 / total
    for (let i = 0; i < total; ++i) {
      colors[i] = portion * i

      dots[i] = h
      dotsVel[i] = 10
    }
    function anim() {
      window.requestAnimationFrame(anim)

      ctx.fillStyle = repaintColor
      ctx.fillRect(0, 0, w, h)

      for (let i = 0; i < total; ++i) {
        let currentY = dots[i] - 1
        dots[i] += dotsVel[i] += accelleration

        ctx.fillStyle = '#929292'
        ctx.fillRect(occupation * i, currentY, size, dotsVel[i] + 1)

        if (dots[i] > h && Math.random() < 0.002) {
          dots[i] = dotsVel[i] = 0
        }
      }
    }

    anim()
  },

  created() {},

  computed: {},
}
</script>
