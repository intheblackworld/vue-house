<template>
  <div class="section2">
    <div class="bg relative">
      <div v-if="!isMobile">
        <!--<img src="./s1/logo.png" alt="頤昌豐岳" class="img" data-aos="fade" data-aos-delay="700" /> -->
        <div
          class="slide relative"
          data-aos="fade"
          data-aos-delay="400"
        >
          <div class="slide-text">{{slideList[slideIndex].text}}</div>
          <img
            :src="slide.src"
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s2-1-slide-${index}`"
          />
          <div class="indigator-list flex-c">
            <div
              @click="setIndex(1, index)"
              :class="`indigator ${slideIndex === index ? 'active' : ''}`"
              v-for="(item, index) in slideList"
              :key="`indigator-1-${index}`"
            ></div>
          </div>
        </div>
      </div>
      <div v-if="isMobile">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;
  height: 100vh;
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
    height: 100vh;
  }
}
.text{background: url('./s2/title.png') no-repeat;position: absolute;text-align:left;
font-size:0.92vw;line-height: 1.6;top:calc(50% + 7vw); left: 33vw;padding: 2.7em 2em 0 3em;right: 0;background-size: 65em auto;

h3{color: #fff;font-size: 1.7em;padding: 0 0 0.8em 3em;}
p{color: rgba(255,255,255, 0.7);}
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 595 / 1920);
    right: calc(100vw * 202 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    height:calc(100vh - 63px);
  }
  .img {
  &:nth-child(1) {
    height:calc(100vh - 63px);
  }
  }
.text{background-image: url('./s2/mo/titleall.png');background-size: 100% auto;font-size:3.8vw;top:50%; left: 0;padding: 0 1em 0 1.7em;}
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section2',
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
