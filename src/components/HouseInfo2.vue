<template>
  <div class="house-info" id="house-info">
    <div class="content">
      <div class="title" data-aos="fade-down" data-aos-delay="0">{{info.mechanism}}</div>
      <div class="info" data-aos="fade-down" data-aos-delay="200">
        <div class="item">
          電話 {{info.phone}}
        </div>
        <div class="item">
          信箱 {{info.email}}
        </div>
        <div class="item">
          地址 {{info.address}}
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
 // background-attachment: fixed;
  box-shadow: 0 0 15vw #0009;
}
.content {
  width: 686px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.title {
  margin: 40px 0;
  font-size: 60.5px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 6.05px;
  text-align: left;
  color: $house_title_color;
}

.info {
  margin-bottom: 55px;
}

.item {
  font-size: 23px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 2.3px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 12px;
  //border-left: 4px solid $house_border_color;
  .label {
    font-size: 1em;
    color: $house_label_color;
    margin-bottom: 0;
    margin-right: 0.8em;
    white-space: nowrap;
    font-family: $family3;
    width: 4.5em;
  }

  .desc {
    font-size: 14px;
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
    min-height: 15em;
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
    height: auto;
    margin-left: 0;
    padding: 5px 20px;
    white-space: normal;
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
