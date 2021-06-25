<template>
  <div class="section10">
    <div class="button">
      <div class="button1" @click="showDialog('https://www.eyehouse.co/i?c=c7957066829')"><h3>A1樣品屋<br>VR 720 實境觀看</h3></div>
      <div class="button2" @click="showDialog('https://www.eyehouse.co/i?c=c6935839981')"><h3>B1樣品屋<br>VR 720 實境觀看</h3></div>
      <div class="button3" @click="showDialog('https://www.eyehouse.co/i?c=c533952085')"><h3>風禾公園<br>VR 720 實境觀看</h3></div>
    </div>
      <div :class="`dialog`" v-if="isShowDialog">
        <div
          class="close"
          @click="closeDialog"
        >
          <img
            src="../jh/s4/close.png"
            alt
          />
        </div>
    <div
      class="contact-indigator"
      v-scroll-to="{ element: `#contact` }"
      @click="closeDialog"
    >預約賞屋</div>
        <div class="dialog-content">
           <iframe
            width="560"
            height="315"
            :src="link"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
  </div>
  <!-- <div class="section10">
    <iframe src="https://www.h35.banner.tw/hy/" frameborder="0"></iframe>
  <div class="box_l"></div>
  <div class="box_r"></div>
  </div> -->
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width: 100%;
  height: size(500);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:size(30);
.button{
  width: size(1720);
  margin:size(100) auto auto auto;
  display: flex;
   justify-content:space-between;
div{
  width: size(557);
  height: size(443);
  background-position: center center;
  background-size: cover;
  border: 1px solid #aa915e;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  line-height: 1.6;
  letter-spacing: 0.06em;
  &::before{position: absolute;width: 100%; height: 100%;left: 0;top:0;
  background: #000;opacity:0.7;transition:opacity 0.5s;content: "";z-index: 1;
  }
  h3{opacity:1;transition:opacity 0.5s; position: relative;z-index: 2;}
  &:hover{

  h3{opacity:0;}
    &:before{opacity:0;}
  }
}
.button1{background-image: url("./s10/1.jpg");cursor: pointer;}
.button2{background-image: url("./s10/2.jpg");cursor: pointer;}
.button3{background-image: url("./s10/3.jpg");cursor: pointer;}


}

.dialog {
  width: 100%;
  height: 100vh;
  display: block;
  z-index: 150;
  position: fixed;
  top: 0;
  left: 0;
  background: #0006 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin: auto; background: none; display: block; shape-rendering: auto; animation-play-state: running; animation-delay: 0s;' width='370px' height='370px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E%3Cg transform='rotate(0 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47.5' y='23' rx='2.4' ry='2.4' width='5' height='16' fill='%23d1914c' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.9166666666666666s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(30 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47.5' y='23' rx='2.4' ry='2.4' width='5' height='16' fill='%23d1914c' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.8333333333333334s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(60 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47.5' y='23' rx='2.4' ry='2.4' width='5' height='16' fill='%23d1914c' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.75s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(90 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47.5' y='23' rx='2.4' ry='2.4' width='5' height='16' fill='%23d1914c' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.6666666666666666s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(120 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47.5' y='23' rx='2.4' ry='2.4' width='5' height='16' fill='%23d1914c' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.5833333333333334s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(150 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47.5' y='23' rx='2.4' ry='2.4' width='5' height='16' fill='%23d1914c' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.5s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(180 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47.5' y='23' rx='2.4' ry='2.4' width='5' height='16' fill='%23d1914c' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.4166666666666667s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(210 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47.5' y='23' rx='2.4' ry='2.4' width='5' height='16' fill='%23d1914c' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.3333333333333333s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(240 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47.5' y='23' rx='2.4' ry='2.4' width='5' height='16' fill='%23d1914c' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.25s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(270 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47.5' y='23' rx='2.4' ry='2.4' width='5' height='16' fill='%23d1914c' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.16666666666666666s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(300 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47.5' y='23' rx='2.4' ry='2.4' width='5' height='16' fill='%23d1914c' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.08333333333333333s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(330 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47.5' y='23' rx='2.4' ry='2.4' width='5' height='16' fill='%23d1914c' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='0s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3C/svg%3E") no-repeat center center;
  background-size:3em auto;

  .close {
    width: 30px;
    height: 30px;
    cursor: pointer;

    position: fixed;
    z-index: 10;
    top: 18px;
    right: 20px;
    img {
      width: 100%;
    }
  }

  &.hide {
    display: none;
  }

  .dialog-content {
    width: 100%;
    height: 100vh;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%) !important;
    background: transparent;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}

  .contact-indigator {
    position: absolute;
    top: 3em;
    right: .2em;
    background: #C00;
    margin: 0;
    padding: 0.4em;
    color: #fff;
    border-radius: .5em;
    cursor: pointer;
    line-height: 1.5;
    width: 7em;
    transition: all 0.3s;
    z-index: 8;
    font-size: 23px;
    &:hover {
    background: #900;
   // background: rgba(0, 40, 130, 0.4);
    }
  }
}

/*
iframe {
  width: 100%;
  height: 100%;
}
.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  top: size(153);
  left: 0;
  display: block;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}
.box_l,
.box_r{
  position: absolute;
  top: 0;
  width:size(300);
  height:calc(100% - 93px);
  &::before{content: "";width: 8px;height: 100px;position: absolute;
  top: 100%;}
}
.box_l{
  left: 0;
  &::before{left: 0;}
}
.box_r{
  right: 0;
  &::before{right: 0;}
}
*/

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
  .section10 {
    width: 100%;
    height: sizem(604);
  font-size:sizem(17);
  
.button{
  width:100%;height:sizem(500);align-items:center;
  margin:sizem(30) auto auto auto;flex-direction:column;
div{
  width:sizem(310);
  height: sizem(154);
}
  }
  }
 /* .section10 {
    width: 100%;
    height: sizem(604);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
    &::after,
    &::before {
      display: none;
    }
  }
.box_l,
.box_r{
  width:sizem(60);
}
*/
  
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'


export default {
  name: 'section10',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      showMask: isMobile,
      isShowDialog: false,
      link: '',
    }
  },

  methods: {
    hideMask() {
      this.showMask = false
    },

    showDialog(link) {
      this.link = link
      this.isShowDialog = true
    },

    closeDialog() {
      this.isShowDialog = false
      // this.$refs[`dialogVideo${index}`].pause()
    },
  },

  created() {},

  mounted() {
  },

  computed: {},

}
</script>
