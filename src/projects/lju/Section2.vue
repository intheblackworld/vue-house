<template>
  <div class="section2">
    <div class="flex-jc flex-at relative frame" ref="frame">
      <div :class="`mask absolute ${!showMask ? 'hide' : ''}`"></div>
      <img src="./s2_bg.jpg" alt class="bg" ref="bg" />
      <img src="./s2_hand.png" alt class="hand" />
      <div
        class="text absolute"
        data-aos="fade"
        data-aos-offset="50"
        data-aos-delay="0"
        data-aos-duration="2000"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <icon class="icon" :data="txt1" />
        <svgLine />
        <icon class="icon" :data="txt2" />
        <div
          class="number absolute number1"
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-mirror="true"
          data-aos-once="false"
        >424</div>
        <div
          class="number absolute number2"
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-mirror="true"
          data-aos-once="false"
        >7755</div>
      </div>
      <div class="bubble-container absolute">
        <div
          class="bubble1"
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="100"
          data-aos-duration="2000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <bubble1 />
        </div>
        <div
          class="bubble2"
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="100"
          data-aos-duration="2000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <bubble2 />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  width: 100vw;
  height: calc(100vh - 60px);
}
.hand {
  display: none;
}

.mask {
  display: none;
}
.text {
  width: 920px;
  height: 130px;
  margin-top: 100px;
  top: 10%;

  .number {
    font-family: Calibri !important;
    font-size: 100px;
    font-weight: bold;
    color: #d33828;
  }

  .number1 {
    left: 118px;
    top: -32px;
  }

  .number2 {
    right: 70px;
    top: -32px;
  }
}

.bubble-container {
  width: 918px;
  bottom: 0px;

  .bubble1,
  .bubble2 {
    position: absolute;
    width: 138px;
    height: 125px;
    svg {
      width: 100%;
    }
  }

  .bubble1 {
    left: 118px;
    bottom: 50px;
  }

  .bubble2 {
    right: 90px;
    bottom: 50px;
  }
}
.text > svg {
  width: 420px;

  &:nth-child(2) {
    width: 78px;
  }

  img {
    width: 100%;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .hand {
    position: absolute;
    z-index: 2;
    display: block;
    width: 56px;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 5%;
    display: block;
    animation: swing 2.5s ease-in-out 0s infinite;
  }

  .mask {
    width: 100vw;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
    height: calc(100vh - 123px);
    display: block;

    &.hide {
      display: none;
    }
  }

  @keyframes swing {
    0% {
      transform: translateX(20px);
    }

    50% {
      transform: translateX(-20px);
    }

    100% {
      transform: translateX(20px);
    }
  }
  .bg {
    width: auto;
    height: calc(100vh - 123px);
  }

  .frame {
    display: block;
    overflow-x: scroll;
    z-index: 10;
    width: 100vw;

    img {
      display: block;
    }

    .text {
      width: 850px;

      .number {
        font-size: 80px;
      }

      .number1 {
        left: 155px;
        top: 0px;
      }

      .number2 {
        right: 113px;
        top: 0px;
      }
    }

    .text > svg {
      width: 320px;

      &:nth-child(2) {
        width: 78px;
      }

      img {
        width: 100%;
      }
    }
  }

  .bubble-container {
    width: 850px;
  }
}
</style>

<script>
import txt1 from '@/assets/svg/s2_txt1.svg'
import txt2 from '@/assets/svg/s2_txt2.svg'
import svgLine from './s2_txt'
import bubble1 from './bubble1'
import bubble2 from './bubble2'
export default {
  name: 'section2',
  components: {
    svgLine,
    bubble1,
    bubble2,
  },

  data() {
    return {
      txt1,
      txt2,
      showMask: true,
    }
  },

  methods: {
    // handleScroll(e) {
    //       <div class="m">
    //   <div class="box1"></div>
    //   <div class="box2">
    //     <div class="img">
    //       <img src="https://i.imgur.com/epuG7Sh.jpg">
    //       <div class="b1"><img src="https://i.imgur.com/xwpJdj7.png" /></div>
    //       <div class="b2"><img src="https://i.imgur.com/xwpJdj7.png" /></div>
    //       <div class="n1"></div>
    //       <div class="n2"></div>
    //     </div>
    //   </div>
    //   <div class="box3"></div>
    // </div>
    //   // let st = e.target.scrollTop
    //   // console.log(st)
    //   // if (st >= 100 && st < 150) {
    //   //   $('.img').css({
    //   //     position: 'fixed',
    //   //   })
    //   //   $('.img img').css({ left: -st + 100 })
    //   //   $('.b1').removeClass('v')
    //   // } else if (st <= 450 && st >= 150) {
    //   //   $('.img img').css({ left: -50 })
    //   //   $('.b1').addClass('v')
    //   // } else if (st >= 450 && st <= 890) {
    //   //   $('.img img').css({ left: -st + 400 })
    //   //   $('.b1').removeClass('v')
    //   // } else if (st >= 890 && st <= 1190) {
    //   //   $('.img img').css({ left: -490 })
    //   //   $('.b1').addClass('v')
    //   // } else if (st >= 1190 && st <= 2000) {
    //   //   $('.img img').css({ left: -st + 700 })
    //   //   $('.b1').removeClass('v')
    //   // } else {
    //   //   $('.img').css({
    //   //     position: 'relative',
    //   //   })
    //   //   $('.img img').css({ left: 0 })
    //   // }
    // },
  },

  mounted() {
    this.$refs.frame.addEventListener('scroll', () => {
      this.showMask = false
    })
  },
}
</script>
