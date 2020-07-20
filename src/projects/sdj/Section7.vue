<template>
  <div class="relative">
    <img
      src="require('./s7/area7_bg.png')"
      alt="bg-img"
      class="bg-img"
    ><div class="box"></div>
    <img
      :src="isMobile ? require('./s7/area7_doll_mobile.png') : require('./s7/area7_doll.png')"
      alt="doll"
      class="doll absolute"
    >
    <img
      :src="isMobile ? require('./s7/area7_info_mobile.png') : require('./s7/area7_info.png')"
      alt="info"
      class="info absolute"
    >
    <div class="title absolute">銀級智能候選<br />最嚴審查耐震宅</div>
    <div class="hr absolute"></div>
    <div class="desc absolute">
      屋頂太陽能光電板、電動機車充電區<br />
      活水過濾系統、雨水回收池、雲端智慧主機系統<br />
      是銀級候選智能好宅，拔高24層，最嚴審查更耐震！
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  background: #004a7f;
}
.bg-img {
  width: 100vw;
  height: size(1080);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 2;

  &:nth-child(1) {
    position: relative;
  }
}
.box{background: #fff7;width:  size(50);height: 100%;position: absolute;top:0;left: 0;
transform: skewX(-35deg)scaleX(4)translateX(-300%);animation: b 2s 3s ease-in-out infinite;
&::before{content: "";background: #fff3;width:  size(80);height: 100%;position: absolute;top:0;left: size(-15);}
&::after{content: "";background: #fff3;width:  size(100);height: 100%;position: absolute;top:0;left:  size(-25);}
}
@keyframes b{
    to {
transform: skewX(-35deg)scaleX(4)translateX(5000%);
      //  transform: rotate(5deg);
    }
}
.doll {
  z-index: 2;

  width: size(420);
  top: size(397);
  left: size(469);
}

.info {
  z-index: 2;

  width: size(455);
  top: size(47);
  right: size(445);
}

.title {
  z-index: 2;

  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 5px;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  width: size(380);
  top: size(47);
  left: size(486);
}

.hr {
  z-index: 2;

  width: size(590);
  height: 1px;
  background-color: #fff;
  top: size(214);
  left: size(382);
}

.desc {
  z-index: 2;

  font-size: size(28);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  width: size(634);
  top: size(239);
  left: size(358);
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
  .relative {
    // height: 100vh;
    overflow: hidden;
    background: #fff;
  }
  .bg-img {
    width: 100vw;
    height: size-m(1300 / 2);
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;

    &:nth-child(1) {
      position: relative;
    }
  }

  .doll {
    width: size-m(210 / 2);
    top: size-m(922 /2);
    left: size-m(258 / 2);
  }

  .info {
    width: size-m(375);
    top: size-m(47 /2);
    left: size-m(35);
  }

  .title {
    font-size: size-m(50 / 2);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 2.5px;
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
    width: size-m(380/ 2);
    top: size-m(563 / 2);
    left: size-m(173 / 2);
  }

  .hr {
    width: size-m(590 / 2);
    height: 1px;
    background-color: #fff;
    top: size-m(730 / 2);
    left: size-m(69 / 2);
  }

  .desc {
    font-size: size-m(28 / 2);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.81;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
    width: size-m(634 / 2);
    top: size-m(755 / 2);
    left: size-m(45 / 2);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section7',

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
