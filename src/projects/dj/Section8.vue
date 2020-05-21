<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s8/bg.jpg"
        alt=""
        class="bg-img"
      >
      <div
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Sea of trees
      </div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        - 無敵綠海 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="700"
      >
        開窗即享 無價壯闊視野<br />舒心美景近在眼前
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        家，不僅是讓身體居住的容器<br />
        還必須能讓人的內心安穩、豐富…在「豐郡大景」<br />
        窗外是極目遠眺的自然之美，窗內則是各自精彩的生活之美！
      </div>
    </div>
    <div
      v-else
      class="fullscreen"
    >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
}
.bg-img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.title {
  font-family: TrajanPro;
  font-size: size(60);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: -2.37px;
  text-align: left;
  color: #fff;
  top: size(72);
  left: size(248);
}

.desc {
  font-size: size(44);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: 1.76px;
  text-align: left;
  color: #fff;
  top: size(145);
  left: size(251);
}

.img-title {
  font-size: size(35);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  top: size(280);
  left: size(254);
}

.img-desc {
  font-size: size(20);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: 1.2px;
  text-align: left;
  color: #fff;
  top: size(291);
  left: size(689);
  border-left: 6px solid #fff;
  border-right: 6px solid #fff;
  padding: 0 size(38);
}

@keyframes clouda {
  0% {
    left: 0px;
  }

  50% {
    left: 15px;
  }

  100% {
    left: 0px;
  }
}
@media only screen and (max-width: 1440px) {
  .bg-img {
  }
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
  .logo {
    width: 80%;
    top: auto;
    left: 0;
    bottom: 0;
    right: auto;
    margin: 0 auto;
    position: absolute;
    z-index: 1;
    height: auto;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section8',

  components: {},
  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
