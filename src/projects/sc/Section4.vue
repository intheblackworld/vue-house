<template>
  <div>
    <div
      class="section4"
    >
      <div
        class="float-block flex-c absolute"
        v-rellax="{
          // Rellax Options
          // See: https://github.com/dixonandmoe/rellax#features
          speed: -1.5,
        }"
      >
        <div>
          <img
            src="./s2/icon.png"
            alt=""
            class="block-icon"
          >
          <h3 class="block-title">拾秋散步地圖</h3>
        </div>
      </div>
      <img src="./s4/map.jpg" alt="" class="map-bg absolute">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: 100vw;
  height: size(1550 + 357);
  // background-image: url('./s1/bg.jpg');
  // background-size: cover;
  // background-attachment: fixed;
}

.float-block {
  width: size(150);
  height: size(451);
  top: size(-580);
  left: size(289);
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  z-index: 3;
  .block-icon {
    width: size(40);
    margin-bottom: size(28);
  }
  .block-title {
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: size(36);
    font-weight: normal;
    color: #c1724b;
  }
}

.map-bg {
  width: size(1770);
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 0;
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
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import Parallax from 'vue-parallaxy'
import slider from '@/mixins/slider.js'

export default {
  name: 'section4',

  mixins: [slider],

  components: {
    Parallax,
  },

  data() {
    return {
      isMobile,
      isTablet,
      slideList: [
        {
          img: require('./s3/1.jpg'),
        },
        {
          img: require('./s3/2.jpg'),
        },
        {
          img: require('./s3/3.jpg'),
        },
        {
          img: require('./s3/4.jpg'),
        },
        {
          img: require('./s3/5.jpg'),
        },
        {
          img: require('./s3/6.jpg'),
        },
        {
          img: require('./s3/7.jpg'),
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
