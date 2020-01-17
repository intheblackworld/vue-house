<template>
  <div class="section4">
    <div class="bg">
      <!-- <img src="./s1/bg1.png" alt class="bg-img relative" data-aos="fade" data-aos-delay="600" /> -->
      <!-- 不用一屏高
        圖片這邊寬59%
      文字區塊內容在區塊內置中-->
      <div class="left" data-aos="fade" data-aos-delay="400">
        <img src="./s4/img.jpg" alt class="img" />
      </div>
      <div class="right" data-aos="fade-up" data-aos-delay="600">
        <!-- <img class="img" src="./s1/img1.jpg" alt /> -->
        <div class="content">
          <h3 class="title">
            <p>為你的生活品味調入文華苑的優雅</p>文華苑六星級陣容<br />
            國際級超規格鉅獻
          </h3>
          <img src="./s4/icon.png" alt class="icon" v-if="!isMobile" />
          <div class="flex-c" v-if="isMobile">
            <div class="icon-line"></div>
            <img src="./s4/icon.png" alt class="icon" />
            <div class="icon-line"></div>
          </div>
          <div class="desc">
            2012年「文華苑」獲得蘇富比評選為全球十大獨特豪宅<br />
            與文華苑同規格國際級團隊，超規格陣容，相襯您的格局
            <p>
              ☆建築設計：台北101設計大師「李祖原」<br />
              ☆景觀設計：國際酒店知名豪宅御用景觀推手「盧胤翰」
            </p>
          </div>
        </div>
        <div class="line line-b" v-if="!isMobile"></div>
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
  align-items:stretch;
  height: 43vw;
  display: flex;
  &.fullscreen {
    min-height: 700px !important;
    height: calc(100vw * 832 / 1920) !important;
    overflow: visible;
  }
}
.bg-img {
  width: 100vw;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;
}

.line {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 1px;
  background-color: #aa804a;
  height: calc(100vw * 190 / 1920);

  &.line-t {
    top: -5%;
  }

  &.line-b {
    bottom: -10%;
  }
}

.left {
  width: 59%;
  height: 100%;
}

.right {
  width: 41%;
 //height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  .content {
    width: calc(100vw * 640 / 1920);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .title {
      font-size: calc(100vw * 45 / 1920);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.44;
      letter-spacing: 4.5px;
      text-align: center;
      color: #231815;
      margin-bottom: 35px;
      width: 100%;

      p {
        font-size: calc(100vw * 22 / 1920);
        font-family: 'Noto Serif TC', serif;
        color: #aa804a;
        letter-spacing: 2.2px;
      }
    }

    .desc {
      width: 100%;
      font-size: calc(100vw * 24 / 1920);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.86;
      letter-spacing: 0.52px;
      text-align: center;
      color: #231815;
      margin-top: 35px;

      p {
        color: #aa804a;
        margin-top: 45px;
        font-family: 'Noto Serif TC', serif;
        font-weight: bold;
      }
    }
  }
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

    &.fullscreen {
      min-height: auto !important;
      height: auto !important;
    }
  }

  .icon {
    height: 5vw;
  }
  .icon-line {
    width: 112px;
    height: 1px;
    background-color: #aa804a;
    margin: 8vw 10px;
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
      padding-top: 40px;
      padding-bottom: 50px;

      .title {
        font-size: calc(100vw * 20 / 375);
        letter-spacing: 0.2em;
        margin-bottom: 0;
        text-align: center;
        p {
          font-size: 12px;
          margin-bottom: 1.5em;
        }
      }

      .desc {
        font-size: calc(100vw * 12 / 375);
        margin-top: 0px;

        p {
          margin-top: 10px;
          font-weight: bold;
          font-family: 'Noto Serif TC', serif;
          line-height: 1.8;
        }
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section4',

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
