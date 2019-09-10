<template>
  <div class="section1">
    <div class="bg fullscreen relative" v-if="isMobile">
      <img class="center" src="./s1_center_m.png" alt />
      <img class="img" src="./s1_img_1_m.png" alt />
      <img class="img" src="./s1_img_2_m.png" alt />
      <img class="img" src="./s1_img_3_m.png" alt />
      <img class="img" src="./s1_img_4_m.png" alt />
      <img class="img" src="./s1_img_5_m.png" alt />
      <img class="img" src="./s1_img_6_m.png" alt />
      <img class="img" src="./s1_img_7_m.png" alt />
      <img class="img" src="./s1_img_8_m.png" alt />
      <img class="img" src="./s1_img_9_m.png" alt />
    </div>
    <div class="bg fullscreen relative" v-else>
      <img class="center" src="./s1_center.png" alt />
      <img class="img" src="./s1_img_1.png" alt />
      <img class="img" src="./s1_img_2.png" alt />
      <img class="img" src="./s1_img_3.png" alt />
      <img class="img" src="./s1_img_4.png" alt />
      <img class="img" src="./s1_img_5.png" alt />
      <img class="img" src="./s1_img_6.png" alt />
      <img class="img" src="./s1_img_7.png" alt />
      <img class="img" src="./s1_img_9.png" alt />
      <img class="img" src="./s1_img_10.png" alt />
      <img class="img" src="./s1_img_11.png" alt />
      <img class="img" src="./s1_img_12.png" alt />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #FFC20F;
  background-size: cover;
  position: relative;
}

.img {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
}

.center {
  position: relative;
  height: 100%;
  width: 100%;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
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
  name: 'section1',

  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},
}
</script>
