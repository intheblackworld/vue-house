<template>
  <div class="section1">
    <div class="bg fullscreen" v-if="!isMobile">
      <!-- <img src="./s1/bg1.png" alt class="bg-img relative" data-aos="fade" data-aos-delay="600" /> -->
      <div class="nav">
        <a href class="logo-link" target="_blank">
          <img src="./s1/1.png" alt />
        </a>
        <a href class="logo-link" target="_blank">
          <img src="./s1/2.png" alt />
        </a>
        <!-- <div class="menu">
          <div class="item" v-scroll-to="{ element: `#contact-info` }">
            <img src="./menu/1.png" alt />
            <div>來電洽詢</div>
          </div> -->
          <!-- <div class="item">
            <img src="./menu/2.png" alt />
            <div>地圖導航</div>
          </div> -->
          <!-- <div class="item" v-scroll-to="{ element: `#contact` }">
            <img src="./menu/3.png" alt />
            <div>立即預約</div>
          </div>
        </div> -->
      </div>
      <!-- 圖淡入
          立刻預約的按鈕點了連預約賞屋
          他的區塊 左邊59% 右邊41%
          除了淡入外有點難幫他做動畫
          看有沒有什麼比較簡單的特效
      可以加上去-->
      <div class="left" data-aos="fade-up" data-aos-delay="400">
        <img class="img" src="./s1/logo.png" alt />
        <a href="/event"><img src="./s1/button.png" alt class="btn" /></a>
      </div>
      <div class="right" >
        <img class="img" src="./s1/img1.jpg" alt data-aos="fade" data-aos-delay="600" />
      </div>
    </div>
    <div class="bg fullscreen" v-else>
      <div class="left">
        <img class="img" src="./s1/logo_m.png" alt />
        <a href="/event"><img src="./s1/button.png" alt class="btn" /></a>
        <div class="logo-group">
          <a href class="logo-link" target="_blank">
            <img src="./s1/1.png" alt />
          </a>
          <a href class="logo-link" target="_blank">
            <img src="./s1/2.png" alt />
          </a>
        </div>
      </div>
      <div class="right">
        <img class="img" src="./s1/img1_m.png" alt />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  background-position: center;
  position: relative;
  height: 100vh;
  display: flex;
  overflow: hidden;
  min-height: 700px !important;
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
  position: absolute;
  width: 100vw;
  left: 0;
  padding-left: 46px;
  top: 0;
  display: flex;
  z-index: 5;

  .logo-link {
    margin-top: calc(100vw * 40 / 1920);
    margin-right: 15px;
  }
}

.menu {
  width: calc(100vw * 980 / 1920);
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;

  .item {
    width: 33.33%;
    height: 100%;
    padding: 15px;
    background-color: #aa7f4a;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: calc(100vw * 30 / 1920);
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
      height: calc(100vw * 39 / 1920);
    }
    &:hover {
      background-color: #8e6129;
    }
  }
}

.left {
  width: 59%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .img {
    display: block;
    width: calc(100vw * 840 / 1920);
    height: auto;
  }

  .btn {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 3%;
    width: calc(100vw * 311 / 1920);
    cursor: pointer;
  }
}

.right {
  width: 41%;
  height: 100%;
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
  }

  .left {
    width: 68%;
    .img {
      width: calc(100vw * 165 / 375);
    }

    .btn {
      bottom: 12%;
      width: calc(100vw * 112 / 375);
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
