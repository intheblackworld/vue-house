<template>
  <div class="section1">
    <img src="./s1/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
    <img src="./s1/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img an" v-if="isPC">
    <img src="./s1/bg_m.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile">
    <img src="./s1/t.png" :alt="`${info.caseName}_t`" class="t" v-if="isPC" data-aos="fade" data-aos-delay="200">
    <img src="./s1/t_m.png" :alt="`${info.caseName}_t`" class="t" v-if="isMobile" data-aos="fade" data-aos-delay="200">
    <div class="title" data-aos="fade-down" data-aos-delay="300">
      What is great in man<br />
      is that he is a bridge<br />
      and not an end.
    </div>
    <div>
      <div class="subtitle" data-aos="fade" data-aos-delay="600">
        「人之所以偉大，<br v-if="isMobile" />是因為他是一座橋樑，而非目的。」
      </div>
      <div class="hr" data-aos="fade" data-aos-delay="600"></div>
      <div class="name" data-aos="fade" data-aos-delay="600">
        弗里德里希·<span>尼采</span>
      </div>
    </div>
    <!-- <div class="cloud">
    <img src="./s1/cloud1.png" alt="cloud" class="cloud1">
    <img src="./s1/cloud2.png" alt="cloud" class="cloud2">
    <img src="./s1/cloud3.png" alt="cloud" class="cloud3">
    <img src="./s1/cloud4.png" alt="cloud" class="cloud4">
    </div>
    <img src="./s1/bg.png" alt="bg" class="bg-img bg1" v-if="isPC">
    <img src="./s1/bg_m.png" alt="bg_m" class="bg-img bg1" v-if="isMobile">
    <img src="./s1/2.png" alt="2" class="bg-img bg2">
    <h1 class="title">立瑾建築機構</h1>
    <h1 class="desc">
      百年建築 將心構築<br /><br />

      以人為本，用心建設。<br />
      致力打造百年穩固、永世怡居的好建築。
    </h1> -->
    <div class="bottom"></div>
      <div class="modal" v-if="modal">
        <div class="mask" @click="modal = false"></div>
        <div>
          <img src="./s1/pc1.jpg" alt v-if="!isMobile" />
          <img src="./s1/mo1.jpg" alt v-else />
          <img src="./s1/pc2.jpg" class="img2" alt v-if="!isMobile" @click="$router.push('/hot/#top')" />
          <img src="./s1/mo2.jpg" class="img2" alt v-else  @click="$router.push('/hot/#top')"/>
          <img src="./close.png" alt class="close" @click="modal = false" />
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: calc(100vh + 15.5vw);
  min-height: size(1100);
  max-height: size(1235);
  overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
  background: linear-gradient(
    to bottom,
    rgba(29, 125, 209, 1) 0%,
    rgba(20, 135, 241, 1) 21%,
    rgba(59, 183, 255, 1) 65%,
    rgba(171, 220, 255, 1) 99%
  );
}
.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
}
.an {
  animation: oxxo 40s linear infinite;
}
@keyframes oxxo {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  90% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1.22);
    opacity: 0;
  }
}

.bottom {
  @include div_r_pc(1920, 78, 0, 0);
  top: auto;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 size(300) size(3020);
  border-color: transparent transparent #008fbb transparent;
}

.t {
  @include img_r_pc(1920, 0, 0);
  top: calc(35% - 25vw);
}

.title {
  @include div_l_pc(876, 409, 615, 180);
  height: auto;
  top: auto;
  bottom: size(320);
  font-size: size(93);
  font-weight: normal;
  font-family: 'gothic';
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: -0.04em;
  text-align: left;
  color: #ffe900;
}

.subtitle {
  @include div_r_pc(628, 69, 757, 167);
  height: auto;
  top: auto;
  bottom: size(375 + 50);
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.58);
  font-size: size(26.2);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
  white-space: nowrap;
}

.hr {
  @include div_r_pc(444, 1, 821, 338);
  top: auto;
  bottom: size(345 + 50);
  background-color: #fff;
}

.name {
  @include div_r_pc(146, 34, 795, 180);
  height: auto;
  top: auto;
  bottom: size(330 + 50);
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.58);
  font-size: size(17.9);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
  white-space: nowrap;
  span {
    font-size: size(23.2);
    white-space: nowrap;
  }
}

.modal{  
  width: 100vw;
    height: 100vh;
    z-index: 1001;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .mask{
      background: rgba(0,0,0,.7);
      width: 100%;
      height: 100%;
      z-index: 2;
      position: absolute;
    }
    > div{position: relative;}
@keyframes oop {
  40% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
    img{position: relative;
      z-index: 122;
      max-width: calc(100vw - 140px);
      max-height: calc(100vh - 100px);
      &.img2{
        position: absolute;
        top: 0;left: 0;
    opacity: 1;
    animation: oop 4s linear alternate infinite;

      }
    }
    .close {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(130%);
    cursor: pointer;
    width: 30px;
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
    min-height: sizem(670);
    max-height: sizem(812);
    height: sizem(700);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .t {
    @include img_r_m(375, 0, 0);
  }

  .hr {
    @include div_r_m(170, 1, 592, 168);
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.58);
    background-color: #fff;
  }

  .name {
    @include div_r_m(140, 22, 579, 22);
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.58);
    font-size: sizem(15);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: right;
    color: #ffffff;
    white-space: nowrap;
    span {
      font-size: sizem(20);
      white-space: nowrap;
    }
  }

  .bottom {
    @include div_r_m(375, 34, 0, 0);
    top: auto;
    bottom: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 size(300) size(3020);
    border-color: transparent transparent #008fbb transparent;
  }

  .title {
    @include div_r_m(302, 149, 400, 35);
    font-size: sizem(32);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.16;
    letter-spacing: sizem(-1.28);
    text-align: left;
    color: #ffe900;
    white-space: nowrap;
  }

  .subtitle {
    @include div_r_m(253, 56, 531, 93);
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.58);
    font-size: sizem(15);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include div_r_m(325, 192, 83, 27);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(3);
    text-align: center;
    color: #ffffff;
  }


  .modal{  
    img{
      max-width: calc(100vw - 70px);
      max-height: calc(100vh - 140px);
    }
    .close {
    transform: translateY(-130%);
  }
}

}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import { setInterval } from 'timers'
import info from '@/info'

export default {
  name: 'section1',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      dog1: true,
      dog2: false,
      isPlay: false,
      modal: true,
    }
  },
  methods: {
    playMusic() {
      if (this.isPlay) {
        this.$refs.audio.pause()
        this.isPlay = false
      } else {
        this.$refs.audio.play()
        this.isPlay = true
      }
    },
  },

  mounted() {
    this.$refs.audio.play()
  },

  created() {
    setInterval(() => {
      this.dog1 = !this.dog1
      this.dog2 = !this.dog2
    }, 3000)
  },
}
</script>
