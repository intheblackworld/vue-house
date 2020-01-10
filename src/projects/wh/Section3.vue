<template>
  <div class="section3">
    <div class="bg fullscreen">
      <!-- <img src="./s1/bg1.png" alt class="bg-img relative" data-aos="fade" data-aos-delay="600" /> -->
      <!-- 不用一屏高
        圖片這邊寬59%
      文字區塊內容在區塊內置中-->
      <div class="left">
        <img src="./s3/img.jpg" alt class="img" />
      </div>
      <div class="right">
        <!-- <img class="img" src="./s1/img1.jpg" alt /> -->
        <div class="content">
          <h3 class="title">
            <p>讓城市藝術家為你的低調增添奢華</p>
            國際迎賓林蔭大道<br />
            遍佈達欣經典足跡
          </h3>
          <img src="./s3/icon.png" alt class="icon" />
          <div class="desc">
            敦化南北路林蔭大道綠浪蓊鬱傾瀉
            <br />漫步其中，不期而遇的經典，皆是達欣走過足跡
            <br />北起文華東方酒店，南至遠東香格里拉等
            <br />逾10幢商辦酒店雕鎸敦化大道
            <br />達欣因而有「城市藝術師」的美譽
            <br />從雕琢城市到建立住家
            <br />
            「達欣・信義文華」即將再現傳世巨鑄
          </div>
        </div>
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
  height: 100vh;
  display: flex;
  overflow: hidden;
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
    width: calc(100vw * 540 / 1920);
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
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    flex-wrap: wrap;

    &.fullscreen {
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

  .right {
    width: 100vw;
    height: auto;

    .content {
      width: 90vw;
      margin: 0 auto;
      padding-top: 40px;
      padding-bottom: 30px;

      .title {
        font-size: calc(100vw * 20 / 375);
        margin-bottom: 20px;
      }

      .desc {
        font-size: calc(100vw * 12 / 375);
        margin-top: 20px;
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
