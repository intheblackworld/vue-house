<template>
  <div>
    <div
      class="section5"
      v-if="!isMobile"
    >
      <div 
        class="one absolute">
      <img
        src="./s5/1.jpg"
        alt="交通示意圖"
        data-aos="fade-right"
        data-aos-delay="0"
      >
      <h3
        class="txt txt-one absolute"
        data-aos="fade-right"
        data-aos-delay="100"
      >交通示意圖</h3></div>
      <div class="content absolute">
      <div
        class="block absolute"
        data-aos="fade-down"
        data-aos-delay="400"
      ></div>
      <h3
        class="title"
        data-aos="fade-down"
        data-aos-delay="200"
      >一高二線<br />
        速抵台北市區<br />
        便捷南來北往</h3>
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
      <div class="leaf absolute"
        data-aos="fade-down-left"
        data-aos-delay="200">
      <img
        src="./deck/leaf.png"
        alt="leaf"
      ></div>
      <div class="leaf2 absolute"
        data-aos="fade-down-left"
        data-aos-delay="200">
      <img
        src="./deck/leaf.png"
        alt="leaf"
      ></div>

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
    <div
      class="section5"
      v-if="isMobile"
    >
      <div
        class="swipe absolute"
        data-aos="fade-right"
        data-aos-delay="200"
        @mouseenter.stop="toggleTimer = false"
        @mouseleave.stop="toggleTimer = true"
      >
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <div
            v-for="(slide, i) in slideList"
            :key="slide.img"
            :class="`swipe-item absolute ${slideIndex === i ? 'active' : ''} ${(slideIndex === (i + 1) || slideIndex === (i - slideList.length + 1)) ? 'base' : ''}`"
          >
            <img
              :src="slide.img"
              alt=""
            >
            <h3
              class="name absolute"
              v-html="slide.name"
            ></h3>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <img
              src="./all/prev-btn.png"
              alt=""
              class="prev-btn"
              @click="decIndex"
            >
            <img
              src="./all/next-btn.png"
              alt=""
              class="next-btn"
              @click="addIndex"
            >
          </div>
        </div>
      </div>
      <h3 class="title">一高二線<br />速抵台北市區<br />便捷南來北往</h3>
      <div class="toggle-list">
        <div
          class="toggle-item flex-ac flex-jb"
          @click="showDialog(0)"
        >
          <h3 class="toggle-title">約5分鐘國五 五結出口<br />約8分鐘羅東火車站<br />回宜蘭的家 好方便</h3>
          <div class="toggle-btn"></div>
        </div>
      </div>
      <div class="butterfly absolute"
        data-aos="fade-down-left"
        data-aos-delay="200">
      <img
        src="./deck/butterfly.png"
        alt="butterfly"
      >
        </div>
      <div class="leaf absolute"
        data-aos="fade-down-left"
        data-aos-delay="200">
      <img
        src="./deck/leaf.png"
        alt="leaf"
      >
        </div>
      <div
        class="dialog flex-c"
        v-show="isDialog"
      >
        <div class="dialog-content">
          <img
            class="close"
            @click="isDialog = false"
            src="./all/close.png"
            alt="close"
          >
          <div
            class="dialog-title"
            v-html="toggleList[toggleIndex].title"
          ></div>
          <div
            class="dialog-subtitle"
            v-html="toggleList[toggleIndex].subtitle"
          ></div>
          <div
            class="dialog-smalltitle"
            v-html="toggleList[toggleIndex].smalltitle"
          ></div>
          <div
            class="dialog-desc"
            v-html="toggleList[toggleIndex].desc"
          ></div>
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
    img{width: 100%;}
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
  bottom: size(10);
  right: size(10);
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
  img{width: 100%;transform:scaleX(-1) rotate(-80deg);}
}

.leaf2 {
  width: size(124);
  bottom: size(148);
  right: size(400);
  img{width: 100%;transform:scaleX(-1) rotate(90deg);}
}

.line {
  width: size(565);
  bottom: size(70);
  right: size(215);
}

.title {
  top: size(90);
  left: size(0);
  font-size: size(48);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: 0.16em;
  text-align: left;
  color: #000000;
  margin: 0 0 0.5em 0;
}

.subtitle {
  font-size: size(30);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.16em;
  text-align: left;
  color: #333333;
  margin: 0 0 0.8em 0;
}

.desc {
  font-size: size(16);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.03;
  letter-spacing: 0.12em;
  text-align: left;
  color: #8e8a74;
}

