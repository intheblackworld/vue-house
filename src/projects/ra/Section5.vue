<template>
  <div>
    <div class="section5">
      <img
        src="./s5/bg1_02.png"
        alt=""
        class="bg-img"
      >
      <div class="txt absolute">
      <h3
        class="label1 active"
      >人文區
      </h3>
      <h3
        class="label2"
      >大台北交通</h3>
      <h3
        class="title"
        data-aos="fade-down"
        data-aos-delay="600"
      >享大安森林第一環<br />
        學府搖籃的正軸心</h3>
      <p
        class="desc"
        data-aos="fade-down"
        data-aos-delay="700"
      >【瑞安自在】緊鄰台北市立圖書館、文大城區部；兩大師範名校「師大、台北教育大學」等距抵達;台大近在心尺,加上知名中小學林立,所累積的文教風氣,不僅堪稱大安森林之首,放眼北市核心,也鮮少精華之地能像「瑞安街」如此奢侈、一次凝聚高等學府的雅量。
      </p>
      </div>
      <div
        class="swipe absolute"
        data-aos="fade-right"
        data-aos-delay="200"
        @mouseenter.stop="toggleTimer = false"
        @mouseleave.stop="toggleTimer = true"
      >
        <div class="swipe-wrap relative">
          <img
            v-for="(slide, i) in slideList"
            :src="slide.img"
            :key="slide.img"
            :class="`swipe-item absolute ${slideIndex === i ? 'active' : ''} ${(slideIndex === (i + 1) || slideIndex === (i - slideList.length + 1)) ? 'base' : ''}`"
          >
          <div class="pagination absolute flex-ac">
            <div
              :class="`pagination-dot`"
              v-for="(slide, index) in slideList"
              :key="slide.img + '-dot'"
              @click="goTo(index)"
            ><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height: 100vh;
  min-height: size(800);
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
  top: 0;
  left: auto;
  right: 0;
  height: auto;
  }
}

.label1,
.label2{font-size: size(43);letter-spacing: 0.25em;text-indent: 0.125em;
  line-height: 1.6;position: relative;
  font-stretch: normal;
  font-style: normal;
  background-color: #ffffff;
  color: #a68367;
  width: 8em;cursor: pointer;
 transition: all 0.3s;
 margin: 0 0 0.5em;
  &::after {
    content: '';
    position: absolute;
    width:100%;
    height:100%;
    top: size(0);
    left: size(0);
    border: 1px solid #fff;
 transition: all 0.3s;
    //animation: trans 0.5s 2s ease-in-out forwards;
  }
 &.active,&:hover{  
  background-color: #a68367;
  color: #ffffff;
  transform: translate(-0.2em, -0.2em);
  &::after {
  transform: translate(0.2em, 0.2em);
    border: 1px solid #a68367;
  }

  }
  }  


.txt {
  width: 26%;
  height:100%;
  top:0;
  right:calc(3.5% + 50px);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #000;z-index: 2;
  display: flex;align-items:center;flex-direction:column;justify-content:center;
}
.title {
  font-size:1.8em;
  font-weight: bold;
  line-height: 1.34;
  letter-spacing: 0.08em;
  text-align: center;
  color: #a68367;
  white-space: nowrap;
  margin: 0.5em 0 0.5em 0;
}

.desc {
  line-height: 2.05;
  letter-spacing: 0.04em;
  text-align: justify;
  margin:0 0 3em 0;
}

.swipe {
  width:calc(66vw - 50px);
  height: 100vh;
  min-height: size(900);
  top: 0;
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
  left: 100%;
  object-fit: cover;
  transition: left 1s ease-in-out;
  z-index: 0;

  &:nth-child(1) {
    z-index: 1;
    left: 0;
  }

  &.base {
    z-index: 1;
    left: 0;
  }
  &.active {
    z-index: 2;
    left: 0;
  }
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
  .section5 {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: auto;
    // background-image: url('./s1/bg.jpg');
    // background-size: cover;
    // background-attachment: fixed;
  }

  .label1 {
    width: size-m(147);
    height: size-m(40);
    top: size-m(54);
    left: size-m(33);
    background-color: #a68367;
    font-size: size-m(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.15;
    letter-spacing: 4.8px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    z-index: 3;

    &::after {
      content: '';
      position: absolute;
      width: size-m(147);
      height: size-m(40);
      top: size(0);
      left: size(0);
      background-color: transparent;
      box-shadow: 0 0 0 1px #a68367;
      animation: trans 0.5s 2s ease-in-out forwards;
    }
  }

  .label2 {
    width: size-m(147);
    height: size-m(40);
    top: size-m(54);
    right: size-m(34);
    font-size: size-m(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.15;
    letter-spacing: 4.8px;
    text-align: center;
    color: #a68367;
    background-color: #ffffff;
  }

  .title {
    top: size-m(122);
    right: auto;
    left: size-m(86);
    font-size: size-m(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 3px;
    text-align: center;
    color: #a38057;
  }

  .desc {
    width: size-m(310);
    top: size-m(218);
    right: auto;
    left: size-m(33);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 0.6px;
    text-align: left;
    color: #04040c;
  }

  .swipe {
    width: 100vw;
    height: size-m(205);
    top: size-m(402);
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
    left: 100%;
    transition: left 1s ease-in-out;
    z-index: 0;

    &.base {
      z-index: 1;
      left: 0;
    }
    &.active {
      z-index: 2;
      left: 0;
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
    display: none;

    .prev-btn,
    .next-btn {
      width: size-m(15);
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import Parallax from 'vue-parallaxy'
import slider from '@/mixins/slider.js'

export default {
  name: 'section5',

  mixins: [slider],

  components: {
    Parallax,
  },

  data() {
    return {
      isMobile,
      isTablet,
      slideList: [
        {
          img: require('./s5/1.jpg'),
        },
        {
          img: require('./s5/2.jpg'),
        },
        {
          img: require('./s5/3.jpg'),
        },
        {
          img: require('./s5/4.jpg'),
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
