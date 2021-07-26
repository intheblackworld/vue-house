<template>
  <div class="section3 flex">
    <div v-if="isPC" class="flex">
      <img src="./s3/style_1.png" :alt="`${info.caseName}_img`" class="style1">
      <img src="./s3/style_2.png" :alt="`${info.caseName}_img`" class="style2">
      <img src="./s3/style_2.png" :alt="`${info.caseName}_img`" class="style3">
      <div class="content">
        <div class="title">
          自住，收租，租客廣，租金強
          <br>
          <span>買對好房子，富就來了！</span>
        </div>
        <div class="line"></div>
        <div class="desc">
          3分鐘直上湖口交流道、10分鐘五楊高架橋，散步到仁和商圈及便利商店7-11，華興國小、中正國中上學趣，華興公園及中華公園休閒樂活。
          不僅生活機能俱全，位於車程約10分鐘的台元科技園區，基地總面積計約6萬坪，進駐公司約300家、員工數約2萬人，持續帶動就業及居住需求，讓富來樂成為自住、置產的機能首選宅！
        </div>
      </div>
      <img src="./s3/mouse.png" :alt="`${info.caseName}_img`" class="mouse">
      <div class="right flex-jb">
        <div class="img-list">
          <img src="./s3/img1.png" :alt="`${info.caseName}_img`" class="img img1">
          <img src="./s3/img2.png" :alt="`${info.caseName}_img`" class="img img2">
          <img src="./s3/img3.png" :alt="`${info.caseName}_img`" class="img img3">
        </div>
        <div class="list">
          <div class="item" v-for="(item, index) in item_list" :key="item.title + index">
            <div class="item-title" v-html="item.title"></div>
            <div class="item-desc">
              {{item.address1}}
              <img :src="item.icon" :alt="`${info.caseName}_img`" class="item-icon">
              {{item.time1}}
            </div>
            <div class="item-desc">
              {{item.address2}}
              <img :src="item.icon" :alt="`${info.caseName}_img`" class="item-icon">
              {{item.time2}}
            </div>
          </div>
        </div>
        <div class="img-list">
          <img src="./s3/img4.png" :alt="`${info.caseName}_img`" class="img img4">
          <img src="./s3/img5.png" :alt="`${info.caseName}_img`" class="img img5">
          <img src="./s3/img6.png" :alt="`${info.caseName}_img`" class="img img6">
        </div>
      </div>
    </div>
    <div v-if="isMobile">
      <div class="content">
        <div class="title">
          自住，收租，租客廣，租金強
          <br>
          <span>買對好房子，富就來了！</span>
        </div>
        <div class="line"></div>
        <div class="desc">
          3分鐘直上湖口交流道、10分鐘五楊高架橋，散步到仁和商圈及便利商店7-11，華興國小、中正國中上學趣，華興公園及中華公園休閒樂活。
          不僅生活機能俱全，位於車程約10分鐘的台元科技園區，基地總面積計約6萬坪，進駐公司約300家、員工數約2萬人，持續帶動就業及居住需求，讓富來樂成為自住、置產的機能首選宅！
        </div>
      </div>
      <img src="./s3/mouse.png" :alt="`${info.caseName}_img`" class="mouse">
      <div class="seperate flex-ac">
        <div class="flex-c">
          <div class="item-title" v-html="current.title"></div>
        </div>
        <div class="flex-ac flex-jb wrap item-desc">
          <div class="item-desc" v-html="current.desc1"></div>
          <img :src="current.icon" :alt="`${info.caseName}_img`" class="item-icon">
          <div class="item-desc" v-html="current.desc2"></div>
          <div class="item-desc" v-html="current.desc3"></div>
          <img :src="current.icon" :alt="`${info.caseName}_img`" class="item-icon">
          <div class="item-desc" v-html="current.desc4"></div>
        </div>
      </div>
      <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt>
              <div class="slide-name absolute" v-html="slide.name"></div>
              <div class="slide-desc absolute">實景拍攝</div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac" data-aos="fade" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)">
              <span :class="`${slideIndex === index ? 'active' : ''}`"></span>
            </div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decIndex"></div>
            <div class="next-btn" @click="addIndex"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.section3 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  // max-height: size(1080);
  //overflow: hidden;
  // position: relative;
  // background-image: url('./s1/01_bg.jpg');
  background-color: #fff;
  background-size: cover;
  background-attachment: fixed;

  // margin: 0 0 size(400) 0;

  // &:before {
  //   content: ' ';
  //   position: fixed;
  //   z-index: -1;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: url('./s1/bg.jpg') center 0 no-repeat;
  //   background-size: cover;
  // }
}

.bg-img {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;
}

.content {
  width: size(621);
  height: 100%;
  min-height: size(1080);
  background: #bccf00;
  padding-top: size(148);
  display: flex;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}

