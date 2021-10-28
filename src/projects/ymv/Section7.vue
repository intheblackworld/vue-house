<template>
  <div class="section7">
    <div class="title" data-aos="fade" data-aos-delay="200">頂尖團隊共創經典</div>
    <div class="border" data-aos="fade-left" data-aos-delay="400"></div>
    <h3 class="desc" data-aos="fade" data-aos-delay="600">
      邀集豪宅推手齊心擘劃最動人建築「陽明迴鄉」
    </h3>
    <div class="item-list flex-as flex-jb" v-if="isPC">
      <div v-for="(slide, i) in slideList1" :class="`item`" :key="slide.img + i + 'item'">
        <picture>
          <source :srcset="slide.webp" type="image/webp" />
          <source :srcset="slide.img" type="image/jpeg" />
          <img :src="slide.img" :alt="info.caseName" class="item-img">
        </picture>
        <p class="item-label" v-html="slide.label"></p>
        <p class="item-title" v-html="slide.title"></p>
        <p class="item-work" v-html="slide.work"></p>
      </div>
    </div>
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="800" v-if="isMobile">
      <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(1)" v-touch:swipe.right="() => addMultiIndex(1)">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img + i" :class="`swipe-item absolute`" @click="addMultiIndex(1)">
            <picture>
              <source media="(min-width: 767px)" :srcset="slide.webp" type="image/webp" />
              <source media="(min-width: 767px)" :srcset="slide.img" type="image/jpeg" />
              <source media="(max-width: 767px)" :srcset="slide.webpm" type="image/webp" />
              <source media="(max-width: 767px)" :srcset="slide.imgm" type="image/jpeg" />
              <img :src="slide.img" :alt="info.caseName" class="">
            </picture>
            <p class="item-label" v-html="slide.label"></p>
            <p class="item-title" v-html="slide.title"></p>
            <p class="item-work" v-html="slide.work"></p>
          </div>
        </transition-group>
      </div>
      <div class="prev-btn" @click="decMultiIndex(1)"></div>
      <div class="next-btn" @click="addMultiIndex(1)"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section7 {
  width: 100%;
  height: size(1080);
  min-height: size(1080);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
 // background-color: #f7f8f8;

  @include md {
    width: 100vw;
    height: sizem(730);
    min-height: auto;
    max-height: initial;
    overflow: visible;
  }
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;
}

.title {
  @include img_l(920, 40, 490, 200, 40, 87.5);
  font-size: size(57);
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing:0.06em;
  text-align: center;
  color: #00422d;
  white-space: nowrap;

  @include md {
    font-size: sizem(25);
    line-height:1.6;
  text-align: left;
  }
}

.border {
  @include div_l(1668, 1, 135, 126, 315, 0, 85, 30);
  border-bottom: 2px solid #00422d;
  @include md {
    border-right: none;
  }
}

.desc {
  @include img_r(920, 149, 483, 314, 92, 30);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.77;
  letter-spacing: normal;
  text-align: center;
  color: #000;

  @include md {
    font-size: sizem(14);
    line-height: 2.07;
  text-align: left;
  }
}

.item-list {
  @include img_c_pc(1668, 224);
}

.item {
  width: size(393);
  .item-img {
    width: 100%;
  }
}

.item-label {
  font-size: size(28);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: normal;
  text-align: center;
  color: #595757;

  @include md {
    font-size: sizem(16);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.94;
    letter-spacing: normal;
    text-align: center;
    color: #595757;
  }
}

.item-title {
  font-size: size(40);
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: size(1.6);
  text-align: center;
  color: #00422d;
  @include md {
    font-size: sizem(20);
    line-height: 1.94;
    letter-spacing: sizem(0.8);
  }
}
.item-work {
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.34;
  letter-spacing: size(2.8);
  text-align: left;
  color: #595757;
  @include md {
    font-size: sizem(12);
    line-height: 1.94;
    letter-spacing: normal;
    text-align: center;
  }
}

@keyframes leaf {
  to {
    transform: skew(0) rotate(0deg);
  }
}

.sty_1 {
  @include img_r(835, -50, 171, 139, -20, 0);
  transform: skewX(-3deg);
  transform-origin: 100% 100%;
  animation: leaf 5s ease-in-out alternate infinite;
}

