<template>
    <div class="section5">      
      <div class="txt">
      <div class="title" v-if="!isMobile">人生得意須近山，有靠山才有好健康</div>
      <div class="title" v-else>人生得意須近山<br />有靠山才有好健康</div>
<div class="subtitle" v-if="!isMobile">購屋聰明學 / 愛山成迷的李白：近山，才有靠山</div>
<div class="subtitle" v-else>購屋聰明學 / <br />愛山成迷的李白：近山，才有靠山</div>



      <ul class="desc">
        <li>城森綠境，汲取不老青春露</li>
        <li>17公頃義學坑自然生態公園森情相伴</li>
        <li>或週休或閒暇入境森野</li>
        <li v-if="!isMobile">綠意環山、飽滿的芬多精與負離子，諧律吐納快活慢老</li>
        <li v-else>綠意環山、飽滿的芬多精與負離子</li>
        <li v-if="isMobile">諧律吐納快活慢老</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {  
  width:100%;
  height:auto;
  position: relative;
  margin:0;
  padding-top: 12.8em;
  z-index: 2;
  padding-bottom: 0.6vw;
  &::after{content: "";clear: both;display: block;height: 1px;}
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
  line-height: 1.4;
  z-index: 3;
  }

.title{
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
.greatminds{
  width: size(440); 
  fill:#333;
  .st1{
    fill:#A8282C;
  }
}
.desc {
  margin:3em auto 3em auto;
  line-height: 1.8;
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
  .section5 {
    padding-top: 0em;
  }


  .txt{
    position: relative;
    width: sizem(310);
    margin:1.5em auto 10em;
    left:0;
    top:0;
    font-size: sizem(14);
  }
.title{
  font-size:1.5em;
  margin:1em auto 0;
}
.subtitle{
  font-size:1.1em;
  margin:.6em auto 0;
}
.desc {
  margin:1em auto 3em auto;
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
  name: 'section5',

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
