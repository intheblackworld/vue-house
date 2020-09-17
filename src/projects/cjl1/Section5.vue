<template>
  <div>
    <div class="section5 flex-c">
      <div class="opacity-3-bg">
        <div class="ink-1 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200"><img src="./s2/ink2.png" alt="ink"></div>
        <div class="ink-2 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200"><img src="./s2/ink2.png" alt="ink"></div>
      </div>
      <div class="bg">
        <div class="leaf-7 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
        <img src="./s5/leaf (7).png" alt="leaf"></div>
      </div>
      <div class="container relative flex-c wrap">
        <div class="img-item" data-aos="fade-right" data-aos-delay="600">
          <img src="./s5/1.jpg" alt="">
        </div>
        <div class="text-item flex-ac wrap">
          <div class="title" data-aos="fade-left" data-aos-delay="600">
            臺南市交通最後拼圖<br />捷運計畫第一期藍線
          </div>
          <div class="hr" data-aos="fade-right" data-aos-delay="700"></div>
          <div class="desc" data-aos="fade-left" data-aos-delay="800">
            第一期藍線由台鐵大橋站至大同站，東門路至仁德轉運站，長度8.6公里，計14座車站、1座機廠，總經費約197.63億元，沿途行經平實轉運站、仁德轉運站等重要交通節點，大同站則可與鐵路地下化後之林森站、南臺南站轉乘接駁，兼具重要交通運輸功能。 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width:100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
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
  width: size(600);
  margin-left: size(54);
  .desc {
    width: size(471);
    margin: 0 auto;
  }
  .title {
    font-size: size(59.1);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(8.28);
    text-align: center;
    color: #2e627f;
    white-space: nowrap;
  }

  .desc {
    font-size: size(25);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: size(2);
    text-align: left;
    color: #2e627f;
  }
}

.img-item {
  width: size(1114);
  img {
    width: 100%;
  }
}

.ink-1 {
  width:size(870);
  top:calc(50% - 32vw); right:calc(50% - 5vw);
  img{width: 100%;transform: scaleX(1);}
}
.ink-2 {
  width:size(1450);
  top:calc(50% - 17vw); right:calc(50% + 4vw);
  img{width: 100%;transform: scaleX(1);}
}


.leaf-7 {
  width: size(394);
  bottom: size(0);
  right: size(0);
  img{width: 100%;
  animation: leaf 3s ease-in-out infinite alternate;
  transform: skewY(5deg);
  transform-origin:100% 50%;}
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
  .section5 {
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
      display: inline-block;
      margin: 15px auto;
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
      width: sizem(310);
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

  .leaf-7 {
    width: sizem(116);
    top:auto;
    bottom: sizem(-30);
    right:sizem(0);
  }
  .img-item {
    width: sizem(375);   
    img {
      width: 100%;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { icPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section5',

  data() {
    return {
      icPC,
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
