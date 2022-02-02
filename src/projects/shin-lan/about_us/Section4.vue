<template>
  <div class="section4">
    <img src="../shin-lan/abont/2/img8.jpg" alt="" class="img" v-if="isPC">
    <img src="../shin-lan/mo/abont/2/img8.jpg" alt="" class="img" v-else>
    <div class="shin-lan-title-h title" data-aos="fade">
      合聯<span data-aos="flip-right gold"></span>營造
    </div>
    <div class="desc" v-if="isPC">
      「合聯營造」成立至今已三十個年頭，營造無數棟建築<br />
      我們不只忠實盡責地雕琢出原本的設計理念更精心規劃每一項工程，注重施工中每一個環節，堅持所有建案均能有效的控制<br />
      品質、進度、成本、達到既定的目標並於1998年積極導入ISO9002國際品質認證系統，與同步創新技術如期如質地將產品<br />
      交付至客戶手中，開創出「合聯營造」的品牌價值。
    </div>
    <div class="desc" v-else>
      「合聯營造」成立至今已三十個年頭，營造無數棟建築
      我們不只忠實盡責地雕琢出原本的設計理念更精心規劃每一項工程，注重施工中每一個環節，堅持所有建案均能有效的控制
      品質、進度、成本、達到既定的目標並於1998年積極導入ISO9002國際品質認證系統，與同步創新技術如期如質地將產品
      交付至客戶手中，開創出「合聯營造」的品牌價值。
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section4 {
  width: 100%;
  height: size(790);
  position: relative;
  margin: 0;
  // background: url('s1/bg.jpg') center;
  background-size: cover;
  overflow: hidden;
  text-align: center;
  background-image: url('../shin-lan/abont/2/bg.png');

  // 手機版
  @include md {
    // height: 100vh;
    height: size(604);
    min-height: calc(604 * 100vw / 375);
    max-height: calc(812 * 100vw / 375);
  }
}

.desc {
  @include img_c_pc(1234, 605);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: center;
  color: #000;

  @include md {
    @include img_c_m(310, 280);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    color: #000;
  }
}

.img {
  @include img_c_pc(1234, 84);

  @include md {
    @include img_c_m(375, 0);
  }
}

.title {
  @include img_c_pc(240, 518);
  position: relative;
  margin-bottom: size(50);

  @include md {
    @include img_c_m(126, 230);
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
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section4',

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
