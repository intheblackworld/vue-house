<template>
  <div class="section2">
    <div class="bg fullscreen relative">
      <div class="textbox-img">
        <div class="textbox-text-area">
          <div class="textbox-title">
            <h3>“史博館第一排”</h3>
            <h3>台南首座生態別墅莊園</h3>
          </div>
            引領世界建築趨勢，超乎想像的建築計畫，首度開啟台南國際新視野。
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s2_bg.jpg');
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

  .textbox-text-area{
    margin-top: 170px;
    line-height: 1.2;
    font-size: 23px;
    width: 440px;
    color: #595757;
  }

  .textbox-title {
    font-size: 47px;
    color: #249486;
    text-align: center;
    margin-bottom: 16px;
    width: 500px;
    left: calc(50% - 250px);
    position: relative;
  }
}

@media only screen and (min-device-width: 1025px) and (max-device-width: 1680px) {
  .textbox-text-area{
    width: 390px;
    font-size: 20px;
  }
  .textbox-title {
    font-size: 40px;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s2_bg.jpg');
    background-size: cover;
  }

  .fullscreen {
  }

  .textbox-img {
    background-image: url('./s2_textbox_m.png');
    height: 60%;
    background-size: contain;
    .textbox-text-area {
      font-size: 15px;
      margin: 140px;
    }
    .textbox-title {
      font-size: 29px;
      left: 0;
      width: 300px;
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
