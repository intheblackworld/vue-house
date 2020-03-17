<template>
  <div class="section3">
    <div class="bg fullscreen">
      <!-- <img src="./s1/bg1.png" alt class="bg-img relative" data-aos="fade" data-aos-delay="600" /> -->
      <!-- 不用一屏高
        圖片這邊寬59%
      文字區塊內容在區塊內置中-->
      <div class="left">
        <img src="./s35/敦化林蔭大道.jpg" alt="敦化林蔭大道" v-if="!isMobile" class="img" />
        <img src="./mo/35/敦化林蔭大道.jpg" alt="敦化林蔭大道" v-if="isMobile" class="img" />
      </div>
      <div class="right">
        <!-- <img class="img" src="./s1/img1.jpg" alt /> -->
        <div class="content">
          <h3 class="title" data-aos="fade-up" data-aos-delay="400">
            <p>為你的低調增添奢華</p>國際迎賓林蔭大道<br />
            遍佈達欣經典足跡
          </h3>
          <img src="./s35/icon.png" alt class="bg-img" v-if="!isMobile"  data-aos="fade-up" data-aos-delay="600"/>
          <img src="./s35/line.png" alt class="bg-img" v-if="!isMobile" />
          <div class="flex-c" v-if="isMobile">
            <img src="./mo/35/icon.png" alt class="icon" />
          </div>
          <div class="desc" data-aos="fade-up" data-aos-delay="800">
            敦化南北路林蔭大道綠浪蓊鬱傾瀉<br />
            漫步其中，不期而遇的經典，皆是達欣走過足跡<br />
            北起文華東方酒店，南至香格里拉遠東飯店等<br />
            逾10幢商辦酒店雕鎸敦化大道<br />
            從雕琢城市到建立住家<br />
            「達欣・信義文華」即將再現傳世代表作
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
  display: flex;
  width: 90%;
  margin: 0 auto;
  background-color: #fffffb;

  &.fullscreen {
    height: calc(100vw * 778 / 2000) !important;
    overflow: hidden;
  }
}
.bg-img {
  width: 100%;
  position: absolute;
  top: 0;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.left {
  width: 59%;
  height: 100%;
}

.right {
  width: 41%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: calc(100vw * 23 / 1920);

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
      margin-top: calc(100vw * -16/ 1920);
      width: 100%;

      p {
        font-size:0.49em;
        font-family: 'Noto Serif TC', serif;
        color: #aa804a;
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
      margin-top: calc(100vw * 105 / 1920);
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
      bottom: 0%;
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
    width: 100vw;

    &.fullscreen {
      min-height: auto !important;
      height: auto !important;
    }
  }

  .left {
    width: 100vw;
    height: auto;
    .img {
      height: auto;
    }
  }
  .icon {
    width: 100%;
  }

  .right {
    width: 100vw;
    height: auto;

    .content {
      width: 90vw;
      margin: 0 auto;
      font-size: calc(100vw * 12 / 375);
      height: calc(100vw * 838 / 910);
      flex-direction:column;

      .title {
        font-size: 1.6em;
        letter-spacing: 0.15em;
        margin-bottom: 0;
        margin-top: 0;
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
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section3',

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
