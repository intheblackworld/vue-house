<template>
  <div class="section2">
    <img src="@/assets/img/shin-lan/all/logo.png" alt="" class="logo">
    <div class="desc" v-if="isPC">
      欣聯建設係由一群志同道合的建築工程師及專業經理人所組成，<br />
      本公司自1989年投入營建市場以來在董事長與全體同仁本著「終身學習」的態度，秉持凡事將心比心、以客為尊及<br />
      「一間厝，一世情」之經營哲學；以居住者之需求與思維去打造每一位客戶對於家的要求及期待，<br />
      以期能達到所有購屋者的認同與滿意。
    </div>
    <div class="desc" v-else>
      欣聯建設係由一群志同道合的建築工程師及專業經理人所組成，
      本公司自1989年投入營建市場以來在董事長與全體同仁本著「終身學習」的態度，秉持凡事將心比心、以客為尊及
      「一間厝，一世情」之經營哲學；以居住者之需求與思維去打造每一位客戶對於家的要求及期待，
      以期能達到所有購屋者的認同與滿意。
    </div>
    <img src="../shin-lan/abont/2/img1.jpg" alt="" class="img" v-if="isPC">
    <img src="../shin-lan/mo/abont/2/img1.jpg" alt="" class="img" v-else>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section2 {
  width: 100%;
  height: size(715);
  position: relative;
  margin: 0;
  // background: url('s1/bg.jpg') center;
  background-size: cover;
  overflow: hidden;
  text-align: center;
  background-color: rgba(17, 17, 3, 0.11);

  // 手機版
  @include md {
    // height: 100vh;
    height: sizem(624);
    // min-height: calc(604 * 100vw / 375);
    // max-height: calc(812 * 100vw / 375);
  }
}

.logo {
  @include img_c_pc(564, 73);

  @include md {
    @include img_c_m(310, 120);
  }
}

.desc {
  @include img_c_pc(1234, 170);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: center;
  color: #000;

  @include md {
    @include img_c_m(310, 180);
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

.img {
  @include img_c_pc(1234, 321);
  @include md {
    width: 100vw;
    top: sizem(420);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section2',

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