.title {
  font-size: size(37);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.84;
  letter-spacing: size(2.22);
  text-align: left;
  color: #cf0065;
  white-space: nowrap;
  span {
    font-size: size(46);
    letter-spacing: size(2.76);
  }
}

.desc {
  width: size(487);
  font-size: size(22);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.44;
  letter-spacing: size(0.22);
  text-align: left;
  color: #000000;
  white-space: normal;
}

.line {
  width: size(485);
  margin: size(10) 0;
  border-top: 1.5px solid #231815;
}

.right {
  width: size(1920 - 621);
  position: relative;
  z-index: 1;
}

.img-list {
  width: size(483);

  > img {
    width: 100%;
    height: size(361);
    object-fit: cover;
  }
}

.list {
  width: size(333);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding-top: size(138);

  .item {
    width: size(317);
  }

  .item-title {
    width: 100%;
    height: size(50);
    background-image: url("./s3/title_bg.png");
    background-size: cover;
    font-size: size(33);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.7;
    letter-spacing: size(1.98);
    text-align: center;
    color: #cf0065;
  }

  .item-desc {
    font-size: size(23);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: size(-0.64);
    text-align: left;
    color: #000000;
    margin-top: size(10);
    margin-left: size(48);
    display: flex;
    align-items: center;

    img {
      margin: 0 size(15);
    }
  }
}

.mouse {
  @include img_l_pc(245, 0, 308);
  top: auto;
  bottom: 0;
}

.style1 {
  @include img_l_pc(356, 762, -178);
  opacity: 0.3;
  z-index: 1;
  animation: bling 1s 0.3s ease-in-out infinite alternate;
}

.style2 {
  @include img_l_pc(469, 930, 952);
  opacity: 0.3;
  animation: bling 1.2s 0.5s ease-in-out infinite alternate;
}

.style3 {
  @include img_r_pc(469, -25, 275);
  transform: rotate(180deg);
  opacity: 0.3;
  animation: bling 1.5s 0s ease-in-out infinite alternate;
}

@keyframes bling {
  to {
    opacity: 1;
  }
}

