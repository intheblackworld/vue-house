<template>
  <div>
    <div class="section7">
      <div class="txt">
        <div class="title" data-aos="fade-down" data-aos-delay="200" ><span>i Be Myself</span>減擔付款 拎包就住</div>
        <div class="line" data-aos="fade" data-aos-delay="200" ></div>
        <div class="subtitle" data-aos="fade-down" data-aos-delay="300">結構工程0付款 可期待的起漲未來</div>
        <div class="desc" data-aos="fade-up" data-aos-delay="300">都會新貴、新婚成家、子女置產，換住更好<br>
  一屋百搭，低自備款、輕鬆付款，坐享其漲
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {  
  width: size(1920);
 /*  height: size(1358);
  max-height: size(1358); */
  position: relative;
   overflow: hidden;
}
.imgbg{position: fixed;bottom: 0;right: size(-520);width: size(805);z-index: 1;opacity: 0.6;}
.txt{
  position: relative;
  width: size(610);
margin: size(233) auto ;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  font-size: size(18);
  font-weight: 500;
  line-height: 1.2;
  z-index: 3;
  }

.title{
  position: relative;
  font-size:2.72em;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: normal;
  color: #000;
  span{
  color: #d03636;
  font-size:1.43em;
  font-family: Georgia;
  margin:0;
  display: block;
  }
}

.subtitle {
  position: relative;
  font-size: size(30);
  margin:1.5em auto 0.8em;
  letter-spacing:0.04em;
  color: #d03636;
}
.line {
  position: relative;
  background-color: #888;
  width:100%;
  height: size(2);
  margin: 2em 0 0.5em 0;
}
.desc {
  margin:1em auto;
  font-size: size(18);
  line-height: 2;
  letter-spacing:0.05em;
  color: #666666;
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
  .section7 {
    width: 100vw;
    height: auto;
  }
.txt{
  width: sizem(310);
margin: sizem(100) auto ;
  font-size: sizem(15);
  
.title{
    font-size: sizem(30);}
  }
  .subtitle {
    font-size: sizem(18);}
  .desc {
    font-size: sizem(15);
    line-height: 1.73;
  }
}
</style>
<script>
// @ is an alias to /src
import info from "@/info";
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section7',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s2/1.jpg'),
          name: '外觀 3D情境示意圖',
        },
        {
          img: require('./s2/2.jpg'),
          name: '外觀 3D情境示意圖',
        },
        {
          img: require('./s2/3.jpg'),
          name: '外觀 3D情境示意圖',
        },
        {
          img: require('./s2/4.jpg'),
          name: '外觀 3D情境示意圖',
        },
        {
          img: require('./s2/5.jpg'),
          name: '外觀 3D情境示意圖',
        },
      ],
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
