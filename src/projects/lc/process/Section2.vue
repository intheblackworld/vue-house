<template>
  <div class="section2">
    <div class="head">
      <div class="breads">
        <router-link to="/">首頁</router-link> >
        <router-link to="/process">工程進度</router-link> >
      </div>
      <div class="title" v-html="list[$route.params.id][0].o_title"></div>
      <div class="subtitle" v-html="list[$route.params.id][0].o_subtitle"></div>
    </div>
    <div class="process-container">
      <div class="process-item" v-for="(item, index) in list[$route.params.id]" :key="item.title + index" @click="showDialog(item.isFinished, index)">
        <img :src="item.img" alt="" class="process-img">
        <div class="process-b">
          <div class="process-title">
            {{item.title}}
          </div>
          <div class="process-subtitle" v-html="item.subtitle">
          </div>
        </div>
      </div>
      <div class="back">
        回工程進度
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

.head {
  width: size(1920 - 304 * 2);
  margin: size(20) auto;

  .breads {
    font-size: size(27);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: size(0.81);
    text-align: left;
    margin-bottom: size(20);
    color: #000;
    a {
      color: #000;
      text-decoration: none;
    }
  }

  .title {
    font-size: size(64);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ff9e00;
  }

  .subtitle {
    font-size: size(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: normal;
    text-align: left;
    color: #444444;
  }
}
.process-container {
  width: size(1920 - 304 * 2);
  margin: size(40) auto;
  padding-bottom: size(80);
  position: relative;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}

.back {
  position: absolute;
  right: 0;
  bottom: 30px;
  font-size: size(20);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(0.6);
  text-align: left;
  color: #000000;
}

.process-title {
  font-size: size(28);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(0.84);
  text-align: left;
  color: #ffffff;
  background-color: #7d7d7d;
  padding: size(5) size(40);
  border-radius: 10px;
  display: inline-block;
}

.process-subtitle {
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-top: size(15);
}
.process-item {
  width: size(403);
  min-height: size(537);
  margin-bottom: size(70);
  border: 1px solid #707070;
  text-align: left;
  cursor: pointer;

  &:nth-child(n + 3) {
    opacity: 0.5;
  }
}

.process-b {
  border-top: 1px solid #707070;
  padding: size(14) size(20);
}

.process-img {
  width: 100%;
  height: size(363);
  object-fit: cover;
  // margin-bottom: size(10);
}

.process-link {
  width: size(132);
  height: size(34);
  border-radius: size(17);
  background-color: #221714;
  cursor: pointer;
  font-size: size(12);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(0.6);
  text-align: left;
  color: #ffffff;
  float: right;
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

  .process-container {
    width: sizem(375);
    margin: sizem(60) auto;
    padding-bottom: sizem(60);
    display: flex;
    flex-wrap: wrap;
  }
  .process-item {
    width: sizem(310);
    margin: 0 auto sizem(40);
    cursor: pointer;
  }

  .process-img {
    width: 100%;
    height: sizem(280);
    object-fit: cover;
    margin-bottom: sizem(10);
  }

  .process-title {
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
        [
          {
            img: require('../process/list/1/1.jpg'),
            o_title: '2021 立瑾WAY',
            o_subtitle: '已完售，預計2023年初完工。',
            title: '2021/4',
            subtitle: '基礎工程啟動<br/>地下室開挖工程按部進行。',
          },
          {
            img: require('../process/list/noimg.png'),
            title: '2021/5',
            subtitle: '第一期工程',
          },
          {
            img: require('../process/list/noimg.png'),
            title: '2021/6',
            subtitle: '第二期工程',
          },
        ],
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
    showDialog(isFinished, index) {
      if (isFinished) {
      }
    },

    closeDialog() {},
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
