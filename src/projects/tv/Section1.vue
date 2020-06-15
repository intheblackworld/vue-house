<template>
  <div class="section1">
    <div class="bg relative">
    <img src="./s1/bgv.gif" alt="" class="img img_bg">
    <img src="./s1/g.png" alt="" class="img g">
    <img src="./s1/f.png" alt="" class="img f">
    <img src="./s1/logo.png" alt="THE VIEW 新板特區2.0" class="img logo"
            data-aos="fade"
            data-aos-delay="300">

    <div class="txt t1"
            data-aos="fade"
            data-aos-delay="600">新板城中多儷人</div>
    <div class="txt t2"
            data-aos="fade"
            data-aos-delay="900">高層景觀飯店寓所</div>
    <div class="txt t3"
            data-aos="fade"
            data-aos-delay="1200">妳值得  THE VIEW  寵愛妳</div>
    <!--    <div>
        <div class="img_bg" @scroll="hide = true">
        <div class="img_bg_c">
        <img src="./s1/mo/bg.jpg" alt="" class="img content" v-if="isMobile">
        <img src="./s1/light1.png" alt="" class="img light1">
        <img src="./s1/light2.png" alt="" class="img light2">
        <img src="./s1/arrow.png" alt="" :class="`img arrow ${hide ? 'hide' : ''}`">
        </div>
        </div>
        <div class="img light4">
          <div class="light_b"></div>
          <img src="./s1/light4.jpg" alt="">
        </div>
        <img src="./s1/logo.png" alt="" class="img logo">
        <div class="img light3">
          <img src="./s1/light3a.png" class="l3_1" alt="">
          <img src="./s1/light3a.png" class="l3_2" alt="">
          <img src="./s1/light3a.png" class="l3_3" alt="">
          <img src="./s1/light3a.png" class="l3_4" alt="">
        </div>
      </div>  -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
// for svg
</style>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  height: 100vh;
  font-size: calc(100vw * 23 / 1920);
}
.img_bg_c{position: relative;} 
.img {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  
  &:nth-child(1) {
    position: relative;
   // height: 100vh;
  }
  &.g{
    height:auto;width:calc(100vw * 759 / 1920);left:9.8vw;
  }
  &.f{
    height:auto;width:calc(100vw * 484 / 1920);left:8.5vw;
  top:19.5vw;mix-blend-mode:hard-light;
    animation: ro 7s linear infinite;
  }
  &.logo{
    height:auto;width:calc(100vw * 540 / 1920);left:56.6vw;
  top:50%;margin-top:calc(100vw * -175 / 1920);
  }
}
.txt{font-family: "Noto Serif TC", serif;font-weight: bold;
  position: absolute;
  color: #666;
  left:70.6%;
  bottom: 5%;
  line-height: 1.7;
   &.t1{
  font-size: 1.6em;
    margin: 0 0 2.7em -4em;
  letter-spacing: 0.27em;
  font-weight: 600;
   }
   &.t2{
     background-color:#ba9262;width: 11.5em;
  color: #fff;
  font-size: 1.2em;
  font-weight: 400;
    margin: 2.3em 0 1.8em -5.3em;letter-spacing: 0.2em;
   }
   &.t3{
  font-size: 1em;
    margin: 5em 0 0 -6.2em;letter-spacing: 0.1em;
   }
  }
  /*
  &.light2{
    animation-delay:1s
  }
  &.light3{
    mix-blend-mode:screen;
    img{position: absolute;top:0;left: 50%;transform:translate(-50%,-50%) rotate(0deg);transform-origin: center center;
    animation: ro 2s linear infinite;width:0;height: 0;opacity: 1;}
    .l3_1{top: 13vw;left: 41%;}
    .l3_2{top: 8.5vw;left: 49.5%;animation-delay:0.5s}
    .l3_3{top: 14vw;left: 58.5%;animation-delay:1s}
    .l3_4{top: 8.5vw;left: 63%;animation-delay:1.5s}
  }
  &.light4{mix-blend-mode:screen;width: 100%;height: 100%;}
.light_b{
  width:300%;height: 100%;position: absolute;left:-200%;animation: light_b 5s  infinite;
  background: -moz-linear-gradient(-45deg,  rgba(0,0,0,1) 0%, rgba(0,0,0,1) 34%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 66%, rgba(0,0,0,1) 100%);
background: -webkit-linear-gradient(-45deg,  rgba(0,0,0,1) 0%,rgba(0,0,0,1) 34%,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 66%,rgba(0,0,0,1) 100%);
background: linear-gradient(135deg,  rgba(0,0,0,1) 0%,rgba(0,0,0,1) 34%,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 66%,rgba(0,0,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000',GradientType=1 );
}*//*
@keyframes op {
    to {
        opacity: 1;
    }
}
@keyframes light_b {
    to {
        left:0;
    }
}
@keyframes arrow {
    to {
        transform: translateX(2%)
    }
}*/

@keyframes ro {
    to {
        transform:rotate(360deg);
    }
}


/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    height:calc(100vh - 63px);
      position: relative;
  font-size:1.4vh;
  }

  .section1 {
    .bg {
      overflow: hidden;
    }
  }

  .img {
    &:nth-child(1) {
      height: 100%;left:0vw;object-position: 15% 50%;
    }
    &.g{
      height:auto;width:46vh;left:calc(50% - 23vh - 52px);
      top: auto;bottom:-15vh;
    }
    &.f{
      height:auto;width:30vh;left:calc(30% - 15vh - 52px);
    top:19.5vw;
      top: auto;bottom:3vh;
    }
    &.logo{
      height:auto;width:30vh;left:calc(50% - 15vh);
    top:10%;margin-top:0;
    }
  }
.txt{
  left:50%;
  bottom:auto;
  top: calc(10% + 23vh);

  /*
  bottom: 5%;
  line-height: 1.7;
   &.t1{
  font-size: 1.6em;
    margin: 0 0 2.7em -4em;
  letter-spacing: 0.27em;
  font-weight: 600;
   }
   &.t2{
     background-color:#ba9262;width: 11.5em;
  color: #fff;
  font-size: 1.2em;
  font-weight: 400;
    margin: 0 0 1.8em -5.3em;letter-spacing: 0.2em;
   }
   &.t3{
  font-size: 1em;
    margin: 0em 0 0 -6.2em;letter-spacing: 0.1em;
   }
   */
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
      hide: false,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {
    // if (this.isMobile) {
    //   setTimeout(() => {
    //     const frame = document.querySelector('.img_bg')
    //     const content = document.querySelector('.img_bg_c .content')
    //     console.log(frame)
    //     console.log(content)
    //     frame.scrollTo(content.clientWidth * 20 / 100, 0)
    //   }, 500)

    //   setTimeout(() => {
    //     this.hide = false
    //   }, 700)
    // }
  }
}
</script>