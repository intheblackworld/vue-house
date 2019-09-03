<template>
  <div class="section1">
    <div class="bg fullscreen relative">
      <img v-if="!isMobile" src="./s1_logo.png" alt class="img relative" />
      <div v-if="!isMobile" class="subtitle absolute-c">捷運 ｜ 森活 ｜ 校園</div>
      <div class="desc absolute-c" v-if="!isMobile">
        1180萬
        <span>起</span> 買捷運2房
        <br />景觀3房 訂簽180萬<span>起</span>
      </div>

      <!-- <img v-if="!isMobile" src="./s1_title.png" alt class="img" /> -->
      <!-- <img v-if="!isMobile" src="./s1_desc.png" alt class="img" /> -->
      <img v-if="!isMobile" src="./s1_footer.png" alt class="footer" />

      <div v-if="isMobile">
        <img src="./s1_logo_m.png" alt class="logo relative" />
        <div class="subtitle relative">捷運 ｜ 森活 ｜ 校園</div>
        <div class="desc relative">
          1180萬
          <span>起</span> 買捷運2房<br />
          景觀3房 訂簽180萬
          <span>起</span>
        </div>
        <img src="./s1_footer_m.png" alt class="footer" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s1_bg.jpg');
  background-size: cover;
  position: relative;
}

.img {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;

  &.relative {
    position: relative;
  }
}

.footer {
  position: absolute;
  width: 100vw;
  bottom: 0;
  left: 0;
}

.subtitle {
  width: 460px;
  height: 48px;
  font-size: 48px;
  font-weight: 900;
  line-height: 1.5;
  color: #ffffff;
}

.desc {
  width: 670px;
  height: 99px;
  font-size: 74px;
  font-weight: bold;
  line-height: 1.34;
  letter-spacing: -1.48px;
  text-align: left;
  color: #ffffff;
  top: 65%;

  span {
    font-size: 45px;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s1_bg.jpg');
    background-size: cover;
  }

  .logo {
    width: 225px;
    margin: 0 auto;
    margin-top: 20vh;
    z-index: 1;
  }

  .subtitle {
    width: 100vw;
    font-size: 32px;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 10vh;
    font-weight: bold;
    z-index: 1;
  }

  .desc {
    width: 315px;
    color: #fff;
    font-size: 35px;
    font-weight: bold;
    margin: 0 auto;
    margin-bottom: 15px;
    z-index: 1;

    span {
      font-size: 23px;
    }
  }

  .sky {
    width: 200%;
    left: -50%;
    position: absolute;
    bottom: 0;
    z-index: 0;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section1',

  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},
}
</script>