.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 0;
  z-index: 3;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  .prev-btn,
  .next-btn {
    position: relative;
    height: 100%;
    width: 2em;
    font-size: size(20);
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateX(100%);
      // background-color: #0004;
      transition: all 0.3s;
    }
    &::after {
      content: '';
      width: 1em;
      height: 1em;
      position: absolute;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.75em);
      border: solid #fff;
      border-width: 0.1em 0.1em 0 0;
      transform: rotate(45deg) translate(-10%, 10%);
    }
    &:hover:before {
      transform: translateX(0%);
    }
    &:hover:after {
      animation: btn 0.5s ease-in-out infinite alternate;
    }
  }
  .prev-btn {
    transform: scaleX(-1);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section3 {
    width: 100vw;
    min-height: sizem(327 + 336);
    max-height: sizem(750);
    height: sizem(327 + 336);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
    // &:before {
    //   background-image: url('./s1/bg_m.jpg');
    // }
  }

  .content {
    width: 100vw;
    height: sizem(336);
    min-height: auto;
    background: #bccf00;
    padding-top: 0;
    display: flex;
    align-content: flex-start;
    justify-content: center;
    flex-wrap: wrap;
  }

  .title {
    @include img_l_m(255, 26, 30);
    font-size: sizem(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.34;
    letter-spacing: sizem(1.1);
    text-align: left;
    color: #cf0065;
    white-space: nowrap;
    span {
      font-size: sizem(22);
      letter-spacing: sizem(1.32);
    }
  }

  .desc {
    @include img_l_m(315, 97, 30);
    font-size: sizem(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(0.14);
    text-align: left;
    color: #000000;
    white-space: normal;
  }

  .line {
    @include img_l_m(315, 88, 30);
    border-top: 1.5px solid #231815;
  }

  .seperate {
    position: relative;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.4);
    padding-right: 5px;

    > div {
      width: 50%;
    }
  }

  .item-title {
    width: sizem(129);
    height: sizem(36);
    background-image: url("./s3/title_bg.png");
    background-size: cover;
    font-size: sizem(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: sizem(2.2);
    text-align: center;
    color: #cf0065;
  }

  .item-desc {
    min-width: sizem(55);
    font-size: sizem(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: size(-0.44);
    text-align: left;
    color: #000000;
    margin-top: 0;
    margin-left: 0;
    display: flex;
    align-items: center;
  }

  .item-icon {
      width: sizem(16);
      margin: 0 sizem(5);
    }

  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(327);
    top: sizem(336);
    left: sizem(0);
    object-fit: cover;
    position: absolute;
  }

  // begin
  .swipe-fade-leave-to {
    opacity: 0;
    z-index: 0;
  }
  // end
  .swipe-fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .swipe-fade-enter-active {
    transition: all 0.5s ease;
  }

  .swipe-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  // begin
  // .swipe-left-leave-to {
  //   margin-left: -100vw;
  //   z-index: 0;
  // }
  // // end
  // .swipe-left-enter {
  //   opacity: 0.5;
  //   margin-left: 0;
  //   z-index: 1;
  // }

  // .swipe-left-enter-active {
  //   transition: all 0.5s ease;
  // }

  // .swipe-left-leave-active {
  //   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  // }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    // &:nth-child(1) {
    //   z-index: 1;
    //   // opacity: 1;
    // }

    // &.base {
    //   z-index: 1;
    //   opacity: 1;
    // }
    // &.active {
    //   z-index: 2;
    //   // opacity: 1;
    // }
    .slide-name {
      right: auto;
      top: auto;
      bottom: 1.2rem;
      right: 1.2rem;
      font-size: sizem(15);
      color: #fff;
    }

    .slide-desc {
      right: auto;
      top: auto;
      bottom: 1.2rem;
      left: 1.2rem;
      font-size: sizem(15);
      color: #fff;
    }
  }

  .pagination {
    width: auto;
    bottom: size(91);
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: "";
        width: 60%;
        height: 60%;
        display: block;
        background: #004ea2;
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
          content: "";
          width: 100%;
          height: 100%;
          display: block;
          background: #004ea2;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 0%;
          // transform: translateY(-50%);
          left: 0%;
          transform: scale(1);
        }
      }
    }
  }

  .swipe-btns {
    width: 100%;
    left: 0%;
    .prev-btn,
    .next-btn {
      font-size: sizem(15);
      // background-color: rgba(0, 0, 0, 0.34);
      &::before {
      }
      &::after {
        border-color: #fff;
        border-width: 0.15em 0.15em 0 0;
        animation: btn 0.5s ease-in-out infinite alternate;
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from "@/utils";
import slider from "@/mixins/slider.js";
import info from "@/info";

export default {
  name: "section3",

  mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      // blockIndex: 0,
      item_list: [
        {
          title: "工作",
          address1: "新竹工業園區",
          address2: "台元科技園區",
          time1: "5min",
          time2: "10min",
          icon: require("./s3/car.png")
        },
        {
          title: "交通",
          address1: "湖口交流道",
          address2: "五楊高架橋",
          time1: "3min",
          time2: "10min",
          icon: require("./s3/car.png")
        },
        {
          title: "商圈",
          address1: "仁和商圈",
          address2: "便利商店7-11",
          time1: "1min",
          time2: "3min",
          icon: require("./s3/walk.png")
        },
        {
          title: "校園",
          address1: "華興國小",
          address2: "中正國中",
          time1: "8min",
          time2: "5min",
          icon: require("./s3/walk.png")
        },
        {
          title: "公園",
          address1: "華興公園",
          address2: "中華公園",
          time1: "3min",
          time2: "6min",
          icon: require("./s3/walk.png")
        }
      ],
      slideList: [
        {
          img: require("./mobile/03/slider_1.jpg"),
          name: "台元科技園區",
          title: "工作",
          icon: require("./s3/car.png"),
          desc1: "新竹工業園區",
          desc2: "5min",
          desc3: "台元科技園區 ",
          desc4: "10min"
        },
        {
          img: require("./mobile/03/slider_2.jpg"),
          name: "湖口交流道",
          title: "交通",
          icon: require("./s3/car.png"),
          desc1: "湖口交流道",
          desc2: "3min",
          desc3: "五楊高架橋",
          desc4: "10min"
        },
        {
          img: require("./mobile/03/slider_3.jpg"),
          name: "仁和商圈",
          title: "商圈",
          icon: require("./s3/walk.png"),
          desc1: "仁和商圈",
          desc2: "1min",
          desc3: "便利商店7-11",
          desc4: "3min"
        },
        {
          img: require("./mobile/03/slider_4.jpg"),
          name: "中正國中",
          title: "校園",
          icon: require("./s3/walk.png"),
          desc1: "華興國小",
          desc2: "8min",
          desc3: "中正國中",
          desc4: "5min"
        },
        {
          img: require("./mobile/03/slider_5.jpg"),
          name: "中華公園",
          title: "公園",
          icon: require("./s3/walk.png"),
          desc1: "華興公園",
          desc2: "3min",
          desc3: "中華公園",
          desc4: "6min"
        },
        {
          img: require("./mobile/03/slider_6.jpg"),
          name: "華興公園",
          title: "公園",
          icon: require("./s3/walk.png"),
          desc1: "華興公園",
          desc2: "3min",
          desc3: "中華公園",
          desc4: "6min"
        }
      ]
    };
  },

  methods: {},

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {
    current() {
      return this.slideList[this.slideIndex];
    }
  }
};
</script>
