<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        v-lazy="require('./s12/bg.jpg')"
        alt=""
        class="bg-img"
      >
      <div
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Human scale
      </div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        - 人性尺度 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="700"
        data-aos-offset="-500"
      >

        空間大一點 用心多一點<br />生活不止好一點點
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="900"
        data-aos-offset="-500"
      >
        豐郡建設回歸人性尺度，拒絕因應市場潮流，限縮生活空間，只為多隔一房，無論兩房、三房均規劃獨立廚房，大展廚藝不必擔心油煙問題；<br /><br />貼心規劃前後陽台，客廳前陽台可作為蒔花弄草的空間，另有獨立工作陽台，洗曬衣物，不必擔心隱私的困擾。
      </div>
    </div>
    <div
      v-else
      class="relative"
    >
      <img
        v-lazy="require('./mo/12/bg.jpg')"
        alt=""
        class="bg-img"
      >
      <div
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Human scale
      </div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        - 人性尺度 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="700"
      >

        空間大一點 用心多一點<br />生活不止好一點點
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        豐郡建設回歸人性尺度，拒絕因應市場潮流，限縮生活空間，只為多隔一房，無論兩房、三房均規劃獨立廚房，大展廚藝不必擔心油煙問題；<br /><br />貼心規劃前後陽台，客廳前陽台可作為蒔花弄草的空間，另有獨立工作陽台，洗曬衣物，不必擔心隱私的困擾。
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
.bg-img {
  width: 100vw;
  height: 100vh;
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
  left: size(248);
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
    background-color: #312219;
  }

  &::after {
    content: '';
    display: block;
    width: 2000px;
    height: 3px;
    margin-left: size(20);
    margin-top: -15px;
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
  left: size(251);
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
  top: size(278);
  left: size(258);
}

.img-desc {
  font-size: size(20);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: 1.2px;
  text-align:justify;
  color: #231815;
  top: size(417);
  left: size(258);
  width: size(390);
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
      // background-color: #fff;
    }

    &::after {
      content: '';
      display: block;
      width: 2000px;
      height: 2px;
      margin-top: -2px;
      margin-left: size-m(20);
      // background-color: #fff;
    }
  }

  .desc {
    font-size: size-m(17);
    top: size-m(69);
    left: size-m(30);
  }

  .img-title {
    width: size-m(236);
    font-size: size-m(18);
    top: size-m(120);
    left: size-m(30);
  }

  .img-desc {
    width: size-m(300);
    font-size: size-m(13);
    top: size-m(185);
    left: size-m(30);
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
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
