<template>
  <div class="house-info" id="house-info">
    <div class="content">
      <h3 class="title" data-aos="fade-down" data-aos-delay="0">建案資訊</h3>
      <div class="info">
        <div class="item" :key="infos[0]" v-for="(infos, index) in houseInfos" data-aos="fade-right" :data-aos-delay="100 + index * 100">
          <h3 class="label">{{infos[0]}}</h3>
          <p class="desc" v-html="infos[1]"></p>
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
  font-size: 32px;
  line-height: 36px;
  margin: 60px 0;
  font-weight: 500;
  color: $house_title_color;
  font-family: $family3;
  font-weight: bold;
  letter-spacing: 15px;
}

.img {
  width: 50%;
  text-align: left;
  font-size: size(30);
  line-height: 1.6;
  img {
    max-width: 90%;
  }

  a {
    display: block;
  }
}

.subtitle {
  font-size:0.95em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 2.8px;
  text-align: left;
  color: #f6f6f6;
  margin: 0 0 0.8em 0;
}

.banner {
  width: auto;
  height: 1.6em;
  max-height: 47px;
  margin: 0 0 0.1em 0;
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
  margin-bottom: 30px;
  margin-right: 160px;
  width: 260px;
  height: 30px;
  line-height: 1.4;
  border-left: 4px solid $house_border_color;
  padding-left: 10px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  // &::before{content: "";width: 4px;height: 1.4em;background:$house_border_color;margin: -1px 10px 0 0;position: relative;}
  &:nth-of-type(even) {
    //  margin-right: 0;
  }

  .label {
    font-size: 16px;
    color: $house_label_color;
    margin-bottom: 0;
    margin-right: 20px;
    white-space: nowrap;
    font-family: $family3;
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
    color: $house_desc_color;
    font-family: $family3;
    font-weight: bold;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .content {
    height: 20em;
    width: 100%;
    margin-bottom: 0;
    font-size: 15px;
    padding-bottom: 50px;
  }

  .title {
    font-size: 32px;
    margin: 0.8em 0 0.5em 0;
  }

  .item {
    align-items: flex-start;
    margin: 0;
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
    flex: 1;
    justify-content: space-around;
    align-content: space-around;
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
