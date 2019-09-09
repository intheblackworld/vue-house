<template>
  <div class="section6">
    <div class="bg relative fullscreen">
      <div class="textbox-img">
        <div class="textbox-text-area">
          <div class="textbox-title">
            <h3 class="big">“住一棟別墅”</h3>
            <h3>享一座會館 ＋ 一座森林</h3>
          </div>隱隱約約的淺移默化，將健康與運動的種籽落入這個溫厚的土壤，長出大樹，成一片森林花園，舒展都市擁擠的壓力，打開了閉塞心靈的一扇窗。
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url("./s6_bg.jpg");
  position: relative;
  background-size: cover;
  background-position: center;
}

.textbox-img {
  background-image: url("./s6_textbox.png");
  position: absolute;
  width: 100%;
  background-repeat: no-repeat;
  height: 100%;
  background-size: 100% 100%;
  top: 0%;
  // background-size: cover;
  // background-position: center;
  // height: 320px;
  // width: 470px;
  // margin: 0 auto;
  // display: flex;
  // justify-content: center;

  .textbox-text-area {
    color: #fff;
    margin-top: 125px;
    float: right;
    font-size: 21px;
    margin-right: 14%;
    line-height: 1.2;
    font-weight: 300;
    width: 350px;
    text-align: left;
  }

  .textbox-title {
    font-size: 32px;
    color: #ffc400;
    width: 400px;
    text-align: right;
    line-height: 1.5;
    position: relative;
    right: 50px;
    margin-bottom: 16px;
  }

  h3.big {
    font-size: 42px;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
.textbox-img {
    .textbox-text-area {
      margin-top: 80px;
      margin-right: 14%;
      font-size: 18px;
      width: 220px;
    }

    .textbox-title {
      width: 280px;
    }

    h3 {
      font-size: 24px;
    }

    h3.big {
      font-size: 30px;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .textbox-img {
    .textbox-text-area {
      margin-top: 80px;
      margin-right: 12%;
      font-size: 16px;
      width: 220px;
    }

    .textbox-title {
      width: 280px;
    }

    h3 {
      font-size: 24px;
    }

    h3.big {
      font-size: 30px;
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url("./s6_bg_m.jpg");
  }

  .textbox-img {
    background-image: url("./s6_textbox_m.png");

    .textbox-text-area {
      margin-right: 0px;
      width: 80%;
      margin-top: 60px;
      font-size: 16px;
      left: -7%;
      position: relative;
      font-weight: 300;
    }

    .textbox-title {
      width: 95vw;
      margin-bottom: 14px;
    }

    h3 {
      font-size: 26px;
    }

    h3.big {
      font-size: 36px;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";
export default {
  name: "section6",

  data() {
    return {
      isMobile
    };
  },

  methods: {},

  created() {}
};
</script>
