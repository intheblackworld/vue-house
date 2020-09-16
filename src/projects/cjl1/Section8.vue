<template>
  <div>
    <div class="section8">
      <div class="opacity-3-bg">
        <img src="./s2/ink1.png" alt="" class="ink-1 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200">
        <!-- <img src="./s2/ink1.png" alt="" class="ink-2 absolute" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="1200"> -->
        <img src="./s2/ink2.png" alt="" class="ink-2 absolute" data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="1200">
      </div>
      <div class="opacity-5-bg">
        <img src="./s8/leaf (7).png" alt="" class="leaf-7 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
        <img src="./s8/leaf (8).png" alt="" class="leaf-8 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
      </div>
      <div class="block absolute flex-c">
        <img src="./s8/bg.png" alt="" class="img" data-aos="fade" data-aos-delay="600">
        <ul class="content flex-jb wrap absolute">
          <li>2019/台南-上揚國寶/透天46戶</li>
          <li>2020/高雄-清景麟．白易居/大樓</li>
          <li>2020/台南-清景麟．巴克禮/大樓338戶</li>
          <li>2020/高雄-清景麟．名人坊/透天9戶</li>
          <li>2020/台南-清景麟．公園墅/透天92戶</li>
          <li>2021/台南-東區新都心段案</li>
        </ul>
      </div>
      <div class="title absolute" data-aos="zoom-in" data-aos-delay="400">
        清景麟提早佈局、放眼未來
      </div>
      <div class="subtitle absolute" data-aos="zoom-in" data-aos-delay="600">
        立足高雄、深耕臺南、進軍臺中
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: size(1920);
  height: size(1080);
  min-height: size(1080);
}

.title {
  width: size(1083);
  height: size(129);
  padding-top: size(20);
  top: size(259);
  right: 0;
  left: 0;
  margin: 0 auto;
  background-image: url('./s8/title.png');
  background-size: cover;
  font-size: size(68.3);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(10.93);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  width: size(842);
  top: size(259 + 150);
  right: size(403);
  font-size: size(53.3);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(7.46);
  text-align: center;
  color: #08607f;
  white-space: nowrap;
}

.img {
  width: 100vw;
  // height: 100vh;
  // min-height: size(900);
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
  }
}

.block {
  width: 100vw;
  height: size(390);
  background-color: #38a9b3;
  overflow: hidden;
  top: size(259 + 129 + 283);
  left: 0;
}

.content {
  width: size(1520);
  left: 0;
  right: 0;
  margin: 0 auto;
  li {
    width: 50%;
    font-size: size(35);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: size(4.9);
    text-align: left;
    margin-top: size(30);
    margin-bottom: size(30);
    color: #ffffff;
    white-space: nowrap;
  }
}

.ink-1 {
  height: size(957);
  top: size(0);
  right: size(-400);
}

.ink-2 {
  height: size(1341);
  top: size(-200);
  left: size(-600);
}

.leaf-7 {
  width: size(394);
  top: size(0);
  right: size(0);
  animation: leaf 3s ease-in-out infinite alternate-reverse;
}

.leaf-8 {
  width: size(349);
  top: size(0);
  left: size(0);
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
    transform: skewX(2deg) translateX(0px);
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
  .section8 {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: auto;
  }
  .img {
    display: none;
  }

  .swipe {
    width: 100vw;
    height: calc(100vh - 63px);
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .swipe-item {
    background: #4a649f;
    img {
      height: auto;
      position: absolute;
      bottom: 0;
    }
  }
  // .swipe-item {
  //   width: 100%;
  //   height: 100%;
  //   left: 100%;
  //   transition: left 1s ease-in-out;
  //   z-index: 0;
  //   object-fit: cover;

  //   &.base {
  //     z-index: 1;
  //     left: 0;
  //   }
  //   &.active {
  //     z-index: 2;
  //     left: 0;
  //   }
  // }

  .pagination {
    width: auto;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
    display: none;
  }

  .pagination-dot {
    padding: 5px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 14px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #fff;
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
          width: 60%;
          height: 60%;
          display: block;
          background: #fff;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 20%;
          // transform: translateY(-50%);
          left: 23%;
          transform: scale(1);
        }
      }
    }
  }

  .swipe-btns {
    width: 100%;
    height: 100%;
    padding: 0 0;
    z-index: 3;

    .prev-btn,
    .next-btn {
      //   width: size-m(15);
      cursor: pointer;
    }
  }

  .title {
    text-shadow: 1px 1px 7px rgba(21, 32, 68, 0.8);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 2px;
    text-align: left;
    color: #ffffff;
    z-index: 2;
  }

  .subtitle {
    text-shadow: 1px 1px 7px rgba(21, 32, 68, 0.8);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: 1.6px;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    z-index: 2;
  }

  .desc {
    text-shadow: 1px 1px 7px rgba(21, 32, 68, 0.8);
    font-size: sizem(16);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.03;
    letter-spacing: 0.96px;
    text-align: left;
    color: #ffffff;
    z-index: 2;
  }

  .title1,
  .title2,
  .title3 {
    top: sizem(92);
    right: auto;
    left: sizem(26);
  }

  .subtitle1,
  .subtitle2,
  .subtitle3 {
    top: sizem(172);
    right: auto;
    left: sizem(26);
  }

  .desc1,
  .desc2,
  .desc3 {
    width: sizem(330);
    top: sizem(216);
    right: auto;
    left: sizem(26);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section8',

  components: {},

  data() {
    return {
      isMobile,
      isTablet,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  watch: {},

  computed: {},
}
</script>
