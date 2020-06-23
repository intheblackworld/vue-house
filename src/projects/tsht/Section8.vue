<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s8/8pic.png"
        :class="`item-img absolute`"
      />
      <div class="content absolute">
        <h3 class="subtitle">【城堡，要用最好的打造】</h3>
        <h3 class="title">日本制震第一品牌 住友橡膠GRAST制震</h3>
        <h3 class="desc">為了讓居住者更舒適、更愜意，聯上一心一意打造最頂級的建材，特別使用氣密窗，讓人可以寧靜地俯瞰最美的海景，層層保障結構物的安全，當地唯一使用制震器，並申請結構外審等等，卓越超越卓越，永遠追求更完美。</h3>
        <div
          class="dropdown"
          data-aos="fade"
          data-aos-delay="600"
        >
          <div
            :class="`item ${item.open ? 'open' : ''}`"
            v-for="(item, index) in toggleList"
            :key="item.title"
          >
              <!-- @click="toggle(index)" -->
            <h3
              class="head flex-jb flex-ac"
            >
              <div>{{item.title}}</div>
              <img
                v-if="!item.open"
                src="./mo/plus.png"
                alt
                class="btn"
              />
              <img
                v-if="item.open"
                src="./mo/minus.png"
                alt
                class="btn"
              />
            </h3>
            <div
              class="item-desc"
              v-html="item.desc"
            ></div>
          </div>
        </div>
      </div>
      <div class="item-border absolute"></div>
      <div class="flex animate-row">
        <img
          src="./s8/wave.png"
          alt=""
          class="wave"
        >
        <img
          src="./s8/wave.png"
          alt=""
          class="wave"
        >
      </div>
      <div class="flex animate-row animate-row1">
        <img
          src="./s8/wave.png"
          alt=""
          class="wave"
        >
        <img
          src="./s8/wave.png"
          alt=""
          class="wave"
        >
      </div>
      <div class="flex animate-row animate-row2">
        <img
          src="./s2/wave_l.png"
          alt=""
          class="wave"
        >
        <img
          src="./s2/wave_l.png"
          alt=""
          class="wave"
        >
      </div>
    </div>
    <div v-if="isMobile">
      <img
        src="./mo/3/bg.jpg"
        alt=""
        class="bg-img"
      >
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="200"
        class="slide-container absolute"
        @slideChangeTransitionEnd="slideChanged"
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.img"
          class="absolute"
        >
          <img
            :src="slide.img"
            :class="`item-img absolute`"
          />
        </swiper-slide>
      </swiper>
      <div class="slide-content absolute">
        <transition-group
          name="slide-fade"
          mode="out-in"
        >
          <div
            v-show="slideIndex === index"
            v-for="(slide, index) in slideList"
            :key="slide.img +index + 'content'"
          >
            <h3
              class="item-title"
              v-html="slide.title"
            ></h3>
            <h3
              class="item-subtitle"
              v-html="slide.subtitle"
            ></h3>
            <h3
              class="item-desc"
              v-html="slide.desc"
            ></h3>
          </div>
        </transition-group>
      </div>
      <div
        class="dialog"
        v-show="isDialog"
      >
        <div class="dialog-content">
          <img
            class="close"
            @click="isDialog = false"
            src="./mo/close.png"
            alt=""
          >
          <transition-group
            name="slide-fade"
            mode="out-in"
          >
            <div
              class="slide-content absolute"
              v-show="slideIndex === index"
              v-for="(slide, index) in slideList"
              :key="slide.img"
            >
              <div
                class="item-title"
                v-html="slide.title"
              ></div>
              <div
                class="item-subtitle"
                v-html="slide.subtitle"
              ></div>
              <div
                class="item-desc"
                v-html="slide.desc"
              ></div>
            </div>
          </transition-group>
        </div>
      </div>
      <div class="flex animate-row">
        <img
          src="./s2/wave.png"
          alt=""
          class="wave"
        >
        <img
          src="./s2/wave.png"
          alt=""
          class="wave"
        >
      </div>
      <div class="flex animate-row animate-row2">
        <img
          src="./s2/wave_l.png"
          alt=""
          class="wave"
        >
        <img
          src="./s2/wave_l.png"
          alt=""
          class="wave"
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  position: relative;
  height: size(850);
  background: #fff;
}

.animate-row {
  width: 200vw;
  animation: moving 30s linear infinite;
  position: absolute;
  bottom: size(-200);

  img {
    width: 100%;
    height: size(379);

    &:nth-child(2) {
      // margin-left: -0.1%;
    }
  }
  &.animate-row1 {
    animation: moving 15s linear infinite;
  }

  &.animate-row2 {
    bottom: size(100);
    animation: moving 20s linear infinite;

    img {
      height: size(79);
    }
    // animation-delay: 5s;
  }
}

.content {
  width: size(675);
  left: size(270);
  top: size(127);

  .title {
    font-size: size(38);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.42;
    letter-spacing: normal;
    text-align: left;
    color: #595757;
    white-space: nowrap;
    transform: scaleX(0.95);
    margin-bottom: size(20);
  }

  .subtitle {
    font-size: size(24);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.42;
    letter-spacing: normal;
    text-align: left;
    color: #595757;
    transform: scaleX(0.95);
    margin-bottom: size(25);
  }

  .desc {
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.1;
    letter-spacing: 0.12px;
    text-align: left;
    color: #595757;
    transform: scaleX(0.95);
  }
}

