<template>
  <div class="section1">
    <div v-if="!isMobile">
      <!-- <img src="./s1/" :alt="`${info.caseName}_f1`" class="f1"> -->
    </div>
    <div v-else>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
  background-size: auto;
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
  top: calc(50% - 8vw);
  right: size(442);
}

.t {
  width: size(404);
  top: calc(50% + 3.5vw);
  right: size(442);
}

.btn {
  width: size(165);
  top: calc(50% + 15vw);
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
import info from '@/info'

export default {
  name: 'section1',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
    }
  },

  methods: {},

  mounted() {
  },

  created() {},

  computed: {},
}
</script>
