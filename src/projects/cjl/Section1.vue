<template>
  <div class="relative">
    <div
      v-if="!isMobile"
      class="flex-c section1"
    >
      <div>
        <img
          src="./img/logo.png"
          alt=""
          class="logo"
        >
        <h3 class="txt flex-c">
          即將登場
        </h3>
      </div>
    </div>
    <div
      v-else
      class="flex-c section1"
    >
      <div>
        <img
          src="./img/logo.png"
          alt=""
          class="logo"
        >
        <h3 class="txt flex-c">
          即將登場
        </h3>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  // background: #3b5662;
}

.section1 {
  width: 100vw;
  height: size(1080);
  // background-image: url('./img/bg.jpg');
  // background-attachment: fixed;
  // position: fixed;
}

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: absolute;
  // }
}

.logo {
  width: size(559);
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.txt {
  width: size(527);
  height: size(79);
  position: relative;
  z-index: 1;
  font-size: size(48);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: 3.84px;
  text-align: left;
  color: #ffffff;
  background-image: url('./img/txtbg.png');
  background-size: cover;
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
  .section1 {
    width: 100vw;
    height: size-m(667);
  }

  .logo {
    width: size-m(265);
  }

  .txt {
    width: size-m(249);
    height: size-m(37);
    font-size: size-m(22);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',

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
