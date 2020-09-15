<template>
  <div>
    <div class="section4 flex-c">
      <div class="opacity-3-bg">
        <img src="./s2/ink1.png" alt="" class="ink-1 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200">
        <img src="./s2/ink1.png" alt="" class="ink-2 absolute" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="1200">
        <img src="./s2/ink2.png" alt="" class="ink-3 absolute" data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="1200">
      </div>
      <div class="opacity-5-bg">
        <img src="./s5/leaf (7).png" alt="" class="leaf-7 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
      </div>
      <div class="container relative flex-c">
        <div class="img-item">
          <img src="./s4/1.jpg" alt="">
        </div>
        <div class="text-item flex-ac wrap">
          <div class="title">
            臺南市交通最後拼圖<br />捷運計畫第一期藍線
          </div>
          <img src="./s2/hr.png" alt="" class="hr">
          <div class="desc">
            第一期藍線由台鐵大橋站至大同站，東門路至仁德轉運站，長度8.6公里，計14座車站、1座機廠，總經費約197.63億元，沿途行經平實轉運站、仁德轉運站等重要交通節點，大同站則可與鐵路地下化後之林森站、南臺南站轉乘接駁，兼具重要交通運輸功能。 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: size(1920);
  min-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}

.bg-img {
  width: size(1920);
  height: 100vh;
  min-height: 900px;
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
  > * {
    width: size(600);
  }

  .desc {
    width: size(471);
    margin: 0 auto;
  }
  .hr {
    width: size(288);
    display: inline-block;
    margin: 15px auto;
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
  height: size(1693);
  top: size(-500);
  left: size(-800);
}

.ink-2 {
  height: size(1581);
  top: size(872);
  left: size(-600);
}

.ink-3 {
  height: size(1720);
  top: size(1064);
  left: size(564);
}

.leaf-7 {
  width: size(394);
  bottom: size(0);
  right: size(0);
  animation: leaf 3s ease-in-out infinite alternate-reverse;
}

.opacity-3-bg {
  opacity: 0.3;
}

.opacity-5-bg {
  opacity: 0.5;
}

@keyframes leaf {
  to {
    transform: skewX(5deg) translateX(20px);
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
    min-height: auto;
    height: sizem(604 + 329);
    //background-image: url('./mo/1/00.jpg');
    background-size: cover;
    background-attachment: scroll;
  }

  .bottom-img {
    width: 100vw;
    height: auto;
    left: 0;
    top: sizem(0);
    //  bottom: sizem(329);
    object-fit: cover;
    z-index: 2;
  }

  .logo {
    width: sizem(280);
    top: sizem(29);
    right: auto;
    left: sizem(18);
    height: auto;
    object-fit: cover;
  }

  .logo2 {
    width: sizem(63);
    top: sizem(101);
    right: sizem(28);
    height: auto;
    object-fit: cover;
    z-index: 2;
  }

  .txt {
    width: sizem(312);
    top: sizem(205);
    right: sizem(0);
    height: auto;
    object-fit: cover;
  }

  .border {
    width: sizem(347);
    height: sizem(276);
    top: sizem(115);
    right: sizem(14);
    border-width: sizem(6);
    font-size: sizem(15);
    padding: 1.1em 0 0 2em;
  }

  .block {
    width: sizem(48);
    height: sizem(215);
    max-height: initial;
    top: sizem(-30);
    right: sizem(-20);
    left: auto;
    bottom: auto;
  }

  .item-list {
    top: sizem(600);
    left: sizem(44);

    .item {
      width: sizem(17);
      margin-right: sizem(35);
      // display: flex;
      // align-items: center;
      // justify-content: center;
      // flex-wrap: wrap;
      .item-hr {
        width: 1.5px;
        height: sizem(67);
        background-color: #8e8a74;
        margin: 0 auto;
        margin-bottom: 15px;
      }
      &:nth-child(1) {
        margin-top: 0;
      }
      &:nth-child(2) {
        margin-top: sizem(13);
        .item-hr {
          height: sizem(111);
        }
      }

      &:nth-child(3) {
        margin-top: sizem(30);
        .item-hr {
          height: sizem(65);
        }
      }
      &:nth-child(4) {
        margin-top: sizem(17);
        .item-hr {
          height: sizem(69);
        }
      }

      &:nth-child(5) {
        margin-top: sizem(20);
        .item-hr {
          height: sizem(58);
        }
      }

      &:nth-child(6) {
        margin-top: sizem(5);
        .item-hr {
          height: sizem(68);
        }
      }
    }
    .item-title,
    .item-desc {
      writing-mode: vertical-lr;
      text-orientation: upright;
      // display: inline-block;
      // margin: auto;
    }

    .item-title {
      font-size: sizem(12);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.08;
      letter-spacing: normal;
      text-align: center;
      color: #8e8a74;
      margin-bottom: sizem(10);
      margin-left: sizem(2.5);
    }

    .item-desc {
      font-size: sizem(17);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.08;
      letter-spacing: normal;
      text-align: center;
      color: #8e8a74;
      margin-bottom: sizem(10);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { icPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section4',

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
