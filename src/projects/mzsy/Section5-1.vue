<template>
    <div class="section2">      
      <div class="txt">
      <div class="title" data-aos="zoom-in">人生得意須近山，有靠山才有好健康</div>
<div class="subtitle" data-aos="fade-up" data-aos-delay="200">購屋聰明學 /愛山成迷的李白：近山，才有靠山</div>



      <ul class="desc">
        <li data-aos="zoom-in" data-aos-delay="200">城森綠境，汲取不老青春露
</li>
        <li data-aos="zoom-in" data-aos-delay="300">17公頃義學坑自然生態公園森情相伴</li>
        <li data-aos="zoom-in" data-aos-delay="400">或週休或閒暇入境森野</li>
        <li data-aos="zoom-in" data-aos-delay="500">綠意環山、飽滿的芬多精與負離子，諧律吐納快活慢老</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {  
  width:100%;
  height:auto;
  position: relative;
  margin:0;
  padding-top: 12.8em;
  z-index: 2;
  padding-bottom: 0.6vw;
}
.txt{
  position: relative;
  width: size(1500);
  margin:0em auto 0em;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  font-size: size(19);
  font-weight: 600;
  line-height: 1.6;
  z-index: 3;
  }

.title{
  position: relative;
  font-size: size(44);
  margin:0 auto 1em;
  letter-spacing:0em;
  font-weight: 900;
}
.title2{
  position: relative;
  font-size: size(44);
  margin:0 auto 1em;
  letter-spacing:0em;
  font-weight: 900;
}
.subtitle{
  position: relative;
  font-size:1.3em;
  margin:.6em auto 0;
  letter-spacing:0.03em;
  font-weight: 900;
  color: #B28247;
}
.title3{
  position: relative;
  font-size: size(42);
  margin:0em auto 0em;
  letter-spacing:0em;
  font-weight: 900;
  color:#B28247;
}
.greatminds{
  width: size(440); 
  fill:#333;
  .st1{
    fill:#A8282C;
  }
}
.desc {
  margin:3em auto 3em auto;
  line-height: 1.85;
  letter-spacing:0.05em;
  list-style: circle;
  overflow: hidden;
  li{margin: 0.0em 0 0.0em 0;
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
  .section2 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
    padding-top: 0em;
  }


$ww:sizem(33);
.w{
width:sizem(150);
top:sizem(170);
left: auto;
right: 0;
height:calc( #{$ww} * 0.67 * 5);
  &::after{
  width: calc(100% + #{$ww});
  background-size: $ww auto;
  transform: translateX(-#{$ww});
  }
}
.tree{
  position: absolute;
  top:calc(40% + (410 - 650 * .4) * 100vw / 375);
  font-size: sizem(20);
}

  .txt{
    position: relative;
    width: sizem(310);
    margin:1.5em auto 6em;
    left:0;
    top:0;
    font-size: sizem(15);
  }
.title{
    font-size: sizem(23);
  letter-spacing:0.01em;
}
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    height: sizem(205);
    top:0;
    left:0;
  }
.swipe-item {
  .slide-name {
    font-size: sizem(12);
  }
}
  .swipe-btns {
  font-size: sizem(15);
  }
}

</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section2',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    viewIndex() {
      if (this.viewIndex === 7) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
