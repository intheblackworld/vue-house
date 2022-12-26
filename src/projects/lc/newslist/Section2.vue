<template>
  <div class="section2">
    <div class="news-container">
      <div class="news-item" v-for="(item, index) in list" :key="item.title + index" @click="$router.push(`/news/${index}`)">
        <img :src="item.img" alt="" class="news-img">
        <div class="news-title">
          {{item.title}}
        </div>
      </div>
      <div class="news-item">
      </div>
      <div class="news-item">
      </div>
      <!-- <div class="pagination flex-c">
        <div :class="`pagi flex-c ${index === currentPage ? 'active' : ''}`" v-for="index in pageCount" :key="'pagi' + index" @click="currentPage = index">{{index}}</div>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  // height: size(1444);
  overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  &:nth-child(1) {
    position: relative;
  }
}
.news-container {
  width: 56em;
  margin: size(80) auto;
  padding-bottom: size(80);
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  font-size: size(25);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: 0.01em;
  text-align: justify;
  color: #ff9e00;
}
.news-item {
  width: 16em;
  margin: 0 1em 1.5em 1em;
  cursor: pointer;
}

.news-img {
  width: 100%;
  height: 14em;
  object-fit: cover;
  // margin-bottom: size(10);
}

.pagination {
  width: 100%;
  height: size(80);
  margin-top: size(40);

  .pagi {
    width: size(45);
    height: size(45);
    font-size: size(20);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    border: solid 1px #ff9e00;
    color: #666666;
    margin: 0 size(15);
    cursor: pointer;

    &.active {
      color: #ffffff;
      background-color: #ff9e00;
    }
  }
}

@media only screen and (max-width: 1440px) {
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
  .section2 {
    width: 100vw;
    min-height: sizem(604);
    max-height: auto;
    height: auto;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .bg {
    width: sizem(350);
    top: sizem(60);
    bottom: sizem(63);
    // background-image: url('./s1/bg.png');
    background-attachment: fixed;
  }

  .news-container {
    width: sizem(375);
    margin: sizem(60) auto;
    padding-bottom: sizem(60);
    display: flex;
    flex-wrap: wrap;
  }
  .news-item {
    width: sizem(310);
    margin: 0 auto sizem(40);
    cursor: pointer;
  }

  .news-img {
    width: 100%;
    height: sizem(280);
    object-fit: cover;
    margin-bottom: sizem(10);
  }

  .news-title {
    font-size: sizem(26);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: sizem(3.16);
    text-align: left;
    color: #ff9e00;
  }

  .pagination {
    width: 100%;
    height: sizem(80);
    margin-top: sizem(40);

    .pagi {
      width: sizem(45);
      height: sizem(45);
      font-size: sizem(20);
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: normal;
      text-align: left;
      border: solid 1px #ff9e00;
      color: #666666;
      margin: 0 sizem(15);
      cursor: pointer;

      &.active {
        color: #ffffff;
        background-color: #ff9e00;
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section2',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      tabIndex: 0,
      list: [
        //...Array(18).keys()].map((i) => ({
        {
          img: require('../news/s2/15/1.jpg'),
          title: '2022歲末年終感恩餐會',
        },
        {
          img: require('../news/s2/14/1.jpg'),
          title: '祈安、祈福，立瑾WAY上樑大吉',
        },
        {
          img: require('../news/s2/13/1.jpg'),
          title: '立瑾建築機構-鼎禾建設，開工動土慶典活動',
        },
        {
          img: require('../news/s2/12/1.jpg'),
          title: '立瑾建築機構-詠齊建設，開幕誌慶活動剪影',
        },
        {
          img: require('../news/s2/11/image001.jpg'),
          title: '豎千年柱，架萬代樑 立瑾綻上樑大吉',
        },
        {
          img: require('../news/s2/10/image001.jpg'),
          title: '環境保護  減毒增效  :工地大清消',
        },
        {
          img: require('../news/s2/9/S__14008337.jpg'),
          title: '立瑾建築虎年開工大吉，一整年虎虎生威！',
        },
        {
          img: require('../news/s2/8/01.jpg'),
          title: '立瑾綻於鳳鳴預定地隆重開工 祈求一切平安、順遂',
        },
        {
          img: require('../news/s2/7/01.jpg'),
          title: '因應COVID-19新冠肺炎 立瑾建築機構自主快篩',
        },
        {
          img: require('../news/s2/6/1.jpg'),
          title: '鶯歌最夯建案 立瑾WAY 3/6即將開案',
        },
        {
          img: require('../news/s2/5/a1.jpg'),
          title: '三重立瑾醞召開第一次區權會',
        },
        {
          img: require('../news/s2/1/20191009004718.jpg'),
          title: '立瑾醞 三重水岸正大3房 純住宅智能規劃 永久景觀棟距稀有珍貴',
        },
        {
          img: require('../news/s2/2/160683225228081_P6748206.jpg'),
          title: '快來「立瑾醞」！ 地主自己當',
        },
        {
          img: require('../news/s2/3/2193147-XXL.jpg'),
          title: '別再買縮水版3房了！立瑾醞三重水岸大3房一次買到位',
        },
        {
          img: require('../news/s2/4/30-98629-001.jpg'),
          title: '立瑾醞 口碑推爆：三重水岸住大3房的幸福',
        },
        /*{
        img: require('../news/s2/no.png'),
        title: '立瑾醞 享受大三房、水岸景觀之美',
      },
      */
      ], //)),
      pageCount: 3,
      currentPage: 1,
    }
  },

  methods: {
    // @slideChangeTransitionEnd="slideChanged"
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  mounted() {},

  created() {},

  computed: {},
}
</script>
