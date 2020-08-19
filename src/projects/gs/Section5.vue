<template>
  <div>
    <div class="section5">
      <img
        src="./s5/1.jpg"
        alt=""
        class="one absolute"
        data-aos="fade-right"
        data-aos-delay="0"
      >
      <h3
        class="txt txt-one absolute"
        data-aos="fade-right"
        data-aos-delay="100"
      >交通示意圖</h3>
      <h3
        class="title absolute"
        data-aos="fade-down"
        data-aos-delay="200"
      >一高二線<br />
        速抵台北市區<br />
        便捷南來北往</h3>
      <div class="content absolute">
        <h3
          class="subtitle"
          data-aos="fade-down"
          data-aos-delay="400"
        >約5分鐘國五 五結出口<br />約8分鐘羅東火車站 回宜蘭的家 好方便</h3>
        <h3
          class="desc"
          data-aos="fade-down"
          data-aos-delay="600"
        >國道5號往雙北、台2線濱海省道北往雙北市，連結蘇澳冷泉、與縱貫宜蘭、花東的台9線。<br />
          五結鄉，是宜蘭獨一無二正核心，北可抵宜蘭市區、西至羅東轉運站及國道五號、東往傳統藝術中心、南至親水公園，動線多元便捷。
        </h3>

      </div>
      <img
        src="./deck/butterfly.png"
        alt=""
        class="butterfly absolute"
        data-aos="fade"
        data-aos-delay="800"
      >
      <img
        src="./deck/tree.png"
        alt=""
        class="tree absolute"
        data-aos="fade"
        data-aos-delay="1000"
      >
      <img
        src="./deck/line.png"
        alt=""
        class="line absolute"
        data-aos="fade"
        data-aos-delay="1200"
      >
      <img
        src="./deck/leaf.png"
        alt=""
        class="leaf absolute"
        data-aos="fade"
        data-aos-delay="1400"
      >

      <img
        src="./deck/leaf.png"
        alt=""
        class="leaf2 absolute"
        data-aos="fade"
        data-aos-delay="1400"
      >

      <div class="img-list flex-ac flex-jb wrap absolute">
        <div
          class="img-item relative"
          v-for="(item, index) in img_list"
          :key="item.img"
          data-aos="fade-down"
          :data-aos-delay="800 + (index * 100)"
        >
          <img
            :src="item.img"
            alt=""
          >
          <h3
            class="txt absolute"
            v-html="item.txt"
          ></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height: size(576 + 321);
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}
.one {
  width: size(1020);
  top: 0;
  left: 0;
}

.txt {
  font-size: size(13);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: 3.31px;
  text-align: left;
  color: #ffffff;
}

.txt-one {
  bottom: size(298);
  left: size(922);
}

.butterfly {
  width: size(93);
  top: size(60);
  right: size(341);
}
.tree {
  width: size(197);
  top: size(140);
  right: size(175);
}

.leaf {
  width: size(202);
  bottom: size(10);
  right: size(120);
}

.leaf2 {
  width: size(124);
  bottom: size(148);
  right: size(400);
  transform: rotate(-90deg);
}

.line {
  width: size(565);
  bottom: size(70);
  right: size(215);
}

.title {
  top: size(90);
  right: size(465);
  font-size: size(48);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: 7.75px;
  text-align: left;
  color: #000000;
}

.subtitle {
  font-size: size(30);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 5.4px;
  text-align: left;
  color: #333333;
  margin-bottom: size(20);
}

.desc {
  font-size: size(16);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.03;
  letter-spacing: 1.94px;
  text-align: left;
  color: #8e8a74;
}

.content {
  width: size(635);
  height: size(576);
  top: size(292);
  right: size(175);
  padding-top: size(62);
}

.img-list {
  width: size(400 * 3 + 20 * 2);
  bottom: size(55);
  left: size(180);
  .img-item {
    width: size(400);

    img {
      width: 100%;
    }
  }

  .txt {
    left: size(20);
    bottom: size(7);
    font-size: size(13);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: 3.25px;
    text-align: left;
    color: #ffffff;
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
  .section5 {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .bg-img {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: auto;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
    }
  }

  .title {
    width: size-m(268);
    top: size-m(34);
    right: 0;
    left: 0;
    margin: 0 auto;
    li {
      font-size: size-m(25);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.44;
      letter-spacing: 2px;
      text-align: center;
      color: #231815;
      white-space: nowrap;
    }
  }

  .desc {
    bottom: size-m(26);
    right: 0;
    left: 0;
    margin: 0 auto;
    width: size-m(310);
    font-size: size-m(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 0.3px;
    text-align: justify;
    color: #ffffff;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section5',

  data() {
    return {
      isMobile,
      isTablet,
      img_list: [
        {
          img: require('./s5/2-1.jpg'),
          txt: '羅東轉運站',
        },
        {
          img: require('./s5/2-2.jpg'),
          txt: '羅東車站',
        },
        {
          img: require('./s5/2-3.jpg'),
          txt: '台二線 示意圖',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
