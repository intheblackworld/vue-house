<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s3/bg.jpg"
        alt=""
        class="bg-img"
      >
      <div class="title-block flex-ac flex-jb absolute">
        <img
          src="./s3/l.png"
          alt=""
          class="title-l"
        >
        <h3 class="title">重劃區<br />3大優勢</h3>
        <img
          src="./s3/l.png"
          alt=""
          class="title-r"
        >
      </div>
      <div class="block-list flex-c">
        <div class="block">
          <h3 class="title">捷運未來式，大臺北山手線世代</h3>
          <img
            src="./s3/1.jpg"
            alt=""
            class="img"
          >
        </div>
        <div class="block">
          <h3 class="title">棋盤式街廓，行車行人共好規劃</h3>
          <img
            src="./s3/2.jpg"
            alt=""
            class="img"
          >
        </div>
        <div class="block">
          <h3 class="title">氧生綠覆率，樹影濃蔭悠然伴居</h3>
          <img
            src="./s3/3.jpg"
            alt=""
            class="img"
          >
        </div>
      </div>
    </div>
    <div
      v-else
      class="fullscreen"
    >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  background: #3b5662;
}

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.title-block {
  width: size(480);
  top: size(132);
  left: size(142);
  .title {
    font-size: size(59);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
  }
  .title-l {
    width: size(77);
  }

  .title-r {
    width: size(77);
    transform: rotate(180deg);
  }
}

.block-list {
  margin-bottom: size(84);
  .block {
    width: size(560);
    margin: 0 size(16);
    .title {
      font-size: size(28);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
      margin-bottom: size(42);
    }
    .img {
      width: 100%;
    }
  }
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
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
  .bg-img {
    height: auto;
    top: auto;
    bottom: 0;
    &:nth-child(1) {
      position: absolute;
    }
  }
  .title {
    width: size-m(289);
    right: size-m(43);
    top: calc(32vh - 20vw);
  }

  .mt {
    margin-top: 60px;
  }
  .cloud1 {
    height: size-m(604);
    left: 50%;
    top: auto;
    bottom: 0;
    width: auto;
    transform: translateX(-55%);
  }
  .cloud2 {
    height: size-m(604);
    left: 50%;
    top: auto;
    bottom: 0;
    width: auto;
    transform: translateX(-60%);
  }

  @keyframes clouda {
    to {
      transform: translateX(-45%);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section3',

  components: {},
  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
