<template>
  <div>
    <div class="section4 flex wrap">
      <div class="content">
        <img src="./s4/style.jpg" :alt="`${info.caseName}_img`" class="img">
        <h1 class="title" data-aos="flip-up" data-aos-delay="200">
          每個城市都有一座<br />國際企業總部帝標
        </h1>
        <div class="subtitle" data-aos="flip-up" data-aos-delay="400">
          凹子底公園第一排 擎天地標頂級商辦
        </div>
        <h1 class="desc" data-aos="fade-up" data-aos-delay="600">
          相較台北動輒百萬的房價，凹子底擁有更大上漲空間，海陸空交通條件更具國際發展性，投報率更超強沒得比！<br /><br />
          萬坪公園及豪宅百貨組成頂級聚落，有台灣的華爾街之稱，繁榮程度成為企業門面升級、軟體科技業、回流台商進駐首選地段。
        </h1>
      </div>
      <div class="content">
        <img src="./s4/img.jpg" :alt="`${info.caseName}_img`" class="img">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: 100%;
  height: size(865);
  min-height: size(865);
  max-height: size(865);
  position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
  flex-direction: row-reverse;
}
.content {
  width: 50%;
  height: 100%;
  position: relative;
  background-color: #808080;
}
.img {
  width: 100%;
  height: auto;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 0;
}

.title {
  @include img_l_pc(650, 123, 123);
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(650, 249, 123);
  font-family: 'Noto Sans TC';
  font-size: size(25);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #33cfff;
}

.desc {
  @include img_l_pc(666, 318, 123);
  font-size: size(20);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
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
    width: 100%;
    height: sizem(715);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .title {
    @include img_r_m(260, 409, 71);
    font-size: sizem(26);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #333;
    white-space: nowrap;
  }

  .hr {
    @include img_r_m(230, 458, 102);
    height: sizem(0.5);
    background: #333;
  }

  .desc {
    @include img_r_m(292, 474, 40);
    font-size: sizem(16);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: normal;
    text-align: left;
    color: #333;
    white-space: nowrap;
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

  /* Swipe */
  .swipe {
    width: sizem(333);
    height: sizem(333);
    min-height: auto;
    top: sizem(50);
    left: auto;
    right: sizem(0);
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
  name: 'section4',

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
