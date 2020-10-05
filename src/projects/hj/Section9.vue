<template>
  <div class="full-bg">
    <div v-if="!isMobile">
      <div
        class="full-img"
        v-lazy:background-image="require('./s9/bg1.png')"
      ></div>
      <div
        class="full-img"
        v-lazy:background-image="require('./s9/bg2.png')"
        data-aos="fade-right"
        data-aos-delay="300"
      ></div>
      <div
        class="full-img"
        v-lazy:background-image="require('./s9/bg3.png')"
      ></div>
      <div class="content">
        <div class="title">
          五個絕美承諾<br />
          許你美好生活
        </div>
        <div class="desc">
          好站經過細膩構思、誠意規劃，打造出全新築夢居所，隆重呈獻。力求將實踐幸福的幸福宅，獻給最親愛的你。
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="full-img"
        v-lazy:background-image="require('./s1/mo/bg1.png')"
      ></div>
      <div
        class="full-img"
        v-lazy:background-image="require('./s1/mo/bg2.png')"
        data-aos="fade-right"
        data-aos-delay="300"
      ></div>
      <div
        class="full-img"
        v-lazy:background-image="require('./s1/mo/bg3.png')"
      ></div>
      <div class="content">
        <div class="title">
          五個絕美承諾<br />
          許你美好生活
        </div>
        <div class="desc">
          好站經過細膩構思、誠意規劃，打造出全新築夢居所，隆重呈獻。
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.content {
  width: size(690);
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 50%;
  transform: translate(70%, -60%);
}

.title {
  width: 100%;
  font-size: size(107);
  font-weight:700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing:0.1em;
  text-align: left;
  color: #112d81;
  margin-bottom:0.56em;
  white-space: nowrap;
}

.desc {
  font-size: size(20);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: 0.1em;
  text-align:justify;
  color: #ffffff;
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
  .content {
    width: size-m(240);
    transform: translate(0, -65%);
  }

  .title {
    text-align: center;
    font-size: size-m(25);
    letter-spacing:0.4em;
  }

  .desc {
    font-size: size-m(12);
    text-align: center;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section9',
  data() {
    return {
      isMobile,
    }
  },

  methods: {
  },

  mounted() {},

  computed: {},
}
</script>
