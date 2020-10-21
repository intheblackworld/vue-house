<template>
  <div>
    <div class="section2">
      <img src="./s2/bg.jpg" alt="" class="bg-img">
      <h3 class="title absolute">
        你的左岸 極景.極美.極品
      </h3>
      <h3 class="subtitle absolute">
        Polar view
      </h3>
      <div class="desc absolute">
        這是淡水河岸最美的一角，迎面藍帶涓流波潾，後倚綠意青山壯闊，蟠踞270度藍天碧水，釋放身心壓力，給心靈一個安適的停靠，到這裡重新感受生活，順著季節四時變化，入住山水懷抱的「八里 龍躍」。
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
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
  top: size(257);
  right: size(322);
  font-size: size(54.9);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing:size( 3.3);
  text-align: left;
  color: #231815;
  white-space: nowrap;
}

.subtitle {
  width: size(389);
  top: size(401);
  left: size(526);
  font-size: size(67);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: size(-2.68);
  text-align: left;
  color: #808080;
  white-space: nowrap;
}

.desc {
  width: size(670);
  top: size(378);
  right: size(289);
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
