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
        <svg
          version="1.1"
          id="bg_svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 1080"
          style="enable-background:new 0 0 1920 1080;"
          xml:space="preserve"
        >
          <g>
            <image overflow="visible" width="81" height="85" xlink:href="./s1/bee2.png">
              <animateMotion
                dur="12s"
                keyPoints="0;0.4;0.4;1"
                keyTimes="0;0.2;0.6;1"
                path="M2098.053,858.767c-452.632-355.191-724.994,286.97-1002.632-134.135 c-157.89-239.478-518.434,152.007-718.423,68.421c-176.308-73.688-123.677-468.425-502.631-400"
                repeatCount="indefinite"
                rotate="auto"
                calcMode="linear"
              /></image>
            <image overflow="visible" width="81" height="85" xlink:href="./s1/bee1.png">
              <animateMotion
                dur="12s"
                keyPoints="0;0.5;0.5;1"
                keyTimes="0;0.3;0.7;1"
                path="M-57.211,614.106c86.842-171.053,265.784-250.653,426.315-231.889 C777,429.896,903.316,82.527,1161.211,216.738c274.09,142.639,373.685-257.895,484.21-257.895"
                repeatCount="indefinite"
                rotate="auto"
                begin="-3s"
                calcMode="linear"
              /></image>
          </g>
        </svg>
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
        <svg
          version="1.1"
          id="bg_svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 750 1208"
          style="enable-background:new 0 0 750 1208;"
          xml:space="preserve"
        >
          <g>
            <image overflow="visible" width="81" height="85" xlink:href="./s1/bee2.png">
              <animateMotion
                dur="12s"
                keyPoints="0;0.4;0.4;1"
                keyTimes="0;0.2;0.6;1"
                path="M1440.045,1096.854c-409.627-404.032-752.763,203.265-981.072-246.498 C329.136,594.58-73.31,942.847-262.582,837.212c-166.859-93.127-69.989-479.395-454.247-454.201"
                repeatCount="indefinite"
                rotate="auto"
                calcMode="linear"
              /></image>
            <image overflow="visible" width="81" height="85" xlink:href="./s1/bee1.png">
              <animateMotion
                dur="12s"
                keyPoints="0;0.5;0.5;1"
                keyTimes="0;0.3;0.7;1"
                path="M-634.157,742.737c64.602-180.63,232.091-282.137,393.708-283.745 c410.652-4.085,492.204-364.598,764.951-263.944c289.875,106.975,338.221-302.914,447.865-316.837"
                repeatCount="indefinite"
                rotate="auto"
                begin="-3s"
                calcMode="linear"
              /></image>
          </g>
        </svg>
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
image {
  animation: img 0.3s infinite alternate;
}
@keyframes img {
  from {
    transform: rotate(-2deg);
  }
  to {
    transform: rotate(2deg);
  }
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
