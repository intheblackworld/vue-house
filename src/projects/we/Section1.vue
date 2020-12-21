<template>
  <div class="section1">
    <div>
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
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .logo {
    width: sizem(308);
    top: sizem(243);
    left: sizem(35);
  }

  .t1 {
    width: sizem(308);
    top: sizem(309);
    left: sizem(35);
  }

  .t2 {
    width: sizem(308);
    top: sizem(403);
    left: sizem(35);
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
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