/* Swipe */
.swipe {
  @include div_r(1602, 714, 103, 159, 275, 412, 150, 50);
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
  transition: all 1s ease;
}

.swipe-fade-leave-active {
  transition: all 1s ease;
}

.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;

  @include md {
    width: 100%;
    height: 100%;
    overflow: visible;
  }
}

.swipe-item {
  width: 100%;
  height: 100%;
  z-index: 0;

  @include md {
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @include md {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slide-name {
    left: 1.2em;
    bottom: 0.6em;
    color: #fff;
    font-size: size(16);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #000;

    @include md {
      left: 1.2rem;
      bottom: 0.6rem;
      top: auto;
      font-size: sizem(12);
    }
  }
}

.pagination {
  width: auto;
  bottom: size(238);
  left: auto;
  right: size(186);
  margin: 0 auto;
  justify-content: center;

  @include md {
    width: auto;
    bottom: size(91);
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }
}

.pagination-dot {
  padding: 5px;
  margin: 0 0px;
  cursor: pointer;
  z-index: 4;

  @include md {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;
  }

  span {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 0px;
    box-shadow: 0 0 0 1px #c9a063;
    position: relative;
    background-color: transparent;
    transition: all 0.5s;

    @include md {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;
    }

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: transparent;
      border-radius: 20px;
      opacity: 1;
      position: absolute;
      top: 20%;
      // transform: translateY(-50%);
      left: 20%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);

      @include md {
        content: '';
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
    }
    &.active {
      box-shadow: none;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #c9a063;
        border-radius: 0px;
        opacity: 1;
        position: absolute;
        top: 0%;
        box-shadow: 0 0 0 1px #c9a063;
        // transform: translateY(-50%);
        left: 0%;
        transform: scale(1);

        @include md {
          content: '';
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
}

.prev-btn {
  top: 0;
  left: 0;
  @include md {
    left: sizem(-45);
  }
}

.next-btn {
  top: 0;
  right: 0;

  @include md {
    right: sizem(-45);
  }
}
.prev-btn,
.next-btn {
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 2em;
  font-size: size(40);
  cursor: pointer;
  // &::before {
  //   content: '';
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   top: 0;
  //   left: 0;
  //   transform: translateX(100%);
  //   background-color: #0004;
  //   transition: all 0.3s;
  // }
  &::after {
    content: '';
    width: 1em;
    height: 1em;
    position: absolute;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.75em);
    border: solid #fff;
    border-width: 2px 2px 0 0;
    transform: rotate(45deg) translate(-10%, 10%);
  }
  &:hover:before {
    transform: translateX(0%);
  }
  &:hover:after {
    animation: btn 0.5s ease-in-out infinite alternate;
  }

  @include md {
    width: 2em;
    font-size: sizem(20);
    &::before {
      background-color: #cc5b4e00;
    }
    &::after {
      width: 1em;
      height: 1em;
      border-color: #00422d;
      border-width: 2px 2px 0 0;
      animation: btn 0.5s ease-in-out infinite alternate;
    }
  }
}
.prev-btn {
  transform: scaleX(-1);
}
// }
@keyframes btn {
  to {
    transform: rotate(45deg) translate(10%, -10%);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'

export default {
  name: 'section7',

  mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideIndex1: 0,
      slideList1: [
        {
          img: require('./pc/s7/01.jpg'),
          webp: require('./webp/s7/01.webp'),
          label: '完美生活推動者.寶程國際',
          title: '陳靜玉/董事長',
          work: '',
        },
        {
          img: require('./pc/s7/02.jpg'),
          webp: require('./webp/s7/02.webp'),
          label: '建築新銳.寶程國際',
          title: '林嘉宸/建築總規劃',
          work: '',
        },
        {
          img: require('./pc/s7/03.jpg'),
          webp: require('./webp/s7/03.webp'),
          label: '蔡家欣建築師事務所',
          title: '蔡家欣/建築師',
          work: '代表作品：<br />天閣酒店、台灣大學-學人會館、大安區金華逸',
        },
        {
          img: require('./pc/s7/04.jpg'),
          webp: require('./webp/s7/04.webp'),
          label: '森恒設計',
          title: '林世昌/總監',
          work: '代表作品：河南鄭州飯店、板橋兆璞開禧、<br />內湖君臨、南京葛洲壩會所',
        },
      ],
    }
  },
  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
