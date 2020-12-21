<template>
  <div class="section1">
    <transition-group name="swipe-fade">
      <div v-if="pageIndex === 1" key="page1">
        <div class="w-block"></div>
        <img src="./s1/logo.png" alt="" class="logo">
        <img src="./s1/1/st.png" alt="" class="st">
        <img src="./s1/1/t1.png" alt="" class="t1">
        <img src="./s1/1/t2.png" alt="" class="t2">
        <img src="./s1/1/i.jpg" alt="" class="i">
        <div class="hint">
          本公司保留活動修改及終止權利！！數量有限，要買要快
        </div>
      </div>
      <div v-if="pageIndex === 2" key="page2">
        <div class="w-block"></div>
        <img src="./s1/logo.png" alt="" class="logo2" v-if="isPC">
				<img src="./s1/logo2.png" alt="" class="logo2" v-if="isMobile">
        <img src="./s1/2/st.png" alt="" class="st2" v-if="isPC">
        <img src="./s1/2/t.png" alt="" class="t3" v-if="isPC">
				<img src="./s1/t_m.png" alt="" class="tm">
				<img src="./s1/img.png" alt="" class="rb">
      </div>
    </transition-group>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
  // background: url("./s1/bg.jpg") fixed ;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: 100%;
  min-height: size(900);
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;

  &:nth-child(1) {
    position: relative;
  }
}

.w-block {
  background-color: #fff;
  @include div_l_pc(1874, 963, 0, 0);
}

.logo {
  @include img_l_pc(677, 209, 232);
}

.st {
  @include img_l_pc(272, 347, 434);
}

.t1 {
  @include img_l_pc(712, 383, 214);
}

.t2 {
  @include img_l_pc(720, 768, 210);
}

.i {
  @include img_r_pc(633, 209, 209);
}

.hint {
  @include div_r_pc(450, 27, 965, 46);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
  white-space: nowrap;
}

.logo2 {
  @include img_c_pc(1064, 220);
}

.st2 {
  @include img_c_pc(610, 428);
}

.t3 {
  @include img_c_pc(1054, 614);
}

.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 0.5s ease;
}

.swipe-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
/*
.t1 {
  width: size(751);
  top: size(483);
  left: size(585);
}

.t2 {
  width: size(751);
  top: size(711);
  left: size(585);
}
*/
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
  .section1 {
    width: 100vw;
    min-height: sizem(470);
    max-height: sizem(812);
    height: sizem(709);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .w-block {
    background-color: #fff;
    @include div_l_m(361, 607 - 63, 60, 0);
  }

  .logo {
    @include img_l_m(223, 111, 80);
  }

  .st {
    @include img_l_m(117, 157, 129);
  }

  .t1 {
    @include img_l_m(234, 169, 72);
  }

  .t2 {
    @include img_l_m(222, 296, 74);
  }

  .i {
    @include img_r_m(238, 354, 68);
  }

  .hint {
    @include div_r_m(300, 18, 667, 14);
    font-size: sizem(12);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: right;
    color: #ffffff;
    white-space: nowrap;
  }

  .logo2 {
    @include img_l_m(154, 123, 99);
  }

  .tm {
    @include img_l_m(253, 310, 56);
  }

  .rb {
    @include img_l_m(292, 410, 0);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
			pageIndex: 2,
			interval: null,
    }
  },

  methods: {},

  mounted() {
		// clearInterval(this.interval)
    // this.interval = setInterval(() => {
    //   this.pageIndex = this.pageIndex === 1 ? 2 : 1
    // }, 5000)
  },

  created() {},

  computed: {},
}
</script>
