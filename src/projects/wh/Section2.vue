<template>
  <div class="section2">
    <div class="bg fullscreen">
      <div class="left">
        <img src="./s2/img.jpg" alt="信義區" class="img" />
      </div>
      <div class="right">
        <div class="content">
          <h3 class="title" data-aos="fade-up" data-aos-delay="400">
            遇見不凡
            <span>預見非凡</span>
          </h3>
          <img src="./s2/icon.png" alt class="bg-img" v-if="!isMobile" data-aos="fade-up" data-aos-delay="500" />
          <img src="./s2/line.png" alt class="bg-img" v-if="!isMobile" />
          <div class="flex-c" v-if="isMobile">
            <img src="./mo/2/icon.png" alt class="icon" />
          </div>
          <div class="desc" data-aos="fade-up" data-aos-delay="600">
            2012半世紀的品牌寫下「文華苑」經典<br />
            不凡經典至今依舊傳唱<br />
            2020達欣與經典團隊相約重逢、再鑄非凡
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
  // height: 100vh;
  display: flex;
  width: 90%;
  margin: 0 auto;
  background-color: #fffffb;

  &.fullscreen {
    height: calc(100vw * 782 / 2000) !important;
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
  position: relative;
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
      margin-bottom:0;      
      margin-top: calc(100vw * -85 / 1920);
      width: 100%;

      span {
        font-family: 'Noto Serif TC', serif;
        color: #aa804a;
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
      margin-top: calc(100vw * 85 / 1920);
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

  .line {
    &.line-t {
      height: calc(100vw * 305 / 1920);
      top: -5%;
    }
    &.line-b {
      height: calc(100vw * 305 / 1920);
      bottom: -10%;
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    width: 100vw;
    flex-wrap: wrap;

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
      height: calc(100vw * 556 / 910);
      flex-direction:column;

      .title {
        font-size: 1.6em;
        letter-spacing: 0.15em;
        margin-bottom: 0;
        margin-top: 0;
        p{margin-bottom: 1.5em;}
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
