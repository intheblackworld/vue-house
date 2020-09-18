<template>
  <div>
    <div class="section3 flex-c">
      <div class="opacity-3-bg">
        <div class="ink-1 absolute" v-if="isMobile" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200"><img src="./s2/ink1.png" alt="ink"></div>
        <div class="ink-2 absolute" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="1200"><img src="./s2/ink1.png" alt="ink"></div>
        <div class="ink-3 absolute" data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="1200"><img src="./s2/ink2.png" alt="ink"></div>
        <div class="ink-4 absolute" v-if="isMobile" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200"><img src="./s2/ink2.png" alt="ink"></div>
      </div>
      <div class="bg">
        <div class="leaf-m absolute" v-if="isMobile" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
        <img src="./s5/leaf (7).png" alt="leaf"></div>
      </div>
      <!-- <div class="opacity-5-bg">
        <img src="./s2/leaf (1).png" alt="" class="leaf-1 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
        <img src="./s2/leaf (2).png" alt="" class="leaf-2 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
      </div> -->
      <div class="container relative flex-c wrap">
        <div class="img-item" data-aos="fade-right" data-aos-delay="600">
          <img src="./s3/1.jpg" alt="">
        </div>
        <div class="text-item flex-ac wrap">
          <div class="title" data-aos="fade-left" data-aos-delay="600">
            南台南車站設立<br />刷新景觀新高度
          </div>
          <div class="hr" data-aos="fade-right" data-aos-delay="700"></div>
          <div class="desc" data-aos="fade-left" data-aos-delay="800">
            台南鐵路地下化後，提供都會區快鐵之便捷交通，縫合交通系統及都市發展間、改善鐵路行車噪音與震動、改善都市景觀及環境生活品質、促進市中心區土地利用價值、增加經濟活動力。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width:100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  z-index: 1;
}

.bg-img {
  width: 100%;
  height:100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.text-item {
  width: size(464);
    font-stretch: normal;
    font-style: normal;
  .title {
    font-size: size(59.1);
    font-weight: bold;
    line-height: 1.2;
    letter-spacing: size(8.28);
    text-align: center;
    color: #2e627f;
    white-space: nowrap;
  }

  .desc {
    font-size: size(25);
    font-weight: normal;
    line-height: 1.92;
    letter-spacing: size(2);
    text-align: justify;
    color: #2e627f;
  }
}

.img-item {
  width: size(1114);
  margin-right: size(116);

  img {
    width: 100%;
  }
}


.ink-2 {
  width:size(2000);
  top:calc(50% - 42vw); right:calc(50% - 5vw);
  img{width: 100%;transform: scaleX(-1);}
}

.ink-3 {
  width:size(1900);
  top:calc(50% - 30vw);
  left:calc(50% - 15vw);
  img{width: 100%;transform: scaleX(-1);}
}

.leaf-1 {
  width: size(950);
  top: size(-180);
  right: size(0);
  animation: leaf 3s ease-in-out infinite alternate-reverse;
}

.leaf-2 {
  width: size(317);
  top: size(782);
  right: size(0);
  animation: leaf 3s ease-in-out infinite alternate-reverse;
}

.opacity-3-bg {
  opacity: 0.3;
}

.opacity-5-bg {
  opacity: 0.5;
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
  .section3 {
    width: 100vw;
    height:auto;
  min-height: sizem(500);
  max-height: sizem(812);
    //background-image: url('./mo/1/00.jpg');
    background-size: cover;
    background-attachment: scroll;
  }

  .text-item {
    width: sizem(310);
    margin-right: auto;
    margin: 30px auto;
    > * {
      width: sizem(310);
    }
    .hr {
      width: sizem(288);
      height: sizem(4);
      display: inline-block;
      margin: sizem(15) auto;
    }

    .title {
      font-size: sizem(25);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.44;
      letter-spacing: sizem(3.5);
      text-align: center;
      color: #2e627f;
      white-space: nowrap;
    }

    .desc {
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.73;
      letter-spacing: sizem(1.2);
      text-align: left;
      color: #2e627f;
    }
  }

  .img-item {
    width: sizem(375);
    margin-right: 0;
    img {
      width: 100%;
    }
  }
  .ink-1 {
    width: sizem(250);
    top: auto;
    bottom: sizem(-170);
    left: sizem(-100);
  img{width: 100%;transform: scaleX(-1);}
  }

  .ink-2 {
    width: sizem(390);
    top: auto;
    bottom: sizem(-160);
    left: sizem(-200);
  img{width: 100%;transform: scaleX(-1);}
  }
  .ink-3 {
    width: sizem(200);
    top: sizem(153);
    bottom:auto;
    left: auto;
    right:sizem(-100);
  img{width: 100%;transform: scaleX(1);}
  }
  .ink-4 {
    width: sizem(340);
    top: sizem(81);
    bottom:auto;
    left: auto;
    right: sizem(-170);
  img{width: 100%;transform:rotate(0deg) scaleX(-1);}
  }
  .leaf-m {
    width: sizem(116);
    top:auto;
    bottom: sizem(-30);
    right:sizem(0);
  img{width: 100%;
  animation: leaf 3s ease-in-out infinite alternate;
  transform: skewY(8deg);
  transform-origin:100% 70%;}
  }

}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section3',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
