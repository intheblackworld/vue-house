<template>
  <div class="section2">
    <div class="fix-group">
      <!-- div class="button" @click="modal = true">
        <img src="./gold_btn.png" alt />
      </div -->
      <!-- <div class="button" v-scroll-to="{ element: `#${'section2'}`, offset: -56 }">
        <img src="./chevron-up.png" alt />
      </div>-->
    </div>
    <!-- div class="modal" v-if="modal">
      <div class="mask"></div>
      <div>
        <img src="@/assets/img/close.png" alt class="close" @click="modal = false" />
        <img src="./act.jpg" alt v-if="!isMobile" />
        <img src="./act_m.jpg" alt v-else />
      </div>
    </div-->
    <video-bg autoplay="autoplay" :sources="['https://www.h35.banner.tw/lkf/lkf.mp4']" img="./s2_bg.jpg" isFix>
      <!-- <iframe
        id="ytplayer"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/WXB04Bsy8Xk?version=3&autoplay=1&loop=1&playlist=WXB04Bsy8Xk&controls=0&rel=0"
        frameborder="0"
        allowfullscreen
      ></iframe> -->

      <img
        data-aos="fade"
        data-aos-delay="0"
        data-aos-duration="1500"
        class="mask-img hidden-mobile"
        src="./s2_mask.png"
        alt
      />
      <img class="mask-img hidden-pc hidden-tablet visible-mobile" src="./s2_mask_m.png" alt />
      <div class="mask"></div>
      <div
        class="title"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1500"
      >Luxury Life</div>
      <div class="content" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
        <div>
          <p class="sub-title">全台唯一  長租15年</p>
          <p class="text">
            月收2萬，小額投資換主題飯店房東<br />
            18-22坪 入主飯店唯一機會!
          </p>
        </div>
      </div>
    </video-bg>
  </div>
</template>
<style lang="scss" scoped>
.VideoBg {
  width: 100vw;
  height: calc(100vh - 60px) !important;
  video {
    position: fixed;
    z-index: 0;
  }
}
.mask {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
}
.mask-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 60px);
  z-index: 1;
}

.title {
  width: 292px;
  height: 66px;
  opacity: 0.7;
  font-family: TimesNewRomanPSMT;
  font-size: 60px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #c08d4e;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 10%;
  position: absolute;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 1280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  top: 60%;
  padding-right: 20px;
  .sub-title {
    width: 460px;
    height: 42px;
    font-size: 31.5px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    margin-bottom: 10px;
  }

  .text {
    width: 400px;
    height: 71px;
    font-size: 25px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
}

.fix-group {
  position: fixed;
  z-index: 10;
  right: 20px;
  bottom: 20px;

  .button {
    font-size: 18px;
    color: #fff;
    width: 150px;
    height: 150px;
    border-radius: 999px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}

.modal {
  width: 100vw;
  height: 100vh;
  z-index: 100;
  position: fixed !important;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .mask {
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
  }

  > div {
    position: relative;
  }

  img {
    position: relative;
    z-index: 122;
  }

  .close {
    position: absolute;
    top: -80px;
    right: -80px;
    cursor: pointer;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .content {
    width: 980px;
  }

  .modal {
    width: 100vw;
    height: 100vh;
    z-index: 100;
    position: fixed !important;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .mask {
      background: rgba(0, 0, 0, 0.4);
      width: 100%;
      height: 100%;
      z-index: 2;
      position: absolute;
    }

    > div {
      position: relative;
    }

    img {
      width: 80%;
      position: relative;
      z-index: 122;
    }

    .close {
      width: 50px;
      position: absolute;
      top: -50px;
      right: 20px;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 767px) {
  .VideoBg {
    height: calc(100vh - 45px - 63px) !important;

    video {
      top: 48%;
    }
  }

  .mask {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .mask,
  .mask-img {
    height: calc(100vh - 45px - 63px) !important;
  }

  .title {
    font-size: 30px;
    top: 20%;
  }

  .content {
    width: 100vw;
    top: 30%;
    .sub-title {
      width: 230px;
      white-space: nowrap;
      height: 16px;
      font-size: 15.5px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
    }

    .text {
      width: 175px;
      height: 30px;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.07px;
      text-align: left;
      color: #ffffff;
    }
  }
  .bg {
    background-image: url('./s1_bg_m.jpg');
    .img {
      display: none;
    }
    .imgM {
      display: block;
    }
  }

  .fix-group {
    // display: none;
    right: 0;
  }

  .modal {
    width: 100vw;
    height: 100vh;
    z-index: 200;
    position: fixed !important;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .mask {
      background: rgba(0, 0, 0, 0.4);
      width: 100%;
      height: 100vh !important;
      position: absolute;
      z-index: 110;
    }

    > div {
      position: relative;
    }

    img {
      width: 80%;
      position: relative;
      z-index: 122;
    }

    .close {
      width: 50px;
      position: absolute;
      top: -50px;
      right: 20px;
      cursor: pointer;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import VideoBg from '@/components/VideoBg.vue'
import { isMobile } from '@/utils'

export default {
  name: 'section2',
  components: {
    VideoBg,
  },

  data() {
    return {
      modal: true,
      isMobile,
    }
  },

  methods: {},
}
</script>
