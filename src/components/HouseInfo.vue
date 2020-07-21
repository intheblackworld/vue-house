<template>
  <div class="house-info">
    <div class="content">
      <div class="flex">
        <div class="img relative">
          <div class="subtitle">聯碩地產行銷團隊</div>
          <a
            href="http://unigiants.com.tw/"
            target="_blank"
          >
            <img
              src="../projects/yb/bottom/banner1.png"
              alt=""
              class="banner"
            >
          </a>
          <a
            href="https://www.facebook.com/unigiant/"
            target="_blank"
          >
            <img
              src="../projects/yb/bottom/banner2.png"
              alt=""
              class="banner"
            >
          </a>
          <img
            src="../projects/yb/bottom/logo.png"
            alt=""
            class="logo"
          >
        </div>
        <div class="info">
          <div class="title">建案資訊</div>
          <div
            class="item"
            :key="infos[0]"
            v-for="infos in houseInfos"
          >
            <h3 class="label">{{infos[0]}}</h3>
            <p
              class="desc"
              v-html="infos[1]"
            ></p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import info from '@/info'
import Footer from '@/layouts/Footer.vue'
export default {
  name: 'houseInfo',
  components: {
    Footer,
  },
  data() {
    return {
      info,
      houseInfos: info.houseInfos,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
@import '@/assets/style/variableColor.scss';
.house-info {
  width: 100vw;
  background: $house_bg;
  position: relative;
  z-index: 1;
}
.content {
  width: 1260px;
  max-width: 95%;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .flex {
    width: 100%;
    .info {
      flex: 1;
      justify-content: left;
    }
  }
}

.title {
  text-align: left;
  font-size: 36px;
  line-height: 36px;
  margin: 20px 0 10px 0;
  font-family: 'Noto Serif TC', serif;
  font-weight: bold;
  color: $house_title_color;
}

.img {
  width: 50%;
  text-align: left;
  img {
    max-width: 90%;
  }

  a {
    display: block;
  }
}

.subtitle {
  font-size: size(28);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.25;
  letter-spacing: 2.8px;
  text-align: left;
  color: #f6f6f6;
  margin-bottom: size(20);
}

.banner {
  width: auto;
  height: size(47);
  margin-bottom: size(30);
  max-height: 47px;
}

.logo {
  height: size(151);
  position: absolute;
  bottom: 0;
  left: 0;
  max-height: 151px;
  // margin-top: size(190);
}

.info {
}

.item {
  font-size: 16px;
  margin-bottom: 0;
  margin-right: 160px;
  //width: 260px;
  height: 45px;
  border-top: 1px solid #ccc;
  // border-left: 4px solid $house_label_color;
  padding-left: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  &:nth-of-type(even) {
    //  margin-right: 0;
  }

  .label {
    font-size: 16px;
    color: $house_label_color;
    margin-bottom: 0;
    margin-right: 20px;
    white-space: nowrap;
  }

  &:nth-child(2) {
    border-top: 0px solid #ccc;
    .label {
      display: none;
    }
  }
  .desc {
    font-size: 15px;
    text-align: left;
    line-height: 1.4;
    color: $house_desc_color;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .content {
    width: 100%;
    max-width: 100%;
    padding: 20px 0;
  }

  .title {
    //  font-size: 32px;
    margin: 40px 0 24px;
  }

  .item {
    width: 100%;
    // margin-bottom: 20px;
    //  margin-right: 0;
    //
    //  height: auto;
    //  margin-left: 20px;
    //  white-space: normal;
  }

  .info {
    padding: 0 5%;
  }
  .content .flex {
    flex-direction: column;
  }

  .img {
    width: 100%;
    padding: 24px;
  }

  .subtitle {
    font-size: size-m(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.25;
    letter-spacing: 2.8px;
    text-align: left;
    color: #f6f6f6;
    margin-bottom: size-m(15);
  }

  .banner {
    width: auto;
    height: size-m(30);
    margin-bottom: size-m(20);
  }

  .logo {
    height:size-m(120);
    position: relative;
    bottom: auto;
    left: auto;
    margin: 50px auto 30px;
    display: block;
    // margin-top: size(190);
  }
.item {
  .desc {
    font-size: 13px;
  }
}
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .content {
    width: 686px;
  }

  .title {
    font-size: 32px;
    margin: 40px 0 24px;
  }

  .item {
    margin-bottom: 20px;
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}
</style>
