<template>
  <div class="section3">
    <div class="bg fullscreen relative">
      <div class="textbox-img">
        <div class="textbox-text-area">
          <div class="textbox-title">
            <h3><span>15</span>萬坪史博館綠地</h3>
            <h3>“是我家前院”</h3>
          </div>
            城市巨肺低碳綠園區<br>
            享用休閒遊憩及兼具教育功能生活領域
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s3_bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  // display: flex;
  align-items: center;
  height: 100vh;
  // justify-content: center;
  // width: 100%;
  // height: 100vh;
  // display: block;
  // left: 0;
  // top: 0;
}

.textbox-img {
  background-image: url('./s3_textbox.png');
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
    margin-top: 130px;
    margin-left: 170px;
    line-height: 1.2;
    font-size: 23px;
    width: 440px;
    color: #595757;
  }

  .textbox-title {
    font-size: 47px;
    color: #249486;
    text-align: center;
    margin-bottom: 6px;
  }

  span {
    font-size: 50px;
    margin-right: 10px;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .textbox-img {
    .textbox-text-area {
        margin-top: 100px;
        margin-left: 108px;
        font-size: 16px;
    }
    .textbox-title {
      font-size: 25px;
      margin-right: 30px;
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s3_bg.jpg');
    background-size: cover;
  }

  .fullscreen {
  }

  .textbox-img {
    background-image: url('./s3_textbox_m.png');
    height: 60%;
    background-size: contain;
    .textbox-text-area {
        margin-top: 70px;
        margin-left: 90px;
        font-size: 14px;
    }
    .textbox-title {
      font-size: 27px;
      left: 0;
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

  created() {},
}
</script>
