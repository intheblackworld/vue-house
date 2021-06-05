<template>
  <div class="section2">
    <img src="../process/s1/rb.png" alt="" class="rb">
    <div class="process-container">
      <div class="process-item" v-for="(item, index) in list" :key="item.title + index" @click="goTo(item.isFinished, index)">
        <img :src="item.img" alt="" class="process-img">
        <div class="process-b">
          <div class="process-title">
            {{item.title}}
          </div>
          <div class="process-subtitle">
            {{item.subtitle}}
          </div>
          <div class="process-link flex-c">
            READ MORE
          </div>
        </div>
      </div>
      <div class="pagination flex-c">
        <div :class="`pagi flex-c ${index === currentPage ? 'active' : ''}`" v-for="index in pageCount" :key="'pagi' + index" @click="currentPage = index">{{index}}</div>
      </div>
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
.rb {
  @include img_r_pc(340, 0, 115);
  top: auto;
  bottom: 30px;
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
.process-container {
  width: size(1920 - 304 * 2);
  margin: size(80) auto;
  padding-bottom: size(80);
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}

.process-title {
  font-size: size(33);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
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
}
.process-item {
  width: size(403);
  min-height: size(537);
  margin-bottom: size(70);
  border: 1px solid #707070;
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
    height: sizem(414);
    margin: 0 auto sizem(40);
    cursor: pointer;
  }

  .process-b {
    border-top: 1px solid #707070;
    padding: sizem(15) sizem(10);
  }

  .process-img {
    width: 100%;
    height: sizem(280);
    object-fit: cover;
    margin-bottom: sizem(10);
  }

  .process-title {
    font-size: sizem(24);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }

  .process-link {
    width: sizem(102);
    height: sizem(26);
    border-radius: sizem(13);
    background-color: #221714;
    cursor: pointer;
    font-size: sizem(12);
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
        {
          img: require('../process/list/1/0.jpg'),
          title: '2021 立瑾WAY',
          subtitle: '已完售，預計2023年初完工。',
          isFinished: true,
        },
        {
          img: require('../process/list/noimg.png'),
          title: '2021 鶯歌鳳福段',
          subtitle: '即將公開，敬請期待。',
          isFinished: false,
        },
        {
          img: require('../process/list/1/0.jpg'),
          title: '2021 立瑾WAY',
          subtitle: '已完售，預計2023年初完工。',
          isFinished: false,
        },
        {
          img: require('../process/list/1/0.jpg'),
          title: '2021 立瑾WAY',
          subtitle: '已完售，預計2023年初完工。',
          isFinished: false,
        },
        {
          img: require('../process/list/1/0.jpg'),
          title: '2021 立瑾WAY',
          subtitle: '已完售，預計2023年初完工。',
          isFinished: false,
        },
        {
          img: require('../process/list/1/0.jpg'),
          title: '2021 立瑾WAY',
          subtitle: '已完售，預計2023年初完工。',
          isFinished: false,
        },
      ],
      pageCount: 3,
      currentPage: 1,
    }
  },

  methods: {
    goTo(isFinished, index) {
      if (isFinished) {
        this.$router.push(`/process/${index}`)
      }
    },
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
