<template>
  <div class="house-info" id="house-info">
    <div class="content">
      <h3 class="title" data-aos="fade-down" data-aos-delay="0">建案資訊</h3>
      <div class="info">
        <div class="item" :key="infos[0]" v-for="(infos, index) in houseInfos" data-aos="fade-right" :data-aos-delay="100 + index * 100" data-aos-offset="-300">
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
  background: $house_bg;
  position: relative;
  z-index: 1;
}
.content {
  width: 706px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 15px;
  line-height: 1.6;
}

.title {
  font-size:2em;
  margin:1.5em 0;
  font-weight: 900;
  color: $house_title_color;
  font-family: $family3;
  letter-spacing:0.4em;
}

.info {
  display: flex;
  flex-wrap: wrap;
}

.item {
  font-size:1em;
  margin-bottom:2em;
  margin-right: 10em;
  width: 270px;
  //height: 30px;
  line-height: 1.4;
 // border-left: 4px solid $house_border_color;
  padding-left:.5em;
  display: flex;
  align-items: center;justify-content:flex-start;
  white-space: nowrap;position: relative;
 
  &::before{content: "";
   // content:url("data:image/svg+xml,%3Csvg version='1.1' id='圖層_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' %3E%3Cpath fill='%2389D0F3' d='M0,15c8.3,0,15-6.7,15-15H0V15z'/%3E%3Cpath fill='%23D0EEFC' d='M30,15c-8.3,0-15,6.7-15,15h15V15z'/%3E%3Cpath fill='%2300A3DE' d='M30,15V0H15C15,8.3,21.7,15,30,15z'/%3E%3Cpath fill='%239BD59D' d='M0.2,15c-0.1,0-0.1,0-0.2,0v15h15c0-0.1,0-0.1,0-0.2C15,21.6,8.4,15,0.2,15z'/%3E%3C/svg%3E%0A");
    width:  .2em;height: 1.2em;
  background:$house_border_color;
  margin: .2em 0.8em 0 0;position: absolute;top:0;left: 0;}
   /* */
  &:nth-of-type(even) {
    margin-right: 0;
  }

  .label {
    font-size:1em;
    color: $house_label_color;
    margin-bottom: 0;
    margin-right:0.8em;
    white-space: nowrap;
    font-family: $family3;
    flex: 0 0 5em;
    text-align: left;
  //  width: 5em;
      width: auto;
    padding-left: 0.3em;
  }

  .desc {
    font-size: 1em;
    text-align: left;
    color: $house_desc_color;
    font-family: $family3;
    font-weight: 500;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .content {
    min-height: 25em;
    width: 100%;
    margin-bottom: 0;
    font-size: 14px;
    padding-bottom: 50px;
  }

  .title {
    margin: 0.8em 0 0.5em 0;
  }

  .item {
    align-items: flex-start;
    margin: 0;
    width: 100%;
    height: auto;
    white-space: normal;
    margin: 0.5em 20px;
  }

  .info {
    width: 100%;
    flex: 1;
    justify-content: space-around;
    align-content: space-around;
  }
  .item {
    .label {
      width: auto;
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
