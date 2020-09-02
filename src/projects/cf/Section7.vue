<template>
  <div>
    <div :class="`section7`">
      <img
        src="./s7/bg.jpg"
        alt=""
        class="bg-img"
        v-if="isPC"
      >
      <img
        src="./mo/7/bg.jpg"
        alt=""
        class="bg-img"
        v-if="isMobile"
      >
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
        v-if="slideIndex === 0"
      >三位一體和諧釋放<br />人、環境、建築
      </h3>
      <h3
        :class="`title absolute`"
        data-aos="fade-right"
        data-aos-delay="400"
        v-if="slideIndex === 1"
      >全齡適居的友善空間<br />為0到101歲設計
      </h3>
      <div
        :class="`hr absolute`"
        data-aos="zoom-in-right"
        data-aos-delay="600"
      ></div>
      <div class="subtitle absolute">榮耀業績</div>
      <div
        :class="`desc absolute`"
        data-aos="fade-right"
        data-aos-delay="800"
        v-if="slideIndex == 0"
      >
        <li class="flex-at">
          <span class="label">2008</span>
          <div class="content">建築園冶獎 /欣億建設-富甲官田</div>
        </li>
        <li class="flex-at">
          <span class="label">2012</span>
          <div class="content">建築園冶獎-優質大樓景觀 /富立建設-和鄉曲<br />
            建築園冶獎-優質大樓景觀 /泰嘉建設-水丰景<br />
            建築園冶獎-優質大樓景觀 /泰嘉建設-水山硯
          </div>
        </li>
        <li class="flex-at">
          <span class="label">2013</span>
          <div class="content">建築園冶獎-大樓建築景觀 /泰嘉建設-水舞間</div>
        </li>
        <li class="flex-at">
          <span class="label">2014</span>
          <div class="content">國家卓越建設獎 /富立建設-耘非凡</div>
        </li>
        <li class="flex-at">
          <span class="label">2015</span>
          <div class="content">國家建築金獎 /歸仁陶喜<br />
            國家卓越建設獎/卓越獎/最佳規劃設計類/住宅類<br />
            國家卓越建設獎/金質獎/最佳施工品質類/住宅類<br />
            建築園冶獎-透天建築景觀類推薦獎 /富立建設-禾雅內<br />
            建築園冶獎-透天建築景觀類建築園冶獎/國城建設-高雄小城三期<br />
            建築園冶獎-透天建築景觀類建築園冶獎/國城建設-高雄小城四期</div>
        </li>
        <li class="flex-at">
          <span class="label">2017</span>
          <div class="content">
            建築園冶獎-大樓建築景觀類建築園冶獎/和逸建設-水舞紀<br />
            國家卓越建設獎/卓越獎/最佳管理維護類/富立建設-和鄉曲<br />
            國家卓越建設獎/優質獎/最佳規劃設計類/和逸建設-水舞紀
          </div>
        </li>
      </div>
      <div
        :class="`desc absolute`"
        data-aos="fade-right"
        data-aos-delay="800"
        v-if="slideIndex == 1"
      >
        <li class="flex-at">
          <span class="label">2013</span>
          <div class="content">
            新竹春福建設 新竹 竹港段(Hi young)集合住宅 公設與景觀<br />
            新竹春福建設 新竹 新興段(若隱)集合住宅 公設與景觀<br />
            新竹 春福建設 竹港段集合住宅公設景觀設計<br />
            新竹春福建設 台南 永康段(漾煙波)集合住宅 公設與景觀<br />
            台中 大日建設 中科段挑高套房室內與公共空間設計
          </div>
        </li>
        <li class="flex-at mb-20">
          <span class="label">2015</span>
          <div class="content">
            新竹春福建設 台南 仁和段(煙漾四季)集合住宅 公設<br />
            新竹春福建設 新竹 西濱段集合住宅 公設與景觀
          </div>
        </li>
        <li class="flex-at">
          <span class="label">商業空間</span>
        </li>
        <li class="flex-at">
          <div class="content">
            竹北 泰式風味餐廳<br />
            羅東 泰式SPA按摩生活館<br />
            Lollipops專櫃 台中衣蝶 嘉義耐斯松屋<br />
            台中 佳美食品公司辦公室 <br />
            法國童裝 DESPETITS 旗艦店<br />
            完美主義美容事業 台北忠孝店 新竹店 台中進化北路店 <br />
            揚州 香格里拉私人會所<br />
            蘇州可瑞森 糖果貓品牌常州旗艦店
          </div>
        </li>
      </div>
      <div
        class="button absolute"
        v-if="isMobile"
        @click="showDialog(slideIndex)"
      ></div>
      <div
        class="dialog flex-c"
        v-show="isDialog"
      >
        <img
          class="close"
          @click="isDialog = false"
          src="./all/close.png"
          alt="close"
        >
        <div class="dialog-content">
          <div class="dialog-title">
            榮耀業績
          </div>
          <div
            :class="`dialog-desc absolute`"
            data-aos="fade-right"
            data-aos-delay="800"
            v-if="dialogIndex == 0"
          >
            <li class="flex-at wrap">
              <span class="label">2008</span>
              <div class="content">建築園冶獎 /欣億建設-富甲官田</div>
            </li>
            <li class="flex-at wrap">
              <span class="label">2012</span>
              <div class="content">建築園冶獎-優質大樓景觀 /富立建設-和鄉曲<br />
                建築園冶獎-優質大樓景觀 /泰嘉建設-水丰景<br />
                建築園冶獎-優質大樓景觀 /泰嘉建設-水山硯
              </div>
            </li>
            <li class="flex-at wrap">
              <span class="label">2013</span>
              <div class="content">建築園冶獎-大樓建築景觀 /泰嘉建設-水舞間</div>
            </li>
            <li class="flex-at wrap">
              <span class="label">2014</span>
              <div class="content">國家卓越建設獎 /富立建設-耘非凡</div>
            </li>
            <li class="flex-at wrap">
              <span class="label">2015</span>
              <div class="content">國家建築金獎 /歸仁陶喜<br />
                國家卓越建設獎/卓越獎/最佳規劃設計類/住宅類<br />
                國家卓越建設獎/金質獎/最佳施工品質類/住宅類<br />
                建築園冶獎-透天建築景觀類推薦獎 /富立建設-禾雅內<br />
                建築園冶獎-透天建築景觀類建築園冶獎/國城建設-高雄小城三期<br />
                建築園冶獎-透天建築景觀類建築園冶獎/國城建設-高雄小城四期</div>
            </li>
            <li class="flex-at wrap">
              <span class="label">2017</span>
              <div class="content">
                建築園冶獎-大樓建築景觀類建築園冶獎/和逸建設-水舞紀<br />
                國家卓越建設獎/卓越獎/最佳管理維護類/富立建設-和鄉曲<br />
                國家卓越建設獎/優質獎/最佳規劃設計類/和逸建設-水舞紀
              </div>
            </li>
          </div>
          <div
            :class="`dialog-desc absolute`"
            data-aos="fade-right"
            data-aos-delay="800"
            v-if="dialogIndex == 1"
          >
            <li class="flex-at wrap">
              <span class="label">2013</span>
              <div class="content">
                新竹春福建設 新竹 竹港段(Hi young)集合住宅 公設與景觀<br />
                新竹春福建設 新竹 新興段(若隱)集合住宅 公設與景觀<br />
                新竹 春福建設 竹港段集合住宅公設景觀設計<br />
                新竹春福建設 台南 永康段(漾煙波)集合住宅 公設與景觀<br />
                台中 大日建設 中科段挑高套房室內與公共空間設計
              </div>
            </li>
            <li class="flex-at wrap mb-20">
              <span class="label">2015</span>
              <div class="content">
                新竹春福建設 台南 仁和段(煙漾四季)集合住宅 公設<br />
                新竹春福建設 新竹 西濱段集合住宅 公設與景觀
              </div>
            </li>
            <li class="flex-at wrap">
              <span class="label">商業空間</span>
              <div class="content">
                竹北 泰式風味餐廳<br />
                羅東 泰式SPA按摩生活館<br />
                Lollipops專櫃 台中衣蝶 嘉義耐斯松屋<br />
                台中 佳美食品公司辦公室 <br />
                法國童裝 DESPETITS 旗艦店<br />
                完美主義美容事業 台北忠孝店 新竹店 台中進化北路店 <br />
                揚州 香格里拉私人會所<br />
                蘇州可瑞森 糖果貓品牌常州旗艦店
              </div>
            </li>
          </div>
        </div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: size(1920);
  height: 100vh;
  min-height: 900px;
  background-size: cover;
  background-attachment: fixed;
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

