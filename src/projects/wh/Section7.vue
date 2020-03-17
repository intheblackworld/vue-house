<template>
  <div class="section7">
    <div class="bg">
      <!-- <img src="./s1/bg1.png" alt class="bg-img relative" data-aos="fade" data-aos-delay="600" /> -->
      <!-- 不用一屏高
        圖片這邊寬59%
      文字區塊內容在區塊內置中-->
      <div class="left">
        <img src="./s7/1空中花園.jpg" alt="空中花園" class="img" v-if="!isMobile" />
        <img src="./s7/2頂樓公設.jpg" alt="頂樓公設" class="img" v-if="!isMobile" />
        <img src="./mo/7/1空中花園.jpg" alt="空中花園" class="img" v-if="isMobile" />
        <img src="./mo/7/2頂樓公設.jpg" alt="頂樓公設" class="img" v-if="isMobile" />
      </div>
      <div class="right">
        <!-- <img class="img" src="./s1/img1.jpg" alt /> -->
        <div class="content">
          <h3 class="title" data-aos="fade-up" data-aos-delay="400">
            徜徉空中花園<br />
            台北101收眼底
          </h3>
          <img src="./s7/icon.png" alt="" class="bg-img" v-if="!isMobile" data-aos="fade-up" data-aos-delay="600" />
          <img src="./s7/line.png" alt class="bg-img" v-if="!isMobile" />
          <div class="flex-c" v-if="isMobile">
            <img src="./mo/7/icon.png" alt class="icon" />
          </div>
          <div class="desc" data-aos="fade-up" data-aos-delay="800">
            頂樓室外區有空中小花園，觀看台北101煙火秀不再人擠人，秘境花園就在自家樓上；頂樓室內區為雙面採光休憩區，與親朋好友聚餐聊天，享受開闊空間。
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
  right: -1px;

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
      margin-top: calc(100vw * 80 / 1920);
      width: 100%;

      p {
        color: #aa804a;
        font-size:0.49em;
        font-family: 'Noto Serif TC', serif;
        letter-spacing: 2.2px;
      }
    }

    .desc {
      width: 80%;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.86;
      letter-spacing: 0.022em;
      text-align: center;
      color: #231815;
      margin-top: calc(100vw * 110 / 1920);

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
      height: calc(100vw * 616 / 910);
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
        margin:0;
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
