<template>
  <div class="relative">
    <img
      v-if="!isMobile"
      v-lazy="require('./s6/bg.jpg')"
      alt="聯上海棠"
      class="bg-img"
    >
    <img
      v-if="isMobile"
      v-lazy="require('./mo/6/bgimg.jpg')"
      alt="聯上海棠"
      class="bg-img"
    >
    <img
      v-if="isMobile"
      v-lazy="require('./mo/6/bg.png')"
      alt="聯上海棠"
      class="bg-img"
      style="margin-top: -30px;"
    >
    <h3 class="title absolute" data-aos="fade" data-aos-delay="400">
      海灣新地標 宛若海棠盛開之姿
    </h3>
    <h3 class="desc absolute" data-aos="fade" data-aos-delay="700">
      流線造型的量體搭配局部材質轉換與立面陰影律動線條，呈現多面性的建築表情，<br />
      面向海景宛如海棠花盛開，初如胭脂點點燃，開則漸成纈暈，堪當國艷之名。
    </h3>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  position: relative;
  height: size(924);
  margin: 7vh 0 0 0;
}

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.title {
  font-size: size(41);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: 0.82px;
  text-align: left;
  color: #595757;
  left: size(419);
  top: size(257);
  transform: scaleX(0.93);
}

.desc {
  font-size: size(12);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.1;
  letter-spacing: 0.6px;
  text-align: left;
  color: #595757;
  transform: scaleX(0.93);
  left: size(425);
  top: size(327);
}
.animate-row {
  width: 200vw;
  animation: moving 30s linear infinite;
  position: absolute;
  bottom: size(-200);

  img {
    width: 100%;
    height: size(379);
  }

  &.animate-row2 {
    bottom: size(100);
    animation: moving 20s linear infinite;

    img {
      height: size(79);
    }
    // animation-delay: 5s;
  }

  &.no-animation {
    animation: none;
    bottom: 0;
    img {
      height: size(164);
    }
  }
}

@keyframes moving {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0) scaleY(1);
  }
  50% {
    -webkit-transform: translateX(0);
    transform: translateX(-25%) scaleY(0.5);
  }

  to {
    -webkit-transform: translateX(-100vw);
    transform: translateX(-50%) scaleY(1);
  }
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    // height: 100vh;
    overflow: visible;
    position: relative;
    height:calc(100vh - 63px);
  }


.bg-img {
  &:first-child{height: 100%;}
}
  .img {
    width: size-m(229);
    left: auto;
    right: size-m(5);
    top: size-m(7.5);
  }

  .title {
    font-size: size-m(24);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: size-m(60);
    color: #fff;
    text-align: center;
  }

  .desc {
    font-size: size-m(12);
    width: size-m(333);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.08;
    letter-spacing: 0.6px;
    text-align: left;
    color: #ffffff;
    right: 0;
    left: 0;
    margin: 0 auto;
    top: size-m(110);
  }

  .animate-row {
    bottom: size-m(-130);


    img {
      height: size-m(200);
    }

    &.animate-row2 {
      bottom: size-m(0);

      img {
        height: size-m(40);
      }
      // animation-delay: 5s;
    }

    &.no-animation {
      img {
        height: size-m(80);
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section6',

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