.title {
  writing-mode: vertical-lr;
  text-orientation: upright;
  top: size(123);
  left: size(203);
  font-size: size(54);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: size(7.02);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  top: size(127);
  right: size(613);
  font-size: size(26);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.98;
  letter-spacing: 0.52px;
  text-align: left;
  color: #ffffff;
}

.hr {
  width: 2px;
  height: size(525);
  top: size(143);
  right: size(816);
  background-color: #fff;
  z-index: 2;
  transition: all 0.3s;
}

.desc {
  width: size(482);
  top: size(204);
  right: size(235);
  font-size: size(16);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: size(1.5);
  text-align: left;
  color: #ffffff;
  transition: all 0.3s;
  white-space: nowrap;
  z-index: 2;
  li {
    margin-bottom: 20px;
  }

  .label {
    display: inline-block;
    margin-right: 10px;
  }
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

/* Swipe */
.swipe {
  width: size(612);
  height: size(530);
  min-height: size(530);
  top: size(136);
  left: size(398);
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
  .section7 {
    width: 100vw;
    height: sizem(747);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .bg-img {
    height: sizem(747);
    min-height: auto;
  }

  .desc {
    display: none;
  }

  .title {
    writing-mode: initial;
    text-orientation: upright;
    top: sizem(20);
    left: sizem(33);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(3.25);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle {
    top: sizem(590);
    left: sizem(33);
    right: auto;
    font-size: sizem(26);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.98;
    letter-spacing: 0.52px;
    text-align: left;
    color: #ffffff;
  }

  .hr {
    display: none;
  }

  .button {
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    width: 32px;
    height: 32px;
    top: sizem(625);
    left: sizem(155);
    color: #707070;
    z-index: 6;
    &:before {
      content: '';
      background: currentColor;
      width: 6%;
      height: 60%;
      position: absolute;
      top: 20%;
      left: 47%;
    }
    &:after {
      content: '';
      background: currentColor;
      width: 60%;
      height: 6%;
      position: absolute;
      top: 47%;
      left: 20%;
    }
  }

  .dialog {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: scroll;

    .close {
      width: 35px;
      // background: rgba(0, 0, 0, 0.7);
      padding: 5px;
      position: fixed;
      right: 0px;
      top: 0px;
    }

    .dialog-content {
      width: sizem(340);
      height: 90vh;
      background-color: #fff;
      border-radius: 15px;
      padding: sizem(15) sizem(15);
    }

    .dialog-title {
      font-size: sizem(26);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 3.98;
      letter-spacing: sizem(0.52);
      text-align: left;
      color: #000000;
    }

    .dialog-desc {
      width: sizem(310);
      font-size: sizem(12);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: sizem(1.5);
      text-align: left;
      color: #000;
      transition: all 0.3s;
      z-index: 2;
      li {
        margin-bottom: 20px;
      }

      .label {
        display: inline-block;
        width: 100%;
        margin-right: 10px;
      }
    }
  }

  /* Swipe */
  .swipe {
    width: sizem(305);
    height: sizem(357);
    min-height: sizem(203);
    top: sizem(116);
    left: sizem(33);
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
      width: sizem(305);
      height: auto;
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
    padding: 0 10px;
    top: 0;
    left: 0;
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
  name: 'section7',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      dialogIndex: 0,
      slideList: [
        {
          img: isMobile ? require('./mo/7/1.png') : require('./s7/1.png'),
          // name: '成功大學',
        },
        {
          img: isMobile ? require('./mo/7/2.png') : require('./s7/2.png'),
          // name: '崑山科技大學',
        },
      ],
    }
  },

  methods: {
    showDialog(index) {
      this.isDialog = true
      this.dialogIndex = index
    }
  },

  created() {},

  mounted() {},

  computed: {},
}
</script>
