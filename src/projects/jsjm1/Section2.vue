<template>
  <div class="section1">
    <canvas id="c2"></canvas>
    <div>
      <img src="./s2/bg.png" alt="" class="bg-img">
      <img src="./s2/title.png" alt="" class="title absolute">
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

#c2 {
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
  height: 100%;
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

.btn {
  width: size(165);
  top: size(888);
  right: size(562);
  font-size: size(18);
  letter-spacing: size(2);
  white-space: nowrap;
  cursor: pointer;
  color: #9e0d1b;
  border-bottom: 1px solid #9e0d1b;
  padding: size(10) 0;
  z-index: 10;
  transition: all .3s;

  &:hover {
    background: #9e0d1b;
    color: #fff;
  }
}

.title {
  width: size(104);
  top: size(148);
  left: size(574);
  cursor: pointer;
  transition: all .5s;
  &:hover {
    transform: scale(1.05);
    opacity: .7;
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
  .section1 {
    width: 100vw;
    min-height: sizem(470);
    max-height:sizem(812);
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
    top:calc(50% - 43vw);
    right: sizem(101);
  }

  .t {
    width: sizem(300);
    top: calc(50% + 35vw);
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
    let c = document.getElementById('c2')
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
