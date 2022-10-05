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
    <Footer v-if="info.lixin_logo" />
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
@import '@/assets/style/variableColor.scss';
.house-info {
  width: 100vw;
 // background:$house_bg;
  background-size: 100% auto;
  position: relative;
  z-index: 1;
}
.content {
  width: 686px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 0 5vw 0;
}

.title {
  font-size: 32px;
  line-height: 1.6;
  margin: 60px 0;
  font-weight: 500;
  color: $house_title_color;
  //font-family: $family3;
  font-weight: bold;
  letter-spacing: 0.06em;
  border-bottom: 2px solid #C9A063;
}

.info {
  display: flex;
  flex-wrap: wrap;
}

.item {
  font-size: 15px;
  margin-bottom:2em;
  margin-right: 10em;
  width: 260px;
  //height: 30px;
  line-height: 1.5;
  //border-left: 4px solid $house_border_color;
  padding-left: 10px;
  display: flex;
  align-items: center;
  white-space: nowrap;position: relative;
  &:nth-of-type(even) {
    margin-right: 0;
  }

  .label {
    font-size:1em;
    color: $house_label_color;
    margin-right:0.8em;
    white-space: nowrap;
    text-align: left;
   // font-family: $family3;
    width: 5em;position: relative;
  &::after{content: "";width: 2px;height: 1.4em;background:$house_border_color;margin:0;position: absolute;top:0.05em;right: 0;}
  }

  .desc {
    font-size: 14px;
    text-align: left;
    color: $house_desc_color;
  //  font-family: $family3;
    font-weight: 300;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
.house-info {
  background-size: 190% auto;
}
  .content {
   // height: 35em;
    width: 100%;
    margin-bottom: 0;
    font-size: 15px;
    padding-bottom: 35vw;
  }

  .title {
    font-size: 32px;
    margin: 0.8em 0 0.5em 0;
  }

  .item {
    align-items: flex-start;
    margin: 10px 0 10px 20px;
    width: 100%;
    height: auto;
    white-space: normal;
  .desc {
    font-size: 14px;
  }
  }

  .info {
    width: 100%;
    flex: 1;
    justify-content: space-around;
    align-content: space-around;
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
