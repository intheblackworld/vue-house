<template>
  <div class="section6">
    <img src="./s6/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
    <img src="./s6/bg_m.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile" data-aos="fade" data-aos-delay="0">
    <img src="./s6/t.png" :alt="`${info.caseName}_img`" class="grass">

    <div class="content">
      <div class="line"></div>
      <div class="label">
        ｜精心規劃｜
      </div>
      <div class="title">
        感心規劃 有質感的家分享受
      </div>
      <div class="subtitle">
        A級規劃／中空樓板設計／十年防水保固
      </div>
      <div class="list-info">
        <div v-for="item in list" :key="item.title" class="info flex-ac">
          <div class="info-title" v-html="item.title"></div>
          <div class="info-desc" v-html="item.desc"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: 100%;
  height: size(1080);
  min-height: size(1080);
  max-height: size(1080);
  position: relative;
  background-color: #df6c00;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.grass {
  @include img_l_pc(280, 351, -30);
  transform-origin: bottom;
  animation: grass 4s ease-in-out alternate infinite;
}

@keyframes grass {
  to {
    transform: skewX(3deg);
  }
}

.line {
  @include div_l_pc(14, 176, 168, 202);
  background-color: #40220f;
}
.label {
  @include img_l_pc(208, 159, 246);
  font-size: size(30.5);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4.89);
  text-align: left;
  color: #40220f;
  white-space: nowrap;
  z-index: 2;
}
.title {
  @include img_l_pc(825, 204, 246);
  font-size: size(66.1);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #40220f;
  white-space: nowrap;
  z-index: 2;
}

.subtitle {
  @include img_l_pc(851, 301, 246);
  font-size: size(38.2);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(9.16);
  text-align: left;
  color: #3d2f25;
  white-space: nowrap;
  z-index: 3;
}

.work-title {
  @include img_l_pc(458, 301, 476);
  top: auto;
  bottom: size(123);
  font-size: size(36.3);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.81);
  text-align: left;
  color: #40220f;
  white-space: nowrap;
}
.work-desc {
  @include img_l_pc(514, 301, 496);
  top: auto;
  bottom: size(88);
  font-size: size(18);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: size(1.08);
  text-align: left;
  color: #40220f;
  white-space: nowrap;
}

.list-info {
  @include img_l_pc(227 + 34 + 678, 429, 250);

  .info {
    margin-bottom: size(26);
  }

  .info-title {
    width: size(227);
    font-size: size(48);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: size(71);
    letter-spacing: size(11.52);
    text-align: right;
    color: #3d2f25;
    white-space: nowrap;
    margin-right: size(34);
  }

  .info-desc {
    font-size: size(29.6);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: size(71);
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    white-space: nowrap;
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
  .section6 {
    width: 100vw;
    height: sizem(610);
    min-height: auto;
    max-height: initial;
    // background-image: url('./all/section_bg.jpg');
    // background-attachment: scroll;
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }
  .img {
    @include img_r_m(160, 120, 5);
  }

  .title1 {
    @include img_l_m(325, 63, 25);
    font-size: sizem(30);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    white-space: nowrap;
    color: #fff;
    span {
      display: block;
      font-size: 0.666em;
    }
  }

  .hr {
    @include img_l_m(142, 60, 25);
    height: sizem(1);
    background: #333;
  }

  .title2 {
    @include img_l_m(325, 17, 25);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.05;
    letter-spacing: normal;
    text-align: left;
    color: #333333;
    white-space: nowrap;
    color: #fff;
  }

  .desc {
    @include img_l_m(170, 140, 25);
    font-size: sizem(14);
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.6;
    text-align: justify;
    color: #fff;
    white-space: normal;
  }

  .more {
    @include img_r_m(179 + 7 + 29, 636, 117);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.04;
    letter-spacing: sizem(2.1);
    text-align: left;
    color: #ffffff;
    cursor: pointer;
    white-space: nowrap;

    img {
      width: sizem(29);
    }
  }
  .btns {
    @include img_c_m(325, 305);
  }

  .btn {
    width: sizem(152);
    height: sizem(27);
    &:hover {
      animation: btn 0.5s infinite alternate;
      background: #fff0;
      box-shadow: inset 0 0 0 1px #000000;
      color: #000;
    }
    &.active:hover {
      animation: none;
      background: #ff662abb;
      box-shadow: none;
      color: #fff;
    }
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(259);
    min-height: auto;
    top: auto;
    bottom: 0;
    left: sizem(0);
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
      right: 1.2rem;
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
    width: 100%;
    height: 100%;
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
  name: 'section6',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      list: [
        {
          title: '十年',
          desc: '防水保固，自信工程品質勇敢承諾',
        },
        {
          title: 'LOW-E',
          desc: '採用台玻LOW-E隔熱玻璃，隔絕熱能紫外線',
        },
        {
          title: '中空樓板',
          desc: '樓板厚度22.5公分，制音隔熱效果更明顯',
        },
        {
          title: '電動車',
          desc: '預留電動車充電線槽，可自行升級充電系統',
        },
        {
          title: '防疫',
          desc: 'STUDOR吸氣閥、紫外線殺菌燈，降低疫病傳染風險',
        },
        {
          title: '精品配備',
          desc: '櫻花系統廚具、KARAT凱樂衛浴，完美頂規享受',
        },
      ],
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
