<template>
  <div class="section4">
    <div class="title">熱銷建案</div>
    <h3 class="subtitle">
      Hot Case
    </h3>
  <!--  圖片寬度隨個數變化  字可以放在圖上(把t1t2拿掉)也可以直接打文字  index=1 是內頁設定  所以放新的請檢查一下-->
    <div class="list">
    <div class="img" @click="$router.push('/hot?index=1#section1')"><img src="./s4/05.jpg" alt="" /><span class="t1">淡水淡海段</span><span class="t2">琢渼</span></div>
    <div class="img" @click="$router.push('/hot?index=2#section1')"><img src="./s4/04.jpg" alt="" /><span class="t1">汐止北山段</span><span class="t2">琢壹</span></div>
  </div>


    <img src="./s4/bg.png" alt="" class="img3">
    <div class="btn flex-c" @click="$router.push('/hot')">瞭解更多</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: size(1920);
  height: size(1100);
  //overflow: hidden;
  position: relative;
  background-image: linear-gradient(
    to bottom,
    #ffffff,
    #f8f8f8 19%,
    #dbe5c9 48%,
    #99b568
  );
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  &:nth-child(1) {
    position: relative;
  }
}

.title {
  @include div_l_pc(346, 112, 64, 287);
  font-size: size(60);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing:0.2em;
  text-align: left;
  color: #606060;
  white-space: nowrap;
}

.subtitle {
  @include div_l_pc(160, 54, 100, 600);
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ff8200;
  white-space: nowrap;
}
.list{
  @include img_l_pc(670, 190, 287);
  display: flex;
  gap: size(10);
  font-size: size(23);
  height:size(550);

.img{flex: 1;position: relative;color: #fff;height: 100%;text-shadow: 0 2px 2px #0006;
  cursor: pointer;
  img{width: 100%;height: 100%;object-fit: cover;}
.t1{position: absolute;color: #fff000;right: 1em;top: 1em;width: 1em;}
.t2{position: absolute;right: 2.5em;top: 1em;width: 1em;}
}
}

.img1 {
  @include img_l_pc(270, 190, 287);
  cursor: pointer;
}
.img4 {
  @include img_l_pc(600, 190, 287);
  cursor: pointer;
}

.img2 {
  @include img_l_pc(270, 190, 597);
  cursor: pointer;
}

.img3 {
  @include img_r_pc(1000, -150, 15);
}

.btn {
  @include div_l_pc(182, 46, 1114, 310);
  background-color: rgba(255, 130, 0, 0.7);
  cursor: pointer;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
  font-size: size(23.8);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.74);
  text-align: center;
  color: #fffcfd;
  border-radius: 5px;
  transition: all 0.3s;
  z-index: 5;
  position: absolute;
  &:hover {
    background-color: rgba(255, 130, 0, 1);
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
  .section4 {
    width: 100vw;
    min-height: sizem(900);
    // max-height: sizem(812);
    // height: 100vh;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .title {
    @include div_l_m(375, 40, 96, 0);
    font-size: sizem(28);
    text-align: center;
  }

  .subtitle {
    @include div_l_m(375, 21, 141, 0);
    font-size: sizem(15);
    text-align: center
}
.list{
    @include img_l_m(355, 190, 10);
  gap: sizem(10);
  height:sizem(300);
  font-size: sizem(13);
  }

  .img1 {
    @include img_l_m(156, 218, 22);
  }
  .img4{
    @include img_l_m(330, 218, 22);
  }

  .img2 {
    @include img_l_m(156, 218, 197);
  }

  .img3 {
    @include img_r_m(367, 640, 4);
    top: auto;bottom: 0;
  }

  .btn {
    display: none;
    // @include div_l_pc(182, 46, 1114, 310);
    // background-color: rgba(255, 130, 0, 0.7);
    // cursor: pointer;
    // text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
    // font-size: size(23.8);
    // font-weight: normal;
    // font-stretch: normal;
    // font-style: normal;
    // line-height: 1.2;
    // letter-spacing: size(3.74);
    // text-align: center;
    // color: #fffcfd;
    // border-radius: 5px;
    // transition: all 0.3s;
    // z-index: 5;
    // position: absolute;
    // &:hover {
    //   background-color: rgba(255, 130, 0, 1);
    // }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section4',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {
    // @slideChangeTransitionEnd="slideChanged"
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  mounted() {},

  created() {},

  computed: {},
}
</script>
