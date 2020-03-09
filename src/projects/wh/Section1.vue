<template>
  <div class="section1">
    <div class="bg fullscreen" v-if="!isMobile">
      <!-- <img src="./s1/bg1.png" alt class="bg-img relative" data-aos="fade" data-aos-delay="600" /> -->
      <div class="nav">
        <div class="menu">
          <a href class="logo-link" v-scroll-to="{ element: `#section1` }">
            <img src="./menu/logo.png" alt />
          </a>
          <a href="https://www.dacin.com.tw/about/" class="logo-link" target="_blank">
            <img src="./menu/menu_02.png" alt />
          </a>
          <a href="http://unigiants.com.tw/" class="logo-link" target="_blank">
            <img src="./menu/menu_03.png" alt />
          </a>
        </div>
        <div class="menu">
          <div class="item" v-scroll-to="{ element: `#contact-info` }">
            <img src="./menu/menu_05.png" alt />
            <div>來電洽詢</div>
          </div>
          <div class="item" v-scroll-to="{ element: `#contact-info` }">
            <img src="./menu/menu_07.png" alt />
            <div>地圖導航</div>
          </div>
          <div class="item" v-scroll-to="{ element: `#contact` }">
            <img src="./menu/menu_09.png" alt />
            <div>立即預約</div>
          </div>
        </div>
      </div>
      <div class="left">
        <!-- img class="img" src="./s1/logo.png" alt /  data-aos="fade-up" data-aos-delay="400"-->
        <img src="./s1/logo.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s1/t1.png" alt class="img" data-aos="fade" data-aos-delay="600" />
        <img src="./s1/t2.png" alt class="img" data-aos="fade" data-aos-delay="800" />
        <img src="./s1/t3.png" alt class="img" data-aos="fade" data-aos-delay="1000" />
        <img src="./s1/button.png" alt class="btn" v-scroll-to="{ element: `#contact` }" data-aos="fade" data-aos-delay="1200" />
      </div>
      <div class="right">
        <img src="./s1/bg.png" alt class="img" />
        <img class="img" src="./s1/img.gif" alt />
        <img src="./s1/imgt.png" alt class="img" />
      </div>
    </div>
    <div class="bg fullscreen" v-else>
      <img class="img" src="./mo/1/bg.png" alt />
        <img src="./mo/1/buttonhover7.png" alt class="btn" v-scroll-to="{ element: `#contact` }" />
        <img src="./mo/1/logo.png" alt class="img" v-scroll-to="{ element: `#contact` }" />
        <img class="img" src="./mo/1/img.gif" alt />
        <img class="img" src="./mo/1/t1.png" alt />
        <img class="img" src="./mo/1/t2.png" alt />
        <img class="img" src="./mo/1/t3.png" alt />
        <img class="img" src="./mo/1/t4.png" alt />
    </div>
  </div>
</template>
<style lang="scss">
.st0 {
  fill: #000;
}
.st1 {
  fill: #a9804a;
}
.st2 {
  fill: none;
  stroke: #a9804a;
  stroke-width: 2;
  stroke-miterlimit: 10;
}
.st3 {
  fill: none;
  stroke: #a9804a;
  stroke-width: 4;
  stroke-miterlimit: 10;
}
#a1 {
  transform-origin: center center;
  transform: scale(1.5);
  opacity: 0;
  animation: ss 0.5s 2s forwards;
}
#b1 {
  transform-origin: center center;
  transform: scale(1.5);
  opacity: 0;
  animation: ss 0.5s 2.2s forwards;
}
#c1 {
  transform-origin: center center;
  transform: scale(1.5);
  opacity: 0;
  animation: ss 0.5s 2.3s linear forwards;
}
#w1 {
  transform-origin: center center;
  transform: scale(0, 1);
  opacity: 0;
  animation: ss 0.3s 2.6s linear forwards;
}
#icon {
  transform-origin: center center;
  transform: scale(1.5);
  opacity: 0;
  animation: ss 0.3s 2.9s linear forwards;
}
#bottom2 {
  transform-origin: center center;
  transform: scale(1.5);
  opacity: 0;
  animation: ss 0.3s 2.9s linear forwards;
}
#bottom1 {
  transform-origin: center center;
  transform: scale(1.5);
  opacity: 0;
  animation: ss 0.3s 3s linear forwards;
}
@keyframes ss {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@media screen and (max-width: 767px) {
  .st2 {
    stroke-width: 8;
  }
  .st3 {
    stroke-width: 16;
  }
}
</style>
<style lang="scss" scoped>
svg {
  width: 80%;
  height: 60%;
  position: relative;
  top: -5%;
}
.bg {
  background-size: cover;
  background-position: center;
  position: relative;
  height: 100vh;
  display: flex;
  overflow: hidden;
  min-height: 700px !important;
  width: 90%;
  margin: 0 auto;
  background-color: #fffffb;
}
// .bg-img {
//   width: 100vw;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   left: 0;
//   height: auto;
//   display: block;
//   object-fit: cover;
// }

.nav {
  position: fixed;
  width: 100vw;
  height:calc(100vw * 1 / 20);;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 5vw;
  z-index: 5;

  .logo-link {
    height: 100%;
    margin-right: 15px;
    img{height: 100%;width:auto;}
  }
}

.menu {
  display: flex;
  justify-content: flex-end;

  .item {
    width: calc(100vw * 245 / 1920);
    height: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(100vw * 29 / 1920);
    font-weight: bold;
    letter-spacing: 3px;
    text-align: left;
    color: #fffffb;
    transition: all 0.3s;
    cursor: pointer;

    > div {
      font-family: 'Noto Serif TC', serif;
    }

    img {
      height: calc(100vw * 64 / 1920);
    }
    &:hover {
      // background-color: #8e6129;
    }
  }
}
.left {
  width: 59%;
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .img {
    display: block;
    width: 100%;
    position: absolute;
    object-fit: contain;
    top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .btn {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: calc(50% + 15vw);
    width: calc(100vw * 399 / 1920);
    cursor: pointer;
    opacity: 0.7;
    &:hover {
      animation: btn_op 0.3s linear alternate infinite;
    }
  }
}
@keyframes btn_op {
  to {
    opacity: 1;
    transform: scale(1.1);
  }
}

.right {
  width: 41%;
  height: 100%;
  position: relative;

  .img {
    display: block;
    width: 100%;
    position: absolute;
    object-fit: contain;
    top: 0;

    &:nth-child(1) {
      position: relative;
    object-fit: cover;
    }
  }
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh !important;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    min-height: auto !important;
    width: 100vw;
  }
  .img {
    width: 100vw;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
  }
  .btn {
    bottom: 28%;
    width: calc(100vw * 43 / 375);
    position: absolute;
    left: calc(100vw * 33 / 375);;
    opacity: .7;
    animation: btn_op 0.6s linear alternate infinite;
    &:hover {
      opacity: 1;
      animation-play-state: paused;
    }
  }
  .logo-group {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
      width: 90%;
    }
  }
  .left {
    width: 68%;
  }

  .right {
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
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

  mounted() {},

  computed: {},
}
</script>
