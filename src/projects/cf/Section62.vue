<template>
  <div>
    <div :class="`section62 ${slideList[slideIndex].mode}`">
      <div
        class="pagination absolute flex-ac"
        data-aos="fade-up"
        data-aos-delay="200"
        v-if="isPC"
      >
        <div
          :class="`pagination-dot`"
          v-for="(slide, index) in slideList"
          :key="slide.img + '-dot'"
          @click="goTo(index)"
        ><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div>
      <h3
        :class="`title absolute`"
        data-aos="fade-right"
        data-aos-delay="400"
      >天際風景新格局<br />時尚風格 珍稀傳家</h3>
      <div
        :class="`hr absolute`"
        data-aos="zoom-in-right"
        data-aos-delay="600"
      ></div>
      <div
        :class="`desc absolute`"
        data-aos="fade-right"
        data-aos-delay="800"
      >
        精選平實特區，這繁華與悠閒的共享之地，<br />
        春福共築大樓與別墅的和諧適居，承襲煙波飯店一貫的簡約與美學，以深灰與白色共演比例之美，以簡潔線條爬梳層次品味，美好生活的嚮往與稀有透天店鋪的價值，絕對值得世代相傳！
      </div>
      <div
        :class="`art absolute`"
        data-aos="fade-left"
        data-aos-delay="1000"
      >
        ARCHIECTURE ART
      </div>
      <div
        :class="`btn-group absolute flex-ac flex-jb`"
        data-aos="zoom-in"
        data-aos-delay="900"
      >
        <router-link
          to="/"
          tag="div"
          class="btn flex-c"
        >精品大樓
        </router-link>
        <router-link
          to="/villa"
          tag="div"
          class="btn flex-c"
        >透天別墅宅</router-link>
      </div>
      <div
        class="swipe absolute"
        data-aos="fade-up"
        data-aos-delay="0"
        @mouseenter.stop="toggleTimer = false"
        @mouseleave.stop="toggleTimer = true"
      >
        <div
          class="swipe-wrap relative"
          v-touch:swipe.left="decIndex"
          v-touch:swipe.right="addIndex"
        >
          <transition-group
            name="swipe-fade"
            mode="out-in"
          >
            <div
              v-for="(slide, i) in slideList"
              v-show="slideIndex === i"
              :key="slide.img"
              :class="`swipe-item absolute`"
            >
              <img
                :src="slide.img"
                alt=""
              >
              <div
                class="name absolute"
                v-html="slide.name"
              ></div>
            </div>
          </transition-group>
          <div
            class="swipe-btns absolute flex-ac flex-jb"
            v-if="isMobile"
          >
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

.section62 {
  width: size(1920);
  height: 100vh;
  min-height: 900px;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;

  &.light {
    .title {
      color: #333;
    }

    .hr {
      background-color: #333;
    }

    .desc {
      color: #333;
    }

    .art {
      color: #333;
    }

    .btn {
      border: solid 2px #333;
      color: #333;
      &:hover {
        background-color: #333;
        border-color: #af8680;
        color: #af8680;
      }
    }
  }
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

.title {
  width: size(434);
  top: size(181);
  right: size(397);
  font-size: size(51);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 1.03px;
  text-align: left;
  color: #ffffff;
  z-index: 2;
  transition: all 0.3s;
  white-space: nowrap;
}

.hr {
  width: size(649);
  height: 2px;
  top: size(370);
  right: size(181);
  background-color: #fff;
  z-index: 2;
  transition: all 0.3s;

  &.light {
    background-color: #333;
  }
}

.desc {
  width: size(652);
  top: size(426);
  right: size(178);
  font-size: size(16);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: size(1.76);
  text-align: left;
  color: #ffffff;
  transition: all 0.3s;
  z-index: 2;
}

.art {
  top: size(560);
  right: size(180);
  font-size: size(70.2);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(2.72);
  text-align: left;
  color: #ffffff;
  text-shadow: 0 0 2px #333;
  transition: all 0.3s;
  z-index: 2;
}

.btn-group {
  width: size(390);
  top: size(685);
  right: size(178);
  z-index: 2;

  .btn {
    width: size(190);
    height: size(43);
    border: solid 2px #fff;
    border-radius: 20px / 20px;
    cursor: pointer;
    font-size: size(21);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.69;
    letter-spacing: size(2.3);
    text-align: center;
    color: #fff;
    transition: all 0.3s;

    &:hover {
      background-color: #fff;
      border-color: #fff;
      color: #af8680;
    }
  }
}

/* Swipe */
.swipe {
  width: 100vw;
  top: 0;
  left: 0;
  height: 100vh;
  min-height: size(900);
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
    height: 100vh;
    object-fit: cover;
  }

  .name {
    right: 20px;
    bottom: 20px;
    font-size: size(14.8);
    font-weight: 500;
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
  top: size(68);
  left: auto;
  right: size(190);
  margin: 0 auto;
  justify-content: center;
  z-index: 2;
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
        width: 100%;
        height: 100%;
        display: block;
        background: #fff;
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
  .section62 {
    width: 100vw;
    height: sizem(750);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .title {
    width: sizem(210);
    top: sizem(16);
    left: sizem(35);
    right: auto;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(0.5);
    text-align: left;
    color: #ffffff;
    z-index: 2;
    transition: all 0.3s;
    white-space: nowrap;
  }

  .hr {
    width: sizem(310);
    height: 2px;
    top: sizem(105);
    right: sizem(30.5);
    background-color: #fff;
    z-index: 2;
    transition: all 0.3s;

    &.light {
      background-color: #333;
    }
  }

  .desc {
    width: sizem(310);
    top: sizem(121);
    right: sizem(30);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(1.65);
    text-align: left;
    color: #ffffff;
    transition: all 0.3s;
    z-index: 2;
  }

  .art {
    top: sizem(334);
    right: sizem(26);
    font-size: sizem(35.2);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(0.72);
    text-align: left;
    color: #ffffff;
    text-shadow: 0 0 2px #333;
    transition: all 0.3s;
    z-index: 2;
  }

  .btn-group {
    width: sizem(303 + 8);
    top: sizem(396);
    right: sizem(33);
    z-index: 2;

    .btn {
      width: sizem(151);
      height: sizem(35);
      border: solid 2px #fff;
      border-radius: 20px / 20px;
      cursor: pointer;
      font-size: sizem(16);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.69;
      letter-spacing: sizem(1.76);
      text-align: center;
      color: #fff;
      transition: all 0.3s;

      &:hover {
        background-color: #fff;
        border-color: #fff;
        color: #af8680;
      }
    }
  }

  /* Swipe */
  .swipe {
    width: sizem(375);
    height: sizem(750);
    min-height: sizem(750);
    top: sizem(0);
    left: sizem(0);
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
      height: sizem(750);
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
      box-shadow: 0 0 0 1px #bd2b27;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #bd2b27;
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
          width: 100%;
          height: 100%;
          display: block;
          background: #bd2b27;
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
    height: 100%;
    padding: 0 15px;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: sizem(15);
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section62',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: isMobile ? require('./mo/6/透天的1.jpg') : require('./s6/透天的1.jpg'),
          mode: 'light',
          // name: '崑山科技大學',
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
