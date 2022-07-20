<template>
  <article class="section1">
  <img class="a1" src="./s1/mo.jpg" alt="" /><!--   -->

<div class="img">
  <img src="./s1/leaf1.png" data-aos="fade" data-aos-duration="1000" class="leaf1" alt="" loading="lazy" />
  <img src="./s1/leaf2.png" data-aos="fade" data-aos-duration="1000" class="leaf2" alt="" loading="lazy" />
  <img src="./s1/leaf3.png" data-aos="fade" data-aos-duration="1000" class="leaf3" alt="" loading="lazy" />
  <img src="./s1/leaf4.png" data-aos="fade" data-aos-duration="1000" class="leaf4" alt="" loading="lazy" />
</div>
<div class="txt">
<h2 class="t1" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000">佳鋐建設</h2>
<h3 class="t2" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">品味東區 千坪綠意</h3>
<h3 class="t3" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000">即將公開</h3>
<h3 class="t4" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1000">都會時尚‧仁和商圈</h3>
<h3 class="t5" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1000">289-5555</h3>
</div>


</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  background-image: url('./s1/bg.jpg');
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
}
.a1{position: absolute;top: 0;left: 0;width: 100%;opacity: .5;}

.img{position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
  img{position: absolute}
  .leaf1{
    width:32.5%;
    left: 10.5%;
    top: -30.8vw;
    transform:translate(-40% , 30%) rotate(0deg);
  }
  .leaf2{
    width:24%;
    left: 55.5%;
    top: -29.5vw;
    transform:translate(-40% , -30%) rotate(-10deg);
  }
  .leaf3{
    width:50.68%;
    left: 52%;
    top: -3.5vw;
    transform:translate(-40% , 0%) rotate(20deg);
  }
  .leaf4{
    width:47%;
    left: 1.1%;
    top: 10vw;
    transform:translate(-40% , 0%) rotate(-10deg);
  }
}

.txt{
  @include img_c_pc(1800, 271);
  top: calc(50% + (205 - 540) * 100vw / 1920);
  font-size:size(48);
  line-height: 1.45;
  letter-spacing: 0.08em;
  transform: scaleX(0.9);
  z-index: 3;
  color:#FFF;}
.t1{
  font-family:'Noto Sans TC', serif;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-shadow: 0.05em 0.08em 0.2em #0009;
}
.t2{
  font-size: 1.85em;
  letter-spacing: 0.09em;
  text-shadow: 0.05em 0.08em 0.2em #0009;
  &::after{
    content: "";
    width: 2px;
    height: 1.2em;
    display: block;
    margin: -.23em auto;
    background: #fff;
  }
}
.t3{
  font-size: 1.8em;
  letter-spacing: 0.29em;
  text-shadow: 0.05em 0.08em 0.2em #0009;}
.t4{
  margin: 0.15em auto 0;
  font-size: 1.1em;
  color:#2d4e4a;
  font-family:'Noto Sans TC', serif;
  font-weight: 600;}
.t5{
  background: linear-gradient(to right, #fbe56100 0%,#fbe56199 20%,#fbe56199 80%,#fbe56100 100%);
  font-size: 1.45em;
  color:#2d4e4a;
  font-family:'Noto Sans TC', serif;
  font-weight: 600;
  width: 8.5em;
  margin: 0.05em auto 0;
  line-height: 1.1;
  padding: 0 0 0.1em;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    background-image: url('./s1/bgm.jpg');
    min-height: sizem(667);
    max-height: sizem(812);
    height:100vh;
}
  
.img{
  .leaf1{
    width:32.5%;
    left: 10.5%;
    top: -30.8vw;
  }
  .leaf2{
    width:24%;
    left: 55.5%;
    top: -29.5vw;
  }
  .leaf3{
    width:50.68%;
    left: 52%;
    top: -3.5vw;
  }
  .leaf4{
    width:47%;
    left: 1.1%;
    top: 10vw;
  }
}
.txt{
  font-size:sizem(20);
  top: calc(50% + (205 -  667 * .5) * 100vw / 375);
  
.t2{
  &::after{
    height: 2.3em;
    margin: .19em auto;
  }
}
}

}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import UIkit from 'uikit';
export default {
  name: 'section1',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      UIkit,
      // blockIndex: 0,
    }
  },

  methods: {},

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {},
}
</script>
