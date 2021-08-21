<template>
  <div class="section3">
    <div class="desc" v-if="isPC"  data-aos="fade-up" data-aos-delay="600">
      陽明山 ，台北最珍貴的一座山<br />
      陽明山景觀席向來是台灣企業富豪獨鍾的層峰聚落<br />
      在這裡 ，有萬頃的自然森林與生態<br />
      分秒都有不同的景致 ，一天可看盡春夏秋冬<br>收藏四季風華
    </div>
    <div class="desc" v-if="isMobile"  data-aos="fade-up" data-aos-delay="600">
      陽明山，台北最珍貴的一座山<br />
      陽明山景觀席向來是台灣企業富豪<br>獨鍾的層峰聚落<br />
      在這裡，有萬頃的自然森林與生態<br />
      分秒都有不同的景致 <br>一天可看盡春夏秋冬，收藏四季風華
    </div>
    <div class="title" v-if="isMobile" data-aos="fade-up" data-aos-delay="200">
      私藏一座
    </div>
    <div class="subtitle" v-if="isMobile" data-aos="fade-up" data-aos-delay="400">
      陽明山國家公園
    </div>
    <img src="./s3/title.png" :alt="`${info.caseName}_img`" class="title" v-if="isPC" data-aos="fade-up" data-aos-delay="200">
    <img src="./s3/img.png" :alt="`${info.caseName}_img`" class="img">
    <img src="./s3/t_style.png" :alt="`${info.caseName}_img`" class="t_style">
    <div class="cloud-bg">
      <img src="./s3/style_1.png" :alt="`${info.caseName}_img`" class="cloud cloud1">
      <img src="./s3/style_2.png" :alt="`${info.caseName}_img`" class="cloud cloud2">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section3 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  max-height: auto;
  //overflow: hidden;
  // position: relative;
  // background-image: url('./s1/01_bg.jpg');
  background-size: cover;
  background-attachment: fixed;

  // margin: 0 0 size(400) 0;

  // &:before {
  //   content: ' ';
  //   position: fixed;
  //   z-index: -1;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: url('./s1/bg.jpg') center 0 no-repeat;
  //   background-size: cover;
  // }
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;
}

.img {
  @include img_l_pc(979, 180, 167);
}

.title {
  @include img_r_pc(109, 180, 168);
}

.desc {
  @include img_r_pc(577, 580, 152);
  font-size: size(25);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.4;
  letter-spacing: size(2);
  text-align: left;
  color: #4d4d4d;
  white-space: nowrap;
}

.t_style {
  @include img_r_pc(673, 180, 0);
  animation: strech 5s ease-in-out alternate infinite;
}

@keyframes strech {
  to {
    transform: skewX(10deg);
  }
}

.cloud-bg {
  .cloud {
    animation: cloud 5s ease-in-out alternate infinite;
  }

  .cloud1 {
    @include img_l_pc(781, 80, -50);
    transform: translateX(-10%);
  }

  .cloud2 {
    @include img_r_pc(537, 900, -20);
    transform: translateX(-15%);
  }
}
@keyframes cloud {
  to {
    transform: translateX(0);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section3 {
    width: 100vw;
    min-height: sizem(530);
    max-height: sizem(530);
    height: sizem(530);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
    // &:before {
    //   background-image: url('./s1/bg_m.jpg');
    // }
  }

  .img {
    @include img_c_m(315, 110);
  }

  .title {
    @include img_r_m(88, 43, 31);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(2.6);
    text-align: center;
    color: #cc8b00;
    white-space: nowrap;
  }

  .subtitle {
    @include img_r_m(156, 77, 31);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(2.6);
    text-align: center;
    color: #000;
    white-space: nowrap;
  }

  .desc {
    @include img_r_m(315, 347, 30);
    font-size: sizem(16);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.86;
    letter-spacing: sizem(0.7);
    text-align: left;
    color: #4d4d4d;
    white-space: normal;
  }

  .t_style {
    @include img_r_m(218, 0, 0);
    animation: strech 5s ease-in-out alternate infinite;
  }

  .cloud-bg {
    .cloud {
      animation: cloud 5s ease-in-out alternate infinite;
    }

    .cloud1 {
      @include img_l_m(213, 92, -20);
      transform: translateX(-10%);
    }

    .cloud2 {
      @include img_r_m(200, 520, -20);
      transform: translateX(-15%);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section3',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      // blockIndex: 0,
    }
  },

  methods: {},

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {},
}
</script>
