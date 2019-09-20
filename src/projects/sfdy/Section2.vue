<template>
  <div class="section2">
    <div class="bg fullscreen relative">
      <div class="textbox-img">
        <div class="textbox-text-area">
          <div class="textbox-title">
            <h3>“史博館第一排”</h3>
            <h3>台南首座生態別墅莊園</h3>
          </div>引領世界建築趨勢，超乎想像的建築計畫，首度開啟台南國際新視野。
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section2 {
  height: 100%;
}
.bg {
  background-image: url('./s2_bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.textbox-img {
  background-image: url('./s2_textbox.png');
  background-position: center;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  background-repeat: no-repeat;
  height: 100%;
  background-size: 100% 100%;
  top: 0%;

  .textbox-text-area {
    margin-top: 180px;
    line-height: 1.2;
    font-size: 23px;
    width: 420px;
    color: #595757;
  }

  .textbox-title {
    font-size: 43px;
    color: #249486;
    text-align: center;
    margin-bottom: 16px;
    width: 500px;
    left: calc(50% - 250px);
    position: relative;
  }
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
  .textbox-img {
    .textbox-text-area {
      font-size: 22px;
      width: 353px;
      margin-top: 140px;
    }
    .textbox-title {
      font-size: 38px;
    }
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .textbox-img {
    .textbox-text-area {
      margin-top: 120px;
      width: 300px;
      font-size: 18px;
    }
    .textbox-title {
      font-size: 32px;
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .textbox-img {
    .textbox-text-area {
      margin-top: 140px;
      width: 260px;
      font-size: 16px;
    }
    .textbox-title {
      font-size: 26px;
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s2_bg.jpg');
    background-size: cover;
    background-attachment: scroll;
  }
  .textbox-img {
    background-image: url('./s2_textbox_m.png');
    height: 60%;
    background-size: contain;
    .textbox-text-area {
      font-size: calc(100vw * (15 / 375));
      margin-top: auto;
      margin: auto;
      width: 68vw;
      margin-top: 23.5vh;
      text-align: center;
    }
    .textbox-title {
      font-size: calc(100vw * (24 / 375));
      left: 0;
      width: 100%;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section2',

  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},
}
</script>
