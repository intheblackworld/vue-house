<template>
<!-- 區塊3, 4, 5 合併 -->
  <div class="section3">
    <div class="bg relative">
      <div v-if="!isMobile">
        <div id="section3" class="relative">
          <parallax breakpoint="(min-width: 68px)" :speed-factor="0.1" direction="up">
            <img src="./s3/bg1.png" alt="" class="img-bg">
          </parallax>
          <img src="./s3/bg2.png" alt="" class="img-bg">
        </div>
        <div id="section4" class="relative">
          <parallax breakpoint="(min-width: 68px)" :speed-factor="0.1" direction="up">
            <img src="./s3/bg1.png" alt="" class="img-bg">
          </parallax>
          <img src="./s3/bg2.png" alt="" class="img-bg">
        </div>
        <div id="section5" class="relative">
          <parallax breakpoint="(min-width: 68px)" :speed-factor="0.1" direction="up">
            <img src="./s3/bg1.png" alt="" class="img-bg">
          </parallax>
          <img src="./s3/bg2.png" alt="" class="img-bg">
        </div>
      </div>
      <div v-if="isMobile">

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: visible;
  background-image: url('./s3/bg.jpg');
  background-attachment: fixed;
}

.img-bg {
  width: 100vw !important;
  margin: 0 auto;
  height: auto !important;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  
  &:nth-child(1) {
    position: relative;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
  }

}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import Parallax from '@/components/Parallax.vue'
export default {
  name: 'section3',
  components: {
    Parallax,
  },
  mixins: [slider],
  data() {
    return {
      isMobile,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