.dropdown {
  margin-left: size(15);
  .item {
    width: 100%;
    height: 38px;
    overflow: hidden;
    padding-left: 0;
    padding-right: 0;
    border-radius: 0;
    margin-bottom: 3px;
    transition: height 0.5s;
    // cursor: pointer;

    &.open {
      height: auto;
    }
  }
  .head {
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 38px;
    letter-spacing: normal;
    text-align: left;
    color: #00a29a;
  }

  .btn {
    width: 22px;
  }

  .item-desc {
    font-size: size(10);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 0.5px;
    text-align: left;
    color: #595757;
    padding-bottom: 15px;
  }
}

.item-img {
  width: size(626);
  right: size(192);
  left: auto;
  top: size(32);
  border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
  overflow: hidden;
  animation: border-radius 8s ease infinite;
}

.item-border {
  width: size(650);
  height: size(650);
  right: size(180);
  left: auto;
  top: size(32);
  border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
  overflow: hidden;
  animation: border-radius 20s ease infinite;
  border: 1px solid #d0a100;
}

@keyframes border-radius {
  0% {
    border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
  }

  50% {
    border-radius: 40% 55% 60% 45% / 45% 50% 50% 55%;
  }

  100% {
    border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
  }
}

@keyframes moving {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0) scaleY(1);
  }
  50% {
    -webkit-transform: translateX(0);
    transform: translateX(-25%) scaleY(0.5);
  }

  to {
    -webkit-transform: translateX(-100vw);
    transform: translateX(-50%) scaleY(1);
  }
}

// begin
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // margin-top: 50px !important;
  opacity: 0;
}
// end
.slide-fade-enter {
  margin-top: 10px !important;
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .slide-content {
    left: 3vw;
    right: auto;
    margin: 0 auto;
    top: size-m(40);
    width: 90vw;
  }

  // .relative {
  //   > div {
  //     display: flex;
  //     justify-content: center;
  //   }
  // }

  .item-title {
    font-size: size-m(24);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: normal;
    text-align: left;
    color: #595757;
    transform: scaleX(0.95);
    white-space: nowrap;
    margin-bottom: size-m(11);
  }

  .item-subtitle {
    font-size: size-m(12);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 1.05px;
    text-align: left;
    color: #007eca;
    transform: scaleX(0.95);
    white-space: nowrap;
    margin-bottom: size-m(5);
  }

  .item-desc {
    font-size: size-m(12);
    height: size-m(100);
    overflow: hidden;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.1;
    letter-spacing: 0.36px;
    text-align: justify;
    color: #595757;
    transform: scaleX(0.95);
  }

  .add {
    width: size-m(20);
    // padding: 20px;
    margin-top: 10px;
    position: relative;
    z-index: 10;
  }

  .dialog {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;

    .slide-content {
      left: 0;
    }

    .dialog-content {
      background-color: #fff;
      width: size-m(313);
      height: size-m(516);
      position: relative;

      .item-title,
      .item-subtitle,
      .item-desc {
        white-space: normal;
        width: 90%;
        height: auto;
      }
    }

    .close {
      width: 16px;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }

  .item-img {
    width: size-m(256);
    right: 0;
    left: 0;
    margin: 0 auto;
    top: size-m(266);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section8',
  data() {
    return {
      isMobile,
      toggleIndex: 0,
      toggleList: [
        {
          title: '隔震與制震的差別',
          desc:
            '隔震建築與地面之間隔著一層特殊材料，藉由建物與地面隔離，進而達到近乎免除搖晃震動的效果。<br />制震則是在建物各樓層間加類似的吸震材料或裝置，將地震產生的能量吸收並轉換成其他的能量，進而舒緩地震發生當下，對建築物結構的破壞，及適度保護建築物內的生命與財產安全，降低建物內人員可能感到的不舒適與恐懼情況。',
          open: true,
        },
        {
          title: '制震可應用在各式各樣的建築構造',
          desc:
            '．大樓用制震壁─不僅超高層大樓，中小規模或既有大樓的修復工程也可以使用，GRAST可提升高層大樓舒適度。<br />．住宅用制震壁─MIRAIE能減輕對房屋損害。<br />．橋樑鋼纜用阻尼器─橋樑鋼纜用阻尼器能防止強風及地震造成的搖晃，使橋樑更加安全。',
          open: false,
        },
        {
          title: '制震的優勢',
          desc:
            '．降低地震和風引起的搖晃提升使用者舒適度<br />．衰減重複的搖晃頻率，縮短振幅的時程．不須保養<br />．制震壁不佔面積，可增加使用空間',
          open: false,
        },
        {
          title: '安全是聯上的基礎  安心是聯上的本質',
          desc:
            '住友橡膠GRAST制震壁通過與實物同等大小之試驗確認有關阻尼器之各種性能，並與2012年3月取得有關阻尼器的性能、分析性之「建築技術性能證明」。<br />．大小地震和風引起的搖晃，皆有效．免除維修的困擾<br />．優越的耐候及耐久特性<br />．日本國寶級古蹟採用，榮獲日經雜誌肯定',
          open: false,
        },
      ],
    }
  },

  methods: {
    toggle(index) {
      if (this.toggleList[index].open) {
        this.toggleList[index].open = false
      } else {
        this.toggleList.forEach(item => (item.open = false))
        this.toggleList[index].open = !this.toggleList[index].open
      }
    },
  },

  created() {},

  mounted() {
    setInterval(() => {
      if (this.toggleIndex >= this.toggleList.length - 1) {
        this.toggleIndex = 0
      } else {
        this.toggleIndex = this.toggleIndex + 1
      }
      this.toggle(this.toggleIndex)
    }, 5000)
  },

  computed: {},
}
</script>
