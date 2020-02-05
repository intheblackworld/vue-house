<template>
  <div class="section3">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s3/bg.jpg" alt="灣區旁最耀眼的鑽石" class="img" data-aos="fade" data-aos-delay="400">
        <img src="./s3/text.png" alt="摩天水岸、遊船、碼頭、咖啡、藝術、夕陽…高雄港灣的海景交織愛河畔的美景，璀璨夜色浪漫摩登、大船入港浩瀚壯闊，每扇窗、每個面向都有不同的好風景，輕鬆享受超凡景觀的世界級度假人生。" class="img" data-aos="fade" data-aos-delay="600">
      </div>
      <div v-if="isMobile">
        <img src="./s3/mo/bg.jpg" alt="灣區旁最耀眼的鑽石" class="img" data-aos="fade" data-aos-delay="400">
        <img src="./s3/mo/t.png" alt="摩天水岸、遊船、碼頭、咖啡、藝術、夕陽…高雄港灣的海景交織愛河畔的美景，璀璨夜色浪漫摩登、大船入港浩瀚壯闊，每扇窗、每個面向都有不同的好風景，輕鬆享受超凡景觀的世界級度假人生。" class="img" data-aos="fade" data-aos-delay="600">
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
    width: calc(100vw * 950 / 1920);
    right: calc(100vw * 232 / 1920);
  }
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
export default {
  name: 'section3',

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
