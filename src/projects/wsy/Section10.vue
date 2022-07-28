<template>
  <div class="section10"><!-- 
    <img src="./s1/0.jpg" alt="`${info.caseName}_bg" class="t0">  -->
    <div class="c" data-aos="fade" data-aos-delay="0" data-aos-duration="1900">
      <img src="./all/3.png" alt="3" class="c4">
      <div class="c3"><img src="./all/3.png" alt="3"></div>
      <img src="./all/2.png" alt="2" class="c2">
      <img src="./all/1.png" alt="1" class="c1">
    </div>
    <div class="txt">
      <img src="./s1/logo.png" data-aos="zoom-in" data-aos-delay="0" alt="logo" class="logo">
      <div class="t1"  data-aos="zoom-in" data-aos-delay="400">行政中心站3分鐘<span></span>35、40坪</div>
      <div class="t2" data-aos="zoom-in" data-aos-delay="400">全新落成  正式公開</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
  z-index: 2; 
  margin: 0 0 5vw;
&::before{content: "";
background: url("./s1/bg.jpg") fixed;position: absolute;top: 0;left: 0%;display:block;width: 100%;height: 100%;}
}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top: 0;left: 0;object-fit: cover;
  opacity: 0.5;
  }
.c{
      position: absolute;left:0;right:0;top:0;
    // top:calc(50% + (0 - 540) * 100vw / 1920);
   > img,
   > div{
      position: absolute;
      animation:an 5s ease-in-out infinite alternate;}
    .c1{
      width:size(797);top:size(495);left: size(-90);
      transform:rotate(3deg);
      transform-origin: 50% 100%;
      animation-delay: -1.5s;
      }
    .c2{
      width:size(649);top:size(35);left: size(-20);
      transform:rotate(3deg);
      transform-origin: 50% 100%;
      animation-delay: -2s;}
    .c3{
      width:size(520);top:size(240);left:size(270);
      transform:rotate(3deg);
      transform-origin: 50% 100%;
      img{width: 100%;
      transform:rotate(-33deg);}
      }
    .c4{
      width:size(596);top:size(620);left:size(180);
      transform:rotate(3deg);
      transform-origin: 50% 100%;
      animation-delay: -1s;
      }

  }


@keyframes an{
    to{
      transform: translateX(0);
    }
}
.logo{
      width:size(708);
  }
.txt{
  position: absolute;
      top:calc(50% + (318 - 540) * 100vw / 1920);
  left:size(900);
  font-size: size(44);
  line-height: 1.6;
  color: #fff;
  text-align: left;
  width:size(850);
    letter-spacing:0.03em;
  .t1{
    width: 100%;
  text-align: center;
  color: #d3a96e;
  font-weight: 700;
  font-size: 1.14em;
        margin:0.65em 0 0.25em;
  span{border-left: 1px solid #FFF; height: 1em;margin: 0 .4em .25em .4em;
          vertical-align: middle;
          display: inline-block;}
    }
  .t2{
  text-align: center;
  font-weight: 600;
        &::after,
        &::before{
          content: "";
          display: inline-block;
          width: 1.5em;
          background:#d3a96e;
          height: 1px;
          vertical-align: middle;margin: 0 .7em .2em .7em;
        }

  }
  .t3{
    font-size:2.3em;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.02em;
    .button{
    font-size:0.68em;
      cursor: pointer;
      display: inline-block;
      border:2px solid #52b559;
      width: 5.2em;
      vertical-align: middle;
      margin: 0 0.5em 0.2em 0;
      padding: 0 0 0.1em 0;
      transition: all 0.3s;
      &:hover{
        background:#52b559cc;
        color: #FFF;
      }
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section10 {
    min-height: sizem(604);
    max-height: sizem(750);
    height: calc(100vh - 63px);
  margin: 0 0 0;
&::before{
  background-size:sizem(700);
}
  }

.c{
   top:calc(50% + (0 - 302) * 100vw / 375);
    .c1{width:sizem(245);top:sizem(422);left: sizem(70);}
    .c2{width:sizem(230);top:sizem(310);left: sizem(-5);}
    .c3{width:sizem(161);top:sizem(309);left:sizem(130);}
    .c4{width:sizem(182);top:sizem(420);left:sizem(186);}
}

.logo{
   width:sizem(276);  margin-left:sizem(25);
  }
.txt{
   left:sizem(0);
   top:calc(50% + (76 - 302) * 100vw / 375);
   width: 100%;
  font-size: sizem(20);
  .t1{ 
        margin:0.5em 0 0; }
  .t2{
    letter-spacing: 0.04em;
        margin:0;
    }
}

}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section10',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
