<template>
  <div class="section7">
    <img src="./s7/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isPC">
    <img src="./s7/bg_m.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isMobile">
    <img src="./s7/bg.png" :alt="`${info.caseName}_img`" class="img" data-aos="fade-up" data-aos-delay="400">
    <h1 class="title" data-aos="fade-up" data-aos-delay="0">
      雙雄制震 頂規穩固
    </h1>
    <h3 class="title1" data-aos="fade-up" data-aos-delay="200">
      Alfa Safe耐震結構
    </h3>
    <h3 class="desc1" data-aos="fade-up" data-aos-delay="400">
      「台灣建築結構教父」建築安全履歷協會理事長<br />
      「戴雲發」專利設計<br />
      實驗結果證明「抗震韌性提升100%，<br />
      為傳統柱抗震韌性的2倍」
    </h3>
    <h3 class="title2" data-aos="fade-up" data-aos-delay="200">
      EDS制震壁
    </h3>
    <h3 class="desc2" data-aos="fade-up" data-aos-delay="400">
      普丞土木結構事務所「廖偉信博士」專利研發<br />
      將建築物的振動轉換成制震壁體的相對運動，並利用此相對運動所產生的抵抗力來吸收地震能量。<br />
      鴻苑「獨家採用144 組EDS制震壁，可達六級抗震效能」
    </h3>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: 100%;
  height: size(960);
  min-height: size(960);
  max-height: size(960);
  position: relative;
  // background: linear-gradient(to bottom, #c40000, #000);
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
  // &::after,
  // &::before {
  //   content: '';
  //   width: 120%;
  //   height: size(120);
  //   position: absolute;
  //   bottom: size(-90);
  //   left: -10%;
  //   background: url('./all/section_bg.jpg') fixed;
  //   background-size: cover;
  //   border-radius: 100% 100% 0 0;
  //   z-index: 2;
  // }
  // &::after {
  //   border-radius: 0 0 100% 100%;
  //   top: size(-90);
  //   bottom: auto;
  // }
}

.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.img {
  @include img_c_pc(800, 128);
  top: auto;
  bottom: 0;
}

.title {
  @include img_c_pc(800, 128);
  font-size: size(55.1);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #6e0000;
  white-space: nowrap;
}

.title1 {
  @include img_l_pc(355, 396, 256);
  font-size: size(35);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: size(4.9);
  text-align: right;
  color: #530000;
  white-space: nowrap;
}

.title2 {
  @include img_r_pc(201, 396, 429);
  font-size: size(35);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: size(4.9);
  text-align: left;
  color: #530000;
  white-space: nowrap;
}

.desc1 {
  @include img_l_pc(470, 443, 140);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.89;
  letter-spacing: size(0.95);
  text-align: right;
  color: #000000;
  white-space: nowrap;
}

.desc2 {
  @include img_r_pc(488, 443, 142);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.89;
  letter-spacing: size(0.95);
  text-align: left;
  color: #000000;
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
    height: sizem(715);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
    &::after,
    &::before {
      display: none;
    }
  }

  .txt {
    @include img_l_m(330, 25, 25);
    height: auto;
    filter: drop-shadow(0 0 5px #036);
    display: block;
  }
  .title {
    // @include img_r_m(260, 409, 71);
    font-size: sizem(26);
    font-weight: bold;
    letter-spacing: normal;
    line-height: 2;
    span {
      display: block;
      font-size: sizem(20);
      letter-spacing: 0.01em;
    }
  }

  .hr {
    //  @include img_r_m(230, 458, 102);
    height: sizem(1);
    margin: sizem(12) 0;
  }

  .desc {
    // @include img_r_m(292, 474, 40);
    font-size: sizem(14);
    font-weight: normal;
    letter-spacing: normal;
    white-space: normal;
    margin: 0 0 1.5em 0;
  }
  .item {
    .icon {
      width: sizem(39);
      margin-right: sizem(4);
    }

    .text {
      font-size: sizem(14);
      letter-spacing: size(0.9);
      line-height: 3.3;
    }
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(766);
    min-height: auto;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  // begin
  .swipe-fade-leave-to {
    opacity: 0;
    z-index: 0;
  }
  // end
  .swipe-fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .swipe-fade-enter-active {
    transition: all 0.5s ease;
  }

  .swipe-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  // begin
  // .swipe-left-leave-to {
  //   margin-left: -100vw;
  //   z-index: 0;
  // }
  // // end
  // .swipe-left-enter {
  //   opacity: 0.5;
  //   margin-left: 0;
  //   z-index: 1;
  // }

  // .swipe-left-enter-active {
  //   transition: all 0.5s ease;
  // }

  // .swipe-left-leave-active {
  //   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  // }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    // &:nth-child(1) {
    //   z-index: 1;
    //   // opacity: 1;
    // }

    // &.base {
    //   z-index: 1;
    //   opacity: 1;
    // }
    // &.active {
    //   z-index: 2;
    //   // opacity: 1;
    // }
    .slide-name {
      right: auto;
      top: auto;
      bottom: 1.2rem;
      left: 1.2rem;
      font-size: sizem(15);
    }
  }

  .pagination {
    width: auto;
    bottom: size(91);
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #004ea2;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transition: all 0.3s;
        transform-origin: center;
        transform: scale(0);
      }
      &.active {
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          display: block;
          background: #004ea2;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 0%;
          // transform: translateY(-50%);
          left: 0%;
          transform: scale(1);
        }
      }
    }
  }

  .swipe-btns {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: sizem(370);
    padding: 0 15px;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: sizem(15);
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section7',

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
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
