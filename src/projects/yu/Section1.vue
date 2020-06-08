<template>
  <div class="relative">
    <div v-if="!isMobile">
      <div class="c-content">
      <img
        src="./s1/logo.png"
        alt=""
        class="img"
      >
      <img
        src="./s1/tl.png"
        alt=""
        class="logo"
      >
      <img
        src="./s1/tl2.png"
        alt=""
        class="desc"
      >

      <div
        class="btn absolute flex-c"
        v-scroll-to="{ element: `#contact` }"
      >預約最錢線</div>
      <div class="line-in"></div>
      <div class="line-top"></div>
      <div class="line-bottom"></div>
      <div class="line-left"></div>
      <div class="line-right"></div>
      </div>
    </div>
    <div v-else>
      <div class="c-content">
      <img
        src="./s1/logo_m.png"
        alt=""
        class="img"
      >
      <img
        src="./s1/tl.png"
        alt=""
        class="logo"
      >
      <img
        src="./s1/tl2_m.png"
        alt=""
        class="desc"
      >
      <div
        class="btn absolute flex-c"
        v-scroll-to="{ element: `#contact` }"
      >預約最錢線</div>
      <div class="line-top"></div>
      <div class="line-top line-top2"></div>
      <div class="line-left"></div>
      <div class="line-right"></div>
      <div class="line-bottom"></div>
    </div>
    </div>
    <!--
      <img src="./s1/視野大寬闊.png" alt="" class="absolute left4" data-aos="zoom-in-up" data-aos-delay="1000">
      <img src="./s1/交通大方便.png" alt="" class="absolute left5" data-aos="zoom-in-up" data-aos-delay="1100">
      -->
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  height:calc(100vh - 6vw);
  overflow: hidden;
  margin: 0 0 -6vw 0;
}
.img {
  width: size(1690);
  position: absolute;
  display: block;
  top: 0;
  left:0;
  object-fit: contain;
  height:100%;
      opacity: 1;
  animation: anop 0.5s 4s reverse both;
}

.logo {
  width: size(130);
  left:0;
  top: 0;
  position: absolute;
  animation: anop 0.5s 2.5s reverse both;
}

.desc {
  width: size(400);
  left: size(130);
  top:0;
  position: absolute;
  animation: anop 0.5s 4s reverse both;
}
.c-content {
  background-color: #fff;
  width: size(1690);
  height:calc(100vh - 12vw);
  left: size(115);
  top: size(115);
  position: absolute;
  animation: anba 1s 3s reverse both;
}

.line-in {
  position: absolute;
  background-color: #bf1b12;
  left: size(130);
  width: 1px;
  height: 100%;
  top: 0;
  animation: anY .8s 2.3s reverse both;
}

.line-top {
  position: absolute;
  background-color: #bf1b12;
  width: 100vw;
  height: 1px;
  top: 0;
  left:calc(50% - 50vw);
  animation: anX 1s 2s reverse both;
}

.line-bottom {
  position: absolute;
  background-color: #bf1b12;
  width: 100vw;
  height: 1px;
  left:calc(50% - 50vw);
  bottom: 0;
  animation: anX 1s 2s reverse both;
}

.line-left {
  position: absolute;
  background-color: #bf1b12;
  left: 0;
  width: 1px;
  height: 100vh;
  top: size(-115);
  animation: anY 1s 2s reverse both;
}

.line-right {
  position: absolute;
  background-color: #bf1b12;
  right:0;
  top: size(-115);
  width: 1px;
  height: 100vh;
  animation: anY 1s 2s reverse both;
}

.btn {
  width: size(337);
  height: size(78);
  cursor: pointer;
  top: auto;
  bottom: calc(50% - 12vw);
  left: size(515);
  background: url('./button.png') bottom right;
  background-size: auto;
  font-size: size(25);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: 20px;
  padding-left: 20px;
  text-align: center;
  color: #ffffff;
  animation: anop 0.5s 4s reverse both;
}
@keyframes anY {
    to {
  height: 0;
    }
}
@keyframes anX  {
    to {
      width: 0;
    }
}
@keyframes anop  {
    to {
      opacity: 0;
    }
}
@keyframes anba  {
    to {
     background-color: #fff0;
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
  .relative {
    height:calc(100vh - 63px - 5.9895833333vw);
    margin: 0px 0 -6vw 0;
  }
.c-content{
      height:calc(100% - 6vw);
}
  .img {
    width: 100%;
    height:100%;
    top: 0;
    left:0;
    bottom: auto;
  }

  .line-left {
    top:size-m(-22);
    height:100vh;
    left:0;
  }

  .line-right {
    top:size-m(-22);
    height:100vh;
    right:0;
  }

  .line-top {
    width: size-m(375 - 22);
    top:0;
    left: 0;
  }

  .line-top2 {
    width: size-m(75);
    left: size-m(-22);
    top: size-m(53);
  }

  .line-bottom {
    width: 100vw;
    bottom: 0;
  left:calc(50% - 50vw);
  }

  .logo {
    width: size-m(53);
    top:0;
    left:0;
  }

  .desc {
    width: size-m(98);
    left: size-m(53);
    top: 0;
  }

  .btn {
    width: size-m(146);
    height: size-m(33);
    cursor: pointer;
    bottom:calc(50% - 57vw);
    left: size-m(49);
    background-image: url('./button.png');
    //background-size: contain;

    font-size: size-m(10.8);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 8.64px;
    padding-left: 8.64px;
    text-align: center;
    color: #ffffff;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',

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
