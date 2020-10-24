<template>
  <div>
    <div class="section2">
      <img src="./s3/bg.jpg" alt="" class="bg-img">
      <h3 class="title absolute">
        城市與河岸最舒適的距離
      </h3>
      <div class="desc absolute">
        八里，擁有宜居環境，左右更續接了雙北生活圈，交通便利，透過快速道路、關渡大橋淡江大橋連接了新市鎮生活圈。在這有著深度的文化蘊藏，十三行博物館、左岸公園、左岸劇場，相佐水岸綠道，如此舒心閑適的居所，只有「八里 龍躍」。
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: 100vh;
  min-height: size(1080);
  background-size: cover;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}



.bg-img {
  width: 100vw;
  height: auto;
  min-height: size(1080);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.title {
  width: size(640);
  top: size(724);
  left: size(150);
  font-size: size(55.2);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing:size(3.3);
  text-align: left;
  color: #231815;
  white-space: nowrap;
}

.desc {
  width: size(640);
  top: size(846);
  left: size(153);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: size(1.14);
  text-align: left;
  color: #595757;

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
  .section2 {
    width: 100vw;
    height: sizem(552);
    margin-top:sizem(30);
    // height: size-m(804);
    background-image: none;
    background-size: cover;
    background-attachment: scroll;
  }

  .img {
    width: sizem(375);
    top: sizem(280);
    left: sizem(0);
  }
  .icon {
    width: sizem(73);
    top: sizem(0);
    left: sizem(23);
  }
.txt{
    top: sizem(30);
    left: sizem(52);
    }
  .title {
    font-size: sizem(25);
  }
  .subtitle {
    font-size: sizem(22);
  }
  .desc {
    width: sizem(290);
    font-size: sizem(15);
    font-weight: normal;
    line-height: 1.73;
    div{transform: scaleX(0.95);width: 101%;transform-origin: 0 0;}
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
// import Map from '@/components/Map.vue'

export default {
  name: 'section2',

  // components: {
  //   Map,
  // },

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
