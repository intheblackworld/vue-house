<template>
  <div
    class="relative"
    v-touch:swipe.left="decIndex"
    v-touch:swipe.right="addIndex"
  >
    <div v-if="!isMobile">
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
        data-aos-offset="-600"
      >
        Beautiful pattern
      </div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-offset="-600"
      >
        - 豐美格局 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="700"
        data-aos-offset="-600"
      >

        採光通風 大面開窗<br />讓您住一輩子的好房子
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="900"
        data-aos-offset="-600"
      >
        戶戶雙面採光、無暗房，客廳大面開窗，<br />
        享有空氣流通、自然光線流瀉；<br />
        室內無柱、格局開闊，空間自由揮灑，<br />
        可依人生不同階段彈性規劃，不必頻頻換屋。
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
        - 豐美格局 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="700"
      >

        採光通風 大面開窗<br />讓您住一輩子的好房子
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        戶戶雙面採光、無暗房，客廳大面開窗，<br />
        享有空氣流通、自然光線流瀉；<br />
        室內無柱、格局開闊，空間自由揮灑，<br />
        可依人生不同階段彈性規劃，不必頻頻換屋。
      </div>
      <div
        class="img-slide"
        v-touch:swipe.left="decIndex"
        v-touch:swipe.right="addIndex"
      >
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
  left: size(1081);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;

  &::before {
    content: '';
    display: block;
    width: size(1081);
    left: size(-1101);
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
    margin-top: -10px;
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
  left: size(1084);
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
  top: size(756);
  right: size(211);
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
  top: size(888);
  right: size(134);
  z-index: 2;
}

.mask {
  width: size(772);
  height: size(440);
  background: linear-gradient(to left top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 1;
  right: 0;
  bottom: 0;
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
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section11',

  components: {},
  data() {
    return {
      isMobile,
      slideIndex: 0,
      img_list: [
        require('./s11/1.jpg'),
        require('./s11/2.jpg'),
        require('./s11/3.jpg'),
        require('./s11/4.jpg'),
        require('./s11/5.jpg'),
        require('./s11/6.jpg'),
        require('./s11/7.jpg'),
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
    setInterval(() => {
      if (this.slideIndex === 5) {
        this.slideIndex = 0
      } else {
        this.slideIndex = this.slideIndex + 1
      }
    }, 3000)
  },

  computed: {},
}
</script>