.content {
  width: size(635);
  height: size(576);
  top: size(80);
  right: size(175);
  padding-top: size(0);
}
.block {
  background-color: #8e8a7455;
  width: size(258);
  height:size(372);
  top: size(-40);
  left: size(-30);
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
  //  height: calc(100vh - 63px);
    height:sizem(600);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .swipe {
    width: 100vw;
    height: sizem(300);
    top: sizem(0);
    left: 0;
    object-fit: cover;
  }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    z-index: 0;
    object-fit: cover;

    img {
      width: 100%;
    }

    &.base {
      z-index: 1;
      left: 0;
      opacity: 1;
    }
    &.active {
      z-index: 2;
      left: 0;
      opacity: 1;
    }
  }

  .pagination {
    width: auto;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 14px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #fff;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transition: all 0.3s;
        transform-origin: center;
        transform: scale(0);
      }
      &.active {
        &::before {
          content: '';
          width: 60%;
          height: 60%;
          display: block;
          background: #fff;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 20%;
          // transform: translateY(-50%);
          left: 23%;
          transform: scale(1);
        }
      }
    }
  }

  .swipe-btns {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: size-m(15);
      cursor: pointer;
    }
  }

  .name {
    right: 15px;
    bottom: 15px;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.92;
    letter-spacing: 3.12px;
    text-align: left;
    color: #ffffff;
    z-index: 5;
  }

  .title {
    writing-mode: initial;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-top: sizem(16 + 300);
    margin-left: sizem(56);
  }

  .toggle-list {
    width: sizem(324);
    margin: 0 auto;
    margin-top: sizem(10);
  }

  .toggle-item {
    width: 100%;
    height: sizem(130);
    border-top: solid 1px rgba(142, 138, 116, 0.5);
    border-bottom: solid 1px rgba(142, 138, 116, 0.5);

    // &:nth-last-child(1) {
    //   border-top: none;
    // }
  }

  .toggle-title {
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height:1.8;
    letter-spacing: 0.4px;
    text-align: left;
    color: #333333;
  }

  .toggle-btn {
    background-color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: relative;
    &:before {
      content: '';
      background: #707070;
      width: 1px;
      height: 14px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    &:after {
      content: '';
      background: #707070;
      width: 14px;
      height: 1px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }

  .butterfly {
    width: sizem(52);
    top: sizem(310);
    right: auto;
    left: 0;
    img{width: 100%;transform:rotate(-80deg);}
  }

  .leaf {
    width: sizem(120);
    top: sizem(315);
    right: sizem(-23);
    img{width: 100%;transform:scaleX(-1) rotate(0deg);}
  }

  .dialog {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: scroll;

    .dialog-content {
      width: sizem(340);
      height: sizem(556);
      background-color: #fff;
      border-radius: 20px;
      padding: sizem(15);
      overflow: scroll;
    }

    .close {
      width: 35px;
      background: rgba(0, 0, 0, 0.7);
      padding: 5px;
      position: absolute;
      right: sizem(30);
      top: sizem(68);
    }

    .dialog-title {
      font-size: sizem(25);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.44;
      letter-spacing: normal;
      text-align: left;
      color: #000000;
      margin-top: sizem(45);
    }
    .dialog-subtitle {
      font-size: sizem(20);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.09;
      letter-spacing: 1.6px;
      text-align: left;
      color: #333333;
      margin-top: sizem(10);
    }
    .dialog-smalltitle {
      font-size: sizem(18);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.33;
      letter-spacing: 3.24px;
      text-align: left;
      color: #8e8a74;
    }
    .dialog-desc {
      font-size: sizem(15);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.17;
      letter-spacing: normal;
      text-align: left;
      color: #8e8a74;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section5',

  mixins: [slider],

  data() {
    return {
      isMobile,
      isTablet,
      isDialog: false,
      toggleIndex: 0,
      toggleList: [
        {
          title: '一高二線<br />速抵台北市區<br />便捷南來北往',
          subtitle: '約5分鐘國五 五結出口<br />約8分鐘羅東火車站<br />回宜蘭的家 好方便',
          smalltitle: '',
          desc:
            '國道5號往雙北、台2線濱海省道北往雙北市，連結蘇澳冷泉、與縱貫宜蘭、花東的台9線。<br />五結鄉，是宜蘭獨一無二正核心，北可抵宜蘭市區、西至羅東轉運站及國道五號、東往傳統藝術中心、南至親水公園，動線多元便捷。',
        },
      ],
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
      slideList: [
        {
          img: require('./mo/5/1交通示意圖.jpg'),
          name: '交通示意圖',
        },
        {
          img: require('./mo/5/2羅東轉運站.jpg'),
          name: '羅東轉運站',
        },
        {
          img: require('./mo/5/3羅東車站.jpg'),
          name: '羅東車站',
        },
        {
          img: require('./mo/5/4台二線 示意圖.jpg'),
          name: '台二線 示意圖',
        },
      ],
    }
  },

  methods: {
    showDialog(index) {
      this.toggleIndex = index
      this.isDialog = true
    },
  },

  created() {},

  mounted() {},

  computed: {},
}
</script>
