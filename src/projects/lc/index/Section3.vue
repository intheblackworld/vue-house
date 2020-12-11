<template>
  <div class="section3">
    <h1 class="title">真心構築</h1>
    <h1 class="subtitle">
      真正的建築，以人為本<br />
      真正的用心，將心匠情
    </h1>
    <div class="bottom"></div>
    <div class="imgs flex-ac flex-jb">
      <div class="img">
        <img src="./s3/1.jpg" alt="">
        <div class="border-orange"></div>
        <div class="mask">
          <div class="border flex-c">
            真心<br />穩固
          </div>
        </div>
      </div>
      <div class="img">
        <img src="./s3/2.jpg" alt="">
        <div class="border-orange"></div>
        <div class="mask">
          <div class="border flex-c">
            真心<br />建材
          </div>
        </div>
      </div>
      <div class="img">
        <img src="./s3/3.jpg" alt="">
        <div class="border-orange"></div>
        <div class="mask">
          <div class="border flex-c">
            真心<br />建材
          </div>
        </div>
      </div>
      <div class="img">
        <img src="./s3/4.jpg" alt="">
        <div class="border-orange"></div>
        <div class="mask">
          <div class="border flex-c">
            真心<br />設計
          </div>
        </div>
      </div>
      <div class="img">
        <img src="./s3/5.jpg" alt="">
        <div class="border-orange"></div>
        <div class="mask">
          <div class="border flex-c">
            真心<br />生活
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  height: size(904);
  overflow: hidden;
  position: relative;
  background-image: linear-gradient(
    to bottom,
    #ffffff,
    #f8f8f8 24%,
    #dbe5c9 49%,
    #99b568
  );
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: auto;
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

.title {
  @include div_l_pc(346, 112, 64, 287);
  font-size: size(75.5);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(15.02);
  text-align: left;
  color: #606060;
  white-space: nowrap;
}

.subtitle {
  @include div_l_pc(437, 142, 72, 726);
  font-size: size(34);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: size(6.77);
  text-align: left;
  color: #ff8200;
  white-space: nowrap;
}

.imgs {
  width: size(1623);
  top: size(346);
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  .img {
    width: size(315);
    height: size(315);
    position: relative;
    border-radius: 999px;
    overflow: hidden;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.48);
    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      .mask {
        opacity: 0;
      }
    }
  }
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 1;transform: scaleX(1);
    transition: all .5s;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 999px;
  }

  .border {
    width: 100%;
    height: 100%;
   // box-shadow: inset 0 0 0 10px #fff;
    border: 10px solid #FFF;
    border-radius: 999px;
    font-size: size(57.7);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.34;
    letter-spacing: normal;
    text-align: left;
    color: #ff8200;
  }

  .border-orange {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 999px;
    border: 10px solid #fe8100;
  }
}

.bottom {
  @include div_r_pc(1920, 78, 0, 0);
  top: auto;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: size(320) 0 0 size(1920);
  border-color: transparent transparent transparent #fff;
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
  .section3 {
    width: 100vw;
    min-height: sizem(604);
    max-height: sizem(812);
    height: 100vh;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: 100%;
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

  .title {
    @include div_r_m(130, 41, 23, 115);
    font-size: sizem(28);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(5.02);
    text-align: left;
    color: #606060;
    white-space: nowrap;
  }

  .subtitle {
    @include div_r_m(176, 74, 70, 99);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(2.77);
    text-align: left;
    color: #ff8200;
    white-space: nowrap;
  }

  .imgs {
    width: sizem(375);
    top: sizem(146);
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    display: block !important;
    .img {
      width: sizem(150);
      height: sizem(150);
      position: relative;
      border-radius: 999px;
      overflow: hidden;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.48);

      &:nth-child(1) {
        display: inline-block;
        margin: 0 sizem(15);
      }
      &:nth-child(2), &:nth-child(4), &:nth-child(5) {
        display: inline-block;
        margin: 0 sizem(15);
      }

      &:nth-child(3) {
        margin: sizem(15) auto;
      }
      img {
        width: 100%;
        height: 100%;
      }

      &:hover {
        .mask {
          opacity: 0;
        }
      }
    }
    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.7);
    }

    .border {
      width: 100%;
      height: 100%;
    //  box-shadow: inset 0 0 0 10px #fff;
      border-radius: 999px;
      font-size: sizem(26);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.34;
      letter-spacing: normal;
      text-align: left;
      color: #ff8200;
    }

    .border-orange {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      //box-shadow: inset 0 0 0 7px #fe8100;
      border-radius: 999px;
    }
  }

  .bottom {
    @include div_r_m(375, 173, 0, 0);
    top: auto;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: sizem(173) 0 0 sizem(375);
    border-color: transparent transparent transparent #fff;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section3',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {
    // @slideChangeTransitionEnd="slideChanged"
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  mounted() {},

  created() {},

  computed: {},
}
</script>
