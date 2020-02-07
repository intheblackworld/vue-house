<template>
<!-- 有輪播 todo -->
  <div class="section4">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s4/bg.jpg" alt="灣區旁最耀眼的鑽石" class="img" data-aos="fade" data-aos-delay="400">
        <div class="text"><h3>雙大道雙商圈　縱橫天下通達八方　地產不敗黃金定律</h3><p>高雄中央核心，掌控亞洲新灣區門戶，正對高雄女中無垠開闊視野，繽紛多元的高感度時尚特區，四方環繞著名門豪宅、潮流時尚、藝術文創、傳統生機，雙大道、雙商圈，地王之王貴冑之地、富豪首選燙金地段、門牌即是您的身分表徵！</p>
</div>
</div>
      <div v-if="isMobile">
        <img src="./s4/mo/bg.jpg" alt="灣區旁最耀眼的鑽石" class="img" data-aos="fade" data-aos-delay="400">
        <div class="text"><h3>雙大道雙商圈　縱橫天下通達八方　地產不敗黃金定律</h3><p>高雄中央核心，掌控亞洲新灣區門戶，正對高雄女中無垠開闊視野，繽紛多元的高感度時尚特區，四方環繞著名門豪宅、潮流時尚、藝術文創、傳統生機，雙大道、雙商圈，地王之王貴冑之地、富豪首選燙金地段、門牌即是您的身分表徵！</p>
</div>
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
.text{background: url('./s2/title.png') no-repeat;position: absolute;text-align:left;background-size: 65em auto;
font-size:0.92vw;line-height: 1.6;top: 15vw;left: 9vw;padding: 2.7em 2em 0 3em;right: 0;

h3{color: #fff;font-size: 1.7em;padding: 0 0 0.8em 3em;}
p{color: rgba(255,255,255, 0.7);width: 46em;}
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
  .text{background-image: url('./s2/mo/titleall.png');background-size: 100% auto;font-size:3.8vw;top:10vw; left: 0;bottom: 0; padding: 0 1em 0 1.7em;
  
h3{font-size: 1.5em;padding: 0.3em 0 0.6em 3em;}
p{width: 23em;}
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
