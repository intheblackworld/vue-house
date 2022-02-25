<template>
  <div class="section2">
    <div class="container">
      <div class="shin-lan-title-v shin-lan-title-h-m title" data-aos="fade">
        關於<span data-aos="flip-right"></span>我們
      </div>
      <div class="mid">
        <div class="subtitle">
          欣聯建設Shin-Lan 合聯營造Holan
        </div>
        <div class="desc">
          我們深信「一間厝，一世情」，所以一磚一瓦都是精心刻畫，嚴謹手鑄；從規劃到營造一條龍的完整構築，居住者的需求與思維，到豐富建築與空間的美學輪廓，才能打動你的心。
        </div>
        <img src="../../assets/img/shin-lan/index/2/30.png" alt="" class="img30">
      </div>
      <div class="btn-more flex-c" @click="$router.push('/about_us')">
        了解更多
      </div>
      <div class="item-list flex">
        <div class="item" v-for="(item, index) in item_list"  :index="index" :key="item.desc + 'item'" @click="$router.push(item.link)">
           <div :class="`item-img`"> <img :src="item.img" alt="" /></div>
          <div class="item-desc" v-html="item.desc"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.shin-lan-title {
  color: #000; // 顏色
  font-size: size(47); // size(47)
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: 0.06em;
  text-align: left;
  width: 1.2em;
  span {
    display: block;
    width: 3em;
    height: size(1);
    background: currentColor;
    margin: 0.2em 0 0.1em 0;
    transform-origin: 0 0;
  }

  &.gold {
    color: #b18863;
  }

  @include md {
    color: #000; // 顏色
    font-size: size(47); // size(47)
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.06;
    letter-spacing: 0.06em;
    text-align: left;
    span {
      display: inline-block;
      width: size(1);
      height: 1em;
      background: currentColor;
      margin: -0.1em 0.15em 0.1em 0.1em;
      transform-origin: 50% 50%;
      vertical-align: middle;
    }
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section2 {
  width: 100%;
  height: size(715);
  min-height: size(715);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  background-color: rgba(17, 17, 3, 0.11);
  padding-top: size(76);

  @include md {
    width: 100vw;
    padding-top: sizem(123);
    height: sizem(733);
    min-height: auto;
    max-height: initial;
    overflow: visible;
  }
}
.container {
  width: size(1240);
  margin: 0 auto size(76);
  position: relative;
  @include md {
    width: 100%;
  }
}

.mid {
  @include img_c_pc(736, 0);

  @include md {
    width: sizem(310);
  }
}

.title {
  @include img_l_pc(67, 0, 0);

  @include md {
    @include img_l_m(186, 0, 33);
    font-size: sizem(28);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: sizem(1.68);
    text-align: left;
    color: #000;
  }
}

.subtitle {
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(1.4);
  text-align: left;
  color: #000;
  @include md {
    font-size: sizem(18);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    margin-top: sizem(50);
  }
}

.desc {
  width: size(736);
  margin-top: size(10);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: left;
  color: #000;

  @include md {
    width: sizem(310);
    margin: 0 auto;
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    // margin-top: sizem(60);
  }
}

.img30 {
  @include img_l_pc(198, 152, 0);

  @include md {
    @include img_l_m(152, 210, 0);
  }
}

.btn-more {
  @include img_r_pc(158, 151, 0);
  height: size(40);
  border: solid 1px #707070;
  font-size: size(15);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3);
  text-align: center;
  color: #000;
  cursor: pointer;
  transition: all 0.3s;

  @include md {
    @include img_c_m(160, 530);
    height: sizem(40);
    font-size: sizem(15);
  }

  &:hover {
    background-color: #000009;
    color: #fff;
  }
}

.item-list {
  @include img_c_pc(1240, 251);
  justify-content: space-between;
  // position: absolute;
  // left: 0;
  // top: auto;
  // bottom: 0;

  @include md {
    @include img_c_m(375, 315);
    overflow-x: scroll;
  }
  .item {
    width: size(240);
    transition: all 0.3s;
    cursor: pointer;

    @include md {
      width: sizem(153);
      min-width: sizem(153);
      margin-right:0.7rem;
    }

    &:hover {
    .item-img {
  img{
    transform: scale(1.2);
  }
}
    }

    .item-img {
      width: 100%;
    height: size(240);overflow: hidden;position: relative;
  img{
  width: 100%;height: 100%;
  object-fit: cover;
  vertical-align: middle;
  transition:transform 2s;
    }
    }

    .item-desc {
      font-size: size(18);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.67;
      letter-spacing: size(1.44);
      text-align: center;
      color: #000;

      @include md  {
        font-size: sizem(18);
      }
    }
  }
}

/* Swipe */
.swipe {
  @include div_c_pc(1820, 650, 250);
  object-fit: cover;

  @include md {
    @include div_c_m(320, 274, 0);
    top: auto;
    bottom: 0;
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
  transition: all 1s ease;
}

.swipe-fade-leave-active {
  transition: all 1s ease;
}

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

  .slide-name {
    right: 1em;
    bottom: 1em;
    color: #fff;
    font-size: size(18);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #000;

    @include md {
      font-size: sizem(12);
      right: 0.6em;
      bottom: 0.6em;
    }
  }
}

.pagination {
  width: auto;
  bottom: size(10);
  right: auto;
  left: size(10);
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
  margin: 0 5px;
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
    width: 15px;
    height: 15px;
    border-radius: 0px;
    box-shadow: 0 0 0 1px #fff;
    position: relative;
    background-color: #fff;
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

      @include md {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: translateX(100%);
        background-color: #0004;
        transition: all 0.3s;
      }
    }

    &::after {
      @include md {
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
    }
    &.active {
      box-shadow: none;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #bcdbdb;
        border-radius: 0px;
        opacity: 1;
        position: absolute;
        top: 0%;
        box-shadow: 0 0 0 1px #bcdbdb;
        // transform: translateY(-50%);
        left: 0%;
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
    width: 46em;
    font-size: size(20);
    cursor: pointer;

    @include md {
      font-size: sizem(15);
    }
    &::before {
    }
    &::after {
      content: '';
      width: 1em;
      height: 1em;
      position: absolute;
      top: calc(50% - 0.5em);
      left: calc(97% - 0.75em);
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
  // .swipe-btns {
  //   width: 116%;
  //   left: -8%;
  .prev-btn,
  .next-btn {
    font-size: sizem(10);
    &::before {
      background-color: #cc5b4e00;
    }
    &::after {
      border-color: #fff;
      border-width: 0.15em 0.15em 0 0;
      animation: btn 0.5s ease-in-out infinite alternate;
    }
  }
  // }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'

export default {
  name: 'section2',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      item_list: [
        {
          img: require('../../assets/img/shin-lan/index/2/1.jpg'),
          desc: '誠信服務',
          link: '/about_us/#section3',
        },
        {
          img: require('../../assets/img/shin-lan/index/2/2.jpg'),
          desc: '堅持品質',
          link: '/about_us/#container2',
        },
        {
          img: require('../../assets/img/shin-lan/index/2/3.jpg'),
          desc: '專業創新',
          link: '/about_us/#container3',
        },
        {
          img: require('../../assets/img/shin-lan/index/2/4.jpg'),
          desc: '永續經營',
          link: '/about_us/#container4',
        },
        {
          img: require('../../assets/img/shin-lan/index/2/5.jpg'),
          desc: '營造基石',
          link: '/about_us/#section5',
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
