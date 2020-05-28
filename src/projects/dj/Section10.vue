<template>
  <div class="relative">
    <div v-if="!isMobile">
      <div class="arrows flex flex-jb">
        <div
          class="arrow-left"
          @click="decIndex"
        ></div>
        <div
          class="arrow-right"
          @click="addIndex"
        ></div>
      </div>
      <img
        v-for="(src, index) in img_list"
        :key="src"
        :src="src"
        alt=""
        :class="`slide-img ${index === slideIndex ? 'show' : ''}`"
      >
      <div
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Large scale
      </div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        - 大器尺度 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="700"
      >

        挑高迎賓門廳 飯店式休閒公設<br />限量典藏70席
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="900"
        data-aos-offset="-150"
      >
        經典雋永的建築外觀，搭配挑高迎賓大廳，精緻且實用的公共空間規劃，<br />打造咖啡吧、閱覽室、健身房，透過動靜美學，展現生活品味。
      </div>
      <div class="mask absolute"></div>
    </div>
    <div
      v-else
      class="relative m-bg"
    >
      <img
        v-lazy="require('./mo/10/2bg.jpg')"
        alt=""
        class="bg-img"
      >
      <div
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Beautiful pattern
      </div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        - 大器尺度 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="700"
      >

        挑高迎賓門廳 飯店式休閒公設<br />限量典藏70席
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        經典雋永的建築外觀，搭配挑高迎賓大廳，<br />
        精緻且實用的公共空間規劃，<br />
        打造咖啡吧、閱覽室、健身房，<br />
        透過動靜美學，展現生活品味。
      </div>
      <div class="img-slide">
        <div class="arrows flex flex-jb">
          <div
            class="arrow-left"
            @click="decIndex"
          ></div>
          <div
            class="arrow-right"
            @click="addIndex"
          ></div>
        </div>
        <img
          v-for="(src, index) in img_list"
          :key="src"
          :src="src"
          alt=""
          :class="`slide-img ${index === slideIndex ? 'show' : ''}`"
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
}
img {
  pointer-events: none;
}
.bg-img {
  width: 100vw;
  height: size(1080);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}
.slide-img {
  width: 100vw;
  height: size(1080);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.3s;
  object-fit: cover;
  &.show {
    position: relative;
    opacity: 1;
  }
}
.title {
  font-family: TrajanPro;
  font-size: size(60);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: -2.37px;
  text-align: left;
  color: #fff;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  top: size(72);
  left: size(248);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;

  &::before {
    content: '';
    display: block;
    width: size(248);
    left: size(-268);
    position: absolute;
    height: 3px;
    margin-top: -5px;
    background-color: #fff;
  }

  &::after {
    content: '';
    display: block;
    width: 2000px;
    height: 3px;
    margin-left: size(20);
    margin-top: -15px;
    background-color: #fff;
  }
}

.desc {
  font-size: size(44);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: 1.76px;
  text-align: left;
  color: #fff;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  top: size(145);
  left: size(251);
  z-index: 2;
}

.img-title {
  font-size: size(35);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  top: size(259);
  left: size(254);
  z-index: 2;
}

.img-desc {
  font-size: size(20);
  font-weight: 200;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: 1.2px;
  text-align: left;
  color: #fff;
  top: size(396);
  left: size(254);
  z-index: 2;
}

.mask {
  width: size(1123);
  height: size(536);
  background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  z-index: 1;
  top: 0;
  left: 0;
}

.arrows {
  position: absolute;
  z-index: 3;
  width: 100vw;
  height: 100%;
  left: 0;
  padding-right: 15px;
  .arrow-left,
  .arrow-right {
    border: 0px none #0000 !important;
    width: size(50);
    height: 100%;
    top: 0;
    padding: 0 size(10);
    display: flex;
    align-items: center;
    margin: 0;
    z-index: 3;
    cursor: pointer;
    &::before {
      width: 1em;
      height: 2em;
      display: block;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.28 28.67' preserveAspectRatio='xMidyMid' fill='%23fff'%3E%3Cpolygon points='14.33 28.67 16.28 26.72 3.79 14.23 16.18 1.84 14.33 0 0 14.33 14.33 28.67'/%3E%3C/svg%3E")
        no-repeat center center;
      content: '';
      background-size: contain;
    }
  }

  .arrow-left {
    left: 0;
  }
  .arrow-right {
    transform: rotate(180deg);
    right: 15px;
  }
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
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
  .m-bg {
    height: size-m(615);
  }
  .bg-img {
    height: auto;
    object-fit: cover;
  }

  .title {
    font-size: size-m(26);
    top: size-m(36);
    left: size-m(30);

    &::before {
      content: '';
      display: block;
      width: size-m(51);
      left: size-m(-65);
      position: absolute;
      margin-top: -2px;
      height: 2px;
      background-color: #fff;
    }

    &::after {
      content: '';
      display: block;
      width: 2000px;
      height: 2px;
      margin-top: -2px;
      margin-left: size-m(20);
      background-color: #fff;
    }
  }

  .desc {
    font-size: size-m(17);
    top: size-m(69);
    left: size-m(30);
  }

  .img-title {
    width: size-m(270);
    font-size: size-m(18);
    top: size-m(125);
    left: size-m(30);
  }

  .img-desc {
    width: size-m(321);
    font-size: size-m(13);
    top: size-m(190);
    left: size-m(30);
  }
  .slide-img {
    width: 100%;
    height: size-m(283);
  }

  .img-slide {
    position: absolute;
    width: 100vw;
    height: size-m(282);
    bottom: 0;
    left: 0;
  }

  .img {
    width: 100vw;
    height: size-m(243);
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .arrows {
    padding-right: 0;
    .arrow-left,
    .arrow-right {
      width: auto;
      height: 100%;
      padding: 0 size-m(5);
      cursor: none;
      &::before {
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.28 28.67' preserveAspectRatio='xMidyMid' fill='%23666'%3E%3Cpolygon points='14.33 28.67 16.28 26.72 3.79 14.23 16.18 1.84 14.33 0 0 14.33 14.33 28.67'/%3E%3C/svg%3E")
          no-repeat center center;
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section10',

  components: {},
  data() {
    return {
      isMobile,
      slideIndex: 0,
      img_list: [
        require('./s10/1.jpg'),
        require('./s10/2.jpg'),
        require('./s10/3.jpg'),
        require('./s10/4.jpg'),
        require('./s10/5.jpg'),
      ],
    }
  },

  methods: {
    decIndex() {
      if (this.slideIndex === 0) {
        this.slideIndex = this.img_list.length - 1
      } else {
        this.slideIndex = this.slideIndex - 1
      }
    },

    addIndex() {
      if (this.slideIndex === this.img_list.length - 1) {
        this.slideIndex = 1
      } else {
        this.slideIndex++
      }
    },
  },

  created() {},

  mounted() {
    // setInterval(() => {
    //   if (this.slideIndex === 5) {
    //     this.slideIndex = 0
    //   } else {
    //     this.slideIndex = this.slideIndex + 1
    //   }
    // }, 3000)
  },

  computed: {},
}
</script>
