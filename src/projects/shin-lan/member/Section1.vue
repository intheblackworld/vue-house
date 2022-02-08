<template>
  <div class="section1">
    <img src="../shin-lan/accounts/topbg2.jpg" alt="" class="bg-img" v-if="isPC">
    <img src="../shin-lan/mo/accounts/topbg2.jpg" alt="" class="bg-img" v-else>
    <div class="shin-lan-title-v shin-lan-title-v-m title" data-aos="fade">
      會員<span data-aos="flip-right"></span>專區
    </div>
    <div class="desc">
      我們用心傾聽您的需求<br />
      我們相信用行動發揮真誠、體貼、專業的服務軟實力，<br />
      才能讓客戶真實感受到欣聯建設用心建造的好房子。
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section1 {
  width: 100%;
  height: size(400);
  // min-height: calc(900 * 100vw / 1920);
  // max-height: calc(1080 * 100vw / 1920);
  position: relative;
  margin: 0;
  // background: url('s1/bg.jpg') center;
  background-size: cover;
  overflow: hidden;
  text-align: center;

  // 手機版
  @include md {
    // height: 100vh;
    height: sizem(276);
    // min-height: calc(604 * 100vw / 375);
    max-height: calc(812 * 100vw / 375);
  }
}

.bg-img {
  width: 100%;
  height: size(400);
  position: absolute;
  top: size(60);
  left: 0;

  @include md {
    top: sizem(60);
    height: sizem(216);
  }
}

.logo {
  @include img_l_pc(563, 790, 341);
}

.title {
  @include img_l_pc(60, 152, 341);
  color: #000;

  @include md {
    @include img_l_m(40, 97, 56);
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

.desc {
  @include img_l_pc(485, 215, 528);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: left;
  color: #000;

  @include md {
    display: none;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section1',

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
