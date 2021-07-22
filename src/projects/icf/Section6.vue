<template>
  <div class="section6">
    <img src="./s6/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isPC">
    <img src="./mobile/06/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isMobile">
    <div class="content" data-aos="fade" data-aos-delay="0">
      <h1 class="title" data-aos="flip-up" data-aos-delay="200">
        輕擁凹子底頂級商辦<br />自用投資雙贏
      </h1>
      <div class="subtitle" data-aos="flip-up" data-aos-delay="400" v-if="isPC">
        擁有企業總部頂級商辦，企業主首選置產標的抗通膨
      </div>
      <div class="subtitle" data-aos="flip-up" data-aos-delay="400" v-if="isMobile">
        擁有企業總部頂級商辦<br />企業主首選置產標的抗通膨
      </div>
      <h1 class="desc" data-aos="fade-up" data-aos-delay="600" v-if="isPC">
        「好的進場點」是投資成功的第一步！贏了面子更擴大格局，<br />
        【京城IFC】絕佳投資標的！收租置產坐等增值！正是資產佈局首選利器！
      </h1>
      <h1 class="desc" data-aos="fade-up" data-aos-delay="600" v-if="isMobile">
        「好的進場點」是投資成功的第一步！贏了面子更擴大格局，【京城IFC】絕佳投資標的！<br />收租置產坐等增值！正是資產佈局首選利器！
      </h1>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: 100%;
  height: size(865);
  min-height: size(865);
  max-height: size(865);
  position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
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
.content {
  @include div_r_pc(778, 338, 481, 157);
  background-color: rgba(54, 54, 54, 0.8);
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  @include img_l_pc(360, 40, 37);
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(575, 160, 43);
  font-family: 'Noto Sans TC';
  font-size: size(25);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #00afd5;
}

.desc {
  @include img_l_pc(730, 211, 34);
  font-size: size(20);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(2);
  text-align: left;
  color: #ffffff;
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
  .section6 {
    width: 100%;
    height: sizem(666);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .bg-img {
    width: 100%;
    height: sizem(397);
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;
    // opacity: 0.5;
  }

  .content {
    @include div_l_m(345, 238, 31, 0);
    background-color: rgba(54, 54, 54, 0.8);
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    @include img_l_m(225, 14, 30);
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(192, 91, 30);
    font-family: 'Noto Sans TC';
    font-size: sizem(16);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    text-align: left;
    color: #33cfff;
  }

  .desc {
    @include img_l_m(320, 154, 30);
    font-family: 'Noto Sans TC';
    font-size: sizem(12);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section6',

  data() {
    return {
      info,
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

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
