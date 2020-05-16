<template>
  <div class="section1">
    <div class="bg">
      <img
        :src="`${isMobile ? require('./s1/logo_m.png') : require('./s1/logo.png')}`"
        alt=""
        class="logo"
      >
      <div
        class="bright ball1"
      ></div>
      <div
        class="bright ball2"
      ></div>
      <div
        class="bright ball3"
      ></div>
      <div
        class="bright ball4"
      ></div>
      <div
        class="ball ball5"
      ></div>
      <div
        class="bright ball6"
      ></div>
      <div
        class="bright ball7"
      ></div>
      <div class="bright ball8"></div>
      <img
        src="./s1/ball/l.png"
        class="smile smile1"
      >
      <img
        :src="isMobile ? require('./s1/bubble-mo/1.png'): require('./s1/bubble/1.png')"
        alt=""
        :class="`bubble bubble1 ${bubble1 ? 'show' : ''}`"
      >
      <img
        :src="isMobile ? require('./s1/bubble-mo/2.png'): require('./s1/bubble/2.png')"
        alt=""
        :class="`bubble bubble2 ${bubble2 ? 'show' : ''}`"
      >
      <img
        :src="isMobile ? require('./s1/bubble-mo/3.png'): require('./s1/bubble/3.png')"
        alt=""
        :class="`bubble bubble3 ${bubble3 ? 'show' : ''}`"
      >
      <img
        :src="isMobile ? require('./s1/bubble-mo/4.png'): require('./s1/bubble/4.png')"
        alt=""
        :class="`bubble bubble4 ${bubble4 ? 'show' : ''}`"
      >
      <img
        :src="isMobile ? require('./s1/bubble-mo/5.png'): require('./s1/bubble/5.png')"
        alt=""
        :class="`bubble bubble5 ${bubble5 ? 'show' : ''}`"
      >
      <img
        :src="isMobile ? require('./s1/bubble-mo/6.png'): require('./s1/bubble/6.png')"
        alt=""
        :class="`bubble bubble6 ${bubble6 ? 'show' : ''}`"
      >
      <img
        :src="isMobile ? require('./s1/bubble-mo/7.png'): require('./s1/bubble/7.png')"
        alt=""
        :class="`bubble bubble7 ${bubble7 ? 'show' : ''}`"
      >
      <img
        :src="isMobile ? require('./s1/bubble-mo/8.png'): require('./s1/bubble/8.png')"
        alt=""
        :class="`bubble bubble8 ${bubble8 ? 'show' : ''}`"
      >
    </div>
  </div>
</template>
<style lang="scss">
.Masthead,
.Masthead__image {
  height: auto;
  min-height: 23.875rem;
}
.Masthead__image > img {
  height: auto;
  min-height: auto;
  object-fit: contain;
}

.Masthead__image.is-parallax > img {
  height: auto;
  min-height: auto;
}
.is-parallax {
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .Masthead,
  .Masthead__image {
    height: auto !important;
    min-height: 12.875rem;
  }
}
</style>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  height: 100vh;
  max-height: 1080px;
  background-color: #fddb3e;
  // background-image: url('./s1/kv_city_bg.jpg');
  background-position: bottom;
  background-repeat: no-repeat;
}

.logo {
  position: absolute;
  width: calc(100vw * 570 / 1920);
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
}

.ball {
  background-image: url(./s1/ball/ball.png);
  background-size: cover;
  position: absolute;
  animation: an 2s infinite alternate;
}

.bright {
  background-image: url(./s1/ball/bright.png);
  background-size: cover;
  position: absolute;
  animation: an 2s infinite alternate;
}

.smile {
  position: absolute;
  animation: an 2s infinite alternate;
}

.ball1 {
  width: size(242);
  height: size(242);
  top: size(40);
  left: size(20);
  transform: translateY(5%);
}

.ball2 {
  width: size(550);
  height: size(550);
  top: size(-100);
  right: size(-100);
  transform: translateY(-4%);
}

.ball3 {
  width: size(95);
  height: size(95);
  bottom: size(40);
  left: size(80);
  transform: translateY(-12%);
}

.ball4 {
  width: size(125);
  height: size(125);
  bottom: size(20);
  right: size(120);
  transform: translateY(-8%);
}

.ball5 {
  width: size(125);
  height: size(125);
  top: size(117);
  left: size(550);
  transform: translateY(-12%);
}

.ball6 {
  width: size(250);
  height: size(250);
  top: size(53);
  right: size(500);
  transform: translateY(-12%);
}

.ball7 {
  left: -30%;
  top: size(260);
  width: size(700);
  height: size(700);
  transform: translateY(-5%) rotate(180deg);
  animation: an1 2s infinite alternate !important;
}

