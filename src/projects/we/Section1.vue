<template>
  <div class="section1">
    <transition-group name="swipe-fade">
      <div v-if="pageIndex === 1" key="page1">
        <div class="w-block"></div>
       <!-- <img src="./s1/logo.png" alt="" class="logo">
        <img src="./s1/1/st.png" alt="" class="st">  -->
        <img src="./s1/1/i.jpg" alt="" class="i">
        <div class="t1">早鳥享好康<br>好禮我最威</div>
        <div class="t2">好禮4選3，風光成家最給力！</div>
				<img src="./s1/img.png" alt="" class="rb"> 
        <div class="hint">
          本公司保留活動修改及終止權利！！數量有限，要買要快
        </div>
      </div>
      <div v-if="pageIndex === 2" key="page2">
        <div class="w-block"></div>
        <img src="./s1/logo.png" alt="" class="logo2" v-if="isPC">
				<img src="./s1/logo2.png" alt="" class="logo2" v-if="isMobile">
        <div class="st2" v-if="isPC">金城正核心 WIN在起跑點</div>
        <div class="t3" v-if="isPC">30坪首付38萬起 含平面車位<br>3房2衛 採光邊間 訂製你的家</div>
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
  height:calc(100% - 4vw);
}

.o {
  @include img_l_pc(1920, 0, 0);
  height:100%;
}
.logo {
  @include img_l_pc(677, 209, 232);
  top:calc(50% - 16.2vw);
}

.st {
  @include img_l_pc(272, 347, 434);
  top:calc(50% - 9vw);
}

.t1 {
  @include img_l_pc(730, 383, 340);
  top:calc(50% - 1.6em);
  font-size:size(110);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing:0.02em;
  text-align: center;
  color: #0a5a91;
}

.t2 {
  @include img_l_pc(720, 768, 340);
  top:calc(50% + 1.2em);
  font-size: size(46);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.11;
  letter-spacing:-0.01em;
  text-align: center;
  color: #fe6b00;
}

.i {
  @include img_r_pc(465, 0, 0);
  top:calc(50% - 12vw);
  left:calc(50% + 7.5vw);
}

  .rb {
    @include img_l_pc(889, 410, 0);
    top:auto;
    bottom:4vw;
  }
.hint {
  @include div_r_pc(450, 27, 965, 46);
  top:calc(100% - 4vw);
  width: auto;
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
  @include img_c_pc(840, 210);
  top:calc(50% - 11vw);

}

.st2 {
  @include img_c_pc(610, 428);
  top:calc(50% - 2.83vw);
  font-size:size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: normal;
  text-align: center;
  color: #535353;
}

.t3 {
  @include img_c_pc(1054, 614);
  top:calc(50% + 1vw);
  font-size:size(73);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: -2.58px;
  text-align: center;
  color: #000000;
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
    min-height: sizem(667);
    max-height: sizem(812);
    height:calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .w-block {
    background-color: #fff;
    @include div_l_m(361, 607 - 63, 60, 0);
    height: calc(100% - 30vw);
  }

  .logo {
    @include img_l_m(223, 111, 80);
  top:calc(50% - 64vw);
  }

  .st {
    @include img_l_m(117, 157, 129);
  top:calc(50% - 56vw);
  }

  .t1 {
    @include img_l_m(375, 169, 0);
  top:calc(50% - 58vw);
  font-size:sizem(45);
  }

  .t2 {
    @include img_l_m(375, 296, 0);
  top:calc(50% - 29vw);
  font-size:sizem(17);
  }

  .i {
    @include img_r_m(238, 354, 68);
  top:calc(50% - 15vw);
  }

  .hint {
    @include div_r_m(300, 18, 667, 14);
    top: calc(100% - 12vw);
    width: 100%;
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
  top:calc(50% - 59vw);
  }

  .tm {
    @include img_l_m(253, 310, 56);
  top:calc(50% - 10vw);
  }

  .rb {
    @include img_l_m(292, 410, 0);
    top:auto;
    bottom:14vw;
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
			pageIndex: 1,
			interval: null,
    }
  },

  methods: {},

  mounted() {
		clearInterval(this.interval)
    this.interval = setInterval(() => {
      this.pageIndex = this.pageIndex === 1 ? 2 : 1
    }, 5000)
  },

  created() {},

  computed: {},
}
</script>
