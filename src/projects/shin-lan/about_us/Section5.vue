<template>
  <div class="section5">
    <div class="container flex">
      <div>
        <img src="../shin-lan/abont/2/img9.jpg" alt="" class="top-img">
        <div class="shin-lan-title-h title2" data-aos="fade">
          營造<span data-aos="flip-right"></span>基石
        </div>
        <div class="desc desc2">
          營造，是任何建築的基石，所有建設的立身根本 完美的規劃與設計，最後都必須落實到營造的慢工出細活。
        </div>
      </div>
      <img src="../shin-lan/abont/2/img10.jpg" alt="" class="bottom-img">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section5 {
  width: 100%;
  // height: 100vh;
  // min-height: calc(900 * 100vw / 1920);
  // max-height: calc(1080 * 100vw / 1920);
  position: relative;
  margin: 0;
  // background: url('s1/bg.jpg') center;
  background-size: cover;
  // overflow: hidden;
  text-align: center;

  // 手機版
  @include md {
    // height: 100vh;
    height: sizem(654);
    // min-height: calc(604 * 100vw / 375);
    // max-height: calc(812 * 100vw / 375);
  }
}

.container {
  width: size(1234);
  margin: size(162) auto size(160);
  position: relative;

  @include md {
    width: 100%;
  }
}

.desc {
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: left;
  color: #000;
}

.title2 {
  @include img_l_pc(600, 466, 0);

  @include md {
    @include img_l_m(260, 170, 33);
  }
}

.desc2 {
  @include img_l_pc(537, 553, 0);
  @include md {
    @include img_c_m(310, 210);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
}

.top-img {
  width: size(547);

  @include md {
    @include img_r_m(196, 60, 0);
  }
}

.bottom-img {
  width: size(629);
  margin-top: size(120);
  margin-left: size(58);
  &.no-margin {
    margin-top: 0;
  }

  @include md {
    margin-top:0;
    margin-left: 0;
    @include img_r_m(343, 329, 0);
  }
}

.full-img {
  width: 100%;
  height: auto;
  margin-bottom: size(37);
  position: relative;
}
.title3 {
  @include img_c_pc(240, 0);
  position: relative;
  margin-bottom: size(50);

  @include md {
    @include img_l_m(126, 0, 33);
    font-size: sizem(28);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: sizem(1.68);
    text-align: left;
    color: #000;
  }
}

.desc3 {
  width:  100%;
  text-align: center;
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section5',

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