.ball8 {
  width: size(60);
  height: size(60);
  top: size(530);
  right: size(220);
  transform: translateY(-15%);
}

.smile1 {
  height: size(215);
  top: size(570);
  right: size(20);
  transform: translateY(-8%);
}

// an 2s infinite alternate;
@keyframes an {
  to {
    transform: translateY(0);
  }
}

@keyframes an1 {
  to {
    transform: translateY(0) rotate(180deg);
  }
}

.bubble {
  position: absolute;
  transform: scale(0);
  opacity: 0;
  transition: all 0.3s;

  &.show {
    transform: scale(1);
    opacity: 1;
  }
}

.bubble1 {
  height: size(265);
  top: size(145);
  left: size(270);
}

.bubble2 {
  height: size(365);
  top: size(243);
  right: size(220);
}

.bubble3 {
  height: size(314);
  bottom: size(100);
  left: size(220);
}

.bubble4 {
  height: size(300);
  bottom: size(80);
  right: size(250);
}

.bubble5 {
  height: size(350);
  top: size(176);
  left: size(220);
}

.bubble6 {
  height: size(290);
  top: size(234);
  right: size(230);
}

.bubble7 {
  height: size(300);
  bottom: size(150);
  left: size(170);
}

.bubble8 {
  height: size(335);
  bottom: size(320);
  right: size(240);
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    height: 100vh;
    position: relative;
    margin: 0;
  }

  .logo {
    width: calc(100vw * 160 / 375);
  }

  .ball1 {
    width: size-m(85);
    height: size-m(85);
    top: size-m(-20);
    left: size-m(-20);
    transform: translateY(5%);
  }

  .ball2 {
    width: size-m(250);
    height: size-m(250);
    top: size-m(-100);
    right: size-m(-100);
    transform: translateY(-12%);
  }

  .ball3 {
    width: size-m(62);
    height: size-m(62);
    top: size-m(220);
    left: size-m(30);
    transform: translateY(-12%);
  }

  .ball4 {
    width: size-m(40);
    height: size-m(40);
    top: size-m(456);
    left: size-m(10);
    transform: translateY(-12%);
  }

  .ball5 {
    width: size-m(74);
    height: size-m(74);
    top: size-m(190);
    right: size-m(20);
    left: auto;
    transform: translateY(-12%);
  }

  .ball6 {
    width: size-m(63);
    height: size-m(63);
    top: size-m(430);
    right: size-m(30);
    transform: translateY(-15%);
  }

  .ball7 {
    left: -30%;
    top: size-m(260);
    width: size-m(159);
    height: size-m(159);
    transform: translateY(-15%) rotate(180deg);
  }

  .ball8 {
    width: size-m(21);
    height: size-m(21);
    top: size-m(512);
    right: size-m(20);
    transform: translateY(-8%);
  }

  .smile1 {
    height: size-m(108);
    top: size-m(280);
    right: size-m(-20);
    transform: translateY(-8%);
  }

  .bubble1 {
    height: size-m(130);
    top: size-m(35);
    left: size-m(20);
  }

  .bubble2 {
    height: size-m(141);
    top: size-m(24);
    right: size-m(22);
  }

  .bubble3 {
    height: size-m(154);
    bottom: size-m(40);
    left: size-m(20);
  }

  .bubble4 {
    height: size-m(137);
    bottom: size-m(40);
    right: size-m(20);
  }

  .bubble5 {
    height: size-m(137);
    top: size-m(20);
    left: size-m(22);
  }

  .bubble6 {
    height: size-m(130);
    top: size-m(50);
    right: size-m(22);
  }

  .bubble7 {
    height: size-m(134);
    bottom: size-m(40);
    left: size-m(40);
  }

  .bubble8 {
    height: size-m(140);
    bottom: size-m(50);
    right: size-m(20);
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
      bubbleIndex: 1,
      bubble1: true,
      bubble2: false,
      bubble3: false,
      bubble4: false,
      bubble5: false,
      bubble6: false,
      bubble7: false,
      bubble8: false,
    }
  },

  computed: {},

  watch: {
    bubbleIndex(val) {
      if (val === 1) {
        this.showBubble(val)
        this.hideBubble(8)
      } else {
        this.showBubble(val)
        this.hideBubble(val - 1)
      }
    },
  },

  methods: {
    showBubble(index) {
      this[`bubble${index}`] = true
    },
    hideBubble(index) {
      this[`bubble${index}`] = false
    },
  },

  created() {
    setInterval(() => {
      if (this.bubbleIndex === 8) {
        this.bubbleIndex = 1
      } else {
        this.bubbleIndex++
      }
    }, 2500)
  },
}
</script>
