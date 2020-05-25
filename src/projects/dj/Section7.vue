<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        v-lazy="require('./s7/3.png')"
        alt=""
        class="bg-img"
      >
      <img
        v-lazy="require('./s7/1.png')"
        alt=""
        class="bg-img cloud"
      >
      <img
        v-lazy="require('./s7/2.png')"
        alt=""
        class="bg-img cloud cloud1"
      >
      <div
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        BUILDING DISTANCE
      </div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        - 永久棟距 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="700"
        data-aos-offset="0"
      >

        基地臨20米大興路＋埔心溪<br />
        坐擁超廣角綠意
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="900"
        data-aos-offset="0"
      >
        「豐郡大景」基地三面臨路，坐擁大興路＋埔心溪永久棟距，<br />
        景觀視野寬闊，區域內總計有14座公園，繁華與自然，同時兼得。
      </div>
    </div>
    <div
      v-else
      class="relative"
    >
      <img
        v-lazy="require('./mo/7/3.png')"
        alt=""
        class="bg-img"
      >
      <img
        v-lazy="require('./mo/7/1.png')"
        alt=""
        class="bg-img cloud"
      >
      <img
        v-lazy="require('./mo/7/2.png')"
        alt=""
        class="bg-img cloud cloud1"
      >
      <div
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        BUILDING DISTANCE
      </div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        - 永久棟距 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="700"
      >

        基地臨20米大興路＋埔心溪<br />
        坐擁超廣角綠意
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        「豐郡大景」基地三面臨路，坐擁大興路＋埔心溪永久棟距，<br />
        景觀視野寬闊，區域內總計有14座公園，繁華與自然，同時兼得。
      </div>
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
  color: #808080;
  top: size(72);
  left: size(248);

  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;

  &::before {
    content: '';
    display: block;
    width: size(248);
    left: size(-268);
    position: absolute;
    height: 3px;
    margin-top: -5px;
    background-color: #312219;
  }

  &::after {
    content: '';
    display: block;
    width: 2000px;
    height: 3px;
    margin-left: size(20);
    margin-top: -15px;
    background-color: #312219;
  }
}

.desc {
  font-size: size(44);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: 1.76px;
  text-align: left;
  color: #231815;
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
  color: #231815;
  top: size(367);
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
  color: #231815;
  top: size(482);
  left: size(254);
}

.cloud {
  animation: clouda 2.5s ease-in-out infinite;
}

.cloud1 {
  animation: clouda 2.5s 1s ease-in-out infinite;
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
  .bg-img {
    height: auto;
    object-fit: cover;
  }

  .title {
    font-size: size-m(26);
    top: size-m(36);
    left: size-m(30);

    &::before {
      content: '';
      display: block;
      width: size-m(51);
      left: size-m(-61);
      position: absolute;
      height: 2px;
      background-color: #312219;
    }

    &::after {
      content: '';
      display: block;
      width: 2000px;
      height: 2px;
      margin-left: size-m(20);
      background-color: #312219;
    }
  }

  .desc {
    font-size: size-m(17);
    top: size-m(69);
    left: size-m(30);
  }

  .img-title {
    width: size-m(236);
    font-size: size-m(18);
    top: size-m(125);
    left: size-m(30);
  }

  .img-desc {
    width: size-m(236);
    font-size: size-m(13);
    top: size-m(190);
    left: size-m(30);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section7',

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
