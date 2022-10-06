<template>
  <div>
    <div class="section2">
      <div class="bgbox">
      <div class="bg" uk-parallax="viewport:.9;y:0,-16%;" v-if="isMobile" >
      <img src="./s2/bgm.jpg" alt="" class="bgimg" />
   <img src="./s1/gif4.gif" class="gif" />
   <img src="./s1/gif4.gif" class="gif2" />
    </div>
      <div class="bg" uk-parallax="viewport:.8;y:0,-15%,-28%,-40%,-50%;" v-else >
      <img src="./s2/group1.jpg"  alt="" class="bgimg"/>
   <img src="./s1/gif4.gif" class="gif" />
   <img src="./s1/gif4.gif" class="gif2" />
    </div>
      <div class="txt" >
      <div class="title" uk-parallax="viewport:0.6;scale: 2,1,1;opacity: 0,1,1">多數人想像</div>
      <div class="subtitle" uk-parallax="viewport:0.8;scale: 2,1,1;opacity: 0,1,1">GRAND RIVERSIDE</div>
      <div class="desc" uk-parallax="viewport:1;scale: 2,1,1;opacity: 0,1,1">少數人私享</div>
      </div>
    </div>

      <div class="txt2">
      <div class="title" data-aos="fade" data-aos-delay="0" >即｜將｜公｜開</div>
      <div class="subtitle" data-aos="fade" data-aos-delay="200" >COMING SOON</div>
      <div class="desc" data-aos="fade" data-aos-delay="400"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width:100%;
  height:auto;
  position: relative;
  margin:0 auto 5vw;
  padding:0;
  // background:#FFF;
&::after{content: "";clear: both;display: block;}
&::before{content: "";clear: both;display: block;height: calc((#{size(1080)} - 100vh) * .5);max-height:size(100);min-height: 0;}
}

.bgbox{position: relative;overflow: hidden;
  margin:0 auto size(36);width: size(1836);z-index: 1;
  height: size(1100);background:#093768;

}
.bg{position: relative;width: 100%;z-index: 1;
  img{width: 100%;}
}
.gif{
    position: absolute;
    height: size(300);z-index: 2;
    top: size(1000);opacity: .5;left: 0;right: 0;margin: auto;
    left: 0;mix-blend-mode: soft-light;filter: blur(0.05vw);
  }
  .gif2{
    position: absolute;
    height: size(555);z-index: 2;
    top: size(1300);opacity: .2;left: 0;right: 0;margin: auto;
    mix-blend-mode: soft-light;filter: blur(0.05vw);
  }
  

.txt{
  position: absolute;
  top: size(130);left: 0;right: 0;margin: auto;
  font-stretch: normal;
  font-style: normal;
  text-align:center;
  font-size: size(40);
  line-height: 1.6;
  z-index: 2;
  color: #fff;
  font-weight: 400;

.title{
  font-size:1.6em;
  margin:0 auto 0;
  font-weight: 600;
  letter-spacing:0.7em;
  text-indent:0.6em;
}
  .subtitle{font-size: 1em;
  font-weight: 400;
    padding: 0;
    font-family:'Playfair Display', serif;

  letter-spacing:0.88em;
    
  }
.desc {
  font-size:1.6em;
  font-weight: 300;
  letter-spacing:0.7em;
  text-indent:0.6em;
}

  }
.txt2{
  position: relative;margin: auto;
  font-stretch: normal;
  font-style: normal;
  text-align:center;
  font-size: size(40);
  line-height: 1.6;
  z-index: 2;
  color: #fff;
  font-weight: 400;

.title{
  font-size:1.25em;
  margin:1.1em auto 0;
  font-weight: 600;
  letter-spacing:0.48em;
  text-indent:0.15em;
  color: #C9A063;
  transform: scaleX(2);
}
  .subtitle{font-size: 1em;
  font-weight: 400;
    padding: 0 0 0.45em 0;
    font-family:'Playfair Display', serif;
  letter-spacing:0.12em;
  transform: scaleX(1.5);
  }
  .desc{width: 5.5em;height: 2px;display: block;background: #C9A063;margin: auto;
  transform: scaleX(0);}

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
  margin:0 auto 23vw;

  }
.bgbox{
  margin:0;width:100%;;
  height:sizem(550);;background:#093768;

}
.gif{
    width: 100%;
    height: sizem(100);
  top: sizem(440);
  }
.gif2{
    width: 100%;
    height: sizem(117);
  top: sizem(540);
  }
  .txt{
  top: sizem(85);
    font-size: sizem(14);
  line-height: 1.9;
.title,
.desc {
  font-size:1.7em;
}
  }
.txt2{
    font-size: sizem(17);
.title{
  font-size:1.76em;
  letter-spacing:0.05em;
  margin:2.6em auto 0;

}

}
}
</style>
<script>
// @ is an alias to /src
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
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
      slideList: [
        /*
        {
          img: require('./s4/1.jpg'),
          name: '台中市政府',
        },
        */
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    viewIndex() {
      if (this.viewIndex === 3) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
