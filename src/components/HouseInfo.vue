<template>
  <div class="house-info">
    <div class="content">
      <div class="flex">
        <div class="img"><img src="../projects/tv/s1/exterior.jpg" :alt="info.caseName"></div>
        <div class="info">
      <div class="title">建案資訊</div>
          <div class="item" :key="infos[0]" v-for="infos in houseInfos">
            <h3 class="label">{{infos[0]}}</h3>
            <p class="desc" v-html="infos[1]"></p>
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
@import '@/assets/style/variableColor.scss';
.house-info {
  width: 100vw;
  background: $house_bg;
  position: relative;
  z-index: 1;
}
.content {
 width: 1440px;
 max-width: 95%;
  margin:30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .flex{
    width: 100%;
    .img{flex: 1;
      display: flex;justify-content: center;align-items: center;
      img{max-width:90%;}
    }
    .info{flex: 1;justify-content: left;/*
  display: flex;
  flex-wrap: wrap;justify-content: center;align-items: center;*/}
  }
}

.title {text-align: left;
  font-size: 36px;
  line-height: 36px;
  margin: 20px 0  30px 0 ;
  font-family: 'Noto Serif TC', serif;
  font-weight: bold;
  color: $house_title_color;
}

.info {
}

.item {
  font-size: 16px;
  margin-bottom:0;
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
    margin-bottom: 20px;
  }

  .title {
    font-size: 32px;
    margin: 40px 0 24px;
  }

  .item {
    margin-bottom: 20px;
    margin-right: 0;
    width: 100%;
    height: auto;
    margin-left: 20px;
    white-space: normal;
  }

  .info {
    width: 100%;
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
