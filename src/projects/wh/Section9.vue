<template>
  <div class="section9">
    <div class="bg fullscreen">
      <!-- <img src="./s1/bg1.png" alt class="bg-img relative" data-aos="fade" data-aos-delay="600" /> -->
      <!-- 不用一屏高
        圖片這邊寬59%
      文字區塊內容在區塊內置中-->
      <div class="left" data-aos="fade" data-aos-delay="400">
        <img src="./s9/外觀.jpg" alt class="img" v-if="!isMobile" />
        <img src="./mo/9/外觀.jpg" alt class="img" v-if="isMobile" />
      </div>
      <div class="right" data-aos="fade-up" data-aos-delay="600">
        <!-- <img class="img" src="./s1/img1.jpg" alt /> -->
        <div class="content">
          <h3 class="title">信義菁英輕奢宅</h3>
          <img src="./s9/icon.png" alt class="bg-img" v-if="!isMobile" />
          <img src="./s9/line.png" alt class="bg-img" v-if="!isMobile" />
          <div class="flex-c" v-if="isMobile">
            <img src="./mo/9/icon.png" alt class="icon" />
          </div>
          <div class="desc">
            融合東方的圓融與西方的簡約
            <br />石材與木紋的溫潤肌理詮釋居所的寧靜致遠
            <br />典雅而創新的設計
            <br />在這裡擁抱對生活的無限想像
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
  background-color: #fff;

  &.fullscreen {
    height: calc(100vw * 750 / 1920) !important;
    overflow: hidden;
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
}

.right {
  width: 41%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  .content {
    width: calc(100vw * 707 / 1728);
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
      margin-bottom: 65px;
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
    width: 100vw;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
  }

  .icon-line {
    width: 112px;
    height: 1px;
    background-color: #aa804a;
    margin: 8vw 10px;
  }

  .right {
    width: 100vw;
    height: auto;

    .content {
      width: 90vw;
      margin: 0 auto;
      padding-top: 30px;
      padding-bottom: 50px;

      .title {
        font-size: calc(100vw * 20 / 375);
        letter-spacing: 0.2em;
        margin-bottom: 25px;
        margin-top: 10px;
        p {
          font-size: 12px;
          margin-bottom: 1.5em;
        }
      }

      .desc {
        font-size: calc(100vw * 12 / 375);
        margin-top: 30px;
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section9',

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
