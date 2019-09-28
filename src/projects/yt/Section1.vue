<template>
  <div class="section1">
    <div class="bg fullscreen">
      <div v-if="!isMobile">
        <!-- <div
          id="animation_container"
          style="background-color:rgba(255, 255, 255, 1.00); width:1920px; height:1080px"
        >
          <canvas
            id="canvas"
            width="1920"
            height="1080"
            style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"
          ></canvas>
          <div
            id="dom_overlay_container"
            style="pointer-events:none; overflow:hidden; width:1920px; height:1080px; position: absolute; left: 0px; top: 0px; display: block;"
          ></div>
        </div>-->
        <img
          src="./s1/1.png"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade-down"
          data-aos-delay="1200"
        />
        <img
          src="./s1/2.png"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade"
          data-aos-delay="400"
        />
        <img
          src="./s1/3.png"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade"
          data-aos-delay="600"
        />
        <img
          src="./s1/4.png"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade"
          data-aos-delay="800"
        />
        <img
          src="./s1/5.png"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade"
          data-aos-delay="1000"
        />
      </div>
      <div v-else>
        <img
          src="./s1/mo/1.png"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade"
          data-aos-delay="200"
        />
        <img
          src="./s1/mo/2.png"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade"
          data-aos-delay="400"
        />
        <img
          src="./s1/mo/3.png"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade"
          data-aos-delay="600"
        />
        <img
          src="./s1/mo/4.png"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade"
          data-aos-delay="800"
        />
        <img
          src="./s1/mo/5.png"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade-down"
          data-aos-delay="1000"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url('./s1/bg.jpg');
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
}

.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
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
  .bg {
  }

  .fullscreen {
    height: auto !important;
  }

  .bg-img {
    top: auto;
    bottom: 0;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background: url('./s1/mo/bg.jpg');
    background-size: 100%;
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
}
</script>
