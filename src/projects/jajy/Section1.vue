<template>
  <div class="section1">
    <div class="content">
      <div class="title" v-html="slideList[slideIndex].title">
      </div>
      <div class="subtitle" v-html="slideList[slideIndex].subtitle">
      </div>
      <div class="desc" v-html="slideList[slideIndex].desc"></div>
    </div>
    <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt>
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div v-if="isPC" class="pagination absolute flex-ac" data-aos="fade" data-aos-delay="200">
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
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.section1 {
  width: 100%;
  height: 100vh;
  position: relative;
 // background: url("./s2/pc.png");
}

.title {
  font-weight: bold;
  color: #E2C46C;
  font-size:2em;
}

.subtitle {
  font-size:1.5em;
  font-weight: bold;
  margin: 0 auto .3em;
}

.desc {
  font-family:  'Noto Sans TC', sans-serif;

}


/* Swipe */
.swipe {
  width: 100%;
  height: 100vh;
  z-index: 1;
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

.swipe-wrap {
  width: 100%;
  height: 100%;
}

.swipe-item {
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    width: 100%;
  }

  .slide-name {
    font-family: "Noto Sans TC";
    left: 0;
    width: 100%;
    bottom: 1em;
    color: #fff;
    font-size: size(18);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: center;
    text-shadow: 0 0.3em 1em #0003 ,0 0 .2em #000;
  }
}

.pagination {
  width: auto;
  bottom:size(15);
  right: 0;
  left: 0;
  margin: 0 auto;
  justify-content: center;
  font-size: size(15);
}

.pagination-dot {
  padding:0.4em;
  margin: 0 0.4em;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 0.8em;
    height:0.8em;
    border-radius: 0.8em;
    position: relative;
    background-color: #fff9;
    transition: all 0.5s;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      background: #fff;
      border-radius: 50%;
      opacity: 1;
      position: absolute;
      top: 0;
      // transform: translateY(-50%);
      left: 0;
      transition: all 0.3s;
      transform-origin: 50% 50%;
      transform: scale(0);
    }
    &.active {
      &::before {
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
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateX(100%);
      background-color: #0004;
      transition: all 0.3s;
    }
    &::after {
      content: "";
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

@keyframes btn {
  to {
    transform: rotate(45deg) translate(10%, -10%);
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
  .section1 {
    width: 100%;
    height: auto;
    min-height: sizem(667);
    max-height: sizem(667);
  }


  .mouse {
    display: none;
  }

  /* Swipe */
  .swipe {
    position: relative;
    width:sizem(375);
    height: sizem(667);
    margin: 0 auto 0;
    box-shadow: 0.5vw 0.5vw 1.5vw #0006;
  }
  


  .swipe-item {
    .slide-name {
      font-size: sizem(12);
    }
  }


  .swipe-btns {
    .prev-btn,
    .next-btn {
      font-size: sizem(15);
      background-color: rgba(0, 0, 0, 0);
      &::before {display: none;
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
  name: "section1",

  mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      dialogImg: null,
      showMask: false,
      slideList: [
        {
          img: isMobile?require("./s1/slider/slider_1_m.jpg"):require("./s1/slider/slider_1.jpg"),
          name: "",
          area: "",
        },
        {
          img: isMobile?require("./s1/slider/slider_2_m.jpg"):require("./s1/slider/slider_2.jpg"),
          name: "",
          area: "",
        }
      ]
    };
  },

  methods: {
    showDialog() {
      this.isDialog = true;
      this.showMask = true;
      this.dialogImg = this.slideList[this.slideIndex].full;
    },

    handleScroll() {
      this.showMask = false;
    }
  },

  created() {},

  mounted() {},

  computed: {},

  watch: {}
};
</script>
