<template>
  <div class="section3">
    <img src="./s3/top.png" alt="" class="top">
    <h3 class="title1">
      浩瀚城市大景
    </h3>
    <h3 class="title2">
      水岸公園的家
    </h3>
    <h3 class="desc">
      超越大直水岸、更勝江翠重劃，河岸綠地與市心機能左右環抱，休閒和便利一次入手，住進睿暘水漾擁抱大台北最幸福人生豐景。
    </h3>

    <img src="./s3/720度環景.jpg" alt="" class="vr">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.top {
  @include img_l_pc(1920, 0, 0);
}

.vr {
  height: size(1080);
}

.title1 {
  @include img_l_pc(408, 16, 166);
  font-size: size(63.6);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.09);
  text-align: left;
  color: #c61b1f;
  white-space: nowrap;
}

.title2 {
  @include img_l_pc(408, 96, 366);
  font-size: size(63.6);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.09);
  text-align: left;
  color: #c61b1f;
  white-space: nowrap;
}

.desc {
  @include img_r_pc(1005, 42, 54);
  font-size: size(23);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.16;
  letter-spacing:size( 2.3);
  text-align: left;
  color: #231815;
}

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section3 {
    height: sizem(872);
    min-height: sizem(0);
    max-height: sizem(900);
    .bg {
      width: 100%;
      max-width: 100%;
    }
  }

  .back {
    display: none;
  }

  .img {
    width: 100vw;
    height: auto;
    top: 0;
    left: 0;
    .name {
      bottom: 1em;
      right: 1em;
      font-size: sizem(12);
    }
  }

  .fly2 {
    width: sizem(78);
    top: sizem(272);
    right: sizem(8);
  }

  .txt {
    width: sizem(310);
    top: sizem(271.5);
    right: sizem(33);
    font-size: sizem(15);
  }

  .title {
    font-size: sizem(25);
    line-height: 1.44;
    letter-spacing: 0.04em;
  }

  .hr {
    width: 100%;
    height: 1px;
    margin: sizem(23) 0;
  }

  .desc {
    font-size: sizem(13);
    line-height: 2.2;
    letter-spacing: 0.03em;
  }

  .park {
    bottom: sizem(10);
    left: sizem(23);
    font-size: sizem(70);
    line-height: 1.1;
    right: auto;
    letter-spacing: sizem(-5.6);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section3',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
