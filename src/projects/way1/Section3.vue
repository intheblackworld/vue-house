<template>
  <div class="section3">
    <img src="./s3/03_green_style.png" :alt="`${info.caseName}_grass`" class="grass">
    <img src="./s3/03_img.jpg" :alt="`${info.caseName}_img`" class="img">
    <h1 class="big-title" v-if="isPC" data-aos="fade-up" data-aos-delay="200">
      <span>6</span>大城市規劃 擘畫國際宜居之城
    </h1>
    <h1 class="big-title" v-if="isMobile" data-aos="fade-up" data-aos-delay="200">
      <span>6</span>大城市規劃<br />擘畫國際宜居之城
    </h1>
    <div class="title" v-if="isPC"  data-aos="fade-up" data-aos-delay="400">
      超前部署<br />
      建設願景<br />
      鳳鳴站啟動，交通好Way
    </div>
    <div class="title" v-if="isMobile">
      超前部署 建設願景<br />
      鳳鳴站啟動，交通好Way
    </div>
    <div class="hr"  data-aos="fade-right" data-aos-delay="400"></div>
    <div class="desc"  data-aos="fade-up" data-aos-delay="600">
      台鐵＋捷運雙鐵交匯，軌道軸線引領向前，台鐵鳳鳴站＋捷運三鶯線，軌道路網雙線加持，台鐵鳳鳴臨時站啟動，即將改寫城市移動新模式。
    </div>
    <div class="content flex-ac flex-jb">
      <div class="content-block flex-c wrap">
        <img src="./s3/03_mrt_icon.png" :alt="`${info.caseName}_mrt_icon`" class="mrt_icon">
        <div class="block-title">
          台鐵鳳鳴臨時站
        </div>
        <div class="block-desc">
          預計民國113年年底完工
        </div>
      </div>
      <div class="content-block flex-c wrap">
        <img src="./s3/03_tra_icon.png" :alt="`${info.caseName}_tra_icon`" class="tra_icon">
        <div class="block-title">
          捷運三鶯線
        </div>
        <div class="block-desc">
          預計民國112年12月完工
        </div>
      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: 100vw;
  height: size(1216);
  max-height: size(1216);
  min-height: size(1216);
  position: relative;
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: size(1080);
  min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.grass {
  @include img_r_pc(497, 311, 117);

  animation: grass 2s 0s ease-in-out alternate-reverse infinite;
}

@keyframes grass {
  to {
    transform: skew(5deg);
  }
}
.img {
  @include img_r_pc(988, 266, 97);
}

.big-title {
  @include img_r_pc(794, 141, 94);
  font-size: size(53.6);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: size(3.22);
  text-align: center;
  color: #2f2c2c;
  white-space: nowrap;

  span {
    font-size: size(70);
  }
}

.title {
  @include img_l_pc(488, 380, 183);
  font-size: size(40.5);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: size(2.43);
  text-align: center;
  color: #009fb1;
  white-space: nowrap;
}

.hr {
  @include img_l_pc(46, 590, 404);
  border-bottom: solid size(4) #009fb1;
}
.desc {
  @include img_l_pc(608, 632, 118);
  font-size: size(22);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(2.6);
  text-align: justify;
  color: #2f2c2c;
}
.content {
  @include img_l_pc(608, 802, 118);
}

.content-block {
  width: size(294);
  height: size(266);
  border-radius: 14.2px;
  background-color: #d1d2d3;
  padding: 40px 40px;
}

.mrt_icon {
  width: size(107);
}

.tra_icon {
  width: size(107);
}

.block-title {
  font-size: size(30.3);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: size(0.61);
  text-align: center;
  color: #009fb1;
  white-space: nowrap;
}

.block-desc {
  font-size: size(18.5);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: size(1.11);
  text-align: center;
  color: #009fb1;
  white-space: nowrap;
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
    min-height: auto;
    max-height: initial;
    height: sizem(245 + 576);
  }

  .grass {
    display: none;
    // @include img_r_pc(497, 311, 117);

    // animation: grass 2s 0s ease-in-out alternate-reverse infinite;
  }

  @keyframes grass {
    to {
      transform: skew(5deg);
    }
  }
  .img {
    @include img_r_m(375, 266, 0);
    top: auto;
    bottom: 0;
  }

  .big-title {
    @include img_r_m(196, 19, 90);
    font-size: sizem(23.2);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: sizem(1.39);
    text-align: center;
    color: #302d2c;
    white-space: nowrap;

    span {
      font-size: sizem(30);
    }
  }

  .title {
    @include img_l_m(214, 154, 80);
    font-size: sizem(17.7);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(1.06);
    text-align: center;
    color: #009fb1;
    white-space: nowrap;
  }

  .hr {
    @include img_l_m(32, 115, 174);
    border-bottom: solid sizem(3) #009fb1;
  }

  .desc {
    @include img_l_m(317, 218, 31);
    font-size: sizem(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: sizem(0.86);
    text-align: left;
    color: #302d2c;
  }

  .content {
    @include img_l_m(160 + 155, 352, 30);
  }

  .content-block {
    width: sizem(154);
    height: sizem(176);
    border-radius: sizem(10);
    background-color: #d1d2d3;
    padding: 20px;
  }

  .mrt_icon {
    width: sizem(57);
  }

  .tra_icon {
    width: sizem(57);
  }

  .block-title {
    font-size: sizem(16.1);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: sizem(0.32);
    text-align: center;
    color: #009fb1;
    white-space: nowrap;
  }

  .block-desc {
    font-size: sizem(11.1);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: sizem(0.66);
    text-align: center;
    color: #009fb1;
    white-space: normal;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import slider from '@/mixins/slider.js'
export default {
  // mixins: [slider],
  // props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      // slideList: [
      //   {
      //     img: require('./s3/img.png'),
      //     // name: 'WE機能圖',
      //   },
      // ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 3) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>