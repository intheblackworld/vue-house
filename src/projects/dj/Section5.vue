<template>
  <div class="relative">
    <div v-if="!isMobile">
      <div
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        American Street
      </div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        - 美式街廓 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="600"
      >
        低密度開發重劃區 衣食育樂<br />機能一次到位
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        大竹重劃區因交通優勢，發展迅速，商家林立<br />
        有麥當勞、康是美、全聯等知名連鎖店進駐<br />
        亦有郵局、圖書館、市民運動中心…<br />
        7-11便利商店近在咫尺，生活機能優越。
      </div>
      <img
        v-lazy="require('./s5/img1.jpg')"
        alt=""
        class="img1 absolute"
        data-aos="fade-right"
        data-aos-delay="1000"
      >
      <div class="img-slide">
        <img
          v-for="(src, index) in img_list"
          :key="src"
          :src="src"
          alt=""
          :class="`slide-img ${index === slideIndex ? 'show' : ''}`"
        >
      </div>

    </div>
    <div
      v-else
      class="relative m-bg"
    >
      <div
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        American Street
      </div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        - 美式街廓 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="600"
      >
        低密度開發重劃區 衣食育樂<br />機能一次到位
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        大竹重劃區因交通優勢，發展迅速，商家林立<br />
        有麥當勞、康是美、全聯等知名連鎖店進駐<br />
        亦有郵局、圖書館、市民運動中心…<br />
        7-11便利商店近在咫尺，生活機能優越。
      </div>
      <img
        v-lazy="require('./s5/img1.jpg')"
        alt=""
        class="img absolute"
        data-aos="fade"
        data-aos-delay="1000"
      >
      <div
        class="img-slide"
        data-aos="fade"
        data-aos-delay="800"
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
  height: calc(100vh - 80px);
  overflow: hidden;
  background-color: #fff;
}
.bg-img {
  width: 100vw;
 // height: 100vh;
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
  font-family: TrajanPro;
  font-size: size(60);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: -2.37px;
  text-align: left;
  color: #808080;
  top: size(72);
  left: size(1100);
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;

  &::after {
    content: '';
    display: block;
    width: 2000px;
    height: 3px;
    margin-left: size(20);
    margin-top: -10px;
    background-color: #312219;
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
  color: #231815;
  top: size(145);
  right: size(570);
}

.img-title {
  font-size: size(35);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: normal;
  text-align: left;
  color: #231815;
  top: size(281);
  right: size(314);
}

.img-desc {
  font-size: size(20);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: 1.2px;
  text-align: left;
  color: #231815;
  top: size(413);
  right: size(310);
}
.img1 {
  width: size(1040);
  height: size(1080);
  object-fit: cover;
  top: 0;
  left: 0;
}

.img-slide {
  position: absolute;
  width: size(545);
  height: size(370);
  top: size(606);
  right: size(213);
}
.slide-img {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.3s;
  &.show {
    opacity: 1;
  }
}

// .img2 {
//   height: size(1080);
//   top: 0;
//   right: 0;
// }
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
  .relative {
    height: auto;
  }
  .m-bg {
    height: size-m(772);
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
      left: size-m(-61);
      position: absolute;
      height: 2px;
      background-color: #312219;
    }

    &::after {
      content: '';
      display: block;
      width: 2000px;
      height: 2px;
      margin-left: size-m(20);
      background-color: #312219;
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

  .img-slide {
    position: absolute;
    width: size-m(313);
    height: size-m(213);
    top: size-m(280);
    left: size-m(30);
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
  name: 'section5',

  components: {},
  data() {
    return {
      isMobile,
      slideIndex: 1,
      img_list: [
        require('./s5/img2-1.jpg'),
        require('./s5/img2-2.jpg'),
        require('./s5/img2-3.jpg'),
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {
    setInterval(() => {
      if (this.slideIndex === 2) {
        this.slideIndex = 0
      } else {
        this.slideIndex = this.slideIndex + 1
      }
    }, 3000)
  },

  computed: {},
}
</script>
