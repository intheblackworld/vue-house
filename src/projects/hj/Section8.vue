<template>
  <div class="section7">
    <div
      v-if="!isMobile"
      class="full-bg"
    >
      <div class="left">
        <img
          v-lazy="require('./s8/img.jpg')"
          alt=""
        >
        <div>施⼯情境示意圖</div>
      </div>
      <div
        data-aos="fade"
        data-aos-delay="300"
      >
        <img
          v-lazy="require('./s8/timg.png')"
          alt=""
          class="right-img"
        >
      </div>
      <div class="content">
        <div class="title">
          BEST<span>三大聯合<br />建築師事務所</span><br />BRAND
        </div>
        <div class="subtitle">
          仁愛帝寶 豪宅建築團隊
        </div>
        <div class="desc">
          三大聯合建築師事務所成立四十六年，躍升國內數一數二的建築團隊，作品涵蓋全台北重要的公共建設，歷年來在全國競賽中屢獲首獎，集諸多榮耀與業主肯定於一身。<br />
          作品集：新光三越信義新天地A4館、市府轉運站、W Hotel、阪急百貨大樓、三創數位BOT大樓、大倉酒店、皇翔御踞、宏盛帝寶
        </div>
      </div>
      <img
        v-lazy="require('./s8/logo.png')"
        alt=""
        class="logo"
      >
    </div>
    <div
      v-else
      class="m-bg"
    >
      <div class="left">
        <img
          v-lazy="require('./s8/mo/img.jpg')"
          alt=""
        >
        <div>施⼯情境示意圖</div>
      </div>
      <div class="bottom">
        <div class="m-content">
          <div class="title">
            BEST<span>三大聯合<br />建築師事務所</span><br />BRAND
          </div>
          <div class="subtitle">
            仁愛帝寶 豪宅建築團隊
          </div>
          <div class="desc">
            三大聯合建築師事務所成立四十六年，躍升國內數一數二的建築團隊，作品涵蓋全台北重要的公共建設（ex. 市府轉運站、W Hotel、阪急百貨大樓），在全國競賽中屢獲首獎
          </div>
        </div>
      </div>
      <img
        v-lazy="require('./s8/mo/timg.png')"
        alt=""
        class="m-img"
        data-aos="fade-right"
        data-aos-delay="300"
      >
      <img
        v-lazy="require('./s8/mo/bglogo.png')"
        alt=""
        class="logo"
        data-aos="fade"
        data-aos-delay="400"
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.full-bg {
  background-color: #112d81;
}

.left {
  width: 50%;
  height: size(889);
  left: 0;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  > div {
    position: absolute;
    font-size: size(18);
    font-weight: bold;
    letter-spacing: 0.09em;
    bottom: size(20);
    right: size(20);
    color: #fff;
    text-shadow: 0 0 2px #000;
  }
}

.right-img {
  width: auto;
  height: 100vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
  transform: translateX(50%);
}

.swiper-fullscreen {
  width: auto;
  height: 100vh;
  img {
    width: auto;
    height: 100%;
  }
}

.content {
  position: absolute;
  width: size(480);
  height: 100vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateX(65%);
  top: 25%;
  > div {
    width: 100%;
  }
}

.title {
  opacity: 0.8;
  font-family: Impact;
  font-size: size(111);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.06em;
  text-align: left;
  color: #db364a;
  margin-bottom:0.14em;

  span {
    opacity: 0.5;
    font-size: size(22);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: 0.3em;
    text-align: left;
    color: #ffffff;
    transform: translateY(-10%);
    display: inline-block;
  }
}
.subtitle {
  font-size: size(35);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.16em;
  text-align: left;
  color: #db364a;
  white-space: nowrap;
  margin-bottom: 0.6em;
}

.desc {
  font-size: size(17);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: 0.09em;
  text-align: justify;
  color: #ffffff;
}

.logo {
  position: absolute;
  width: auto;
  height: 100vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateX(75%);
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
}

@media screen and (max-width: 767px) {
  .m-bg {
    background-color: #112d81;
    position: relative;overflow: hidden;
  }
  .left {
    width: size-m(330);
    height:auto;
    position: relative;
    top: 0;
    transform: translate(0, 0);
    img {
      height: 100%;
    }
    > div {
      font-size: size-m(12);
    }
  }
  .bottom {
    width: size-m(330);
    margin: size-m(30) auto size-m(70) auto;
    display: flex;
    position: relative;
  }

  .m-img {
    width: 100vw;
    position: absolute;
    right: 0;
    top:size-m(375);
  }
  .m-content {
    width: size-m(317);
  }

  .title {
    font-size: size-m(47);
    span {
      font-size: size-m(14);
    }
  }

  .subtitle {
    font-size: size-m(15);
  }

  .desc {
    width: size-m(330);
    font-size: size-m(12);
  }

  .logo {
    width: 100vw;
    height: auto;
    position: absolute;
    top: auto;
    bottom: 0;
    right: auto;
    left: 0;
    transform: none;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section7',
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
