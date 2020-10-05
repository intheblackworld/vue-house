<template>
  <div>
    <div class="section6">
      <div class="content absolute">
        <img src="./s5/bg.png" alt="" class="img absolute">
        <img src="./s6/title.png" alt="" class="title absolute">
        <h3 class="subtitle absolute">
          1800坪基地<br />都心帝標炫耀品味
        </h3>
        <img src="./s6/hr.png" alt="" class="hr absolute">
        <h3 class="desc absolute">
          用大型造鎮的氣度，顛覆新營所有住宅思維，一層四戶均質邊間，三面採光城景盡收眼底，灰白雙色豪邁奔放出大氣風光，15樓都心帝標收藏人生應有的超凡品味。
        </h3>
        <div class="icons absolute flex-ac">
          <img src="./s6/icon.png" :class="`icon-btn ${slideIndex === 0 ? 'active' : ''}`" @click="goTo(0)">
          <img src="./s6/icon.png" :class="`icon-btn ${slideIndex === 1 ? 'active' : ''}`" @click="goTo(1)">
          <img src="./s6/icon.png" :class="`icon-btn ${slideIndex === 2 ? 'active' : ''}`" @click="goTo(2)">
        </div>
      </div>
      <div class="swipe absolute" data-aos="fade-right" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="name absolute">{{slide.name}}</div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <div class="prev-btn" @click="decIndex"></div>
            <div class="next-btn" @click="addIndex"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: size(1920);
  height: 100vh;
  background-color: #eb5b29;
  min-height: size(900);
  overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  //min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    top: 0;
    left: auto;
    right: 0;
    height: auto;
  }
}

.content {
  width: 100%;
  right: 0;
  top: 0;
}

.img {
  width: size(540);
  top: size(0);
  right: size(221);
}

.title {
  width: size(406);
  top: size(209);
  right: size(202);
}

.subtitle {
  width: size(456);
  top: size(320);
  right: size(173);
  font-size: size(51.6);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(6.19);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.hr {
  width: size(598);
  top: size(462);
  right: size(98);
}

.desc {
  width: size(477);
  top: size(490);
  right: size(156);
  font-size: size(26);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.89;
  letter-spacing: normal;
  text-align: left;
  color: #491500;
}
.icons {
  width: size(290);
  right: size(260);
  top: size(774);
}
.icon-btn {
  cursor: pointer;
  width: size(83);
  margin: 0 10px;
  opacity: 0.4;
  transition: all 0.3s;
  &.active {
    opacity: 1;
  }
}

.swipe {
  width: size(1160);
  height: 100vh;
  min-height: size(900);
  top: size(0);
  left: 0;
  margin: 0 auto;
  object-fit: cover;
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
  }

  .name {
    right: 20px;
    bottom: 20px;
    font-size: size(15.7);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: size(0.89);
    text-align: center;
    color: #ffffff;
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
}

.pagination {
  width: auto;
  bottom: 20px;
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
    width: 20px;
    height: 20px;
    border-radius: 20px;
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
        left: 20%;
        transform: scale(1);
      }
    }
  }
}

.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  z-index: 3;

  .prev-btn,
  .next-btn {
    width: size(20);
    cursor: pointer;
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
  .section6 {
    width: 100vw;
    height: sizem(660);
    min-height: auto;
    max-height: initial;
  }
  /*
  width: size(1920);
  height: 100vh;
  max-height: 56vw;
  min-height: size(900);*/
  .img {
    width: sizem(375);
    top: sizem(0);
    right: sizem(0);
  }

  .title {
    width: sizem(153);
    top: sizem(38);
    right: sizem(111);
  }

  .subtitle {
    width: sizem(221);
    top: sizem(80);
    right: sizem(77);
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(3);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .hr {
    width: sizem(310);
    top: sizem(160);
    right: sizem(33);
  }

  .desc {
    width: sizem(310);
    top: sizem(177);
    right: sizem(33);
    font-size: sizem(15);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #491500;
  }
  .icons {
    display: none;
  }

  .swipe {
    width: 100vw;
    height: sizem(350);
    // height: calc(100vh - 63px);
    top: sizem(310);
    left: 0;
    object-fit: cover;
  }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  // .swipe-item {
  //   width: 100%;
  //   height: 100%;
  //   left: 100%;
  //   transition: left 1s ease-in-out;
  //   z-index: 0;
  //   object-fit: cover;

  //   &.base {
  //     z-index: 1;
  //     left: 0;
  //   }
  //   &.active {
  //     z-index: 2;
  //     left: 0;
  //   }
  // }

  .pagination {
    width: auto;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
    display: none;
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
    padding: 0 0;
    z-index: 3;

    .prev-btn,
    .next-btn {
      font-size: size-m(10);
      cursor: pointer;
      height: 100%;
      width: 3em;
      display: flex;
      align-items: center;
      justify-items: center;
      padding: 0 1em;
    }
    .prev-btn::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 1em 1em 1em 0;
      border-color: transparent #fff transparent transparent;
    }
    .next-btn::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 1em 0 1em 1em;
      border-color: transparent transparent transparent #fff;
    }
  }

  .name {
    right: 10px !important;
    bottom: 10px !important;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section6',

  mixins: [slider],

  components: {},

  data() {
    return {
      isMobile,
      isTablet,
      contentIndex: 0,
      slideList: [
        {
          img: require('./s6/1.jpg'),
          name: '優越未來新地標',
        },
        {
          img: require('./s6/2.jpg'),
          name: '優越未來新地標',
        },
        {
          img: require('./s6/3.jpg'),
          name: '優越未來新地標',
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
