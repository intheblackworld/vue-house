<template>
  <div class="section1">
    <div class="bg">
      <!-- <img src="./s1/logo.png" alt="" class="logo absolute"> -->
      <img src="./s1/slogo1.png" alt="" class="slogo1 absolute">
      <img src="./s1/slogo2.png" alt="" class="slogo2 absolute">
      <img src="./s1/t1.png" alt="" class="t1 absolute">
      <img src="./s1/t2.png" alt="" class="t2 absolute" v-if="!isMobile">
      <img src="./s1/t2_m.png" alt="" class="t2 absolute" v-if="isMobile">
      <div class="btn flex-c absolute" v-scroll-to="{ element: `#contact`, offset: -100 }">立即預約</div>
    </div>
    <!-- <div class="bg" v-if="isMobile">
      <div class="vh1">
        <img src="./mo/1/txt.png" alt="有我們在幸福的未來就在現在" class="txt_mo">
      </div>
      <div class="vh2">
        <img src="./mo/1/1.jpg" alt="img1" class="img1_mo">
        <img src="./mo/1/2.jpg" alt="img2" class="img2_mo">
      </div>
    </div> -->
  </div>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  // background-color: #fddb3e;
  // background-image: url('./s1/kv_city_bg.jpg');
  background-position: bottom;
  background-repeat: no-repeat;
  overflow: hidden;
  height: 100vh;
  min-height: size(1080);
  // pointer-events: none;
}

.t1 {
  width: size(581);
  top: size(377);
  left: 0;
  right: 0;
  margin: 0 auto;
}

.t2 {
  width: size(901);
  top: size(502);
  left: 0;
  right: 0;
  margin: 0 auto;
}

.slogo1 {
  width: size(150);
  top: size(997);
  left: size(801);
}

.slogo2 {
  width: size(125);
  top: size(997);
  left: size(992);
}

.btn {
  width: size(210);
  height: size(72);
  top: size(738);
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 35px / 35px;
  font-size: size(33);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: size(3.3);
  text-align: center;
  color: #ff5f00;
  border: solid 3.8px #f80233;
  background: rgba(248, 2, 51, 0);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(248, 2, 51, 1);
    color: #fff;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    position: relative;
    margin: 0;
    min-height: size-m(667);
  }
  .t1 {
    width: size-m(203);
    top: size-m(107);
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .t2 {
    width: size-m(250);
    top: size-m(153);
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .slogo1 {
    width: size-m(68);
    top: size-m(348);
    left: size-m(116);
  }

  .slogo2 {
    width: size-m(57);
    top: size-m(348);
    left: size-m(203);
  }

  .btn {
    display: none;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
// import Parallax from '@/components/Parallax.vue'

export default {
  name: 'section1',

  components: {
    // Parallax,
  },
  data() {
    return {
      isMobile,
    }
  },
  computed: {},

  watch: {},

  methods: {},
  created() {},
}
</script>
