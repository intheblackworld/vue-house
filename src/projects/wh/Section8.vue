<template>
  <div class="section7">
    <div class="bg">
      <!-- <img src="./s1/bg1.png" alt class="bg-img relative" data-aos="fade" data-aos-delay="600" /> -->
      <!-- 不用一屏高
        圖片這邊寬59%
      文字區塊內容在區塊內置中-->
      <div class="left">
        <img src="./s8/1健身房.jpg" alt="健身房" class="img" v-if="!isMobile" />
        <img src="./s8/2交誼廳.jpg" alt="交誼廳" class="img" v-if="!isMobile" />
        <!-- <img src="./s8/3多功能室.jpg" alt class="img" v-if="!isMobile" />
        <img src="./s8/4沙發會客區.jpg" alt class="img" v-if="!isMobile" /> -->
        <img src="./mo/8/1健身房.jpg" alt="健身房" class="img" v-if="isMobile" />
        <img src="./mo/8/2交誼廳.jpg" alt="交誼廳" class="img" v-if="isMobile" />
        <img src="./mo/8/3多功能室.jpg" alt="多功能室" class="img" v-if="isMobile" />
        <img src="./mo/8/4沙發會客區.jpg" alt="沙發會客區" class="img" v-if="isMobile" />
        <!-- <img src="./mo/8/3多功能室.jpg" alt class="img" v-if="isMobile" />
        <img src="./mo/8/4沙發會客區.jpg" alt class="img" v-if="isMobile" /> -->
      </div>
      <div class="right">
        <!-- <img class="img" src="./s1/img1.jpg" alt /> -->
        <div class="content">
          <h3 class="title" data-aos="fade-up" data-aos-delay="400">
            酒店式精緻公共空間
          </h3>
          <img src="./s8/icon.png" alt class="bg-img" v-if="!isMobile" data-aos="fade-up" data-aos-delay="600" />
          <img src="./s8/line.png" alt class="bg-img" v-if="!isMobile" />
          <div class="flex-c" v-if="isMobile">
            <img src="./mo/8/icon.png" alt class="icon" />
          </div>
          <div class="desc" data-aos="fade-up" data-aos-delay="800">
            大廳會客區由北京盤古七星酒店室內設計「原堂」所規劃，融合古典與現代，大器簡約、精緻雋永。另更有以半穿透格柵設計串連的交誼廳、多功能室、多功能健身房，一氣呵成卻又互不干擾。
          </div>
        </div>
        <div class="line line-b" v-if="!isMobile"></div>
      </div>
    </div>
    <div class="bg" v-if="!isMobile">
      <!-- <img src="./s1/bg1.png" alt class="bg-img relative" data-aos="fade" data-aos-delay="600" /> -->
      <!-- 不用一屏高
        圖片這邊寬59%
      文字區塊內容在區塊內置中-->
      <div class="left">
        <img src="./s8/3多功能室.jpg" alt="多功能室" class="img" />
        <img src="./s8/4沙發會客區.jpg" alt="沙發會客區" class="img" />
      </div>
      <div class="right">
        <!-- <img class="img" src="./s1/img1.jpg" alt /> -->
        <div class="all-line"></div>
      </div>
    </div>
    <!-- <div class="bg"></div> -->
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  background-position: center;
  position: relative;
  align-items: stretch;
  display: flex;
  background: #fffffb;
  width: 90%;
  margin: 0 auto;
  &.fullscreen {
    // height: calc(100vw * 832 / 1920) !important;
    overflow: visible;
  }
}
.bg-img {
  width: 100%;
  position: absolute;
  top: 0;
  height: auto;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.left {
  width: 59%;
  height: 100%;

  img {
    display: block;
  }
}

.right {
  width: 41%;
  //height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: calc(100vw * 23 / 1920);

  .content {
    width: calc(100vw * 587 / 1920);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .title {
      font-size:1.8em;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.44;
      letter-spacing: 4.5px;
      text-align: center;
      color: #231815;
      margin-bottom: 0;
      margin-top: calc(100vw * 27 / 1920);
      width: 100%;

      p {
        color: #aa804a;
        font-size:0.49em;
        font-family: 'Noto Serif TC', serif;
        letter-spacing: 2.2px;
      }
    }

    .desc {
      width: 100%;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.86;
      letter-spacing: 0.022em;
      text-align: center;
      color: #231815;
      margin-top: calc(100vw * 122 / 1920);

      p {
        margin-top: 45px;
        font-family: 'Noto Serif TC', serif;
        font-weight: bold;

        span {
          font-family: 'Noto Serif TC', serif;
          color: #aa804a;
        }
      }
    }
  }
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.all-line {
  width: 1px;
  height: 100%;
  background-color: #aa804a;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 0;
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }

  .line {
    &.line-b {
      height: calc(100vw * 205 / 1920);
      bottom: -30%;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }

  .line {
    &.line-b {
      height: calc(100vw * 305 / 1920);
      bottom: -10%;
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    flex-wrap: wrap;
    height: auto;
    width: 100%;

    &.fullscreen {
      min-height: auto !important;
      height: auto !important;
    }
  }
  .icon {
    width: 100%;
  }

  .left {
    width: 100vw;
    height: auto;
    .img {
      height: auto;
    }
  }

  .right {
    width: 100vw;
    height: auto;

    .content {
      width: 90vw;
      margin: 0 auto;
      font-size: calc(100vw * 12 / 375);
      height: calc(100vw * 610 / 910);
      flex-direction:column;

      .title {
        font-size: 1.6em;
        letter-spacing: 0.15em;
        margin-bottom: 0;
        margin-top: calc(100vw * 0 / 910);
        p {
          font-size:calc(100vw * 12 / 375);
          margin-bottom: 0.3em;
          letter-spacing: 0.1em;
          font-weight: 400;
          transform: scale(0.86);
        }
      }

      .desc {
        margin-top:0;
        width: 86%;
        text-align: center;
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section7',

  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  mounted() {},

  computed: {},
}
</script>
