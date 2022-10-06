<template>
  <div class="section1">
    <!-- 
   -->
    <!-- 
    <img src="./s1/mo.jpg" class="t0" />
   -->
    <img src="./s1/bg.jpg" class="bg" />
   
   <img src="./s1/gif4.gif" class="gif" />
   <div class="img">
    <img src="./s1/1.png" data-aos="zoom-in" data-aos-delay="0" class="img1" />
    <img src="./s1/2.png" data-aos="zoom-in" data-aos-delay="300" class="img2" />
    <img src="./s1/2.png" data-aos="zoom-in" data-aos-delay="100" class="img3" />
    <img src="./s1/3.png" data-aos="zoom-in" data-aos-delay="400" class="img4" />
    </div>
    <div class="txt">
      <div class="t1" data-aos="zoom-in" data-aos-delay="600">沁心丰景<br />自在人生<span>。</span></div>
      <div class="t2" data-aos="zoom-in" data-aos-delay="800">仁者樂山，智者樂水</div>
      <div class="t3" data-aos="zoom-in" data-aos-delay="900">11-25坪 河岸第一排</div>
      <div class="t4" data-aos="zoom-in" data-aos-delay="1000">搶先預約</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1070);
 // overflow: hidden;
  position: relative;
  // background: url("./s1/bg.jpg") center;
  // background-size: 100% auto;
  margin-bottom:4vw;
}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top:0;
  left:0;object-fit: cover;
  opacity: .5;
  }
.bg{
  position: absolute;
  width: 100%;height:auto;
  top: calc(50% + (0 - 535) * 100vw / 1920);
  left:0;object-fit: cover;
  }
  
  .gif{
    position: absolute;
    width:100%;
    height: size(360);
    // top: size(718);
    top: calc(50% + (718 - 535) * 100vw / 1920);
    opacity: .5;
    left: 0;mix-blend-mode: soft-light;filter: blur(0.05vw);
  }
  
  .img1{
    position: absolute;
    width: size(400);
    // top: size(495);
    top: calc(50% + (495 - 535) * 100vw / 1920);
    left: size(140);
    transform-origin: 50% 100%;
  }
  .img2{
    position: absolute;
    width: size(237);
    // top: size(800);
    top: calc(50% + (800 - 535) * 100vw / 1920);
    left: size(470);
    transform-origin: 50% 100%;
  }
  .img3{
    position: absolute;
    width: size(250);
    // top: size(445);
    top: calc(50% + (450 - 535) * 100vw / 1920);
    right: size(175);
    transform-origin: 50% 100%;
  }
  .img4{
    position: absolute;
    width: size(170);
    // top: size(530);
    top: calc(50% + (535 - 535) * 100vw / 1920);
    right: size(425);
    transform-origin: 50% 100%;
  }

.txt{
  position: relative;
 // top:calc(50% + (200 - 1080 * 0.5) * 100vw / 1920);
 // top:size(195);
  top: calc(50% + (195 - 535) * 100vw / 1920);
  font-size: size(30);
  line-height: 1.2;
  color: #000;
  text-align: center;
    letter-spacing:0.02em;
    padding: 0 0 0 0;
  font-weight: 500;
  
  .t1{
  font-size: 4.26em;
  font-weight: 700;
  position: relative;
  span{
    position: absolute;top: 1.35em;left: calc(50% + 2.36em);
  font-size: 0.625em;
  font-weight: 500;
  }
    }
  .t2{
  font-size:1.5em;letter-spacing: 0.25em;
  margin: 0.4em 0 0 .3em;
  }
  .t3{
  font-size:1em;
  margin: 6.3em 0 1.2em 0;
  color: #FFF;
  &::after,
  &::before{
    content: "";height: 2px;background: currentColor;width: 3em;display:inline-block;vertical-align: middle;margin: 0 .5em;
  }
  }
  .t4{
  font-size: 0.8em;letter-spacing: 0.3em;
  color: #C9A063;
  border: 1px solid #C9A063;display:inline-block;
  text-align: center;width: 9em;line-height: 1.5;padding: 0.2em 0;
  border-radius: 1em;
  text-indent:0.3em;
  cursor: pointer;
  overflow: hidden;
  &::after{content:"";display: block;background: #FFF6;position: absolute;left: -5%;top: 0;width:120%;height: 2em;z-index: -1;transform: skewX(-30deg)translateX(-100%);transition:transform .2s ;transform-origin: 0 0;
}

  &:hover{
  color: #FFF;background-color: #C9A063;
  &:after{transform:skewX(-30deg)translateX(100%);}
  }
  }


}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    min-height: sizem(667);
    max-height: sizem(812);
    overflow: hidden;
    margin: 0;
  }
.bg{
  height:100%;
  top:0;
  }
  .gif{
    width:200%;
    height: sizem(280);
    top: calc(70% + (435 - 667 * .7) * 100vw / 375);
    left: -50%;
  }
  .img1{
    width: sizem(200);
    top: calc(70% + (260 - 667 * .7) * 100vw / 375);
    left: sizem(-90);
  }
  .img2{
    width: sizem(120);
    top: calc(90% + (540 - 667 * .90) * 100vw / 375);
    left: sizem(5);
  }

  .img3{
    width: sizem(80);
    top: calc(64% + (355 - 667 * .64) * 100vw / 375);
    right: sizem(5);
  }
  .img4{
    width: sizem(55);
    top: calc(64% + (380 - 667 * .64) * 100vw / 375);
    right: sizem(80);
  }



.txt{
  font-size: sizem(16);
  top:calc(60% + (60 -  667 * .60) * 100vw / 375);
  line-height: 1.1;

  .t1{
  font-size: 3.5em;
  line-height: 1.4;
  span{top: 1.8em;
  }
  }

  .t2{
  font-size:1.2em;

  }
  .t3{
  margin: 14em 0 1.2em 0;
}
  .t4{
  font-size: 1.2em;
}
}


}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

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
