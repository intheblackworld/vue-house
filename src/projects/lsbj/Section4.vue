<template>
<!-- 有輪播 todo -->
  <div class="section4">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s4/bg.jpg" alt="灣區旁最耀眼的鑽石" class="img" data-aos="fade" data-aos-delay="400">
        <!-- img src="./s4/text.png" alt="摩天水岸、遊船、碼頭、咖啡、藝術、夕陽…高雄港灣的海景交織愛河畔的美景，璀璨夜色浪漫摩登、大船入港浩瀚壯闊，每扇窗、每個面向都有不同的好風景，輕鬆享受超凡景觀的世界級度假人生。" class="img" data-aos="fade" data-aos-delay="600" -->
      </div>
      <div v-if="isMobile">
        <img src="./s4/mo/bg.jpg" alt="灣區旁最耀眼的鑽石" class="img" data-aos="fade" data-aos-delay="400">
        <img src="./s4/mo/t.png" alt="摩天水岸、遊船、碼頭、咖啡、藝術、夕陽…高雄港灣的海景交織愛河畔的美景，璀璨夜色浪漫摩登、大船入港浩瀚壯闊，每扇窗、每個面向都有不同的好風景，輕鬆享受超凡景觀的世界級度假人生。" class="img" data-aos="fade" data-aos-delay="600">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;
}

.img {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  &.fix {
    position: fixed;
  }
  &:nth-child(1) {
    position: relative;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 1050 / 1920);
    right: calc(100vw * 142 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
  }

  .slide {
    position: absolute;
    bottom: 0;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section4',
  mixins: [slider],
  data() {
    return {
      isMobile,
      // slideList: [
      //   {
      //     src: require('./s4/mo/img1.jpg'),
      //   },
      //   {
      //     src: require('./s4/mo/img2.jpg'),
      //   },
      //   {
      //     src: require('./s4/mo/img3.jpg'),
      //   },
      // ],
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
