<template>
  <div class="section3">
    <div class="bg fullscreen relative">
      <img v-if="!isMobile" src="./s3txtbox.png" alt="大口呼吸！15萬坪城市綠肺就在眼前 台南史博館第一排景觀席 恆久棟距‧無限視野‧新鮮活氧" class="bg-img" data-aos="fade" data-aos-delay="200" />
      <img v-if="isMobile" src="./s3txtbox_s.png" alt="大口呼吸！15萬坪城市綠肺就在眼前 台南史博館第一排景觀席 恆久棟距‧無限視野‧新鮮活氧" class="bg-img" data-aos="fade" data-aos-delay="200" />
      <!-- <div class="textbox-img">
        <div class="textbox-text-area">
          <div class="textbox-title">
            <h3>
              <span>15</span>萬坪史博館綠地
            </h3>
            <h3>“是我家前院”</h3>
          </div>城市巨肺低碳綠園區
          <br />享用休閒遊憩及兼具教育功能生活領域
        </div>
      </div>-->
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

.bg-img {
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
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

  .textbox-text-area {
    margin-top: 130px;
    margin-left: 130px;
    line-height: 1.2;
    font-size: 23px;
    width: 440px;
    color: #595757;
  }

  .textbox-title {
    font-size: 45px;
    color: #249486;
    text-align: center;
    margin-bottom: 6px;
  }

  span {
    font-size: 50px;
    margin-right: 10px;
  }
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
  .textbox-img {
    .textbox-text-area {
      width: 380px;
      font-size: 20px;
    }
    .textbox-title {
      font-size: 37px;
    }
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .textbox-img {
    .textbox-text-area {
      margin-top: 100px;
      margin-left: 108px;
      font-size: 16px;
    }
    .textbox-title {
      font-size: 30px;
      margin-right: 30px;
    }
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

  .textbox-img {
    background-image: url('./s3_textbox_m.png');
    width: 100vw;
    height: calc(100vw * (600 / 800));
    background-size: contain;
    .textbox-text-area {
      margin-top: calc(100vw * (100 / 800));
      margin-left: 70px;
      font-size: calc(100vw * (13 / 375));
    }
    .textbox-title {
      font-size: 18px;
      left: 0;
    }
    sapn {
      margin-right: 0px;
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
