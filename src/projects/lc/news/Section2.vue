<template>
  <div class="section2">
    <div class="news-container">
      <div class="news-title">{{currentItem.title}}</div>
      <div class="news-subtitle">
        {{currentItem.subtitle}}
      </div>
      <div class="news-date">
        {{currentItem.date}}
      </div>
      <div class="news-author">
        {{currentItem.author}}
      </div>
      <img :src="currentItem.img" alt="" class="news-img">
      <div class="news-desc">
        {{currentItem.desc}}
      </div>
      <div class="pagination flex-c">
        <div :class="`pagi ${index == $route.params.id ? 'active' : ''}`" v-for="(link, index) in links" :key="'pagi' + index" @click="$router.push(`/news/${index}`)">{{link.title}}</div>
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
  width: size(1330);
  margin: size(80) auto;
  padding-bottom: size(80);
}
.news-title {
  width: 100%;
  font-size: size(64);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ff9e00;
  margin-bottom: size(15);
}
.news-subtitle {
  font-size: size(22);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-bottom: size(15);
}
.news-date {
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #666666;
  margin-bottom: size(15);
}
.news-author {
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #666666;
  margin-bottom: size(15);
}
.news-img {
  width: 100%;
  object-fit: cover;
  margin-bottom: size(15);
}
.news-desc {
  width: 100%;
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}

.pagination {
  width: 100%;
  height: size(80);
  margin-top: size(40);

  .pagi {
    width: size(230);
    height: size(71);
    border-radius: 10px;
    font-size: size(21);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: size(71);
    letter-spacing: size(1.68);
    text-align: center;
    border: solid 1px #ff9e00;
    color: #666666;
    margin: 0 size(15);
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 size(5) 0 size(15);

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
    max-height: sizem(812);
    height: 100vh;
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
      list: [...Array(18).keys()].map((i) => ({
        title: '新聞標題新聞標題新聞標題新聞標題新聞標題1',
        subtitle: '小標文字1',
        date: '2020-12-02',
        author: 'XXXX',
        img: require('./s1/01.jpg'),
        desc:
          '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      })),
      pageCount: 3,
      currentPage: 1,
      currentItem: {
        title: '新聞標題新聞標題新聞標題新聞標題新聞標題1',
        subtitle: '小標文字1',
        date: '2020-12-02',
        author: 'XXXX',
        img: require('./s1/01.jpg'),
        desc:
          '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      },
      links: [
        {
          title: '新聞標題新聞標題新聞標題新聞標題新聞標題1',
          id: '2',
        },
        {
          title: '新聞標題新聞標題新聞標題新聞標題新聞標題1',
          id: '2',
        },
        {
          title: '新聞標題新聞標題新聞標題新聞標題新聞標題1',
          id: '2',
        },
      ],
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

  mounted() {
    this.currentItem = this.list[this.$route.params.id]
  },

  created() {},

  computed: {},
}
</script>
