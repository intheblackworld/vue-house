<template>
  <div>
    <div class="section10">
      <transition-group name="swipe-fade" data-aos="fade-down" data-aos-delay="600">
        <div class="title absolute" v-for="(slide, index) in slideList" :key="slide.img" v-html="slide.title" v-show="slideIndex === index">
        </div>
      </transition-group>
      <div class="desc absolute" data-aos="fade-down" data-aos-delay="700">
        精品2-4房 東區指標 閃耀登場
      </div>
      <div class="swipe absolute" data-aos="fade-up" data-aos-delay="800">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <div v-for="(slide, i) in slideList" :key="slide.img" :class="`swipe-item absolute ${slideIndex === i ? 'active' : ''} ${(slideIndex === (i + 1) || slideIndex === (i - slideList.length + 1)) ? 'base' : ''}`">
            <img :src="slide.img" alt="" class="swipe-item">
          </div>
          <!-- <div class="pagination absolute flex-ac">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div> -->
          <div class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decIndex">
              <img src="./s6/l.png" alt="">
              <svg class="progress absolute" width="75" height="75" viewBox="0 0 120 120">
                <!-- <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" stroke-width="4" /> -->
                <circle :class="`dec_circle progress__value ${direction === 'dec' ? 'show' : ''}`" cx="60" cy="60" r="54" fill="none" stroke="#006699" stroke-width="3" />
              </svg>
            </div>
            <div class="next-btn" @click="addIndex">
              <img src="./s6/r.png" alt="">
              <svg class="progress absolute" width="75" height="75" viewBox="0 0 120 120">
                <!-- <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" stroke-width="4" /> -->
                <circle :class="`add_circle progress__value ${direction === 'add' ? 'show' : ''}`" cx="60" cy="60" r="54" fill="none" stroke="#006699" stroke-width="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width: size(1920);
  height: size(1080);
  min-height: size(1080);
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

.swipe {
  width: size(1266);
  height: size(712);
  min-height: size(712);
  top: size(0);
  right: 0;
  left: 0;
  margin: 0 auto;
  object-fit: cover;
}

.swipe-wrap {
  width: 100%;
  height: 100%;
  // overflow: hidden;
}

.swipe-item {
  width: 100%;
  height: 100%;
  opacity: 0;
  left: 0;
  transition: opacity 1s ease-in-out;
  z-index: 0;

  img {
    width: 100%;
  }

  &:nth-child(1) {
    z-index: 1;
    opacity: 1;
  }

  &.base {
    z-index: 1;
    opacity: 1;
  }
  &.active {
    z-index: 2;
    opacity: 1;
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
  width: 130%;
  left: -15%;
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

    img {
      width: size(72);
      opacity: 0.5;
    }
  }
}
.title {
  width: size(922);
  height: size(110);
  padding-top: size(10);
  top: size(730);
  right: 0;
  left: 0;
  margin: 0 auto;
  background-image: url('./s10/title.png');
  background-size: cover;
  font-size: size(49);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: size(6.86);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  width: size(620);
  top: size(845);
  right: 0;
  left: 0;
  margin: 0 auto;
  font-size: size(41);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.96;
  letter-spacing: size(5.74);
  text-align: center;
  color: #000000;
  white-space: nowrap;
}

.ink-1 {
  height: size(957);
  top: size(0);
  right: size(-400);
}

.ink-2 {
  height: size(1341);
  top: size(-200);
  left: size(-600);
}

.opacity-3-bg {
  opacity: 0.3;
}

.progress {
  width: size(75);
  transform: rotate(-90deg) translateY(-1.5px);
}

.progress__value {
  stroke-dasharray: 339.292;
  stroke-dashoffset: 339.292;
  transition: stroke-dashoffset 0.05s ease;
  animation: circle_animate 5s ease 0s infinite;
  opacity: 0;
  &.show {
    opacity: 1;
  }
}

@keyframes circle_animate {
  @for $i from 1 through 100 {
    #{$i * 1%} {
      stroke-dashoffset: calc(339.292 - #{$i * 3.39});
    }
  }
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
  .section10 {
    width: 100vw;
    height: sizem(400);
    min-height: sizem(300);
    max-height: sizem(812);
    min-height: auto;
  }
  .img {
    display: none;
  }

  .swipe {
    width: 100vw;
    height: sizem(210);
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
    background: #4a649f;
    img {
      height: auto;
      position: absolute;
      bottom: 0;
    }
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
    left: 0;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: sizem(25);
      padding: 0;
      cursor: pointer;
      img {
        display: block;
        width: sizem(25);
        opacity: 1;
      }
    }
    .progress {
      display: none;
    }
  }

  .title {
    width: sizem(340);
    height: sizem(84);
    top: sizem(240);
    right: sizem(0);
    left: 0;
    margin: 0 auto;
    padding-top: sizem(10);
    background-image: url('./s9/title.png');
    background-size: 100% 100%;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(3.5);
    text-align: center;
    color: #ffffff;
  }

  .desc {
    width: sizem(310);
    top: sizem(320);
    right: sizem(0);
    left: 0;
    margin: 0 auto;
    font-size: sizem(20);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(2.8);
    text-align: left;
    color: #000000;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

import slider from '@/mixins/slider.js'
import $ from 'jquery'

export default {
  name: 'section10',

  mixins: [slider],

  components: {},

  data() {
    return {
      isMobile,
      isTablet,
      slideList: [
        {
          img: require('./s10/1獨立會館一樓 - 接待大廳.jpg'),
          title: '獨立會館一樓 - 接待大廳',
        },
        {
          img: require('./s10/2獨立會館一樓 – 閱覽室.jpg'),
          title: '獨立會館一樓 – 閱覽室',
        },
        {
          img: require('./s10/3獨立會館二樓 – 健身房.jpg'),
          title: '獨立會館二樓 – 健身房',
        },
        {
          img: require('./s10/4獨立會館二樓 – 遊戲室.jpg'),
          title: '獨立會館二樓 – 遊戲室',
        },
        {
          img: require('./s10/5獨立會館三樓 –  生活講堂.jpg'),
          title: '獨立會館三樓 –  生活講堂',
        },
        {
          img: require('./s10/6獨立會館三樓 –  宴會廳 .jpg'),
          title: '獨立會館三樓 –  宴會廳',
        },
      ],
    }
  },

  methods: {
    // removeAnimate(val) {
    //   if (val === 'add') {
    //     this.addAnimate = false
    //   } else {
    //     this.decAnimate = false
    //   }
    // },
  },

  created() {},

  mounted() {},

  watch: {
    // direction(val) {
    //   if (val === 'add') {
    //     $('.add_circle').css('opacity', 1)
    //     $('.dec_circle').css('opacity', 0)
    //   } else {
    //     console.log(val, 'dec')
    //     $('.add_circle').css('opacity', 0)
    //     $('.dec_circle').css('opacity', 1)
    //   }
    // }
  },

  computed: {},
}
</script>
